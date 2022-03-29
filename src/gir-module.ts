import { Transformation, C_TYPE_MAP, FULL_TYPE_MAP, POD_TYPE_MAP, POD_TYPE_MAP_ARRAY } from './transformation.js'
import { Logger } from './logger.js'
import {
    isEqual,
    find,
    clone,
    girBool,
    removeNamespace,
    addNamespace,
    merge,
    girElementIsIntrospectable,
} from './utils.js'
import { SymTable } from './symtable.js'
import { typePatches } from './type-patches.js'
import type {
    GirRepository,
    GirNamespace,
    GirAliasElement,
    GirEnumElement,
    GirMemberElement,
    GirFunctionElement,
    GirClassElement,
    GirArrayType,
    GirType,
    GirInclude,
    GirCallableParams,
    GirCallableParamElement,
    GirVirtualMethodElement,
    GirSignalElement,
    GirCallableReturn,
    GirRecordElement,
    GirCallbackElement,
    GirConstantElement,
    GirBitfieldElement,
    GirFieldElement,
    GirMethodElement,
    GirPropertyElement,
    GirAnyElement,
    GirUnionElement,
    GirInstanceParameter,
    GirInterfaceElement,
    GirConstructorElement,
    TypeArraySuffix,
    TypeNullableSuffix,
    TypeSuffix,
    TypeFunction,
    TypeMethod,
    TypeVariable,
    TypeField,
    TypeClass,
    TypeGirElement,
    TypeTsElement,
    LocalNameCheck,
    LocalNameType,
    LocalName,
    LocalNames,
    TsClass,
    TsMethod,
    TsFunction,
    TsProperty,
    TsVar,
    TsParameter,
    TsInstanceParameter,
    TsCallbackInterface,
    TsMember,
    TsEnum,
    TsAlias,
    InheritanceTable,
    ParsedGir,
    GenerateConfig,
    FunctionMap,
    Environment,
} from './types/index.js'

import { ERROR_NO_TSDATA, WARN_ENUM_DUPLICATE_IDENTIFIER } from './constants.js'

export class GirModule {
    /**
     * Array of all gir modules
     */
    static allGirModules: GirModule[] = []
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. '3.0'
     */
    version = '0.0'
    /**
     * E.g. 'Gtk-3.0'
     */
    packageName: string
    /**
     * E.g. 'Gtk30'
     * Is used in the generated index.d.ts, for example: `import * as Gtk30 from "./Gtk-3.0";`
     */
    importName: string

    dependencies: string[] = []
    private _transitiveDependencies: string[] = []

    set transitiveDependencies(deps: string[]) {
        this._transitiveDependencies = this.checkTransitiveDependencies(deps)
    }

    get transitiveDependencies(): string[] {
        return this._transitiveDependencies
    }

    get allDependencies(): string[] {
        return [...new Set([...this.dependencies, ...this.transitiveDependencies])]
    }

    repo: GirRepository
    ns: GirNamespace = { $: { name: '', version: '' } }
    /**
     * Used to find namespaces that are used in other modules
     */
    symTable: SymTable
    transformation: Transformation
    extends?: string
    log: Logger

    /**
     * To prevent constants from being exported twice, the names already exported are saved here for comparison.
     * Please note: Such a case is only known for Zeitgeist-2.0 with the constant "ATTACHMENT"
     */
    constNames: { [varName: string]: GirConstantElement } = {}

    constructor(xml: ParsedGir, private readonly config: GenerateConfig) {
        this.repo = xml.repository

        if (!this.repo.namespace || !this.repo.namespace.length) {
            throw new Error(`Namespace not found!`)
        }

        this.dependencies = this.loadDependencies(this.repo.include || [])
        this.ns = this.repo.namespace[0]
        this.namespace = this.ns.$.name
        this.version = this.ns.$.version
        this.packageName = `${this.namespace}-${this.version}`
        this.transformation = new Transformation(this.packageName, config)
        this.log = new Logger(config.environment, config.verbose, this.packageName || 'GirModule')
        this.importName = this.transformation.transformModuleNamespaceName(this.packageName)

        this.symTable = new SymTable(this.config, this.packageName, this.namespace)
    }

    private loadDependencies(girInclude: GirInclude[]): string[] {
        const dependencies: string[] = []
        for (const i of girInclude) {
            dependencies.unshift(`${i.$.name}-${i.$.version || ''}`)
        }

        return dependencies
    }

    private checkTransitiveDependencies(transitiveDependencies: string[]) {
        // Always pull in GObject-2.0, as we may need it for e.g. GObject-2.0.type
        if (this.packageName !== 'GObject-2.0') {
            if (!find(transitiveDependencies, (x) => x === 'GObject-2.0')) {
                transitiveDependencies.push('GObject-2.0')
            }
        }

        // Add missing dependencies
        if (this.packageName === 'UnityExtras-7.0') {
            if (!find(transitiveDependencies, (x) => x === 'Unity-7.0')) {
                transitiveDependencies.push('Unity-7.0')
            }
        }
        if (this.packageName === 'UnityExtras-6.0') {
            if (!find(transitiveDependencies, (x) => x === 'Unity-6.0')) {
                transitiveDependencies.push('Unity-6.0')
            }
        }
        if (this.packageName === 'GTop-2.0') {
            if (!find(transitiveDependencies, (x) => x === 'GLib-2.0')) {
                transitiveDependencies.push('GLib-2.0')
            }
        }

        return transitiveDependencies
    }

    private annotateFunctionArguments(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirVirtualMethodElement
            | GirCallbackElement
            | GirSignalElement,
    ): void {
        const funcName = girFunc._fullSymName
        if (funcName && girFunc.parameters) {
            for (const girParams of girFunc.parameters) {
                if (girParams.parameter) {
                    for (const girParam of girParams.parameter) {
                        girParam._girType = 'callable-param'
                        girParam._module = this
                        if (girParam.$ && girParam.$.name) {
                            girParam._fullSymName = `${funcName}.${girParam.$.name}`
                        }
                    }
                }
            }
        }
    }

    private annotateFunctionReturn(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirVirtualMethodElement
            | GirCallbackElement
            | GirSignalElement,
    ): void {
        const retVals = girFunc['return-value']
        if (retVals && girFunc._fullSymName)
            for (const retVal of retVals) {
                retVal._module = this
                retVal._girType = 'callable-return'
                if (retVal.$ && retVal.$.name) {
                    retVal._fullSymName = `${girFunc._fullSymName}.${retVal.$.name}`
                }
            }
    }

    private annotateFunctions(girFuncs: GirFunctionElement[], girType: 'function'): void
    private annotateFunctions(girFuncs: GirCallbackElement[], girType: 'callback'): void

