/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import {
  Pool,
  Funder,
  Staker,
  Delegator,
  DelegationPoolData,
  DelegationEntries,
  Proposal,
  UnbondingState,
  UnbondingEntries,
} from "../../../kyve/registry/v1beta1/registry";

export const protobufPackage = "kyve.registry.v1beta1";

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

function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    poolList: [],
    poolCount: 0,
    funderList: [],
    stakerList: [],
    delegatorList: [],
    delegationPoolDataList: [],
    delegationEntriesList: [],
    proposalList: [],
    unbondingState: undefined,
    unbondingEntries: [],
  };
}

export const GenesisState = {
  encode(
    message: GenesisState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.poolCount !== 0) {
      writer.uint32(24).uint64(message.poolCount);
    }
    for (const v of message.funderList) {
      Funder.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.stakerList) {
      Staker.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.delegatorList) {
      Delegator.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.delegationPoolDataList) {
      DelegationPoolData.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    for (const v of message.delegationEntriesList) {
      DelegationEntries.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    for (const v of message.proposalList) {
      Proposal.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.unbondingState !== undefined) {
      UnbondingState.encode(
        message.unbondingState,
        writer.uint32(82).fork()
      ).ldelim();
    }
    for (const v of message.unbondingEntries) {
      UnbondingEntries.encode(v!, writer.uint32(90).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.poolList.push(Pool.decode(reader, reader.uint32()));
          break;
        case 3:
          message.poolCount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.funderList.push(Funder.decode(reader, reader.uint32()));
          break;
        case 5:
          message.stakerList.push(Staker.decode(reader, reader.uint32()));
          break;
        case 6:
          message.delegatorList.push(Delegator.decode(reader, reader.uint32()));
          break;
        case 7:
          message.delegationPoolDataList.push(
            DelegationPoolData.decode(reader, reader.uint32())
          );
          break;
        case 8:
          message.delegationEntriesList.push(
            DelegationEntries.decode(reader, reader.uint32())
          );
          break;
        case 9:
          message.proposalList.push(Proposal.decode(reader, reader.uint32()));
          break;
        case 10:
          message.unbondingState = UnbondingState.decode(
            reader,
            reader.uint32()
          );
          break;
        case 11:
          message.unbondingEntries.push(
            UnbondingEntries.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      poolList: Array.isArray(object?.poolList)
        ? object.poolList.map((e: any) => Pool.fromJSON(e))
        : [],
      poolCount: isSet(object.poolCount) ? Number(object.poolCount) : 0,
      funderList: Array.isArray(object?.funderList)
        ? object.funderList.map((e: any) => Funder.fromJSON(e))
        : [],
      stakerList: Array.isArray(object?.stakerList)
        ? object.stakerList.map((e: any) => Staker.fromJSON(e))
        : [],
      delegatorList: Array.isArray(object?.delegatorList)
        ? object.delegatorList.map((e: any) => Delegator.fromJSON(e))
        : [],
      delegationPoolDataList: Array.isArray(object?.delegationPoolDataList)
        ? object.delegationPoolDataList.map((e: any) =>
            DelegationPoolData.fromJSON(e)
          )
        : [],
      delegationEntriesList: Array.isArray(object?.delegationEntriesList)
        ? object.delegationEntriesList.map((e: any) =>
            DelegationEntries.fromJSON(e)
          )
        : [],
      proposalList: Array.isArray(object?.proposalList)
        ? object.proposalList.map((e: any) => Proposal.fromJSON(e))
        : [],
      unbondingState: isSet(object.unbondingState)
        ? UnbondingState.fromJSON(object.unbondingState)
        : undefined,
      unbondingEntries: Array.isArray(object?.unbondingEntries)
        ? object.unbondingEntries.map((e: any) => UnbondingEntries.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.poolList) {
      obj.poolList = message.poolList.map((e) =>
        e ? Pool.toJSON(e) : undefined
      );
    } else {
      obj.poolList = [];
    }
    message.poolCount !== undefined &&
      (obj.poolCount = Math.round(message.poolCount));
    if (message.funderList) {
      obj.funderList = message.funderList.map((e) =>
        e ? Funder.toJSON(e) : undefined
      );
    } else {
      obj.funderList = [];
    }
    if (message.stakerList) {
      obj.stakerList = message.stakerList.map((e) =>
        e ? Staker.toJSON(e) : undefined
      );
    } else {
      obj.stakerList = [];
    }
    if (message.delegatorList) {
      obj.delegatorList = message.delegatorList.map((e) =>
        e ? Delegator.toJSON(e) : undefined
      );
    } else {
      obj.delegatorList = [];
    }
    if (message.delegationPoolDataList) {
      obj.delegationPoolDataList = message.delegationPoolDataList.map((e) =>
        e ? DelegationPoolData.toJSON(e) : undefined
      );
    } else {
      obj.delegationPoolDataList = [];
    }
    if (message.delegationEntriesList) {
      obj.delegationEntriesList = message.delegationEntriesList.map((e) =>
        e ? DelegationEntries.toJSON(e) : undefined
      );
    } else {
      obj.delegationEntriesList = [];
    }
    if (message.proposalList) {
      obj.proposalList = message.proposalList.map((e) =>
        e ? Proposal.toJSON(e) : undefined
      );
    } else {
      obj.proposalList = [];
    }
    message.unbondingState !== undefined &&
      (obj.unbondingState = message.unbondingState
        ? UnbondingState.toJSON(message.unbondingState)
        : undefined);
    if (message.unbondingEntries) {
      obj.unbondingEntries = message.unbondingEntries.map((e) =>
        e ? UnbondingEntries.toJSON(e) : undefined
      );
    } else {
      obj.unbondingEntries = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(
    object: I
  ): GenesisState {
    const message = createBaseGenesisState();
    message.params =
      object.params !== undefined && object.params !== null
        ? Params.fromPartial(object.params)
        : undefined;
    message.poolList = object.poolList?.map((e) => Pool.fromPartial(e)) || [];
    message.poolCount = object.poolCount ?? 0;
    message.funderList =
      object.funderList?.map((e) => Funder.fromPartial(e)) || [];
    message.stakerList =
      object.stakerList?.map((e) => Staker.fromPartial(e)) || [];
    message.delegatorList =
      object.delegatorList?.map((e) => Delegator.fromPartial(e)) || [];
    message.delegationPoolDataList =
      object.delegationPoolDataList?.map((e) =>
        DelegationPoolData.fromPartial(e)
      ) || [];
    message.delegationEntriesList =
      object.delegationEntriesList?.map((e) =>
        DelegationEntries.fromPartial(e)
      ) || [];
    message.proposalList =
      object.proposalList?.map((e) => Proposal.fromPartial(e)) || [];
    message.unbondingState =
      object.unbondingState !== undefined && object.unbondingState !== null
        ? UnbondingState.fromPartial(object.unbondingState)
        : undefined;
    message.unbondingEntries =
      object.unbondingEntries?.map((e) => UnbondingEntries.fromPartial(e)) ||
      [];
    return message;
  },
};

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
