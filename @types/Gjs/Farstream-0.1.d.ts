/**
 * Farstream-0.1
 */

import type * as Gjs from './Gjs';
import type * as libxml2 from './libxml2-2.0';
import type * as GObject from './GObject-2.0';
import type * as GLib from './GLib-2.0';
// WARN: Dependency not found: 'Gst-0.10'
import type * as GModule from './GModule-2.0';

export enum CandidateType {
    HOST,
    SRFLX,
    PRFLX,
    RELAY,
    MULTICAST,
}
export enum ComponentType {
    NONE,
    RTP,
    RTCP,
}
export enum DTMFEvent {
    /* 0 (invalid, starts with a number) */
    /* 1 (invalid, starts with a number) */
    /* 2 (invalid, starts with a number) */
    /* 3 (invalid, starts with a number) */
    /* 4 (invalid, starts with a number) */
    /* 5 (invalid, starts with a number) */
    /* 6 (invalid, starts with a number) */
    /* 7 (invalid, starts with a number) */
    /* 8 (invalid, starts with a number) */
    /* 9 (invalid, starts with a number) */
    STAR,
    POUND,
    A,
    B,
    C,
    D,
}
export enum DTMFMethod {
    RTP_RFC4733,
    SOUND,
}
export enum Error {
    CONSTRUCTION,
    INTERNAL,
    INVALID_ARGUMENTS,
    NETWORK,
    NOT_IMPLEMENTED,
    NEGOTIATION_FAILED,
    UNKNOWN_CODEC,
    NO_CODECS,
    NO_CODECS_LEFT,
    CONNECTION_FAILED,
    DISPOSED,
    ALREADY_EXISTS,
}
export enum MediaType {
    AUDIO,
    VIDEO,
    LAST,
}
export enum NetworkProtocol {
    UDP,
    TCP,
}
export enum StreamState {
    FAILED,
    DISCONNECTED,
    GATHERING,
    CONNECTING,
    CONNECTED,
    READY,
}
export enum StreamDirection {
    NONE,
    SEND,
    RECV,
    BOTH,
}
export const CODEC_FORMAT: string
export const CODEC_ID_ANY: number
export const CODEC_ID_DISABLE: number
export const RTP_HEADER_EXTENSION_FORMAT: string
export function candidate_list_copy(candidate_list: Codec[]): Codec[]
export function codec_list_are_equal(list1: Codec[], list2: Codec[]): boolean
export function codec_list_copy(codec_list: Codec[]): Codec[]
export function codec_list_from_keyfile(filename: string): Codec[]
export function error_quark(): GLib.Quark
export function media_type_to_string(media_type: MediaType): string
export function parse_error(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* error_msg */ string ]
export function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[]
export function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): RtpHeaderExtension[]
export function utils_get_default_codec_preferences(element: Gst.Element): Codec[]
export function utils_get_default_element_properties(element: Gst.Element): GLib.KeyFile
export function utils_get_default_rtp_header_extension_preferences(element: Gst.Element, media_type: MediaType): Codec[]
export function utils_set_bitrate(element: Gst.Element, bitrate: number): void
export class Conference {
    /* Fields of Farstream.Conference */
    parent: Gst.Bin
    /* Methods of Farstream.Conference */
    new_participant(): Participant
    new_session(media_type: MediaType): Session
    /* Virtual methods of Farstream.Conference */
    vfunc_new_participant(): Participant
    vfunc_new_session(media_type: MediaType): Session
    static name: string
}
export interface ElementAddedNotifier_ConstructProps extends GObject.Object_ConstructProps {
}
export class ElementAddedNotifier {
    /* Fields of Farstream.ElementAddedNotifier */
    parent: GObject.Object
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of Farstream.ElementAddedNotifier */
    add(bin: Gst.Bin): void
    remove(bin: Gst.Bin): boolean
    set_default_properties(element: Gst.Element): void
    set_properties_from_file(filename: string): boolean
    set_properties_from_keyfile(keyfile: GLib.KeyFile): void
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of Farstream.ElementAddedNotifier */
    connect(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    connect_after(sigName: "element-added", callback: (($obj: ElementAddedNotifier, bin: Gst.Bin, element: Gst.Element) => void)): number
    emit(sigName: "element-added", bin: Gst.Bin, element: Gst.Element): void
    /* Signals of GObject.Object */
    connect(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: ElementAddedNotifier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: ElementAddedNotifier_ConstructProps)
    _init (config?: ElementAddedNotifier_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): ElementAddedNotifier
    static $gtype: GObject.Type
}
export class Participant {
    /* Fields of Farstream.Participant */
    parent: Gst.Object
    static name: string
}
export interface Plugin_ConstructProps extends GObject.TypeModule_ConstructProps {
}
export class Plugin {
    /* Fields of Farstream.Plugin */
    parent: GObject.TypeModule
    /* Fields of GObject.TypeModule */
    parent_instance: GObject.Object
    use_count: number
    type_infos: object[]
    interface_infos: object[]
    name: string
    /* Fields of GObject.Object */
    g_type_instance: GObject.TypeInstance
    /* Methods of GObject.TypeModule */
    add_interface(instance_type: GObject.Type, interface_type: GObject.Type, interface_info: GObject.InterfaceInfo): void
    register_enum(name: string, const_static_values: GObject.EnumValue): GObject.Type
    register_flags(name: string, const_static_values: GObject.FlagsValue): GObject.Type
    register_type(parent_type: GObject.Type, type_name: string, type_info: GObject.TypeInfo, flags: GObject.TypeFlags): GObject.Type
    set_name(name: string): void
    unuse(): void
    use(): boolean
    /* Methods of GObject.Object */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: GObject.Closure, transform_from: GObject.Closure): GObject.Binding
    force_floating(): void
    freeze_notify(): void
    get_data(key: string): object | null
    get_property(property_name: string, value: GObject.Value): void
    get_qdata(quark: GLib.Quark): object | null
    getv(names: string[], values: GObject.Value[]): void
    is_floating(): boolean
    notify(property_name: string): void
    notify_by_pspec(pspec: GObject.ParamSpec): void
    ref(): GObject.Object
    ref_sink(): GObject.Object
    run_dispose(): void
    set_data(key: string, data?: object | null): void
    set_property(property_name: string, value: GObject.Value): void
    steal_data(key: string): object | null
    steal_qdata(quark: GLib.Quark): object | null
    thaw_notify(): void
    unref(): void
    watch_closure(closure: GObject.Closure): void
    /* Methods of GObject.TypePlugin */
    complete_interface_info(instance_type: GObject.Type, interface_type: GObject.Type, info: GObject.InterfaceInfo): void
    complete_type_info(g_type: GObject.Type, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void
    use(): void
    /* Virtual methods of GObject.TypeModule */
    vfunc_load(): boolean
    vfunc_unload(): void
    /* Virtual methods of GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void
    /* Signals of GObject.Object */
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
    /* Static methods and pseudo-constructors */
    static list_available(type_suffix: string): string[]
    static $gtype: GObject.Type
}
export class Session {
    /* Properties of Farstream.Session */
    readonly codec_preferences: Codec[]
    readonly codecs: Codec[]
    readonly codecs_without_config: Codec[]
    readonly current_send_codec: Codec
    readonly sink_pad: Gst.Pad
    tos: number
    /* Fields of Farstream.Session */
    parent: Gst.Object
    /* Methods of Farstream.Session */
    codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    get_stream_transmitter_type(transmitter: string): GObject.Type
    list_transmitters(): string[]
    new_stream(participant: Participant, direction: StreamDirection): Stream
    parse_codecs_changed(message: Gst.Message): boolean
    parse_send_codec_changed(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondary_codecs */ Codec[] ]
    parse_telephony_event_started(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    parse_telephony_event_stopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    set_codec_preferences(codec_preferences: Codec[]): boolean
    set_send_codec(send_codec: Codec): boolean
    start_telephony_event(event: number, volume: number): boolean
    stop_telephony_event(): boolean
    /* Virtual methods of Farstream.Session */
    vfunc_codecs_need_resend(old_codecs: Codec[], new_codecs: Codec[]): Codec[]
    vfunc_get_stream_transmitter_type(transmitter: string): GObject.Type
    vfunc_list_transmitters(): string[]
    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream
    vfunc_set_codec_preferences(codec_preferences: Codec[]): boolean
    vfunc_set_send_codec(send_codec: Codec): boolean
    vfunc_start_telephony_event(event: number, volume: number): boolean
    vfunc_stop_telephony_event(): boolean
    /* Signals of Farstream.Session */
    connect(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Session, object: GObject.Object, error_no: Error, error_msg: string) => void)): number
    emit(sigName: "error", object: GObject.Object, error_no: Error, error_msg: string): void
    static name: string
}
export class Stream {
    /* Properties of Farstream.Stream */
    readonly current_recv_codecs: Codec[]
    direction: StreamDirection
    readonly negotiated_codecs: Codec[]
    readonly remote_codecs: Codec[]
    /* Fields of Farstream.Stream */
    parent: Gst.Object
    /* Methods of Farstream.Stream */
    add_id(id: number): void
    add_remote_candidates(candidates: Candidate[]): boolean
    destroy(): void
    emit_error(error_no: number, error_msg: string): void
    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    parse_component_state_changed(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    parse_local_candidates_prepared(message: Gst.Message): boolean
    parse_new_active_candidate_pair(message: Gst.Message): [ /* returnType */ boolean, /* local_candidate */ Candidate, /* remote_candidate */ Candidate ]
    parse_new_local_candidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    parse_recv_codecs_changed(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    set_remote_codecs(remote_codecs: Codec[]): boolean
    set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Virtual methods of Farstream.Stream */
    vfunc_add_id(id: number): void
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean
    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number): boolean
    /* Signals of Farstream.Stream */
    connect(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Stream, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    connect_after(sigName: "src-pad-added", callback: (($obj: Stream, pad: Gst.Pad, codec: Codec) => void)): number
    emit(sigName: "src-pad-added", pad: Gst.Pad, codec: Codec): void
    static name: string
}
export class StreamTransmitter {
    /* Properties of Farstream.StreamTransmitter */
    sending: boolean
    /* Fields of Farstream.StreamTransmitter */
    parent: Gst.Object
    /* Methods of Farstream.StreamTransmitter */
    add_remote_candidates(candidates: Candidate[]): boolean
    emit_error(error_no: number, error_msg: string): void
    force_remote_candidates(remote_candidates: Candidate[]): boolean
    gather_local_candidates(): boolean
    stop(): void
    /* Virtual methods of Farstream.StreamTransmitter */
    vfunc_add_remote_candidates(candidates: Candidate[]): boolean
    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean
    vfunc_gather_local_candidates(): boolean
    vfunc_stop(): void
    /* Signals of Farstream.StreamTransmitter */
    connect(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: StreamTransmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    connect_after(sigName: "known-source-packet-received", callback: (($obj: StreamTransmitter, component: number, buffer: object) => void)): number
    emit(sigName: "known-source-packet-received", component: number, buffer: object): void
    connect(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    connect_after(sigName: "local-candidates-prepared", callback: (($obj: StreamTransmitter) => void)): number
    emit(sigName: "local-candidates-prepared"): void
    connect(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    connect_after(sigName: "new-active-candidate-pair", callback: (($obj: StreamTransmitter, local_candidate: Candidate, remote_candidate: Candidate) => void)): number
    emit(sigName: "new-active-candidate-pair", local_candidate: Candidate, remote_candidate: Candidate): void
    connect(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    connect_after(sigName: "new-local-candidate", callback: (($obj: StreamTransmitter, local_candidate: Candidate) => void)): number
    emit(sigName: "new-local-candidate", local_candidate: Candidate): void
    connect(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    connect_after(sigName: "state-changed", callback: (($obj: StreamTransmitter, component: number, state: StreamState) => void)): number
    emit(sigName: "state-changed", component: number, state: StreamState): void
    static name: string
}
export class Transmitter {
    /* Properties of Farstream.Transmitter */
    readonly gst_sink: Gst.Element
    readonly gst_src: Gst.Element
    tos: number
    /* Fields of Farstream.Transmitter */
    parent: Gst.Object
    /* Methods of Farstream.Transmitter */
    emit_error(error_no: number, error_msg: string): void
    get_recvonly_filter(component: number): Gst.Element
    get_stream_transmitter_type(): GObject.Type
    new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Virtual methods of Farstream.Transmitter */
    vfunc_get_stream_transmitter_type(): GObject.Type
    vfunc_new_stream_transmitter(participant: Participant, n_parameters: number, parameters: GObject.Parameter): StreamTransmitter
    /* Signals of Farstream.Transmitter */
    connect(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    connect_after(sigName: "error", callback: (($obj: Transmitter, errorno: Error, error_msg: string) => void)): number
    emit(sigName: "error", errorno: Error, error_msg: string): void
    connect(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    connect_after(sigName: "get-recvonly-filter", callback: (($obj: Transmitter, component: number) => Gst.Element)): number
    emit(sigName: "get-recvonly-filter", component: number): void
    static name: string
    static new(type: string, components: number, tos: number): Transmitter
    constructor(type: string, components: number, tos: number)
    /* Static methods and pseudo-constructors */
    static new(type: string, components: number, tos: number): Transmitter
    static list_available(): string[]
}
export class Candidate {
    /* Fields of Farstream.Candidate */
    foundation: string
    component_id: number
    ip: string
    port: number
    base_ip: string
    base_port: number
    proto: NetworkProtocol
    priority: number
    type: CandidateType
    username: string
    password: string
    ttl: number
    /* Methods of Farstream.Candidate */
    copy(): Candidate
    destroy(): void
    static name: string
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
    constructor(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number)
    /* Static methods and pseudo-constructors */
    static new(foundation: string, component_id: number, type: CandidateType, proto: NetworkProtocol, ip: string, port: number): Candidate
}
export class Codec {
    /* Fields of Farstream.Codec */
    id: number
    encoding_name: string
    media_type: MediaType
    clock_rate: number
    channels: number
    minimum_reporting_interval: number
    optional_params: CodecParameter[]
    feedback_params: FeedbackParameter[]
    /* Methods of Farstream.Codec */
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void
    add_optional_parameter(name: string, value: string): void
    are_equal(codec2: Codec): boolean
    copy(): Codec
    destroy(): void
    get_feedback_parameter(type: string, subtype: string, extra_params: string): FeedbackParameter
    get_optional_parameter(name: string, value: string): CodecParameter
    remove_feedback_parameter(item: FeedbackParameter[]): void
    remove_optional_parameter(param: CodecParameter): void
    to_string(): string
    static name: string
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
    constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number)
    /* Static methods and pseudo-constructors */
    static new(id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec
}
export class CodecParameter {
    /* Fields of Farstream.CodecParameter */
    name: string
    value: string
    /* Methods of Farstream.CodecParameter */
    copy(): CodecParameter
    free(): void
    static name: string
}
export abstract class ConferenceClass {
    /* Fields of Farstream.ConferenceClass */
    parent: Gst.BinClass
    new_session: (conference: Conference, media_type: MediaType) => Session
    new_participant: (conference: Conference) => Participant
    static name: string
}
export abstract class ElementAddedNotifierClass {
    /* Fields of Farstream.ElementAddedNotifierClass */
    parent_class: GObject.ObjectClass
    static name: string
}
export class ElementAddedNotifierPrivate {
    static name: string
}
export class FeedbackParameter {
    /* Fields of Farstream.FeedbackParameter */
    type: string
    subtype: string
    extra_params: string
    /* Methods of Farstream.FeedbackParameter */
    copy(): FeedbackParameter
    free(): void
    static name: string
}
export abstract class ParticipantClass {
    /* Fields of Farstream.ParticipantClass */
    parent_class: Gst.ObjectClass
    static name: string
}
export class ParticipantPrivate {
    static name: string
}
export abstract class PluginClass {
    /* Fields of Farstream.PluginClass */
    parent_class: GObject.TypeModuleClass
    static name: string
}
export class PluginPrivate {
    static name: string
}
export abstract class SessionClass {
    /* Fields of Farstream.SessionClass */
    parent_class: Gst.ObjectClass
    new_stream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    start_telephony_event: (session: Session, event: number, volume: number) => boolean
    stop_telephony_event: (session: Session) => boolean
    set_send_codec: (session: Session, send_codec: Codec) => boolean
    set_codec_preferences: (session: Session, codec_preferences: Codec[]) => boolean
    list_transmitters: (session: Session) => string[]
    get_stream_transmitter_type: (session: Session, transmitter: string) => GObject.Type
    codecs_need_resend: (session: Session, old_codecs: Codec[], new_codecs: Codec[]) => Codec[]
    static name: string
}
export class SessionPrivate {
    static name: string
}
export abstract class StreamClass {
    /* Fields of Farstream.StreamClass */
    parent_class: Gst.ObjectClass
    add_remote_candidates: (stream: Stream, candidates: Candidate[]) => boolean
    force_remote_candidates: (stream: Stream, remote_candidates: Candidate[]) => boolean
    set_remote_codecs: (stream: Stream, remote_codecs: Codec[]) => boolean
    add_id: (stream: Stream, id: number) => void
    set_transmitter: (stream: Stream, transmitter: string, stream_transmitter_parameters: GObject.Parameter, stream_transmitter_n_parameters: number) => boolean
    static name: string
}
export class StreamPrivate {
    static name: string
}
export abstract class StreamTransmitterClass {
    /* Fields of Farstream.StreamTransmitterClass */
    parent_class: Gst.ObjectClass
    add_remote_candidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    force_remote_candidates: (streamtransmitter: StreamTransmitter, remote_candidates: Candidate[]) => boolean
    gather_local_candidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
    static name: string
}
export class StreamTransmitterPrivate {
    static name: string
}
export abstract class TransmitterClass {
    /* Fields of Farstream.TransmitterClass */
    parent_class: Gst.ObjectClass
    new_stream_transmitter: (transmitter: Transmitter, participant: Participant, n_parameters: number, parameters: GObject.Parameter) => StreamTransmitter
    get_stream_transmitter_type: (transmitter: Transmitter) => GObject.Type
    static name: string
}
export class TransmitterPrivate {
    static name: string
}
export class _RtpHeaderExtension {
    /* Fields of Farstream._RtpHeaderExtension */
    id: number
    direction: StreamDirection
    uri: string
    static name: string
}