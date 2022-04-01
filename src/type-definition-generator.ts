import type {
    GenerateConfig,
    InheritanceTable,
    GirClassElement,
    GirCallableParamElement,
    GirFunctionElement,
    GirCallbackElement,
    GirConstructorElement,
    GirSignalElement,
    GirPropertyElement,
    GirFieldElement,
    GirConstantElement,
    GirEnumElement,
    GirMemberElement,
    GirAliasElement,
    GirInterfaceElement,
    GirUnionElement,
    GirModulesGrouped,
    GirMethodElement,
    GirRecordElement,
    GirVirtualMethodElement,
    GirBitfieldElement,
    GirInstanceParameter,
    GirDocElement,
} from './types/index.js'
import { Generator } from './generator.js'
import type { GirModule } from './gir-module.js'
import TemplateProcessor from './template-processor.js'
import { Environment } from './types/environment.js'
import { Logger } from './logger.js'
import {
    generateIndent,
    findFileInDirs,
    splitModuleName,
    removeNamespace,
    girElementIsIntrospectable,
    inspect,
} from './utils.js'
import { STATIC_NAME_ALREADY_EXISTS } from './constants.js'
import {
    PATCH_FOR_METHOD,
    NO_TSDATA,
    WARN_NOT_FOUND_DEPENDENCY_GIR_FILE,
    WARN_IGNORE_MULTIPLE_CALLBACKS,
    WARN_IGNORE_MULTIPLE_FUNC_DESC,
} from './messages.js'

export default class TypeDefinitionGenerator implements Generator {
    protected log: Logger
    constructor(protected readonly config: GenerateConfig) {
        this.log = new Logger(config.environment, config.verbose, TypeDefinitionGenerator.name)
    }

    /**
     *
     * @param namespace E.g. 'Gtk'
     * @param packageName E.g. 'Gtk-3.0'
     * @param asExternType Currently only used for node type imports
     */
    private generateModuleDependenciesImport(namespace: string, packageName: string, asExternType = false): string[] {
        const def: string[] = []
        if (this.config.buildType === 'lib') {
            const sas = this.config.useNamespace && packageName !== 'Gjs' ? '' : '* as '
            def.push(`import type ${sas}${namespace} from './${packageName}';`)
        } else if (this.config.buildType === 'types') {
            if (asExternType) {
                // def.push(`/// <reference types="${packageName}" />`)
                def.push(`import ${namespace} from "${packageName}"`)
            } else {
                def.push(`/// <reference path="${packageName}.d.ts" />`)
                def.push(`import type ${namespace} from './${packageName}';`)
            }
        }
        return def
    }

    private generateExport(type: string, name: string, definition: string, indentCount = 0) {
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        const indent = generateIndent(indentCount)
        if (!definition.startsWith(':')) {
            definition = ' ' + definition
        }
        return `${indent}${exp}${type} ${name}${definition}`
    }

    private generateProperty(girProp: GirPropertyElement | GirFieldElement, namespace: string, indentCount = 0) {
        if (!girProp._tsData) {
            this.log.error('girProp', inspect(girProp))
            throw new Error('[generateProperty] Not all required properties set!')
        }

        const desc: string[] = []

        desc.push(...this.addGirDocComment(girProp, indentCount))

        const indent = generateIndent(indentCount)
        const varDesc = this.generateVariable(girProp, namespace, 0)
        const prefix = (girProp as GirPropertyElement)._tsData?.readonly ? 'readonly ' : ''

        desc.push(`${indent}${prefix}${varDesc}`)
        return desc
    }

    private generateProperties(
        girProps: Array<GirPropertyElement | GirFieldElement>,
        namespace: string,
        comment: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        if (girProps.length) def.push(...this.addInlineDebugComment(comment, indentCount))
        for (const girProp of girProps) {
            def.push(...this.generateProperty(girProp, namespace, indentCount))
        }
        return def
    }

    private generateVariableCallbackType(girField: GirFieldElement, namespace: string) {
        // The type of a callback is a functions definition

        let type = 'any'

        if (!girField._tsData) return type

        const { callbacks } = girField._tsData

        if (!callbacks.length) return type

        if (callbacks.length > 1) {
            this.log.warn(WARN_IGNORE_MULTIPLE_CALLBACKS)
        }

        const girCallback = callbacks[0]

        const funcDesc = this.generateFunction(girCallback, [], namespace, 0)

        if (girCallback._tsData && funcDesc?.length) {
            if (funcDesc.length > 1) {
                this.log.warn(WARN_IGNORE_MULTIPLE_FUNC_DESC)
            }
            type = funcDesc[0]
        }

        // TODO use suffix from GirModule.typeLookup result here?
        // if (type) {
        //     const suffix: TypeSuffix = (arr + nul) as TypeSuffix
        //     if (suffix.length) type = '(' + type + ')'
        // }

        return type
    }

