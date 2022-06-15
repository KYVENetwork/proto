/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import {
  Pool,
  Funder,
  Proposal,
  DelegationPoolData,
} from "../../../kyve/registry/v1beta1/registry";
import {
  PageRequest,
  PageResponse,
} from "../../../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "kyve.registry.v1beta1";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

/** QueryPoolRequest is the request type for the Query/Pool RPC method. */
export interface QueryPoolRequest {
  /** id defines the unique ID of the pool. */
  id: number;
}

/** QueryPoolResponse is the response type for the Query/Pool RPC method. */
export interface QueryPoolResponse {
  /** pool ... */
  pool: Pool | undefined;
}

/** QueryPoolsRequest is the request type for the Query/Pools RPC method. */
export interface QueryPoolsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
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
  pagination: PageResponse | undefined;
}

/** QueryFundersListRequest is the request type for the Query/FundersList RPC method. */
export interface QueryFundersListRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
}

/** QueryFundersListResponse is the response type for the Query/FundersList RPC method. */
export interface QueryFundersListResponse {
  /** funders ... */
  funders: Funder[];
}

/** QueryFunderRequest is the request type for the Query/Funder RPC method. */
export interface QueryFunderRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
  /** funder */
  funder: string;
}

/** QueryFunderResponse is the response type for the Query/Funder RPC method. */
export interface QueryFunderResponse {
  /** funder ... */
  funder: Funder | undefined;
}

/** QueryStakersListRequest is the request type for the Query/StakersList RPC method. */
export interface QueryStakersListRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
}

/** QueryStakersListResponse is the response type for the Query/StakersList RPC method. */
export interface QueryStakersListResponse {
  /** stakers ... */
  stakers: StakerResponse[];
}

/** QueryStakerRequest is the request type for the Query/Staker RPC method. */
export interface QueryStakerRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
  /** staker ... */
  staker: string;
}

/** QueryStakerResponse is the response type for the Query/Staker RPC method. */
export interface QueryStakerResponse {
  /** staker ... */
  staker: StakerResponse | undefined;
}

/** StakerResponse ... */
export interface StakerResponse {
  /** staker ... */
  staker: string;
  /** pool_id ... */
  poolId: number;
  /** account ... */
  account: string;
  /** amount ... */
  amount: number;
  /** total_delegation ... */
  totalDelegation: number;
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

/** QueryProposalRequest is the request type for the Query/Proposal RPC method. */
export interface QueryProposalRequest {
  /** bundle_id ... */
  bundleId: string;
}

/** QueryProposalResponse is the response type for the Query/Proposal RPC method. */
export interface QueryProposalResponse {
  /** proposal ... */
  proposal: Proposal | undefined;
}

/** QueryProposalsRequest is the request type for the Query/Proposals RPC method. */
export interface QueryProposalsRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** pool_id ... */
  poolId: number;
}

/** QueryProposalsResponse is the response type for the Query/Proposals RPC method. */
export interface QueryProposalsResponse {
  /** proposals ... */
  proposals: Proposal[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryProposalByHeightRequest is the request type for the Query/ProposalByHeight RPC method. */
export interface QueryProposalByHeightRequest {
  /** pool_id ... */
  poolId: number;
  /** height ... */
  height: number;
}

/** QueryProposalResponse is the response type for the Query/ProposalByHeight RPC method. */
export interface QueryProposalByHeightResponse {
  /** proposal ... */
  proposal: Proposal | undefined;
}

/** QueryCanProposeRequest is the request type for the Query/CanPropose RPC method. */
export interface QueryCanProposeRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
  /** proposer ... */
  proposer: string;
  /** from_height ... */
  fromHeight: number;
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
  poolId: number;
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
  poolId: number;
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
  balance: number;
  /** protocol_staking ... */
  protocolStaking: number;
  /** protocol_delegation ... */
  protocolDelegation: number;
  /** protocol_rewards ... */
  protocolRewards: number;
  /** protocol_funding ... */
  protocolFunding: number;
}

/** QueryAccountFundedListRequest is the request type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** address ... */
  address: string;
}

