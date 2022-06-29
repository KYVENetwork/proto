import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** CreatePoolProposal is a gov Content type for creating a pool. */
export interface CreatePoolProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** name ... */
    name: string;
    /** runtime ... */
    runtime: string;
    /** logo ... */
    logo: string;
    /** versions ... */
    version: string;
    /** config ... */
    config: string;
    /**
     * start_height ...
     *
     * @deprecated
     */
    start_height: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** max_bundle_size ... */
    max_bundle_size: string;
    /** binaries ... */
    binaries: string;
    /** start_key ... */
    start_key: string;
}
/** UpdatePoolProposal is a gov Content type for updating a pool. */
export interface UpdatePoolProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** id ... */
    id: string;
    /** name ... */
    name: string;
    /** runtime ... */
    runtime: string;
    /** logo ... */
    logo: string;
    /**
     * versions ...
     *
     * @deprecated
     */
    versions: string;
    /** config ... */
    config: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** max_bundle_size ... */
    max_bundle_size: string;
}
/** PausePoolProposal is a gov Content type for pausing a pool. */
export interface PausePoolProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** id ... */
    id: string;
}
/** UnpausePoolProposal is a gov Content type for unpausing a pool. */
export interface UnpausePoolProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** id ... */
    id: string;
}
/** SchedulePoolUpgradeProposal is a gov Content type for upgrading a pool by the runtime. */
export interface SchedulePoolUpgradeProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** runtime ... */
    runtime: string;
    /** version ... */
    version: string;
    /** scheduled_at ... */
    scheduled_at: string;
    /** duration ... */
    duration: string;
    /** binaries ... */
    binaries: string;
}
/** CancelPoolUpgradeProposal is a gov Content type for cancelling a scheduled pool upgrade by the runtime. */
export interface CancelPoolUpgradeProposal {
    /** title ... */
    title: string;
    /** description ... */
    description: string;
    /** runtime ... */
    runtime: string;
}
export declare const CreatePoolProposal: {
    encode(message: CreatePoolProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolProposal;
    fromJSON(object: any): CreatePoolProposal;
    toJSON(message: CreatePoolProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        version?: string | undefined;
        config?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        max_bundle_size?: string | undefined;
        binaries?: string | undefined;
        start_key?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        version?: string | undefined;
        config?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        max_bundle_size?: string | undefined;
        binaries?: string | undefined;
        start_key?: string | undefined;
    } & Record<Exclude<keyof I, keyof CreatePoolProposal>, never>>(object: I): CreatePoolProposal;
};
export declare const UpdatePoolProposal: {
    encode(message: UpdatePoolProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolProposal;
    fromJSON(object: any): UpdatePoolProposal;
    toJSON(message: UpdatePoolProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        max_bundle_size?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        max_bundle_size?: string | undefined;
    } & Record<Exclude<keyof I, keyof UpdatePoolProposal>, never>>(object: I): UpdatePoolProposal;
};
export declare const PausePoolProposal: {
    encode(message: PausePoolProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): PausePoolProposal;
    fromJSON(object: any): PausePoolProposal;
    toJSON(message: PausePoolProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof PausePoolProposal>, never>>(object: I): PausePoolProposal;
};
export declare const UnpausePoolProposal: {
    encode(message: UnpausePoolProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnpausePoolProposal;
    fromJSON(object: any): UnpausePoolProposal;
    toJSON(message: UnpausePoolProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof UnpausePoolProposal>, never>>(object: I): UnpausePoolProposal;
};
export declare const SchedulePoolUpgradeProposal: {
    encode(message: SchedulePoolUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SchedulePoolUpgradeProposal;
    fromJSON(object: any): SchedulePoolUpgradeProposal;
    toJSON(message: SchedulePoolUpgradeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        runtime?: string | undefined;
        version?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
        binaries?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runtime?: string | undefined;
        version?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
        binaries?: string | undefined;
    } & Record<Exclude<keyof I, keyof SchedulePoolUpgradeProposal>, never>>(object: I): SchedulePoolUpgradeProposal;
};
export declare const CancelPoolUpgradeProposal: {
    encode(message: CancelPoolUpgradeProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): CancelPoolUpgradeProposal;
    fromJSON(object: any): CancelPoolUpgradeProposal;
    toJSON(message: CancelPoolUpgradeProposal): unknown;
    fromPartial<I extends {
        title?: string | undefined;
        description?: string | undefined;
        runtime?: string | undefined;
    } & {
        title?: string | undefined;
        description?: string | undefined;
        runtime?: string | undefined;
    } & Record<Exclude<keyof I, keyof CancelPoolUpgradeProposal>, never>>(object: I): CancelPoolUpgradeProposal;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
