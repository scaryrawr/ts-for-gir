export interface TsGenericParameter {
    /** E.g. `T` */
    name: string
    /** E.g. `GObject.Object`, `any` or `unknown` */
    default?: string
    /** E.g. `GObject.Object` */
    extends?: string
}