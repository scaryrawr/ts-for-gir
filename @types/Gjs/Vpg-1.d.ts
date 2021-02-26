/**
 * Vpg-1
 */

import type * as Gjs from './Gjs';
import type * as Vda from './Vda-1';
import type * as GCalc from './GCalc-1';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as Gio from './Gio-2.0';
import type * as Gee from './Gee-0.8';

export interface Connection_ConstructProps extends GObject.Object_ConstructProps {
    parameters?: Vda.ConnectionParameters
}
export class Connection {
    /* Properties of Vda-1.Vda.Connection */
    readonly status: Vda.ConnectionStatus
    parameters: Vda.ConnectionParameters
    readonly is_opened: boolean
    readonly connection_string: string
    /* Fields of Vpg-1.Vpg.Connection */
    parent_instance: GObject.Object
    priv: ConnectionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject-2.0.GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: any): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: any[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: any): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: Function): void
    /* Methods of Vda-1.Vda.Connection */
    close(_callback_?: Gio.AsyncReadyCallback | null): void
    close_finish(_res_: Gio.AsyncResult): void
    open(_callback_?: Gio.AsyncReadyCallback | null): void
    open_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus
    open_from_string(cnc_string: string, _callback_?: Gio.AsyncReadyCallback | null): void
    open_from_string_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus
    add_savepoint(name?: string | null): boolean
    delete_savepoint(name?: string | null): boolean
    rollback_savepoint(name?: string | null): boolean
    begin_transaction(name?: string | null): boolean
    commit_transaction(name?: string | null): boolean
    rollback_transaction(name?: string | null): boolean
    parse_string(sql: string): Vda.Query
    parse_string_prepared(name: string | null, sql: string): Vda.PreparedQuery | null
    get_prepared_query(name: string): Vda.PreparedQuery | null
    query_from_command(cmd: Vda.SqlCommand, name?: string | null): Vda.PreparedQuery | null
    value_to_quoted_string(v: Vda.SqlValue): string
    current_user(): Vda.Role | null
    locale(category: string): string
    get_status(): Vda.ConnectionStatus
    get_parameters(): Vda.ConnectionParameters
    set_parameters(value: Vda.ConnectionParameters): void
    get_is_opened(): boolean
    get_connection_string(): string
    /* Virtual methods of Vpg-1.Vpg.Connection */
    vfunc_close(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_close_finish(_res_: Gio.AsyncResult): void
    vfunc_open(_callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_open_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus
    vfunc_open_from_string(cnc_string: string, _callback_?: Gio.AsyncReadyCallback | null): void
    vfunc_open_from_string_finish(_res_: Gio.AsyncResult): Vda.ConnectionStatus
    vfunc_add_savepoint(name?: string | null): boolean
    vfunc_delete_savepoint(name?: string | null): boolean
    vfunc_rollback_savepoint(name?: string | null): boolean
    vfunc_begin_transaction(name?: string | null): boolean
    vfunc_commit_transaction(name?: string | null): boolean
    vfunc_rollback_transaction(name?: string | null): boolean
    vfunc_parse_string(sql: string): Vda.Query
    vfunc_parse_string_prepared(name: string | null, sql: string): Vda.PreparedQuery | null
    vfunc_get_prepared_query(name: string): Vda.PreparedQuery | null
    vfunc_query_from_command(cmd: Vda.SqlCommand, name?: string | null): Vda.PreparedQuery | null
    vfunc_value_to_quoted_string(v: Vda.SqlValue): string
    vfunc_current_user(): Vda.Role | null
    vfunc_locale(category: string): string
    vfunc_get_status(): Vda.ConnectionStatus
    vfunc_get_parameters(): Vda.ConnectionParameters
    vfunc_set_parameters(value: Vda.ConnectionParameters): void
    vfunc_get_is_opened(): boolean
    vfunc_get_connection_string(): string
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    /* Signals of Vda-1.Vda.Connection */
    connect(sigName: "closed", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Connection) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "opened", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "opened", callback: (($obj: Connection) => void)): number
    emit(sigName: "opened"): void
    connect(sigName: "closing", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "closing", callback: (($obj: Connection) => void)): number
    emit(sigName: "closing"): void
    connect(sigName: "canceled", callback: (($obj: Connection, message: string) => void)): number
    connect_after(sigName: "canceled", callback: (($obj: Connection, message: string) => void)): number
    emit(sigName: "canceled", message: string): void
    connect(sigName: "timeout", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "timeout", callback: (($obj: Connection) => void)): number
    emit(sigName: "timeout"): void
    connect(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    connect_after(sigName: "disconnected", callback: (($obj: Connection) => void)): number
    emit(sigName: "disconnected"): void
    connect(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parameters", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-opened", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connection-string", callback: (($obj: Connection, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Connection_ConstructProps)
    _init (config?: Connection_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Connection
    static $gtype: GObject.Type
}
export abstract class ConnectionClass {
    /* Fields of Vpg-1.Vpg.ConnectionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ConnectionPrivate {
    static name: string
}