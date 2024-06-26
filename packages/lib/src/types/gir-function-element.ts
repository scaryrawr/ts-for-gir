import type { GirCallableParams, GirCallableReturn, PartOfClass } from './index.js'
import * as parser from '@gi.ts/parser'

export interface GirFunctionElement extends PartOfClass, parser.GirFunctionElement {
    parameters?: [GirCallableParams]
    'return-value'?: GirCallableReturn[]
}
