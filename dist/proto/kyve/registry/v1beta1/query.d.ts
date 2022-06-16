import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import { Pool, Funder, Proposal, DelegationPoolData } from "../../../kyve/registry/v1beta1/registry";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params?: Params;
}
/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
    /** id defines the unique ID of the pool. */
    id: string;
}
/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
    /** pool ... */
    pool?: Pool;
}
/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** search ... */
    search: string;
    /** runtime ... */
    runtime: string;
    /** paused ... */
    paused: boolean;
}
/** QueryPoolsResponse is the response type for the Query/Pools RPC method. */
export interface QueryPoolsResponse {
    /** pools ... */
    pools: Pool[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryFundersListRequest is the request type for the Query/FundersList RPC method. */
export interface QueryFundersListRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
}
/** QueryFundersListResponse is the response type for the Query/FundersList RPC method. */
export interface QueryFundersListResponse {
    /** funders ... */
    funders: Funder[];
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
    /** funder */
    funder: string;
}
/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
    /** funder ... */
    funder?: Funder;
}
/** QueryStakersListRequest is the request type for the Query/StakersList RPC method. */
export interface QueryStakersListRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
}
/** QueryStakersListResponse is the response type for the Query/StakersList RPC method. */
export interface QueryStakersListResponse {
    /** stakers ... */
    stakers: StakerResponse[];
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
    /** staker ... */
    staker: string;
}
/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
    /** staker ... */
    staker?: StakerResponse;
}
/** StakerResponse ... */
export interface StakerResponse {
    /** staker ... */
    staker: string;
    /** pool_id ... */
    poolId: string;
    /** account ... */
    account: string;
    /** amount ... */
    amount: string;
    /** total_delegation ... */
    totalDelegation: string;
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
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** bundle_id ... */
    bundleId: string;
}
/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
    /** proposal ... */
    proposal?: Proposal;
}
/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    poolId: string;
}
/** QueryProposalsResponse is the response type for the Query/Proposals RPC method. */
export interface QueryProposalsResponse {
    /** proposals ... */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryProposalByHeightRequest is the request type for the Query/ProposalByHeight RPC method. */
export interface QueryProposalByHeightRequest {
    /** pool_id ... */
    poolId: string;
    /** height ... */
    height: string;
}
/** QueryProposalResponse is the response type for the Query/ProposalByHeight RPC method. */
export interface QueryProposalByHeightResponse {
    /** proposal ... */
    proposal?: Proposal;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
    /** proposer ... */
    proposer: string;
    /** from_height ... */
    fromHeight: string;
}
/** QueryCanProposeResponse is the response type for the Query/CanPropose RPC method. */
export interface QueryCanProposeResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryCanVoteRequest is the request type for the Query/CanVote RPC method. */
export interface QueryCanVoteRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
    /** voter ... */
    voter: string;
    /** bundle_id ... */
    bundleId: string;
}
/** QueryCanVoteResponse is the response type for the Query/CanVote RPC method. */
export interface QueryCanVoteResponse {
    /** possible ... */
    possible: boolean;
    /** reason ... */
    reason: string;
}
/** QueryStakeInfoRequest is the request type for the Query/StakeInfo RPC method. */
export interface QueryStakeInfoRequest {
    /** pool_id ... */
    poolId: string;
    /** staker .. */
    staker: string;
}
/** QueryStakeInfoResponse is the response type for the Query/StakeInfo RPC method. */
export interface QueryStakeInfoResponse {
    /** balance ... */
    balance: string;
    /** current_stake ... */
    currentStake: string;
    /** minimum_stake ... */
    minimumStake: string;
}
/** QueryAccountAssetsRequest is the request type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsRequest {
    /** address ... */
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountAssetsResponse {
    /** balance ... */
    balance: string;
    /** protocol_staking ... */
    protocolStaking: string;
    /** protocol_delegation ... */
    protocolDelegation: string;
    /** protocol_rewards ... */
    protocolRewards: string;
    /** protocol_funding ... */
    protocolFunding: string;
}
/** QueryAccountFundedListRequest is the request type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
    /** funded ... */
    funded: Funded[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** Funded ... */
export interface Funded {
    /** account ... */
    account: string;
    /** amount ... */
    amount: string;
    /** pool ... */
    pool?: Pool;
}
/** QueryAccountStakedListRequest is the request type for the Query/AccountStakedList RPC method. */
export interface QueryAccountStakedListRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountStakedListResponse is the response type for the Query/StakedList RPC method. */
export interface QueryAccountStakedListResponse {
    /** staked ... */
    staked: Staked[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** Staked ... */
export interface Staked {
    /** staker ... */
    staker: string;
    /** pool_id ... */
    poolId: string;
    /** account ... */
    account: string;
    /** amount ... */
    amount: string;
    /** pool ... */
    pool?: Pool;
}
/** QueryAccountDelegationListRequest is the request type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountDelegationListRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountDelegationListResponse {
    /** delegations ... */
    delegations: DelegatorResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
    /** pool_id defines the unique ID of the pool. */
    poolId: string;
    /** staker ... */
    staker: string;
    /** delegator ... */
    delegator: string;
}
/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
    /** delegator ... */
    delegator?: StakerDelegatorResponse;
}
/** DelegatorResponse ... */
export interface DelegatorResponse {
    /** account ... */
    account: string;
    /** pool ... */
    pool?: Pool;
    /** current_reward ... */
    currentReward: string;
    /** delegation_amount ... */
    delegationAmount: string;
    /** staker ... */
    staker: string;
    /** delegation_pool_data ... */
    delegationPoolData?: DelegationPoolData;
}
/** QueryDelegatorsByPoolAndStakerRequest is the request type for the Query/DelegatorsByPoolAndStaker RPC method. */
export interface QueryDelegatorsByPoolAndStakerRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    poolId: string;
    /** staker ... */
    staker: string;
}
/** QueryDelegatorsByPoolAndStakerResponse is the response type for the Query/DelegatorsByPoolAndStaker RPC method. */
export interface QueryDelegatorsByPoolAndStakerResponse {
    /** delegators ... */
    delegators: StakerDelegatorResponse[];
    /** pool ... */
    pool?: Pool;
    /** delegation_pool_data ... */
    delegationPoolData?: DelegationPoolData;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** current_reward ... */
    currentReward: string;
    /** delegation_amount ... */
    delegationAmount: string;
    /** staker ... */
    staker: string;
}
/** QueryStakersByPoolAndDelegatorRequest  is the request type for the Query/StakersByPoolAndDelegator RPC method. */
export interface QueryStakersByPoolAndDelegatorRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    poolId: string;
    /** delegator ... */
    delegator: string;
}
/** QueryStakersByPoolAndDelegatorResponse  is the response type for the Query/StakersByPoolAndDelegator RPC method. */
export interface QueryStakersByPoolAndDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** pool ... */
    pool?: Pool;
    /** stakers ... */
    stakers: DelegationForStakerResponse[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
    /** staker ... */
    staker: string;
    /** current_reward ... */
    currentReward: string;
    /** delegation_amount ... */
    delegationAmount: string;
    /** total_delegation_amount ... */
    totalDelegationAmount: string;
    /** delegator_count ... */
    delegatorCount: string;
}
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    fromPartial<I extends {} & {} & Record<Exclude<keyof I, never>, never>>(_: I): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
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
    } & Record<Exclude<keyof I, "params">, never>>(object: I): QueryParamsResponse;
};
export declare const QueryPoolRequest: {
    encode(message: QueryPoolRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest;
    fromJSON(object: any): QueryPoolRequest;
    toJSON(message: QueryPoolRequest): unknown;
    fromPartial<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & Record<Exclude<keyof I, "id">, never>>(object: I): QueryPoolRequest;
};
export declare const QueryPoolResponse: {
    encode(message: QueryPoolResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse;
    fromJSON(object: any): QueryPoolResponse;
    toJSON(message: QueryPoolResponse): unknown;
    fromPartial<I extends {
        pool?: {
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
        } | undefined;
    } & {
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, "pool">, never>>(object: I): QueryPoolResponse;
};
export declare const QueryPoolsRequest: {
    encode(message: QueryPoolsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest;
    fromJSON(object: any): QueryPoolsRequest;
    toJSON(message: QueryPoolsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        search?: string | undefined;
        runtime?: string | undefined;
        paused?: boolean | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        search?: string | undefined;
        runtime?: string | undefined;
        paused?: boolean | undefined;
    } & Record<Exclude<keyof I, keyof QueryPoolsRequest>, never>>(object: I): QueryPoolsRequest;
};
export declare const QueryPoolsResponse: {
    encode(message: QueryPoolsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse;
    fromJSON(object: any): QueryPoolsResponse;
    toJSON(message: QueryPoolsResponse): unknown;
    fromPartial<I extends {
        pools?: {
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
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        pools?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pools"][number]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pools"][number]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pools"][number]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
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
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryPoolsResponse>, never>>(object: I): QueryPoolsResponse;
};
export declare const QueryFundersListRequest: {
    encode(message: QueryFundersListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersListRequest;
    fromJSON(object: any): QueryFundersListRequest;
    toJSON(message: QueryFundersListRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
    } & {
        poolId?: string | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryFundersListRequest;
};
export declare const QueryFundersListResponse: {
    encode(message: QueryFundersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersListResponse;
    fromJSON(object: any): QueryFundersListResponse;
    toJSON(message: QueryFundersListResponse): unknown;
    fromPartial<I extends {
        funders?: {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        funders?: ({
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
        } & Record<Exclude<keyof I["funders"][number], keyof Funder>, never>)[] & Record<Exclude<keyof I["funders"], keyof {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "funders">, never>>(object: I): QueryFundersListResponse;
};
export declare const QueryFunderRequest: {
    encode(message: QueryFunderRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderRequest;
    fromJSON(object: any): QueryFunderRequest;
    toJSON(message: QueryFunderRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        funder?: string | undefined;
    } & {
        poolId?: string | undefined;
        funder?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryFunderRequest>, never>>(object: I): QueryFunderRequest;
};
export declare const QueryFunderResponse: {
    encode(message: QueryFunderResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderResponse;
    fromJSON(object: any): QueryFunderResponse;
    toJSON(message: QueryFunderResponse): unknown;
    fromPartial<I extends {
        funder?: {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        funder?: ({
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        } & {
            account?: string | undefined;
            poolId?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funder"], keyof Funder>, never>) | undefined;
    } & Record<Exclude<keyof I, "funder">, never>>(object: I): QueryFunderResponse;
};
export declare const QueryStakersListRequest: {
    encode(message: QueryStakersListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersListRequest;
    fromJSON(object: any): QueryStakersListRequest;
    toJSON(message: QueryStakersListRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
    } & {
        poolId?: string | undefined;
    } & Record<Exclude<keyof I, "poolId">, never>>(object: I): QueryStakersListRequest;
};
export declare const QueryStakersListResponse: {
    encode(message: QueryStakersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersListResponse;
    fromJSON(object: any): QueryStakersListResponse;
    toJSON(message: QueryStakersListResponse): unknown;
    fromPartial<I extends {
        stakers?: {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] | undefined;
    } & {
        stakers?: ({
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & Record<Exclude<keyof I["stakers"][number], keyof StakerResponse>, never>)[] & Record<Exclude<keyof I["stakers"], keyof {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "stakers">, never>>(object: I): QueryStakersListResponse;
};
export declare const QueryStakerRequest: {
    encode(message: QueryStakerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerRequest;
    fromJSON(object: any): QueryStakerRequest;
    toJSON(message: QueryStakerRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        staker?: string | undefined;
    } & {
        poolId?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryStakerRequest>, never>>(object: I): QueryStakerRequest;
};
export declare const QueryStakerResponse: {
    encode(message: QueryStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerResponse;
    fromJSON(object: any): QueryStakerResponse;
    toJSON(message: QueryStakerResponse): unknown;
    fromPartial<I extends {
        staker?: {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } | undefined;
    } & {
        staker?: ({
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            totalDelegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & Record<Exclude<keyof I["staker"], keyof StakerResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, "staker">, never>>(object: I): QueryStakerResponse;
};
export declare const StakerResponse: {
    encode(message: StakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakerResponse;
    fromJSON(object: any): StakerResponse;
    toJSON(message: StakerResponse): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        poolId?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        totalDelegation?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
    } & {
        staker?: string | undefined;
        poolId?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        totalDelegation?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
    } & Record<Exclude<keyof I, keyof StakerResponse>, never>>(object: I): StakerResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        bundleId?: string | undefined;
    } & {
        bundleId?: string | undefined;
    } & Record<Exclude<keyof I, "bundleId">, never>>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
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
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalResponse;
};
export declare const QueryProposalsRequest: {
    encode(message: QueryProposalsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsRequest;
    fromJSON(object: any): QueryProposalsRequest;
    toJSON(message: QueryProposalsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        poolId?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        poolId?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalsRequest>, never>>(object: I): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        proposals?: ({
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
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalsResponse>, never>>(object: I): QueryProposalsResponse;
};
export declare const QueryProposalByHeightRequest: {
    encode(message: QueryProposalByHeightRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalByHeightRequest;
    fromJSON(object: any): QueryProposalByHeightRequest;
    toJSON(message: QueryProposalByHeightRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        height?: string | undefined;
    } & {
        poolId?: string | undefined;
        height?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalByHeightRequest>, never>>(object: I): QueryProposalByHeightRequest;
};
export declare const QueryProposalByHeightResponse: {
    encode(message: QueryProposalByHeightResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalByHeightResponse;
    fromJSON(object: any): QueryProposalByHeightResponse;
    toJSON(message: QueryProposalByHeightResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            bundleId?: string | undefined;
            poolId?: string | undefined;
            uploader?: string | undefined;
            fromHeight?: string | undefined;
            toHeight?: string | undefined;
            finalizedAt?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
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
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalByHeightResponse;
};
export declare const QueryCanProposeRequest: {
    encode(message: QueryCanProposeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeRequest;
    fromJSON(object: any): QueryCanProposeRequest;
    toJSON(message: QueryCanProposeRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        proposer?: string | undefined;
        fromHeight?: string | undefined;
    } & {
        poolId?: string | undefined;
        proposer?: string | undefined;
        fromHeight?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCanProposeRequest>, never>>(object: I): QueryCanProposeRequest;
};
export declare const QueryCanProposeResponse: {
    encode(message: QueryCanProposeResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeResponse;
    fromJSON(object: any): QueryCanProposeResponse;
    toJSON(message: QueryCanProposeResponse): unknown;
    fromPartial<I extends {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCanProposeResponse>, never>>(object: I): QueryCanProposeResponse;
};
export declare const QueryCanVoteRequest: {
    encode(message: QueryCanVoteRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteRequest;
    fromJSON(object: any): QueryCanVoteRequest;
    toJSON(message: QueryCanVoteRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        voter?: string | undefined;
        bundleId?: string | undefined;
    } & {
        poolId?: string | undefined;
        voter?: string | undefined;
        bundleId?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCanVoteRequest>, never>>(object: I): QueryCanVoteRequest;
};
export declare const QueryCanVoteResponse: {
    encode(message: QueryCanVoteResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteResponse;
    fromJSON(object: any): QueryCanVoteResponse;
    toJSON(message: QueryCanVoteResponse): unknown;
    fromPartial<I extends {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & {
        possible?: boolean | undefined;
        reason?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryCanVoteResponse>, never>>(object: I): QueryCanVoteResponse;
};
export declare const QueryStakeInfoRequest: {
    encode(message: QueryStakeInfoRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeInfoRequest;
    fromJSON(object: any): QueryStakeInfoRequest;
    toJSON(message: QueryStakeInfoRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        staker?: string | undefined;
    } & {
        poolId?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryStakeInfoRequest>, never>>(object: I): QueryStakeInfoRequest;
};
export declare const QueryStakeInfoResponse: {
    encode(message: QueryStakeInfoResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakeInfoResponse;
    fromJSON(object: any): QueryStakeInfoResponse;
    toJSON(message: QueryStakeInfoResponse): unknown;
    fromPartial<I extends {
        balance?: string | undefined;
        currentStake?: string | undefined;
        minimumStake?: string | undefined;
    } & {
        balance?: string | undefined;
        currentStake?: string | undefined;
        minimumStake?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryStakeInfoResponse>, never>>(object: I): QueryStakeInfoResponse;
};
export declare const QueryAccountAssetsRequest: {
    encode(message: QueryAccountAssetsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAssetsRequest;
    fromJSON(object: any): QueryAccountAssetsRequest;
    toJSON(message: QueryAccountAssetsRequest): unknown;
    fromPartial<I extends {
        address?: string | undefined;
    } & {
        address?: string | undefined;
    } & Record<Exclude<keyof I, "address">, never>>(object: I): QueryAccountAssetsRequest;
};
export declare const QueryAccountAssetsResponse: {
    encode(message: QueryAccountAssetsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountAssetsResponse;
    fromJSON(object: any): QueryAccountAssetsResponse;
    toJSON(message: QueryAccountAssetsResponse): unknown;
    fromPartial<I extends {
        balance?: string | undefined;
        protocolStaking?: string | undefined;
        protocolDelegation?: string | undefined;
        protocolRewards?: string | undefined;
        protocolFunding?: string | undefined;
    } & {
        balance?: string | undefined;
        protocolStaking?: string | undefined;
        protocolDelegation?: string | undefined;
        protocolRewards?: string | undefined;
        protocolFunding?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountAssetsResponse>, never>>(object: I): QueryAccountAssetsResponse;
};
export declare const QueryAccountFundedListRequest: {
    encode(message: QueryAccountFundedListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountFundedListRequest;
    fromJSON(object: any): QueryAccountFundedListRequest;
    toJSON(message: QueryAccountFundedListRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountFundedListRequest>, never>>(object: I): QueryAccountFundedListRequest;
};
export declare const QueryAccountFundedListResponse: {
    encode(message: QueryAccountFundedListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountFundedListResponse;
    fromJSON(object: any): QueryAccountFundedListResponse;
    toJSON(message: QueryAccountFundedListResponse): unknown;
    fromPartial<I extends {
        funded?: {
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        funded?: ({
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[] & ({
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        } & {
            account?: string | undefined;
            amount?: string | undefined;
            pool?: ({
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
                funders?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowestFunder?: string | undefined;
                totalFunds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                    votersValid?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                    votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                    votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["funded"][number]["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                maxBundleSize?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & Record<Exclude<keyof I["funded"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["funded"][number]["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            } & Record<Exclude<keyof I["funded"][number]["pool"], keyof Pool>, never>) | undefined;
        } & Record<Exclude<keyof I["funded"][number], keyof Funded>, never>)[] & Record<Exclude<keyof I["funded"], keyof {
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountFundedListResponse>, never>>(object: I): QueryAccountFundedListResponse;
};
export declare const Funded: {
    encode(message: Funded, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Funded;
    fromJSON(object: any): Funded;
    toJSON(message: Funded): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        amount?: string | undefined;
        pool?: {
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
        } | undefined;
    } & {
        account?: string | undefined;
        amount?: string | undefined;
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Funded>, never>>(object: I): Funded;
};
export declare const QueryAccountStakedListRequest: {
    encode(message: QueryAccountStakedListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStakedListRequest;
    fromJSON(object: any): QueryAccountStakedListRequest;
    toJSON(message: QueryAccountStakedListRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountStakedListRequest>, never>>(object: I): QueryAccountStakedListRequest;
};
export declare const QueryAccountStakedListResponse: {
    encode(message: QueryAccountStakedListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStakedListResponse;
    fromJSON(object: any): QueryAccountStakedListResponse;
    toJSON(message: QueryAccountStakedListResponse): unknown;
    fromPartial<I extends {
        staked?: {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        staked?: ({
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[] & ({
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        } & {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            pool?: ({
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
                funders?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowestFunder?: string | undefined;
                totalFunds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                    votersValid?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                    votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                    votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["staked"][number]["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                maxBundleSize?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & Record<Exclude<keyof I["staked"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["staked"][number]["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            } & Record<Exclude<keyof I["staked"][number]["pool"], keyof Pool>, never>) | undefined;
        } & Record<Exclude<keyof I["staked"][number], keyof Staked>, never>)[] & Record<Exclude<keyof I["staked"], keyof {
            staker?: string | undefined;
            poolId?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            pool?: {
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
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountStakedListResponse>, never>>(object: I): QueryAccountStakedListResponse;
};
export declare const Staked: {
    encode(message: Staked, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Staked;
    fromJSON(object: any): Staked;
    toJSON(message: Staked): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        poolId?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        pool?: {
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
        } | undefined;
    } & {
        staker?: string | undefined;
        poolId?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof Staked>, never>>(object: I): Staked;
};
export declare const QueryAccountDelegationListRequest: {
    encode(message: QueryAccountDelegationListRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationListRequest;
    fromJSON(object: any): QueryAccountDelegationListRequest;
    toJSON(message: QueryAccountDelegationListRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountDelegationListRequest>, never>>(object: I): QueryAccountDelegationListRequest;
};
export declare const QueryAccountDelegationListResponse: {
    encode(message: QueryAccountDelegationListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationListResponse;
    fromJSON(object: any): QueryAccountDelegationListResponse;
    toJSON(message: QueryAccountDelegationListResponse): unknown;
    fromPartial<I extends {
        delegations?: {
            account?: string | undefined;
            pool?: {
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
            } | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegationPoolData?: {
                id?: string | undefined;
                staker?: string | undefined;
                currentRewards?: string | undefined;
                totalDelegation?: string | undefined;
                latestIndexK?: string | undefined;
                delegatorCount?: string | undefined;
                latestIndexWasUndelegation?: boolean | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegations?: ({
            account?: string | undefined;
            pool?: {
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
            } | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegationPoolData?: {
                id?: string | undefined;
                staker?: string | undefined;
                currentRewards?: string | undefined;
                totalDelegation?: string | undefined;
                latestIndexK?: string | undefined;
                delegatorCount?: string | undefined;
                latestIndexWasUndelegation?: boolean | undefined;
            } | undefined;
        }[] & ({
            account?: string | undefined;
            pool?: {
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
            } | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegationPoolData?: {
                id?: string | undefined;
                staker?: string | undefined;
                currentRewards?: string | undefined;
                totalDelegation?: string | undefined;
                latestIndexK?: string | undefined;
                delegatorCount?: string | undefined;
                latestIndexWasUndelegation?: boolean | undefined;
            } | undefined;
        } & {
            account?: string | undefined;
            pool?: ({
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
                funders?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowestFunder?: string | undefined;
                totalFunds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                    votersValid?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                    votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                    votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                maxBundleSize?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            } & Record<Exclude<keyof I["delegations"][number]["pool"], keyof Pool>, never>) | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegationPoolData?: ({
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
            } & Record<Exclude<keyof I["delegations"][number]["delegationPoolData"], keyof DelegationPoolData>, never>) | undefined;
        } & Record<Exclude<keyof I["delegations"][number], keyof DelegatorResponse>, never>)[] & Record<Exclude<keyof I["delegations"], keyof {
            account?: string | undefined;
            pool?: {
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
            } | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
            delegationPoolData?: {
                id?: string | undefined;
                staker?: string | undefined;
                currentRewards?: string | undefined;
                totalDelegation?: string | undefined;
                latestIndexK?: string | undefined;
                delegatorCount?: string | undefined;
                latestIndexWasUndelegation?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountDelegationListResponse>, never>>(object: I): QueryAccountDelegationListResponse;
};
export declare const QueryDelegatorRequest: {
    encode(message: QueryDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRequest;
    fromJSON(object: any): QueryDelegatorRequest;
    toJSON(message: QueryDelegatorRequest): unknown;
    fromPartial<I extends {
        poolId?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        poolId?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorRequest>, never>>(object: I): QueryDelegatorRequest;
};
export declare const QueryDelegatorResponse: {
    encode(message: QueryDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorResponse;
    fromJSON(object: any): QueryDelegatorResponse;
    toJSON(message: QueryDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: {
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        } | undefined;
    } & {
        delegator?: ({
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        } & Record<Exclude<keyof I["delegator"], keyof StakerDelegatorResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, "delegator">, never>>(object: I): QueryDelegatorResponse;
};
export declare const DelegatorResponse: {
    encode(message: DelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorResponse;
    fromJSON(object: any): DelegatorResponse;
    toJSON(message: DelegatorResponse): unknown;
    fromPartial<I extends {
        account?: string | undefined;
        pool?: {
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
        } | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        staker?: string | undefined;
        delegationPoolData?: {
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        } | undefined;
    } & {
        account?: string | undefined;
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        staker?: string | undefined;
        delegationPoolData?: ({
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
        } & Record<Exclude<keyof I["delegationPoolData"], keyof DelegationPoolData>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DelegatorResponse>, never>>(object: I): DelegatorResponse;
};
export declare const QueryDelegatorsByPoolAndStakerRequest: {
    encode(message: QueryDelegatorsByPoolAndStakerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByPoolAndStakerRequest;
    fromJSON(object: any): QueryDelegatorsByPoolAndStakerRequest;
    toJSON(message: QueryDelegatorsByPoolAndStakerRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        poolId?: string | undefined;
        staker?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        poolId?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorsByPoolAndStakerRequest>, never>>(object: I): QueryDelegatorsByPoolAndStakerRequest;
};
export declare const QueryDelegatorsByPoolAndStakerResponse: {
    encode(message: QueryDelegatorsByPoolAndStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorsByPoolAndStakerResponse;
    fromJSON(object: any): QueryDelegatorsByPoolAndStakerResponse;
    toJSON(message: QueryDelegatorsByPoolAndStakerResponse): unknown;
    fromPartial<I extends {
        delegators?: {
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        }[] | undefined;
        pool?: {
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
        } | undefined;
        delegationPoolData?: {
            id?: string | undefined;
            staker?: string | undefined;
            currentRewards?: string | undefined;
            totalDelegation?: string | undefined;
            latestIndexK?: string | undefined;
            delegatorCount?: string | undefined;
            latestIndexWasUndelegation?: boolean | undefined;
        } | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegators?: ({
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        }[] & ({
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        } & Record<Exclude<keyof I["delegators"][number], keyof StakerDelegatorResponse>, never>)[] & Record<Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            staker?: string | undefined;
        }[]>, never>) | undefined;
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        delegationPoolData?: ({
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
        } & Record<Exclude<keyof I["delegationPoolData"], keyof DelegationPoolData>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorsByPoolAndStakerResponse>, never>>(object: I): QueryDelegatorsByPoolAndStakerResponse;
};
export declare const StakerDelegatorResponse: {
    encode(message: StakerDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakerDelegatorResponse;
    fromJSON(object: any): StakerDelegatorResponse;
    toJSON(message: StakerDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        staker?: string | undefined;
    } & {
        delegator?: string | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof StakerDelegatorResponse>, never>>(object: I): StakerDelegatorResponse;
};
export declare const QueryStakersByPoolAndDelegatorRequest: {
    encode(message: QueryStakersByPoolAndDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolAndDelegatorRequest;
    fromJSON(object: any): QueryStakersByPoolAndDelegatorRequest;
    toJSON(message: QueryStakersByPoolAndDelegatorRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        poolId?: string | undefined;
        delegator?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        poolId?: string | undefined;
        delegator?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryStakersByPoolAndDelegatorRequest>, never>>(object: I): QueryStakersByPoolAndDelegatorRequest;
};
export declare const QueryStakersByPoolAndDelegatorResponse: {
    encode(message: QueryStakersByPoolAndDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersByPoolAndDelegatorResponse;
    fromJSON(object: any): QueryStakersByPoolAndDelegatorResponse;
    toJSON(message: QueryStakersByPoolAndDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        pool?: {
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
        } | undefined;
        stakers?: {
            staker?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            totalDelegationAmount?: string | undefined;
            delegatorCount?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegator?: string | undefined;
        pool?: ({
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
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowestFunder?: string | undefined;
            totalFunds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
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
                votersValid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
            } & Record<Exclude<keyof I["pool"]["bundleProposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            maxBundleSize?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                lastUpgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgradePlan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        stakers?: ({
            staker?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            totalDelegationAmount?: string | undefined;
            delegatorCount?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            totalDelegationAmount?: string | undefined;
            delegatorCount?: string | undefined;
        } & {
            staker?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            totalDelegationAmount?: string | undefined;
            delegatorCount?: string | undefined;
        } & Record<Exclude<keyof I["stakers"][number], keyof DelegationForStakerResponse>, never>)[] & Record<Exclude<keyof I["stakers"], keyof {
            staker?: string | undefined;
            currentReward?: string | undefined;
            delegationAmount?: string | undefined;
            totalDelegationAmount?: string | undefined;
            delegatorCount?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryStakersByPoolAndDelegatorResponse>, never>>(object: I): QueryStakersByPoolAndDelegatorResponse;
};
export declare const DelegationForStakerResponse: {
    encode(message: DelegationForStakerResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationForStakerResponse;
    fromJSON(object: any): DelegationForStakerResponse;
    toJSON(message: DelegationForStakerResponse): unknown;
    fromPartial<I extends {
        staker?: string | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        totalDelegationAmount?: string | undefined;
        delegatorCount?: string | undefined;
    } & {
        staker?: string | undefined;
        currentReward?: string | undefined;
        delegationAmount?: string | undefined;
        totalDelegationAmount?: string | undefined;
        delegatorCount?: string | undefined;
    } & Record<Exclude<keyof I, keyof DelegationForStakerResponse>, never>>(object: I): DelegationForStakerResponse;
};
/** Query defines the gRPC registry querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /** Pool queries a pool by ID. */
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    /** Pools queries for all pools. */
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    /** FundersList returns all funder addresses with their corresponding funding amount for a given pool */
    FundersList(request: QueryFundersListRequest): Promise<QueryFundersListResponse>;
    /** Funder returns all funder info */
    Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
    /** StakersList returns all staker addresses with their corresponding staking amount for a given pool */
    StakersList(request: QueryStakersListRequest): Promise<QueryStakersListResponse>;
    /** Staker returns all staker info */
    Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
    /** Proposal ... */
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    /** Proposals ... */
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    /** ProposalByHeight ... */
    ProposalByHeight(request: QueryProposalByHeightRequest): Promise<QueryProposalByHeightResponse>;
    /** CanPropose ... */
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    /** CanVote checks if voter on pool can still vote for the given bundle */
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
    /** StakeInfo returns necessary information to become a staker (used by the protocol nodes) */
    StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse>;
    /** AccountAssets returns an overview of the sum of all balances for a given user. e.g. balance, staking, funding, etc. */
    AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse>;
    /** AccountFundedList returns all pools the given user has funded into. */
    AccountFundedList(request: QueryAccountFundedListRequest): Promise<QueryAccountFundedListResponse>;
    /** AccountStakedList ... */
    AccountStakedList(request: QueryAccountStakedListRequest): Promise<QueryAccountStakedListResponse>;
    /** AccountDelegationList ... */
    AccountDelegationList(request: QueryAccountDelegationListRequest): Promise<QueryAccountDelegationListResponse>;
    /** Delegator returns all delegation info */
    Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
    /** DelegatorsByPoolAndStaker ... */
    DelegatorsByPoolAndStaker(request: QueryDelegatorsByPoolAndStakerRequest): Promise<QueryDelegatorsByPoolAndStakerResponse>;
    /** StakersByPoolAndDelegator ... */
    StakersByPoolAndDelegator(request: QueryStakersByPoolAndDelegatorRequest): Promise<QueryStakersByPoolAndDelegatorResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
    Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse>;
    FundersList(request: QueryFundersListRequest): Promise<QueryFundersListResponse>;
    Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
    StakersList(request: QueryStakersListRequest): Promise<QueryStakersListResponse>;
    Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
    Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    ProposalByHeight(request: QueryProposalByHeightRequest): Promise<QueryProposalByHeightResponse>;
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
    StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse>;
    AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse>;
    AccountFundedList(request: QueryAccountFundedListRequest): Promise<QueryAccountFundedListResponse>;
    AccountStakedList(request: QueryAccountStakedListRequest): Promise<QueryAccountStakedListResponse>;
    AccountDelegationList(request: QueryAccountDelegationListRequest): Promise<QueryAccountDelegationListResponse>;
    Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
    DelegatorsByPoolAndStaker(request: QueryDelegatorsByPoolAndStakerRequest): Promise<QueryDelegatorsByPoolAndStakerResponse>;
    StakersByPoolAndDelegator(request: QueryStakersByPoolAndDelegatorRequest): Promise<QueryStakersByPoolAndDelegatorResponse>;
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