    /**
     * Functions which are not part of a class
     * @param girFuncs
     * @param girType
     */
    private annotateFunctions(
        girFuncs: GirFunctionElement[] | GirCallbackElement[],
        girType: TypeFunction | 'callback',
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._girType = girType
                    girFunc._fullSymName = `${this.namespace}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirVirtualMethodElement[],
        girType: 'virtual-method',
        tsType: 'method',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirSignalElement[],
        girType: 'signal',
        tsType: 'event-methods',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirMethodElement[],
        girType: 'method',
        tsType: 'method',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirFunctionElement[],
        girType: 'function',
        /** functions which are part of a class are always static functions */
        tsType: 'static-function',
    ): void

    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs: GirConstructorElement[],
        girType: 'constructor',
        tsType: 'static-function',
    ): void

    /**
     * Functions and methods of a class
     */
    private annotateMethods(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girFuncs:
            | GirMethodElement[]
            | GirFunctionElement[]
            | GirConstructorElement[]
            | GirVirtualMethodElement[]
            | GirSignalElement[],
        girType: TypeMethod,
        tsType: 'static-function' | 'event-methods' | 'method',
    ): void {
        if (Array.isArray(girFuncs))
            for (const girFunc of girFuncs) {
                if (girFunc?.$?.name) {
                    girFunc._girType = girType
                    girFunc._tsType = tsType
                    girFunc._class = girClass
                    const nsName = girClass ? girClass._fullSymName : this.namespace
                    if (nsName) girFunc._fullSymName = `${nsName}.${girFunc.$.name}`
                    this.annotateFunctionArguments(girFunc)
                    this.annotateFunctionReturn(girFunc)
                }
            }
    }

    /**
     * Variables which are not part of a class
     */
    private annotateVariables(girVars: GirConstantElement[], girType: TypeVariable): void {
        for (const girVar of girVars) {
            girVar._module = this
            girVar._girType = girType
            girVar._tsType = this.girToTsType(girType)
            if (girVar.$ && girVar.$.name) {
                girVar._fullSymName = `${this.namespace}.${girVar.$.name}`
            }
        }
    }

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirPropertyElement[],
        girType: 'property',
        tsType?: 'field' | 'constructor-property',
    ): void

    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement | null,
        girVars: GirFieldElement[],
        girType: 'field',
        tsType?: 'field',
    ): void

    /**
     * Fields are variables which are part of a class
     * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#fields
     */
    private annotateFields(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girVars: GirPropertyElement[] | GirFieldElement[],
        girType: TypeField,
        tsType: 'field' | 'constructor-property' = 'field',
    ): void {
        for (const girVar of girVars) {
            const nsName = girClass ? girClass._fullSymName : this.namespace
            girVar._module = this
            girVar._girType = girType
            girVar._tsType = tsType
            if (girClass) {
                girVar._class = girClass
            }

            if (girVar.$ && girVar.$.name && nsName) {
                girVar._fullSymName = `${nsName}.${girVar.$.name}`
            }
        }
    }

    private annotateClass(girClass: GirClassElement, girType: 'class', tsType?: 'class'): void
    private annotateClass(girClass: GirRecordElement, girType: 'record', tsType?: 'class'): void
    private annotateClass(girClass: GirInterfaceElement, girType: 'interface', tsType?: 'class'): void

    private annotateClass(
        girClass: GirClassElement | GirRecordElement | GirInterfaceElement,
        girType: TypeClass,
        tsType: 'class' = 'class',
    ) {
        girClass._module = this
        girClass._fullSymName = `${this.namespace}.${girClass.$.name}`
        girClass._girType = girType
        girClass._tsType = tsType

        const constructors = girClass.constructor instanceof Array ? girClass.constructor : []
        const signals = ((girClass as GirClassElement | GirInterfaceElement).signal ||
            girClass['glib:signal'] ||
            []) as GirSignalElement[]
        const functions = girClass.function || []
        const methods = girClass.method || []
        const vMethods = (girClass as GirClassElement)['virtual-method'] || new Array<GirVirtualMethodElement>()
        const properties = girClass.property
        const fields = girClass.field

        this.annotateMethods(girClass, constructors, 'constructor', 'static-function')
        this.annotateMethods(girClass, functions, 'function', 'static-function')
        this.annotateMethods(girClass, methods, 'method', 'method')
        this.annotateMethods(girClass, vMethods, 'virtual-method', 'method')
        this.annotateMethods(girClass, signals, 'signal', 'event-methods')
        if (properties) this.annotateFields(girClass, properties, 'property')
        if (fields) this.annotateFields(girClass, fields, 'field')
    }

    /**
     * Annotates the custom `_module`, `_fullSymName` and `_girType` properties.
     * Also registers the element on the `symTable`.
     * @param girElements
     * @param girType
     */
    private annotateAndRegisterGirElement(
        girElements: GirAnyElement[],
        girType: TypeGirElement,
        isStatic = false,
    ): void {
        for (const girElement of girElements) {
            if (girElement?.$ && girElement.$.name) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-argument
                if (!girElementIsIntrospectable(girElement as any)) continue

                girElement._girType = girType
                girElement._tsType = this.girToTsType(girType, isStatic)
                girElement._module = this
                girElement._fullSymName = `${this.namespace}.${girElement.$.name}`
                if (this.symTable.get(this.allDependencies, girElement._fullSymName)) {
                    this.log.warn(`Duplicate symbol: ${girElement._fullSymName}`)
                }

                this.symTable.set(this.allDependencies, girElement._fullSymName, girElement)
            }
        }
    }

    /**
     * TODO: find better name for this method
     * @param girVar
     * @param fullTypeName
     * @returns e.g.
     * ```ts
     * {
     *      namespace: "Gtk",
     *      resValue: "Gtk.Widget"
     * }
     *
     */
    private fullTypeLookup(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirFieldElement
            | GirAliasElement
            | GirFieldElement
            | GirPropertyElement
            | GirConstantElement,
        fullTypeName: string | null,
    ) {
        let resValue = ''
        let namespace = ''

        if (!fullTypeName) {
            return {
                value: resValue,
                fullTypeName,
                namespace,
            }
        }

        // Fully qualify our type name
        if (!fullTypeName.includes('.')) {
            let tryFullTypeName = ''

            if (!resValue && girVar._module && girVar._module !== this) {
                tryFullTypeName = `${girVar._module.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = girVar._module.namespace
                }
            }

            if (!resValue) {
                tryFullTypeName = `${this.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = this.namespace
                }
            }

            const girClass = (
                girVar as
                    | GirCallableParamElement
                    | GirCallableReturn
                    | GirFieldElement
                    | GirAliasElement
                    | GirFieldElement
                    | GirPropertyElement
            )._class as GirClassElement | undefined

            if (!resValue && girClass?._module?.namespace && girClass._module !== this) {
                tryFullTypeName = `${girClass._module.namespace}.${fullTypeName}`
                resValue = this.fullTypeLookupWithNamespace(tryFullTypeName).value
                if (resValue) {
                    fullTypeName = tryFullTypeName
                    namespace = girClass?._module?.namespace
                }
            }
        }

        if (!resValue && fullTypeName) {
            resValue = this.fullTypeLookupWithNamespace(fullTypeName).value
        }

        return {
            value: resValue,
            namespace,
        }
    }

    /**
     * Get the typescript type of a GirElement like a `GirPropertyElement` or `GirCallableReturn`
     * @param girVar
     * @returns e.g.
     * ```ts
     * {
     *      result: 'Gtk.AccelGroup[]',
     *      value: 'Gtk.AccelGroup,
     *      suffix: '[]',
     *      namespace: 'Gtk',
     *      isFunction: false,
     *      isCallback: false,
     *  }
     * ```
     */
    private typeLookup(
        girVar:
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirCallableParamElement
            | GirPropertyElement
            | GirConstantElement,
    ) {
        let type: GirType | null = null
        let fullTypeName: string | null = null
        let arr: TypeArraySuffix = ''
        let arrCType: string | undefined
        let nul: TypeNullableSuffix = ''
        let resValue = ''
        let namespace = ''
        let isFunction = false
        let isCallback = false
        const girCallbacks: GirCallbackElement[] = []

        const collection = (girVar as GirCallableReturn | GirFieldElement).array
            ? (girVar as GirCallableReturn | GirFieldElement).array
            : girVar.type && /^GLib.S?List$/.test(girVar.type[0].$?.name || '')
            ? girVar.type
            : undefined

        if (collection && collection.length > 0) {
            const typeArray = collection[0].type
            if (collection[0].$) {
                const ea = collection[0].$
                arrCType = ea['c:type']
            }
            if (typeArray && typeArray.length > 0) {
                type = typeArray[0]
            }
            arr = '[]'
        } else if (girVar.type) {
            type = girVar.type[0]
        }

        if (girVar.$) {
            const nullable = this.paramIsNullable(girVar)
            if (nullable) {
                nul = ' | null'
            }
        }

        const cType = type?.$ ? type.$['c:type'] : arrCType
        fullTypeName = type?.$?.name || null
        const callbacks = (girVar as GirFieldElement).callback

        if (!resValue && callbacks?.length) {
            for (const girCallback of callbacks) {
                if (!girElementIsIntrospectable(girCallback)) continue
                girCallback._tsData = this.getFunctionTsData(
                    girCallback,
                    'callback',
                    /* isStatic */ false,
                    /* isArrowType */ true,
                    /* isGlobal */ false,
                    /* isVirtual */ false,
                    /* overrideReturnType */ null,
                )

                if (girCallback._tsData) {
                    girCallbacks.push(girCallback)
                    isFunction = true
                    isCallback = true
                }
            }
        }

        if (!isFunction) {
            const res = this.fullTypeLookup(girVar, fullTypeName)
            if (res.value) {
                resValue = res.value
                fullTypeName = resValue
                namespace = res.namespace
            }
        }

        if (!resValue && arr && type?.$?.name && POD_TYPE_MAP_ARRAY()[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP_ARRAY()[type.$.name]
            arr = ''
        }

        if (!resValue && type?.$ && type.$.name && POD_TYPE_MAP[type.$.name]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP[type.$.name]
        }

        if (!resValue && cType && C_TYPE_MAP(cType)) {
            resValue = C_TYPE_MAP(cType) || ''
        }

        if (!resValue && cType && POD_TYPE_MAP[cType]) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            resValue = POD_TYPE_MAP[cType]
        }

        if (!resValue) {
            resValue = 'any'
            const logName = fullTypeName || girVar.$.name || cType || ''
            this.log.warn(`Could not find type for "${logName}"`)
        }

        const suffix: TypeSuffix = (arr + nul) as TypeSuffix

        return {
            result: resValue + suffix,
            value: resValue,
            suffix,
            namespace,
            isFunction,
            isCallback,
            girCallbacks,
        }
    }

    private getReturnType(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirSignalElement
            | GirVirtualMethodElement,
    ) {
        let returnType = 'void'
        let outArrayLengthIndex = -1

        const girVar = girFunc['return-value']?.[0] || null
        if (girVar) {
            const { result, isCallback } = this.typeLookup(girVar)
            if (isCallback) {
                throw new Error('Callback type is not implemented here')
            }
            returnType = result
            outArrayLengthIndex = girVar.array && girVar.array[0].$?.length ? Number(girVar.array[0].$.length) : -1
        }

        return { returnType, outArrayLengthIndex }
    }

    private arrayLengthIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.array) return -1

