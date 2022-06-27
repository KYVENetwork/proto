import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** Params defines the set of params for the registry module. */
export interface Params {
    /** vote_slash ... */
    vote_slash: string;
    /** upload_slash ... */
    upload_slash: string;
    /** timeout_slash ... */
    timeout_slash: string;
    /** upload_timeout ... */
    upload_timeout: string;
    /** storage_cost ... */
    storage_cost: string;
    /** network_fee ... */
    network_fee: string;
    /** max_points ... */
    max_points: string;
    /** unbonding_staking_time ... */
    unbonding_staking_time: string;
    /** unbonding_delegation_time ... */
    unbonding_delegation_time: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        vote_slash?: string | undefined;
        upload_slash?: string | undefined;
        timeout_slash?: string | undefined;
        upload_timeout?: string | undefined;
        storage_cost?: string | undefined;
        network_fee?: string | undefined;
        max_points?: string | undefined;
        unbonding_staking_time?: string | undefined;
        unbonding_delegation_time?: string | undefined;
    } & {
        vote_slash?: string | undefined;
        upload_slash?: string | undefined;
        timeout_slash?: string | undefined;
        upload_timeout?: string | undefined;
        storage_cost?: string | undefined;
        network_fee?: string | undefined;
        max_points?: string | undefined;
        unbonding_staking_time?: string | undefined;
        unbonding_delegation_time?: string | undefined;
    } & Record<Exclude<keyof I, keyof Params>, never>>(object: I): Params;
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
