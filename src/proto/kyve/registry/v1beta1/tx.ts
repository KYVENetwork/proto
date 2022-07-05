/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

/** VoteType ... */
export enum VoteType {
  /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
  VOTE_TYPE_UNSPECIFIED = 0,
  /** VOTE_TYPE_YES - VOTE_TYPE_YES ... */
  VOTE_TYPE_YES = 1,
  /** VOTE_TYPE_NO - VOTE_TYPE_NO ... */
  VOTE_TYPE_NO = 2,
  /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
  VOTE_TYPE_ABSTAIN = 3,
  UNRECOGNIZED = -1,
}

export function voteTypeFromJSON(object: any): VoteType {
  switch (object) {
    case 0:
    case "VOTE_TYPE_UNSPECIFIED":
      return VoteType.VOTE_TYPE_UNSPECIFIED;
    case 1:
    case "VOTE_TYPE_YES":
      return VoteType.VOTE_TYPE_YES;
    case 2:
    case "VOTE_TYPE_NO":
      return VoteType.VOTE_TYPE_NO;
    case 3:
    case "VOTE_TYPE_ABSTAIN":
      return VoteType.VOTE_TYPE_ABSTAIN;
    case -1:
    case "UNRECOGNIZED":
    default:
      return VoteType.UNRECOGNIZED;
  }
}

