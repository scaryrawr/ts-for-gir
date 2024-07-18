import './@types/gjs/gjs.d.ts'
import './@types/gjs/dom.d.ts'
import './@types/gjs/cairo.d.ts'
import './@types/gjs/gettext.d.ts'
import './@types/gjs/system.d.ts'
import './@types/gtk-2.0/gtk-2.0.d.ts'
import './@types/gtk-3.0/gtk-3.0.d.ts'
import './@types/gtk-4.0/gtk-4.0.d.ts'

import gtk2 from 'gi://Gtk?version=2.0'
console.log(gtk2.__name__, gtk2.__version__)

import gtk3 from 'gi://Gtk?version=3.0'
console.log(gtk3.__name__, gtk3.__version__)

import gtk4 from 'gi://Gtk?version=4.0'
console.log(gtk4.__name__, gtk4.__version__)