/** QueryAccountFundedListResponse is the response type for the Query/AccountFundedList RPC method. */
export interface QueryAccountFundedListResponse {
  /** funded ... */
  funded: Funded[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** Funded ... */
export interface Funded {
  /** account ... */
  account: string;
  /** amount ... */
  amount: number;
  /** pool ... */
  pool: Pool | undefined;
}

/** QueryAccountStakedListRequest is the request type for the Query/AccountStakedList RPC method. */
export interface QueryAccountStakedListRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** address ... */
  address: string;
}

/** QueryAccountStakedListResponse is the response type for the Query/StakedList RPC method. */
export interface QueryAccountStakedListResponse {
  /** staked ... */
  staked: Staked[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** Staked ... */
export interface Staked {
  /** staker ... */
  staker: string;
  /** pool_id ... */
  poolId: number;
  /** account ... */
  account: string;
  /** amount ... */
  amount: number;
  /** pool ... */
  pool: Pool | undefined;
}

/** QueryAccountDelegationListRequest is the request type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountDelegationListRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** address ... */
  address: string;
}

/** QueryAccountDelegationListRequest is the response type for the Query/AccountDelegationList RPC method. */
export interface QueryAccountDelegationListResponse {
  /** delegations ... */
  delegations: DelegatorResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** QueryDelegatorRequest is the request type for the Query/Delegator RPC method. */
export interface QueryDelegatorRequest {
  /** pool_id defines the unique ID of the pool. */
  poolId: number;
  /** staker ... */
  staker: string;
  /** delegator ... */
  delegator: string;
}

/** QueryDelegatorResponse is the response type for the Query/Delegator RPC method. */
export interface QueryDelegatorResponse {
  /** delegator ... */
  delegator: StakerDelegatorResponse | undefined;
}

/** DelegatorResponse ... */
export interface DelegatorResponse {
  /** account ... */
  account: string;
  /** pool ... */
  pool: Pool | undefined;
  /** current_reward ... */
  currentReward: number;
  /** delegation_amount ... */
  delegationAmount: number;
  /** staker ... */
  staker: string;
  /** delegation_pool_data ... */
  delegationPoolData: DelegationPoolData | undefined;
}

/** QueryDelegatorsByPoolAndStakerRequest is the request type for the Query/DelegatorsByPoolAndStaker RPC method. */
export interface QueryDelegatorsByPoolAndStakerRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** pool_id ... */
  poolId: number;
  /** staker ... */
  staker: string;
}

/** QueryDelegatorsByPoolAndStakerResponse is the response type for the Query/DelegatorsByPoolAndStaker RPC method. */
export interface QueryDelegatorsByPoolAndStakerResponse {
  /** delegators ... */
  delegators: StakerDelegatorResponse[];
  /** pool ... */
  pool: Pool | undefined;
  /** delegation_pool_data ... */
  delegationPoolData: DelegationPoolData | undefined;
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** StakerDelegatorResponse ... */
export interface StakerDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** current_reward ... */
  currentReward: number;
  /** delegation_amount ... */
  delegationAmount: number;
  /** staker ... */
  staker: string;
}

/** QueryStakersByPoolAndDelegatorRequest  is the request type for the Query/StakersByPoolAndDelegator RPC method. */
export interface QueryStakersByPoolAndDelegatorRequest {
  /** pagination defines an optional pagination for the request. */
  pagination: PageRequest | undefined;
  /** pool_id ... */
  poolId: number;
  /** delegator ... */
  delegator: string;
}

/** QueryStakersByPoolAndDelegatorResponse  is the response type for the Query/StakersByPoolAndDelegator RPC method. */
export interface QueryStakersByPoolAndDelegatorResponse {
  /** delegator ... */
  delegator: string;
  /** pool ... */
  pool: Pool | undefined;
  /** stakers ... */
  stakers: DelegationForStakerResponse[];
  /** pagination defines the pagination in the response. */
  pagination: PageResponse | undefined;
}

/** DelegationForStakerResponse ... */
export interface DelegationForStakerResponse {
  /** staker ... */
  staker: string;
  /** current_reward ... */
  currentReward: number;
  /** delegation_amount ... */
  delegationAmount: number;
  /** total_delegation_amount ... */
  totalDelegationAmount: number;
  /** delegator_count ... */
  delegatorCount: number;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(
    _: QueryParamsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(
    _: I
  ): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
    };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(
    object: I
  ): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return { id: 0 };
}

export const QueryPoolRequest = {
  encode(
    message: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolRequest {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: QueryPoolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    object: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { pool: undefined };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryPoolsRequest(): QueryPoolsRequest {
  return { pagination: undefined, search: "", runtime: "", paused: false };
}

export const QueryPoolsRequest = {
  encode(
    message: QueryPoolsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.search !== "") {
      writer.uint32(18).string(message.search);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.paused === true) {
      writer.uint32(32).bool(message.paused);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.search = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.paused = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      search: isSet(object.search) ? String(object.search) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
    };
  },

  toJSON(message: QueryPoolsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.search !== undefined && (obj.search = message.search);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.paused !== undefined && (obj.paused = message.paused);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsRequest>, I>>(
    object: I
  ): QueryPoolsRequest {
    const message = createBaseQueryPoolsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.search = object.search ?? "";
    message.runtime = object.runtime ?? "";
    message.paused = object.paused ?? false;
    return message;
  },
};

function createBaseQueryPoolsResponse(): QueryPoolsResponse {
  return { pools: [], pagination: undefined };
}

export const QueryPoolsResponse = {
  encode(
    message: QueryPoolsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.pools) {
      Pool.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pools.push(Pool.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolsResponse {
    return {
      pools: Array.isArray(object?.pools)
        ? object.pools.map((e: any) => Pool.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryPoolsResponse): unknown {
    const obj: any = {};
    if (message.pools) {
      obj.pools = message.pools.map((e) => (e ? Pool.toJSON(e) : undefined));
    } else {
      obj.pools = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolsResponse>, I>>(
    object: I
  ): QueryPoolsResponse {
    const message = createBaseQueryPoolsResponse();
    message.pools = object.pools?.map((e) => Pool.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryFundersListRequest(): QueryFundersListRequest {
  return { poolId: 0 };
}

export const QueryFundersListRequest = {
  encode(
    message: QueryFundersListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundersListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundersListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundersListRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
    };
  },

  toJSON(message: QueryFundersListRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFundersListRequest>, I>>(
    object: I
  ): QueryFundersListRequest {
    const message = createBaseQueryFundersListRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryFundersListResponse(): QueryFundersListResponse {
  return { funders: [] };
}

export const QueryFundersListResponse = {
  encode(
    message: QueryFundersListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.funders) {
      Funder.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryFundersListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFundersListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funders.push(Funder.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFundersListResponse {
    return {
      funders: Array.isArray(object?.funders)
        ? object.funders.map((e: any) => Funder.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryFundersListResponse): unknown {
    const obj: any = {};
    if (message.funders) {
      obj.funders = message.funders.map((e) =>
        e ? Funder.toJSON(e) : undefined
      );
    } else {
      obj.funders = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFundersListResponse>, I>>(
    object: I
  ): QueryFundersListResponse {
    const message = createBaseQueryFundersListResponse();
    message.funders = object.funders?.map((e) => Funder.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryFunderRequest(): QueryFunderRequest {
  return { poolId: 0, funder: "" };
}

export const QueryFunderRequest = {
  encode(
    message: QueryFunderRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.funder !== "") {
      writer.uint32(18).string(message.funder);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFunderRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.funder = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFunderRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      funder: isSet(object.funder) ? String(object.funder) : "",
    };
  },

  toJSON(message: QueryFunderRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.funder !== undefined && (obj.funder = message.funder);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFunderRequest>, I>>(
    object: I
  ): QueryFunderRequest {
    const message = createBaseQueryFunderRequest();
    message.poolId = object.poolId ?? 0;
    message.funder = object.funder ?? "";
    return message;
  },
};

function createBaseQueryFunderResponse(): QueryFunderResponse {
  return { funder: undefined };
}

export const QueryFunderResponse = {
  encode(
    message: QueryFunderResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.funder !== undefined) {
      Funder.encode(message.funder, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFunderResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFunderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funder = Funder.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFunderResponse {
    return {
      funder: isSet(object.funder) ? Funder.fromJSON(object.funder) : undefined,
    };
  },

  toJSON(message: QueryFunderResponse): unknown {
    const obj: any = {};
    message.funder !== undefined &&
      (obj.funder = message.funder ? Funder.toJSON(message.funder) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFunderResponse>, I>>(
    object: I
  ): QueryFunderResponse {
    const message = createBaseQueryFunderResponse();
    message.funder =
      object.funder !== undefined && object.funder !== null
        ? Funder.fromPartial(object.funder)
        : undefined;
    return message;
  },
};

function createBaseQueryStakersListRequest(): QueryStakersListRequest {
  return { poolId: 0 };
}

export const QueryStakersListRequest = {
  encode(
    message: QueryStakersListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersListRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
    };
  },

  toJSON(message: QueryStakersListRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakersListRequest>, I>>(
    object: I
  ): QueryStakersListRequest {
    const message = createBaseQueryStakersListRequest();
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryStakersListResponse(): QueryStakersListResponse {
  return { stakers: [] };
}

export const QueryStakersListResponse = {
  encode(
    message: QueryStakersListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.stakers) {
      StakerResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.stakers.push(StakerResponse.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersListResponse {
    return {
      stakers: Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) => StakerResponse.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryStakersListResponse): unknown {
    const obj: any = {};
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) =>
        e ? StakerResponse.toJSON(e) : undefined
      );
    } else {
      obj.stakers = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakersListResponse>, I>>(
    object: I
  ): QueryStakersListResponse {
    const message = createBaseQueryStakersListResponse();
    message.stakers =
      object.stakers?.map((e) => StakerResponse.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryStakerRequest(): QueryStakerRequest {
  return { poolId: 0, staker: "" };
}

export const QueryStakerRequest = {
  encode(
    message: QueryStakerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakerRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: QueryStakerRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakerRequest>, I>>(
    object: I
  ): QueryStakerRequest {
    const message = createBaseQueryStakerRequest();
    message.poolId = object.poolId ?? 0;
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryStakerResponse(): QueryStakerResponse {
  return { staker: undefined };
}

export const QueryStakerResponse = {
  encode(
    message: QueryStakerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staker !== undefined) {
      StakerResponse.encode(message.staker, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = StakerResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakerResponse {
    return {
      staker: isSet(object.staker)
        ? StakerResponse.fromJSON(object.staker)
        : undefined,
    };
  },

  toJSON(message: QueryStakerResponse): unknown {
    const obj: any = {};
    message.staker !== undefined &&
      (obj.staker = message.staker
        ? StakerResponse.toJSON(message.staker)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakerResponse>, I>>(
    object: I
  ): QueryStakerResponse {
    const message = createBaseQueryStakerResponse();
    message.staker =
      object.staker !== undefined && object.staker !== null
        ? StakerResponse.fromPartial(object.staker)
        : undefined;
    return message;
  },
};

function createBaseStakerResponse(): StakerResponse {
  return {
    staker: "",
    poolId: 0,
    account: "",
    amount: 0,
    totalDelegation: 0,
    commission: "",
    moniker: "",
    website: "",
    logo: "",
    points: 0,
  };
}

export const StakerResponse = {
  encode(
    message: StakerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.totalDelegation !== 0) {
      writer.uint32(40).uint64(message.totalDelegation);
    }
    if (message.commission !== "") {
      writer.uint32(50).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(58).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(66).string(message.website);
    }
    if (message.logo !== "") {
      writer.uint32(74).string(message.logo);
    }
    if (message.points !== 0) {
      writer.uint32(80).uint64(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account = reader.string();
          break;
        case 4:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.totalDelegation = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.commission = reader.string();
          break;
        case 7:
          message.moniker = reader.string();
          break;
        case 8:
          message.website = reader.string();
          break;
        case 9:
          message.logo = reader.string();
          break;
        case 10:
          message.points = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakerResponse {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      account: isSet(object.account) ? String(object.account) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      totalDelegation: isSet(object.totalDelegation)
        ? Number(object.totalDelegation)
        : 0,
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      points: isSet(object.points) ? Number(object.points) : 0,
    };
  },

  toJSON(message: StakerResponse): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.totalDelegation !== undefined &&
      (obj.totalDelegation = Math.round(message.totalDelegation));
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    message.points !== undefined && (obj.points = Math.round(message.points));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakerResponse>, I>>(
    object: I
  ): StakerResponse {
    const message = createBaseStakerResponse();
    message.staker = object.staker ?? "";
    message.poolId = object.poolId ?? 0;
    message.account = object.account ?? "";
    message.amount = object.amount ?? 0;
    message.totalDelegation = object.totalDelegation ?? 0;
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    message.points = object.points ?? 0;
    return message;
  },
};

function createBaseQueryProposalRequest(): QueryProposalRequest {
  return { bundleId: "" };
}

export const QueryProposalRequest = {
  encode(
    message: QueryProposalRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bundleId !== "") {
      writer.uint32(10).string(message.bundleId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalRequest {
    return {
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
    };
  },

  toJSON(message: QueryProposalRequest): unknown {
    const obj: any = {};
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalRequest>, I>>(
    object: I
  ): QueryProposalRequest {
    const message = createBaseQueryProposalRequest();
    message.bundleId = object.bundleId ?? "";
    return message;
  },
};

function createBaseQueryProposalResponse(): QueryProposalResponse {
  return { proposal: undefined };
}

export const QueryProposalResponse = {
  encode(
    message: QueryProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalResponse {
    return {
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: QueryProposalResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalResponse>, I>>(
    object: I
  ): QueryProposalResponse {
    const message = createBaseQueryProposalResponse();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

function createBaseQueryProposalsRequest(): QueryProposalsRequest {
  return { pagination: undefined, poolId: 0 };
}

export const QueryProposalsRequest = {
  encode(
    message: QueryProposalsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
    };
  },

  toJSON(message: QueryProposalsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsRequest>, I>>(
    object: I
  ): QueryProposalsRequest {
    const message = createBaseQueryProposalsRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.poolId = object.poolId ?? 0;
    return message;
  },
};

function createBaseQueryProposalsResponse(): QueryProposalsResponse {
  return { proposals: [], pagination: undefined };
}

export const QueryProposalsResponse = {
  encode(
    message: QueryProposalsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.proposals) {
      Proposal.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposals.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalsResponse {
    return {
      proposals: Array.isArray(object?.proposals)
        ? object.proposals.map((e: any) => Proposal.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryProposalsResponse): unknown {
    const obj: any = {};
    if (message.proposals) {
      obj.proposals = message.proposals.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposals = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalsResponse>, I>>(
    object: I
  ): QueryProposalsResponse {
    const message = createBaseQueryProposalsResponse();
    message.proposals =
      object.proposals?.map((e) => Proposal.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryProposalByHeightRequest(): QueryProposalByHeightRequest {
  return { poolId: 0, height: 0 };
}

export const QueryProposalByHeightRequest = {
  encode(
    message: QueryProposalByHeightRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.height !== 0) {
      writer.uint32(16).uint64(message.height);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalByHeightRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalByHeightRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.height = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalByHeightRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      height: isSet(object.height) ? Number(object.height) : 0,
    };
  },

  toJSON(message: QueryProposalByHeightRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.height !== undefined && (obj.height = Math.round(message.height));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalByHeightRequest>, I>>(
    object: I
  ): QueryProposalByHeightRequest {
    const message = createBaseQueryProposalByHeightRequest();
    message.poolId = object.poolId ?? 0;
    message.height = object.height ?? 0;
    return message;
  },
};

function createBaseQueryProposalByHeightResponse(): QueryProposalByHeightResponse {
  return { proposal: undefined };
}

export const QueryProposalByHeightResponse = {
  encode(
    message: QueryProposalByHeightResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.proposal !== undefined) {
      Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryProposalByHeightResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryProposalByHeightResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.proposal = Proposal.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryProposalByHeightResponse {
    return {
      proposal: isSet(object.proposal)
        ? Proposal.fromJSON(object.proposal)
        : undefined,
    };
  },

  toJSON(message: QueryProposalByHeightResponse): unknown {
    const obj: any = {};
    message.proposal !== undefined &&
      (obj.proposal = message.proposal
        ? Proposal.toJSON(message.proposal)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryProposalByHeightResponse>, I>>(
    object: I
  ): QueryProposalByHeightResponse {
    const message = createBaseQueryProposalByHeightResponse();
    message.proposal =
      object.proposal !== undefined && object.proposal !== null
        ? Proposal.fromPartial(object.proposal)
        : undefined;
    return message;
  },
};

function createBaseQueryCanProposeRequest(): QueryCanProposeRequest {
  return { poolId: 0, proposer: "", fromHeight: 0 };
}

export const QueryCanProposeRequest = {
  encode(
    message: QueryCanProposeRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.proposer !== "") {
      writer.uint32(18).string(message.proposer);
    }
    if (message.fromHeight !== 0) {
      writer.uint32(24).uint64(message.fromHeight);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanProposeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.proposer = reader.string();
          break;
        case 3:
          message.fromHeight = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanProposeRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      proposer: isSet(object.proposer) ? String(object.proposer) : "",
      fromHeight: isSet(object.fromHeight) ? Number(object.fromHeight) : 0,
    };
  },

  toJSON(message: QueryCanProposeRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.proposer !== undefined && (obj.proposer = message.proposer);
    message.fromHeight !== undefined &&
      (obj.fromHeight = Math.round(message.fromHeight));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanProposeRequest>, I>>(
    object: I
  ): QueryCanProposeRequest {
    const message = createBaseQueryCanProposeRequest();
    message.poolId = object.poolId ?? 0;
    message.proposer = object.proposer ?? "";
    message.fromHeight = object.fromHeight ?? 0;
    return message;
  },
};

function createBaseQueryCanProposeResponse(): QueryCanProposeResponse {
  return { possible: false, reason: "" };
}

export const QueryCanProposeResponse = {
  encode(
    message: QueryCanProposeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanProposeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanProposeResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.possible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanProposeResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanProposeResponse): unknown {
    const obj: any = {};
    message.possible !== undefined && (obj.possible = message.possible);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanProposeResponse>, I>>(
    object: I
  ): QueryCanProposeResponse {
    const message = createBaseQueryCanProposeResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseQueryCanVoteRequest(): QueryCanVoteRequest {
  return { poolId: 0, voter: "", bundleId: "" };
}

export const QueryCanVoteRequest = {
  encode(
    message: QueryCanVoteRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.bundleId !== "") {
      writer.uint32(26).string(message.bundleId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCanVoteRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.bundleId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      voter: isSet(object.voter) ? String(object.voter) : "",
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
    };
  },

  toJSON(message: QueryCanVoteRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.voter !== undefined && (obj.voter = message.voter);
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanVoteRequest>, I>>(
    object: I
  ): QueryCanVoteRequest {
    const message = createBaseQueryCanVoteRequest();
    message.poolId = object.poolId ?? 0;
    message.voter = object.voter ?? "";
    message.bundleId = object.bundleId ?? "";
    return message;
  },
};

function createBaseQueryCanVoteResponse(): QueryCanVoteResponse {
  return { possible: false, reason: "" };
}

export const QueryCanVoteResponse = {
  encode(
    message: QueryCanVoteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.possible === true) {
      writer.uint32(8).bool(message.possible);
    }
    if (message.reason !== "") {
      writer.uint32(18).string(message.reason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCanVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCanVoteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.possible = reader.bool();
          break;
        case 2:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCanVoteResponse {
    return {
      possible: isSet(object.possible) ? Boolean(object.possible) : false,
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: QueryCanVoteResponse): unknown {
    const obj: any = {};
    message.possible !== undefined && (obj.possible = message.possible);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCanVoteResponse>, I>>(
    object: I
  ): QueryCanVoteResponse {
    const message = createBaseQueryCanVoteResponse();
    message.possible = object.possible ?? false;
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseQueryStakeInfoRequest(): QueryStakeInfoRequest {
  return { poolId: 0, staker: "" };
}

export const QueryStakeInfoRequest = {
  encode(
    message: QueryStakeInfoRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeInfoRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeInfoRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeInfoRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: QueryStakeInfoRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakeInfoRequest>, I>>(
    object: I
  ): QueryStakeInfoRequest {
    const message = createBaseQueryStakeInfoRequest();
    message.poolId = object.poolId ?? 0;
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryStakeInfoResponse(): QueryStakeInfoResponse {
  return { balance: "", currentStake: "", minimumStake: "" };
}

export const QueryStakeInfoResponse = {
  encode(
    message: QueryStakeInfoResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== "") {
      writer.uint32(10).string(message.balance);
    }
    if (message.currentStake !== "") {
      writer.uint32(18).string(message.currentStake);
    }
    if (message.minimumStake !== "") {
      writer.uint32(26).string(message.minimumStake);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakeInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakeInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = reader.string();
          break;
        case 2:
          message.currentStake = reader.string();
          break;
        case 3:
          message.minimumStake = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakeInfoResponse {
    return {
      balance: isSet(object.balance) ? String(object.balance) : "",
      currentStake: isSet(object.currentStake)
        ? String(object.currentStake)
        : "",
      minimumStake: isSet(object.minimumStake)
        ? String(object.minimumStake)
        : "",
    };
  },

  toJSON(message: QueryStakeInfoResponse): unknown {
    const obj: any = {};
    message.balance !== undefined && (obj.balance = message.balance);
    message.currentStake !== undefined &&
      (obj.currentStake = message.currentStake);
    message.minimumStake !== undefined &&
      (obj.minimumStake = message.minimumStake);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStakeInfoResponse>, I>>(
    object: I
  ): QueryStakeInfoResponse {
    const message = createBaseQueryStakeInfoResponse();
    message.balance = object.balance ?? "";
    message.currentStake = object.currentStake ?? "";
    message.minimumStake = object.minimumStake ?? "";
    return message;
  },
};

function createBaseQueryAccountAssetsRequest(): QueryAccountAssetsRequest {
  return { address: "" };
}

export const QueryAccountAssetsRequest = {
  encode(
    message: QueryAccountAssetsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAssetsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAssetsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAssetsRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryAccountAssetsRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountAssetsRequest>, I>>(
    object: I
  ): QueryAccountAssetsRequest {
    const message = createBaseQueryAccountAssetsRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountAssetsResponse(): QueryAccountAssetsResponse {
  return {
    balance: 0,
    protocolStaking: 0,
    protocolDelegation: 0,
    protocolRewards: 0,
    protocolFunding: 0,
  };
}

export const QueryAccountAssetsResponse = {
  encode(
    message: QueryAccountAssetsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.balance !== 0) {
      writer.uint32(8).uint64(message.balance);
    }
    if (message.protocolStaking !== 0) {
      writer.uint32(16).uint64(message.protocolStaking);
    }
    if (message.protocolDelegation !== 0) {
      writer.uint32(24).uint64(message.protocolDelegation);
    }
    if (message.protocolRewards !== 0) {
      writer.uint32(48).uint64(message.protocolRewards);
    }
    if (message.protocolFunding !== 0) {
      writer.uint32(56).uint64(message.protocolFunding);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountAssetsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountAssetsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.balance = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.protocolStaking = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.protocolDelegation = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.protocolRewards = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.protocolFunding = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountAssetsResponse {
    return {
      balance: isSet(object.balance) ? Number(object.balance) : 0,
      protocolStaking: isSet(object.protocolStaking)
        ? Number(object.protocolStaking)
        : 0,
      protocolDelegation: isSet(object.protocolDelegation)
        ? Number(object.protocolDelegation)
        : 0,
      protocolRewards: isSet(object.protocolRewards)
        ? Number(object.protocolRewards)
        : 0,
      protocolFunding: isSet(object.protocolFunding)
        ? Number(object.protocolFunding)
        : 0,
    };
  },

  toJSON(message: QueryAccountAssetsResponse): unknown {
    const obj: any = {};
    message.balance !== undefined &&
      (obj.balance = Math.round(message.balance));
    message.protocolStaking !== undefined &&
      (obj.protocolStaking = Math.round(message.protocolStaking));
    message.protocolDelegation !== undefined &&
      (obj.protocolDelegation = Math.round(message.protocolDelegation));
    message.protocolRewards !== undefined &&
      (obj.protocolRewards = Math.round(message.protocolRewards));
    message.protocolFunding !== undefined &&
      (obj.protocolFunding = Math.round(message.protocolFunding));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountAssetsResponse>, I>>(
    object: I
  ): QueryAccountAssetsResponse {
    const message = createBaseQueryAccountAssetsResponse();
    message.balance = object.balance ?? 0;
    message.protocolStaking = object.protocolStaking ?? 0;
    message.protocolDelegation = object.protocolDelegation ?? 0;
    message.protocolRewards = object.protocolRewards ?? 0;
    message.protocolFunding = object.protocolFunding ?? 0;
    return message;
  },
};

function createBaseQueryAccountFundedListRequest(): QueryAccountFundedListRequest {
  return { pagination: undefined, address: "" };
}

export const QueryAccountFundedListRequest = {
  encode(
    message: QueryAccountFundedListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountFundedListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFundedListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountFundedListRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryAccountFundedListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountFundedListRequest>, I>>(
    object: I
  ): QueryAccountFundedListRequest {
    const message = createBaseQueryAccountFundedListRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountFundedListResponse(): QueryAccountFundedListResponse {
  return { funded: [], pagination: undefined };
}

export const QueryAccountFundedListResponse = {
  encode(
    message: QueryAccountFundedListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.funded) {
      Funded.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountFundedListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountFundedListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.funded.push(Funded.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountFundedListResponse {
    return {
      funded: Array.isArray(object?.funded)
        ? object.funded.map((e: any) => Funded.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAccountFundedListResponse): unknown {
    const obj: any = {};
    if (message.funded) {
      obj.funded = message.funded.map((e) =>
        e ? Funded.toJSON(e) : undefined
      );
    } else {
      obj.funded = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountFundedListResponse>, I>>(
    object: I
  ): QueryAccountFundedListResponse {
    const message = createBaseQueryAccountFundedListResponse();
    message.funded = object.funded?.map((e) => Funded.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseFunded(): Funded {
  return { account: "", amount: 0, pool: undefined };
}

export const Funded = {
  encode(
    message: Funded,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.amount !== 0) {
      writer.uint32(16).uint64(message.amount);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funded {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunded();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Funded {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: Funded): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Funded>, I>>(object: I): Funded {
    const message = createBaseFunded();
    message.account = object.account ?? "";
    message.amount = object.amount ?? 0;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryAccountStakedListRequest(): QueryAccountStakedListRequest {
  return { pagination: undefined, address: "" };
}

export const QueryAccountStakedListRequest = {
  encode(
    message: QueryAccountStakedListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountStakedListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountStakedListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStakedListRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryAccountStakedListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountStakedListRequest>, I>>(
    object: I
  ): QueryAccountStakedListRequest {
    const message = createBaseQueryAccountStakedListRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountStakedListResponse(): QueryAccountStakedListResponse {
  return { staked: [], pagination: undefined };
}

export const QueryAccountStakedListResponse = {
  encode(
    message: QueryAccountStakedListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.staked) {
      Staked.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountStakedListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountStakedListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staked.push(Staked.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountStakedListResponse {
    return {
      staked: Array.isArray(object?.staked)
        ? object.staked.map((e: any) => Staked.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAccountStakedListResponse): unknown {
    const obj: any = {};
    if (message.staked) {
      obj.staked = message.staked.map((e) =>
        e ? Staked.toJSON(e) : undefined
      );
    } else {
      obj.staked = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountStakedListResponse>, I>>(
    object: I
  ): QueryAccountStakedListResponse {
    const message = createBaseQueryAccountStakedListResponse();
    message.staked = object.staked?.map((e) => Staked.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseStaked(): Staked {
  return { staker: "", poolId: 0, account: "", amount: 0, pool: undefined };
}

export const Staked = {
  encode(
    message: Staked,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.account !== "") {
      writer.uint32(26).string(message.account);
    }
    if (message.amount !== 0) {
      writer.uint32(32).uint64(message.amount);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staked {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaked();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.account = reader.string();
          break;
        case 4:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staked {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      account: isSet(object.account) ? String(object.account) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
    };
  },

  toJSON(message: Staked): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.account !== undefined && (obj.account = message.account);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staked>, I>>(object: I): Staked {
    const message = createBaseStaked();
    message.staker = object.staker ?? "";
    message.poolId = object.poolId ?? 0;
    message.account = object.account ?? "";
    message.amount = object.amount ?? 0;
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    return message;
  },
};

function createBaseQueryAccountDelegationListRequest(): QueryAccountDelegationListRequest {
  return { pagination: undefined, address: "" };
}

export const QueryAccountDelegationListRequest = {
  encode(
    message: QueryAccountDelegationListRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDelegationListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDelegationListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDelegationListRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: QueryAccountDelegationListRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAccountDelegationListRequest>, I>
  >(object: I): QueryAccountDelegationListRequest {
    const message = createBaseQueryAccountDelegationListRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryAccountDelegationListResponse(): QueryAccountDelegationListResponse {
  return { delegations: [], pagination: undefined };
}

export const QueryAccountDelegationListResponse = {
  encode(
    message: QueryAccountDelegationListResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegations) {
      DelegatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAccountDelegationListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountDelegationListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegations.push(
            DelegatorResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountDelegationListResponse {
    return {
      delegations: Array.isArray(object?.delegations)
        ? object.delegations.map((e: any) => DelegatorResponse.fromJSON(e))
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryAccountDelegationListResponse): unknown {
    const obj: any = {};
    if (message.delegations) {
      obj.delegations = message.delegations.map((e) =>
        e ? DelegatorResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegations = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryAccountDelegationListResponse>, I>
  >(object: I): QueryAccountDelegationListResponse {
    const message = createBaseQueryAccountDelegationListResponse();
    message.delegations =
      object.delegations?.map((e) => DelegatorResponse.fromPartial(e)) || [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseQueryDelegatorRequest(): QueryDelegatorRequest {
  return { poolId: 0, staker: "", delegator: "" };
}

export const QueryDelegatorRequest = {
  encode(
    message: QueryDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorRequest {
    return {
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: QueryDelegatorRequest): unknown {
    const obj: any = {};
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorRequest>, I>>(
    object: I
  ): QueryDelegatorRequest {
    const message = createBaseQueryDelegatorRequest();
    message.poolId = object.poolId ?? 0;
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseQueryDelegatorResponse(): QueryDelegatorResponse {
  return { delegator: undefined };
}

export const QueryDelegatorResponse = {
  encode(
    message: QueryDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegator !== undefined) {
      StakerDelegatorResponse.encode(
        message.delegator,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = StakerDelegatorResponse.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorResponse {
    return {
      delegator: isSet(object.delegator)
        ? StakerDelegatorResponse.fromJSON(object.delegator)
        : undefined,
    };
  },

  toJSON(message: QueryDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined &&
      (obj.delegator = message.delegator
        ? StakerDelegatorResponse.toJSON(message.delegator)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDelegatorResponse>, I>>(
    object: I
  ): QueryDelegatorResponse {
    const message = createBaseQueryDelegatorResponse();
    message.delegator =
      object.delegator !== undefined && object.delegator !== null
        ? StakerDelegatorResponse.fromPartial(object.delegator)
        : undefined;
    return message;
  },
};

function createBaseDelegatorResponse(): DelegatorResponse {
  return {
    account: "",
    pool: undefined,
    currentReward: 0,
    delegationAmount: 0,
    staker: "",
    delegationPoolData: undefined,
  };
}

export const DelegatorResponse = {
  encode(
    message: DelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    if (message.currentReward !== 0) {
      writer.uint32(24).uint64(message.currentReward);
    }
    if (message.delegationAmount !== 0) {
      writer.uint32(32).uint64(message.delegationAmount);
    }
    if (message.staker !== "") {
      writer.uint32(42).string(message.staker);
    }
    if (message.delegationPoolData !== undefined) {
      DelegationPoolData.encode(
        message.delegationPoolData,
        writer.uint32(50).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.currentReward = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.delegationAmount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.staker = reader.string();
          break;
        case 6:
          message.delegationPoolData = DelegationPoolData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegatorResponse {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      currentReward: isSet(object.currentReward)
        ? Number(object.currentReward)
        : 0,
      delegationAmount: isSet(object.delegationAmount)
        ? Number(object.delegationAmount)
        : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegationPoolData: isSet(object.delegationPoolData)
        ? DelegationPoolData.fromJSON(object.delegationPoolData)
        : undefined,
    };
  },

  toJSON(message: DelegatorResponse): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.currentReward !== undefined &&
      (obj.currentReward = Math.round(message.currentReward));
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = Math.round(message.delegationAmount));
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegationPoolData !== undefined &&
      (obj.delegationPoolData = message.delegationPoolData
        ? DelegationPoolData.toJSON(message.delegationPoolData)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegatorResponse>, I>>(
    object: I
  ): DelegatorResponse {
    const message = createBaseDelegatorResponse();
    message.account = object.account ?? "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.currentReward = object.currentReward ?? 0;
    message.delegationAmount = object.delegationAmount ?? 0;
    message.staker = object.staker ?? "";
    message.delegationPoolData =
      object.delegationPoolData !== undefined &&
      object.delegationPoolData !== null
        ? DelegationPoolData.fromPartial(object.delegationPoolData)
        : undefined;
    return message;
  },
};

function createBaseQueryDelegatorsByPoolAndStakerRequest(): QueryDelegatorsByPoolAndStakerRequest {
  return { pagination: undefined, poolId: 0, staker: "" };
}

export const QueryDelegatorsByPoolAndStakerRequest = {
  encode(
    message: QueryDelegatorsByPoolAndStakerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorsByPoolAndStakerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByPoolAndStakerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorsByPoolAndStakerRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: QueryDelegatorsByPoolAndStakerRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegatorsByPoolAndStakerRequest>, I>
  >(object: I): QueryDelegatorsByPoolAndStakerRequest {
    const message = createBaseQueryDelegatorsByPoolAndStakerRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.poolId = object.poolId ?? 0;
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryDelegatorsByPoolAndStakerResponse(): QueryDelegatorsByPoolAndStakerResponse {
  return {
    delegators: [],
    pool: undefined,
    delegationPoolData: undefined,
    pagination: undefined,
  };
}

export const QueryDelegatorsByPoolAndStakerResponse = {
  encode(
    message: QueryDelegatorsByPoolAndStakerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.delegators) {
      StakerDelegatorResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    if (message.delegationPoolData !== undefined) {
      DelegationPoolData.encode(
        message.delegationPoolData,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDelegatorsByPoolAndStakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDelegatorsByPoolAndStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegators.push(
            StakerDelegatorResponse.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.delegationPoolData = DelegationPoolData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDelegatorsByPoolAndStakerResponse {
    return {
      delegators: Array.isArray(object?.delegators)
        ? object.delegators.map((e: any) => StakerDelegatorResponse.fromJSON(e))
        : [],
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      delegationPoolData: isSet(object.delegationPoolData)
        ? DelegationPoolData.fromJSON(object.delegationPoolData)
        : undefined,
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryDelegatorsByPoolAndStakerResponse): unknown {
    const obj: any = {};
    if (message.delegators) {
      obj.delegators = message.delegators.map((e) =>
        e ? StakerDelegatorResponse.toJSON(e) : undefined
      );
    } else {
      obj.delegators = [];
    }
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    message.delegationPoolData !== undefined &&
      (obj.delegationPoolData = message.delegationPoolData
        ? DelegationPoolData.toJSON(message.delegationPoolData)
        : undefined);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryDelegatorsByPoolAndStakerResponse>, I>
  >(object: I): QueryDelegatorsByPoolAndStakerResponse {
    const message = createBaseQueryDelegatorsByPoolAndStakerResponse();
    message.delegators =
      object.delegators?.map((e) => StakerDelegatorResponse.fromPartial(e)) ||
      [];
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.delegationPoolData =
      object.delegationPoolData !== undefined &&
      object.delegationPoolData !== null
        ? DelegationPoolData.fromPartial(object.delegationPoolData)
        : undefined;
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseStakerDelegatorResponse(): StakerDelegatorResponse {
  return { delegator: "", currentReward: 0, delegationAmount: 0, staker: "" };
}

export const StakerDelegatorResponse = {
  encode(
    message: StakerDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.currentReward !== 0) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (message.delegationAmount !== 0) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): StakerDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStakerDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.currentReward = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegationAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.staker = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): StakerDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      currentReward: isSet(object.currentReward)
        ? Number(object.currentReward)
        : 0,
      delegationAmount: isSet(object.delegationAmount)
        ? Number(object.delegationAmount)
        : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: StakerDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.currentReward !== undefined &&
      (obj.currentReward = Math.round(message.currentReward));
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = Math.round(message.delegationAmount));
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<StakerDelegatorResponse>, I>>(
    object: I
  ): StakerDelegatorResponse {
    const message = createBaseStakerDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.currentReward = object.currentReward ?? 0;
    message.delegationAmount = object.delegationAmount ?? 0;
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseQueryStakersByPoolAndDelegatorRequest(): QueryStakersByPoolAndDelegatorRequest {
  return { pagination: undefined, poolId: 0, delegator: "" };
}

export const QueryStakersByPoolAndDelegatorRequest = {
  encode(
    message: QueryStakersByPoolAndDelegatorRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.delegator !== "") {
      writer.uint32(26).string(message.delegator);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolAndDelegatorRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolAndDelegatorRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolAndDelegatorRequest {
    return {
      pagination: isSet(object.pagination)
        ? PageRequest.fromJSON(object.pagination)
        : undefined,
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: QueryStakersByPoolAndDelegatorRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryStakersByPoolAndDelegatorRequest>, I>
  >(object: I): QueryStakersByPoolAndDelegatorRequest {
    const message = createBaseQueryStakersByPoolAndDelegatorRequest();
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageRequest.fromPartial(object.pagination)
        : undefined;
    message.poolId = object.poolId ?? 0;
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseQueryStakersByPoolAndDelegatorResponse(): QueryStakersByPoolAndDelegatorResponse {
  return { delegator: "", pool: undefined, stakers: [], pagination: undefined };
}

export const QueryStakersByPoolAndDelegatorResponse = {
  encode(
    message: QueryStakersByPoolAndDelegatorResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.delegator !== "") {
      writer.uint32(10).string(message.delegator);
    }
    if (message.pool !== undefined) {
      Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.stakers) {
      DelegationForStakerResponse.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(34).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryStakersByPoolAndDelegatorResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStakersByPoolAndDelegatorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator = reader.string();
          break;
        case 2:
          message.pool = Pool.decode(reader, reader.uint32());
          break;
        case 3:
          message.stakers.push(
            DelegationForStakerResponse.decode(reader, reader.uint32())
          );
          break;
        case 4:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryStakersByPoolAndDelegatorResponse {
    return {
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      pool: isSet(object.pool) ? Pool.fromJSON(object.pool) : undefined,
      stakers: Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) =>
            DelegationForStakerResponse.fromJSON(e)
          )
        : [],
      pagination: isSet(object.pagination)
        ? PageResponse.fromJSON(object.pagination)
        : undefined,
    };
  },

  toJSON(message: QueryStakersByPoolAndDelegatorResponse): unknown {
    const obj: any = {};
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.pool !== undefined &&
      (obj.pool = message.pool ? Pool.toJSON(message.pool) : undefined);
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) =>
        e ? DelegationForStakerResponse.toJSON(e) : undefined
      );
    } else {
      obj.stakers = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<QueryStakersByPoolAndDelegatorResponse>, I>
  >(object: I): QueryStakersByPoolAndDelegatorResponse {
    const message = createBaseQueryStakersByPoolAndDelegatorResponse();
    message.delegator = object.delegator ?? "";
    message.pool =
      object.pool !== undefined && object.pool !== null
        ? Pool.fromPartial(object.pool)
        : undefined;
    message.stakers =
      object.stakers?.map((e) => DelegationForStakerResponse.fromPartial(e)) ||
      [];
    message.pagination =
      object.pagination !== undefined && object.pagination !== null
        ? PageResponse.fromPartial(object.pagination)
        : undefined;
    return message;
  },
};

function createBaseDelegationForStakerResponse(): DelegationForStakerResponse {
  return {
    staker: "",
    currentReward: 0,
    delegationAmount: 0,
    totalDelegationAmount: 0,
    delegatorCount: 0,
  };
}

export const DelegationForStakerResponse = {
  encode(
    message: DelegationForStakerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.staker !== "") {
      writer.uint32(10).string(message.staker);
    }
    if (message.currentReward !== 0) {
      writer.uint32(16).uint64(message.currentReward);
    }
    if (message.delegationAmount !== 0) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    if (message.totalDelegationAmount !== 0) {
      writer.uint32(32).uint64(message.totalDelegationAmount);
    }
    if (message.delegatorCount !== 0) {
      writer.uint32(40).uint64(message.delegatorCount);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): DelegationForStakerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationForStakerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.staker = reader.string();
          break;
        case 2:
          message.currentReward = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegationAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.totalDelegationAmount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.delegatorCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationForStakerResponse {
    return {
      staker: isSet(object.staker) ? String(object.staker) : "",
      currentReward: isSet(object.currentReward)
        ? Number(object.currentReward)
        : 0,
      delegationAmount: isSet(object.delegationAmount)
        ? Number(object.delegationAmount)
        : 0,
      totalDelegationAmount: isSet(object.totalDelegationAmount)
        ? Number(object.totalDelegationAmount)
        : 0,
      delegatorCount: isSet(object.delegatorCount)
        ? Number(object.delegatorCount)
        : 0,
    };
  },

  toJSON(message: DelegationForStakerResponse): unknown {
    const obj: any = {};
    message.staker !== undefined && (obj.staker = message.staker);
    message.currentReward !== undefined &&
      (obj.currentReward = Math.round(message.currentReward));
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = Math.round(message.delegationAmount));
    message.totalDelegationAmount !== undefined &&
      (obj.totalDelegationAmount = Math.round(message.totalDelegationAmount));
    message.delegatorCount !== undefined &&
      (obj.delegatorCount = Math.round(message.delegatorCount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationForStakerResponse>, I>>(
    object: I
  ): DelegationForStakerResponse {
    const message = createBaseDelegationForStakerResponse();
    message.staker = object.staker ?? "";
    message.currentReward = object.currentReward ?? 0;
    message.delegationAmount = object.delegationAmount ?? 0;
    message.totalDelegationAmount = object.totalDelegationAmount ?? 0;
    message.delegatorCount = object.delegatorCount ?? 0;
    return message;
  },
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
  FundersList(
    request: QueryFundersListRequest
  ): Promise<QueryFundersListResponse>;
  /** Funder returns all funder info */
  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse>;
  /** StakersList returns all staker addresses with their corresponding staking amount for a given pool */
  StakersList(
    request: QueryStakersListRequest
  ): Promise<QueryStakersListResponse>;
  /** Staker returns all staker info */
  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse>;
  /** Proposal ... */
  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse>;
  /** Proposals ... */
  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse>;
  /** ProposalByHeight ... */
  ProposalByHeight(
    request: QueryProposalByHeightRequest
  ): Promise<QueryProposalByHeightResponse>;
  /** CanPropose ... */
  CanPropose(request: QueryCanProposeRequest): Promise<QueryCanProposeResponse>;
  /** CanVote checks if voter on pool can still vote for the given bundle */
  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse>;
  /** StakeInfo returns necessary information to become a staker (used by the protocol nodes) */
  StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse>;
  /** AccountAssets returns an overview of the sum of all balances for a given user. e.g. balance, staking, funding, etc. */
  AccountAssets(
    request: QueryAccountAssetsRequest
  ): Promise<QueryAccountAssetsResponse>;
  /** AccountFundedList returns all pools the given user has funded into. */
  AccountFundedList(
    request: QueryAccountFundedListRequest
  ): Promise<QueryAccountFundedListResponse>;
  /** AccountStakedList ... */
  AccountStakedList(
    request: QueryAccountStakedListRequest
  ): Promise<QueryAccountStakedListResponse>;
  /** AccountDelegationList ... */
  AccountDelegationList(
    request: QueryAccountDelegationListRequest
  ): Promise<QueryAccountDelegationListResponse>;
  /** Delegator returns all delegation info */
  Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse>;
  /** DelegatorsByPoolAndStaker ... */
  DelegatorsByPoolAndStaker(
    request: QueryDelegatorsByPoolAndStakerRequest
  ): Promise<QueryDelegatorsByPoolAndStakerResponse>;
  /** StakersByPoolAndDelegator ... */
  StakersByPoolAndDelegator(
    request: QueryStakersByPoolAndDelegatorRequest
  ): Promise<QueryStakersByPoolAndDelegatorResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Pool = this.Pool.bind(this);
    this.Pools = this.Pools.bind(this);
    this.FundersList = this.FundersList.bind(this);
    this.Funder = this.Funder.bind(this);
    this.StakersList = this.StakersList.bind(this);
    this.Staker = this.Staker.bind(this);
    this.Proposal = this.Proposal.bind(this);
    this.Proposals = this.Proposals.bind(this);
    this.ProposalByHeight = this.ProposalByHeight.bind(this);
    this.CanPropose = this.CanPropose.bind(this);
    this.CanVote = this.CanVote.bind(this);
    this.StakeInfo = this.StakeInfo.bind(this);
    this.AccountAssets = this.AccountAssets.bind(this);
    this.AccountFundedList = this.AccountFundedList.bind(this);
    this.AccountStakedList = this.AccountStakedList.bind(this);
    this.AccountDelegationList = this.AccountDelegationList.bind(this);
    this.Delegator = this.Delegator.bind(this);
    this.DelegatorsByPoolAndStaker = this.DelegatorsByPoolAndStaker.bind(this);
    this.StakersByPoolAndDelegator = this.StakersByPoolAndDelegator.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Params",
      data
    );
    return promise.then((data) =>
      QueryParamsResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Pool",
      data
    );
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
    );
  }

  Pools(request: QueryPoolsRequest): Promise<QueryPoolsResponse> {
    const data = QueryPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Pools",
      data
    );
    return promise.then((data) =>
      QueryPoolsResponse.decode(new _m0.Reader(data))
    );
  }

  FundersList(
    request: QueryFundersListRequest
  ): Promise<QueryFundersListResponse> {
    const data = QueryFundersListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "FundersList",
      data
    );
    return promise.then((data) =>
      QueryFundersListResponse.decode(new _m0.Reader(data))
    );
  }

  Funder(request: QueryFunderRequest): Promise<QueryFunderResponse> {
    const data = QueryFunderRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Funder",
      data
    );
    return promise.then((data) =>
      QueryFunderResponse.decode(new _m0.Reader(data))
    );
  }

  StakersList(
    request: QueryStakersListRequest
  ): Promise<QueryStakersListResponse> {
    const data = QueryStakersListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "StakersList",
      data
    );
    return promise.then((data) =>
      QueryStakersListResponse.decode(new _m0.Reader(data))
    );
  }

  Staker(request: QueryStakerRequest): Promise<QueryStakerResponse> {
    const data = QueryStakerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Staker",
      data
    );
    return promise.then((data) =>
      QueryStakerResponse.decode(new _m0.Reader(data))
    );
  }

  Proposal(request: QueryProposalRequest): Promise<QueryProposalResponse> {
    const data = QueryProposalRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Proposal",
      data
    );
    return promise.then((data) =>
      QueryProposalResponse.decode(new _m0.Reader(data))
    );
  }

  Proposals(request: QueryProposalsRequest): Promise<QueryProposalsResponse> {
    const data = QueryProposalsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Proposals",
      data
    );
    return promise.then((data) =>
      QueryProposalsResponse.decode(new _m0.Reader(data))
    );
  }

  ProposalByHeight(
    request: QueryProposalByHeightRequest
  ): Promise<QueryProposalByHeightResponse> {
    const data = QueryProposalByHeightRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "ProposalByHeight",
      data
    );
    return promise.then((data) =>
      QueryProposalByHeightResponse.decode(new _m0.Reader(data))
    );
  }

  CanPropose(
    request: QueryCanProposeRequest
  ): Promise<QueryCanProposeResponse> {
    const data = QueryCanProposeRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "CanPropose",
      data
    );
    return promise.then((data) =>
      QueryCanProposeResponse.decode(new _m0.Reader(data))
    );
  }

  CanVote(request: QueryCanVoteRequest): Promise<QueryCanVoteResponse> {
    const data = QueryCanVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "CanVote",
      data
    );
    return promise.then((data) =>
      QueryCanVoteResponse.decode(new _m0.Reader(data))
    );
  }

  StakeInfo(request: QueryStakeInfoRequest): Promise<QueryStakeInfoResponse> {
    const data = QueryStakeInfoRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "StakeInfo",
      data
    );
    return promise.then((data) =>
      QueryStakeInfoResponse.decode(new _m0.Reader(data))
    );
  }

  AccountAssets(
    request: QueryAccountAssetsRequest
  ): Promise<QueryAccountAssetsResponse> {
    const data = QueryAccountAssetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "AccountAssets",
      data
    );
    return promise.then((data) =>
      QueryAccountAssetsResponse.decode(new _m0.Reader(data))
    );
  }

  AccountFundedList(
    request: QueryAccountFundedListRequest
  ): Promise<QueryAccountFundedListResponse> {
    const data = QueryAccountFundedListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "AccountFundedList",
      data
    );
    return promise.then((data) =>
      QueryAccountFundedListResponse.decode(new _m0.Reader(data))
    );
  }

  AccountStakedList(
    request: QueryAccountStakedListRequest
  ): Promise<QueryAccountStakedListResponse> {
    const data = QueryAccountStakedListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "AccountStakedList",
      data
    );
    return promise.then((data) =>
      QueryAccountStakedListResponse.decode(new _m0.Reader(data))
    );
  }

  AccountDelegationList(
    request: QueryAccountDelegationListRequest
  ): Promise<QueryAccountDelegationListResponse> {
    const data = QueryAccountDelegationListRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "AccountDelegationList",
      data
    );
    return promise.then((data) =>
      QueryAccountDelegationListResponse.decode(new _m0.Reader(data))
    );
  }

  Delegator(request: QueryDelegatorRequest): Promise<QueryDelegatorResponse> {
    const data = QueryDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "Delegator",
      data
    );
    return promise.then((data) =>
      QueryDelegatorResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatorsByPoolAndStaker(
    request: QueryDelegatorsByPoolAndStakerRequest
  ): Promise<QueryDelegatorsByPoolAndStakerResponse> {
    const data = QueryDelegatorsByPoolAndStakerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "DelegatorsByPoolAndStaker",
      data
    );
    return promise.then((data) =>
      QueryDelegatorsByPoolAndStakerResponse.decode(new _m0.Reader(data))
    );
  }

  StakersByPoolAndDelegator(
    request: QueryStakersByPoolAndDelegatorRequest
  ): Promise<QueryStakersByPoolAndDelegatorResponse> {
    const data = QueryStakersByPoolAndDelegatorRequest.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Query",
      "StakersByPoolAndDelegator",
      data
    );
    return promise.then((data) =>
      QueryStakersByPoolAndDelegatorResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
