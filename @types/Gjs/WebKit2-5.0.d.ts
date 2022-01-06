/**
 * WebKit2-5.0
 */

import type * as Gjs from './Gjs';
import type * as Soup from './Soup-3.0';
import type * as Gio from './Gio-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
import type * as JavaScriptCore from './JavaScriptCore-5.0';
import type * as Gtk from './Gtk-4.0';
import type * as Gsk from './Gsk-4.0';
import type * as Graphene from './Graphene-1.0';
import type * as Gdk from './Gdk-4.0';
import type * as cairo from './cairo-1.0';
import type * as PangoCairo from './PangoCairo-1.0';
import type * as Pango from './Pango-1.0';
import type * as HarfBuzz from './HarfBuzz-0.0';
import type * as GdkPixbuf from './GdkPixbuf-2.0';
import type * as GModule from './GModule-2.0';

export enum AuthenticationScheme {
    DEFAULT,
    HTTP_BASIC,
    HTTP_DIGEST,
    HTML_FORM,
    NTLM,
    NEGOTIATE,
    CLIENT_CERTIFICATE_REQUESTED,
    SERVER_TRUST_EVALUATION_REQUESTED,
    CLIENT_CERTIFICATE_PIN_REQUESTED,
    UNKNOWN,
}
export enum AutomationBrowsingContextPresentation {
    WINDOW,
    TAB,
}
export enum AutoplayPolicy {
    ALLOW,
    ALLOW_WITHOUT_SOUND,
    DENY,
}
export enum CacheModel {
    DOCUMENT_VIEWER,
    WEB_BROWSER,
    DOCUMENT_BROWSER,
}
export enum ContextMenuAction {
    NO_ACTION,
    OPEN_LINK,
    OPEN_LINK_IN_NEW_WINDOW,
    DOWNLOAD_LINK_TO_DISK,
    COPY_LINK_TO_CLIPBOARD,
    OPEN_IMAGE_IN_NEW_WINDOW,
    DOWNLOAD_IMAGE_TO_DISK,
    COPY_IMAGE_TO_CLIPBOARD,
    COPY_IMAGE_URL_TO_CLIPBOARD,
    OPEN_FRAME_IN_NEW_WINDOW,
    GO_BACK,
    GO_FORWARD,
    STOP,
    RELOAD,
    COPY,
    CUT,
    PASTE,
    DELETE,
    SELECT_ALL,
    INPUT_METHODS,
    UNICODE,
    SPELLING_GUESS,
    NO_GUESSES_FOUND,
    IGNORE_SPELLING,
    LEARN_SPELLING,
    IGNORE_GRAMMAR,
    FONT_MENU,
    BOLD,
    ITALIC,
    UNDERLINE,
    OUTLINE,
    INSPECT_ELEMENT,
    OPEN_VIDEO_IN_NEW_WINDOW,
    OPEN_AUDIO_IN_NEW_WINDOW,
    COPY_VIDEO_LINK_TO_CLIPBOARD,
    COPY_AUDIO_LINK_TO_CLIPBOARD,
    TOGGLE_MEDIA_CONTROLS,
    TOGGLE_MEDIA_LOOP,
    ENTER_VIDEO_FULLSCREEN,
    MEDIA_PLAY,
    MEDIA_PAUSE,
    MEDIA_MUTE,
    DOWNLOAD_VIDEO_TO_DISK,
    DOWNLOAD_AUDIO_TO_DISK,
    INSERT_EMOJI,
    PASTE_AS_PLAIN_TEXT,
    CUSTOM,
}
export enum CookieAcceptPolicy {
    ALWAYS,
    NEVER,
    NO_THIRD_PARTY,
}
export enum CookiePersistentStorage {
    TEXT,
    SQLITE,
}
export enum CredentialPersistence {
    NONE,
    FOR_SESSION,
    PERMANENT,
}
export enum DownloadError {
    NETWORK,
    CANCELLED_BY_USER,
    DESTINATION,
}
export enum FaviconDatabaseError {
    NOT_INITIALIZED,
    FAVICON_NOT_FOUND,
    FAVICON_UNKNOWN,
}
export enum HardwareAccelerationPolicy {
    ON_DEMAND,
    ALWAYS,
    NEVER,
}
export enum InputPurpose {
    FREE_FORM,
    DIGITS,
    NUMBER,
    PHONE,
    URL,
    EMAIL,
    PASSWORD,
}
export enum InsecureContentEvent {
    RUN,
    DISPLAYED,
}
export enum JavascriptError {
    FAILED,
}
export enum LoadEvent {
    STARTED,
    REDIRECTED,
    COMMITTED,
    FINISHED,
}
export enum MediaCaptureState {
    NONE,
    ACTIVE,
    MUTED,
}
export enum NavigationType {
    LINK_CLICKED,
    FORM_SUBMITTED,
    BACK_FORWARD,
    RELOAD,
    FORM_RESUBMITTED,
    OTHER,
}
export enum NetworkError {
    FAILED,
    TRANSPORT,
    UNKNOWN_PROTOCOL,
    CANCELLED,
    FILE_DOES_NOT_EXIST,
}
export enum NetworkProxyMode {
    DEFAULT,
    NO_PROXY,
    CUSTOM,
}
export enum PluginError {
    FAILED,
    CANNOT_FIND_PLUGIN,
    CANNOT_LOAD_PLUGIN,
    JAVA_UNAVAILABLE,
    CONNECTION_CANCELLED,
    WILL_HANDLE_LOAD,
}
export enum PolicyDecisionType {
    NAVIGATION_ACTION,
    NEW_WINDOW_ACTION,
    RESPONSE,
}
export enum PolicyError {
    FAILED,
    CANNOT_SHOW_MIME_TYPE,
    CANNOT_SHOW_URI,
    FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
    CANNOT_USE_RESTRICTED_PORT,
}
export enum PrintError {
    GENERAL,
    PRINTER_NOT_FOUND,
    INVALID_PAGE_RANGE,
}
export enum PrintOperationResponse {
    PRINT,
    CANCEL,
}
export enum ProcessModel {
    SHARED_SECONDARY_PROCESS,
    MULTIPLE_SECONDARY_PROCESSES,
}
export enum SaveMode {
    MHTML,
}
export enum ScriptDialogType {
    ALERT,
    CONFIRM,
    PROMPT,
    BEFORE_UNLOAD_CONFIRM,
}
export enum SnapshotError {
    CREATE,
}
export enum SnapshotRegion {
    VISIBLE,
    FULL_DOCUMENT,
}
export enum TLSErrorsPolicy {
    IGNORE,
    FAIL,
}
export enum UserContentFilterError {
    INVALID_SOURCE,
    NOT_FOUND,
}
export enum UserContentInjectedFrames {
    ALL_FRAMES,
    TOP_FRAME,
}
export enum UserMessageError {
    MESSAGE,
}
export enum UserScriptInjectionTime {
    START,
    END,
}
export enum UserStyleLevel {
    USER,
    AUTHOR,
}
export enum WebProcessTerminationReason {
    CRASHED,
    EXCEEDED_MEMORY_LIMIT,
    TERMINATED_BY_API,
}
export enum EditorTypingAttributes {
    NONE,
    BOLD,
    ITALIC,
    UNDERLINE,
    STRIKETHROUGH,
}
export enum FindOptions {
    NONE,
    CASE_INSENSITIVE,
    AT_WORD_STARTS,
    TREAT_MEDIAL_CAPITAL_AS_WORD_START,
    BACKWARDS,
    WRAP_AROUND,
}
export enum HitTestResultContext {
    DOCUMENT,
    LINK,
    IMAGE,
    MEDIA,
    EDITABLE,
    SCROLLBAR,
    SELECTION,
}
export enum InputHints {
    NONE,
    SPELLCHECK,
    LOWERCASE,
    UPPERCASE_CHARS,
    UPPERCASE_WORDS,
    UPPERCASE_SENTENCES,
    INHIBIT_OSK,
}
export enum SnapshotOptions {
    NONE,
    INCLUDE_SELECTION_HIGHLIGHTING,
    TRANSPARENT_BACKGROUND,
}
export enum WebsiteDataTypes {
    MEMORY_CACHE,
    DISK_CACHE,
    OFFLINE_APPLICATION_CACHE,
    SESSION_STORAGE,
    LOCAL_STORAGE,
    WEBSQL_DATABASES,
    INDEXEDDB_DATABASES,
    PLUGIN_DATA,
    COOKIES,
    DEVICE_ID_HASH_SALT,
    HSTS_CACHE,
    ITP,
    SERVICE_WORKER_REGISTRATIONS,
    DOM_CACHE,
    ALL,
}
export const EDITING_COMMAND_COPY: string
export const EDITING_COMMAND_CREATE_LINK: string
export const EDITING_COMMAND_CUT: string
export const EDITING_COMMAND_INSERT_IMAGE: string
export const EDITING_COMMAND_PASTE: string
export const EDITING_COMMAND_PASTE_AS_PLAIN_TEXT: string
export const EDITING_COMMAND_REDO: string
export const EDITING_COMMAND_SELECT_ALL: string
export const EDITING_COMMAND_UNDO: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export function download_error_quark(): GLib.Quark
export function favicon_database_error_quark(): GLib.Quark
export function get_major_version(): number
export function get_micro_version(): number
export function get_minor_version(): number
export function javascript_error_quark(): GLib.Quark
export function media_key_system_permission_get_name(request: MediaKeySystemPermissionRequest): string
export function network_error_quark(): GLib.Quark
export function plugin_error_quark(): GLib.Quark
export function policy_error_quark(): GLib.Quark
export function print_error_quark(): GLib.Quark
export function snapshot_error_quark(): GLib.Quark
export function uri_for_display(uri: string): string | null
export function user_content_filter_error_quark(): GLib.Quark
export function user_media_permission_is_for_audio_device(request: UserMediaPermissionRequest): boolean
export function user_media_permission_is_for_display_device(request: UserMediaPermissionRequest): boolean
export function user_media_permission_is_for_video_device(request: UserMediaPermissionRequest): boolean
export function user_message_error_quark(): GLib.Quark
export interface URISchemeRequestCallback {
    (request: URISchemeRequest): void
}
export class PermissionRequest {
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.PermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    static name: string
}
export interface AuthenticationRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class AuthenticationRequest {
    /* Fields of WebKit2-5.0.WebKit2.AuthenticationRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.AuthenticationRequest */
    authenticate(credential?: Credential | null): void
    can_save_credentials(): boolean
    cancel(): void
    get_certificate_pin_flags(): Gio.TlsPasswordFlags
    get_host(): string
    get_port(): number
    get_proposed_credential(): Credential
    get_realm(): string
    get_scheme(): AuthenticationScheme
    get_security_origin(): SecurityOrigin
    is_for_proxy(): boolean
    is_retry(): boolean
    set_can_save_credentials(enabled: boolean): void
    set_proposed_credential(credential: Credential): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.AuthenticationRequest */
    connect(sigName: "authenticated", callback: (($obj: AuthenticationRequest, credential: Credential) => void)): number
    connect_after(sigName: "authenticated", callback: (($obj: AuthenticationRequest, credential: Credential) => void)): number
    emit(sigName: "authenticated", credential: Credential): void
    connect(sigName: "cancelled", callback: (($obj: AuthenticationRequest) => void)): number
    connect_after(sigName: "cancelled", callback: (($obj: AuthenticationRequest) => void)): number
    emit(sigName: "cancelled"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AuthenticationRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AuthenticationRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AuthenticationRequest_ConstructProps)
    _init (config?: AuthenticationRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface AutomationSession_ConstructProps extends GObject.Object_ConstructProps {
    id?: string
}
export class AutomationSession {
    /* Fields of WebKit2-5.0.WebKit2.AutomationSession */
    parent: GObject.Object
    priv: AutomationSessionPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.AutomationSession */
    get_application_info(): ApplicationInfo
    get_id(): string
    set_application_info(info: ApplicationInfo): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.AutomationSession */
    connect(sigName: "create-web-view", callback: (($obj: AutomationSession) => WebView)): number
    connect_after(sigName: "create-web-view", callback: (($obj: AutomationSession) => WebView)): number
    emit(sigName: "create-web-view"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: AutomationSession, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: AutomationSession_ConstructProps)
    _init (config?: AutomationSession_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackForwardList_ConstructProps extends GObject.Object_ConstructProps {
}
export class BackForwardList {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardList */
    parent: GObject.Object
    priv: BackForwardListPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.BackForwardList */
    get_back_item(): BackForwardListItem | null
    get_back_list(): BackForwardListItem[]
    get_back_list_with_limit(limit: number): BackForwardListItem[]
    get_current_item(): BackForwardListItem | null
    get_forward_item(): BackForwardListItem | null
    get_forward_list(): BackForwardListItem[]
    get_forward_list_with_limit(limit: number): BackForwardListItem[]
    get_length(): number
    get_nth_item(index: number): BackForwardListItem | null
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.BackForwardList */
    connect(sigName: "changed", callback: (($obj: BackForwardList, item_added?: BackForwardListItem | null, items_removed?: object | null) => void)): number
    connect_after(sigName: "changed", callback: (($obj: BackForwardList, item_added?: BackForwardListItem | null, items_removed?: object | null) => void)): number
    emit(sigName: "changed", item_added?: BackForwardListItem | null, items_removed?: object | null): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackForwardList, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackForwardList, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackForwardList_ConstructProps)
    _init (config?: BackForwardList_ConstructProps): void
    static $gtype: GObject.Type
}
export interface BackForwardListItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class BackForwardListItem {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardListItem */
    parent: GObject.InitiallyUnowned
    priv: BackForwardListItemPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.BackForwardListItem */
    get_original_uri(): string
    get_title(): string
    get_uri(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: BackForwardListItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: BackForwardListItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: BackForwardListItem_ConstructProps)
    _init (config?: BackForwardListItem_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ColorChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
    rgba?: Gdk.RGBA
}
export class ColorChooserRequest {
    /* Properties of WebKit2-5.0.WebKit2.ColorChooserRequest */
    rgba: Gdk.RGBA
    /* Fields of WebKit2-5.0.WebKit2.ColorChooserRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ColorChooserRequest */
    cancel(): void
    finish(): void
    get_element_rectangle(): /* rect */ Gdk.Rectangle
    get_rgba(): /* rgba */ Gdk.RGBA
    set_rgba(rgba: Gdk.RGBA): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.ColorChooserRequest */
    connect(sigName: "finished", callback: (($obj: ColorChooserRequest) => void)): number
    connect_after(sigName: "finished", callback: (($obj: ColorChooserRequest) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::rgba", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: ColorChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ColorChooserRequest_ConstructProps)
    _init (config?: ColorChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface ContextMenu_ConstructProps extends GObject.Object_ConstructProps {
}
export class ContextMenu {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenu */
    parent: GObject.Object
    priv: ContextMenuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ContextMenu */
    append(item: ContextMenuItem): void
    first(): ContextMenuItem
    get_item_at_position(position: number): ContextMenuItem
    get_items(): ContextMenuItem[]
    get_n_items(): number
    get_user_data(): GLib.Variant
    insert(item: ContextMenuItem, position: number): void
    last(): ContextMenuItem
    move_item(item: ContextMenuItem, position: number): void
    prepend(item: ContextMenuItem): void
    remove(item: ContextMenuItem): void
    remove_all(): void
    set_user_data(user_data: GLib.Variant): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContextMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContextMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContextMenu_ConstructProps)
    _init (config?: ContextMenu_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ContextMenu
    static new_with_items(items: ContextMenuItem[]): ContextMenu
    static $gtype: GObject.Type
}
export interface ContextMenuItem_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
}
export class ContextMenuItem {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenuItem */
    parent: GObject.InitiallyUnowned
    priv: ContextMenuItemPrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ContextMenuItem */
    get_gaction(): Gio.Action
    get_stock_action(): ContextMenuAction
    get_submenu(): ContextMenu
    is_separator(): boolean
    set_submenu(submenu?: ContextMenu | null): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ContextMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ContextMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ContextMenuItem_ConstructProps)
    _init (config?: ContextMenuItem_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_from_gaction(action: Gio.Action, label: string, target?: GLib.Variant | null): ContextMenuItem
    static new_from_stock_action(action: ContextMenuAction): ContextMenuItem
    static new_from_stock_action_with_label(action: ContextMenuAction, label: string): ContextMenuItem
    static new_separator(): ContextMenuItem
    static new_with_submenu(label: string, submenu: ContextMenu): ContextMenuItem
    static $gtype: GObject.Type
}
export interface CookieManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class CookieManager {
    /* Fields of WebKit2-5.0.WebKit2.CookieManager */
    parent: GObject.Object
    priv: CookieManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.CookieManager */
    add_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    add_cookie_finish(result: Gio.AsyncResult): boolean
    delete_all_cookies(): void
    delete_cookie(cookie: Soup.Cookie, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    delete_cookie_finish(result: Gio.AsyncResult): boolean
    delete_cookies_for_domain(domain: string): void
    get_accept_policy(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy
    get_cookies(uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_cookies_finish(result: Gio.AsyncResult): Soup.Cookie[]
    get_domains_with_cookies(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_domains_with_cookies_finish(result: Gio.AsyncResult): string[]
    set_accept_policy(policy: CookieAcceptPolicy): void
    set_persistent_storage(filename: string, storage: CookiePersistentStorage): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.CookieManager */
    connect(sigName: "changed", callback: (($obj: CookieManager) => void)): number
    connect_after(sigName: "changed", callback: (($obj: CookieManager) => void)): number
    emit(sigName: "changed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: CookieManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: CookieManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: CookieManager_ConstructProps)
    _init (config?: CookieManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface DeviceInfoPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class DeviceInfoPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: DeviceInfoPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: DeviceInfoPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: DeviceInfoPermissionRequest_ConstructProps)
    _init (config?: DeviceInfoPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Download_ConstructProps extends GObject.Object_ConstructProps {
    allow_overwrite?: boolean
}
export class Download {
    /* Properties of WebKit2-5.0.WebKit2.Download */
    allow_overwrite: boolean
    readonly destination: string
    readonly estimated_progress: number
    readonly response: URIResponse
    /* Fields of WebKit2-5.0.WebKit2.Download */
    parent: GObject.Object
    priv: DownloadPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Download */
    cancel(): void
    get_allow_overwrite(): boolean
    get_destination(): string
    get_elapsed_time(): number
    get_estimated_progress(): number
    get_received_data_length(): number
    get_request(): URIRequest
    get_response(): URIResponse
    get_web_view(): WebView
    set_allow_overwrite(allowed: boolean): void
    set_destination(uri: string): void
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
    /* Virtual methods of WebKit2-5.0.WebKit2.Download */
    vfunc_decide_destination(suggested_filename: string): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.Download */
    connect(sigName: "created-destination", callback: (($obj: Download, destination: string) => void)): number
    connect_after(sigName: "created-destination", callback: (($obj: Download, destination: string) => void)): number
    emit(sigName: "created-destination", destination: string): void
    connect(sigName: "decide-destination", callback: (($obj: Download, suggested_filename: string) => boolean)): number
    connect_after(sigName: "decide-destination", callback: (($obj: Download, suggested_filename: string) => boolean)): number
    emit(sigName: "decide-destination", suggested_filename: string): void
    connect(sigName: "failed", callback: (($obj: Download, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: (($obj: Download, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: (($obj: Download) => void)): number
    connect_after(sigName: "finished", callback: (($obj: Download) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: (($obj: Download, data_length: number) => void)): number
    connect_after(sigName: "received-data", callback: (($obj: Download, data_length: number) => void)): number
    emit(sigName: "received-data", data_length: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-overwrite", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-overwrite", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::destination", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destination", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-progress", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-progress", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: Download, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Download_ConstructProps)
    _init (config?: Download_ConstructProps): void
    static $gtype: GObject.Type
}
export interface EditorState_ConstructProps extends GObject.Object_ConstructProps {
}
export class EditorState {
    /* Properties of WebKit2-5.0.WebKit2.EditorState */
    readonly typing_attributes: number
    /* Fields of WebKit2-5.0.WebKit2.EditorState */
    parent: GObject.Object
    priv: EditorStatePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.EditorState */
    get_typing_attributes(): number
    is_copy_available(): boolean
    is_cut_available(): boolean
    is_paste_available(): boolean
    is_redo_available(): boolean
    is_undo_available(): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::typing-attributes", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::typing-attributes", callback: (($obj: EditorState, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: EditorState_ConstructProps)
    _init (config?: EditorState_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FaviconDatabase_ConstructProps extends GObject.Object_ConstructProps {
}
export class FaviconDatabase {
    /* Fields of WebKit2-5.0.WebKit2.FaviconDatabase */
    parent: GObject.Object
    priv: FaviconDatabasePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FaviconDatabase */
    clear(): void
    get_favicon(page_uri: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_favicon_finish(result: Gio.AsyncResult): cairo.Surface
    get_favicon_uri(page_uri: string): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.FaviconDatabase */
    connect(sigName: "favicon-changed", callback: (($obj: FaviconDatabase, page_uri: string, favicon_uri: string) => void)): number
    connect_after(sigName: "favicon-changed", callback: (($obj: FaviconDatabase, page_uri: string, favicon_uri: string) => void)): number
    emit(sigName: "favicon-changed", page_uri: string, favicon_uri: string): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FaviconDatabase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FaviconDatabase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FaviconDatabase_ConstructProps)
    _init (config?: FaviconDatabase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FileChooserRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class FileChooserRequest {
    /* Properties of WebKit2-5.0.WebKit2.FileChooserRequest */
    readonly filter: Gtk.FileFilter
    readonly mime_types: string[]
    readonly select_multiple: boolean
    readonly selected_files: string[]
    /* Fields of WebKit2-5.0.WebKit2.FileChooserRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FileChooserRequest */
    cancel(): void
    get_mime_types(): string[]
    get_mime_types_filter(): Gtk.FileFilter
    get_select_multiple(): boolean
    get_selected_files(): string[]
    select_files(files: string[]): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::filter", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-types", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-types", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::select-multiple", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::select-multiple", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::selected-files", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-files", callback: (($obj: FileChooserRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FileChooserRequest_ConstructProps)
    _init (config?: FileChooserRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FindController_ConstructProps extends GObject.Object_ConstructProps {
    web_view?: WebView
}
export class FindController {
    /* Properties of WebKit2-5.0.WebKit2.FindController */
    readonly max_match_count: number
    readonly options: FindOptions
    readonly text: string
    /* Fields of WebKit2-5.0.WebKit2.FindController */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FindController */
    count_matches(search_text: string, find_options: number, max_match_count: number): void
    get_max_match_count(): number
    get_options(): number
    get_search_text(): string
    get_web_view(): WebView
    search(search_text: string, find_options: number, max_match_count: number): void
    search_finish(): void
    search_next(): void
    search_previous(): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.FindController */
    connect(sigName: "counted-matches", callback: (($obj: FindController, match_count: number) => void)): number
    connect_after(sigName: "counted-matches", callback: (($obj: FindController, match_count: number) => void)): number
    emit(sigName: "counted-matches", match_count: number): void
    connect(sigName: "failed-to-find-text", callback: (($obj: FindController) => void)): number
    connect_after(sigName: "failed-to-find-text", callback: (($obj: FindController) => void)): number
    emit(sigName: "failed-to-find-text"): void
    connect(sigName: "found-text", callback: (($obj: FindController, match_count: number) => void)): number
    connect_after(sigName: "found-text", callback: (($obj: FindController, match_count: number) => void)): number
    emit(sigName: "found-text", match_count: number): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::max-match-count", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::max-match-count", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::options", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::options", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::text", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text", callback: (($obj: FindController, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FindController_ConstructProps)
    _init (config?: FindController_ConstructProps): void
    static $gtype: GObject.Type
}
export interface FormSubmissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class FormSubmissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.FormSubmissionRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.FormSubmissionRequest */
    get_text_fields(): GLib.HashTable | null
    list_text_fields(): [ /* returnType */ boolean, /* field_names */ string[] | null, /* field_values */ string[] | null ]
    submit(): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: FormSubmissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FormSubmissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FormSubmissionRequest_ConstructProps)
    _init (config?: FormSubmissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GeolocationManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeolocationManager {
    /* Properties of WebKit2-5.0.WebKit2.GeolocationManager */
    readonly enable_high_accuracy: boolean
    /* Fields of WebKit2-5.0.WebKit2.GeolocationManager */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.GeolocationManager */
    failed(error_message: string): void
    get_enable_high_accuracy(): boolean
    update_position(position: GeolocationPosition): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.GeolocationManager */
    connect(sigName: "start", callback: (($obj: GeolocationManager) => boolean)): number
    connect_after(sigName: "start", callback: (($obj: GeolocationManager) => boolean)): number
    emit(sigName: "start"): void
    connect(sigName: "stop", callback: (($obj: GeolocationManager) => void)): number
    connect_after(sigName: "stop", callback: (($obj: GeolocationManager) => void)): number
    emit(sigName: "stop"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::enable-high-accuracy", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-high-accuracy", callback: (($obj: GeolocationManager, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GeolocationManager_ConstructProps)
    _init (config?: GeolocationManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface GeolocationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class GeolocationPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.GeolocationPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.GeolocationPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: GeolocationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: GeolocationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: GeolocationPermissionRequest_ConstructProps)
    _init (config?: GeolocationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface HitTestResult_ConstructProps extends GObject.Object_ConstructProps {
    context?: number
    image_uri?: string
    link_label?: string
    link_title?: string
    link_uri?: string
    media_uri?: string
}
export class HitTestResult {
    /* Fields of WebKit2-5.0.WebKit2.HitTestResult */
    parent: GObject.Object
    priv: HitTestResultPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.HitTestResult */
    context_is_editable(): boolean
    context_is_image(): boolean
    context_is_link(): boolean
    context_is_media(): boolean
    context_is_scrollbar(): boolean
    context_is_selection(): boolean
    get_context(): number
    get_image_uri(): string
    get_link_label(): string
    get_link_title(): string
    get_link_uri(): string
    get_media_uri(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: HitTestResult, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: HitTestResult_ConstructProps)
    _init (config?: HitTestResult_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InputMethodContext_ConstructProps extends GObject.Object_ConstructProps {
    input_hints?: InputHints
    input_purpose?: InputPurpose
}
export class InputMethodContext {
    /* Properties of WebKit2-5.0.WebKit2.InputMethodContext */
    input_hints: InputHints
    input_purpose: InputPurpose
    /* Fields of WebKit2-5.0.WebKit2.InputMethodContext */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.InputMethodContext */
    filter_key_event(key_event: Gdk.Event): boolean
    get_input_hints(): InputHints
    get_input_purpose(): InputPurpose
    get_preedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    notify_cursor_area(x: number, y: number, width: number, height: number): void
    notify_focus_in(): void
    notify_focus_out(): void
    notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void
    reset(): void
    set_enable_preedit(enabled: boolean): void
    set_input_hints(hints: InputHints): void
    set_input_purpose(purpose: InputPurpose): void
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
    /* Virtual methods of WebKit2-5.0.WebKit2.InputMethodContext */
    vfunc_committed(text: string): void
    vfunc_delete_surrounding(offset: number, n_chars: number): void
    vfunc_filter_key_event(key_event: Gdk.Event): boolean
    vfunc_get_preedit(): [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    vfunc_notify_cursor_area(x: number, y: number, width: number, height: number): void
    vfunc_notify_focus_in(): void
    vfunc_notify_focus_out(): void
    vfunc_notify_surrounding(text: string, length: number, cursor_index: number, selection_index: number): void
    vfunc_preedit_changed(): void
    vfunc_preedit_finished(): void
    vfunc_preedit_started(): void
    vfunc_reset(): void
    vfunc_set_enable_preedit(enabled: boolean): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.InputMethodContext */
    connect(sigName: "committed", callback: (($obj: InputMethodContext, text: string) => void)): number
    connect_after(sigName: "committed", callback: (($obj: InputMethodContext, text: string) => void)): number
    emit(sigName: "committed", text: string): void
    connect(sigName: "delete-surrounding", callback: (($obj: InputMethodContext, offset: number, n_chars: number) => void)): number
    connect_after(sigName: "delete-surrounding", callback: (($obj: InputMethodContext, offset: number, n_chars: number) => void)): number
    emit(sigName: "delete-surrounding", offset: number, n_chars: number): void
    connect(sigName: "preedit-changed", callback: (($obj: InputMethodContext) => void)): number
    connect_after(sigName: "preedit-changed", callback: (($obj: InputMethodContext) => void)): number
    emit(sigName: "preedit-changed"): void
    connect(sigName: "preedit-finished", callback: (($obj: InputMethodContext) => void)): number
    connect_after(sigName: "preedit-finished", callback: (($obj: InputMethodContext) => void)): number
    emit(sigName: "preedit-finished"): void
    connect(sigName: "preedit-started", callback: (($obj: InputMethodContext) => void)): number
    connect_after(sigName: "preedit-started", callback: (($obj: InputMethodContext) => void)): number
    emit(sigName: "preedit-started"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::input-hints", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-hints", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::input-purpose", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-purpose", callback: (($obj: InputMethodContext, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InputMethodContext_ConstructProps)
    _init (config?: InputMethodContext_ConstructProps): void
    static $gtype: GObject.Type
}
export interface InstallMissingMediaPluginsPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class InstallMissingMediaPluginsPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest */
    parent: GObject.Object
    priv: InstallMissingMediaPluginsPermissionRequestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest */
    get_description(): string
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: InstallMissingMediaPluginsPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: InstallMissingMediaPluginsPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps)
    _init (config?: InstallMissingMediaPluginsPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface MediaKeySystemPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class MediaKeySystemPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: MediaKeySystemPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: MediaKeySystemPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: MediaKeySystemPermissionRequest_ConstructProps)
    _init (config?: MediaKeySystemPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NavigationPolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
export class NavigationPolicyDecision {
    /* Properties of WebKit2-5.0.WebKit2.NavigationPolicyDecision */
    readonly frame_name: string
    readonly modifiers: number
    readonly mouse_button: number
    readonly navigation_action: NavigationAction
    readonly navigation_type: NavigationType
    readonly request: URIRequest
    /* Fields of WebKit2-5.0.WebKit2.NavigationPolicyDecision */
    parent: PolicyDecision
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.NavigationPolicyDecision */
    get_frame_name(): string
    get_modifiers(): number
    get_mouse_button(): number
    get_navigation_action(): NavigationAction
    get_navigation_type(): NavigationType
    get_request(): URIRequest
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    use_with_policies(policies: WebsitePolicies): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::frame-name", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-name", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::modifiers", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifiers", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mouse-button", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mouse-button", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::navigation-action", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-action", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::navigation-type", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::navigation-type", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::request", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: (($obj: NavigationPolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NavigationPolicyDecision_ConstructProps)
    _init (config?: NavigationPolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Notification_ConstructProps extends GObject.Object_ConstructProps {
}
export class Notification {
    /* Properties of WebKit2-5.0.WebKit2.Notification */
    readonly body: string
    readonly id: number
    readonly tag: string
    readonly title: string
    /* Fields of WebKit2-5.0.WebKit2.Notification */
    parent: GObject.Object
    priv: NotificationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Notification */
    clicked(): void
    close(): void
    get_body(): string
    get_id(): number
    get_tag(): string | null
    get_title(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.Notification */
    connect(sigName: "clicked", callback: (($obj: Notification) => void)): number
    connect_after(sigName: "clicked", callback: (($obj: Notification) => void)): number
    emit(sigName: "clicked"): void
    connect(sigName: "closed", callback: (($obj: Notification) => void)): number
    connect_after(sigName: "closed", callback: (($obj: Notification) => void)): number
    emit(sigName: "closed"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::body", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tag", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tag", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Notification, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Notification_ConstructProps)
    _init (config?: Notification_ConstructProps): void
    static $gtype: GObject.Type
}
export interface NotificationPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class NotificationPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.NotificationPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.NotificationPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: NotificationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: NotificationPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: NotificationPermissionRequest_ConstructProps)
    _init (config?: NotificationPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface OptionMenu_ConstructProps extends GObject.Object_ConstructProps {
}
export class OptionMenu {
    /* Fields of WebKit2-5.0.WebKit2.OptionMenu */
    parent: GObject.Object
    priv: OptionMenuPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.OptionMenu */
    activate_item(index: number): void
    close(): void
    get_item(index: number): OptionMenuItem
    get_n_items(): number
    select_item(index: number): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.OptionMenu */
    connect(sigName: "close", callback: (($obj: OptionMenu) => void)): number
    connect_after(sigName: "close", callback: (($obj: OptionMenu) => void)): number
    emit(sigName: "close"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: OptionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: OptionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: OptionMenu_ConstructProps)
    _init (config?: OptionMenu_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Plugin_ConstructProps extends GObject.Object_ConstructProps {
}
export class Plugin {
    /* Fields of WebKit2-5.0.WebKit2.Plugin */
    parent: GObject.Object
    priv: PluginPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Plugin */
    get_description(): string
    get_mime_info_list(): MimeInfo[]
    get_name(): string
    get_path(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Plugin, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Plugin_ConstructProps)
    _init (config?: Plugin_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PointerLockPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class PointerLockPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.PointerLockPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.PointerLockPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PointerLockPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PointerLockPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PointerLockPermissionRequest_ConstructProps)
    _init (config?: PointerLockPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PolicyDecision_ConstructProps extends GObject.Object_ConstructProps {
}
export class PolicyDecision {
    /* Fields of WebKit2-5.0.WebKit2.PolicyDecision */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    use_with_policies(policies: WebsitePolicies): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PolicyDecision_ConstructProps)
    _init (config?: PolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
export interface PrintCustomWidget_ConstructProps extends GObject.Object_ConstructProps {
    title?: string
    widget?: Gtk.Widget
}
export class PrintCustomWidget {
    /* Fields of WebKit2-5.0.WebKit2.PrintCustomWidget */
    parent: GObject.Object
    priv: PrintCustomWidgetPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PrintCustomWidget */
    get_title(): string
    get_widget(): Gtk.Widget
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
    /* Virtual methods of WebKit2-5.0.WebKit2.PrintCustomWidget */
    vfunc_apply(widget: Gtk.Widget): void
    vfunc_update(widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.PrintCustomWidget */
    connect(sigName: "apply", callback: (($obj: PrintCustomWidget) => void)): number
    connect_after(sigName: "apply", callback: (($obj: PrintCustomWidget) => void)): number
    emit(sigName: "apply"): void
    connect(sigName: "update", callback: (($obj: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void)): number
    connect_after(sigName: "update", callback: (($obj: PrintCustomWidget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void)): number
    emit(sigName: "update", page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintCustomWidget, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintCustomWidget, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintCustomWidget_ConstructProps)
    _init (config?: PrintCustomWidget_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(widget: Gtk.Widget, title: string): PrintCustomWidget
    static $gtype: GObject.Type
}
export interface PrintOperation_ConstructProps extends GObject.Object_ConstructProps {
    page_setup?: Gtk.PageSetup
    print_settings?: Gtk.PrintSettings
    web_view?: WebView
}
export class PrintOperation {
    /* Properties of WebKit2-5.0.WebKit2.PrintOperation */
    page_setup: Gtk.PageSetup
    print_settings: Gtk.PrintSettings
    /* Fields of WebKit2-5.0.WebKit2.PrintOperation */
    parent: GObject.Object
    priv: PrintOperationPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.PrintOperation */
    get_page_setup(): Gtk.PageSetup
    get_print_settings(): Gtk.PrintSettings
    print(): void
    run_dialog(parent?: Gtk.Window | null): PrintOperationResponse
    set_page_setup(page_setup: Gtk.PageSetup): void
    set_print_settings(print_settings: Gtk.PrintSettings): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.PrintOperation */
    connect(sigName: "create-custom-widget", callback: (($obj: PrintOperation) => PrintCustomWidget)): number
    connect_after(sigName: "create-custom-widget", callback: (($obj: PrintOperation) => PrintCustomWidget)): number
    emit(sigName: "create-custom-widget"): void
    connect(sigName: "failed", callback: (($obj: PrintOperation, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: (($obj: PrintOperation, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "finished", callback: (($obj: PrintOperation) => void)): number
    connect_after(sigName: "finished", callback: (($obj: PrintOperation) => void)): number
    emit(sigName: "finished"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::page-setup", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-setup", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-settings", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-settings", callback: (($obj: PrintOperation, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: PrintOperation_ConstructProps)
    _init (config?: PrintOperation_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(web_view: WebView): PrintOperation
    static $gtype: GObject.Type
}
export interface ResponsePolicyDecision_ConstructProps extends PolicyDecision_ConstructProps {
}
export class ResponsePolicyDecision {
    /* Properties of WebKit2-5.0.WebKit2.ResponsePolicyDecision */
    readonly request: URIRequest
    readonly response: URIResponse
    /* Fields of WebKit2-5.0.WebKit2.ResponsePolicyDecision */
    parent: PolicyDecision
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.ResponsePolicyDecision */
    get_request(): URIRequest
    get_response(): URIResponse
    is_mime_type_supported(): boolean
    /* Methods of WebKit2-5.0.WebKit2.PolicyDecision */
    download(): void
    ignore(): void
    use(): void
    use_with_policies(policies: WebsitePolicies): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::request", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::response", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: ResponsePolicyDecision, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ResponsePolicyDecision_ConstructProps)
    _init (config?: ResponsePolicyDecision_ConstructProps): void
    static $gtype: GObject.Type
}
export interface SecurityManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class SecurityManager {
    /* Fields of WebKit2-5.0.WebKit2.SecurityManager */
    parent: GObject.Object
    priv: SecurityManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.SecurityManager */
    register_uri_scheme_as_cors_enabled(scheme: string): void
    register_uri_scheme_as_display_isolated(scheme: string): void
    register_uri_scheme_as_empty_document(scheme: string): void
    register_uri_scheme_as_local(scheme: string): void
    register_uri_scheme_as_no_access(scheme: string): void
    register_uri_scheme_as_secure(scheme: string): void
    uri_scheme_is_cors_enabled(scheme: string): boolean
    uri_scheme_is_display_isolated(scheme: string): boolean
    uri_scheme_is_empty_document(scheme: string): boolean
    uri_scheme_is_local(scheme: string): boolean
    uri_scheme_is_no_access(scheme: string): boolean
    uri_scheme_is_secure(scheme: string): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: SecurityManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: SecurityManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: SecurityManager_ConstructProps)
    _init (config?: SecurityManager_ConstructProps): void
    static $gtype: GObject.Type
}
export interface Settings_ConstructProps extends GObject.Object_ConstructProps {
    allow_file_access_from_file_urls?: boolean
    allow_modal_dialogs?: boolean
    allow_top_navigation_to_data_urls?: boolean
    allow_universal_access_from_file_urls?: boolean
    auto_load_images?: boolean
    cursive_font_family?: string
    default_charset?: string
    default_font_family?: string
    default_font_size?: number
    default_monospace_font_size?: number
    draw_compositing_indicators?: boolean
    enable_accelerated_2d_canvas?: boolean
    enable_back_forward_navigation_gestures?: boolean
    enable_caret_browsing?: boolean
    enable_developer_extras?: boolean
    enable_dns_prefetching?: boolean
    enable_encrypted_media?: boolean
    enable_frame_flattening?: boolean
    enable_fullscreen?: boolean
    enable_html5_database?: boolean
    enable_html5_local_storage?: boolean
    enable_hyperlink_auditing?: boolean
    enable_java?: boolean
    enable_javascript?: boolean
    enable_javascript_markup?: boolean
    enable_media?: boolean
    enable_media_capabilities?: boolean
    enable_media_stream?: boolean
    enable_mediasource?: boolean
    enable_mock_capture_devices?: boolean
    enable_offline_web_application_cache?: boolean
    enable_page_cache?: boolean
    enable_plugins?: boolean
    enable_private_browsing?: boolean
    enable_resizable_text_areas?: boolean
    enable_site_specific_quirks?: boolean
    enable_smooth_scrolling?: boolean
    enable_spatial_navigation?: boolean
    enable_tabs_to_links?: boolean
    enable_webaudio?: boolean
    enable_webgl?: boolean
    enable_write_console_messages_to_stdout?: boolean
    enable_xss_auditor?: boolean
    fantasy_font_family?: string
    hardware_acceleration_policy?: HardwareAccelerationPolicy
    javascript_can_access_clipboard?: boolean
    javascript_can_open_windows_automatically?: boolean
    load_icons_ignoring_image_load_setting?: boolean
    media_content_types_requiring_hardware_support?: string
    media_playback_allows_inline?: boolean
    media_playback_requires_user_gesture?: boolean
    minimum_font_size?: number
    monospace_font_family?: string
    pictograph_font_family?: string
    print_backgrounds?: boolean
    sans_serif_font_family?: string
    serif_font_family?: string
    user_agent?: string
    zoom_text_only?: boolean
}
export class Settings {
    /* Properties of WebKit2-5.0.WebKit2.Settings */
    allow_file_access_from_file_urls: boolean
    allow_modal_dialogs: boolean
    allow_top_navigation_to_data_urls: boolean
    allow_universal_access_from_file_urls: boolean
    auto_load_images: boolean
    cursive_font_family: string
    default_charset: string
    default_font_family: string
    default_font_size: number
    default_monospace_font_size: number
    draw_compositing_indicators: boolean
    enable_accelerated_2d_canvas: boolean
    enable_back_forward_navigation_gestures: boolean
    enable_caret_browsing: boolean
    enable_developer_extras: boolean
    enable_dns_prefetching: boolean
    enable_encrypted_media: boolean
    enable_frame_flattening: boolean
    enable_fullscreen: boolean
    enable_html5_database: boolean
    enable_html5_local_storage: boolean
    enable_hyperlink_auditing: boolean
    enable_java: boolean
    enable_javascript: boolean
    enable_javascript_markup: boolean
    enable_media: boolean
    enable_media_capabilities: boolean
    enable_media_stream: boolean
    enable_mediasource: boolean
    enable_mock_capture_devices: boolean
    enable_offline_web_application_cache: boolean
    enable_page_cache: boolean
    enable_plugins: boolean
    enable_private_browsing: boolean
    enable_resizable_text_areas: boolean
    enable_site_specific_quirks: boolean
    enable_smooth_scrolling: boolean
    enable_spatial_navigation: boolean
    enable_tabs_to_links: boolean
    enable_webaudio: boolean
    enable_webgl: boolean
    enable_write_console_messages_to_stdout: boolean
    enable_xss_auditor: boolean
    fantasy_font_family: string
    hardware_acceleration_policy: HardwareAccelerationPolicy
    javascript_can_access_clipboard: boolean
    javascript_can_open_windows_automatically: boolean
    load_icons_ignoring_image_load_setting: boolean
    media_content_types_requiring_hardware_support: string
    media_playback_allows_inline: boolean
    media_playback_requires_user_gesture: boolean
    minimum_font_size: number
    monospace_font_family: string
    pictograph_font_family: string
    print_backgrounds: boolean
    sans_serif_font_family: string
    serif_font_family: string
    user_agent: string
    zoom_text_only: boolean
    /* Fields of WebKit2-5.0.WebKit2.Settings */
    parent_instance: GObject.Object
    priv: SettingsPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.Settings */
    get_allow_file_access_from_file_urls(): boolean
    get_allow_modal_dialogs(): boolean
    get_allow_top_navigation_to_data_urls(): boolean
    get_allow_universal_access_from_file_urls(): boolean
    get_auto_load_images(): boolean
    get_cursive_font_family(): string
    get_default_charset(): string
    get_default_font_family(): string
    get_default_font_size(): number
    get_default_monospace_font_size(): number
    get_draw_compositing_indicators(): boolean
    get_enable_accelerated_2d_canvas(): boolean
    get_enable_back_forward_navigation_gestures(): boolean
    get_enable_caret_browsing(): boolean
    get_enable_developer_extras(): boolean
    get_enable_dns_prefetching(): boolean
    get_enable_encrypted_media(): boolean
    get_enable_frame_flattening(): boolean
    get_enable_fullscreen(): boolean
    get_enable_html5_database(): boolean
    get_enable_html5_local_storage(): boolean
    get_enable_hyperlink_auditing(): boolean
    get_enable_java(): boolean
    get_enable_javascript(): boolean
    get_enable_javascript_markup(): boolean
    get_enable_media(): boolean
    get_enable_media_capabilities(): boolean
    get_enable_media_stream(): boolean
    get_enable_mediasource(): boolean
    get_enable_mock_capture_devices(): boolean
    get_enable_offline_web_application_cache(): boolean
    get_enable_page_cache(): boolean
    get_enable_plugins(): boolean
    get_enable_private_browsing(): boolean
    get_enable_resizable_text_areas(): boolean
    get_enable_site_specific_quirks(): boolean
    get_enable_smooth_scrolling(): boolean
    get_enable_spatial_navigation(): boolean
    get_enable_tabs_to_links(): boolean
    get_enable_webaudio(): boolean
    get_enable_webgl(): boolean
    get_enable_write_console_messages_to_stdout(): boolean
    get_enable_xss_auditor(): boolean
    get_fantasy_font_family(): string
    get_hardware_acceleration_policy(): HardwareAccelerationPolicy
    get_javascript_can_access_clipboard(): boolean
    get_javascript_can_open_windows_automatically(): boolean
    get_load_icons_ignoring_image_load_setting(): boolean
    get_media_content_types_requiring_hardware_support(): string
    get_media_playback_allows_inline(): boolean
    get_media_playback_requires_user_gesture(): boolean
    get_minimum_font_size(): number
    get_monospace_font_family(): string
    get_pictograph_font_family(): string
    get_print_backgrounds(): boolean
    get_sans_serif_font_family(): string
    get_serif_font_family(): string
    get_user_agent(): string
    get_zoom_text_only(): boolean
    set_allow_file_access_from_file_urls(allowed: boolean): void
    set_allow_modal_dialogs(allowed: boolean): void
    set_allow_top_navigation_to_data_urls(allowed: boolean): void
    set_allow_universal_access_from_file_urls(allowed: boolean): void
    set_auto_load_images(enabled: boolean): void
    set_cursive_font_family(cursive_font_family: string): void
    set_default_charset(default_charset: string): void
    set_default_font_family(default_font_family: string): void
    set_default_font_size(font_size: number): void
    set_default_monospace_font_size(font_size: number): void
    set_draw_compositing_indicators(enabled: boolean): void
    set_enable_accelerated_2d_canvas(enabled: boolean): void
    set_enable_back_forward_navigation_gestures(enabled: boolean): void
    set_enable_caret_browsing(enabled: boolean): void
    set_enable_developer_extras(enabled: boolean): void
    set_enable_dns_prefetching(enabled: boolean): void
    set_enable_encrypted_media(enabled: boolean): void
    set_enable_frame_flattening(enabled: boolean): void
    set_enable_fullscreen(enabled: boolean): void
    set_enable_html5_database(enabled: boolean): void
    set_enable_html5_local_storage(enabled: boolean): void
    set_enable_hyperlink_auditing(enabled: boolean): void
    set_enable_java(enabled: boolean): void
    set_enable_javascript(enabled: boolean): void
    set_enable_javascript_markup(enabled: boolean): void
    set_enable_media(enabled: boolean): void
    set_enable_media_capabilities(enabled: boolean): void
    set_enable_media_stream(enabled: boolean): void
    set_enable_mediasource(enabled: boolean): void
    set_enable_mock_capture_devices(enabled: boolean): void
    set_enable_offline_web_application_cache(enabled: boolean): void
    set_enable_page_cache(enabled: boolean): void
    set_enable_plugins(enabled: boolean): void
    set_enable_private_browsing(enabled: boolean): void
    set_enable_resizable_text_areas(enabled: boolean): void
    set_enable_site_specific_quirks(enabled: boolean): void
    set_enable_smooth_scrolling(enabled: boolean): void
    set_enable_spatial_navigation(enabled: boolean): void
    set_enable_tabs_to_links(enabled: boolean): void
    set_enable_webaudio(enabled: boolean): void
    set_enable_webgl(enabled: boolean): void
    set_enable_write_console_messages_to_stdout(enabled: boolean): void
    set_enable_xss_auditor(enabled: boolean): void
    set_fantasy_font_family(fantasy_font_family: string): void
    set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void
    set_javascript_can_access_clipboard(enabled: boolean): void
    set_javascript_can_open_windows_automatically(enabled: boolean): void
    set_load_icons_ignoring_image_load_setting(enabled: boolean): void
    set_media_content_types_requiring_hardware_support(content_types?: string | null): void
    set_media_playback_allows_inline(enabled: boolean): void
    set_media_playback_requires_user_gesture(enabled: boolean): void
    set_minimum_font_size(font_size: number): void
    set_monospace_font_family(monospace_font_family: string): void
    set_pictograph_font_family(pictograph_font_family: string): void
    set_print_backgrounds(print_backgrounds: boolean): void
    set_sans_serif_font_family(sans_serif_font_family: string): void
    set_serif_font_family(serif_font_family: string): void
    set_user_agent(user_agent?: string | null): void
    set_user_agent_with_application_details(application_name?: string | null, application_version?: string | null): void
    set_zoom_text_only(zoom_text_only: boolean): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::allow-file-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-file-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-modal-dialogs", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-modal-dialogs", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-top-navigation-to-data-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-top-navigation-to-data-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::allow-universal-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allow-universal-access-from-file-urls", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::auto-load-images", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::auto-load-images", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursive-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursive-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-charset", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-charset", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::default-monospace-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-monospace-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::draw-compositing-indicators", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::draw-compositing-indicators", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-accelerated-2d-canvas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-accelerated-2d-canvas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-back-forward-navigation-gestures", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-back-forward-navigation-gestures", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-caret-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-caret-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-developer-extras", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-developer-extras", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-dns-prefetching", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-dns-prefetching", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-encrypted-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-encrypted-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-frame-flattening", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-frame-flattening", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-fullscreen", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-fullscreen", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-html5-database", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-database", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-html5-local-storage", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-html5-local-storage", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-hyperlink-auditing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-hyperlink-auditing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-java", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-java", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-javascript", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-javascript-markup", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-javascript-markup", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media-capabilities", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-capabilities", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-media-stream", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-media-stream", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-mediasource", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mediasource", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-mock-capture-devices", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-mock-capture-devices", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-offline-web-application-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-offline-web-application-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-page-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-page-cache", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-plugins", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-plugins", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-private-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-private-browsing", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-resizable-text-areas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-resizable-text-areas", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-site-specific-quirks", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-site-specific-quirks", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-smooth-scrolling", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-smooth-scrolling", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-spatial-navigation", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-spatial-navigation", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-tabs-to-links", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-tabs-to-links", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-webaudio", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webaudio", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-webgl", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-webgl", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-write-console-messages-to-stdout", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-write-console-messages-to-stdout", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::enable-xss-auditor", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::enable-xss-auditor", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::fantasy-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fantasy-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hardware-acceleration-policy", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hardware-acceleration-policy", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::javascript-can-access-clipboard", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-access-clipboard", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::javascript-can-open-windows-automatically", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::javascript-can-open-windows-automatically", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-icons-ignoring-image-load-setting", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-content-types-requiring-hardware-support", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-content-types-requiring-hardware-support", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-playback-allows-inline", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-allows-inline", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::media-playback-requires-user-gesture", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::media-playback-requires-user-gesture", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::minimum-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimum-font-size", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::monospace-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monospace-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::pictograph-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pictograph-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::print-backgrounds", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::print-backgrounds", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sans-serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sans-serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::serif-font-family", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::user-agent", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-agent", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-text-only", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-text-only", callback: (($obj: Settings, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Settings_ConstructProps)
    _init (config?: Settings_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Settings
    static font_size_to_pixels(points: number): number
    static font_size_to_points(pixels: number): number
    static $gtype: GObject.Type
}
export interface URIRequest_ConstructProps extends GObject.Object_ConstructProps {
    uri?: string
}
export class URIRequest {
    /* Properties of WebKit2-5.0.WebKit2.URIRequest */
    uri: string
    /* Fields of WebKit2-5.0.WebKit2.URIRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URIRequest */
    get_http_headers(): Soup.MessageHeaders
    get_http_method(): string
    get_uri(): string
    set_uri(uri: string): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URIRequest_ConstructProps)
    _init (config?: URIRequest_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(uri: string): URIRequest
    static $gtype: GObject.Type
}
export interface URIResponse_ConstructProps extends GObject.Object_ConstructProps {
}
export class URIResponse {
    /* Properties of WebKit2-5.0.WebKit2.URIResponse */
    readonly content_length: number
    readonly http_headers: Soup.MessageHeaders
    readonly mime_type: string
    readonly status_code: number
    readonly suggested_filename: string
    readonly uri: string
    /* Fields of WebKit2-5.0.WebKit2.URIResponse */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URIResponse */
    get_content_length(): number
    get_http_headers(): Soup.MessageHeaders
    get_mime_type(): string
    get_status_code(): number
    get_suggested_filename(): string
    get_uri(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-length", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::http-headers", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mime-type", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::status-code", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::suggested-filename", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: URIResponse, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URIResponse_ConstructProps)
    _init (config?: URIResponse_ConstructProps): void
    static $gtype: GObject.Type
}
export interface URISchemeRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class URISchemeRequest {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeRequest */
    parent: GObject.Object
    priv: URISchemeRequestPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URISchemeRequest */
    finish(stream: Gio.InputStream, stream_length: number, content_type?: string | null): void
    finish_error(error: GLib.Error): void
    finish_with_response(response: URISchemeResponse): void
    get_http_headers(): Soup.MessageHeaders
    get_http_method(): string
    get_path(): string
    get_scheme(): string
    get_uri(): string
    get_web_view(): WebView
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: URISchemeRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URISchemeRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URISchemeRequest_ConstructProps)
    _init (config?: URISchemeRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface URISchemeResponse_ConstructProps extends GObject.Object_ConstructProps {
    stream?: Gio.InputStream
    stream_length?: number
}
export class URISchemeResponse {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeResponse */
    parent: GObject.Object
    priv: URISchemeResponsePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.URISchemeResponse */
    set_content_type(content_type: string): void
    set_http_headers(headers: Soup.MessageHeaders): void
    set_status(status_code: number, reason_phrase?: string | null): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: URISchemeResponse, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: URISchemeResponse_ConstructProps)
    _init (config?: URISchemeResponse_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(input_stream: Gio.InputStream, stream_length: number): URISchemeResponse
    static $gtype: GObject.Type
}
export interface UserContentFilterStore_ConstructProps extends GObject.Object_ConstructProps {
    path?: string
}
export class UserContentFilterStore {
    /* Fields of WebKit2-5.0.WebKit2.UserContentFilterStore */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserContentFilterStore */
    fetch_identifiers(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_identifiers_finish(result: Gio.AsyncResult): string[]
    get_path(): string
    load(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    load_finish(result: Gio.AsyncResult): UserContentFilter
    remove(identifier: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    save(identifier: string, source: GLib.Bytes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): UserContentFilter
    save_from_file(identifier: string, file: Gio.File, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_from_file_finish(result: Gio.AsyncResult): UserContentFilter
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserContentFilterStore, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserContentFilterStore_ConstructProps)
    _init (config?: UserContentFilterStore_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(storage_path: string): UserContentFilterStore
    static $gtype: GObject.Type
}
export interface UserContentManager_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserContentManager {
    /* Fields of WebKit2-5.0.WebKit2.UserContentManager */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserContentManager */
    add_filter(filter: UserContentFilter): void
    add_script(script: UserScript): void
    add_style_sheet(stylesheet: UserStyleSheet): void
    register_script_message_handler(name: string): boolean
    register_script_message_handler_in_world(name: string, world_name: string): boolean
    remove_all_filters(): void
    remove_all_scripts(): void
    remove_all_style_sheets(): void
    remove_filter(filter: UserContentFilter): void
    remove_filter_by_id(filter_id: string): void
    remove_script(script: UserScript): void
    remove_style_sheet(stylesheet: UserStyleSheet): void
    unregister_script_message_handler(name: string): void
    unregister_script_message_handler_in_world(name: string, world_name: string): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.UserContentManager */
    connect(sigName: "script-message-received", callback: (($obj: UserContentManager, js_result: JavascriptResult) => void)): number
    connect_after(sigName: "script-message-received", callback: (($obj: UserContentManager, js_result: JavascriptResult) => void)): number
    emit(sigName: "script-message-received", js_result: JavascriptResult): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserContentManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserContentManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserContentManager_ConstructProps)
    _init (config?: UserContentManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): UserContentManager
    static $gtype: GObject.Type
}
export interface UserMediaPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class UserMediaPermissionRequest {
    /* Properties of WebKit2-5.0.WebKit2.UserMediaPermissionRequest */
    readonly is_for_audio_device: boolean
    readonly is_for_video_device: boolean
    /* Fields of WebKit2-5.0.WebKit2.UserMediaPermissionRequest */
    parent: GObject.Object
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.UserMediaPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::is-for-audio-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-audio-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-for-video-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-for-video-device", callback: (($obj: UserMediaPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserMediaPermissionRequest_ConstructProps)
    _init (config?: UserMediaPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface UserMessage_ConstructProps extends GObject.InitiallyUnowned_ConstructProps {
    fd_list?: Gio.UnixFDList
    name?: string
    parameters?: GLib.Variant
}
export class UserMessage {
    /* Fields of WebKit2-5.0.WebKit2.UserMessage */
    parent: GObject.InitiallyUnowned
    priv: UserMessagePrivate
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.UserMessage */
    get_fd_list(): Gio.UnixFDList | null
    get_name(): string
    get_parameters(): GLib.Variant | null
    send_reply(reply: UserMessage): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: UserMessage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: UserMessage_ConstructProps)
    _init (config?: UserMessage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(name: string, parameters?: GLib.Variant | null): UserMessage
    static new_with_fd_list(name: string, parameters?: GLib.Variant | null, fd_list?: Gio.UnixFDList | null): UserMessage
    static $gtype: GObject.Type
}
export interface WebContext_ConstructProps extends GObject.Object_ConstructProps {
    local_storage_directory?: string
    memory_pressure_settings?: MemoryPressureSettings
    process_swap_on_cross_site_navigation_enabled?: boolean
    website_data_manager?: WebsiteDataManager
}
export class WebContext {
    /* Fields of WebKit2-5.0.WebKit2.WebContext */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebContext */
    add_path_to_sandbox(path: string, read_only: boolean): void
    allow_tls_certificate_for_host(certificate: Gio.TlsCertificate, host: string): void
    clear_cache(): void
    download_uri(uri: string): Download
    get_cache_model(): CacheModel
    get_cookie_manager(): CookieManager
    get_favicon_database(): FaviconDatabase
    get_favicon_database_directory(): string
    get_geolocation_manager(): GeolocationManager
    get_plugins(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_plugins_finish(result: Gio.AsyncResult): Plugin[]
    get_process_model(): ProcessModel
    get_sandbox_enabled(): boolean
    get_security_manager(): SecurityManager
    get_spell_checking_enabled(): boolean
    get_spell_checking_languages(): string[]
    get_tls_errors_policy(): TLSErrorsPolicy
    get_use_system_appearance_for_scrollbars(): boolean
    get_web_process_count_limit(): number
    get_website_data_manager(): WebsiteDataManager
    initialize_notification_permissions(allowed_origins: SecurityOrigin[], disallowed_origins: SecurityOrigin[]): void
    is_automation_allowed(): boolean
    is_ephemeral(): boolean
    prefetch_dns(hostname: string): void
    register_uri_scheme(scheme: string, callback: URISchemeRequestCallback): void
    send_message_to_all_extensions(message: UserMessage): void
    set_additional_plugins_directory(directory: string): void
    set_automation_allowed(allowed: boolean): void
    set_cache_model(cache_model: CacheModel): void
    set_disk_cache_directory(directory: string): void
    set_favicon_database_directory(path?: string | null): void
    set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings?: NetworkProxySettings | null): void
    set_preferred_languages(languages?: string[] | null): void
    set_process_model(process_model: ProcessModel): void
    set_sandbox_enabled(enabled: boolean): void
    set_spell_checking_enabled(enabled: boolean): void
    set_spell_checking_languages(languages: string[]): void
    set_tls_errors_policy(policy: TLSErrorsPolicy): void
    set_use_system_appearance_for_scrollbars(enabled: boolean): void
    set_web_extensions_directory(directory: string): void
    set_web_extensions_initialization_user_data(user_data: GLib.Variant): void
    set_web_process_count_limit(limit: number): void
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
    /* Virtual methods of WebKit2-5.0.WebKit2.WebContext */
    vfunc_automation_started(session: AutomationSession): void
    vfunc_download_started(download: Download): void
    vfunc_initialize_notification_permissions(): void
    vfunc_initialize_web_extensions(): void
    vfunc_user_message_received(message: UserMessage): boolean
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.WebContext */
    connect(sigName: "automation-started", callback: (($obj: WebContext, session: AutomationSession) => void)): number
    connect_after(sigName: "automation-started", callback: (($obj: WebContext, session: AutomationSession) => void)): number
    emit(sigName: "automation-started", session: AutomationSession): void
    connect(sigName: "download-started", callback: (($obj: WebContext, download: Download) => void)): number
    connect_after(sigName: "download-started", callback: (($obj: WebContext, download: Download) => void)): number
    emit(sigName: "download-started", download: Download): void
    connect(sigName: "initialize-notification-permissions", callback: (($obj: WebContext) => void)): number
    connect_after(sigName: "initialize-notification-permissions", callback: (($obj: WebContext) => void)): number
    emit(sigName: "initialize-notification-permissions"): void
    connect(sigName: "initialize-web-extensions", callback: (($obj: WebContext) => void)): number
    connect_after(sigName: "initialize-web-extensions", callback: (($obj: WebContext) => void)): number
    emit(sigName: "initialize-web-extensions"): void
    connect(sigName: "user-message-received", callback: (($obj: WebContext, message: UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: WebContext, message: UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: UserMessage): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebContext_ConstructProps)
    _init (config?: WebContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebContext
    static new_ephemeral(): WebContext
    static new_with_website_data_manager(manager: WebsiteDataManager): WebContext
    static get_default(): WebContext
    static $gtype: GObject.Type
}
export interface WebInspector_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebInspector {
    /* Properties of WebKit2-5.0.WebKit2.WebInspector */
    readonly attached_height: number
    readonly can_attach: boolean
    readonly inspected_uri: string
    /* Fields of WebKit2-5.0.WebKit2.WebInspector */
    parent: GObject.Object
    priv: WebInspectorPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebInspector */
    attach(): void
    close(): void
    detach(): void
    get_attached_height(): number
    get_can_attach(): boolean
    get_inspected_uri(): string
    get_web_view(): WebViewBase
    is_attached(): boolean
    show(): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.WebInspector */
    connect(sigName: "attach", callback: (($obj: WebInspector) => boolean)): number
    connect_after(sigName: "attach", callback: (($obj: WebInspector) => boolean)): number
    emit(sigName: "attach"): void
    connect(sigName: "bring-to-front", callback: (($obj: WebInspector) => boolean)): number
    connect_after(sigName: "bring-to-front", callback: (($obj: WebInspector) => boolean)): number
    emit(sigName: "bring-to-front"): void
    connect(sigName: "closed", callback: (($obj: WebInspector) => void)): number
    connect_after(sigName: "closed", callback: (($obj: WebInspector) => void)): number
    emit(sigName: "closed"): void
    connect(sigName: "detach", callback: (($obj: WebInspector) => boolean)): number
    connect_after(sigName: "detach", callback: (($obj: WebInspector) => boolean)): number
    emit(sigName: "detach"): void
    connect(sigName: "open-window", callback: (($obj: WebInspector) => boolean)): number
    connect_after(sigName: "open-window", callback: (($obj: WebInspector) => boolean)): number
    emit(sigName: "open-window"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::attached-height", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attached-height", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-attach", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-attach", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::inspected-uri", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::inspected-uri", callback: (($obj: WebInspector, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebInspector_ConstructProps)
    _init (config?: WebInspector_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebResource_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebResource {
    /* Properties of WebKit2-5.0.WebKit2.WebResource */
    readonly response: URIResponse
    readonly uri: string
    /* Fields of WebKit2-5.0.WebKit2.WebResource */
    parent: GObject.Object
    priv: WebResourcePrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebResource */
    get_data(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_data_finish(result: Gio.AsyncResult): Uint8Array[]
    get_response(): URIResponse
    get_uri(): string
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.WebResource */
    connect(sigName: "failed", callback: (($obj: WebResource, error: GLib.Error) => void)): number
    connect_after(sigName: "failed", callback: (($obj: WebResource, error: GLib.Error) => void)): number
    emit(sigName: "failed", error: GLib.Error): void
    connect(sigName: "failed-with-tls-errors", callback: (($obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): number
    connect_after(sigName: "failed-with-tls-errors", callback: (($obj: WebResource, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => void)): number
    emit(sigName: "failed-with-tls-errors", certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "finished", callback: (($obj: WebResource) => void)): number
    connect_after(sigName: "finished", callback: (($obj: WebResource) => void)): number
    emit(sigName: "finished"): void
    connect(sigName: "received-data", callback: (($obj: WebResource, data_length: number) => void)): number
    connect_after(sigName: "received-data", callback: (($obj: WebResource, data_length: number) => void)): number
    emit(sigName: "received-data", data_length: number): void
    connect(sigName: "sent-request", callback: (($obj: WebResource, request: URIRequest, redirected_response: URIResponse) => void)): number
    connect_after(sigName: "sent-request", callback: (($obj: WebResource, request: URIRequest, redirected_response: URIResponse) => void)): number
    emit(sigName: "sent-request", request: URIRequest, redirected_response: URIResponse): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::response", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::response", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebResource, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebResource_ConstructProps)
    _init (config?: WebResource_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebView_ConstructProps extends WebViewBase_ConstructProps {
    automation_presentation_type?: AutomationBrowsingContextPresentation
    camera_capture_state?: MediaCaptureState
    display_capture_state?: MediaCaptureState
    editable?: boolean
    is_controlled_by_automation?: boolean
    is_ephemeral?: boolean
    is_muted?: boolean
    microphone_capture_state?: MediaCaptureState
    related_view?: WebView
    settings?: Settings
    user_content_manager?: UserContentManager
    web_context?: WebContext
    website_policies?: WebsitePolicies
    zoom_level?: number
    accessible_role?: Gtk.AccessibleRole
}
export class WebView {
    /* Properties of WebKit2-5.0.WebKit2.WebView */
    camera_capture_state: MediaCaptureState
    display_capture_state: MediaCaptureState
    editable: boolean
    readonly estimated_load_progress: number
    readonly favicon: object
    readonly is_loading: boolean
    is_muted: boolean
    readonly is_playing_audio: boolean
    readonly is_web_process_responsive: boolean
    microphone_capture_state: MediaCaptureState
    readonly page_id: number
    settings: Settings
    readonly title: string
    readonly uri: string
    zoom_level: number
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of WebKit2-5.0.WebKit2.WebViewBase */
    parentInstance: Gtk.Widget
    /* Fields of Gtk-4.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebView */
    can_execute_editing_command(command: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    can_execute_editing_command_finish(result: Gio.AsyncResult): boolean
    can_go_back(): boolean
    can_go_forward(): boolean
    can_show_mime_type(mime_type: string): boolean
    download_uri(uri: string): Download
    execute_editing_command(command: string): void
    execute_editing_command_with_argument(command: string, argument: string): void
    get_automation_presentation_type(): AutomationBrowsingContextPresentation
    get_back_forward_list(): BackForwardList
    get_background_color(): /* rgba */ Gdk.RGBA
    get_camera_capture_state(): MediaCaptureState
    get_context(): WebContext
    get_custom_charset(): string
    get_display_capture_state(): MediaCaptureState
    get_editor_state(): EditorState
    get_estimated_load_progress(): number
    get_favicon(): cairo.Surface
    get_find_controller(): FindController
    get_input_method_context(): InputMethodContext | null
    get_inspector(): WebInspector
    get_is_muted(): boolean
    get_is_web_process_responsive(): boolean
    get_main_resource(): WebResource
    get_microphone_capture_state(): MediaCaptureState
    get_page_id(): number
    get_session_state(): WebViewSessionState
    get_settings(): Settings
    get_snapshot(region: SnapshotRegion, options: SnapshotOptions, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface
    get_title(): string
    get_tls_info(): [ /* returnType */ boolean, /* certificate */ Gio.TlsCertificate, /* errors */ Gio.TlsCertificateFlags ]
    get_uri(): string
    get_user_content_manager(): UserContentManager
    get_website_data_manager(): WebsiteDataManager
    get_website_policies(): WebsitePolicies
    get_window_properties(): WindowProperties
    get_zoom_level(): number
    go_back(): void
    go_forward(): void
    go_to_back_forward_list_item(list_item: BackForwardListItem): void
    is_controlled_by_automation(): boolean
    is_editable(): boolean
    is_ephemeral(): boolean
    load_alternate_html(content: string, content_uri: string, base_uri?: string | null): void
    load_bytes(bytes: GLib.Bytes, mime_type?: string | null, encoding?: string | null, base_uri?: string | null): void
    load_html(content: string, base_uri?: string | null): void
    load_plain_text(plain_text: string): void
    load_request(request: URIRequest): void
    load_uri(uri: string): void
    reload(): void
    reload_bypass_cache(): void
    restore_session_state(state: WebViewSessionState): void
    run_javascript(script: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_finish(result: Gio.AsyncResult): JavascriptResult
    run_javascript_from_gresource(resource: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_from_gresource_finish(result: Gio.AsyncResult): JavascriptResult
    run_javascript_in_world(script: string, world_name: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult
    save(save_mode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_finish(result: Gio.AsyncResult): Gio.InputStream
    save_to_file(file: Gio.File, save_mode: SaveMode, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    save_to_file_finish(result: Gio.AsyncResult): boolean
    send_message_to_page(message: UserMessage, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    send_message_to_page_finish(result: Gio.AsyncResult): UserMessage
    set_background_color(rgba: Gdk.RGBA): void
    set_camera_capture_state(state: MediaCaptureState): void
    set_cors_allowlist(allowlist?: string[] | null): void
    set_custom_charset(charset?: string | null): void
    set_display_capture_state(state: MediaCaptureState): void
    set_editable(editable: boolean): void
    set_input_method_context(context?: InputMethodContext | null): void
    set_is_muted(muted: boolean): void
    set_microphone_capture_state(state: MediaCaptureState): void
    set_settings(settings: Settings): void
    set_zoom_level(zoom_level: number): void
    stop_loading(): void
    terminate_web_process(): void
    try_close(): void
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of WebKit2-5.0.WebKit2.WebView */
    vfunc_authenticate(request: AuthenticationRequest): boolean
    vfunc_close(): void
    vfunc_context_menu(context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): boolean
    vfunc_context_menu_dismissed(): void
    vfunc_decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean
    vfunc_enter_fullscreen(): boolean
    vfunc_insecure_content_detected(event: InsecureContentEvent): void
    vfunc_leave_fullscreen(): boolean
    vfunc_load_changed(load_event: LoadEvent): void
    vfunc_load_failed(load_event: LoadEvent, failing_uri: string, error: GLib.Error): boolean
    vfunc_load_failed_with_tls_errors(failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): boolean
    vfunc_mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void
    vfunc_permission_request(permission_request: PermissionRequest): boolean
    vfunc_print(print_operation: PrintOperation): boolean
    vfunc_ready_to_show(): void
    vfunc_resource_load_started(resource: WebResource, request: URIRequest): void
    vfunc_run_as_modal(): void
    vfunc_run_color_chooser(request: ColorChooserRequest): boolean
    vfunc_run_file_chooser(request: FileChooserRequest): boolean
    vfunc_script_dialog(dialog: ScriptDialog): boolean
    vfunc_show_notification(notification: Notification): boolean
    vfunc_show_option_menu(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean
    vfunc_submit_form(request: FormSubmissionRequest): void
    vfunc_user_message_received(message: UserMessage): boolean
    vfunc_web_process_crashed(): boolean
    vfunc_web_process_terminated(reason: WebProcessTerminationReason): void
    /* Virtual methods of WebKit2-5.0.WebKit2.WebViewBase */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of WebKit2-5.0.WebKit2.WebView */
    connect(sigName: "authenticate", callback: (($obj: WebView, request: AuthenticationRequest) => boolean)): number
    connect_after(sigName: "authenticate", callback: (($obj: WebView, request: AuthenticationRequest) => boolean)): number
    emit(sigName: "authenticate", request: AuthenticationRequest): void
    connect(sigName: "close", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "close", callback: (($obj: WebView) => void)): number
    emit(sigName: "close"): void
    connect(sigName: "context-menu", callback: (($obj: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean)): number
    connect_after(sigName: "context-menu", callback: (($obj: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean)): number
    emit(sigName: "context-menu", context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult): void
    connect(sigName: "context-menu-dismissed", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "context-menu-dismissed", callback: (($obj: WebView) => void)): number
    emit(sigName: "context-menu-dismissed"): void
    connect(sigName: "create", callback: (($obj: WebView, navigation_action: NavigationAction) => Gtk.Widget)): number
    connect_after(sigName: "create", callback: (($obj: WebView, navigation_action: NavigationAction) => Gtk.Widget)): number
    emit(sigName: "create", navigation_action: NavigationAction): void
    connect(sigName: "decide-policy", callback: (($obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean)): number
    connect_after(sigName: "decide-policy", callback: (($obj: WebView, decision: PolicyDecision, decision_type: PolicyDecisionType) => boolean)): number
    emit(sigName: "decide-policy", decision: PolicyDecision, decision_type: PolicyDecisionType): void
    connect(sigName: "enter-fullscreen", callback: (($obj: WebView) => boolean)): number
    connect_after(sigName: "enter-fullscreen", callback: (($obj: WebView) => boolean)): number
    emit(sigName: "enter-fullscreen"): void
    connect(sigName: "insecure-content-detected", callback: (($obj: WebView, event: InsecureContentEvent) => void)): number
    connect_after(sigName: "insecure-content-detected", callback: (($obj: WebView, event: InsecureContentEvent) => void)): number
    emit(sigName: "insecure-content-detected", event: InsecureContentEvent): void
    connect(sigName: "leave-fullscreen", callback: (($obj: WebView) => boolean)): number
    connect_after(sigName: "leave-fullscreen", callback: (($obj: WebView) => boolean)): number
    emit(sigName: "leave-fullscreen"): void
    connect(sigName: "load-changed", callback: (($obj: WebView, load_event: LoadEvent) => void)): number
    connect_after(sigName: "load-changed", callback: (($obj: WebView, load_event: LoadEvent) => void)): number
    emit(sigName: "load-changed", load_event: LoadEvent): void
    connect(sigName: "load-failed", callback: (($obj: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    connect_after(sigName: "load-failed", callback: (($obj: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean)): number
    emit(sigName: "load-failed", load_event: LoadEvent, failing_uri: string, error: GLib.Error): void
    connect(sigName: "load-failed-with-tls-errors", callback: (($obj: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    connect_after(sigName: "load-failed-with-tls-errors", callback: (($obj: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean)): number
    emit(sigName: "load-failed-with-tls-errors", failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags): void
    connect(sigName: "mouse-target-changed", callback: (($obj: WebView, hit_test_result: HitTestResult, modifiers: number) => void)): number
    connect_after(sigName: "mouse-target-changed", callback: (($obj: WebView, hit_test_result: HitTestResult, modifiers: number) => void)): number
    emit(sigName: "mouse-target-changed", hit_test_result: HitTestResult, modifiers: number): void
    connect(sigName: "permission-request", callback: (($obj: WebView, request: PermissionRequest) => boolean)): number
    connect_after(sigName: "permission-request", callback: (($obj: WebView, request: PermissionRequest) => boolean)): number
    emit(sigName: "permission-request", request: PermissionRequest): void
    connect(sigName: "print", callback: (($obj: WebView, print_operation: PrintOperation) => boolean)): number
    connect_after(sigName: "print", callback: (($obj: WebView, print_operation: PrintOperation) => boolean)): number
    emit(sigName: "print", print_operation: PrintOperation): void
    connect(sigName: "ready-to-show", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "ready-to-show", callback: (($obj: WebView) => void)): number
    emit(sigName: "ready-to-show"): void
    connect(sigName: "resource-load-started", callback: (($obj: WebView, resource: WebResource, request: URIRequest) => void)): number
    connect_after(sigName: "resource-load-started", callback: (($obj: WebView, resource: WebResource, request: URIRequest) => void)): number
    emit(sigName: "resource-load-started", resource: WebResource, request: URIRequest): void
    connect(sigName: "run-as-modal", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "run-as-modal", callback: (($obj: WebView) => void)): number
    emit(sigName: "run-as-modal"): void
    connect(sigName: "run-color-chooser", callback: (($obj: WebView, request: ColorChooserRequest) => boolean)): number
    connect_after(sigName: "run-color-chooser", callback: (($obj: WebView, request: ColorChooserRequest) => boolean)): number
    emit(sigName: "run-color-chooser", request: ColorChooserRequest): void
    connect(sigName: "run-file-chooser", callback: (($obj: WebView, request: FileChooserRequest) => boolean)): number
    connect_after(sigName: "run-file-chooser", callback: (($obj: WebView, request: FileChooserRequest) => boolean)): number
    emit(sigName: "run-file-chooser", request: FileChooserRequest): void
    connect(sigName: "script-dialog", callback: (($obj: WebView, dialog: ScriptDialog) => boolean)): number
    connect_after(sigName: "script-dialog", callback: (($obj: WebView, dialog: ScriptDialog) => boolean)): number
    emit(sigName: "script-dialog", dialog: ScriptDialog): void
    connect(sigName: "show-notification", callback: (($obj: WebView, notification: Notification) => boolean)): number
    connect_after(sigName: "show-notification", callback: (($obj: WebView, notification: Notification) => boolean)): number
    emit(sigName: "show-notification", notification: Notification): void
    connect(sigName: "show-option-menu", callback: (($obj: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    connect_after(sigName: "show-option-menu", callback: (($obj: WebView, menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle) => boolean)): number
    emit(sigName: "show-option-menu", menu: OptionMenu, event: Gdk.Event, rectangle: Gdk.Rectangle): void
    connect(sigName: "submit-form", callback: (($obj: WebView, request: FormSubmissionRequest) => void)): number
    connect_after(sigName: "submit-form", callback: (($obj: WebView, request: FormSubmissionRequest) => void)): number
    emit(sigName: "submit-form", request: FormSubmissionRequest): void
    connect(sigName: "user-message-received", callback: (($obj: WebView, message: UserMessage) => boolean)): number
    connect_after(sigName: "user-message-received", callback: (($obj: WebView, message: UserMessage) => boolean)): number
    emit(sigName: "user-message-received", message: UserMessage): void
    connect(sigName: "web-process-crashed", callback: (($obj: WebView) => boolean)): number
    connect_after(sigName: "web-process-crashed", callback: (($obj: WebView) => boolean)): number
    emit(sigName: "web-process-crashed"): void
    connect(sigName: "web-process-terminated", callback: (($obj: WebView, reason: WebProcessTerminationReason) => void)): number
    connect_after(sigName: "web-process-terminated", callback: (($obj: WebView, reason: WebProcessTerminationReason) => void)): number
    emit(sigName: "web-process-terminated", reason: WebProcessTerminationReason): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebView) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WebView, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebView, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebView) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebView, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebView) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebView, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebView, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WebView, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebView, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WebView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebView, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebView) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebView) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebView, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebView, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebView) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WebView) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebView) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::camera-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::editable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::estimated-load-progress", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::favicon", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-loading", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-muted", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-playing-audio", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-web-process-responsive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::microphone-capture-state", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::page-id", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::settings", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::uri", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::zoom-level", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: WebView, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebView_ConstructProps)
    _init (config?: WebView_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebView
    static new_with_context(context: WebContext): WebView
    static new_with_related_view(web_view: WebView): WebView
    static new_with_settings(settings: Settings): WebView
    static new_with_user_content_manager(user_content_manager: UserContentManager): WebView
    static $gtype: GObject.Type
}
export interface WebViewBase_ConstructProps extends Gtk.Widget_ConstructProps {
    accessible_role?: Gtk.AccessibleRole
}
export class WebViewBase {
    /* Properties of Gtk-4.0.Gtk.Widget */
    can_focus: boolean
    can_target: boolean
    css_classes: string[]
    cursor: Gdk.Cursor
    focus_on_click: boolean
    focusable: boolean
    halign: Gtk.Align
    readonly has_default: boolean
    readonly has_focus: boolean
    has_tooltip: boolean
    height_request: number
    hexpand: boolean
    hexpand_set: boolean
    layout_manager: Gtk.LayoutManager
    margin_bottom: number
    margin_end: number
    margin_start: number
    margin_top: number
    name: string
    opacity: number
    overflow: Gtk.Overflow
    readonly parent: Gtk.Widget
    receives_default: boolean
    readonly root: Gtk.Root
    readonly scale_factor: number
    sensitive: boolean
    tooltip_markup: string
    tooltip_text: string
    valign: Gtk.Align
    vexpand: boolean
    vexpand_set: boolean
    visible: boolean
    width_request: number
    /* Properties of Gtk-4.0.Gtk.Accessible */
    accessible_role: Gtk.AccessibleRole
    /* Fields of WebKit2-5.0.WebKit2.WebViewBase */
    parentInstance: Gtk.Widget
    /* Fields of Gtk-4.0.Gtk.Widget */
    parent_instance: GObject.InitiallyUnowned
    /* Fields of GObject-2.0.GObject.InitiallyUnowned */
    g_type_instance: GObject.TypeInstance
    /* Methods of Gtk-4.0.Gtk.Widget */
    action_set_enabled(action_name: string, enabled: boolean): void
    activate(): boolean
    activate_action(name: string, args?: GLib.Variant | null): boolean
    activate_default(): void
    add_controller(controller: Gtk.EventController): void
    add_css_class(css_class: string): void
    add_mnemonic_label(label: Gtk.Widget): void
    add_tick_callback(callback: Gtk.TickCallback): number
    allocate(width: number, height: number, baseline: number, transform?: Gsk.Transform | null): void
    child_focus(direction: Gtk.DirectionType): boolean
    compute_bounds(target: Gtk.Widget): [ /* returnType */ boolean, /* out_bounds */ Graphene.Rect ]
    compute_expand(orientation: Gtk.Orientation): boolean
    compute_point(target: Gtk.Widget, point: Graphene.Point): [ /* returnType */ boolean, /* out_point */ Graphene.Point ]
    compute_transform(target: Gtk.Widget): [ /* returnType */ boolean, /* out_transform */ Graphene.Matrix ]
    contains(x: number, y: number): boolean
    create_pango_context(): Pango.Context
    create_pango_layout(text?: string | null): Pango.Layout
    drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean
    error_bell(): void
    get_allocated_baseline(): number
    get_allocated_height(): number
    get_allocated_width(): number
    get_allocation(): /* allocation */ Gtk.Allocation
    get_ancestor(widget_type: GObject.Type): Gtk.Widget | null
    get_can_focus(): boolean
    get_can_target(): boolean
    get_child_visible(): boolean
    get_clipboard(): Gdk.Clipboard
    get_css_classes(): string[]
    get_css_name(): string
    get_cursor(): Gdk.Cursor | null
    get_direction(): Gtk.TextDirection
    get_display(): Gdk.Display
    get_first_child(): Gtk.Widget | null
    get_focus_child(): Gtk.Widget | null
    get_focus_on_click(): boolean
    get_focusable(): boolean
    get_font_map(): Pango.FontMap | null
    get_font_options(): cairo.FontOptions | null
    get_frame_clock(): Gdk.FrameClock | null
    get_halign(): Gtk.Align
    get_has_tooltip(): boolean
    get_height(): number
    get_hexpand(): boolean
    get_hexpand_set(): boolean
    get_last_child(): Gtk.Widget | null
    get_layout_manager(): Gtk.LayoutManager | null
    get_mapped(): boolean
    get_margin_bottom(): number
    get_margin_end(): number
    get_margin_start(): number
    get_margin_top(): number
    get_name(): string
    get_native(): Gtk.Native | null
    get_next_sibling(): Gtk.Widget | null
    get_opacity(): number
    get_overflow(): Gtk.Overflow
    get_pango_context(): Pango.Context
    get_parent(): Gtk.Widget | null
    get_preferred_size(): [ /* minimum_size */ Gtk.Requisition | null, /* natural_size */ Gtk.Requisition | null ]
    get_prev_sibling(): Gtk.Widget | null
    get_primary_clipboard(): Gdk.Clipboard
    get_realized(): boolean
    get_receives_default(): boolean
    get_request_mode(): Gtk.SizeRequestMode
    get_root(): Gtk.Root | null
    get_scale_factor(): number
    get_sensitive(): boolean
    get_settings(): Gtk.Settings
    get_size(orientation: Gtk.Orientation): number
    get_size_request(): [ /* width */ number | null, /* height */ number | null ]
    get_state_flags(): Gtk.StateFlags
    get_style_context(): Gtk.StyleContext
    get_template_child(widget_type: GObject.Type, name: string): GObject.Object
    get_tooltip_markup(): string | null
    get_tooltip_text(): string | null
    get_valign(): Gtk.Align
    get_vexpand(): boolean
    get_vexpand_set(): boolean
    get_visible(): boolean
    get_width(): number
    grab_focus(): boolean
    has_css_class(css_class: string): boolean
    has_visible_focus(): boolean
    hide(): void
    in_destruction(): boolean
    init_template(): void
    insert_action_group(name: string, group?: Gio.ActionGroup | null): void
    insert_after(parent: Gtk.Widget, previous_sibling?: Gtk.Widget | null): void
    insert_before(parent: Gtk.Widget, next_sibling?: Gtk.Widget | null): void
    is_ancestor(ancestor: Gtk.Widget): boolean
    is_drawable(): boolean
    is_focus(): boolean
    is_sensitive(): boolean
    is_visible(): boolean
    keynav_failed(direction: Gtk.DirectionType): boolean
    list_mnemonic_labels(): Gtk.Widget[]
    map(): void
    measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    mnemonic_activate(group_cycling: boolean): boolean
    observe_children(): Gio.ListModel
    observe_controllers(): Gio.ListModel
    pick(x: number, y: number, flags: Gtk.PickFlags): Gtk.Widget | null
    queue_allocate(): void
    queue_draw(): void
    queue_resize(): void
    realize(): void
    remove_controller(controller: Gtk.EventController): void
    remove_css_class(css_class: string): void
    remove_mnemonic_label(label: Gtk.Widget): void
    remove_tick_callback(id: number): void
    set_can_focus(can_focus: boolean): void
    set_can_target(can_target: boolean): void
    set_child_visible(child_visible: boolean): void
    set_css_classes(classes: string[]): void
    set_cursor(cursor?: Gdk.Cursor | null): void
    set_cursor_from_name(name?: string | null): void
    set_direction(dir: Gtk.TextDirection): void
    set_focus_child(child?: Gtk.Widget | null): void
    set_focus_on_click(focus_on_click: boolean): void
    set_focusable(focusable: boolean): void
    set_font_map(font_map?: Pango.FontMap | null): void
    set_font_options(options?: cairo.FontOptions | null): void
    set_halign(align: Gtk.Align): void
    set_has_tooltip(has_tooltip: boolean): void
    set_hexpand(expand: boolean): void
    set_hexpand_set(set: boolean): void
    set_layout_manager(layout_manager?: Gtk.LayoutManager | null): void
    set_margin_bottom(margin: number): void
    set_margin_end(margin: number): void
    set_margin_start(margin: number): void
    set_margin_top(margin: number): void
    set_name(name: string): void
    set_opacity(opacity: number): void
    set_overflow(overflow: Gtk.Overflow): void
    set_parent(parent: Gtk.Widget): void
    set_receives_default(receives_default: boolean): void
    set_sensitive(sensitive: boolean): void
    set_size_request(width: number, height: number): void
    set_state_flags(flags: Gtk.StateFlags, clear: boolean): void
    set_tooltip_markup(markup?: string | null): void
    set_tooltip_text(text?: string | null): void
    set_valign(align: Gtk.Align): void
    set_vexpand(expand: boolean): void
    set_vexpand_set(set: boolean): void
    set_visible(visible: boolean): void
    should_layout(): boolean
    show(): void
    size_allocate(allocation: Gtk.Allocation, baseline: number): void
    snapshot_child(child: Gtk.Widget, snapshot: Gtk.Snapshot): void
    translate_coordinates(dest_widget: Gtk.Widget, src_x: number, src_y: number): [ /* returnType */ boolean, /* dest_x */ number | null, /* dest_y */ number | null ]
    trigger_tooltip_query(): void
    unmap(): void
    unparent(): void
    unrealize(): void
    unset_state_flags(flags: Gtk.StateFlags): void
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
    /* Methods of Gtk-4.0.Gtk.Accessible */
    get_accessible_role(): Gtk.AccessibleRole
    reset_property(property: Gtk.AccessibleProperty): void
    reset_relation(relation: Gtk.AccessibleRelation): void
    reset_state(state: Gtk.AccessibleState): void
    update_property(properties: Gtk.AccessibleProperty[], values: any[]): void
    update_relation(relations: Gtk.AccessibleRelation[], values: any[]): void
    update_state(states: Gtk.AccessibleState[], values: any[]): void
    /* Methods of Gtk-4.0.Gtk.Buildable */
    get_buildable_id(): string
    /* Virtual methods of WebKit2-5.0.WebKit2.WebViewBase */
    vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type?: string | null): void
    vfunc_custom_finished(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_end(builder: Gtk.Builder, child: GObject.Object | null, tagname: string, data?: object | null): void
    vfunc_custom_tag_start(builder: Gtk.Builder, child: GObject.Object | null, tagname: string): [ /* returnType */ boolean, /* parser */ Gtk.BuildableParser, /* data */ object | null ]
    vfunc_get_id(): string
    vfunc_get_internal_child(builder: Gtk.Builder, childname: string): GObject.Object
    vfunc_parser_finished(builder: Gtk.Builder): void
    vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: any): void
    vfunc_set_id(id: string): void
    /* Virtual methods of Gtk-4.0.Gtk.Widget */
    vfunc_compute_expand(hexpand_p: boolean, vexpand_p: boolean): void
    vfunc_contains(x: number, y: number): boolean
    vfunc_css_changed(change: Gtk.CssStyleChange): void
    vfunc_direction_changed(previous_direction: Gtk.TextDirection): void
    vfunc_focus(direction: Gtk.DirectionType): boolean
    vfunc_get_request_mode(): Gtk.SizeRequestMode
    vfunc_grab_focus(): boolean
    vfunc_hide(): void
    vfunc_keynav_failed(direction: Gtk.DirectionType): boolean
    vfunc_map(): void
    vfunc_measure(orientation: Gtk.Orientation, for_size: number): [ /* minimum */ number | null, /* natural */ number | null, /* minimum_baseline */ number | null, /* natural_baseline */ number | null ]
    vfunc_mnemonic_activate(group_cycling: boolean): boolean
    vfunc_move_focus(direction: Gtk.DirectionType): void
    vfunc_query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Gtk.Tooltip): boolean
    vfunc_realize(): void
    vfunc_root(): void
    vfunc_set_focus_child(child?: Gtk.Widget | null): void
    vfunc_show(): void
    vfunc_size_allocate(width: number, height: number, baseline: number): void
    vfunc_snapshot(snapshot: Gtk.Snapshot): void
    vfunc_state_flags_changed(previous_state_flags: Gtk.StateFlags): void
    vfunc_system_setting_changed(settings: Gtk.SystemSetting): void
    vfunc_unmap(): void
    vfunc_unrealize(): void
    vfunc_unroot(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of Gtk-4.0.Gtk.Widget */
    connect(sigName: "destroy", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "destroy", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "destroy"): void
    connect(sigName: "direction-changed", callback: (($obj: WebViewBase, previous_direction: Gtk.TextDirection) => void)): number
    connect_after(sigName: "direction-changed", callback: (($obj: WebViewBase, previous_direction: Gtk.TextDirection) => void)): number
    emit(sigName: "direction-changed", previous_direction: Gtk.TextDirection): void
    connect(sigName: "hide", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "hide", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "hide"): void
    connect(sigName: "keynav-failed", callback: (($obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    connect_after(sigName: "keynav-failed", callback: (($obj: WebViewBase, direction: Gtk.DirectionType) => boolean)): number
    emit(sigName: "keynav-failed", direction: Gtk.DirectionType): void
    connect(sigName: "map", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "map", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "map"): void
    connect(sigName: "mnemonic-activate", callback: (($obj: WebViewBase, group_cycling: boolean) => boolean)): number
    connect_after(sigName: "mnemonic-activate", callback: (($obj: WebViewBase, group_cycling: boolean) => boolean)): number
    emit(sigName: "mnemonic-activate", group_cycling: boolean): void
    connect(sigName: "move-focus", callback: (($obj: WebViewBase, direction: Gtk.DirectionType) => void)): number
    connect_after(sigName: "move-focus", callback: (($obj: WebViewBase, direction: Gtk.DirectionType) => void)): number
    emit(sigName: "move-focus", direction: Gtk.DirectionType): void
    connect(sigName: "query-tooltip", callback: (($obj: WebViewBase, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    connect_after(sigName: "query-tooltip", callback: (($obj: WebViewBase, x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip) => boolean)): number
    emit(sigName: "query-tooltip", x: number, y: number, keyboard_mode: boolean, tooltip: Gtk.Tooltip): void
    connect(sigName: "realize", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "realize", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "realize"): void
    connect(sigName: "show", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "show", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "show"): void
    connect(sigName: "state-flags-changed", callback: (($obj: WebViewBase, flags: Gtk.StateFlags) => void)): number
    connect_after(sigName: "state-flags-changed", callback: (($obj: WebViewBase, flags: Gtk.StateFlags) => void)): number
    emit(sigName: "state-flags-changed", flags: Gtk.StateFlags): void
    connect(sigName: "unmap", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "unmap", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "unmap"): void
    connect(sigName: "unrealize", callback: (($obj: WebViewBase) => void)): number
    connect_after(sigName: "unrealize", callback: (($obj: WebViewBase) => void)): number
    emit(sigName: "unrealize"): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: "notify::can-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::can-target", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-target", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::css-classes", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::css-classes", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::cursor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focus-on-click", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::focusable", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focusable", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::halign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::has-tooltip", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::height-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::hexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::layout-manager", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-bottom", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-end", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-start", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::margin-top", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::opacity", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::overflow", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::overflow", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::parent", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::receives-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::root", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::root", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::scale-factor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::sensitive", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-markup", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::tooltip-text", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::valign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::vexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::visible", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::width-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: "notify::accessible-role", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accessible-role", callback: (($obj: WebViewBase, pspec: GObject.ParamSpec) => void)): number
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebViewBase_ConstructProps)
    _init (config?: WebViewBase_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsiteDataAccessPermissionRequest_ConstructProps extends GObject.Object_ConstructProps {
}
export class WebsiteDataAccessPermissionRequest {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest */
    get_current_domain(): string
    get_requesting_domain(): string
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
    /* Methods of WebKit2-5.0.WebKit2.PermissionRequest */
    allow(): void
    deny(): void
    /* Virtual methods of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequest */
    vfunc_allow(): void
    vfunc_deny(): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsiteDataAccessPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsiteDataAccessPermissionRequest, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsiteDataAccessPermissionRequest_ConstructProps)
    _init (config?: WebsiteDataAccessPermissionRequest_ConstructProps): void
    static $gtype: GObject.Type
}
export interface WebsiteDataManager_ConstructProps extends GObject.Object_ConstructProps {
    base_cache_directory?: string
    base_data_directory?: string
    disk_cache_directory?: string
    dom_cache_directory?: string
    hsts_cache_directory?: string
    indexeddb_directory?: string
    is_ephemeral?: boolean
    itp_directory?: string
    local_storage_directory?: string
    offline_application_cache_directory?: string
    service_worker_registrations_directory?: string
    websql_directory?: string
}
export class WebsiteDataManager {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataManager */
    parent: GObject.Object
    priv: WebsiteDataManagerPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsiteDataManager */
    clear(types: WebsiteDataTypes, timespan: GLib.TimeSpan, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    clear_finish(result: Gio.AsyncResult): boolean
    fetch(types: WebsiteDataTypes, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    fetch_finish(result: Gio.AsyncResult): WebsiteData[]
    get_base_cache_directory(): string | null
    get_base_data_directory(): string | null
    get_cookie_manager(): CookieManager
    get_disk_cache_directory(): string | null
    get_dom_cache_directory(): string | null
    get_hsts_cache_directory(): string | null
    get_indexeddb_directory(): string | null
    get_itp_directory(): string | null
    get_itp_enabled(): boolean
    get_itp_summary(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    get_itp_summary_finish(result: Gio.AsyncResult): ITPThirdParty[]
    get_local_storage_directory(): string | null
    get_offline_application_cache_directory(): string | null
    get_persistent_credential_storage_enabled(): boolean
    get_service_worker_registrations_directory(): string | null
    get_tls_errors_policy(): TLSErrorsPolicy
    get_websql_directory(): string | null
    is_ephemeral(): boolean
    remove(types: WebsiteDataTypes, website_data: WebsiteData[], cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    remove_finish(result: Gio.AsyncResult): boolean
    set_itp_enabled(enabled: boolean): void
    set_network_proxy_settings(proxy_mode: NetworkProxyMode, proxy_settings?: NetworkProxySettings | null): void
    set_persistent_credential_storage_enabled(enabled: boolean): void
    set_tls_errors_policy(policy: TLSErrorsPolicy): void
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsiteDataManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsiteDataManager_ConstructProps)
    _init (config?: WebsiteDataManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new_ephemeral(): WebsiteDataManager
    static set_memory_pressure_settings(settings: MemoryPressureSettings): void
    static $gtype: GObject.Type
}
export interface WebsitePolicies_ConstructProps extends GObject.Object_ConstructProps {
    autoplay?: AutoplayPolicy
}
export class WebsitePolicies {
    /* Fields of WebKit2-5.0.WebKit2.WebsitePolicies */
    parent: GObject.Object
    priv: WebsitePoliciesPrivate
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WebsitePolicies */
    get_autoplay_policy(): AutoplayPolicy
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WebsitePolicies, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WebsitePolicies, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WebsitePolicies_ConstructProps)
    _init (config?: WebsitePolicies_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): WebsitePolicies
    static $gtype: GObject.Type
}
export interface WindowProperties_ConstructProps extends GObject.Object_ConstructProps {
    fullscreen?: boolean
    geometry?: Gdk.Rectangle
    locationbar_visible?: boolean
    menubar_visible?: boolean
    resizable?: boolean
    scrollbars_visible?: boolean
    statusbar_visible?: boolean
    toolbar_visible?: boolean
}
export class WindowProperties {
    /* Fields of WebKit2-5.0.WebKit2.WindowProperties */
    parent: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of WebKit2-5.0.WebKit2.WindowProperties */
    get_fullscreen(): boolean
    get_geometry(): /* geometry */ Gdk.Rectangle
    get_locationbar_visible(): boolean
    get_menubar_visible(): boolean
    get_resizable(): boolean
    get_scrollbars_visible(): boolean
    get_statusbar_visible(): boolean
    get_toolbar_visible(): boolean
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
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    connect(sigName: "notify", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: WindowProperties, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: WindowProperties_ConstructProps)
    _init (config?: WindowProperties_ConstructProps): void
    static $gtype: GObject.Type
}
export class ApplicationInfo {
    /* Methods of WebKit2-5.0.WebKit2.ApplicationInfo */
    get_name(): string
    get_version(): [ /* major */ number, /* minor */ number | null, /* micro */ number | null ]
    ref(): ApplicationInfo
    set_name(name: string): void
    set_version(major: number, minor: number, micro: number): void
    unref(): void
    static name: string
    static new(): ApplicationInfo
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ApplicationInfo
}
export abstract class AuthenticationRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.AuthenticationRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AuthenticationRequestPrivate {
    static name: string
}
export abstract class AutomationSessionClass {
    /* Fields of WebKit2-5.0.WebKit2.AutomationSessionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class AutomationSessionPrivate {
    static name: string
}
export abstract class BackForwardListClass {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardListClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class BackForwardListItemClass {
    /* Fields of WebKit2-5.0.WebKit2.BackForwardListItemClass */
    parent_class: GObject.InitiallyUnownedClass
    static name: string
}
export class BackForwardListItemPrivate {
    static name: string
}
export class BackForwardListPrivate {
    static name: string
}
export abstract class ColorChooserRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.ColorChooserRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ColorChooserRequestPrivate {
    static name: string
}
export abstract class ContextMenuClass {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenuClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class ContextMenuItemClass {
    /* Fields of WebKit2-5.0.WebKit2.ContextMenuItemClass */
    parent_class: GObject.InitiallyUnownedClass
    static name: string
}
export class ContextMenuItemPrivate {
    static name: string
}
export class ContextMenuPrivate {
    static name: string
}
export abstract class CookieManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.CookieManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class CookieManagerPrivate {
    static name: string
}
export class Credential {
    /* Methods of WebKit2-5.0.WebKit2.Credential */
    copy(): Credential
    free(): void
    get_certificate(): Gio.TlsCertificate
    get_password(): string
    get_persistence(): CredentialPersistence
    get_username(): string
    has_password(): boolean
    static name: string
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    constructor(username: string, password: string, persistence: CredentialPersistence)
    /* Static methods and pseudo-constructors */
    static new(username: string, password: string, persistence: CredentialPersistence): Credential
    static new_for_certificate(certificate: Gio.TlsCertificate | null, persistence: CredentialPersistence): Credential
    static new_for_certificate_pin(pin: string, persistence: CredentialPersistence): Credential
}
export abstract class DeviceInfoPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.DeviceInfoPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class DeviceInfoPermissionRequestPrivate {
    static name: string
}
export abstract class DownloadClass {
    /* Fields of WebKit2-5.0.WebKit2.DownloadClass */
    parent_class: GObject.ObjectClass
    decide_destination: (download: Download, suggested_filename: string) => boolean
    static name: string
}
export class DownloadPrivate {
    static name: string
}
export abstract class EditorStateClass {
    /* Fields of WebKit2-5.0.WebKit2.EditorStateClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class EditorStatePrivate {
    static name: string
}
export abstract class FaviconDatabaseClass {
    /* Fields of WebKit2-5.0.WebKit2.FaviconDatabaseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FaviconDatabasePrivate {
    static name: string
}
export abstract class FileChooserRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.FileChooserRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FileChooserRequestPrivate {
    static name: string
}
export abstract class FindControllerClass {
    /* Fields of WebKit2-5.0.WebKit2.FindControllerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FindControllerPrivate {
    static name: string
}
export abstract class FormSubmissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.FormSubmissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class FormSubmissionRequestPrivate {
    static name: string
}
export abstract class GeolocationManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.GeolocationManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GeolocationManagerPrivate {
    static name: string
}
export abstract class GeolocationPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.GeolocationPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class GeolocationPermissionRequestPrivate {
    static name: string
}
export class GeolocationPosition {
    /* Methods of WebKit2-5.0.WebKit2.GeolocationPosition */
    copy(): GeolocationPosition
    free(): void
    set_altitude(altitude: number): void
    set_altitude_accuracy(altitude_accuracy: number): void
    set_heading(heading: number): void
    set_speed(speed: number): void
    set_timestamp(timestamp: number): void
    static name: string
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
    constructor(latitude: number, longitude: number, accuracy: number)
    /* Static methods and pseudo-constructors */
    static new(latitude: number, longitude: number, accuracy: number): GeolocationPosition
}
export abstract class HitTestResultClass {
    /* Fields of WebKit2-5.0.WebKit2.HitTestResultClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class HitTestResultPrivate {
    static name: string
}
export class ITPFirstParty {
    /* Methods of WebKit2-5.0.WebKit2.ITPFirstParty */
    get_domain(): string
    get_last_update_time(): GLib.DateTime
    get_website_data_access_allowed(): boolean
    ref(): ITPFirstParty
    unref(): void
    static name: string
}
export class ITPThirdParty {
    /* Methods of WebKit2-5.0.WebKit2.ITPThirdParty */
    get_domain(): string
    get_first_parties(): ITPFirstParty[]
    ref(): ITPThirdParty
    unref(): void
    static name: string
}
export abstract class InputMethodContextClass {
    /* Fields of WebKit2-5.0.WebKit2.InputMethodContextClass */
    parent_class: GObject.ObjectClass
    preedit_started: (context: InputMethodContext) => void
    preedit_changed: (context: InputMethodContext) => void
    preedit_finished: (context: InputMethodContext) => void
    committed: (context: InputMethodContext, text: string) => void
    delete_surrounding: (context: InputMethodContext, offset: number, n_chars: number) => void
    set_enable_preedit: (context: InputMethodContext, enabled: boolean) => void
    get_preedit: (context: InputMethodContext) => [ /* text */ string | null, /* underlines */ InputMethodUnderline[] | null, /* cursor_offset */ number | null ]
    filter_key_event: (context: InputMethodContext, key_event: Gdk.Event) => boolean
    notify_focus_in: (context: InputMethodContext) => void
    notify_focus_out: (context: InputMethodContext) => void
    notify_cursor_area: (context: InputMethodContext, x: number, y: number, width: number, height: number) => void
    notify_surrounding: (context: InputMethodContext, text: string, length: number, cursor_index: number, selection_index: number) => void
    reset: (context: InputMethodContext) => void
    static name: string
}
export class InputMethodContextPrivate {
    static name: string
}
export class InputMethodUnderline {
    /* Methods of WebKit2-5.0.WebKit2.InputMethodUnderline */
    copy(): InputMethodUnderline
    free(): void
    set_color(rgba?: Gdk.RGBA | null): void
    static name: string
    static new(start_offset: number, end_offset: number): InputMethodUnderline
    constructor(start_offset: number, end_offset: number)
    /* Static methods and pseudo-constructors */
    static new(start_offset: number, end_offset: number): InputMethodUnderline
}
export abstract class InstallMissingMediaPluginsPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.InstallMissingMediaPluginsPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class InstallMissingMediaPluginsPermissionRequestPrivate {
    static name: string
}
export class JavascriptResult {
    /* Methods of WebKit2-5.0.WebKit2.JavascriptResult */
    get_js_value(): JavaScriptCore.Value
    ref(): JavascriptResult
    unref(): void
    static name: string
}
export abstract class MediaKeySystemPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.MediaKeySystemPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class MediaKeySystemPermissionRequestPrivate {
    static name: string
}
export class MemoryPressureSettings {
    /* Methods of WebKit2-5.0.WebKit2.MemoryPressureSettings */
    copy(): MemoryPressureSettings
    free(): void
    get_conservative_threshold(): number
    get_kill_threshold(): number
    get_memory_limit(): number
    get_poll_interval(): number
    get_strict_threshold(): number
    set_conservative_threshold(value: number): void
    set_kill_threshold(value: number): void
    set_memory_limit(memory_limit: number): void
    set_poll_interval(value: number): void
    set_strict_threshold(value: number): void
    static name: string
    static new(): MemoryPressureSettings
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): MemoryPressureSettings
}
export class MimeInfo {
    /* Methods of WebKit2-5.0.WebKit2.MimeInfo */
    get_description(): string
    get_extensions(): string[]
    get_mime_type(): string
    ref(): MimeInfo
    unref(): void
    static name: string
}
export class NavigationAction {
    /* Methods of WebKit2-5.0.WebKit2.NavigationAction */
    copy(): NavigationAction
    free(): void
    get_modifiers(): number
    get_mouse_button(): number
    get_navigation_type(): NavigationType
    get_request(): URIRequest
    is_redirect(): boolean
    is_user_gesture(): boolean
    static name: string
}
export abstract class NavigationPolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.NavigationPolicyDecisionClass */
    parent_class: PolicyDecisionClass
    static name: string
}
export class NavigationPolicyDecisionPrivate {
    static name: string
}
export class NetworkProxySettings {
    /* Methods of WebKit2-5.0.WebKit2.NetworkProxySettings */
    add_proxy_for_scheme(scheme: string, proxy_uri: string): void
    copy(): NetworkProxySettings
    free(): void
    static name: string
    static new(default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings
    constructor(default_proxy_uri?: string | null, ignore_hosts?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(default_proxy_uri?: string | null, ignore_hosts?: string[] | null): NetworkProxySettings
}
export abstract class NotificationClass {
    /* Fields of WebKit2-5.0.WebKit2.NotificationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export abstract class NotificationPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.NotificationPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class NotificationPermissionRequestPrivate {
    static name: string
}
export class NotificationPrivate {
    static name: string
}
export abstract class OptionMenuClass {
    /* Fields of WebKit2-5.0.WebKit2.OptionMenuClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class OptionMenuItem {
    /* Methods of WebKit2-5.0.WebKit2.OptionMenuItem */
    copy(): OptionMenuItem
    free(): void
    get_label(): string
    get_tooltip(): string
    is_enabled(): boolean
    is_group_child(): boolean
    is_group_label(): boolean
    is_selected(): boolean
    static name: string
}
export class OptionMenuPrivate {
    static name: string
}
export abstract class PermissionRequestIface {
    /* Fields of WebKit2-5.0.WebKit2.PermissionRequestIface */
    parent_interface: GObject.TypeInterface
    allow: (request: PermissionRequest) => void
    deny: (request: PermissionRequest) => void
    static name: string
}
export abstract class PluginClass {
    /* Fields of WebKit2-5.0.WebKit2.PluginClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class PointerLockPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.PointerLockPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PointerLockPermissionRequestPrivate {
    static name: string
}
export abstract class PolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.PolicyDecisionClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PolicyDecisionPrivate {
    static name: string
}
export abstract class PrintCustomWidgetClass {
    /* Fields of WebKit2-5.0.WebKit2.PrintCustomWidgetClass */
    parent_class: GObject.ObjectClass
    apply: (print_custom_widget: PrintCustomWidget, widget: Gtk.Widget) => void
    update: (print_custom_widget: PrintCustomWidget, widget: Gtk.Widget, page_setup: Gtk.PageSetup, print_settings: Gtk.PrintSettings) => void
    static name: string
}
export class PrintCustomWidgetPrivate {
    static name: string
}
export abstract class PrintOperationClass {
    /* Fields of WebKit2-5.0.WebKit2.PrintOperationClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class PrintOperationPrivate {
    static name: string
}
export abstract class ResponsePolicyDecisionClass {
    /* Fields of WebKit2-5.0.WebKit2.ResponsePolicyDecisionClass */
    parent_class: PolicyDecisionClass
    static name: string
}
export class ResponsePolicyDecisionPrivate {
    static name: string
}
export class ScriptDialog {
    /* Methods of WebKit2-5.0.WebKit2.ScriptDialog */
    close(): void
    confirm_set_confirmed(confirmed: boolean): void
    get_dialog_type(): ScriptDialogType
    get_message(): string
    prompt_get_default_text(): string
    prompt_set_text(text: string): void
    ref(): ScriptDialog
    unref(): void
    static name: string
}
export abstract class SecurityManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.SecurityManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SecurityManagerPrivate {
    static name: string
}
export class SecurityOrigin {
    /* Methods of WebKit2-5.0.WebKit2.SecurityOrigin */
    get_host(): string | null
    get_port(): number
    get_protocol(): string | null
    is_opaque(): boolean
    ref(): SecurityOrigin
    to_string(): string | null
    unref(): void
    static name: string
    static new(protocol: string, host: string, port: number): SecurityOrigin
    constructor(protocol: string, host: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(protocol: string, host: string, port: number): SecurityOrigin
    static new_for_uri(uri: string): SecurityOrigin
}
export abstract class SettingsClass {
    /* Fields of WebKit2-5.0.WebKit2.SettingsClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class SettingsPrivate {
    static name: string
}
export abstract class URIRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.URIRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class URIRequestPrivate {
    static name: string
}
export abstract class URIResponseClass {
    /* Fields of WebKit2-5.0.WebKit2.URIResponseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class URIResponsePrivate {
    static name: string
}
export abstract class URISchemeRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class URISchemeRequestPrivate {
    static name: string
}
export abstract class URISchemeResponseClass {
    /* Fields of WebKit2-5.0.WebKit2.URISchemeResponseClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class URISchemeResponsePrivate {
    static name: string
}
export class UserContentFilter {
    /* Methods of WebKit2-5.0.WebKit2.UserContentFilter */
    get_identifier(): string
    ref(): UserContentFilter
    unref(): void
    static name: string
}
export abstract class UserContentFilterStoreClass {
    /* Fields of WebKit2-5.0.WebKit2.UserContentFilterStoreClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UserContentFilterStorePrivate {
    static name: string
}
export abstract class UserContentManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.UserContentManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UserContentManagerPrivate {
    static name: string
}
export abstract class UserMediaPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.UserMediaPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class UserMediaPermissionRequestPrivate {
    static name: string
}
export abstract class UserMessageClass {
    /* Fields of WebKit2-5.0.WebKit2.UserMessageClass */
    parent_class: GObject.InitiallyUnownedClass
    static name: string
}
export class UserMessagePrivate {
    static name: string
}
export class UserScript {
    /* Methods of WebKit2-5.0.WebKit2.UserScript */
    ref(): UserScript
    unref(): void
    static name: string
    static new(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list?: string[] | null, block_list?: string[] | null): UserScript
    constructor(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list?: string[] | null, block_list?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, allow_list?: string[] | null, block_list?: string[] | null): UserScript
    static new_for_world(source: string, injected_frames: UserContentInjectedFrames, injection_time: UserScriptInjectionTime, world_name: string, allow_list?: string[] | null, block_list?: string[] | null): UserScript
}
export class UserStyleSheet {
    /* Methods of WebKit2-5.0.WebKit2.UserStyleSheet */
    ref(): UserStyleSheet
    unref(): void
    static name: string
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list?: string[] | null, block_list?: string[] | null): UserStyleSheet
    constructor(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list?: string[] | null, block_list?: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, allow_list?: string[] | null, block_list?: string[] | null): UserStyleSheet
    static new_for_world(source: string, injected_frames: UserContentInjectedFrames, level: UserStyleLevel, world_name: string, allow_list?: string[] | null, block_list?: string[] | null): UserStyleSheet
}
export abstract class WebContextClass {
    /* Fields of WebKit2-5.0.WebKit2.WebContextClass */
    parent: GObject.ObjectClass
    download_started: (context: WebContext, download: Download) => void
    initialize_web_extensions: (context: WebContext) => void
    initialize_notification_permissions: (context: WebContext) => void
    automation_started: (context: WebContext, session: AutomationSession) => void
    user_message_received: (context: WebContext, message: UserMessage) => boolean
    static name: string
}
export class WebContextPrivate {
    static name: string
}
export abstract class WebInspectorClass {
    /* Fields of WebKit2-5.0.WebKit2.WebInspectorClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WebInspectorPrivate {
    static name: string
}
export abstract class WebResourceClass {
    /* Fields of WebKit2-5.0.WebKit2.WebResourceClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WebResourcePrivate {
    static name: string
}
export abstract class WebViewBaseClass {
    /* Fields of WebKit2-5.0.WebKit2.WebViewBaseClass */
    parentClass: Gtk.WidgetClass
    static name: string
}
export class WebViewBasePrivate {
    static name: string
}
export abstract class WebViewClass {
    /* Fields of WebKit2-5.0.WebKit2.WebViewClass */
    parent: WebViewBaseClass
    load_changed: (web_view: WebView, load_event: LoadEvent) => void
    load_failed: (web_view: WebView, load_event: LoadEvent, failing_uri: string, error: GLib.Error) => boolean
    ready_to_show: (web_view: WebView) => void
    run_as_modal: (web_view: WebView) => void
    close: (web_view: WebView) => void
    script_dialog: (web_view: WebView, dialog: ScriptDialog) => boolean
    decide_policy: (web_view: WebView, decision: PolicyDecision, type: PolicyDecisionType) => boolean
    permission_request: (web_view: WebView, permission_request: PermissionRequest) => boolean
    mouse_target_changed: (web_view: WebView, hit_test_result: HitTestResult, modifiers: number) => void
    print: (web_view: WebView, print_operation: PrintOperation) => boolean
    resource_load_started: (web_view: WebView, resource: WebResource, request: URIRequest) => void
    enter_fullscreen: (web_view: WebView) => boolean
    leave_fullscreen: (web_view: WebView) => boolean
    run_file_chooser: (web_view: WebView, request: FileChooserRequest) => boolean
    context_menu: (web_view: WebView, context_menu: ContextMenu, event: Gdk.Event, hit_test_result: HitTestResult) => boolean
    context_menu_dismissed: (web_view: WebView) => void
    submit_form: (web_view: WebView, request: FormSubmissionRequest) => void
    insecure_content_detected: (web_view: WebView, event: InsecureContentEvent) => void
    web_process_crashed: (web_view: WebView) => boolean
    authenticate: (web_view: WebView, request: AuthenticationRequest) => boolean
    load_failed_with_tls_errors: (web_view: WebView, failing_uri: string, certificate: Gio.TlsCertificate, errors: Gio.TlsCertificateFlags) => boolean
    show_notification: (web_view: WebView, notification: Notification) => boolean
    run_color_chooser: (web_view: WebView, request: ColorChooserRequest) => boolean
    show_option_menu: (web_view: WebView, rectangle: Gdk.Rectangle, menu: OptionMenu) => boolean
    web_process_terminated: (web_view: WebView, reason: WebProcessTerminationReason) => void
    user_message_received: (web_view: WebView, message: UserMessage) => boolean
    static name: string
}
export class WebViewPrivate {
    static name: string
}
export class WebViewSessionState {
    /* Methods of WebKit2-5.0.WebKit2.WebViewSessionState */
    ref(): WebViewSessionState
    serialize(): GLib.Bytes
    unref(): void
    static name: string
    static new(data: GLib.Bytes): WebViewSessionState
    constructor(data: GLib.Bytes)
    /* Static methods and pseudo-constructors */
    static new(data: GLib.Bytes): WebViewSessionState
}
export class WebsiteData {
    /* Methods of WebKit2-5.0.WebKit2.WebsiteData */
    get_name(): string
    get_size(types: WebsiteDataTypes): number
    get_types(): WebsiteDataTypes
    ref(): WebsiteData
    unref(): void
    static name: string
}
export abstract class WebsiteDataAccessPermissionRequestClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataAccessPermissionRequestClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WebsiteDataAccessPermissionRequestPrivate {
    static name: string
}
export abstract class WebsiteDataManagerClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsiteDataManagerClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WebsiteDataManagerPrivate {
    static name: string
}
export abstract class WebsitePoliciesClass {
    /* Fields of WebKit2-5.0.WebKit2.WebsitePoliciesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WebsitePoliciesPrivate {
    static name: string
}
export abstract class WindowPropertiesClass {
    /* Fields of WebKit2-5.0.WebKit2.WindowPropertiesClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class WindowPropertiesPrivate {
    static name: string
}