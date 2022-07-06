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
    pool_id: string;
}
/** QueryFundersListResponse is the response type for the Query/FundersList RPC method. */
export interface QueryFundersListResponse {
    /** funders ... */
    funders: Funder[];
}
/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
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
    pool_id: string;
}
/** QueryStakersListResponse is the response type for the Query/StakersList RPC method. */
export interface QueryStakersListResponse {
    /** stakers ... */
    stakers: StakerResponse[];
}
/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
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
    pool_id: string;
    /** account ... */
    account: string;
    /** amount ... */
    amount: string;
    /** total_delegation ... */
    total_delegation: string;
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
    /** unbonding_amount ... */
    unbonding_amount: string;
    /** upload_probability */
    upload_probability: string;
}
/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
    /** storage_id ... */
    storage_id: string;
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
    pool_id: string;
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
    pool_id: string;
    /** height ... */
    height: string;
}
/** QueryProposalResponse is the response type for the Query/ProposalByHeight RPC method. */
export interface QueryProposalByHeightResponse {
    /** proposal ... */
    proposal?: Proposal;
}
/** QueryProposalByFinalizedAtRequest ... */
export interface QueryProposalSinceFinalizedAtRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    pool_id: string;
    /** height ... */
    finalized_at: string;
}
/** QueryProposalByFinalizedAtResponse ... */
export interface QueryProposalSinceFinalizedAtResponse {
    /** proposal ... */
    proposals: Proposal[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
    /** proposer ... */
    proposer: string;
    /** from_height ... */
    from_height: string;
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
    pool_id: string;
    /** voter ... */
    voter: string;
    /** storage_id ... */
    storage_id: string;
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
    pool_id: string;
    /** staker .. */
    staker: string;
}
/** QueryStakeInfoResponse is the response type for the Query/StakeInfo RPC method. */
export interface QueryStakeInfoResponse {
    /** balance ... */
    balance: string;
    /** current_stake ... */
    current_stake: string;
    /** minimum_stake ... */
    minimum_stake: string;
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
    protocol_staking: string;
    /** protocol_staking_unbonding */
    protocol_staking_unbonding: string;
    /** protocol_delegation ... */
    protocol_delegation: string;
    /** protocol_delegation_unbonding */
    protocol_delegation_unbonding: string;
    /** protocol_rewards ... */
    protocol_rewards: string;
    /** protocol_funding ... */
    protocol_funding: string;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountStakingUnbondingsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountStakingUnbondingsResponse {
    /** balance ... */
    unbondings: StakingUnbonding[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface StakingUnbonding {
    /** amount */
    amount: string;
    /** creation_time */
    creation_time: string;
    /** pool ... */
    pool?: Pool;
}
/** QueryAccountFundedListRequest ... */
export interface QueryAccountDelegationUnbondingsRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** address ... */
    address: string;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface QueryAccountDelegationUnbondingsResponse {
    /** balance ... */
    unbondings: DelegationUnbonding[];
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryAccountAssetsResponse is the response type for the Query/AccountAssets RPC method. */
export interface DelegationUnbonding {
    /** amount */
    amount: string;
    /** creation_time */
    creation_time: string;
    /** creation_time */
    staker?: StakerResponse;
    /** pool ... */
    pool?: Pool;
}
/** QueryAccountFundedListRequest is the request type for the account queries with pagination */
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
/** QueryAccountStakedListRequest ... */
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
    pool_id: string;
    /** account ... */
    account: string;
    /** amount ... */
    amount: string;
    /** pool ... */
    pool?: Pool;
    /** unbonding_amount ... */
    unbonding_amount: string;
    /** upload_probability */
    upload_probability: string;
}
/** QueryAccountDelegationListRequest ... */
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
/** DelegatorResponse ... */
export interface DelegatorResponse {
    /** account ... */
    account: string;
    /** pool ... */
    pool?: Pool;
    /** current_reward ... */
    current_reward: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** staker ... */
    staker: string;
    /** delegation_pool_data ... */
    delegation_pool_data?: DelegationPoolData;
}
/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
    /** pool_id defines the unique ID of the pool. */
    pool_id: string;
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
/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
    /** delegator ... */
    delegator: string;
    /** current_reward ... */
    current_reward: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** staker ... */
    staker: string;
}
/** QueryDelegatorsByPoolAndStakerRequest is the request type for the Query/DelegatorsByPoolAndStaker RPC method. */
export interface QueryDelegatorsByPoolAndStakerRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    pool_id: string;
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
    delegation_pool_data?: DelegationPoolData;
    /** pagination defines the pagination in the response. */
    pagination?: PageResponse;
}
/** QueryStakersByPoolAndDelegatorRequest  is the request type for the Query/StakersByPoolAndDelegator RPC method. */
export interface QueryStakersByPoolAndDelegatorRequest {
    /** pagination defines an optional pagination for the request. */
    pagination?: PageRequest;
    /** pool_id ... */
    pool_id: string;
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
    current_reward: string;
    /** delegation_amount ... */
    delegation_amount: string;
    /** total_delegation_amount ... */
    total_delegation_amount: string;
    /** delegator_count ... */
    delegator_count: string;
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
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
            unbonding_staking_time?: string | undefined;
            unbonding_delegation_time?: string | undefined;
        } | undefined;
    } & {
        params?: ({
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
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
            count_total?: boolean | undefined;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[] & ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pools"][number]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pools"][number]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pools"][number]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pools"][number]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pools"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["pools"], keyof {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
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
        pool_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
    } & Record<Exclude<keyof I, "pool_id">, never>>(object: I): QueryFundersListRequest;
};
export declare const QueryFundersListResponse: {
    encode(message: QueryFundersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryFundersListResponse;
    fromJSON(object: any): QueryFundersListResponse;
    toJSON(message: QueryFundersListResponse): unknown;
    fromPartial<I extends {
        funders?: {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
    } & {
        funders?: ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        } & {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funders"][number], keyof Funder>, never>)[] & Record<Exclude<keyof I["funders"], keyof {
            account?: string | undefined;
            pool_id?: string | undefined;
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
        pool_id?: string | undefined;
        funder?: string | undefined;
    } & {
        pool_id?: string | undefined;
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
            pool_id?: string | undefined;
            amount?: string | undefined;
        } | undefined;
    } & {
        funder?: ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        } & {
            account?: string | undefined;
            pool_id?: string | undefined;
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
        pool_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
    } & Record<Exclude<keyof I, "pool_id">, never>>(object: I): QueryStakersListRequest;
};
export declare const QueryStakersListResponse: {
    encode(message: QueryStakersListResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakersListResponse;
    fromJSON(object: any): QueryStakersListResponse;
    toJSON(message: QueryStakersListResponse): unknown;
    fromPartial<I extends {
        stakers?: {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[] | undefined;
    } & {
        stakers?: ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & Record<Exclude<keyof I["stakers"][number], keyof StakerResponse>, never>)[] & Record<Exclude<keyof I["stakers"], keyof {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[]>, never>) | undefined;
    } & Record<Exclude<keyof I, "stakers">, never>>(object: I): QueryStakersListResponse;
};
export declare const QueryStakerRequest: {
    encode(message: QueryStakerRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerRequest;
    fromJSON(object: any): QueryStakerRequest;
    toJSON(message: QueryStakerRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & {
        pool_id?: string | undefined;
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
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } | undefined;
    } & {
        staker?: ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
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
        pool_id?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        total_delegation?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
        unbonding_amount?: string | undefined;
        upload_probability?: string | undefined;
    } & {
        staker?: string | undefined;
        pool_id?: string | undefined;
        account?: string | undefined;
        amount?: string | undefined;
        total_delegation?: string | undefined;
        commission?: string | undefined;
        moniker?: string | undefined;
        website?: string | undefined;
        logo?: string | undefined;
        points?: string | undefined;
        unbonding_amount?: string | undefined;
        upload_probability?: string | undefined;
    } & Record<Exclude<keyof I, keyof StakerResponse>, never>>(object: I): StakerResponse;
};
export declare const QueryProposalRequest: {
    encode(message: QueryProposalRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalRequest;
    fromJSON(object: any): QueryProposalRequest;
    toJSON(message: QueryProposalRequest): unknown;
    fromPartial<I extends {
        storage_id?: string | undefined;
    } & {
        storage_id?: string | undefined;
    } & Record<Exclude<keyof I, "storage_id">, never>>(object: I): QueryProposalRequest;
};
export declare const QueryProposalResponse: {
    encode(message: QueryProposalResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalResponse;
    fromJSON(object: any): QueryProposalResponse;
    toJSON(message: QueryProposalResponse): unknown;
    fromPartial<I extends {
        proposal?: {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        pool_id?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        pool_id?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalsRequest>, never>>(object: I): QueryProposalsRequest;
};
export declare const QueryProposalsResponse: {
    encode(message: QueryProposalsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalsResponse;
    fromJSON(object: any): QueryProposalsResponse;
    toJSON(message: QueryProposalsResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        proposals?: ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[] & ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
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
        pool_id?: string | undefined;
        height?: string | undefined;
    } & {
        pool_id?: string | undefined;
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
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } | undefined;
    } & {
        proposal?: ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & Record<Exclude<keyof I["proposal"], keyof Proposal>, never>) | undefined;
    } & Record<Exclude<keyof I, "proposal">, never>>(object: I): QueryProposalByHeightResponse;
};
export declare const QueryProposalSinceFinalizedAtRequest: {
    encode(message: QueryProposalSinceFinalizedAtRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalSinceFinalizedAtRequest;
    fromJSON(object: any): QueryProposalSinceFinalizedAtRequest;
    toJSON(message: QueryProposalSinceFinalizedAtRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        pool_id?: string | undefined;
        finalized_at?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        pool_id?: string | undefined;
        finalized_at?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalSinceFinalizedAtRequest>, never>>(object: I): QueryProposalSinceFinalizedAtRequest;
};
export declare const QueryProposalSinceFinalizedAtResponse: {
    encode(message: QueryProposalSinceFinalizedAtResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryProposalSinceFinalizedAtResponse;
    fromJSON(object: any): QueryProposalSinceFinalizedAtResponse;
    toJSON(message: QueryProposalSinceFinalizedAtResponse): unknown;
    fromPartial<I extends {
        proposals?: {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        proposals?: ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[] & ({
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            storage_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
            bundle_hash?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryProposalSinceFinalizedAtResponse>, never>>(object: I): QueryProposalSinceFinalizedAtResponse;
};
export declare const QueryCanProposeRequest: {
    encode(message: QueryCanProposeRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanProposeRequest;
    fromJSON(object: any): QueryCanProposeRequest;
    toJSON(message: QueryCanProposeRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        proposer?: string | undefined;
        from_height?: string | undefined;
    } & {
        pool_id?: string | undefined;
        proposer?: string | undefined;
        from_height?: string | undefined;
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
        pool_id?: string | undefined;
        voter?: string | undefined;
        storage_id?: string | undefined;
    } & {
        pool_id?: string | undefined;
        voter?: string | undefined;
        storage_id?: string | undefined;
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
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & {
        pool_id?: string | undefined;
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
        current_stake?: string | undefined;
        minimum_stake?: string | undefined;
    } & {
        balance?: string | undefined;
        current_stake?: string | undefined;
        minimum_stake?: string | undefined;
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
        protocol_staking?: string | undefined;
        protocol_staking_unbonding?: string | undefined;
        protocol_delegation?: string | undefined;
        protocol_delegation_unbonding?: string | undefined;
        protocol_rewards?: string | undefined;
        protocol_funding?: string | undefined;
    } & {
        balance?: string | undefined;
        protocol_staking?: string | undefined;
        protocol_staking_unbonding?: string | undefined;
        protocol_delegation?: string | undefined;
        protocol_delegation_unbonding?: string | undefined;
        protocol_rewards?: string | undefined;
        protocol_funding?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountAssetsResponse>, never>>(object: I): QueryAccountAssetsResponse;
};
export declare const QueryAccountStakingUnbondingsRequest: {
    encode(message: QueryAccountStakingUnbondingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStakingUnbondingsRequest;
    fromJSON(object: any): QueryAccountStakingUnbondingsRequest;
    toJSON(message: QueryAccountStakingUnbondingsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountStakingUnbondingsRequest>, never>>(object: I): QueryAccountStakingUnbondingsRequest;
};
export declare const QueryAccountStakingUnbondingsResponse: {
    encode(message: QueryAccountStakingUnbondingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountStakingUnbondingsResponse;
    fromJSON(object: any): QueryAccountStakingUnbondingsResponse;
    toJSON(message: QueryAccountStakingUnbondingsResponse): unknown;
    fromPartial<I extends {
        unbondings?: {
            amount?: string | undefined;
            creation_time?: string | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        unbondings?: ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[] & ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        } & {
            amount?: string | undefined;
            creation_time?: string | undefined;
            pool?: ({
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
                total_bundles?: string | undefined;
                total_bundle_rewards?: string | undefined;
                start_height?: string | undefined;
                upload_interval?: string | undefined;
                operating_cost?: string | undefined;
                paused?: boolean | undefined;
                funders?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowest_funder?: string | undefined;
                total_funds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                lowest_staker?: string | undefined;
                total_stake?: string | undefined;
                total_delegation?: string | undefined;
                bundle_proposal?: ({
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & {
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                    voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                    voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                max_bundle_size?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & Record<Exclude<keyof I["unbondings"][number]["pool"], keyof Pool>, never>) | undefined;
        } & Record<Exclude<keyof I["unbondings"][number], keyof StakingUnbonding>, never>)[] & Record<Exclude<keyof I["unbondings"], keyof {
            amount?: string | undefined;
            creation_time?: string | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountStakingUnbondingsResponse>, never>>(object: I): QueryAccountStakingUnbondingsResponse;
};
export declare const StakingUnbonding: {
    encode(message: StakingUnbonding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakingUnbonding;
    fromJSON(object: any): StakingUnbonding;
    toJSON(message: StakingUnbonding): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
        creation_time?: string | undefined;
        pool?: {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
    } & {
        amount?: string | undefined;
        creation_time?: string | undefined;
        pool?: ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof StakingUnbonding>, never>>(object: I): StakingUnbonding;
};
export declare const QueryAccountDelegationUnbondingsRequest: {
    encode(message: QueryAccountDelegationUnbondingsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationUnbondingsRequest;
    fromJSON(object: any): QueryAccountDelegationUnbondingsRequest;
    toJSON(message: QueryAccountDelegationUnbondingsRequest): unknown;
    fromPartial<I extends {
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        address?: string | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountDelegationUnbondingsRequest>, never>>(object: I): QueryAccountDelegationUnbondingsRequest;
};
export declare const QueryAccountDelegationUnbondingsResponse: {
    encode(message: QueryAccountDelegationUnbondingsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountDelegationUnbondingsResponse;
    fromJSON(object: any): QueryAccountDelegationUnbondingsResponse;
    toJSON(message: QueryAccountDelegationUnbondingsResponse): unknown;
    fromPartial<I extends {
        unbondings?: {
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?: {
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        unbondings?: ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?: {
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[] & ({
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?: {
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        } & {
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?: ({
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } & {
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } & Record<Exclude<keyof I["unbondings"][number]["staker"], keyof StakerResponse>, never>) | undefined;
            pool?: ({
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
                total_bundles?: string | undefined;
                total_bundle_rewards?: string | undefined;
                start_height?: string | undefined;
                upload_interval?: string | undefined;
                operating_cost?: string | undefined;
                paused?: boolean | undefined;
                funders?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowest_funder?: string | undefined;
                total_funds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                lowest_staker?: string | undefined;
                total_stake?: string | undefined;
                total_delegation?: string | undefined;
                bundle_proposal?: ({
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & {
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                    voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                    voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                max_bundle_size?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["unbondings"][number]["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & Record<Exclude<keyof I["unbondings"][number]["pool"], keyof Pool>, never>) | undefined;
        } & Record<Exclude<keyof I["unbondings"][number], keyof DelegationUnbonding>, never>)[] & Record<Exclude<keyof I["unbondings"], keyof {
            amount?: string | undefined;
            creation_time?: string | undefined;
            staker?: {
                staker?: string | undefined;
                pool_id?: string | undefined;
                account?: string | undefined;
                amount?: string | undefined;
                total_delegation?: string | undefined;
                commission?: string | undefined;
                moniker?: string | undefined;
                website?: string | undefined;
                logo?: string | undefined;
                points?: string | undefined;
                unbonding_amount?: string | undefined;
                upload_probability?: string | undefined;
            } | undefined;
            pool?: {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountDelegationUnbondingsResponse>, never>>(object: I): QueryAccountDelegationUnbondingsResponse;
};
export declare const DelegationUnbonding: {
    encode(message: DelegationUnbonding, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DelegationUnbonding;
    fromJSON(object: any): DelegationUnbonding;
    toJSON(message: DelegationUnbonding): unknown;
    fromPartial<I extends {
        amount?: string | undefined;
        creation_time?: string | undefined;
        staker?: {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } | undefined;
        pool?: {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
    } & {
        amount?: string | undefined;
        creation_time?: string | undefined;
        staker?: ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & {
            staker?: string | undefined;
            pool_id?: string | undefined;
            account?: string | undefined;
            amount?: string | undefined;
            total_delegation?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & Record<Exclude<keyof I["staker"], keyof StakerResponse>, never>) | undefined;
        pool?: ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DelegationUnbonding>, never>>(object: I): DelegationUnbonding;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
                total_bundles?: string | undefined;
                total_bundle_rewards?: string | undefined;
                start_height?: string | undefined;
                upload_interval?: string | undefined;
                operating_cost?: string | undefined;
                paused?: boolean | undefined;
                funders?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowest_funder?: string | undefined;
                total_funds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                lowest_staker?: string | undefined;
                total_stake?: string | undefined;
                total_delegation?: string | undefined;
                bundle_proposal?: ({
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & {
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                    voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                    voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["funded"][number]["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & Record<Exclude<keyof I["funded"][number]["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                max_bundle_size?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & Record<Exclude<keyof I["funded"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["funded"][number]["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
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
            pool_id?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        staked?: ({
            staker?: string | undefined;
            pool_id?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            pool_id?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & {
            staker?: string | undefined;
            pool_id?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
                total_bundles?: string | undefined;
                total_bundle_rewards?: string | undefined;
                start_height?: string | undefined;
                upload_interval?: string | undefined;
                operating_cost?: string | undefined;
                paused?: boolean | undefined;
                funders?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowest_funder?: string | undefined;
                total_funds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                lowest_staker?: string | undefined;
                total_stake?: string | undefined;
                total_delegation?: string | undefined;
                bundle_proposal?: ({
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & {
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                    voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                    voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["staked"][number]["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & Record<Exclude<keyof I["staked"][number]["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                max_bundle_size?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & Record<Exclude<keyof I["staked"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["staked"][number]["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & Record<Exclude<keyof I["staked"][number]["pool"], keyof Pool>, never>) | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        } & Record<Exclude<keyof I["staked"][number], keyof Staked>, never>)[] & Record<Exclude<keyof I["staked"], keyof {
            staker?: string | undefined;
            pool_id?: string | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            unbonding_amount?: string | undefined;
            upload_probability?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
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
        pool_id?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
        unbonding_amount?: string | undefined;
        upload_probability?: string | undefined;
    } & {
        staker?: string | undefined;
        pool_id?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        unbonding_amount?: string | undefined;
        upload_probability?: string | undefined;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        address?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegation_pool_data?: {
                id?: string | undefined;
                staker?: string | undefined;
                current_rewards?: string | undefined;
                total_delegation?: string | undefined;
                latest_index_k?: string | undefined;
                delegator_count?: string | undefined;
                latest_index_was_undelegation?: boolean | undefined;
            } | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegation_pool_data?: {
                id?: string | undefined;
                staker?: string | undefined;
                current_rewards?: string | undefined;
                total_delegation?: string | undefined;
                latest_index_k?: string | undefined;
                delegator_count?: string | undefined;
                latest_index_was_undelegation?: boolean | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegation_pool_data?: {
                id?: string | undefined;
                staker?: string | undefined;
                current_rewards?: string | undefined;
                total_delegation?: string | undefined;
                latest_index_k?: string | undefined;
                delegator_count?: string | undefined;
                latest_index_was_undelegation?: boolean | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & {
                id?: string | undefined;
                creator?: string | undefined;
                name?: string | undefined;
                runtime?: string | undefined;
                logo?: string | undefined;
                versions?: string | undefined;
                config?: string | undefined;
                current_height?: string | undefined;
                total_bytes?: string | undefined;
                total_bundles?: string | undefined;
                total_bundle_rewards?: string | undefined;
                start_height?: string | undefined;
                upload_interval?: string | undefined;
                operating_cost?: string | undefined;
                paused?: boolean | undefined;
                funders?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                lowest_funder?: string | undefined;
                total_funds?: string | undefined;
                stakers?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                lowest_staker?: string | undefined;
                total_stake?: string | undefined;
                total_delegation?: string | undefined;
                bundle_proposal?: ({
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & {
                    uploader?: string | undefined;
                    next_uploader?: string | undefined;
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                    voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                    voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["delegations"][number]["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
                max_bundle_size?: string | undefined;
                protocol?: ({
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    last_upgrade?: string | undefined;
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
                } & Record<Exclude<keyof I["delegations"][number]["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } & Record<Exclude<keyof I["delegations"][number]["pool"], keyof Pool>, never>) | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegation_pool_data?: ({
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
            } & Record<Exclude<keyof I["delegations"][number]["delegation_pool_data"], keyof DelegationPoolData>, never>) | undefined;
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
                current_height?: string | undefined;
                total_bytes?: string | undefined;
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
                    storage_id?: string | undefined;
                    byte_size?: string | undefined;
                    from_height?: string | undefined;
                    to_height?: string | undefined;
                    created_at?: string | undefined;
                    voters_valid?: string[] | undefined;
                    voters_invalid?: string[] | undefined;
                    voters_abstain?: string[] | undefined;
                    to_key?: string | undefined;
                    to_value?: string | undefined;
                    bundle_hash?: string | undefined;
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
                start_key?: string | undefined;
                current_key?: string | undefined;
                current_value?: string | undefined;
            } | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegation_pool_data?: {
                id?: string | undefined;
                staker?: string | undefined;
                current_rewards?: string | undefined;
                total_delegation?: string | undefined;
                latest_index_k?: string | undefined;
                delegator_count?: string | undefined;
                latest_index_was_undelegation?: boolean | undefined;
            } | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryAccountDelegationListResponse>, never>>(object: I): QueryAccountDelegationListResponse;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegation_pool_data?: {
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
        delegation_pool_data?: ({
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
        } & Record<Exclude<keyof I["delegation_pool_data"], keyof DelegationPoolData>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof DelegatorResponse>, never>>(object: I): DelegatorResponse;
};
export declare const QueryDelegatorRequest: {
    encode(message: QueryDelegatorRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDelegatorRequest;
    fromJSON(object: any): QueryDelegatorRequest;
    toJSON(message: QueryDelegatorRequest): unknown;
    fromPartial<I extends {
        pool_id?: string | undefined;
        staker?: string | undefined;
        delegator?: string | undefined;
    } & {
        pool_id?: string | undefined;
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
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } | undefined;
    } & {
        delegator?: ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & Record<Exclude<keyof I["delegator"], keyof StakerDelegatorResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, "delegator">, never>>(object: I): QueryDelegatorResponse;
};
export declare const StakerDelegatorResponse: {
    encode(message: StakerDelegatorResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StakerDelegatorResponse;
    fromJSON(object: any): StakerDelegatorResponse;
    toJSON(message: StakerDelegatorResponse): unknown;
    fromPartial<I extends {
        delegator?: string | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
    } & {
        delegator?: string | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        staker?: string | undefined;
    } & Record<Exclude<keyof I, keyof StakerDelegatorResponse>, never>>(object: I): StakerDelegatorResponse;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        pool_id?: string | undefined;
        staker?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        pool_id?: string | undefined;
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
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
        delegation_pool_data?: {
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        } | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } | undefined;
    } & {
        delegators?: ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        }[] & ({
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
        } & Record<Exclude<keyof I["delegators"][number], keyof StakerDelegatorResponse>, never>)[] & Record<Exclude<keyof I["delegators"], keyof {
            delegator?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        delegation_pool_data?: ({
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
        } & Record<Exclude<keyof I["delegation_pool_data"], keyof DelegationPoolData>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageResponse>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof QueryDelegatorsByPoolAndStakerResponse>, never>>(object: I): QueryDelegatorsByPoolAndStakerResponse;
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
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
        pool_id?: string | undefined;
        delegator?: string | undefined;
    } & {
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | undefined;
            limit?: string | undefined;
            count_total?: boolean | undefined;
            reverse?: boolean | undefined;
        } & Record<Exclude<keyof I["pagination"], keyof PageRequest>, never>) | undefined;
        pool_id?: string | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } | undefined;
        stakers?: {
            staker?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            total_delegation_amount?: string | undefined;
            delegator_count?: string | undefined;
        }[] | undefined;
        pagination?: {
            next_key?: Uint8Array | undefined;
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
            current_height?: string | undefined;
            total_bytes?: string | undefined;
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
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
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
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool"]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool"]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                storage_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool"]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
                bundle_hash?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool"]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
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
            } & Record<Exclude<keyof I["pool"]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool"], keyof Pool>, never>) | undefined;
        stakers?: ({
            staker?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            total_delegation_amount?: string | undefined;
            delegator_count?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            total_delegation_amount?: string | undefined;
            delegator_count?: string | undefined;
        } & {
            staker?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            total_delegation_amount?: string | undefined;
            delegator_count?: string | undefined;
        } & Record<Exclude<keyof I["stakers"][number], keyof DelegationForStakerResponse>, never>)[] & Record<Exclude<keyof I["stakers"], keyof {
            staker?: string | undefined;
            current_reward?: string | undefined;
            delegation_amount?: string | undefined;
            total_delegation_amount?: string | undefined;
            delegator_count?: string | undefined;
        }[]>, never>) | undefined;
        pagination?: ({
            next_key?: Uint8Array | undefined;
            total?: string | undefined;
        } & {
            next_key?: Uint8Array | undefined;
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
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        total_delegation_amount?: string | undefined;
        delegator_count?: string | undefined;
    } & {
        staker?: string | undefined;
        current_reward?: string | undefined;
        delegation_amount?: string | undefined;
        total_delegation_amount?: string | undefined;
        delegator_count?: string | undefined;
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
    /**
     * Proposals ...
     *
     * @deprecated
     */
    Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
    /** ProposalByHeight ... */
    ProposalByHeight(request: QueryProposalByHeightRequest): Promise<QueryProposalByHeightResponse>;
    /** ProposalByHeight ... */
    ProposalSinceFinalizedAt(request: QueryProposalSinceFinalizedAtRequest): Promise<QueryProposalSinceFinalizedAtResponse>;
    /** CanPropose ... */
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    /** CanVote checks if voter on pool can still vote for the given bundle */
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
    /** StakeInfo returns necessary information to become a staker (used by the protocol nodes) */
    StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse>;
    /** AccountAssets returns an overview of the sum of all balances for a given user. e.g. balance, staking, funding, etc. */
    AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse>;
    /** AccountStakingUnbondings ... */
    AccountStakingUnbondings(request: QueryAccountStakingUnbondingsRequest): Promise<QueryAccountStakingUnbondingsResponse>;
    /** AccountDelegationUnbondings ... */
    AccountDelegationUnbondings(request: QueryAccountDelegationUnbondingsRequest): Promise<QueryAccountDelegationUnbondingsResponse>;
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
    ProposalSinceFinalizedAt(request: QueryProposalSinceFinalizedAtRequest): Promise<QueryProposalSinceFinalizedAtResponse>;
    CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
    CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
    StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse>;
    AccountAssets(request: QueryAccountAssetsRequest): Promise<QueryAccountAssetsResponse>;
    AccountStakingUnbondings(request: QueryAccountStakingUnbondingsRequest): Promise<QueryAccountStakingUnbondingsResponse>;
    AccountDelegationUnbondings(request: QueryAccountDelegationUnbondingsRequest): Promise<QueryAccountDelegationUnbondingsResponse>;
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
