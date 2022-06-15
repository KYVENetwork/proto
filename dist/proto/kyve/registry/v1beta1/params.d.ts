import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** Params defines the set of params for the registry module. */
export interface Params {
    /** vote_slash ... */
    voteSlash: string;
    /** upload_slash ... */
    uploadSlash: string;
    /** timeout_slash ... */
    timeoutSlash: string;
    /** upload_timeout ... */
    uploadTimeout: number;
    /** storage_cost ... */
    storageCost: number;
    /** network_fee ... */
    networkFee: string;
    /** max_points ... */
    maxPoints: number;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Params;
    fromJSON(object: any): Params;
    toJSON(message: Params): unknown;
    fromPartial<I extends {
        voteSlash?: string | undefined;
        uploadSlash?: string | undefined;
        timeoutSlash?: string | undefined;
        uploadTimeout?: number | undefined;
        storageCost?: number | undefined;
        networkFee?: string | undefined;
        maxPoints?: number | undefined;
    } & {
        voteSlash?: string | undefined;
        uploadSlash?: string | undefined;
        timeoutSlash?: string | undefined;
        uploadTimeout?: number | undefined;
        storageCost?: number | undefined;
        networkFee?: string | undefined;
        maxPoints?: number | undefined;
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