        const arr: GirArrayType = girVar.array[0]
        if (!arr.$) return -1

        if (arr.$.length) {
            return parseInt(arr.$.length)
        }

        return -1
    }

    private closureDataIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.$.closure) return -1

        return parseInt(girVar.$.closure)
    }

    private destroyDataIndexLookup(girVar: GirCallableParamElement): number {
        if (!girVar.$.destroy) return -1

        return parseInt(girVar.$.destroy)
    }

    private processParams(
        params: GirCallableParamElement[],
        skip: GirCallableParamElement[],
        getIndex: (param: GirCallableParamElement) => number,
    ): void {
        for (const param of params) {
            const index = getIndex(param)
            if (index < 0) continue
            if (index >= params.length) continue
            skip.push(params[index])
        }
    }

    /**
     * Checks if the parameter is nullable or optional.
     * TODO: Check if it makes sense to split this in `paramIsNullable` and `paramIsOptional`
     *
     * @param param Param to test
     *
     * @author realh
     * @see https://github.com/realh/ts-for-gjs/commit/e4bdba8d4ca279dfa4abbca413eaae6ecc6a81f8
     */
    private paramIsNullable(
        girVar:
            | GirCallableParamElement
            | GirCallableReturn
            | GirAliasElement
            | GirFieldElement
            | GirConstantElement
            | GirPropertyElement,
    ): boolean {
        const a = (girVar as GirCallableParamElement).$
        return a && (girBool(a.nullable) || girBool(a['allow-none']) || girBool(a.optional))
    }

    private getPatches(
        type: 'constructorProperties',
        nsPath: string,
        packageName?: string,
        env?: Environment,
    ): Partial<TsProperty>
    private getPatches(type: 'methods', nsPath: string, packageName?: string, env?: Environment): Partial<TsMethod>
    private getPatches(type: 'parameter', nsPath: string, packageName?: string, env?: Environment): Partial<TsParameter>

    /**
     * Get the patches for a given namespace path, type and package name (including the version number)
     * @param packageName E.g. 'Gtk-3.0'
     * @param type E.g 'methods'
     * @param nsPath E.g. 'Gtk.MenuItem.activate'
     */
    private getPatches(
        type: 'methods' | 'constructorProperties' | 'parameter',
        nsPath: string,
        packageName = this.packageName,
        env = this.config.environment,
    ) {
        const packagePatches = merge(typePatches[env][packageName], typePatches.all[packageName])
        if (!packagePatches) {
            return undefined
        }

        const typePatch = packagePatches[type]
        if (!typePatch) {
            return undefined
        }

        return typePatch?.[nsPath] || undefined
    }

    private getParameterTsData(
        girParam: GirCallableParamElement,
        girParams: GirCallableParamElement[],
        paramNames: string[],
        skip: GirCallableParamElement[],
    ) {
        // I think it's safest to force inout params to have the
        // same type for in and out
        const { result: paramType, isCallback } = this.typeLookup(girParam)

        if (isCallback) {
            throw new Error('Callback type is not implemented here')
        }

        let paramName = this.transformation.transformParameterName(girParam, false)

        if (paramNames.includes(paramName)) {
            this.log.warn(`[${girParam._fullSymName || ''}] Duplicate parameter name "${paramName}" found!`)
            paramName += '_'
        }
        paramNames.push(paramName)

        let optional = this.paramIsNullable(girParam)

        if (optional) {
            const index = girParams.indexOf(girParam)
            const following = girParams
                .slice(index)
                .filter(() => skip.indexOf(girParam) === -1)
                .filter((p) => p.$.direction !== 'out')

            if (following.some((p) => !this.paramIsNullable(p))) {
                optional = false
            }
        }

        const tsData: TsParameter = {
            name: paramName,
            optional,
            type: paramType,
        }

        return tsData
    }

    private getInstanceParameterTsData(instanceParameter: GirInstanceParameter): TsInstanceParameter | undefined {
        const typeName = instanceParameter.type?.[0]?.$?.name || undefined
        const rec = typeName ? this.ns.record?.find((r) => r.$.name == typeName) : undefined
        const structFor = rec?.$['glib:is-gtype-struct-for']
        if (structFor && instanceParameter.$.name) {
            // TODO: Should use of a constructor, and even of an instance, be discouraged?
            return {
                name: instanceParameter.$.name,
                structFor,
            }
        }
        return undefined
    }

    private setParametersTsData(outArrayLengthIndex: number, girParams?: GirCallableParams[]) {
        const outParams: GirCallableParamElement[] = []
        const inParams: GirCallableParamElement[] = []
        const paramNames: string[] = []
        const instanceParameters: GirInstanceParameter[] = []

        if (girParams && girParams.length > 0) {
            for (const girParam of girParams) {
                const params = girParam?.parameter || []

                // Instance parameter needs to be exposed for class methods (see comment above getClassMethods())
                const instanceParameter = girParams[0]['instance-parameter']?.[0]
                if (instanceParameter) {
                    instanceParameter._tsData = this.getInstanceParameterTsData(instanceParameter)
                    if (instanceParameter._tsData) {
                        instanceParameters.push(instanceParameter)
                    }
                }
                if (params.length) {
                    const skip = outArrayLengthIndex === -1 ? [] : [params[outArrayLengthIndex]]

                    this.processParams(params, skip, (girVar) => this.arrayLengthIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.closureDataIndexLookup(girVar))
                    this.processParams(params, skip, (girVar) => this.destroyDataIndexLookup(girVar))

                    for (const param of params) {
                        if (skip.includes(param)) {
                            continue
                        }

                        param._tsData = this.getParameterTsData(param, params, paramNames, skip)

                        // Apply patches
                        const paramPatches = param._fullSymName
                            ? this.getPatches('parameter', param._fullSymName)
                            : undefined

                        if (paramPatches) {
                            this.log.warn(`Patch found for parameter "${param._fullSymName || ''}"!`)
                            param._tsData = merge(param._tsData, paramPatches)
                        }

                        const optDirection = param.$.direction
                        if (optDirection === 'out' || optDirection === 'inout') {
                            outParams.push(param)
                            if (optDirection === 'out') continue
                        }
                        inParams.push(param)
                    }
                }
            }
        }

        return { outParams, paramNames, inParams, instanceParameters }
    }

    private getVariableTsData(
        girVar: GirPropertyElement,
        girType: 'property',
        tsType: 'field' | 'constructor-property',
        optional: boolean,
        allowQuotes: boolean,
    ): GirPropertyElement['_tsData']

    private getVariableTsData(
        girVar: GirConstantElement,
        girType: 'constant',
        tsType: 'constant',
        optional: boolean,
        allowQuotes: boolean,
    ): GirConstantElement['_tsData']

    private getVariableTsData(
        girVar: GirFieldElement,
        girType: 'field',
        tsType: 'field',
        optional: boolean,
        allowQuotes: boolean,
    ): GirFieldElement['_tsData']

    private getVariableTsData(
        girVar: GirPropertyElement | GirFieldElement | GirConstantElement,
        girType: 'property' | 'constant' | 'field',
        tsType: 'constant' | 'field' | 'constructor-property',
        optional = false,
        allowQuotes = false,
    ) {
        if (!girVar.$.name) return undefined
        if (
            !girVar ||
            !girVar.$ ||
            !girBool(girVar.$.introspectable, true) ||
            girBool((girVar as GirFieldElement).$.private)
        )
            return undefined

        girVar._girType = girType
        girVar._tsType = tsType

        let name = girVar.$.name

        switch (girType) {
            case 'property':
                name = this.transformation.transformPropertyName(girVar.$.name, allowQuotes)
                break
            case 'constant':
                name = this.transformation.transformConstantName(girVar.$.name, allowQuotes)
                break
            case 'field':
                name = this.transformation.transformFieldName(girVar.$.name, allowQuotes)
                break
        }
        // Use the out type because it can be a union which isn't appropriate
        // for a property
        const { result, girCallbacks } = this.typeLookup(girVar)
        const typeName = this.transformation.transformTypeName(result)

        let tsData: TsProperty | TsVar = {
            name,
            patched: false,
            optional,
            type: typeName,
            callbacks: girCallbacks,
        }

        // Apply patches
        const varPatches = girVar._fullSymName ? this.getPatches('methods', girVar._fullSymName) : undefined

        if (varPatches) {
            this.log.warn(`Patch found for variable "${girVar._fullSymName || ''}"!`)
            tsData = merge(tsData, varPatches)
        }

        return tsData
    }

    private getPropertyTsData(
        girProp: GirPropertyElement,
        girType: 'property',
        tsType: 'field' | 'constructor-property',
        construct?: boolean,
        optional?: boolean,
        indentCount?: number,
    ): TsProperty | undefined

    private getPropertyTsData(
        girProp: GirFieldElement,
        girType: 'field',
        tsType: 'field',
        construct?: boolean,
        optional?: boolean,
        indentCount?: number,
    ): TsProperty | undefined

    /**
     * @param girVar
     * @param construct construct means include the property even if it's construct-only,
     * @param optional optional means if it's construct-only it will also be marked optional (?)
     * @param indentCount
     */
    private getPropertyTsData(
        girProp: GirPropertyElement | GirFieldElement,
        girType: 'property' | 'field',
        tsType: 'constructor-property' | 'field',
        construct = false,
        optional = true,
    ): TsProperty | undefined {
        if (!girBool(girProp.$.writable) && construct) return undefined
        if (girBool((girProp as GirFieldElement).$.private)) return undefined

        const readonly =
            !girBool(girProp.$.writable) || (!construct && girBool((girProp as GirPropertyElement).$['construct-only']))
        girProp._girType = girType

        let tsData: TsProperty | TsVar | undefined

        switch (girType) {
            case 'property':
                tsData = this.getVariableTsData(
                    girProp as GirPropertyElement,
                    girType,
                    tsType,
                    construct && optional,
                    true,
                )
                break
            case 'field':
                if (tsType !== 'field') {
                    throw new Error(`Wrong tsType: "${tsType}" for girType: "${girType}`)
                }
                tsData = this.getVariableTsData(
                    girProp as GirFieldElement,
                    girType,
                    tsType,
                    construct && optional,
                    true,
                )
                break
            default:
                throw new Error(`Unknown property type: ${girType as string}`)
        }

        if (!tsData?.name) {
            return undefined
        }

        tsData = {
            ...tsData,
            readonly,
        }

        return tsData
    }

    /**
     *
     * @param girFunc
     * @param prefix E.g. vfunc
     * @param overrideReturnType
     * @param isArrowType
     * @param indentCount
     */
    private getFunctionTsData(
        girFunc:
            | GirMethodElement
            | GirFunctionElement
            | GirConstructorElement
            | GirCallbackElement
            | GirVirtualMethodElement,
        girType?: 'virtual-method' | 'method' | 'constructor' | 'function' | 'callback',
        isStatic = false,
        isArrowType = false,
        isGlobal = false,
        isVirtual = false,
        overrideReturnType: string | null = null,
    ): TsFunction | undefined {
        if (!girFunc || !girFunc.$ || !girBool(girFunc.$.introspectable, true) || girFunc.$['shadowed-by']) {
            return undefined
        }
        let name = girFunc.$.name
        const { returnType, outArrayLengthIndex } = this.getReturnType(girFunc)
        const retTypeIsVoid = returnType === 'void'

        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girFunc.parameters,
        )
        const shadows = (girFunc as GirMethodElement).$.shadows

        if (shadows) {
            name = shadows
        }

        // Overwrites
        girType = girType || girFunc._girType
        if (!girType) throw new Error('girType not set!')
        isStatic = isStatic || girFunc._tsType === 'static-function'
        isGlobal = isGlobal || girFunc._tsType === 'function'
        isVirtual = isVirtual || girType === 'virtual-method'

        girFunc._girType = girType
        girFunc._tsType = this.girToTsType(girType, isStatic)

        // Function name transformation by environment
        name = this.transformation.transformFunctionName(name)

        let tsData: TsFunction = {
            patched: true,
            isArrowType,
            isStatic,
            isGlobal,
            isVirtual,
            returnType,
            retTypeIsVoid,
            name,
            overrideReturnType: overrideReturnType || undefined,
            overloads: [],
            inParams,
            instanceParameters,
            outParams,
        }

        // Apply patches
        const methodPatches = girFunc._fullSymName ? this.getPatches('methods', girFunc._fullSymName) : undefined

        if (methodPatches) {
            this.log.warn(`Patch found for method "${girFunc._fullSymName || ''}"!`)
            tsData = merge(tsData, methodPatches)
        }

        return tsData
    }

    private getCallbackInterfaceTsData(girCallback: GirCallbackElement | GirConstructorElement) {
        if (!girElementIsIntrospectable(girCallback)) return undefined

        const tsDataInterface: TsCallbackInterface = {
            name: girCallback.$.name,
        }

        return tsDataInterface
    }

    private getConstructorFunctionTsData(
        name: string,
        girConstructorFunc: GirConstructorElement,
    ): TsFunction | undefined {
        if (!girElementIsIntrospectable(girConstructorFunc)) return undefined
        return this.getFunctionTsData(
            girConstructorFunc,
            'constructor',
            /* isStatic */ true,
            /* isArrowType */ false,
            /* isGlobal */ false,
            /* isVirtual */ false,
            /* overrideReturnType */ name,
        )
    }

    private getSignalFuncTsData(
        girSignalFunc: GirSignalElement,
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        if (!girClass._tsData) {
            throw new Error('girClass._tsData not set!')
        }

        // Leads to errors here
        // if (!girElementIsIntrospectable(girSignalFunc)) return undefined

        const name = this.transformation.transform('signalName', girSignalFunc.$.name)
        const { returnType, outArrayLengthIndex } = this.getReturnType(girSignalFunc)
        const retTypeIsVoid = returnType === 'void'
        const { inParams, outParams, instanceParameters } = this.setParametersTsData(
            outArrayLengthIndex,
            girSignalFunc.parameters,
        )

        const tsData: TsFunction = {
            name,
            returnType,
            isArrowType: true,
            isStatic: false,
            isGlobal: false,
            isVirtual: false,
            patched: false,
            retTypeIsVoid,
            overloads: [],
            inParams,
            instanceParameters,
            outParams,
        }

        return tsData
    }

    private fixEnumerationDuplicateIdentifier(girEnum: GirEnumElement | GirBitfieldElement) {
        if (!girElementIsIntrospectable(girEnum)) return girEnum

        if (!girEnum._tsData) {
            throw new Error('[fixEnumerationDuplicateIdentifier] ' + ERROR_NO_TSDATA)
        }

        if (!girEnum.member?.length) {
            return girEnum
        }

        const memberNames: string[] = []

        for (const girEnumMember of girEnum.member) {
            if (!girEnumMember._tsData) {
                throw new Error('[fixEnumerationDuplicateIdentifier] ' + ERROR_NO_TSDATA)
            }
            if (memberNames.find((name) => name === girEnumMember._tsData?.name)) {
                const renamed = '_' + girEnumMember._tsData.name
                console.warn(WARN_ENUM_DUPLICATE_IDENTIFIER(girEnumMember._tsData.name, renamed))
                girEnumMember._tsData.name = renamed
            }
            memberNames.push(girEnumMember._tsData.name)
        }
        return girEnum
    }

    private getEnumerationMemberTsData(girEnumMember: GirMemberElement) {
        const memberName = girEnumMember.$.name || girEnumMember.$['glib:nick'] || girEnumMember.$['c:identifier']
        if (!girElementIsIntrospectable(girEnumMember, memberName)) return undefined

        const name = this.transformation.transformEnumMember(memberName)
        const tsData: TsMember = {
            name,
        }
        return tsData
    }

    private getEnumerationTsData(girEnum: GirEnumElement | GirBitfieldElement) {
        if (!girElementIsIntrospectable(girEnum)) return undefined

        // E.g. the NetworkManager-1.0 has enum names starting with 80211
        const name = this.transformation.transformEnumName(girEnum)

        const tsData: TsEnum = {
            name,
        }

        return tsData
    }

    private getAliasTsData(girAlias: GirAliasElement) {
        if (!girElementIsIntrospectable(girAlias)) return undefined

        const typeName = this.typeLookup(girAlias).result
        const name = girAlias.$.name
        const tsData: TsAlias = {
            name,
            type: typeName,
        }
        return tsData
    }

    private getConstantTsData(girConst: GirConstantElement) {
        if (!girElementIsIntrospectable(girConst)) return undefined
        let tsData: TsVar | undefined = this.getVariableTsData(girConst, 'constant', 'constant', false, false)
        if (tsData?.name) {
            if (!this.constNames[tsData.name]) {
                this.constNames[tsData.name] = girConst
            } else {
                this.log.warn(`The constant '${tsData.name}' has already been exported`)
                tsData = undefined
            }
        }

        return tsData
    }

    private getClassConstructPropsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        constructPropNames: LocalNames,
    ) {
        const constructProps: GirPropertyElement[] = []
        const girProperties = (girClass as GirClassElement | GirInterfaceElement).property
        if (!girProperties?.length) {
            return constructProps
        }
        for (const girProp of girProperties) {
            if (!girElementIsIntrospectable(girProp)) continue
            // Do not modify the original girProp, create a new one by clone `girProp` to `girConstrProp`
            const girConstrProp = clone(girProp)

            if (!girConstrProp.$.name) {
                continue
            }

            girConstrProp._tsData = this.getPropertyTsData(
                girConstrProp,
                'property',
                'constructor-property',
                true,
                true,
                0,
            )

            if (!girConstrProp._tsData) {
                continue
            }

            const localName = this.checkOrSetLocalName(girConstrProp, constructPropNames, 'property')

            if (!localName?.added) {
                continue
            }

            // Apply patches
            {
                const constructPropPatches = girConstrProp._fullSymName
                    ? this.getPatches('constructorProperties', girConstrProp._fullSymName)
                    : undefined

                if (constructPropPatches) {
                    this.log.warn(`Patch found for constructor property "${girConstrProp._fullSymName || ''}"!`)
                    girConstrProp._tsData = merge(girConstrProp._tsData, constructPropPatches)
                }
            }

            constructProps.push(girConstrProp)
        }

        return constructProps
    }

    /**
     *
     * @param girClass
     * @param girChildClass
     * @param useReference This method overrides the return value of the constructor functions.
     * If we would use the reference to the `girElement` this value would be overwritten again by other modules
     * @returns
     */
    private getStaticConstructors(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girChildClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = true,
    ): GirConstructorElement[] {
        const constructors = girClass.constructor
        const girConstructors: GirConstructorElement[] = []

        if (!girChildClass._tsData?.name) {
            throw new Error('girClass._tsData.name not set!')
        }

        if (!Array.isArray(constructors) || !girClass._tsData) {
            return girConstructors
        }

        for (const _girConstructor of constructors) {
            if (!girElementIsIntrospectable(_girConstructor)) continue
            let girConstructor: GirConstructorElement
            if (useReference) {
                girConstructor = _girConstructor
            } else {
                girConstructor = clone(_girConstructor)
            }

            girConstructor._tsData = this.getConstructorFunctionTsData(girChildClass._tsData?.name, girConstructor)

            if (!girConstructor?._tsData?.name) {
                continue
            }

            girConstructors.push(girConstructor)
        }

        return girConstructors
    }

    /**
     * Some class/static methods are defined in a separate record which is not
     * exported, but the methods are available as members of the JS constructor.
     * In gjs one can use an instance of the object, a JS constructor or a GType
     * as the method's instance-parameter.
     * @see https://discourse.gnome.org/t/using-class-methods-like-gtk-widget-class-get-css-name-from-gjs/4001
     * @param girClass
     */
    private getClassRecordMethods(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): GirMethodElement[] {
        const girMethods: GirMethodElement[] = []

        if (!girClass.$.name) return girMethods
        const fName = girClass.$.name + 'Class'
        let rec = this.ns.record?.find((r) => r.$.name == fName)
        if (!rec || !this.isGtypeStructFor(girClass, rec)) {
            rec = this.ns.record?.find((r) => this.isGtypeStructFor(girClass, r))
            fName == rec?.$.name
        }
        if (!rec) return girMethods

        // Record methods
        const methods = rec.method || []

        for (const girMethod of methods) {
            if (!girElementIsIntrospectable(girMethod)) continue
            girMethod._tsData = this.getFunctionTsData(
                girMethod,
                'function',
                /* isStatic */ true,
                /* isArrowType */ false,
                /* isGlobal */ false,
                /* isVirtual */ false,
                /* overrideReturnType */ null,
            )
            if (girMethod._tsData) {
                girMethods.push(girMethod)
            }
        }
        return girMethods
    }

    /**
     * Instance methods
     * @param girClass
     * @param localNames
     */
    private getClassMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girMethods: GirMethodElement[] = []
        if (girClass.method) {
            for (const girMethod of girClass.method) {
                if (!girElementIsIntrospectable(girMethod)) continue
                girMethod._tsData = this.getFunctionTsData(
                    girMethod,
                    'method',
                    /* isStatic */ false,
                    /* isArrowType */ false,
                    /* isGlobal */ false,
                    /* isVirtual */ false,
                    /* overrideReturnType */ null,
                )
                const localName = this.checkOrSetLocalName(girMethod, localNames, 'method')
                if (localName?.added && localName.method) {
                    girMethods.push(localName.method)
                }
            }
        }
        return girMethods
    }

    private getClassFieldsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girFields: GirFieldElement[] = []
        if (!girClass._tsData) {
            this.log.warn('[setClassFieldsTsData] girClass._tsData not set!')
            return girFields
        }

        if (girClass.field) {
            for (const girField of girClass.field) {
                if (!girElementIsIntrospectable(girField)) continue
                girField._tsData = this.getVariableTsData(girField, 'field', 'field', false, false)
                if (!girField._tsData) {
                    continue
                }

                const localName = this.checkOrSetLocalName(girField, localNames, 'field')
                if (localName?.added && localName.field) {
                    girFields.push(localName.field)
                }
            }
        }

        return girFields
    }

    private getClassPropertiesTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        localNames: LocalNames,
    ) {
        const girProperties: GirPropertyElement[] = []
        const properties = (girClass as GirClassElement | GirInterfaceElement).property
        if (properties) {
            for (const girProperty of properties) {
                if (!girElementIsIntrospectable(girProperty)) continue
                girProperty._tsData = this.getPropertyTsData(girProperty, 'property', 'field')
                const localName = this.checkOrSetLocalName(girProperty, localNames, 'property')
                if (localName?.added && localName.property) {
                    girProperties.push(localName.property)
                }
            }
        }
        return girProperties
    }

    private getClassPropertyNames(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const propertyNames: string[] = []

        if (!girClass._tsData) {
            return propertyNames
        }

        const girProperties = girClass._tsData.properties

        if (girProperties.length > 0) {
            for (const girProperty of girProperties) {
                if (!girElementIsIntrospectable(girProperty)) continue
                if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                    propertyNames.push(girProperty.$.name)
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._tsData.extends)) {
            const girProperties = girClass._tsData.extends[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        for (const fullSymName of Object.keys(girClass._tsData.implements)) {
            const girProperties = girClass._tsData.implements[fullSymName]?.properties
            if (girProperties.length > 0) {
                for (const girProperty of girProperties) {
                    if (!girElementIsIntrospectable(girProperty)) continue
                    if (girProperty._tsData && girProperty.$.name && !propertyNames.includes(girProperty.$.name)) {
                        propertyNames.push(girProperty.$.name)
                    }
                }
            }
        }

        return propertyNames
    }

    private getClassConstructorsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girConstructors: GirConstructorElement[] = []
        // JS constructor(s)
        if (girClass._tsData?.isDerivedFromGObject) {
            // TODO see generateConstructorAndStaticFunctions.generateConstructorAndStaticFunctions
        } else {
            const constructors = girClass.constructor
            if (Array.isArray(constructors)) {
                for (const girConstructor of constructors) {
                    if (!girElementIsIntrospectable(girConstructor)) continue
                    if (!girClass._tsData?.name) continue

                    girConstructor._tsData = this.getConstructorFunctionTsData(girClass._tsData?.name, girConstructor)

                    if (!girConstructor._tsData?.name || girConstructor._tsData.name !== 'new') continue

                    girConstructors.push(girConstructor)
                }
            }
        }

        return girConstructors
    }

    private getClassVirtualMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girVMethods = this.getOverloadableMethodsTsData(girClass, (girIface) => {
            const girMethods: GirVirtualMethodElement[] = []

            const methods: GirVirtualMethodElement[] = (girIface as GirClassElement)['virtual-method'] || []

            for (const girVMethod of methods) {
                if (!girElementIsIntrospectable(girVMethod)) continue

                girVMethod._tsData = this.getFunctionTsData(
                    girVMethod,
                    'virtual-method',
                    /* isStatic */
                    false,
                    /* isArrowType */
                    false,
                    /* isGLobal */
                    false,
                    /* isVirtual */
                    true,
                    /* overrideReturnType */
                    null,
                )

                if (girVMethod?._tsData?.name) {
                    girMethods.push(girVMethod)
                }
            }

            return methods
        }) as GirVirtualMethodElement[]
        return girVMethods
    }

    /**
     *
     * @param girClass This is the class / interface the `parentClass` implements signals from
     * @param girParentClass The main class which implements the signals from `girClass`
     * @returns
     */
    private getClassSignalsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girParentClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ) {
        const girSignals: GirSignalElement[] = []
        if (!girParentClass._tsData) {
            this.log.warn('girParentClass._tsData not set!')
        }

        const signals: GirSignalElement[] =
            (girClass as GirClassElement | GirInterfaceElement).signal ||
            (girClass as GirClassElement | GirInterfaceElement)['glib:signal'] ||
            []
        if (signals) {
            for (const girSignal of signals) {
                girSignal._tsData = this.getSignalFuncTsData(girSignal, girParentClass)
                girSignals.push(girSignal)
            }
        }
        return girSignals
    }

    private setClassBaseTsData(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        if (!girClass?.$?.name) return undefined

        const girModule: GirModule = girClass._module ? girClass._module : this
        let className = this.transformation.transformClassName(girClass.$.name)
        /**
         * E.g. 'Gtk'
         */
        const namespace = girModule.namespace
        /**
         * E.g. '3.0'
         */
        const version = girModule.version

        let qualifiedName: string
        if (!className.includes('.')) {
            qualifiedName = namespace + '.' + className
        } else {
            qualifiedName = className
            const split = className.split('.')
            className = split[split.length - 1]
        }

        let parentName: string | undefined
        let qualifiedParentName: string | undefined
        let localParentName: string | undefined

        const prerequisiteName = (girClass as GirInterfaceElement)?.prerequisite?.[0]?.$?.name
        if (prerequisiteName) {
            parentName = prerequisiteName
        } else if ((girClass as GirClassElement).$.parent) {
            parentName = (girClass as GirClassElement).$.parent
        }

        let parentModName: string
        if (parentName) {
            if (parentName.indexOf('.') < 0) {
                qualifiedParentName = namespace + '.' + parentName
                parentModName = namespace
            } else {
                qualifiedParentName = parentName
                const split = parentName.split('.')
                parentName = split[split.length - 1]
                parentModName = split.slice(0, split.length - 1).join('.')
            }
            localParentName = parentModName == namespace ? parentName : qualifiedParentName
        }

        girClass._tsData = {
            name: className,
            qualifiedName,
            parentName,
            qualifiedParentName,
            localParentName,
            namespace,
            version,
            isAbstract: this.isAbstractClass(girClass),
            localNames: {},
            constructPropNames: {},
            constructPropInterfaceName: `${className}_ConstructProps`,
            fields: [],
            properties: [],
            constructProps: [],
            propertyNames: [],
            methods: [],
            virtualMethods: [],
            constructors: [],
            staticFunctions: [],
            signals: [],
            extends: {},
            implements: {},
        }

        if (girClass._tsData.qualifiedParentName && localParentName) {
            girClass._tsData.inheritConstructPropInterfaceName = `${localParentName}_ConstructProps`
        }

        girClass._tsData.isDerivedFromGObject = this.isDerivedFromGObject(girClass)

        return girClass._tsData
    }

    private setClassTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): TsClass | undefined {
        if (!girClass?.$?.name) return undefined

        if (girClass._tsData) {
            // TODO: We need to overwrite the already defined girClass._tsData
            // this.log.warn('girClass._tsData was already set')
            return girClass._tsData
        }

        girClass._tsData = this.setClassBaseTsData(girClass)

        if (!girClass._tsData) {
            return undefined
        }

        // BASE

        if (girClass._tsData.isDerivedFromGObject) {
            girClass._tsData.constructProps.push(
                ...this.getClassConstructPropsTsData(girClass, girClass._tsData.constructPropNames),
            )
        }

        girClass._tsData.constructors.push(...this.getClassConstructorsTsData(girClass))
        girClass._tsData.staticFunctions.push(...this.getClassStaticFunctionsTsData(girClass, false))

        // TODO: Can't export fields for GObjects because names would clash
        if (girClass._girType === 'record')
            girClass._tsData.fields.push(...this.getClassFieldsTsData(girClass, girClass._tsData.localNames))

        girClass._tsData.properties.push(...this.getClassPropertiesTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.methods.push(...this.getClassMethodsTsData(girClass, girClass._tsData.localNames))
        girClass._tsData.virtualMethods.push(...this.getClassVirtualMethodsTsData(girClass))
        girClass._tsData.signals.push(...this.getClassSignalsTsData(girClass, girClass))

        // Copy fields and properties from inheritance tree
        this.traverseInheritanceTree(girClass, (extendsCls) => {
            if (!girClass._tsData || !extendsCls._tsData || !extendsCls._fullSymName || !extendsCls._module) {
                return
            }

            if (girClass._fullSymName === extendsCls._fullSymName) {
                return
            }

            const key = extendsCls._module.packageName + '.' + extendsCls._fullSymName
            if (girClass._tsData.extends[key]) return

            girClass._tsData.extends[key] = {
                class: extendsCls,
                fields: [],
                properties: [],
                methods: [],
                virtualMethods: [],
                signals: [],
            }

            girClass._tsData.extends[key].fields.push(
                ...this.getClassFieldsTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].properties.push(
                ...this.getClassPropertiesTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].methods.push(
                ...this.getClassMethodsTsData(extendsCls, girClass._tsData.localNames),
            )
            girClass._tsData.extends[key].virtualMethods.push(...this.getClassVirtualMethodsTsData(extendsCls))
            girClass._tsData.extends[key].signals.push(...this.getClassSignalsTsData(extendsCls, girClass))
        })

        // Copy properties from implemented interface
        this.forEachInterface(girClass, (iface) => {
            if (!girClass._tsData || !iface._tsData || !iface._fullSymName || !iface._module) {
                return
            }

            if (girClass._fullSymName === iface._fullSymName) {
                return
            }

            const key = iface._module.packageName + '.' + iface._fullSymName
            if (girClass._tsData.implements[key]) return

            girClass._tsData.implements[key] = {
                interface: iface,
                properties: [],
                constructProps: [],
                methods: [],
                signals: [],
            }

            if (girClass._tsData.isDerivedFromGObject) {
                girClass._tsData.implements[key].constructProps.push(
                    ...this.getClassConstructPropsTsData(iface, girClass._tsData.constructPropNames),
                )
            }

            girClass._tsData.implements[key].properties.push(
                ...this.getClassPropertiesTsData(iface, girClass._tsData.localNames),
            )
            girClass._tsData.implements[key].methods.push(
                ...this.getClassMethodsTsData(iface, girClass._tsData.localNames),
            )
            girClass._tsData.implements[key].signals.push(...this.getClassSignalsTsData(iface, girClass))
        })

        girClass._tsData.propertyNames.push(...this.getClassPropertyNames(girClass))

        return girClass._tsData
    }

    private isDerivedFromGObject(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
        if (typeof girClass._tsData?.isDerivedFromGObject === 'boolean') return girClass._tsData.isDerivedFromGObject
        let ret = false
        this.traverseInheritanceTree(girClass, (cls) => {
            if (cls._tsData?.isDerivedFromGObject === true || cls._fullSymName === 'GObject.Object') {
                ret = true
            }
        })
        return ret
    }

    private traverseInheritanceTree(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
        depth = 0,
        recursive = true,
    ): void {
        if (!girClass.$.name) return
        if (!girClass._tsData) girClass._tsData = this.setClassTsData(girClass)
        if (!girClass._tsData) return
        const { parentName, qualifiedParentName } = girClass._tsData

        let parentPtr: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement | null = null

        if (parentName && qualifiedParentName) {
            if (this.symTable.get(this.allDependencies, qualifiedParentName)) {
                parentPtr = (this.symTable.get(this.allDependencies, qualifiedParentName) as GirClassElement) || null
            }

            if (!parentPtr && parentName == 'Object') {
                parentPtr = (this.symTable.getByHand('GObject-2.0.GObject.Object') as GirClassElement) || null
            }
        }

        callback(girClass)

        if (parentPtr && recursive) {
            this.traverseInheritanceTree(parentPtr, callback, ++depth, recursive)
        }
    }

    private forEachInterface(
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
        recurseObjects = false,
        dups = {},
    ): void {
        if (!girIface.$.name) return
        if (!girIface._tsData) girIface._tsData = this.setClassTsData(girIface)
        if (!girIface._tsData) return
        const girImplements = (girIface as GirInterfaceElement).implements || []
        if (girImplements?.length) {
            for (const girImplement of girImplements) {
                let name = girImplement.$.name
                const key = this.symTable.getKey(this.allDependencies, name)

                if (!name.includes('.')) {
                    name = addNamespace(name, this.namespace)
                }

                if (key && dups[key]) {
                    continue
                }

                let iface: GirInterfaceElement | null = null
                const _iface = this.symTable.get(this.allDependencies, name)
                if (key) {
                    dups[key] = true
                    iface = _iface as GirInterfaceElement
                }

                if (iface) {
                    callback(iface)
                    this.forEachInterface(iface, callback, recurseObjects, dups)
                }
            }
        }
        const girPrerequisites = (girIface as GirInterfaceElement).prerequisite || []
        if (girPrerequisites?.length) {
            for (const girPrerequisite of girPrerequisites) {
                let parentName = girPrerequisite.$.name
                if (!parentName) {
                    return
                }

                if (!parentName.includes('.')) {
                    parentName = addNamespace(parentName, this.namespace)
                }

                if (Object.prototype.hasOwnProperty.call(dups, parentName)) return
                const parentPtr = this.symTable.get(this.allDependencies, parentName)
                if (parentPtr && ((parentPtr as GirInterfaceElement).prerequisite || recurseObjects)) {
                    // iface's prerequisite is also an interface, or it's
                    // a class and we also want to recurse classes
                    callback(parentPtr as GirInterfaceElement)
                    this.forEachInterface(parentPtr as GirInterfaceElement, callback, recurseObjects, dups)
                }
            }
        }
    }

    private forEachInterfaceAndSelf(
        e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        callback: (cls: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) => void,
    ) {
        callback(e)
        this.forEachInterface(e, callback)
    }

    /**
     *
     * @param girElement
     * @param localNames Can be (constructor) properties, fields or methods
     * @param type
     */
    private checkOrSetLocalName(
        girElement:
            | GirMethodElement
            | GirPropertyElement
            | GirFieldElement
            | GirConstructorElement
            | GirFunctionElement,
        localNames: LocalNames,
        type: LocalNameType,
    ): LocalNameCheck | null {
        let isOverloadable = false

        if (!girElement._tsData) {
            return null
        }

        const name = girElement._tsData?.name

        if (!name) {
            // this.log.warn(`No name for ${desc}`)
            return null
        }

        // Methods are overloadable by typescript
        // TODO Add support for properties
        if (type === 'method') {
            isOverloadable = true
        }

        // Only names of the same type are overloadable
        if (localNames[name]?.type && localNames[name].type !== type) {
            // In GIO there are some methods and properties with the same name
            // E.g. on `WebKit2.WebView.isLoading` and `WebKit2.WebView.isLoading()`
            // See Gjs doc https://gjs-docs.gnome.org/webkit240~4.0_api/webkit2.webview#property-is_loading
            // TODO prefer functions over properties (Overwrite the properties with the functions if they have the same name)

            return null
        }

        // If name is found in localNames this variable was already defined
        if (localNames?.[name]?.[type]?._tsData) {
            // Ignore duplicates with the same type
            // TODO should we use `this.functionSignaturesMatch` here?
            if (isEqual(localNames[name][type]?._tsData, girElement._tsData)) {
                return null
            }

            // Ignore if current method is not overloadable
            if (!isOverloadable) {
                return null
            }
        }

        localNames[name] = localNames[name] || {}
        const localName: LocalName = {
            ...localNames[name],
            [type]: girElement,
            type,
        }

        localNames[name] = localName
        return { ...localName, added: true, isOverloadable }
    }

    /**
     * Some classes implement interfaces which are also implemented by a superclass
     * and we need to exclude those in some circumstances
     * @param girClass
     * @param girIface
     */
    private interfaceIsDuplicate(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        girIface: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): boolean {
        const ifaceName = girIface._fullSymName
        if (!ifaceName) {
            return false
        }
        let rpt = false
        let bottom = true
        this.traverseInheritanceTree(girClass, (sub) => {
            if (rpt) return
            if (bottom) {
                bottom = false
                return
            }
            if ((sub as GirInterfaceElement).prerequisite) {
                this.forEachInterface(
                    sub,
                    (element) => {
                        if (rpt) return
                        if (element._fullSymName === ifaceName) {
                            rpt = true
                        }
                    },
                    true,
                )
            }
        })
        return rpt
    }

    private isGtypeStructFor(
        e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        rec: GirRecordElement,
    ) {
        const isFor = rec.$['glib:is-gtype-struct-for']
        return isFor && isFor == e.$.name
    }

    /**
     * E.g GObject.ObjectClass is a abstract class and required by UPowerGlib-1.0, UDisks-2.0 and others
     * @param girClass
     * @returns `true` if this is this a abstract class.
     */
    private isAbstractClass(girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement) {
        return girClass.$?.['glib:is-gtype-struct-for'] ? true : false
    }

    private functionMatch(
        f1: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
        f2: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
    ) {
        if (!f1._tsData) f1._tsData = this.getFunctionTsData(f1)
        if (!f2._tsData) f2._tsData = this.getFunctionTsData(f2)

        if (!f1._tsData || !f2._tsData) return false

        return isEqual(f1._tsData, f2._tsData)
    }

    /**
     * See comment for addOverloadableFunctions.
     * Returns `true` if (a definition from) `func` is added to map to satisfy
     * an overload, but `false` if it was forced
     * @param map
     * @param func
     * @param force
     */
    private mergeOverloadableFunctions(
        map: FunctionMap,
        girFunc: GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
        force = true,
    ) {
        let result = false
        if (!girFunc._tsData?.name) return result
        const oldFunc = map.get(girFunc._tsData.name)
        if (!oldFunc?._tsData || !girFunc._tsData) {
            if (force && girFunc._tsData) map.set(girFunc._tsData.name, girFunc)
            return result
        }

        const isEqual = this.functionMatch(girFunc, oldFunc)
        if (!isEqual) {
            oldFunc._tsData.overloads.push(girFunc)
            result = true
        }
        return result
    }

    /**
     * `fnMap` values are equivalent to the second element of a TsFunction.
     * If an entry in `fnMap` is changed, its name is added to `explicits` (set of names which must be declared).
     * If `force` is `true`, every function of `f2` is added to `fnMap` and overloads even
     * if it doesn't already contain a function of the same name.
     * @param fnMap
     * @param explicits
     * @param funcs
     * @param force
     */
    private addOverloadableFunctions(
        fnMap: FunctionMap,
        explicits: Set<string>,
        funcs: Array<GirConstructorElement | GirFunctionElement | GirMethodElement | GirVirtualMethodElement>,
        force = false,
    ) {
        for (const func of funcs) {
            if (!func?._tsData?.name) continue
            if (this.mergeOverloadableFunctions(fnMap, func) || force) {
                explicits.add(func._tsData.name)
            }
        }
    }

    private functionMapToArray<
        T = GirFunctionElement | GirConstructorElement | GirMethodElement | GirVirtualMethodElement,
    >(fnMap: FunctionMap<T>, explicits: Set<string>) {
        const girFunctions: Array<T> = []
        for (const key of Array.from(explicits.values())) {
            const func = fnMap.get(key)
            if (func) girFunctions.push(func)
        }
        return girFunctions
    }

    /**
     * Used for <method> and <virtual-method>
     * @param girClass
     * @param getMethods
     * @param isStatic
     */
    private getOverloadableMethodsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        getMethods: (
            girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => Array<GirConstructorElement | GirFunctionElement | GirMethodElement | GirVirtualMethodElement>,
        isStatic = false,
    ) {
        const fnMap: FunctionMap = new Map()
        const explicits = new Set<string>()
        const funcs = getMethods(girClass)
        this.addOverloadableFunctions(fnMap, explicits, funcs, true)
        // Have to implement methods from girClass' interfaces
        this.forEachInterface(
            girClass,
            (iface) => {
                if (!this.interfaceIsDuplicate(girClass, iface)) {
                    const funcs = getMethods(iface)
                    this.addOverloadableFunctions(fnMap, explicits, funcs, true)
                }
            },
            false,
        )
        // Check for overloads among all inherited methods
        let bottom = true
        this.traverseInheritanceTree(girClass, (cls) => {
            if (bottom) {
                bottom = false
                return
            }
            if (isStatic) {
                const funcs = getMethods(cls)
                this.addOverloadableFunctions(fnMap, explicits, funcs, false)
            } else {
                let self = true
                this.forEachInterfaceAndSelf(cls, (iface) => {
                    if (self || this.interfaceIsDuplicate(girClass, iface)) {
                        const funcs = getMethods(iface)
                        this.addOverloadableFunctions(fnMap, explicits, funcs, false)
                    }
                    self = false
                })
            }
        })
        return this.functionMapToArray(fnMap, explicits)
    }

    private getStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        getter: (
            e: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        ) => Array<GirConstructorElement | GirFunctionElement | GirMethodElement>,
    ) {
        return this.getOverloadableMethodsTsData(girClass, getter, true) as Array<
            GirConstructorElement | GirFunctionElement | GirMethodElement
        >
    }

    /**
     *
     * @param girClass
     * @returns
     */
    private getOtherStaticFunctions(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
    ): GirFunctionElement[] {
        const girFunctions: GirFunctionElement[] = []
        if (girClass.function) {
            for (const girFunction of girClass.function) {
                girFunction._tsData = this.getFunctionTsData(
                    girFunction,
                    'function',
                    /* isStatic */
                    true,
                    /* isArrowType */
                    false,
                    /* isGlobal */
                    false,
                    /* isVirtual */
                    false,
                    /* overrideReturnType */
                    null,
                )

                if (!girFunction._tsData?.name || girFunction._tsData?.name === 'new') continue

                girFunctions.push(girFunction)
            }
        }
        return girFunctions
    }

    /**
     * Static methods, <constructor> and <function>
     * @param girClass
     * @param useReference This value should be `false` for inherited and implemented classes / interfaces.
     * Otherwise other modules would overwrite the return value of the constructor methods
     */
    private getClassStaticFunctionsTsData(
        girClass: GirClassElement | GirUnionElement | GirInterfaceElement | GirRecordElement,
        useReference = false,
    ) {
        const girStaticFuncs: Array<GirFunctionElement | GirConstructorElement | GirMethodElement> = []

        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getStaticConstructors(cls, girClass, useReference)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getOtherStaticFunctions(cls)
            }),
        )
        girStaticFuncs.push(
            ...this.getStaticFunctions(girClass, (cls) => {
                return this.getClassRecordMethods(cls)
            }),
        )

        return girStaticFuncs
    }

    private setModuleTsData() {
        if (this.ns.enumeration) {
            for (const girEnum of this.ns.enumeration) {
                if (girEnum.member) {
                    for (const girEnumMember of girEnum.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember)
                    }
                }
                girEnum._tsData = this.getEnumerationTsData(girEnum)
                this.fixEnumerationDuplicateIdentifier(girEnum)
            }
        }

        if (this.ns.bitfield)
            for (const girBitfield of this.ns.bitfield) {
                if (girBitfield.member)
                    for (const girEnumMember of girBitfield.member) {
                        girEnumMember._tsData = this.getEnumerationMemberTsData(girEnumMember)
                    }
                girBitfield._tsData = this.getEnumerationTsData(girBitfield)
                this.fixEnumerationDuplicateIdentifier(girBitfield)
            }

        if (this.ns.constant)
            for (const girConst of this.ns.constant) {
                girConst._tsData = this.getConstantTsData(girConst)
            }

        if (this.ns.function)
            for (const girFunc of this.ns.function) {
                girFunc._tsData = this.getFunctionTsData(
                    girFunc,
                    'function',
                    /* isStatic */
                    false,
                    /* isArrowType */
                    false,
                    /* isGlobal */
                    true,
                    /* isVirtual */
                    false,
                    /* overrideReturnType */
                    null,
                )
            }

        if (this.ns.callback)
            for (const girCallback of this.ns.callback) {
                girCallback._tsData = this.getFunctionTsData(girCallback, 'callback', false, true, false, false, null)
                girCallback._tsDataInterface = this.getCallbackInterfaceTsData(girCallback)
            }

        if (this.ns.interface)
            for (const girIface of this.ns.interface) {
                girIface._tsData = this.setClassTsData(girIface)
            }

        if (this.ns.class)
            for (const girClass of this.ns.class) {
                girClass._tsData = this.setClassTsData(girClass)
            }

        if (this.ns.record)
            for (const girRecord of this.ns.record) {
                girRecord._tsData = this.setClassTsData(girRecord)
            }

        if (this.ns.union)
            for (const girUnion of this.ns.union) {
                girUnion._tsData = this.setClassTsData(girUnion)
            }

        if (this.ns.alias) {
            // GType is not a number in GJS
            for (const girAlias of this.ns.alias) {
                if (this.packageName !== 'GObject-2.0' || girAlias.$.name !== 'Type')
                    girAlias._tsData = this.getAliasTsData(girAlias)
            }
        }
    }

    private girToTsType(girType: 'alias', isStatic?: boolean): 'type'
    private girToTsType(girType: 'enumeration' | 'bitfield', isStatic?: boolean): 'enumeration'
    private girToTsType(girType: 'callback', isStatic?: boolean): 'interface'
    private girToTsType(girType: 'class' | 'interface' | 'union' | 'record', isStatic?: boolean): 'class'
    private girToTsType(girType: 'constant', isStatic?: boolean): 'constant'
    private girToTsType(girType: 'constructor', isStatic?: boolean): 'static-function'
    private girToTsType(girType: 'method' | 'virtual-method', isStatic?: boolean): 'method'
    private girToTsType(girType: 'signal', isStatic?: boolean): 'event-methods'
    private girToTsType(girType: 'function', isStatic: true): 'static-function'
    private girToTsType(girType: 'function', isStatic: false): 'function'
    private girToTsType(
        girType: 'function' | 'method' | 'virtual-method' | 'constructor' | 'callback',
        isStatic?: boolean,
    ): 'function' | 'method' | 'interface' | 'static-function'
    private girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement
    private girToTsType(girType: TypeGirElement, isStatic?: boolean): TypeTsElement {
        switch (girType) {
            case 'alias':
                return 'type'
            case 'enumeration':
            case 'bitfield':
                return 'enumeration'
            case 'callback':
                return 'interface'
            case 'class':
            case 'interface':
            case 'union':
            case 'record':
                return 'class'
            case 'constant':
                return 'constant'
            case 'constructor':
                return 'static-function'
            case 'method':
            case 'virtual-method':
                return 'method'
            case 'signal':
                return 'event-methods'
            case 'function':
                if (typeof isStatic === 'undefined') {
                    throw new Error(
                        'You must specify if the function is static or not if you want to convert the type of a function!',
                    )
                }
                if (isStatic) {
                    return 'static-function'
                }
                return 'function'
        }
        throw new Error(`Unknown gir type: "${String(girType)}"!`)
    }

    /**
     * TODO: find better name for this method
     * @param fullTypeName
     * @returns
     */
    private fullTypeLookupWithNamespace(fullTypeName: string) {
        let resValue = ''
        let namespace = ''

        // Check overwrites first
        if (!resValue && fullTypeName && FULL_TYPE_MAP(this.config.environment, this.packageName, fullTypeName)) {
            resValue = FULL_TYPE_MAP(this.config.environment, this.packageName, fullTypeName) || ''
        }

        // Only use the fullTypeName as the type if it is found in the symTable
        if (!resValue && this.symTable.get(this.allDependencies, fullTypeName)) {
            if (fullTypeName.startsWith(this.namespace + '.')) {
                resValue = removeNamespace(fullTypeName, this.namespace)
                resValue = this.transformation.transformTypeName(resValue)
                // TODO: check if resValue this is a class, enum, interface or unify the transformClassName method
                resValue = this.transformation.transformClassName(resValue)
                namespace = this.namespace
                resValue = namespace + '.' + resValue
            } else {
                const resValues = fullTypeName.split('.')
                resValues.map((name) => this.transformation.transformTypeName(name))
                // TODO: check if resValues[resValues.length - 1] this is a class, enum, interface or unify the transformClassName method
                resValues[resValues.length - 1] = this.transformation.transformClassName(
                    resValues[resValues.length - 1],
                )
                resValue = resValues.join('.')
                namespace = resValues[0]
            }
        }

        return {
            value: resValue,
            namespace,
        }
    }

    private loadInheritance(inheritanceTable: InheritanceTable): void {
        // Class hierarchy
        for (const girClass of this.ns.class ? this.ns.class : []) {
            let parent: string | null = null
            if (girClass.$ && girClass.$.parent) parent = girClass.$.parent
            if (!parent) continue
            if (!girClass._fullSymName) continue

            if (!parent.includes('.')) {
                parent = addNamespace(parent, this.namespace)
            }

            const className = girClass._fullSymName

            const arr: string[] = inheritanceTable[className] || []
            arr.push(parent)
            inheritanceTable[className] = arr
        }

        // Class interface implementations
        for (const girClass of this.ns.class ? this.ns.class : []) {
            if (!girClass._fullSymName) continue

            const names: string[] = []

            if (girClass.implements) {
                for (const girImplements of girClass.implements) {
                    if (girImplements.$.name) {
                        let name: string = girImplements.$.name
                        if (!name.includes('.')) {
                            name = girClass._fullSymName.substring(0, girClass._fullSymName.indexOf('.') + 1) + name
                        }
                        names.push(name)
                    }
                }
            }

            if (names.length > 0) {
                const className = girClass._fullSymName
                const arr: string[] = inheritanceTable[className] || []
                inheritanceTable[className] = arr.concat(names)
            }
        }
    }

    private loadTypes(): void {
        if (this.ns.bitfield) this.annotateAndRegisterGirElement(this.ns.bitfield, 'bitfield')
        if (this.ns.callback) this.annotateAndRegisterGirElement(this.ns.callback, 'callback')
        if (this.ns.class) this.annotateAndRegisterGirElement(this.ns.class, 'class')
        if (this.ns.constant) this.annotateAndRegisterGirElement(this.ns.constant, 'constant')
        if (this.ns.enumeration) this.annotateAndRegisterGirElement(this.ns.enumeration, 'enumeration')
        if (this.ns.function) this.annotateAndRegisterGirElement(this.ns.function, 'function')
        if (this.ns.interface) this.annotateAndRegisterGirElement(this.ns.interface, 'interface')
        if (this.ns.record) this.annotateAndRegisterGirElement(this.ns.record, 'record')
        if (this.ns.union) this.annotateAndRegisterGirElement(this.ns.union, 'union')
        if (this.ns.alias) this.annotateAndRegisterGirElement(this.ns.alias, 'alias')

        if (this.ns.callback) for (const girCallback of this.ns.callback) this.annotateFunctionArguments(girCallback)

        for (const girClass of this.ns.class || []) {
            this.annotateClass(girClass, 'class')
        }
        for (const girClass of this.ns.record || []) {
            this.annotateClass(girClass, 'record')
        }
        for (const girClass of this.ns.interface || []) {
            this.annotateClass(girClass, 'interface')
        }

        if (this.ns.function) this.annotateFunctions(this.ns.function, 'function')
        if (this.ns.callback) this.annotateFunctions(this.ns.callback, 'callback')

        if (this.ns.constant) this.annotateVariables(this.ns.constant, 'constant')
    }

    /**
     * Before processing the typescript data, each module should be initialized first.
     * This is done in the `GenerationHandler`.
     */
    public init(inheritanceTable: InheritanceTable) {
        this.loadTypes()
        this.loadInheritance(inheritanceTable)
    }

    /**
     * Start processing the typescript data
     */
    public start() {
        this.setModuleTsData()
    }
}
