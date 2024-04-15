import type { FileInfo } from './index.js'
import type { LibraryVersion } from '../library-version.js'
import { GirXML } from '@gi.ts/parser'

export interface Dependency extends FileInfo {
    /**
     * E.g. 'Gtk'
     */
    namespace: string
    /**
     * E.g. 'Gtk40'
     * Is used in the generated index.d.ts, for example: `import * as Gtk40 from "./Gtk-4.0.js";`
     */
    importNamespace: string
    /**
     * E.g. '4.0'
     */
    version: string
    /**
     * E.g. '4.14.0'
     */
    libraryVersion: LibraryVersion
    /**
     * E.g. 'Gtk-4.0'
     */
    packageName: string
    /**
     * The NPM package name
     * E.g. 'gtk-4.0'
     */
    importName: string
    /**
     * Import path for the package
     * E.g. './Gtk-4.0.js' or '@girs/Gtk-4.0'
     */
    importPath: string
    /**
     * Import definition for the package
     * E.g. `import type Gtk from '@girs/Gtk-3.0'`
     */
    importDef: string

    girXML: GirXML | null
}