    private generateVariable(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        namespace: string,
        indentCount = 0,
    ) {
        if (!girVar._tsData) {
            this.log.error('girVar', inspect(girVar))
            throw new Error(NO_TSDATA('generateVariable'))
        }

        const indent = generateIndent(indentCount)
        const { name, optional, callbacks } = girVar._tsData
        let { type } = girVar._tsData

        type = removeNamespace(type, namespace)

        if (callbacks.length) {
            type = this.generateVariableCallbackType(girVar as GirFieldElement, namespace)
        }

        if (!name) {
            throw new Error('[generateVariable] "name" not set!')
        }

        if (!type) {
            throw new Error('[generateVariable] "type" not set!')
        }

        const affix = optional ? '?' : ''

        return `${indent}${name}${affix}: ${type}`
    }

    /**
     * Generates signals from all properties of a base class
     * TODO: Build new GirSignalElements instead of generate the strings directly
     * @param girClass
     * @param callbackObjectName
     * @returns
     */
    private generateSignalMethodsFromProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (girClass._tsData?.isDerivedFromGObject) {
            let namespacePrefix = 'GObject.'
            if (namespace === 'GObject') namespacePrefix = ''
            for (const prop of girClass._tsData.propertyNames) {
                def.push(...this.generateGObjectSignalMethods(prop, girClass._tsData.name, namespacePrefix))
            }
            def.push(...this.generateGeneralSignalMethods(this.config.environment))
        }
        return def
    }

    private generateInParameters(
        inParams: GirCallableParamElement[],
        instanceParameters: GirInstanceParameter[],
        namespace: string,
    ) {
        const inParamsDef: string[] = []

        // TODO: Should use of a constructor, and even of an instance, be discouraged?
        for (const instanceParameter of instanceParameters) {
            if (instanceParameter._tsData) {
                let { structFor } = instanceParameter._tsData
                const { name } = instanceParameter._tsData
                const gobject = namespace === 'GObject' || namespace === 'GLib' ? '' : 'GObject.'

                structFor = removeNamespace(structFor, namespace)

                const returnTypes = [structFor, 'Function', `${gobject}GType`]
                inParamsDef.push(`${name}: ${returnTypes.join(' | ')}`)
            }
        }

        for (const inParam of inParams) {
            inParamsDef.push(...this.generateParameter(inParam, namespace))
        }

        return inParamsDef
    }

    private generateSignal(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        if (!girSignalFunc._tsData || !girClass._tsData) {
            this.log.warn(NO_TSDATA('generateSignal'))
            return def
        }

        def.push(...this.addGirDocComment(girSignalFunc, indentCount))

        const { name: sigName, inParams, instanceParameters } = girSignalFunc._tsData
        const { name: className } = girClass._tsData
        const returnType = removeNamespace(girSignalFunc._tsData.returnType, namespace)
        const paramComma = inParams.length > 0 ? ', ' : ''
        const indent = generateIndent(indentCount)
        const objParam = this.config.environment === 'node' ? '' : `$obj: ${className}${paramComma}`
        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(
            `${indent}connect(sigName: "${sigName}", callback: ((${objParam}${inParamsDef.join(
                ', ',
            )}) => ${returnType})): number`,
        )
        if (this.config.environment === 'gjs') {
            def.push(
                `${indent}connect_after(sigName: "${sigName}", callback: ((${objParam}${inParamsDef.join(
                    ', ',
                )}) => ${returnType})): number`,
            )
        }
        if (this.config.environment === 'node') {
            def.push(
                `${indent}on(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}once(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void, after?: boolean): NodeJS.EventEmitter`,
                `${indent}off(sigName: "${sigName}", callback: (${inParamsDef.join(
                    ', ',
                )}) => void): NodeJS.EventEmitter`,
            )
        }

        def.push(`${indent}emit(sigName: "${sigName}"${paramComma}${inParamsDef.join(', ')}): void`)

        return def
    }

    private generateSignals(
        girSignals: GirSignalElement[],
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []
        for (const girSignal of girSignals) {
            def.push(...this.generateSignal(girSignal, girClass, namespace, indentCount))
        }
        return def
    }

    private generateGObjectSignalMethods(
        propertyName: string,
        callbackObjectName: string,
        namespacePrefix: string,
        indentCount = 1,
    ): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        const objParam = this.config.environment === 'node' ? '' : `$obj: ${callbackObjectName}, `
        def.push(
            `${indent}connect(sigName: "notify::${propertyName}", callback: ((${objParam}pspec: ${namespacePrefix}ParamSpec) => void)): number`,
            `${indent}connect_after(sigName: "notify::${propertyName}", callback: ((${objParam}pspec: ${namespacePrefix}ParamSpec) => void)): number`,
        )
        def.push()
        if (this.config.environment === 'node') {
            def.push(
                `${indent}on(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}once(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}off(sigName: "notify::${propertyName}", callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }

        return def
    }

    private generateGeneralSignalMethods(environment: Environment, indentCount = 1): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        def.push(
            `${indent}connect(sigName: string, callback: (...args: any[]) => void): number`,
            `${indent}connect_after(sigName: string, callback: (...args: any[]) => void): number`,
            `${indent}emit(sigName: string, ...args: any[]): void`,
            `${indent}disconnect(id: number): void`,
        )

        if (environment === 'node') {
            def.push(
                `${indent}on(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}once(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter`,
                `${indent}off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter`,
            )
        }
        return def
    }

    /**
     * Adds documentation comments
     * @see https://github.com/microsoft/tsdoc
     * @param lines
     * @param indentCount
     */
    private addTSDocCommentLines(lines: string[], indentCount = 0): string[] {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        def.push(`${indent}/**`)
        for (const line of lines) {
            def.push(`${indent} * ${line}`)
        }
        def.push(`${indent} */`)
        return def
    }

    /**
     * Adds the documentation as comments
     * @see https://github.com/microsoft/tsdoc
     * @param girDoc
     * @param indentCount
     * @returns
     */
    private addGirDocComment(girDoc: GirDocElement, indentCount = 0) {
        const desc: string[] = []
        const indent = generateIndent(indentCount)
        if (this.config.noComments) {
            return desc
        }
        if (girDoc._tsDoc?.text) {
            const text = girDoc._tsDoc?.text
            const lines = text.split('\n')
            if (!lines.length) return desc
            desc.push(`${indent}/**`)
            for (const line of lines) {
                desc.push(`${indent} * ${line}`)
            }
            for (const tag of girDoc._tsDoc.tags) {
                if (tag.paramName) {
                    desc.push(`${indent} * @${tag.tagName} ${tag.paramName} ${tag.text}`)
                } else {
                    desc.push(`${indent} * @${tag.tagName} ${tag.text}`)
                }
            }
            desc.push(`${indent} */`)
        }
        return desc
    }

    /**
     * Adds an inline comment, is used for debugging internally
     * @param comment
     * @param indentCount
     * @returns
     */
    private addInlineDebugComment(comment?: string, indentCount = 0) {
        const def: string[] = []
        if (this.config.noDebugComments) {
            return def
        }
        const indent = generateIndent(indentCount)
        if (comment) {
            def.push(`${indent}/* ${comment} */`)
        }
        return def
    }

    private mergeDescs(descs: string[], comment?: string, indentCount = 1) {
        const def: string[] = []
        const indent = generateIndent(indentCount)
        if (descs.length) def.push(...this.addInlineDebugComment(comment, indentCount))

        for (const desc of descs) {
            def.push(`${indent}${desc}`)
        }

        return def
    }

    private generateFunctions(
        girElements: Array<GirConstructorElement | GirVirtualMethodElement | GirMethodElement | GirFunctionElement>,
        namespace: string,
        indentCount = 1,
        comment?: string,
    ) {
        const def: string[] = []
        if (girElements.length) def.push(...this.addInlineDebugComment(comment, indentCount))
        for (const girElement of girElements) {
            def.push(...this.generateFunction(girElement, [], namespace, indentCount))
        }
        return def
    }

    private generateParameter(girParam: GirCallableParamElement, namespace: string) {
        if (
            typeof girParam._tsData?.name !== 'string' ||
            typeof girParam._tsData.optional !== 'boolean' ||
            typeof girParam._tsData.type !== 'string'
        ) {
            throw new Error(NO_TSDATA('generateParameter'))
        }

        const type = removeNamespace(girParam._tsData.type, namespace)
        return [`${girParam._tsData.name}${girParam._tsData.optional ? '?' : ''}: ${type}`]
    }

    private generateOutParameterReturn(girParam: GirCallableParamElement, namespace: string) {
        const desc: string[] = []

        if (!girParam._tsData) {
            this.log.warn(NO_TSDATA('generateOutParameterReturn'))
            return desc
        }

        let { type } = girParam._tsData
        const { name } = girParam._tsData
        type = removeNamespace(type, namespace)
        desc.push(`/* ${name} */ ${type}`)
        return desc
    }

    private generateFunctionReturn(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        namespace: string,
    ) {
        if (!girElementIsIntrospectable(girFunc)) {
            return 'any'
        }

        if (!girFunc._tsData) {
            this.log.warn(NO_TSDATA('generateFunctionReturn'))
            return 'any'
        }

        const overrideReturnType = girFunc._tsData.overrideReturnType
        const outParams = girFunc._tsData.outParams
        const retTypeIsVoid = girFunc._tsData.retTypeIsVoid
        const returnType = removeNamespace(girFunc._tsData.returnType, namespace)

        let desc = returnType

        if (overrideReturnType) {
            desc = overrideReturnType
        } else if (outParams.length + (retTypeIsVoid ? 0 : 1) > 1) {
            const outParamsDesc: string[] = []

            if (!retTypeIsVoid) {
                outParamsDesc.push(`/* returnType */ ${returnType}`)
            }

            for (const outParam of outParams) {
                outParamsDesc.push(...this.generateOutParameterReturn(outParam, namespace))
            }

            desc = outParamsDesc.join(', ')
            desc = `[ ${desc} ]`
        } else if (outParams.length === 1 && retTypeIsVoid) {
            desc = this.generateOutParameterReturn(outParams[0], namespace).join(' ')
        }

        return desc
    }

    private generateFunction(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        methodPatches: string[] = [],
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        const indent = generateIndent(indentCount)

        if (!girElementIsIntrospectable(girFunc)) {
            return def
        }

        if (!girFunc._tsData) {
            this.log.warn(NO_TSDATA('generateFunction'))
            return def
        }

        if ((girFunc as GirDocElement).doc) def.push(...this.addGirDocComment(girFunc as GirDocElement, indentCount))

        let { name } = girFunc._tsData
        const { isArrowType, isStatic, isGlobal, isVirtual, inParams, instanceParameters } = girFunc._tsData

        const staticStr = isStatic || girFunc._tsType === 'static-function' ? 'static ' : ''
        const globalStr = isGlobal ? 'function ' : ''
        const virtualStr = isVirtual ? 'vfunc_' : ''

        let exportStr = ''
        // `girFunc._tsType === 'function'` are a global methods which can be exported
        if (isGlobal) {
            exportStr = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        }

        if (methodPatches?.length) {
            this.log.warn(PATCH_FOR_METHOD(girFunc._fullSymName || name))
            // Replace method by commend
            if (methodPatches.length === 1) {
                def.push(...methodPatches.map((patch) => indent + patch))
            }
            // Patch method type
            if (methodPatches.length >= 2) {
                for (const [i, patchLine] of methodPatches.entries()) {
                    let descLine = ''
                    if (i === 1) {
                        descLine = `${indent}${exportStr}${staticStr}${globalStr}${virtualStr}${patchLine}`
                    } else {
                        descLine = `${indent}${patchLine}`
                    }
                    def.push(descLine)
                }
            }
            return def
        }

        const returnDesc = this.generateFunctionReturn(girFunc, namespace)

        let retSep: string
        if (isArrowType) {
            name = ''
            retSep = ' =>'
        } else {
            retSep = ':'
        }

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(
            `${indent}${exportStr}${staticStr}${globalStr}${virtualStr}${name}(${inParamsDef.join(
                ', ',
            )})${retSep} ${returnDesc}`,
        )

        if (girFunc._tsData.overloads?.length) {
            def.push(`${indent}/* Function overloads */`)
            for (const overload of girFunc._tsData.overloads) {
                def.push(...this.generateFunction(overload, [], namespace, indentCount))
            }
        }

        return def
    }

    private generateCallbackInterface(girCallback: GirCallbackElement, namespace: string, indentCount = 0) {
        const def: string[] = []

        if (!girElementIsIntrospectable(girCallback)) {
            return def
        }

        if (!girCallback._tsData || !girCallback._tsDataInterface) {
            this.log.warn(NO_TSDATA('generateCallbackInterface'))
            return def
        }

        def.push(...this.addGirDocComment(girCallback, indentCount))

        const indent = generateIndent(indentCount)
        const indentBody = generateIndent(indentCount + 1)

        const { inParams, instanceParameters } = girCallback._tsData
        const returnType = removeNamespace(girCallback._tsData.returnType, namespace)
        const { name } = girCallback._tsDataInterface

        const inParamsDef: string[] = this.generateInParameters(inParams, instanceParameters, namespace)

        def.push(indent + this.generateExport('interface', name, '{', indentCount))
        def.push(`${indentBody}(${inParamsDef.join(', ')}): ${returnType}`)
        def.push(indent + '}')

        return def
    }

    private generateEnumeration(girEnum: GirEnumElement | GirBitfieldElement, indentCount = 0) {
        const desc: string[] = []

        if (!girElementIsIntrospectable(girEnum)) {
            return desc
        }

        if (!girEnum._tsData) {
            this.log.warn(NO_TSDATA('generateEnumeration'))
            return desc
        }

        desc.push(...this.addGirDocComment(girEnum, indentCount))

        const { name } = girEnum._tsData
        desc.push(this.generateExport('enum', name, '{', indentCount))
        if (girEnum.member) {
            for (const girEnumMember of girEnum.member) {
                desc.push(...this.generateEnumerationMember(girEnumMember, indentCount + 1))
            }
        }
        desc.push('}')
        return desc
    }

    private generateEnumerationMember(girEnumMember: GirMemberElement, indentCount = 1) {
        const desc: string[] = []

        if (!girElementIsIntrospectable(girEnumMember)) {
            return desc
        }

        if (!girEnumMember._tsData) {
            this.log.warn(NO_TSDATA('generateEnumerationMember'))
            return desc
        }

        desc.push(...this.addGirDocComment(girEnumMember, indentCount))

        const indent = generateIndent(indentCount)
        desc.push(`${indent}${girEnumMember._tsData.name},`)
        return desc
    }

    private generateConstant(girConst: GirConstantElement, namespace: string, indentCount = 0) {
        const desc: string[] = []
        if (!girElementIsIntrospectable(girConst)) {
            return desc
        }

        if (!girConst._tsData) {
            this.log.warn(NO_TSDATA('generateConstant'))
            return desc
        }

        desc.push(...this.addGirDocComment(girConst, indentCount))

        const indent = generateIndent(indentCount)
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        const varDesc = this.generateVariable(girConst, namespace, 0)
        desc.push(`${indent}${exp}const ${varDesc}`)
        return desc
    }

    private generateAlias(girAlias: GirAliasElement, namespace: string, indentCount = 0) {
        const desc: string[] = []

        if (!girElementIsIntrospectable(girAlias)) {
            return ''
        }

        if (!girAlias._tsData) {
            this.log.warn(NO_TSDATA('generateAlias'))
            return desc
        }
        const indent = generateIndent(indentCount)

        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        const type = removeNamespace(girAlias._tsData.type, namespace)

        desc.push(`${indent}${exp}type ${girAlias._tsData.name} = ${type}`)
        return desc
    }

    private generateConstructPropsInterface(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 0,
    ) {
        const def: string[] = []

        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateConstructPropsInterface'))
        }

        if (!girClass._tsData.isDerivedFromGObject) {
            return def
        }

        const indent = generateIndent(indentCount)
        const exp = this.config.useNamespace || this.config.buildType === 'types' ? '' : 'export '
        let ext = ' '

        if (girClass._tsData.inheritConstructPropInterfaceName) {
            ext = `${indent}extends ${girClass._tsData.inheritConstructPropInterfaceName} `
        }

        def.push(`${indent}${exp}interface ${girClass._tsData.constructPropInterfaceName} ${ext}{`)

        // START BODY
        {
            def.push(
                ...this.generateProperties(
                    girClass._tsData.constructProps,
                    namespace,
                    `Constructor properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
                    indentCount + 1,
                ),
            )

            for (const versionFullSymName of Object.keys(girClass._tsData.implements)) {
                const constructProps = girClass._tsData.implements[versionFullSymName]?.constructProps
                def.push(
                    ...this.generateProperties(
                        constructProps,
                        namespace,
                        `Constructor properties of ${versionFullSymName}`,
                        indentCount + 1,
                    ),
                )
            }
        }
        // END BODY
        def.push(`${indent}}`)

        return def
    }

    private generateClassFields(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassFields'))
        }

        def.push(
            ...this.generateProperties(
                girClass._tsData.fields,
                namespace,
                `Fields of ${girClass._module.packageName}.${girClass._fullSymName}`,
                indentCount,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._tsData.extends)) {
            const girFields = girClass._tsData.extends[versionFullSymName]?.fields
            def.push(...this.generateProperties(girFields, namespace, `Fields of ${versionFullSymName}`, indentCount))
        }

        return def
    }

    private generateClassProperties(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []

        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassProperties'))
        }

        def.push(
            ...this.generateProperties(
                girClass._tsData.properties,
                namespace,
                `Properties of ${girClass._module.packageName}.${girClass._fullSymName}`,
                indentCount,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._tsData.extends)) {
            def.push(
                ...this.generateProperties(
                    girClass._tsData.extends[versionFullSymName].properties,
                    namespace,
                    `Properties of ${versionFullSymName}`,
                    indentCount,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._tsData.implements)) {
            def.push(
                ...this.generateProperties(
                    girClass._tsData.implements[versionFullSymName].properties,
                    namespace,
                    `Properties of ${versionFullSymName}`,
                    indentCount,
                ),
            )
        }

        return def
    }

    private generateClassMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassMethods'))
        }

        def.push(
            ...this.generateFunctions(
                girClass._tsData.methods,
                namespace,
                indentCount,
                `Methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._tsData.extends)) {
            def.push(
                ...this.generateFunctions(
                    girClass._tsData.extends[versionFullSymName].methods,
                    namespace,
                    indentCount,
                    `Methods of ${versionFullSymName}`,
                ),
            )
        }

        for (const versionFullSymName of Object.keys(girClass._tsData.implements)) {
            def.push(
                ...this.generateFunctions(
                    girClass._tsData.implements[versionFullSymName].methods,
                    namespace,
                    indentCount,
                    `Methods of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param name
     */
    private generateStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('generateStaticFunctions'))
        }

        def.push(
            ...this.generateFunctions(
                girClass._tsData.staticFunctions,
                namespace,
                indentCount,
                'Static methods and pseudo-constructors',
            ),
        )

        return def
    }

    /**
     * Instance methods, vfunc_ prefix
     * @param girClass
     */
    private generateClassVirtualMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateStaticFunctions'))
        }

        // Virtual methods currently not supported in node-gtk
        if (this.config.environment === 'node') {
            return def
        }

        def.push(
            ...this.generateFunctions(
                girClass._tsData.virtualMethods,
                namespace,
                indentCount,
                `Virtual methods of ${girClass._module.packageName}.${girClass._fullSymName}`,
            ),
        )

        for (const versionFullSymName of Object.keys(girClass._tsData.extends)) {
            def.push(
                ...this.generateFunctions(
                    girClass._tsData.extends[versionFullSymName].virtualMethods,
                    namespace,
                    indentCount,
                    `Virtual methods of ${versionFullSymName}`,
                ),
            )
        }

        return def
    }

    private generateConstructorAndStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
        indentCount = 1,
    ) {
        const indent = generateIndent(indentCount)
        const def: string[] = []

        if (!girClass._tsData) {
            throw new Error(NO_TSDATA('generateConstructorAndStaticFunctions'))
        }

        // TODO: Generate a GirPropertyElement for this
        if (girClass._fullSymName && !STATIC_NAME_ALREADY_EXISTS.includes(girClass._fullSymName)) {
            // Records, classes and interfaces all have a static name
            def.push(`${indent}static name: string`)
        }

        // JS constructor(s)
        if (girClass._tsData?.isDerivedFromGObject) {
            // TODO: Generate a GirMethodElements for this
            def.push(
                `${indent}constructor (config?: ${girClass._tsData?.constructPropInterfaceName})`,
                `${indent}_init (config?: ${girClass._tsData?.constructPropInterfaceName}): void`,
            )
        } else {
            const girConstructors = girClass._tsData.constructors

            for (const girConstructor of girConstructors) {
                const descs = this.generateFunction(girConstructor, [], namespace, indentCount)

                def.push(...descs)

                // TODO: Generate a static GirMethodElement for this
                const jsStyleCtor = descs[0].replace('static new', 'constructor').replace(/:[^:]+$/, '')

                def.push(`${jsStyleCtor}`)
            }
        }

        def.push(...this.generateStaticFunctions(girClass, namespace, indentCount))

        if (girClass._tsData?.isDerivedFromGObject && girClass._module) {
            def.push(`${indent}static $gtype: ${girClass._module.packageName === 'GObject-2.0' ? '' : 'GObject.'}GType`)
        }

        return { def }
    }

    private generateClassSignals(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []
        if (!girClass._tsData || !girClass._fullSymName || !girClass._module) {
            throw new Error(NO_TSDATA('generateClassSignals'))
        }

        const signalDescs = this.generateSignals(girClass._tsData.signals, girClass, namespace, 0)

        def.push(
            ...this.mergeDescs(signalDescs, `Signals of ${girClass._module.packageName}.${girClass._fullSymName}`, 1),
        )

        for (const versionFullSymName of Object.keys(girClass._tsData.extends)) {
            const signalDescs = this.generateSignals(
                girClass._tsData.extends[versionFullSymName].signals,
                girClass,
                namespace,
                0,
            )
            def.push(...this.mergeDescs(signalDescs, `Signals of ${versionFullSymName}`, 1))
        }

        for (const versionFullSymName of Object.keys(girClass._tsData.implements)) {
            const signalDescs = this.generateSignals(
                girClass._tsData.implements[versionFullSymName].signals,
                girClass,
                namespace,
                0,
            )
            def.push(...this.mergeDescs(signalDescs, `Signals of ${versionFullSymName}`, 1))
        }

        return def
    }

    /**
     * Represents a record or GObject class or interface as a Typescript class
     * @param girClass
     * @param record
     */
    private generateClass(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        namespace: string,
    ) {
        const def: string[] = []

        if (!girClass._tsData) return def

        // Properties for construction
        def.push(...this.generateConstructPropsInterface(girClass, namespace))

        // START CLASS
        {
            if (girClass._tsData.isAbstract) {
                def.push(this.generateExport('abstract class', girClass._tsData.name, '{'))
            } else {
                def.push(this.generateExport('class', girClass._tsData.name, '{'))
            }

            // START BODY
            {
                // Properties
                def.push(...this.generateClassProperties(girClass, namespace))

                // Fields
                def.push(...this.generateClassFields(girClass, namespace))

                // Methods
                def.push(...this.generateClassMethods(girClass, namespace))

                // Virtual methods
                def.push(...this.generateClassVirtualMethods(girClass, namespace))

                // Signals
                def.push(...this.generateClassSignals(girClass, namespace))

                // TODO: Generate GirSignalElements instead of generate the signal definition strings directly
                def.push(...this.generateSignalMethodsFromProperties(girClass, namespace))

                // TODO: Records have fields

                // Static side: default constructor
                def.push(...this.generateConstructorAndStaticFunctions(girClass, namespace).def)
            }
            // END BODY

            // END CLASS
            def.push('}')
        }

        return def
    }

    private async exportModuleJS(moduleTemplateProcessor: TemplateProcessor, girModule: GirModule): Promise<void> {
        const template = 'module.js'
        if (this.config.outdir) {
            await moduleTemplateProcessor.create(template, this.config.outdir, `${girModule.packageName}.js`)
        } else {
            const moduleContent = moduleTemplateProcessor.load(template)
            this.log.log(moduleContent)
        }
    }

    private async exportModuleTS(moduleTemplateProcessor: TemplateProcessor, girModule: GirModule): Promise<void> {
        const template = 'module.d.ts'
        const out: string[] = []

        out.push(...this.addTSDocCommentLines([girModule.packageName]))

        out.push('')

        const deps: string[] = girModule.transitiveDependencies

        // Module dependencies as type references or imports
        if (this.config.environment === 'gjs') {
            out.push(...this.generateModuleDependenciesImport('Gjs', 'Gjs', false))
        }

        for (const depPackageName of deps) {
            // Don't reference yourself as a dependency
            if (girModule.packageName !== depPackageName) {
                const girFilename = `${depPackageName}.gir`
                const { namespace } = splitModuleName(depPackageName)
                const depFile = findFileInDirs(this.config.girDirectories, girFilename)
                if (depFile.exists) {
                    out.push(...this.generateModuleDependenciesImport(namespace, depPackageName, false))
                } else {
                    out.push(`// WARN: Dependency not found: '${depPackageName}'`)
                    this.log.warn(WARN_NOT_FOUND_DEPENDENCY_GIR_FILE(girFilename))
                }
            }
        }

        // START Namespace
        {
            if (this.config.buildType === 'types') {
                out.push('')
                out.push(`declare namespace ${girModule.namespace} {`)
            } else if (this.config.useNamespace) {
                out.push('')
                out.push(`export namespace ${girModule.namespace} {`)
            }

            // Newline
            out.push('')

            if (girModule.ns.enumeration)
                for (const girEnum of girModule.ns.enumeration) out.push(...this.generateEnumeration(girEnum))

            if (girModule.ns.bitfield)
                for (const girBitfield of girModule.ns.bitfield) out.push(...this.generateEnumeration(girBitfield))

            if (girModule.ns.constant)
                for (const girConst of girModule.ns.constant)
                    out.push(...this.generateConstant(girConst, girModule.namespace, 0))

            if (girModule.ns.function)
                for (const girFunc of girModule.ns.function)
                    out.push(...this.generateFunction(girFunc, [], girModule.namespace, 0))

            if (girModule.ns.callback)
                for (const girCallback of girModule.ns.callback)
                    out.push(...this.generateCallbackInterface(girCallback, girModule.namespace))

            if (girModule.ns.interface)
                for (const girIface of girModule.ns.interface)
                    if (girIface._module) out.push(...this.generateClass(girIface, girIface._module.namespace))

            // Extra interfaces if a template with the module name  (e.g. '../templates/GObject-2.0.d.ts') is found
            // E.g. used for GObject-2.0 to help define GObject classes in js;
            // these aren't part of gi.
            if (moduleTemplateProcessor.exists(`${girModule.packageName}.d.ts`)) {
                const templatePatches = await moduleTemplateProcessor.load(`${girModule.packageName}.d.ts`)
                out.push(templatePatches)
            }

            if (girModule.ns.class)
                for (const gitClass of girModule.ns.class)
                    if (gitClass._module) out.push(...this.generateClass(gitClass, gitClass._module.namespace))

            if (girModule.ns.record)
                for (const girRecord of girModule.ns.record)
                    if (girRecord._module) out.push(...this.generateClass(girRecord, girRecord._module.namespace))

            if (girModule.ns.union)
                for (const girUnion of girModule.ns.union)
                    if (girUnion._module) out.push(...this.generateClass(girUnion, girUnion._module.namespace))

            if (girModule.ns.alias)
                // GType is not a number in GJS
                for (const girAlias of girModule.ns.alias)
                    if (girModule.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                        out.push(...this.generateAlias(girAlias, girModule.namespace, 1))
        }
        // END Namespace
        if (this.config.useNamespace) {
            out.push(`}`)
        }

        if (this.config.buildType !== 'types' && this.config.useNamespace) {
            out.push(`export default ${girModule.namespace};`)
        }

        const outResult = out.join('\n') // End of file

        if (this.config.outdir) {
            await moduleTemplateProcessor.create(
                template,
                this.config.outdir,
                `${girModule.packageName}.d.ts`,
                outResult,
            )
        } else {
            const moduleContent = await moduleTemplateProcessor.load(template)
            this.log.log(moduleContent + '\n' + outResult)
        }
    }

    private async exportModule(girModule: GirModule) {
        const moduleTemplateProcessor = new TemplateProcessor(
            {
                name: girModule.namespace,
                namespace: girModule.namespace,
                version: girModule.version,
                importName: girModule.importName,
            },
            girModule.packageName,
            this.config,
        )

        await this.exportModuleTS(moduleTemplateProcessor, girModule)

        if (this.config.buildType === 'lib') {
            await this.exportModuleJS(moduleTemplateProcessor, girModule)
        }
    }

    private async exportGjs(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[]) {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor(
            { girModules: girModules, girModulesGrouped },
            'gjs',
            this.config,
        )

        // Types
        await templateProcessor.create('Gjs.d.ts', this.config.outdir, 'Gjs.d.ts')
        await templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')

        // Lib
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('index.js', this.config.outdir, 'index.js')
            const template = 'Gjs.js'
            await templateProcessor.create(template, this.config.outdir, 'Gjs.js')
        }
    }

    private async exportGjsCastLib(inheritanceTable: InheritanceTable) {
        if (!this.config.outdir) return

        const inheritanceTableKeys = Object.keys(inheritanceTable)
        const templateProcessor = new TemplateProcessor({ inheritanceTableKeys, inheritanceTable }, 'gjs', this.config)
        await templateProcessor.create('cast.ts', this.config.outdir, 'cast.ts')
    }

    private async exportNodeGtk(girModules: GirModule[], girModulesGrouped: GirModulesGrouped[]) {
        if (!this.config.outdir) return

        const templateProcessor = new TemplateProcessor({ girModules, girModulesGrouped }, 'node', this.config)

        await templateProcessor.create('index.d.ts', this.config.outdir, 'index.d.ts')
        if (this.config.buildType === 'lib') {
            await templateProcessor.create('index.js', this.config.outdir, 'index.js')
        }
    }

    public async start(
        girModules: GirModule[],
        girModulesGrouped?: GirModulesGrouped[],
        inheritanceTable?: InheritanceTable,
    ) {
        for (const girModule of girModules) {
            await this.exportModule(girModule)
        }

        if (this.config.environment === 'node' && girModulesGrouped) {
            // node-gtk internal stuff
            await this.exportNodeGtk(girModules, girModulesGrouped)
        }

        if (this.config.environment === 'gjs' && girModulesGrouped && inheritanceTable) {
            // GJS internal stuff
            await this.exportGjs(girModules, girModulesGrouped)
            await this.exportGjsCastLib(inheritanceTable)
        }
    }
}
