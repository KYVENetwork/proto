import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** VoteType ... */
export declare enum VoteType {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
    VOTE_TYPE_UNSPECIFIED = 0,
    /** VOTE_TYPE_YES - VOTE_TYPE_YES ... */
    VOTE_TYPE_YES = 1,
    /** VOTE_TYPE_NO - VOTE_TYPE_NO ... */
    VOTE_TYPE_NO = 2,
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
    VOTE_TYPE_ABSTAIN = 3,
    UNRECOGNIZED = -1
}
export declare function voteTypeFromJSON(object: any): VoteType;
export declare function voteTypeToJSON(object: VoteType): string;
/** MsgFundPool defines a SDK message for funding a pool. */
export interface MsgFundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgFundPoolResponse defines the Msg/FundPool response type. */
export interface MsgFundPoolResponse {
}
/** MsgDefundPool defines a SDK message for defunding a pool. */
export interface MsgDefundPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgDefundPoolResponse defines the Msg/DefundPool response type. */
export interface MsgDefundPoolResponse {
}
/** MsgStakePool defines a SDK message for staking in a pool. */
export interface MsgStakePool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgStakePoolResponse defines the Msg/StakePool response type. */
export interface MsgStakePoolResponse {
}
/** MsgUnstakePool defines a SDK message for unstaking from a pool. */
export interface MsgUnstakePool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** amount ... */
    amount: string;
}
/** MsgUnstakePoolResponse defines the Msg/UnstakePool response type. */
export interface MsgUnstakePoolResponse {
}
/** MsgDelegatePool defines a SDK message for delegating to a protocol node in a specific pool. */
export interface MsgDelegatePool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: string;
}
/** MsgDelegatePoolResponse defines the Msg/DelegatePool response type. */
export interface MsgDelegatePoolResponse {
}
/** MsgWithdrawPool defines a SDK message for withdrawing delegation rewards from a specific pool. */
export interface MsgWithdrawPool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** staker ... */
    staker: string;
}
/** MsgWithdrawPoolResponse defines the Msg/WithdrawPool response type. */
export interface MsgWithdrawPoolResponse {
}
/** MsgUndelegatePool defines a SDK message for undelegating from a specific pool. */
export interface MsgUndelegatePool {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** staker ... */
    staker: string;
    /** amount ... */
    amount: string;
}
/** MsgUndelegatePoolResponse defines the Msg/UndelegatePool response type. */
export interface MsgUndelegatePoolResponse {
}
/** MsgSubmitBundleProposal defines a SDK message for submitting a bundle proposal. */
export interface MsgSubmitBundleProposal {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** bundle_id ... */
    bundle_id: string;
    /** byte_size ... */
    byte_size: string;
    /** from_height */
    from_height: string;
    /** to_height ... */
    to_height: string;
    /** from_key */
    from_key: string;
    /** to_key ... */
    to_key: string;
    /** to_value ... */
    to_value: string;
}
/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {
}
/** MsgVoteProposal defines a SDK message for voting on a bundle proposal. */
export interface MsgVoteProposal {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** bundle_id ... */
    bundle_id: string;
    /** vote ... */
    vote: VoteType;
}
/** MsgVoteProposalResponse defines the Msg/VoteProposal response type. */
export interface MsgVoteProposalResponse {
}
/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
}
/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {
}
/** MsgUpdateMetadata defines a SDK message for claiming the uploader role. */
export interface MsgUpdateMetadata {
    /** creator ... */
    creator: string;
    /** id ... */
    id: string;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo */
    logo: string;
}
/** MsgUpdateMetadataResponse defines the Msg/MsgUpdateMetadata response type. */
export interface MsgUpdateMetadataResponse {
}
export declare const MsgFundPool: {
    encode(message: MsgFundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPool;
    fromJSON(object: any): MsgFundPool;
    toJSON(message: MsgFundPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgFundPool>, never>>(object: I): MsgFundPool;
};
export declare const MsgFundPoolResponse: {
    encode(_: MsgFundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPoolResponse;
    fromJSON(_: any): MsgFundPoolResponse;
    toJSON(_: MsgFundPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgFundPoolResponse;
};
export declare const MsgDefundPool: {
    encode(message: MsgDefundPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPool;
    fromJSON(object: any): MsgDefundPool;
    toJSON(message: MsgDefundPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDefundPool>, never>>(object: I): MsgDefundPool;
};
export declare const MsgDefundPoolResponse: {
    encode(_: MsgDefundPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPoolResponse;
    fromJSON(_: any): MsgDefundPoolResponse;
    toJSON(_: MsgDefundPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDefundPoolResponse;
};
export declare const MsgStakePool: {
    encode(message: MsgStakePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePool;
    fromJSON(object: any): MsgStakePool;
    toJSON(message: MsgStakePool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgStakePool>, never>>(object: I): MsgStakePool;
};
export declare const MsgStakePoolResponse: {
    encode(_: MsgStakePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePoolResponse;
    fromJSON(_: any): MsgStakePoolResponse;
    toJSON(_: MsgStakePoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgStakePoolResponse;
};
export declare const MsgUnstakePool: {
    encode(message: MsgUnstakePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePool;
    fromJSON(object: any): MsgUnstakePool;
    toJSON(message: MsgUnstakePool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUnstakePool>, never>>(object: I): MsgUnstakePool;
};
export declare const MsgUnstakePoolResponse: {
    encode(_: MsgUnstakePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePoolResponse;
    fromJSON(_: any): MsgUnstakePoolResponse;
    toJSON(_: MsgUnstakePoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUnstakePoolResponse;
};
export declare const MsgDelegatePool: {
    encode(message: MsgDelegatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegatePool;
    fromJSON(object: any): MsgDelegatePool;
    toJSON(message: MsgDelegatePool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgDelegatePool>, never>>(object: I): MsgDelegatePool;
};
export declare const MsgDelegatePoolResponse: {
    encode(_: MsgDelegatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegatePoolResponse;
    fromJSON(_: any): MsgDelegatePoolResponse;
    toJSON(_: MsgDelegatePoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgDelegatePoolResponse;
};
export declare const MsgWithdrawPool: {
    encode(message: MsgWithdrawPool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPool;
    fromJSON(object: any): MsgWithdrawPool;
    toJSON(message: MsgWithdrawPool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgWithdrawPool>, never>>(object: I): MsgWithdrawPool;
};
export declare const MsgWithdrawPoolResponse: {
    encode(_: MsgWithdrawPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPoolResponse;
    fromJSON(_: any): MsgWithdrawPoolResponse;
    toJSON(_: MsgWithdrawPoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgWithdrawPoolResponse;
};
export declare const MsgUndelegatePool: {
    encode(message: MsgUndelegatePool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegatePool;
    fromJSON(object: any): MsgUndelegatePool;
    toJSON(message: MsgUndelegatePool): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        staker?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUndelegatePool>, never>>(object: I): MsgUndelegatePool;
};
export declare const MsgUndelegatePoolResponse: {
    encode(_: MsgUndelegatePoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegatePoolResponse;
    fromJSON(_: any): MsgUndelegatePoolResponse;
    toJSON(_: MsgUndelegatePoolResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUndelegatePoolResponse;
};
export declare const MsgSubmitBundleProposal: {
    encode(message: MsgSubmitBundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposal;
    fromJSON(object: any): MsgSubmitBundleProposal;
    toJSON(message: MsgSubmitBundleProposal): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        bundle_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        to_value?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        bundle_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        from_key?: string | undefined;
        to_key?: string | undefined;
        to_value?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgSubmitBundleProposal>, never>>(object: I): MsgSubmitBundleProposal;
};
export declare const MsgSubmitBundleProposalResponse: {
    encode(_: MsgSubmitBundleProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgSubmitBundleProposalResponse;
    fromJSON(_: any): MsgSubmitBundleProposalResponse;
    toJSON(_: MsgSubmitBundleProposalResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgSubmitBundleProposalResponse;
};
export declare const MsgVoteProposal: {
    encode(message: MsgVoteProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteProposal;
    fromJSON(object: any): MsgVoteProposal;
    toJSON(message: MsgVoteProposal): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        bundle_id?: string | undefined;
        vote?: VoteType | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        bundle_id?: string | undefined;
        vote?: VoteType | undefined;
    } & Record<Exclude<keyof I, keyof MsgVoteProposal>, never>>(object: I): MsgVoteProposal;
};
export declare const MsgVoteProposalResponse: {
    encode(_: MsgVoteProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteProposalResponse;
    fromJSON(_: any): MsgVoteProposalResponse;
    toJSON(_: MsgVoteProposalResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgVoteProposalResponse;
};
export declare const MsgClaimUploaderRole: {
    encode(message: MsgClaimUploaderRole, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRole;
    fromJSON(object: any): MsgClaimUploaderRole;
    toJSON(message: MsgClaimUploaderRole): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgClaimUploaderRole>, never>>(object: I): MsgClaimUploaderRole;
};
export declare const MsgClaimUploaderRoleResponse: {
    encode(_: MsgClaimUploaderRoleResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgClaimUploaderRoleResponse;
    fromJSON(_: any): MsgClaimUploaderRoleResponse;
    toJSON(_: MsgClaimUploaderRoleResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgClaimUploaderRoleResponse;
};
export declare const MsgUpdateMetadata: {
    encode(message: MsgUpdateMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata;
    fromJSON(object: any): MsgUpdateMetadata;
    toJSON(message: MsgUpdateMetadata): unknown;
    fromPartial<I extends {
        creator?: string | undefined;
        id?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & {
        creator?: string | undefined;
        id?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
    } & Record<Exclude<keyof I, keyof MsgUpdateMetadata>, never>>(object: I): MsgUpdateMetadata;
};
export declare const MsgUpdateMetadataResponse: {
    encode(_: MsgUpdateMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadataResponse;
    fromJSON(_: any): MsgUpdateMetadataResponse;
    toJSON(_: MsgUpdateMetadataResponse): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): MsgUpdateMetadataResponse;
};
/** Msg defines the registry Msg service. */
export interface Msg {
    /** FundPool ... */
    FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    /** DefundPool ... */
    DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    /** StakePool ... */
    StakePool(request: MsgStakePool): Promise<MsgStakePoolResponse>;
    /** UnstakePool ... */
    UnstakePool(request: MsgUnstakePool): Promise<MsgUnstakePoolResponse>;
    /** DelegatePool ... */
    DelegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse>;
    /** WithdrawPool ... */
    WithdrawPool(request: MsgWithdrawPool): Promise<MsgWithdrawPoolResponse>;
    /** UndelegatePool ... */
    UndelegatePool(request: MsgUndelegatePool): Promise<MsgUndelegatePoolResponse>;
    /** SubmitBundleProposal ... */
    SubmitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    /** VoteProposal ... */
    VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
    /** ClaimUploaderRole ... */
    ClaimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    /** UpdateMetadata ... */
    UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse>;
    DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse>;
    StakePool(request: MsgStakePool): Promise<MsgStakePoolResponse>;
    UnstakePool(request: MsgUnstakePool): Promise<MsgUnstakePoolResponse>;
    DelegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse>;
    WithdrawPool(request: MsgWithdrawPool): Promise<MsgWithdrawPoolResponse>;
    UndelegatePool(request: MsgUndelegatePool): Promise<MsgUndelegatePoolResponse>;
    SubmitBundleProposal(request: MsgSubmitBundleProposal): Promise<MsgSubmitBundleProposalResponse>;
    VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
    ClaimUploaderRole(request: MsgClaimUploaderRole): Promise<MsgClaimUploaderRoleResponse>;
    UpdateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
