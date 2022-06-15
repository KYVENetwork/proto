import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import { Pool, Funder, Staker, Delegator, DelegationPoolData, DelegationEntries, Proposal, UnbondingState, UnbondingEntries } from "../../../kyve/registry/v1beta1/registry";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** GenesisState defines the registry module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    /** pool_list ... */
    poolList: Pool[];
    /** pool_count ... */
    poolCount: number;
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
    unbondingState: UnbondingState | undefined;
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
            uploadTimeout?: number | undefined;
            storageCost?: number | undefined;
            networkFee?: string | undefined;
            maxPoints?: number | undefined;
        } | undefined;
        poolList?: {
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
        }[] | undefined;
        poolCount?: number | undefined;
        funderList?: {
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
        }[] | undefined;
        stakerList?: {
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
            unbondingAmount?: number | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: number | undefined;
        }[] | undefined;
        delegatorList?: {
            id?: number | undefined;
            kIndex?: number | undefined;
            delegationAmount?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] | undefined;
        delegationPoolDataList?: {
            id?: number | undefined;
            staker?: string | undefined;
            currentRewards?: number | undefined;
            totalDelegation?: number | undefined;
            latestIndexK?: number | undefined;
            delegatorCount?: number | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[] | undefined;
        delegationEntriesList?: {
            id?: number | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: number | undefined;
        }[] | undefined;
        proposalList?: {
            bundleId?: string | undefined;
            poolId?: number | undefined;
            uploader?: string | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            finalizedAt?: number | undefined;
        }[] | undefined;
        unbondingState?: {
            lowIndex?: number | undefined;
            highIndex?: number | undefined;
        } | undefined;
        unbondingEntries?: {
            index?: number | undefined;
            poolId?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: number | undefined;
            amount?: number | undefined;
        }[] | undefined;
    } & {
        params?: ({
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
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        poolList?: ({
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
        }[] & ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: number | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["poolList"][number]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["poolList"][number]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: number | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: number | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: number | undefined;
            } & Record<Exclude<keyof I["poolList"][number]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["poolList"][number]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["poolList"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["poolList"], keyof {
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
        }[]>, never>) | undefined;
        poolCount?: number | undefined;
        funderList?: ({
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
        }[] & ({
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
        } & {
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
        } & Record<Exclude<keyof I["funderList"][number], keyof Funder>, never>)[] & Record<Exclude<keyof I["funderList"], keyof {
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
        }[]>, never>) | undefined;
        stakerList?: ({
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
            unbondingAmount?: number | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: number | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["stakerList"][number], keyof Staker>, never>)[] & Record<Exclude<keyof I["stakerList"], keyof {
            account?: string | undefined;
            poolId?: number | undefined;
            amount?: number | undefined;
            unbondingAmount?: number | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: number | undefined;
        }[]>, never>) | undefined;
        delegatorList?: ({
            id?: number | undefined;
            kIndex?: number | undefined;
            delegationAmount?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["delegatorList"][number], keyof Delegator>, never>)[] & Record<Exclude<keyof I["delegatorList"], keyof {
            id?: number | undefined;
            kIndex?: number | undefined;
            delegationAmount?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[]>, never>) | undefined;
        delegationPoolDataList?: ({
            id?: number | undefined;
            staker?: string | undefined;
            currentRewards?: number | undefined;
            totalDelegation?: number | undefined;
            latestIndexK?: number | undefined;
            delegatorCount?: number | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["delegationPoolDataList"][number], keyof DelegationPoolData>, never>)[] & Record<Exclude<keyof I["delegationPoolDataList"], keyof {
            id?: number | undefined;
            staker?: string | undefined;
            currentRewards?: number | undefined;
            totalDelegation?: number | undefined;
            latestIndexK?: number | undefined;
            delegatorCount?: number | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        }[]>, never>) | undefined;
        delegationEntriesList?: ({
            id?: number | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: number | undefined;
        }[] & ({
            id?: number | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: number | undefined;
        } & {
            id?: number | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: number | undefined;
        } & Record<Exclude<keyof I["delegationEntriesList"][number], keyof DelegationEntries>, never>)[] & Record<Exclude<keyof I["delegationEntriesList"], keyof {
            id?: number | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            kIndex?: number | undefined;
        }[]>, never>) | undefined;
        proposalList?: ({
            bundleId?: string | undefined;
            poolId?: number | undefined;
            uploader?: string | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            finalizedAt?: number | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["proposalList"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposalList"], keyof {
            bundleId?: string | undefined;
            poolId?: number | undefined;
            uploader?: string | undefined;
            fromHeight?: number | undefined;
            toHeight?: number | undefined;
            finalizedAt?: number | undefined;
        }[]>, never>) | undefined;
        unbondingState?: ({
            lowIndex?: number | undefined;
            highIndex?: number | undefined;
        } & {
            lowIndex?: number | undefined;
            highIndex?: number | undefined;
        } & Record<Exclude<keyof I["unbondingState"], keyof UnbondingState>, never>) | undefined;
        unbondingEntries?: ({
            index?: number | undefined;
            poolId?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: number | undefined;
            amount?: number | undefined;
        }[] & ({
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
        } & Record<Exclude<keyof I["unbondingEntries"][number], keyof UnbondingEntries>, never>)[] & Record<Exclude<keyof I["unbondingEntries"], keyof {
            index?: number | undefined;
            poolId?: number | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            creationTime?: number | undefined;
            amount?: number | undefined;
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
