/**
 * xlib-2.0
 */

import "node"
import type { GObject } from './GObject-2.0';
import type { GLib } from './GLib-2.0';

export declare namespace xlib {

export function openDisplay(): void
export class Display {
    static name: string
}
export class Screen {
    static name: string
}
export class Visual {
    static name: string
}
export class XConfigureEvent {
    static name: string
}
export class XImage {
    static name: string
}
export class XFontStruct {
    static name: string
}
export class XTrapezoid {
    static name: string
}
export class XVisualInfo {
    static name: string
}
export class XWindowAttributes {
    static name: string
}
export class XEvent {
    static name: string
}
export type Atom = number
export type Colormap = number
export type Cursor = number
export type Drawable = number
export type GC = object
export type KeyCode = number
export type KeySym = number
export type Picture = number
export type Time = number
export type VisualID = number
export type Window = number
export type XID = number
export type Pixmap = number
}