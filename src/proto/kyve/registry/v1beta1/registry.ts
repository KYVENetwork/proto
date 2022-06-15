/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

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

function createBaseBundleProposal(): BundleProposal {
  return {
    uploader: "",
    nextUploader: "",
    bundleId: "",
    byteSize: 0,
    fromHeight: 0,
    toHeight: 0,
    createdAt: 0,
    votersValid: [],
    votersInvalid: [],
    votersAbstain: [],
  };
}

export const BundleProposal = {
  encode(
    message: BundleProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.uploader !== "") {
      writer.uint32(10).string(message.uploader);
    }
    if (message.nextUploader !== "") {
      writer.uint32(18).string(message.nextUploader);
    }
    if (message.bundleId !== "") {
      writer.uint32(26).string(message.bundleId);
    }
    if (message.byteSize !== 0) {
      writer.uint32(32).uint64(message.byteSize);
    }
    if (message.fromHeight !== 0) {
      writer.uint32(40).uint64(message.fromHeight);
    }
    if (message.toHeight !== 0) {
      writer.uint32(48).uint64(message.toHeight);
    }
    if (message.createdAt !== 0) {
      writer.uint32(56).uint64(message.createdAt);
    }
    for (const v of message.votersValid) {
      writer.uint32(66).string(v!);
    }
    for (const v of message.votersInvalid) {
      writer.uint32(74).string(v!);
    }
    for (const v of message.votersAbstain) {
      writer.uint32(82).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BundleProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBundleProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.uploader = reader.string();
          break;
        case 2:
          message.nextUploader = reader.string();
          break;
        case 3:
          message.bundleId = reader.string();
          break;
        case 4:
          message.byteSize = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.fromHeight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.toHeight = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.createdAt = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.votersValid.push(reader.string());
          break;
        case 9:
          message.votersInvalid.push(reader.string());
          break;
        case 10:
          message.votersAbstain.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BundleProposal {
    return {
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      nextUploader: isSet(object.nextUploader)
        ? String(object.nextUploader)
        : "",
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
      byteSize: isSet(object.byteSize) ? Number(object.byteSize) : 0,
      fromHeight: isSet(object.fromHeight) ? Number(object.fromHeight) : 0,
      toHeight: isSet(object.toHeight) ? Number(object.toHeight) : 0,
      createdAt: isSet(object.createdAt) ? Number(object.createdAt) : 0,
      votersValid: Array.isArray(object?.votersValid)
        ? object.votersValid.map((e: any) => String(e))
        : [],
      votersInvalid: Array.isArray(object?.votersInvalid)
        ? object.votersInvalid.map((e: any) => String(e))
        : [],
      votersAbstain: Array.isArray(object?.votersAbstain)
        ? object.votersAbstain.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: BundleProposal): unknown {
    const obj: any = {};
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.nextUploader !== undefined &&
      (obj.nextUploader = message.nextUploader);
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    message.byteSize !== undefined &&
      (obj.byteSize = Math.round(message.byteSize));
    message.fromHeight !== undefined &&
      (obj.fromHeight = Math.round(message.fromHeight));
    message.toHeight !== undefined &&
      (obj.toHeight = Math.round(message.toHeight));
    message.createdAt !== undefined &&
      (obj.createdAt = Math.round(message.createdAt));
    if (message.votersValid) {
      obj.votersValid = message.votersValid.map((e) => e);
    } else {
      obj.votersValid = [];
    }
    if (message.votersInvalid) {
      obj.votersInvalid = message.votersInvalid.map((e) => e);
    } else {
      obj.votersInvalid = [];
    }
    if (message.votersAbstain) {
      obj.votersAbstain = message.votersAbstain.map((e) => e);
    } else {
      obj.votersAbstain = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<BundleProposal>, I>>(
    object: I
  ): BundleProposal {
    const message = createBaseBundleProposal();
    message.uploader = object.uploader ?? "";
    message.nextUploader = object.nextUploader ?? "";
    message.bundleId = object.bundleId ?? "";
    message.byteSize = object.byteSize ?? 0;
    message.fromHeight = object.fromHeight ?? 0;
    message.toHeight = object.toHeight ?? 0;
    message.createdAt = object.createdAt ?? 0;
    message.votersValid = object.votersValid?.map((e) => e) || [];
    message.votersInvalid = object.votersInvalid?.map((e) => e) || [];
    message.votersAbstain = object.votersAbstain?.map((e) => e) || [];
    return message;
  },
};

function createBaseProtocol(): Protocol {
  return { version: "", binaries: "", lastUpgrade: 0 };
}

export const Protocol = {
  encode(
    message: Protocol,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.lastUpgrade !== 0) {
      writer.uint32(24).uint64(message.lastUpgrade);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Protocol {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProtocol();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.binaries = reader.string();
          break;
        case 3:
          message.lastUpgrade = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Protocol {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      lastUpgrade: isSet(object.lastUpgrade) ? Number(object.lastUpgrade) : 0,
    };
  },

  toJSON(message: Protocol): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.lastUpgrade !== undefined &&
      (obj.lastUpgrade = Math.round(message.lastUpgrade));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Protocol>, I>>(object: I): Protocol {
    const message = createBaseProtocol();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.lastUpgrade = object.lastUpgrade ?? 0;
    return message;
  },
};

function createBaseUpgradePlan(): UpgradePlan {
  return { version: "", binaries: "", scheduledAt: 0, duration: 0 };
}

export const UpgradePlan = {
  encode(
    message: UpgradePlan,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.version !== "") {
      writer.uint32(10).string(message.version);
    }
    if (message.binaries !== "") {
      writer.uint32(18).string(message.binaries);
    }
    if (message.scheduledAt !== 0) {
      writer.uint32(24).uint64(message.scheduledAt);
    }
    if (message.duration !== 0) {
      writer.uint32(32).uint64(message.duration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpgradePlan {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpgradePlan();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.version = reader.string();
          break;
        case 2:
          message.binaries = reader.string();
          break;
        case 3:
          message.scheduledAt = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpgradePlan {
    return {
      version: isSet(object.version) ? String(object.version) : "",
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
      scheduledAt: isSet(object.scheduledAt) ? Number(object.scheduledAt) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
    };
  },

  toJSON(message: UpgradePlan): unknown {
    const obj: any = {};
    message.version !== undefined && (obj.version = message.version);
    message.binaries !== undefined && (obj.binaries = message.binaries);
    message.scheduledAt !== undefined &&
      (obj.scheduledAt = Math.round(message.scheduledAt));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpgradePlan>, I>>(
    object: I
  ): UpgradePlan {
    const message = createBaseUpgradePlan();
    message.version = object.version ?? "";
    message.binaries = object.binaries ?? "";
    message.scheduledAt = object.scheduledAt ?? 0;
    message.duration = object.duration ?? 0;
    return message;
  },
};

function createBaseDelegationEntries(): DelegationEntries {
  return { id: 0, balance: "", staker: "", kIndex: 0 };
}

export const DelegationEntries = {
  encode(
    message: DelegationEntries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.balance !== "") {
      writer.uint32(18).string(message.balance);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    if (message.kIndex !== 0) {
      writer.uint32(32).uint64(message.kIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationEntries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.balance = reader.string();
          break;
        case 3:
          message.staker = reader.string();
          break;
        case 4:
          message.kIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationEntries {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      balance: isSet(object.balance) ? String(object.balance) : "",
      staker: isSet(object.staker) ? String(object.staker) : "",
      kIndex: isSet(object.kIndex) ? Number(object.kIndex) : 0,
    };
  },

  toJSON(message: DelegationEntries): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.balance !== undefined && (obj.balance = message.balance);
    message.staker !== undefined && (obj.staker = message.staker);
    message.kIndex !== undefined && (obj.kIndex = Math.round(message.kIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationEntries>, I>>(
    object: I
  ): DelegationEntries {
    const message = createBaseDelegationEntries();
    message.id = object.id ?? 0;
    message.balance = object.balance ?? "";
    message.staker = object.staker ?? "";
    message.kIndex = object.kIndex ?? 0;
    return message;
  },
};

function createBaseDelegationPoolData(): DelegationPoolData {
  return {
    id: 0,
    staker: "",
    currentRewards: 0,
    totalDelegation: 0,
    latestIndexK: 0,
    delegatorCount: 0,
    latestIndexWasUndelegation: false,
  };
}

export const DelegationPoolData = {
  encode(
    message: DelegationPoolData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.staker !== "") {
      writer.uint32(18).string(message.staker);
    }
    if (message.currentRewards !== 0) {
      writer.uint32(24).uint64(message.currentRewards);
    }
    if (message.totalDelegation !== 0) {
      writer.uint32(32).uint64(message.totalDelegation);
    }
    if (message.latestIndexK !== 0) {
      writer.uint32(40).uint64(message.latestIndexK);
    }
    if (message.delegatorCount !== 0) {
      writer.uint32(48).uint64(message.delegatorCount);
    }
    if (message.latestIndexWasUndelegation === true) {
      writer.uint32(56).bool(message.latestIndexWasUndelegation);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DelegationPoolData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegationPoolData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.staker = reader.string();
          break;
        case 3:
          message.currentRewards = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.totalDelegation = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.latestIndexK = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.delegatorCount = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.latestIndexWasUndelegation = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DelegationPoolData {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
      currentRewards: isSet(object.currentRewards)
        ? Number(object.currentRewards)
        : 0,
      totalDelegation: isSet(object.totalDelegation)
        ? Number(object.totalDelegation)
        : 0,
      latestIndexK: isSet(object.latestIndexK)
        ? Number(object.latestIndexK)
        : 0,
      delegatorCount: isSet(object.delegatorCount)
        ? Number(object.delegatorCount)
        : 0,
      latestIndexWasUndelegation: isSet(object.latestIndexWasUndelegation)
        ? Boolean(object.latestIndexWasUndelegation)
        : false,
    };
  },

  toJSON(message: DelegationPoolData): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.staker !== undefined && (obj.staker = message.staker);
    message.currentRewards !== undefined &&
      (obj.currentRewards = Math.round(message.currentRewards));
    message.totalDelegation !== undefined &&
      (obj.totalDelegation = Math.round(message.totalDelegation));
    message.latestIndexK !== undefined &&
      (obj.latestIndexK = Math.round(message.latestIndexK));
    message.delegatorCount !== undefined &&
      (obj.delegatorCount = Math.round(message.delegatorCount));
    message.latestIndexWasUndelegation !== undefined &&
      (obj.latestIndexWasUndelegation = message.latestIndexWasUndelegation);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DelegationPoolData>, I>>(
    object: I
  ): DelegationPoolData {
    const message = createBaseDelegationPoolData();
    message.id = object.id ?? 0;
    message.staker = object.staker ?? "";
    message.currentRewards = object.currentRewards ?? 0;
    message.totalDelegation = object.totalDelegation ?? 0;
    message.latestIndexK = object.latestIndexK ?? 0;
    message.delegatorCount = object.delegatorCount ?? 0;
    message.latestIndexWasUndelegation =
      object.latestIndexWasUndelegation ?? false;
    return message;
  },
};

function createBaseDelegator(): Delegator {
  return { id: 0, kIndex: 0, delegationAmount: 0, staker: "", delegator: "" };
}

export const Delegator = {
  encode(
    message: Delegator,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.kIndex !== 0) {
      writer.uint32(16).uint64(message.kIndex);
    }
    if (message.delegationAmount !== 0) {
      writer.uint32(24).uint64(message.delegationAmount);
    }
    if (message.staker !== "") {
      writer.uint32(34).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(42).string(message.delegator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Delegator {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDelegator();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.kIndex = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.delegationAmount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.staker = reader.string();
          break;
        case 5:
          message.delegator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Delegator {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      kIndex: isSet(object.kIndex) ? Number(object.kIndex) : 0,
      delegationAmount: isSet(object.delegationAmount)
        ? Number(object.delegationAmount)
        : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
    };
  },

  toJSON(message: Delegator): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.kIndex !== undefined && (obj.kIndex = Math.round(message.kIndex));
    message.delegationAmount !== undefined &&
      (obj.delegationAmount = Math.round(message.delegationAmount));
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Delegator>, I>>(
    object: I
  ): Delegator {
    const message = createBaseDelegator();
    message.id = object.id ?? 0;
    message.kIndex = object.kIndex ?? 0;
    message.delegationAmount = object.delegationAmount ?? 0;
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    return message;
  },
};

function createBaseFunder(): Funder {
  return { account: "", poolId: 0, amount: 0 };
}

export const Funder = {
  encode(
    message: Funder,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.poolId !== 0) {
      writer.uint32(8).uint64(message.poolId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Funder {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFunder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.account = reader.string();
          break;
        case 1:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Funder {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: Funder): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Funder>, I>>(object: I): Funder {
    const message = createBaseFunder();
    message.account = object.account ?? "";
    message.poolId = object.poolId ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBasePool(): Pool {
  return {
    id: 0,
    creator: "",
    name: "",
    runtime: "",
    logo: "",
    versions: "",
    config: "",
    heightArchived: 0,
    bytesArchived: 0,
    totalBundles: 0,
    totalBundleRewards: 0,
    startHeight: 0,
    uploadInterval: 0,
    operatingCost: 0,
    paused: false,
    funders: [],
    lowestFunder: "",
    totalFunds: 0,
    stakers: [],
    lowestStaker: "",
    totalStake: 0,
    totalDelegation: 0,
    bundleProposal: undefined,
    maxBundleSize: 0,
    protocol: undefined,
    upgradePlan: undefined,
  };
}

export const Pool = {
  encode(message: Pool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(26).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(34).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(42).string(message.logo);
    }
    if (message.versions !== "") {
      writer.uint32(50).string(message.versions);
    }
    if (message.config !== "") {
      writer.uint32(58).string(message.config);
    }
    if (message.heightArchived !== 0) {
      writer.uint32(64).uint64(message.heightArchived);
    }
    if (message.bytesArchived !== 0) {
      writer.uint32(72).uint64(message.bytesArchived);
    }
    if (message.totalBundles !== 0) {
      writer.uint32(80).uint64(message.totalBundles);
    }
    if (message.totalBundleRewards !== 0) {
      writer.uint32(88).uint64(message.totalBundleRewards);
    }
    if (message.startHeight !== 0) {
      writer.uint32(96).uint64(message.startHeight);
    }
    if (message.uploadInterval !== 0) {
      writer.uint32(104).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== 0) {
      writer.uint32(112).uint64(message.operatingCost);
    }
    if (message.paused === true) {
      writer.uint32(120).bool(message.paused);
    }
    for (const v of message.funders) {
      writer.uint32(130).string(v!);
    }
    if (message.lowestFunder !== "") {
      writer.uint32(138).string(message.lowestFunder);
    }
    if (message.totalFunds !== 0) {
      writer.uint32(144).uint64(message.totalFunds);
    }
    for (const v of message.stakers) {
      writer.uint32(154).string(v!);
    }
    if (message.lowestStaker !== "") {
      writer.uint32(162).string(message.lowestStaker);
    }
    if (message.totalStake !== 0) {
      writer.uint32(168).uint64(message.totalStake);
    }
    if (message.totalDelegation !== 0) {
      writer.uint32(176).uint64(message.totalDelegation);
    }
    if (message.bundleProposal !== undefined) {
      BundleProposal.encode(
        message.bundleProposal,
        writer.uint32(186).fork()
      ).ldelim();
    }
    if (message.maxBundleSize !== 0) {
      writer.uint32(192).uint64(message.maxBundleSize);
    }
    if (message.protocol !== undefined) {
      Protocol.encode(message.protocol, writer.uint32(202).fork()).ldelim();
    }
    if (message.upgradePlan !== undefined) {
      UpgradePlan.encode(
        message.upgradePlan,
        writer.uint32(210).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Pool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePool();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.name = reader.string();
          break;
        case 4:
          message.runtime = reader.string();
          break;
        case 5:
          message.logo = reader.string();
          break;
        case 6:
          message.versions = reader.string();
          break;
        case 7:
          message.config = reader.string();
          break;
        case 8:
          message.heightArchived = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.bytesArchived = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.totalBundles = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.totalBundleRewards = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.startHeight = longToNumber(reader.uint64() as Long);
          break;
        case 13:
          message.uploadInterval = longToNumber(reader.uint64() as Long);
          break;
        case 14:
          message.operatingCost = longToNumber(reader.uint64() as Long);
          break;
        case 15:
          message.paused = reader.bool();
          break;
        case 16:
          message.funders.push(reader.string());
          break;
        case 17:
          message.lowestFunder = reader.string();
          break;
        case 18:
          message.totalFunds = longToNumber(reader.uint64() as Long);
          break;
        case 19:
          message.stakers.push(reader.string());
          break;
        case 20:
          message.lowestStaker = reader.string();
          break;
        case 21:
          message.totalStake = longToNumber(reader.uint64() as Long);
          break;
        case 22:
          message.totalDelegation = longToNumber(reader.uint64() as Long);
          break;
        case 23:
          message.bundleProposal = BundleProposal.decode(
            reader,
            reader.uint32()
          );
          break;
        case 24:
          message.maxBundleSize = longToNumber(reader.uint64() as Long);
          break;
        case 25:
          message.protocol = Protocol.decode(reader, reader.uint32());
          break;
        case 26:
          message.upgradePlan = UpgradePlan.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Pool {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      versions: isSet(object.versions) ? String(object.versions) : "",
      config: isSet(object.config) ? String(object.config) : "",
      heightArchived: isSet(object.heightArchived)
        ? Number(object.heightArchived)
        : 0,
      bytesArchived: isSet(object.bytesArchived)
        ? Number(object.bytesArchived)
        : 0,
      totalBundles: isSet(object.totalBundles)
        ? Number(object.totalBundles)
        : 0,
      totalBundleRewards: isSet(object.totalBundleRewards)
        ? Number(object.totalBundleRewards)
        : 0,
      startHeight: isSet(object.startHeight) ? Number(object.startHeight) : 0,
      uploadInterval: isSet(object.uploadInterval)
        ? Number(object.uploadInterval)
        : 0,
      operatingCost: isSet(object.operatingCost)
        ? Number(object.operatingCost)
        : 0,
      paused: isSet(object.paused) ? Boolean(object.paused) : false,
      funders: Array.isArray(object?.funders)
        ? object.funders.map((e: any) => String(e))
        : [],
      lowestFunder: isSet(object.lowestFunder)
        ? String(object.lowestFunder)
        : "",
      totalFunds: isSet(object.totalFunds) ? Number(object.totalFunds) : 0,
      stakers: Array.isArray(object?.stakers)
        ? object.stakers.map((e: any) => String(e))
        : [],
      lowestStaker: isSet(object.lowestStaker)
        ? String(object.lowestStaker)
        : "",
      totalStake: isSet(object.totalStake) ? Number(object.totalStake) : 0,
      totalDelegation: isSet(object.totalDelegation)
        ? Number(object.totalDelegation)
        : 0,
      bundleProposal: isSet(object.bundleProposal)
        ? BundleProposal.fromJSON(object.bundleProposal)
        : undefined,
      maxBundleSize: isSet(object.maxBundleSize)
        ? Number(object.maxBundleSize)
        : 0,
      protocol: isSet(object.protocol)
        ? Protocol.fromJSON(object.protocol)
        : undefined,
      upgradePlan: isSet(object.upgradePlan)
        ? UpgradePlan.fromJSON(object.upgradePlan)
        : undefined,
    };
  },

  toJSON(message: Pool): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.versions !== undefined && (obj.versions = message.versions);
    message.config !== undefined && (obj.config = message.config);
    message.heightArchived !== undefined &&
      (obj.heightArchived = Math.round(message.heightArchived));
    message.bytesArchived !== undefined &&
      (obj.bytesArchived = Math.round(message.bytesArchived));
    message.totalBundles !== undefined &&
      (obj.totalBundles = Math.round(message.totalBundles));
    message.totalBundleRewards !== undefined &&
      (obj.totalBundleRewards = Math.round(message.totalBundleRewards));
    message.startHeight !== undefined &&
      (obj.startHeight = Math.round(message.startHeight));
    message.uploadInterval !== undefined &&
      (obj.uploadInterval = Math.round(message.uploadInterval));
    message.operatingCost !== undefined &&
      (obj.operatingCost = Math.round(message.operatingCost));
    message.paused !== undefined && (obj.paused = message.paused);
    if (message.funders) {
      obj.funders = message.funders.map((e) => e);
    } else {
      obj.funders = [];
    }
    message.lowestFunder !== undefined &&
      (obj.lowestFunder = message.lowestFunder);
    message.totalFunds !== undefined &&
      (obj.totalFunds = Math.round(message.totalFunds));
    if (message.stakers) {
      obj.stakers = message.stakers.map((e) => e);
    } else {
      obj.stakers = [];
    }
    message.lowestStaker !== undefined &&
      (obj.lowestStaker = message.lowestStaker);
    message.totalStake !== undefined &&
      (obj.totalStake = Math.round(message.totalStake));
    message.totalDelegation !== undefined &&
      (obj.totalDelegation = Math.round(message.totalDelegation));
    message.bundleProposal !== undefined &&
      (obj.bundleProposal = message.bundleProposal
        ? BundleProposal.toJSON(message.bundleProposal)
        : undefined);
    message.maxBundleSize !== undefined &&
      (obj.maxBundleSize = Math.round(message.maxBundleSize));
    message.protocol !== undefined &&
      (obj.protocol = message.protocol
        ? Protocol.toJSON(message.protocol)
        : undefined);
    message.upgradePlan !== undefined &&
      (obj.upgradePlan = message.upgradePlan
        ? UpgradePlan.toJSON(message.upgradePlan)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Pool>, I>>(object: I): Pool {
    const message = createBasePool();
    message.id = object.id ?? 0;
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.versions = object.versions ?? "";
    message.config = object.config ?? "";
    message.heightArchived = object.heightArchived ?? 0;
    message.bytesArchived = object.bytesArchived ?? 0;
    message.totalBundles = object.totalBundles ?? 0;
    message.totalBundleRewards = object.totalBundleRewards ?? 0;
    message.startHeight = object.startHeight ?? 0;
    message.uploadInterval = object.uploadInterval ?? 0;
    message.operatingCost = object.operatingCost ?? 0;
    message.paused = object.paused ?? false;
    message.funders = object.funders?.map((e) => e) || [];
    message.lowestFunder = object.lowestFunder ?? "";
    message.totalFunds = object.totalFunds ?? 0;
    message.stakers = object.stakers?.map((e) => e) || [];
    message.lowestStaker = object.lowestStaker ?? "";
    message.totalStake = object.totalStake ?? 0;
    message.totalDelegation = object.totalDelegation ?? 0;
    message.bundleProposal =
      object.bundleProposal !== undefined && object.bundleProposal !== null
        ? BundleProposal.fromPartial(object.bundleProposal)
        : undefined;
    message.maxBundleSize = object.maxBundleSize ?? 0;
    message.protocol =
      object.protocol !== undefined && object.protocol !== null
        ? Protocol.fromPartial(object.protocol)
        : undefined;
    message.upgradePlan =
      object.upgradePlan !== undefined && object.upgradePlan !== null
        ? UpgradePlan.fromPartial(object.upgradePlan)
        : undefined;
    return message;
  },
};

function createBaseProposal(): Proposal {
  return {
    bundleId: "",
    poolId: 0,
    uploader: "",
    fromHeight: 0,
    toHeight: 0,
    finalizedAt: 0,
  };
}

export const Proposal = {
  encode(
    message: Proposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.bundleId !== "") {
      writer.uint32(10).string(message.bundleId);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.uploader !== "") {
      writer.uint32(26).string(message.uploader);
    }
    if (message.fromHeight !== 0) {
      writer.uint32(32).uint64(message.fromHeight);
    }
    if (message.toHeight !== 0) {
      writer.uint32(40).uint64(message.toHeight);
    }
    if (message.finalizedAt !== 0) {
      writer.uint32(48).uint64(message.finalizedAt);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Proposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bundleId = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.uploader = reader.string();
          break;
        case 4:
          message.fromHeight = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.toHeight = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.finalizedAt = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Proposal {
    return {
      bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      uploader: isSet(object.uploader) ? String(object.uploader) : "",
      fromHeight: isSet(object.fromHeight) ? Number(object.fromHeight) : 0,
      toHeight: isSet(object.toHeight) ? Number(object.toHeight) : 0,
      finalizedAt: isSet(object.finalizedAt) ? Number(object.finalizedAt) : 0,
    };
  },

  toJSON(message: Proposal): unknown {
    const obj: any = {};
    message.bundleId !== undefined && (obj.bundleId = message.bundleId);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.uploader !== undefined && (obj.uploader = message.uploader);
    message.fromHeight !== undefined &&
      (obj.fromHeight = Math.round(message.fromHeight));
    message.toHeight !== undefined &&
      (obj.toHeight = Math.round(message.toHeight));
    message.finalizedAt !== undefined &&
      (obj.finalizedAt = Math.round(message.finalizedAt));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Proposal>, I>>(object: I): Proposal {
    const message = createBaseProposal();
    message.bundleId = object.bundleId ?? "";
    message.poolId = object.poolId ?? 0;
    message.uploader = object.uploader ?? "";
    message.fromHeight = object.fromHeight ?? 0;
    message.toHeight = object.toHeight ?? 0;
    message.finalizedAt = object.finalizedAt ?? 0;
    return message;
  },
};

function createBaseStaker(): Staker {
  return {
    account: "",
    poolId: 0,
    amount: 0,
    unbondingAmount: 0,
    commission: "",
    moniker: "",
    website: "",
    logo: "",
    points: 0,
  };
}

export const Staker = {
  encode(
    message: Staker,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amount !== 0) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.unbondingAmount !== 0) {
      writer.uint32(32).uint64(message.unbondingAmount);
    }
    if (message.commission !== "") {
      writer.uint32(42).string(message.commission);
    }
    if (message.moniker !== "") {
      writer.uint32(50).string(message.moniker);
    }
    if (message.website !== "") {
      writer.uint32(58).string(message.website);
    }
    if (message.logo !== "") {
      writer.uint32(66).string(message.logo);
    }
    if (message.points !== 0) {
      writer.uint32(72).uint64(message.points);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Staker {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStaker();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.unbondingAmount = longToNumber(reader.uint64() as Long);
          break;
        case 5:
          message.commission = reader.string();
          break;
        case 6:
          message.moniker = reader.string();
          break;
        case 7:
          message.website = reader.string();
          break;
        case 8:
          message.logo = reader.string();
          break;
        case 9:
          message.points = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Staker {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      unbondingAmount: isSet(object.unbondingAmount)
        ? Number(object.unbondingAmount)
        : 0,
      commission: isSet(object.commission) ? String(object.commission) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      website: isSet(object.website) ? String(object.website) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      points: isSet(object.points) ? Number(object.points) : 0,
    };
  },

  toJSON(message: Staker): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.unbondingAmount !== undefined &&
      (obj.unbondingAmount = Math.round(message.unbondingAmount));
    message.commission !== undefined && (obj.commission = message.commission);
    message.moniker !== undefined && (obj.moniker = message.moniker);
    message.website !== undefined && (obj.website = message.website);
    message.logo !== undefined && (obj.logo = message.logo);
    message.points !== undefined && (obj.points = Math.round(message.points));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Staker>, I>>(object: I): Staker {
    const message = createBaseStaker();
    message.account = object.account ?? "";
    message.poolId = object.poolId ?? 0;
    message.amount = object.amount ?? 0;
    message.unbondingAmount = object.unbondingAmount ?? 0;
    message.commission = object.commission ?? "";
    message.moniker = object.moniker ?? "";
    message.website = object.website ?? "";
    message.logo = object.logo ?? "";
    message.points = object.points ?? 0;
    return message;
  },
};

function createBaseUnbondingEntries(): UnbondingEntries {
  return {
    index: 0,
    poolId: 0,
    staker: "",
    delegator: "",
    creationTime: 0,
    amount: 0,
  };
}

export const UnbondingEntries = {
  encode(
    message: UnbondingEntries,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index);
    }
    if (message.poolId !== 0) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.staker !== "") {
      writer.uint32(26).string(message.staker);
    }
    if (message.delegator !== "") {
      writer.uint32(34).string(message.delegator);
    }
    if (message.creationTime !== 0) {
      writer.uint32(40).uint64(message.creationTime);
    }
    if (message.amount !== 0) {
      writer.uint32(48).uint64(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingEntries {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingEntries();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.poolId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.staker = reader.string();
          break;
        case 4:
          message.delegator = reader.string();
          break;
        case 5:
          message.creationTime = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.amount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingEntries {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
      poolId: isSet(object.poolId) ? Number(object.poolId) : 0,
      staker: isSet(object.staker) ? String(object.staker) : "",
      delegator: isSet(object.delegator) ? String(object.delegator) : "",
      creationTime: isSet(object.creationTime)
        ? Number(object.creationTime)
        : 0,
      amount: isSet(object.amount) ? Number(object.amount) : 0,
    };
  },

  toJSON(message: UnbondingEntries): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    message.poolId !== undefined && (obj.poolId = Math.round(message.poolId));
    message.staker !== undefined && (obj.staker = message.staker);
    message.delegator !== undefined && (obj.delegator = message.delegator);
    message.creationTime !== undefined &&
      (obj.creationTime = Math.round(message.creationTime));
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingEntries>, I>>(
    object: I
  ): UnbondingEntries {
    const message = createBaseUnbondingEntries();
    message.index = object.index ?? 0;
    message.poolId = object.poolId ?? 0;
    message.staker = object.staker ?? "";
    message.delegator = object.delegator ?? "";
    message.creationTime = object.creationTime ?? 0;
    message.amount = object.amount ?? 0;
    return message;
  },
};

function createBaseUnbondingState(): UnbondingState {
  return { lowIndex: 0, highIndex: 0 };
}

export const UnbondingState = {
  encode(
    message: UnbondingState,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.lowIndex !== 0) {
      writer.uint32(8).uint64(message.lowIndex);
    }
    if (message.highIndex !== 0) {
      writer.uint32(16).uint64(message.highIndex);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnbondingState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnbondingState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lowIndex = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.highIndex = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnbondingState {
    return {
      lowIndex: isSet(object.lowIndex) ? Number(object.lowIndex) : 0,
      highIndex: isSet(object.highIndex) ? Number(object.highIndex) : 0,
    };
  },

  toJSON(message: UnbondingState): unknown {
    const obj: any = {};
    message.lowIndex !== undefined &&
      (obj.lowIndex = Math.round(message.lowIndex));
    message.highIndex !== undefined &&
      (obj.highIndex = Math.round(message.highIndex));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnbondingState>, I>>(
    object: I
  ): UnbondingState {
    const message = createBaseUnbondingState();
    message.lowIndex = object.lowIndex ?? 0;
    message.highIndex = object.highIndex ?? 0;
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
