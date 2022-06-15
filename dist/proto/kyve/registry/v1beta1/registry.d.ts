import * as _m0 from "protobufjs/minimal";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** BundleProposal ... */
export interface BundleProposal {
    /** uploader ... */
    uploader: string;
    /** next_uploader ... */
    nextUploader: string;
    /** bundle_id ... */
    bundleId: string;
    /** byte_size ... */
    byteSize: number;
    /** from_height ... */
    fromHeight: number;
    /** to_height ... */
    toHeight: number;
    /** created_at ... */
    createdAt: number;
    /** voters_valid ... */
    votersValid: string[];
    /** voters_invalid ... */
    votersInvalid: string[];
    /** voters_abstain ... */
    votersAbstain: string[];
}
/** Protocol ... */
export interface Protocol {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** last_upgrade ... */
    lastUpgrade: number;
}
/** Upgrade ... */
export interface UpgradePlan {
    /** version ... */
    version: string;
    /** binaries ... */
    binaries: string;
    /** scheduled_at ... */
    scheduledAt: number;
    /** duration ... */
    duration: number;
}
/** DelegationEntries ... */
export interface DelegationEntries {
    /** id ... */
    id: number;
    /** balance ... */
    balance: string;
    /** staker ... */
    staker: string;
    /** k_index ... */
    kIndex: number;
}
/** DelegationPoolData ... */
export interface DelegationPoolData {
    /** id ... */
    id: number;
    /** staker ... */
    staker: string;
    /** current_rewards ... */
    currentRewards: number;
    /** total_delegation ... */
    totalDelegation: number;
    /** latest_index_k ... */
    latestIndexK: number;
    /** delegator_count ... */
    delegatorCount: number;
    /** latest_index_was_undelegation ... */
    latestIndexWasUndelegation: boolean;
}
/** Delegator ... */
export interface Delegator {
    /** id ... */
    id: number;
    /** k_index ... */
    kIndex: number;
    /** delegation_amount ... */
    delegationAmount: number;
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
    poolId: number;
    /** amount ... */
    amount: number;
}
/** Pool ... */
export interface Pool {
    /** id ... */
    id: number;
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
    heightArchived: number;
    /** bytes_archived ... */
    bytesArchived: number;
    /** total_bundles ... */
    totalBundles: number;
    /** total_bundle_rewards ... */
    totalBundleRewards: number;
    /** start_height ... */
    startHeight: number;
    /** upload_interval ... */
    uploadInterval: number;
    /** operating_cost ... */
    operatingCost: number;
    /** paused ... */
    paused: boolean;
    /** funders ... */
    funders: string[];
    /** lowest_funder ... */
    lowestFunder: string;
    /** total_funds ... */
    totalFunds: number;
    /** stakers ... */
    stakers: string[];
    /** lowest_staker ... */
    lowestStaker: string;
    /** total_stake ... */
    totalStake: number;
    /** total_delegation ... */
    totalDelegation: number;
    /** bundle_proposal ... */
    bundleProposal: BundleProposal | undefined;
    /** max_bundle_size ... */
    maxBundleSize: number;
    /** protocol ... */
    protocol: Protocol | undefined;
    /** upgrade_plan ... */
    upgradePlan: UpgradePlan | undefined;
}
/** Proposal ... */
export interface Proposal {
    /** bundle_id ... */
    bundleId: string;
    /** pool_id ... */
    poolId: number;
    /** uploader ... */
    uploader: string;
    /** from_height ... */
    fromHeight: number;
    /** to_height ... */
    toHeight: number;
    /** finalized_at ... */
    finalizedAt: number;
}
/** Staker ... */
export interface Staker {
    /** staker ... */
    account: string;
    /** pool_id ... */
    poolId: number;
    /** amount ... */
    amount: number;
    /** unbonding_amount ... */
    unbondingAmount: number;
    /** commission ... */
    commission: string;
    /** moniker ... */
    moniker: string;
    /** website ... */
    website: string;
    /** logo */
    logo: string;
    /** points */
    points: number;
}
/** UnbondingEntries ... */
export interface UnbondingEntries {
    /** index ... */
    index: number;
    /** pool_id ... */
    poolId: number;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
    /** creation_time ... */
    creationTime: number;
    /** amount ... */
    amount: number;
}
/** UnbondingState stores the state for the unbonding of stakes and delegations. */
export interface UnbondingState {
    /** low_index ... */
    lowIndex: number;
    /** high_index ... */
    highIndex: number;
}
export declare const BundleProposal: {
    encode(message: BundleProposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal;
    fromJSON(object: any): BundleProposal;
    toJSON(message: BundleProposal): unknown;
    fromPartial<I extends {
        uploader?: string | undefined;
        nextUploader?: string | undefined;
        bundleId?: string | undefined;
        byteSize?: number | undefined;
        fromHeight?: number | undefined;
        toHeight?: number | undefined;
        createdAt?: number | undefined;
        votersValid?: string[] | undefined;
        votersInvalid?: string[] | undefined;
        votersAbstain?: string[] | undefined;
    } & {
        uploader?: string | undefined;
        nextUploader?: string | undefined;
        bundleId?: string | undefined;
        byteSize?: number | undefined;
        fromHeight?: number | undefined;
        toHeight?: number | undefined;
        createdAt?: number | undefined;
        votersValid?: (string[] & string[] & Record<Exclude<keyof I["votersValid"], keyof string[]>, never>) | undefined;
        votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["votersInvalid"], keyof string[]>, never>) | undefined;
        votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["votersAbstain"], keyof string[]>, never>) | undefined;
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
        lastUpgrade?: number | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        lastUpgrade?: number | undefined;
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
        scheduledAt?: number | undefined;
        duration?: number | undefined;
    } & {
        version?: string | undefined;
        binaries?: string | undefined;
        scheduledAt?: number | undefined;
        duration?: number | undefined;
    } & Record<Exclude<keyof I, keyof UpgradePlan>, never>>(object: I): UpgradePlan;
};
export declare const DelegationEntries: {
    encode(message: DelegationEntries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntries;
    fromJSON(object: any): DelegationEntries;
    toJSON(message: DelegationEntries): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        kIndex?: number | undefined;
    } & {
        id?: number | undefined;
        balance?: string | undefined;
        staker?: string | undefined;
        kIndex?: number | undefined;
    } & Record<Exclude<keyof I, keyof DelegationEntries>, never>>(object: I): DelegationEntries;
};
export declare const DelegationPoolData: {
    encode(message: DelegationPoolData, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPoolData;
    fromJSON(object: any): DelegationPoolData;
    toJSON(message: DelegationPoolData): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        staker?: string | undefined;
        currentRewards?: number | undefined;
        totalDelegation?: number | undefined;
        latestIndexK?: number | undefined;
        delegatorCount?: number | undefined;
        latestIndexWasUndelegation?: boolean | undefined;
    } & {
        id?: number | undefined;
        staker?: string | undefined;
        currentRewards?: number | undefined;
        totalDelegation?: number | undefined;
        latestIndexK?: number | undefined;
        delegatorCount?: number | undefined;
        latestIndexWasUndelegation?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof DelegationPoolData>, never>>(object: I): DelegationPoolData;
};
export declare const Delegator: {
    encode(message: Delegator, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Delegator;
    fromJSON(object: any): Delegator;
    toJSON(message: Delegator): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        kIndex?: number | undefined;
        delegationAmount?: number | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        id?: number | undefined;
        kIndex?: number | undefined;
        delegationAmount?: number | undefined;
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
        poolId?: number | undefined;
        amount?: number | undefined;
    } & {
        account?: string | undefined;
        poolId?: number | undefined;
        amount?: number | undefined;
    } & Record<Exclude<keyof I, keyof Funder>, never>>(object: I): Funder;
};
export declare const Pool: {
    encode(message: Pool, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Pool;
    fromJSON(object: any): Pool;
    toJSON(message: Pool): unknown;
    fromPartial<I extends {
        id?: number | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        heightArchived?: number | undefined;
        bytesArchived?: number | undefined;
        totalBundles?: number | undefined;
        totalBundleRewards?: number | undefined;
        startHeight?: number | undefined;
        uploadInterval?: number | undefined;
        operatingCost?: number | undefined;
        paused?: boolean | undefined;
        funders?: string[] | undefined;
        lowestFunder?: string | undefined;
        totalFunds?: number | undefined;
        stakers?: string[] | undefined;
        lowestStaker?: string | undefined;
        totalStake?: number | undefined;
        totalDelegation?: number | undefined;
        bundleProposal?: {
            uploader?: string | undefined;
            nextUploader?: string | undefined;
            bundleId?: string | undefined;
            byteSize?: number | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            createdAt?: number | undefined;
            votersValid?: string[] | undefined;
            votersInvalid?: string[] | undefined;
            votersAbstain?: string[] | undefined;
        } | undefined;
        maxBundleSize?: number | undefined;
        protocol?: {
            version?: string | undefined;
            binaries?: string | undefined;
            lastUpgrade?: number | undefined;
        } | undefined;
        upgradePlan?: {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduledAt?: number | undefined;
            duration?: number | undefined;
        } | undefined;
    } & {
        id?: number | undefined;
        creator?: string | undefined;
        name?: string | undefined;
        runtime?: string | undefined;
        logo?: string | undefined;
        versions?: string | undefined;
        config?: string | undefined;
        heightArchived?: number | undefined;
        bytesArchived?: number | undefined;
        totalBundles?: number | undefined;
        totalBundleRewards?: number | undefined;
        startHeight?: number | undefined;
        uploadInterval?: number | undefined;
        operatingCost?: number | undefined;
        paused?: boolean | undefined;
        funders?: (string[] & string[] & Record<Exclude<keyof I["funders"], keyof string[]>, never>) | undefined;
        lowestFunder?: string | undefined;
        totalFunds?: number | undefined;
        stakers?: (string[] & string[] & Record<Exclude<keyof I["stakers"], keyof string[]>, never>) | undefined;
        lowestStaker?: string | undefined;
        totalStake?: number | undefined;
        totalDelegation?: number | undefined;
        bundleProposal?: ({
            uploader?: string | undefined;
            nextUploader?: string | undefined;
            bundleId?: string | undefined;
            byteSize?: number | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            createdAt?: number | undefined;
            votersValid?: string[] | undefined;
            votersInvalid?: string[] | undefined;
            votersAbstain?: string[] | undefined;
        } & {
            uploader?: string | undefined;
            nextUploader?: string | undefined;
            bundleId?: string | undefined;
            byteSize?: number | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            createdAt?: number | undefined;
            votersValid?: (string[] & string[] & Record<Exclude<keyof I["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
        } & Record<Exclude<keyof I["bundleProposal"], keyof BundleProposal>, never>) | undefined;
        maxBundleSize?: number | undefined;
        protocol?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            lastUpgrade?: number | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            lastUpgrade?: number | undefined;
        } & Record<Exclude<keyof I["protocol"], keyof Protocol>, never>) | undefined;
        upgradePlan?: ({
            version?: string | undefined;
            binaries?: string | undefined;
            scheduledAt?: number | undefined;
            duration?: number | undefined;
        } & {
            version?: string | undefined;
            binaries?: string | undefined;
            scheduledAt?: number | undefined;
            duration?: number | undefined;
        } & Record<Exclude<keyof I["upgradePlan"], keyof UpgradePlan>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Pool>, never>>(object: I): Pool;
};
export declare const Proposal: {
    encode(message: Proposal, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Proposal;
    fromJSON(object: any): Proposal;
    toJSON(message: Proposal): unknown;
    fromPartial<I extends {
        bundleId?: string | undefined;
        poolId?: number | undefined;
        uploader?: string | undefined;
        fromHeight?: number | undefined;
        toHeight?: number | undefined;
        finalizedAt?: number | undefined;
    } & {
        bundleId?: string | undefined;
        poolId?: number | undefined;
        uploader?: string | undefined;
        fromHeight?: number | undefined;
        toHeight?: number | undefined;
        finalizedAt?: number | undefined;
    } & Record<Exclude<keyof I, keyof Proposal>, never>>(object: I): Proposal;
};
export declare const Staker: {
    encode(message: Staker, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staker;
    fromJSON(object: any): Staker;
    toJSON(message: Staker): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        poolId?: number | undefined;
        amount?: number | undefined;
        unbondingAmount?: number | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: number | undefined;
    } & {
        account?: string | undefined;
        poolId?: number | undefined;
        amount?: number | undefined;
        unbondingAmount?: number | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: number | undefined;
    } & Record<Exclude<keyof I, keyof Staker>, never>>(object: I): Staker;
};
export declare const UnbondingEntries: {
    encode(message: UnbondingEntries, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingEntries;
    fromJSON(object: any): UnbondingEntries;
    toJSON(message: UnbondingEntries): unknown;
    fromPartial<I extends {
        index?: number | undefined;
        poolId?: number | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        creationTime?: number | undefined;
        amount?: number | undefined;
    } & {
        index?: number | undefined;
        poolId?: number | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
        creationTime?: number | undefined;
        amount?: number | undefined;
    } & Record<Exclude<keyof I, keyof UnbondingEntries>, never>>(object: I): UnbondingEntries;
};
export declare const UnbondingState: {
    encode(message: UnbondingState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingState;
    fromJSON(object: any): UnbondingState;
    toJSON(message: UnbondingState): unknown;
    fromPartial<I extends {
        lowIndex?: number | undefined;
        highIndex?: number | undefined;
    } & {
        lowIndex?: number | undefined;
        highIndex?: number | undefined;
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