export function voteTypeToJSON(object: VoteType): string {
  switch (object) {
    case VoteType.VOTE_TYPE_UNSPECIFIED:
      return "VOTE_TYPE_UNSPECIFIED";
    case VoteType.VOTE_TYPE_YES:
      return "VOTE_TYPE_YES";
    case VoteType.VOTE_TYPE_NO:
      return "VOTE_TYPE_NO";
    case VoteType.VOTE_TYPE_ABSTAIN:
      return "VOTE_TYPE_ABSTAIN";
    case VoteType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

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
export interface MsgFundPoolResponse {}

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
export interface MsgDefundPoolResponse {}

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
export interface MsgStakePoolResponse {}

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
export interface MsgUnstakePoolResponse {}

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
export interface MsgDelegatePoolResponse {}

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
export interface MsgWithdrawPoolResponse {}

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
export interface MsgUndelegatePoolResponse {}

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
  /** bundle_hash ... */
  bundle_hash: string;
}

/** MsgSubmitBundleProposalResponse defines the Msg/SubmitBundleProposal response type. */
export interface MsgSubmitBundleProposalResponse {}

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
export interface MsgVoteProposalResponse {}

/** MsgClaimUploaderRole defines a SDK message for claiming the uploader role. */
export interface MsgClaimUploaderRole {
  /** creator ... */
  creator: string;
  /** id ... */
  id: string;
}

/** MsgClaimUploaderRoleResponse defines the Msg/ClaimUploaderRole response type. */
export interface MsgClaimUploaderRoleResponse {}

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
export interface MsgUpdateMetadataResponse {}

function createBaseMsgFundPool(): MsgFundPool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgFundPool = {
  encode(
    message: MsgFundPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgFundPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundPool>, I>>(
    object: I
  ): MsgFundPool {
    const message = createBaseMsgFundPool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgFundPoolResponse(): MsgFundPoolResponse {
  return {};
}

export const MsgFundPoolResponse = {
  encode(
    _: MsgFundPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFundPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFundPoolResponse();
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

  fromJSON(_: any): MsgFundPoolResponse {
    return {};
  },

  toJSON(_: MsgFundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFundPoolResponse>, I>>(
    _: I
  ): MsgFundPoolResponse {
    const message = createBaseMsgFundPoolResponse();
    return message;
  },
};

function createBaseMsgDefundPool(): MsgDefundPool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgDefundPool = {
  encode(
    message: MsgDefundPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefundPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDefundPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgDefundPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefundPool>, I>>(
    object: I
  ): MsgDefundPool {
    const message = createBaseMsgDefundPool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgDefundPoolResponse(): MsgDefundPoolResponse {
  return {};
}

export const MsgDefundPoolResponse = {
  encode(
    _: MsgDefundPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDefundPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDefundPoolResponse();
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

  fromJSON(_: any): MsgDefundPoolResponse {
    return {};
  },

  toJSON(_: MsgDefundPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDefundPoolResponse>, I>>(
    _: I
  ): MsgDefundPoolResponse {
    const message = createBaseMsgDefundPoolResponse();
    return message;
  },
};

function createBaseMsgStakePool(): MsgStakePool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgStakePool = {
  encode(
    message: MsgStakePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgStakePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgStakePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgStakePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePool>, I>>(
    object: I
  ): MsgStakePool {
    const message = createBaseMsgStakePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgStakePoolResponse(): MsgStakePoolResponse {
  return {};
}

export const MsgStakePoolResponse = {
  encode(
    _: MsgStakePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgStakePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgStakePoolResponse();
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

  fromJSON(_: any): MsgStakePoolResponse {
    return {};
  },

  toJSON(_: MsgStakePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgStakePoolResponse>, I>>(
    _: I
  ): MsgStakePoolResponse {
    const message = createBaseMsgStakePoolResponse();
    return message;
  },
};

function createBaseMsgUnstakePool(): MsgUnstakePool {
  return { creator: "", id: "0", amount: "0" };
}

export const MsgUnstakePool = {
  encode(
    message: MsgUnstakePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.amount !== "0") {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnstakePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnstakePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgUnstakePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePool>, I>>(
    object: I
  ): MsgUnstakePool {
    const message = createBaseMsgUnstakePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgUnstakePoolResponse(): MsgUnstakePoolResponse {
  return {};
}

export const MsgUnstakePoolResponse = {
  encode(
    _: MsgUnstakePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUnstakePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnstakePoolResponse();
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

  fromJSON(_: any): MsgUnstakePoolResponse {
    return {};
  },

  toJSON(_: MsgUnstakePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnstakePoolResponse>, I>>(
    _: I
  ): MsgUnstakePoolResponse {
    const message = createBaseMsgUnstakePoolResponse();
    return message;
  },
};

function createBaseMsgDelegatePool(): MsgDelegatePool {
  return { creator: "", id: "0", staker: "", amount: "0" };
}

export const MsgDelegatePool = {
  encode(
    message: MsgDelegatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelegatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.staker = reader.string();
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgDelegatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegatePool>, I>>(
    object: I
  ): MsgDelegatePool {
    const message = createBaseMsgDelegatePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgDelegatePoolResponse(): MsgDelegatePoolResponse {
  return {};
}

export const MsgDelegatePoolResponse = {
  encode(
    _: MsgDelegatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDelegatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDelegatePoolResponse();
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

  fromJSON(_: any): MsgDelegatePoolResponse {
    return {};
  },

  toJSON(_: MsgDelegatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDelegatePoolResponse>, I>>(
    _: I
  ): MsgDelegatePoolResponse {
    const message = createBaseMsgDelegatePoolResponse();
    return message;
  },
};

function createBaseMsgWithdrawPool(): MsgWithdrawPool {
  return { creator: "", id: "0", staker: "" };
}

export const MsgWithdrawPool = {
  encode(
    message: MsgWithdrawPool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
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

  fromJSON(object: any): MsgWithdrawPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
    };
  },

  toJSON(message: MsgWithdrawPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.staker !== undefined && (obj.staker = message.staker);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPool>, I>>(
    object: I
  ): MsgWithdrawPool {
    const message = createBaseMsgWithdrawPool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.staker = object.staker ?? "";
    return message;
  },
};

function createBaseMsgWithdrawPoolResponse(): MsgWithdrawPoolResponse {
  return {};
}

export const MsgWithdrawPoolResponse = {
  encode(
    _: MsgWithdrawPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgWithdrawPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPoolResponse();
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

  fromJSON(_: any): MsgWithdrawPoolResponse {
    return {};
  },

  toJSON(_: MsgWithdrawPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPoolResponse>, I>>(
    _: I
  ): MsgWithdrawPoolResponse {
    const message = createBaseMsgWithdrawPoolResponse();
    return message;
  },
};

function createBaseMsgUndelegatePool(): MsgUndelegatePool {
  return { creator: "", id: "0", staker: "", amount: "0" };
}

export const MsgUndelegatePool = {
  encode(
    message: MsgUndelegatePool,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    if (message.amount !== "0") {
      writer.uint32(32).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUndelegatePool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegatePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.staker = reader.string();
          break;
        case 4:
          message.amount = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUndelegatePool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      staker: isSet(object.staker) ? String(object.staker) : "",
      amount: isSet(object.amount) ? String(object.amount) : "0",
    };
  },

  toJSON(message: MsgUndelegatePool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.staker !== undefined && (obj.staker = message.staker);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegatePool>, I>>(
    object: I
  ): MsgUndelegatePool {
    const message = createBaseMsgUndelegatePool();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.staker = object.staker ?? "";
    message.amount = object.amount ?? "0";
    return message;
  },
};

function createBaseMsgUndelegatePoolResponse(): MsgUndelegatePoolResponse {
  return {};
}

export const MsgUndelegatePoolResponse = {
  encode(
    _: MsgUndelegatePoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUndelegatePoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUndelegatePoolResponse();
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

  fromJSON(_: any): MsgUndelegatePoolResponse {
    return {};
  },

  toJSON(_: MsgUndelegatePoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUndelegatePoolResponse>, I>>(
    _: I
  ): MsgUndelegatePoolResponse {
    const message = createBaseMsgUndelegatePoolResponse();
    return message;
  },
};

function createBaseMsgSubmitBundleProposal(): MsgSubmitBundleProposal {
  return {
    creator: "",
    id: "0",
    bundle_id: "",
    byte_size: "0",
    from_height: "0",
    to_height: "0",
    from_key: "",
    to_key: "",
    to_value: "",
    bundle_hash: "",
  };
}

export const MsgSubmitBundleProposal = {
  encode(
    message: MsgSubmitBundleProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.bundle_id !== "") {
      writer.uint32(26).string(message.bundle_id);
    }
    if (message.byte_size !== "0") {
      writer.uint32(32).uint64(message.byte_size);
    }
    if (message.from_height !== "0") {
      writer.uint32(40).uint64(message.from_height);
    }
    if (message.to_height !== "0") {
      writer.uint32(48).uint64(message.to_height);
    }
    if (message.from_key !== "") {
      writer.uint32(58).string(message.from_key);
    }
    if (message.to_key !== "") {
      writer.uint32(66).string(message.to_key);
    }
    if (message.to_value !== "") {
      writer.uint32(74).string(message.to_value);
    }
    if (message.bundle_hash !== "") {
      writer.uint32(82).string(message.bundle_hash);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitBundleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.bundle_id = reader.string();
          break;
        case 4:
          message.byte_size = longToString(reader.uint64() as Long);
          break;
        case 5:
          message.from_height = longToString(reader.uint64() as Long);
          break;
        case 6:
          message.to_height = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.from_key = reader.string();
          break;
        case 8:
          message.to_key = reader.string();
          break;
        case 9:
          message.to_value = reader.string();
          break;
        case 10:
          message.bundle_hash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSubmitBundleProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      bundle_id: isSet(object.bundle_id) ? String(object.bundle_id) : "",
      byte_size: isSet(object.byte_size) ? String(object.byte_size) : "0",
      from_height: isSet(object.from_height) ? String(object.from_height) : "0",
      to_height: isSet(object.to_height) ? String(object.to_height) : "0",
      from_key: isSet(object.from_key) ? String(object.from_key) : "",
      to_key: isSet(object.to_key) ? String(object.to_key) : "",
      to_value: isSet(object.to_value) ? String(object.to_value) : "",
      bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : "",
    };
  },

  toJSON(message: MsgSubmitBundleProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.bundle_id !== undefined && (obj.bundle_id = message.bundle_id);
    message.byte_size !== undefined && (obj.byte_size = message.byte_size);
    message.from_height !== undefined &&
      (obj.from_height = message.from_height);
    message.to_height !== undefined && (obj.to_height = message.to_height);
    message.from_key !== undefined && (obj.from_key = message.from_key);
    message.to_key !== undefined && (obj.to_key = message.to_key);
    message.to_value !== undefined && (obj.to_value = message.to_value);
    message.bundle_hash !== undefined &&
      (obj.bundle_hash = message.bundle_hash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBundleProposal>, I>>(
    object: I
  ): MsgSubmitBundleProposal {
    const message = createBaseMsgSubmitBundleProposal();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.bundle_id = object.bundle_id ?? "";
    message.byte_size = object.byte_size ?? "0";
    message.from_height = object.from_height ?? "0";
    message.to_height = object.to_height ?? "0";
    message.from_key = object.from_key ?? "";
    message.to_key = object.to_key ?? "";
    message.to_value = object.to_value ?? "";
    message.bundle_hash = object.bundle_hash ?? "";
    return message;
  },
};

function createBaseMsgSubmitBundleProposalResponse(): MsgSubmitBundleProposalResponse {
  return {};
}

export const MsgSubmitBundleProposalResponse = {
  encode(
    _: MsgSubmitBundleProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSubmitBundleProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSubmitBundleProposalResponse();
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

  fromJSON(_: any): MsgSubmitBundleProposalResponse {
    return {};
  },

  toJSON(_: MsgSubmitBundleProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSubmitBundleProposalResponse>, I>>(
    _: I
  ): MsgSubmitBundleProposalResponse {
    const message = createBaseMsgSubmitBundleProposalResponse();
    return message;
  },
};

function createBaseMsgVoteProposal(): MsgVoteProposal {
  return { creator: "", id: "0", bundle_id: "", vote: 0 };
}

export const MsgVoteProposal = {
  encode(
    message: MsgVoteProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.bundle_id !== "") {
      writer.uint32(26).string(message.bundle_id);
    }
    if (message.vote !== 0) {
      writer.uint32(32).int32(message.vote);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgVoteProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.bundle_id = reader.string();
          break;
        case 4:
          message.vote = reader.int32() as any;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVoteProposal {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      bundle_id: isSet(object.bundle_id) ? String(object.bundle_id) : "",
      vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0,
    };
  },

  toJSON(message: MsgVoteProposal): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.bundle_id !== undefined && (obj.bundle_id = message.bundle_id);
    message.vote !== undefined && (obj.vote = voteTypeToJSON(message.vote));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteProposal>, I>>(
    object: I
  ): MsgVoteProposal {
    const message = createBaseMsgVoteProposal();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.bundle_id = object.bundle_id ?? "";
    message.vote = object.vote ?? 0;
    return message;
  },
};

function createBaseMsgVoteProposalResponse(): MsgVoteProposalResponse {
  return {};
}

export const MsgVoteProposalResponse = {
  encode(
    _: MsgVoteProposalResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgVoteProposalResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgVoteProposalResponse();
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

  fromJSON(_: any): MsgVoteProposalResponse {
    return {};
  },

  toJSON(_: MsgVoteProposalResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgVoteProposalResponse>, I>>(
    _: I
  ): MsgVoteProposalResponse {
    const message = createBaseMsgVoteProposalResponse();
    return message;
  },
};

function createBaseMsgClaimUploaderRole(): MsgClaimUploaderRole {
  return { creator: "", id: "0" };
}

export const MsgClaimUploaderRole = {
  encode(
    message: MsgClaimUploaderRole,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimUploaderRole {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRole();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClaimUploaderRole {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
    };
  },

  toJSON(message: MsgClaimUploaderRole): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUploaderRole>, I>>(
    object: I
  ): MsgClaimUploaderRole {
    const message = createBaseMsgClaimUploaderRole();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    return message;
  },
};

function createBaseMsgClaimUploaderRoleResponse(): MsgClaimUploaderRoleResponse {
  return {};
}

export const MsgClaimUploaderRoleResponse = {
  encode(
    _: MsgClaimUploaderRoleResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgClaimUploaderRoleResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClaimUploaderRoleResponse();
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

  fromJSON(_: any): MsgClaimUploaderRoleResponse {
    return {};
  },

  toJSON(_: MsgClaimUploaderRoleResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClaimUploaderRoleResponse>, I>>(
    _: I
  ): MsgClaimUploaderRoleResponse {
    const message = createBaseMsgClaimUploaderRoleResponse();
    return message;
  },
};

function createBaseMsgUpdateMetadata(): MsgUpdateMetadata {
  return {
    creator: "",
    id: "0",
    commission: "",
    moniker: "",
    website: "",
    logo: "",
  };
}

export const MsgUpdateMetadata = {
  encode(
    message: MsgUpdateMetadata,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== "0") {
      writer.uint32(16).uint64(message.id);
    }
    if (message.commission !== "") {
      writer.uint32(26).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(34).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(42).string(message.website);
    }
    if (message.logo !== "") {
      writer.uint32(50).string(message.logo);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMetadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadata();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToString(reader.uint64() as Long);
          break;
        case 3:
          message.commission = reader.string();
          break;
        case 4:
          message.moniker = reader.string();
          break;
        case 5:
          message.website = reader.string();
          break;
        case 6:
          message.logo = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMetadata {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      id: isSet(object.id) ? String(object.id) : "0",
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
    };
  },

  toJSON(message: MsgUpdateMetadata): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadata>, I>>(
    object: I
  ): MsgUpdateMetadata {
    const message = createBaseMsgUpdateMetadata();
    message.creator = object.creator ?? "";
    message.id = object.id ?? "0";
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    return message;
  },
};

function createBaseMsgUpdateMetadataResponse(): MsgUpdateMetadataResponse {
  return {};
}

export const MsgUpdateMetadataResponse = {
  encode(
    _: MsgUpdateMetadataResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateMetadataResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMetadataResponse();
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

  fromJSON(_: any): MsgUpdateMetadataResponse {
    return {};
  },

  toJSON(_: MsgUpdateMetadataResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMetadataResponse>, I>>(
    _: I
  ): MsgUpdateMetadataResponse {
    const message = createBaseMsgUpdateMetadataResponse();
    return message;
  },
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
  UndelegatePool(
    request: MsgUndelegatePool
  ): Promise<MsgUndelegatePoolResponse>;
  /** SubmitBundleProposal ... */
  SubmitBundleProposal(
    request: MsgSubmitBundleProposal
  ): Promise<MsgSubmitBundleProposalResponse>;
  /** VoteProposal ... */
  VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse>;
  /** ClaimUploaderRole ... */
  ClaimUploaderRole(
    request: MsgClaimUploaderRole
  ): Promise<MsgClaimUploaderRoleResponse>;
  /** UpdateMetadata ... */
  UpdateMetadata(
    request: MsgUpdateMetadata
  ): Promise<MsgUpdateMetadataResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.FundPool = this.FundPool.bind(this);
    this.DefundPool = this.DefundPool.bind(this);
    this.StakePool = this.StakePool.bind(this);
    this.UnstakePool = this.UnstakePool.bind(this);
    this.DelegatePool = this.DelegatePool.bind(this);
    this.WithdrawPool = this.WithdrawPool.bind(this);
    this.UndelegatePool = this.UndelegatePool.bind(this);
    this.SubmitBundleProposal = this.SubmitBundleProposal.bind(this);
    this.VoteProposal = this.VoteProposal.bind(this);
    this.ClaimUploaderRole = this.ClaimUploaderRole.bind(this);
    this.UpdateMetadata = this.UpdateMetadata.bind(this);
  }
  FundPool(request: MsgFundPool): Promise<MsgFundPoolResponse> {
    const data = MsgFundPool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "FundPool",
      data
    );
    return promise.then((data) =>
      MsgFundPoolResponse.decode(new _m0.Reader(data))
    );
  }

  DefundPool(request: MsgDefundPool): Promise<MsgDefundPoolResponse> {
    const data = MsgDefundPool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "DefundPool",
      data
    );
    return promise.then((data) =>
      MsgDefundPoolResponse.decode(new _m0.Reader(data))
    );
  }

  StakePool(request: MsgStakePool): Promise<MsgStakePoolResponse> {
    const data = MsgStakePool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "StakePool",
      data
    );
    return promise.then((data) =>
      MsgStakePoolResponse.decode(new _m0.Reader(data))
    );
  }

  UnstakePool(request: MsgUnstakePool): Promise<MsgUnstakePoolResponse> {
    const data = MsgUnstakePool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "UnstakePool",
      data
    );
    return promise.then((data) =>
      MsgUnstakePoolResponse.decode(new _m0.Reader(data))
    );
  }

  DelegatePool(request: MsgDelegatePool): Promise<MsgDelegatePoolResponse> {
    const data = MsgDelegatePool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "DelegatePool",
      data
    );
    return promise.then((data) =>
      MsgDelegatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  WithdrawPool(request: MsgWithdrawPool): Promise<MsgWithdrawPoolResponse> {
    const data = MsgWithdrawPool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "WithdrawPool",
      data
    );
    return promise.then((data) =>
      MsgWithdrawPoolResponse.decode(new _m0.Reader(data))
    );
  }

  UndelegatePool(
    request: MsgUndelegatePool
  ): Promise<MsgUndelegatePoolResponse> {
    const data = MsgUndelegatePool.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "UndelegatePool",
      data
    );
    return promise.then((data) =>
      MsgUndelegatePoolResponse.decode(new _m0.Reader(data))
    );
  }

  SubmitBundleProposal(
    request: MsgSubmitBundleProposal
  ): Promise<MsgSubmitBundleProposalResponse> {
    const data = MsgSubmitBundleProposal.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "SubmitBundleProposal",
      data
    );
    return promise.then((data) =>
      MsgSubmitBundleProposalResponse.decode(new _m0.Reader(data))
    );
  }

  VoteProposal(request: MsgVoteProposal): Promise<MsgVoteProposalResponse> {
    const data = MsgVoteProposal.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "VoteProposal",
      data
    );
    return promise.then((data) =>
      MsgVoteProposalResponse.decode(new _m0.Reader(data))
    );
  }

  ClaimUploaderRole(
    request: MsgClaimUploaderRole
  ): Promise<MsgClaimUploaderRoleResponse> {
    const data = MsgClaimUploaderRole.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "ClaimUploaderRole",
      data
    );
    return promise.then((data) =>
      MsgClaimUploaderRoleResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateMetadata(
    request: MsgUpdateMetadata
  ): Promise<MsgUpdateMetadataResponse> {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request(
      "kyve.registry.v1beta1.Msg",
      "UpdateMetadata",
      data
    );
    return promise.then((data) =>
      MsgUpdateMetadataResponse.decode(new _m0.Reader(data))
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

function longToString(long: Long) {
  return long.toString();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
