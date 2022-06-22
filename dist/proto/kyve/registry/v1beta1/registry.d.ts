import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** BundleProposal ... */
export interface BundleProposal {
    /** uploader ... */
    uploader: string;
    /** next_uploader ... */
    next_uploader: string;
    /** bundle_id ... */
    bundle_id: string;
    /** byte_size ... */
    byte_size: string;
    /** from_height ... */
    from_height: string;
    /** to_height ... */
    to_height: string;
    /** created_at ... */
    created_at: string;
    /** voters_valid ... */
    voters_valid: string[];
    /** voters_invalid ... */
    voters_invalid: string[];
    /** voters_abstain ... */
    voters_abstain: string[];
}
/** Protocol ... */
export interface Protocol {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** last_upgrade ... */
    last_upgrade: string;
}
/** Upgrade ... */
export interface UpgradePlan {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** scheduled_at ... */
    scheduled_at: string;
    /** duration ... */
    duration: string;
}
/** DelegationEntries ... */
export interface DelegationEntries {
    /** id ... */
    id: string;
    /** balance ... */
    balance: string;
    /** staker ... */
    staker: string;
    /** k_index ... */
    k_index: string;
}
/** DelegationPoolData ... */
export interface DelegationPoolData {
    /** id ... */
    id: string;
    /** staker ... */
    staker: string;
    /** current_rewards ... */
    current_rewards: string;
    /** total_delegation ... */
    total_delegation: string;
    /** latest_index_k ... */
    latest_index_k: string;
    /** delegator_count ... */
    delegator_count: string;
    /** latest_index_was_undelegation ... */
    latest_index_was_undelegation: boolean;
}
/** Delegator ... */
export interface Delegator {
    /** id ... */
    id: string;
    /** k_index ... */
    k_index: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
}
/** Funder ... */
export interface Funder {
    /** account ... */
    account: string;
    /** fund_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
}
/** Pool ... */
export interface Pool {
    /** id ... */
    id: string;
    /** creator ... */
    creator: string;
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
    /** height_archived ... */
    height_archived: string;
    /** bytes_archived ... */
    bytes_archived: string;
    /** total_bundles ... */
    total_bundles: string;
    /** total_bundle_rewards ... */
    total_bundle_rewards: string;
    /** start_height ... */
    start_height: string;
    /** upload_interval ... */
    upload_interval: string;
    /** operating_cost ... */
    operating_cost: string;
    /** paused ... */
    paused: boolean;
    /** funders ... */
    funders: string[];
    /** lowest_funder ... */
    lowest_funder: string;
    /** total_funds ... */
    total_funds: string;
    /** stakers ... */
    stakers: string[];
    /** lowest_staker ... */
    lowest_staker: string;
    /** total_stake ... */
    total_stake: string;
    /** total_delegation ... */
    total_delegation: string;
    /** bundle_proposal ... */
    bundle_proposal?: BundleProposal;
    /** max_bundle_size ... */
    max_bundle_size: string;
    /** protocol ... */
    protocol?: Protocol;
    /** upgrade_plan ... */
    upgrade_plan?: UpgradePlan;
}
/** Proposal ... */
export interface Proposal {
    /** bundle_id ... */
    bundle_id: string;
    /** pool_id ... */
    pool_id: string;
    /** uploader ... */
    uploader: string;
    /** from_height ... */
    from_height: string;
    /** to_height ... */
    to_height: string;
    /** finalized_at ... */
    finalized_at: string;
}
/** Staker ... */
export interface Staker {
    /** staker ... */
    account: string;
    /** pool_id ... */
    pool_id: string;
    /** amount ... */
    amount: string;
    /** unbonding_amount ... */
    unbonding_amount: string;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo */
    logo: string;
    /** points */
    points: string;
}
/** UnbondingEntries ... */
export interface UnbondingEntries {
    /** index ... */
    index: string;
    /** pool_id ... */
    pool_id: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** creation_time ... */
    creation_time: string;
    /** amount ... */
    amount: string;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingState {
    /** low_index ... */
    low_index: string;
    /** high_index ... */
    high_index: string;
}
export declare const BundleProposal: {
    encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal;
    fromJSON(object: any): BundleProposal;
    toJSON(message: BundleProposal): unknown;
    fromPartial<I extends {
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        bundle_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        created_at?: string | undefined;
        voters_valid?: string[] | undefined;
        voters_invalid?: string[] | undefined;
        voters_abstain?: string[] | undefined;
    } & {
        uploader?: string | undefined;
        next_uploader?: string | undefined;
        bundle_id?: string | undefined;
        byte_size?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        created_at?: string | undefined;
        voters_valid?: (string[] & string[] & Record<Exclude<keyof I["voters_valid"], keyof string[]>, never>) | undefined;
        voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["voters_invalid"], keyof string[]>, never>) | undefined;
        voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["voters_abstain"], keyof string[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof BundleProposal>, never>>(object: I): BundleProposal;
};
export declare const Protocol: {
    encode(message: Protocol, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Protocol;
    fromJSON(object: any): Protocol;
    toJSON(message: Protocol): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        last_upgrade?: string | undefined;
    } & Record<Exclude<keyof I, keyof Protocol>, never>>(object: I): Protocol;
};
export declare const UpgradePlan: {
    encode(message: UpgradePlan, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan;
    fromJSON(object: any): UpgradePlan;
    toJSON(message: UpgradePlan): unknown;
    fromPartial<I extends {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduled_at?: string | undefined;
        duration?: string | undefined;
    } & Record<Exclude<keyof I, keyof UpgradePlan>, never>>(object: I): UpgradePlan;
};
export declare const DelegationEntries: {
    encode(message: DelegationEntries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntries;
    fromJSON(object: any): DelegationEntries;
    toJSON(message: DelegationEntries): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        k_index?: string | undefined;
    } & {
        id?: string | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        k_index?: string | undefined;
    } & Record<Exclude<keyof I, keyof DelegationEntries>, never>>(object: I): DelegationEntries;
};
export declare const DelegationPoolData: {
    encode(message: DelegationPoolData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPoolData;
    fromJSON(object: any): DelegationPoolData;
    toJSON(message: DelegationPoolData): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & {
        id?: string | undefined;
        staker?: string | undefined;
        current_rewards?: string | undefined;
        total_delegation?: string | undefined;
        latest_index_k?: string | undefined;
        delegator_count?: string | undefined;
        latest_index_was_undelegation?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof DelegationPoolData>, never>>(object: I): DelegationPoolData;
};
export declare const Delegator: {
    encode(message: Delegator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegator;
    fromJSON(object: any): Delegator;
    toJSON(message: Delegator): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        k_index?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        id?: string | undefined;
        k_index?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & Record<Exclude<keyof I, keyof Delegator>, never>>(object: I): Delegator;
};
export declare const Funder: {
    encode(message: Funder, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Funder;
    fromJSON(object: any): Funder;
    toJSON(message: Funder): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
    } & {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof Funder>, never>>(object: I): Funder;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        id?: string | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        height_archived?: string | undefined;
        bytes_archived?: string | undefined;
        total_bundles?: string | undefined;
        total_bundle_rewards?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        paused?: boolean | undefined;
        funders?: string[] | undefined;
        lowest_funder?: string | undefined;
        total_funds?: string | undefined;
        stakers?: string[] | undefined;
        lowest_staker?: string | undefined;
        total_stake?: string | undefined;
        total_delegation?: string | undefined;
        bundle_proposal?: {
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            bundle_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
        } | undefined;
        max_bundle_size?: string | undefined;
        protocol?: {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
        } | undefined;
        upgrade_plan?: {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        height_archived?: string | undefined;
        bytes_archived?: string | undefined;
        total_bundles?: string | undefined;
        total_bundle_rewards?: string | undefined;
        start_height?: string | undefined;
        upload_interval?: string | undefined;
        operating_cost?: string | undefined;
        paused?: boolean | undefined;
        funders?: (string[] & string[] & Record<Exclude<keyof I["funders"], keyof string[]>, never>) | undefined;
        lowest_funder?: string | undefined;
        total_funds?: string | undefined;
        stakers?: (string[] & string[] & Record<Exclude<keyof I["stakers"], keyof string[]>, never>) | undefined;
        lowest_staker?: string | undefined;
        total_stake?: string | undefined;
        total_delegation?: string | undefined;
        bundle_proposal?: ({
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            bundle_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: string[] | undefined;
            voters_invalid?: string[] | undefined;
            voters_abstain?: string[] | undefined;
        } & {
            uploader?: string | undefined;
            next_uploader?: string | undefined;
            bundle_id?: string | undefined;
            byte_size?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            created_at?: string | undefined;
            voters_valid?: (string[] & string[] & Record<Exclude<keyof I["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
            voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
            voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["bundle_proposal"], keyof BundleProposal>, never>) | undefined;
        max_bundle_size?: string | undefined;
        protocol?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            last_upgrade?: string | undefined;
        } & Record<Exclude<keyof I["protocol"], keyof Protocol>, never>) | undefined;
        upgrade_plan?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduled_at?: string | undefined;
            duration?: string | undefined;
        } & Record<Exclude<keyof I["upgrade_plan"], keyof UpgradePlan>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Pool>, never>>(object: I): Pool;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        bundle_id?: string | undefined;
        pool_id?: string | undefined;
        uploader?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        finalized_at?: string | undefined;
    } & {
        bundle_id?: string | undefined;
        pool_id?: string | undefined;
        uploader?: string | undefined;
        from_height?: string | undefined;
        to_height?: string | undefined;
        finalized_at?: string | undefined;
    } & Record<Exclude<keyof I, keyof Proposal>, never>>(object: I): Proposal;
};
export declare const Staker: {
    encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staker;
    fromJSON(object: any): Staker;
    toJSON(message: Staker): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        unbonding_amount?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
    } & {
        account?: string | undefined;
        pool_id?: string | undefined;
        amount?: string | undefined;
        unbonding_amount?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
    } & Record<Exclude<keyof I, keyof Staker>, never>>(object: I): Staker;
};
export declare const UnbondingEntries: {
    encode(message: UnbondingEntries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingEntries;
    fromJSON(object: any): UnbondingEntries;
    toJSON(message: UnbondingEntries): unknown;
    fromPartial<I extends {
        index?: string | undefined;
        pool_id?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        creation_time?: string | undefined;
        amount?: string | undefined;
    } & {
        index?: string | undefined;
        pool_id?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        creation_time?: string | undefined;
        amount?: string | undefined;
    } & Record<Exclude<keyof I, keyof UnbondingEntries>, never>>(object: I): UnbondingEntries;
};
export declare const UnbondingState: {
    encode(message: UnbondingState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingState;
    fromJSON(object: any): UnbondingState;
    toJSON(message: UnbondingState): unknown;
    fromPartial<I extends {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & {
        low_index?: string | undefined;
        high_index?: string | undefined;
    } & Record<Exclude<keyof I, keyof UnbondingState>, never>>(object: I): UnbondingState;
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
