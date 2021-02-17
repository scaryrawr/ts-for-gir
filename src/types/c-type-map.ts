import { GType } from './g-type'

export interface CTypeMap {
    'char*': 'string'
    'gchar*': 'string'
    'gchar**': 'any' // FIXME
    guintptr: 'string'
    GType: GType
}
