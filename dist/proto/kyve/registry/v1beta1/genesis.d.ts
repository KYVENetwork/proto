import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import { UnbondingState, Pool, Funder, Staker, Delegator, DelegationPoolData, DelegationEntries, Proposal, UnbondingEntries } from "../../../kyve/registry/v1beta1/registry";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** GenesisState defines the registry module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** pool_list ... */
    poolList: Pool[];
    /** pool_count ... */
    poolCount: string;
    /** funder_list ... */
    funderList: Funder[];
    /** staker_list ... */
    stakerList: Staker[];
    /** delegator_list ... */
    delegatorList: Delegator[];
    /** delegation_pool_data_list ... */
    delegationPoolDataList: DelegationPoolData[];
    /** delegation_entries_list ... */
    delegationEntriesList: DelegationEntries[];
    /** proposal_list ... */
    proposalList: Proposal[];
    /** unbonding_state ... */
    unbondingState?: UnbondingState;
    /** unbonding_entries ... */
    unbondingEntries: UnbondingEntries[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            voteSlash?: string | undefined;
            uploadSlash?: string | undefined;
            timeoutSlash?: string | undefined;
            uploadTimeout?: string | undefined;
            storageCost?: string | undefined;
            networkFee?: string | undefined;
            maxPoints?: string | undefined;
        } | undefined;
        poolList?: {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            heightArchived?: string | undefined;
            bytesArchived?: string | undefined;
            totalBundles?: string | undefined;
            totalBundleRewards?: string | undefined;
            startHeight?: string | undefined;
            uploadInterval?: string | undefined;
            operatingCost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: string[] | undefined;
            lowestStaker?: string | undefined;
            totalStake?: string | undefined;
            totalDelegation?: string | undefined;
            bundleProposal?: {
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: string[] | undefined;
                votersInvalid?: string[] | undefined;
                votersAbstain?: string[] | undefined;
            } | undefined;
            maxBundleSize?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } | undefined;
            upgradePlan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
                duration?: string | undefined;
            } | undefined;
        }[] | undefined;
        poolCount?: string | undefined;
        funderList?: {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        stakerList?: {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
            unbondingAmount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] | undefined;
        delegatorList?: {
            id?: string | undefined;
            kIndex?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] | undefined;
        delegationPoolDataList?: {
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[] | undefined;
        delegationEntriesList?: {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: string | undefined;
        }[] | undefined;
        proposalList?: {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        }[] | undefined;
        unbondingState?: {
            lowIndex?: string | undefined;
            highIndex?: string | undefined;
        } | undefined;
        unbondingEntries?: {
            index?: string | undefined;
            poolId?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        params?: ({
            voteSlash?: string | undefined;
            uploadSlash?: string | undefined;
            timeoutSlash?: string | undefined;
            uploadTimeout?: string | undefined;
            storageCost?: string | undefined;
            networkFee?: string | undefined;
            maxPoints?: string | undefined;
        } & {
            voteSlash?: string | undefined;
            uploadSlash?: string | undefined;
            timeoutSlash?: string | undefined;
            uploadTimeout?: string | undefined;
            storageCost?: string | undefined;
            networkFee?: string | undefined;
            maxPoints?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        poolList?: ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            heightArchived?: string | undefined;
            bytesArchived?: string | undefined;
            totalBundles?: string | undefined;
            totalBundleRewards?: string | undefined;
            startHeight?: string | undefined;
            uploadInterval?: string | undefined;
            operatingCost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: string[] | undefined;
            lowestStaker?: string | undefined;
            totalStake?: string | undefined;
            totalDelegation?: string | undefined;
            bundleProposal?: {
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: string[] | undefined;
                votersInvalid?: string[] | undefined;
                votersAbstain?: string[] | undefined;
            } | undefined;
            maxBundleSize?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } | undefined;
            upgradePlan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
                duration?: string | undefined;
            } | undefined;
        }[] & ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            heightArchived?: string | undefined;
            bytesArchived?: string | undefined;
            totalBundles?: string | undefined;
            totalBundleRewards?: string | undefined;
            startHeight?: string | undefined;
            uploadInterval?: string | undefined;
            operatingCost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: string[] | undefined;
            lowestStaker?: string | undefined;
            totalStake?: string | undefined;
            totalDelegation?: string | undefined;
            bundleProposal?: {
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: string[] | undefined;
                votersInvalid?: string[] | undefined;
                votersAbstain?: string[] | undefined;
            } | undefined;
            maxBundleSize?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } | undefined;
            upgradePlan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
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
            heightArchived?: string | undefined;
            bytesArchived?: string | undefined;
            totalBundles?: string | undefined;
            totalBundleRewards?: string | undefined;
            startHeight?: string | undefined;
            uploadInterval?: string | undefined;
            operatingCost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["stakers"], keyof string[]>, never>) | undefined;
            lowestStaker?: string | undefined;
            totalStake?: string | undefined;
            totalDelegation?: string | undefined;
            bundleProposal?: ({
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: string[] | undefined;
                votersInvalid?: string[] | undefined;
                votersAbstain?: string[] | undefined;
            } & {
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["poolList"][number]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["poolList"][number]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
            upgradePlan?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
                duration?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
                duration?: string | undefined;
            } & Record<Exclude<keyof I["poolList"][number]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["poolList"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["poolList"], keyof {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            heightArchived?: string | undefined;
            bytesArchived?: string | undefined;
            totalBundles?: string | undefined;
            totalBundleRewards?: string | undefined;
            startHeight?: string | undefined;
            uploadInterval?: string | undefined;
            operatingCost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: string[] | undefined;
            lowestStaker?: string | undefined;
            totalStake?: string | undefined;
            totalDelegation?: string | undefined;
            bundleProposal?: {
                uploader?: string | undefined;
                nextUploader?: string | undefined;
                bundleId?: string | undefined;
                byteSize?: string | undefined;
                fromHeight?: string | undefined;
                toHeight?: string | undefined;
                createdAt?: string | undefined;
                votersValid?: string[] | undefined;
                votersInvalid?: string[] | undefined;
                votersAbstain?: string[] | undefined;
            } | undefined;
            maxBundleSize?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } | undefined;
            upgradePlan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduledAt?: string | undefined;
                duration?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        poolCount?: string | undefined;
        funderList?: ({
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        } & {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funderList"][number], keyof Funder>, never>)[] & Record<Exclude<keyof I["funderList"], keyof {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        stakerList?: ({
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
            unbondingAmount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] & ({
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
            unbondingAmount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
            unbondingAmount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & Record<Exclude<keyof I["stakerList"][number], keyof Staker>, never>)[] & Record<Exclude<keyof I["stakerList"], keyof {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
            unbondingAmount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[]>, never>) | undefined;
        delegatorList?: ({
            id?: string | undefined;
            kIndex?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] & ({
            id?: string | undefined;
            kIndex?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        } & {
            id?: string | undefined;
            kIndex?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        } & Record<Exclude<keyof I["delegatorList"][number], keyof Delegator>, never>)[] & Record<Exclude<keyof I["delegatorList"], keyof {
            id?: string | undefined;
            kIndex?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[]>, never>) | undefined;
        delegationPoolDataList?: ({
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[] & ({
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        } & {
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        } & Record<Exclude<keyof I["delegationPoolDataList"][number], keyof DelegationPoolData>, never>)[] & Record<Exclude<keyof I["delegationPoolDataList"], keyof {
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[]>, never>) | undefined;
        delegationEntriesList?: ({
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: string | undefined;
        }[] & ({
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: string | undefined;
        } & {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: string | undefined;
        } & Record<Exclude<keyof I["delegationEntriesList"][number], keyof DelegationEntries>, never>)[] & Record<Exclude<keyof I["delegationEntriesList"], keyof {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: string | undefined;
        }[]>, never>) | undefined;
        proposalList?: ({
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        }[] & ({
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        } & {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        } & Record<Exclude<keyof I["proposalList"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposalList"], keyof {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        }[]>, never>) | undefined;
        unbondingState?: ({
            lowIndex?: string | undefined;
            highIndex?: string | undefined;
        } & {
            lowIndex?: string | undefined;
            highIndex?: string | undefined;
        } & Record<Exclude<keyof I["unbondingState"], keyof UnbondingState>, never>) | undefined;
        unbondingEntries?: ({
            index?: string | undefined;
            poolId?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            index?: string | undefined;
            poolId?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: string | undefined;
            amount?: string | undefined;
        } & {
            index?: string | undefined;
            poolId?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["unbondingEntries"][number], keyof UnbondingEntries>, never>)[] & Record<Exclude<keyof I["unbondingEntries"], keyof {
            index?: string | undefined;
            poolId?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
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
