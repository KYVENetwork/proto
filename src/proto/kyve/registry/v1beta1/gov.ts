/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

/** CreatePoolProposal is a gov Content type for creating a pool. */
export interface CreatePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** versions ... */
  version: string;
  /** config ... */
  config: string;
  /** start_height ... */
  startHeight: number;
  /** upload_interval ... */
  uploadInterval: number;
  /** operating_cost ... */
  operatingCost: number;
  /** max_bundle_size ... */
  maxBundleSize: number;
  /** binaries ... */
  binaries: string;
}

/** UpdatePoolProposal is a gov Content type for updating a pool. */
export interface UpdatePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: number;
  /** name ... */
  name: string;
  /** runtime ... */
  runtime: string;
  /** logo ... */
  logo: string;
  /** versions ... (deprecated) */
  versions: string;
  /** config ... */
  config: string;
  /** upload_interval ... */
  uploadInterval: number;
  /** operating_cost ... */
  operatingCost: number;
  /** max_bundle_size ... */
  maxBundleSize: number;
}

/** PausePoolProposal is a gov Content type for pausing a pool. */
export interface PausePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: number;
}

/** UnpausePoolProposal is a gov Content type for unpausing a pool. */
export interface UnpausePoolProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** id ... */
  id: number;
}

/** SchedulePoolUpgradeProposal is a gov Content type for upgrading a pool by the runtime. */
export interface SchedulePoolUpgradeProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** runtime ... */
  runtime: string;
  /** version ... */
  version: string;
  /** scheduled_at ... */
  scheduledAt: number;
  /** duration ... */
  duration: number;
  /** binaries ... */
  binaries: string;
}

/** CancelPoolUpgradeProposal is a gov Content type for cancelling a scheduled pool upgrade by the runtime. */
export interface CancelPoolUpgradeProposal {
  /** title ... */
  title: string;
  /** description ... */
  description: string;
  /** runtime ... */
  runtime: string;
}

function createBaseCreatePoolProposal(): CreatePoolProposal {
  return {
    title: "",
    description: "",
    name: "",
    runtime: "",
    logo: "",
    version: "",
    config: "",
    startHeight: 0,
    uploadInterval: 0,
    operatingCost: 0,
    maxBundleSize: 0,
    binaries: "",
  };
}

export const CreatePoolProposal = {
  encode(
    message: CreatePoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
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
    if (message.version !== "") {
      writer.uint32(50).string(message.version);
    }
    if (message.config !== "") {
      writer.uint32(58).string(message.config);
    }
    if (message.startHeight !== 0) {
      writer.uint32(64).uint64(message.startHeight);
    }
    if (message.uploadInterval !== 0) {
      writer.uint32(72).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== 0) {
      writer.uint32(80).uint64(message.operatingCost);
    }
    if (message.maxBundleSize !== 0) {
      writer.uint32(88).uint64(message.maxBundleSize);
    }
    if (message.binaries !== "") {
      writer.uint32(98).string(message.binaries);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
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
          message.version = reader.string();
          break;
        case 7:
          message.config = reader.string();
          break;
        case 8:
          message.startHeight = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.uploadInterval = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.operatingCost = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.maxBundleSize = longToNumber(reader.uint64() as Long);
          break;
        case 12:
          message.binaries = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CreatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      version: isSet(object.version) ? String(object.version) : "",
      config: isSet(object.config) ? String(object.config) : "",
      startHeight: isSet(object.startHeight) ? Number(object.startHeight) : 0,
      uploadInterval: isSet(object.uploadInterval)
        ? Number(object.uploadInterval)
        : 0,
      operatingCost: isSet(object.operatingCost)
        ? Number(object.operatingCost)
        : 0,
      maxBundleSize: isSet(object.maxBundleSize)
        ? Number(object.maxBundleSize)
        : 0,
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
    };
  },

  toJSON(message: CreatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.version !== undefined && (obj.version = message.version);
    message.config !== undefined && (obj.config = message.config);
    message.startHeight !== undefined &&
      (obj.startHeight = Math.round(message.startHeight));
    message.uploadInterval !== undefined &&
      (obj.uploadInterval = Math.round(message.uploadInterval));
    message.operatingCost !== undefined &&
      (obj.operatingCost = Math.round(message.operatingCost));
    message.maxBundleSize !== undefined &&
      (obj.maxBundleSize = Math.round(message.maxBundleSize));
    message.binaries !== undefined && (obj.binaries = message.binaries);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CreatePoolProposal>, I>>(
    object: I
  ): CreatePoolProposal {
    const message = createBaseCreatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.version = object.version ?? "";
    message.config = object.config ?? "";
    message.startHeight = object.startHeight ?? 0;
    message.uploadInterval = object.uploadInterval ?? 0;
    message.operatingCost = object.operatingCost ?? 0;
    message.maxBundleSize = object.maxBundleSize ?? 0;
    message.binaries = object.binaries ?? "";
    return message;
  },
};

function createBaseUpdatePoolProposal(): UpdatePoolProposal {
  return {
    title: "",
    description: "",
    id: 0,
    name: "",
    runtime: "",
    logo: "",
    versions: "",
    config: "",
    uploadInterval: 0,
    operatingCost: 0,
    maxBundleSize: 0,
  };
}

export const UpdatePoolProposal = {
  encode(
    message: UpdatePoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    if (message.runtime !== "") {
      writer.uint32(42).string(message.runtime);
    }
    if (message.logo !== "") {
      writer.uint32(50).string(message.logo);
    }
    if (message.versions !== "") {
      writer.uint32(58).string(message.versions);
    }
    if (message.config !== "") {
      writer.uint32(66).string(message.config);
    }
    if (message.uploadInterval !== 0) {
      writer.uint32(72).uint64(message.uploadInterval);
    }
    if (message.operatingCost !== 0) {
      writer.uint32(80).uint64(message.operatingCost);
    }
    if (message.maxBundleSize !== 0) {
      writer.uint32(88).uint64(message.maxBundleSize);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdatePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.name = reader.string();
          break;
        case 5:
          message.runtime = reader.string();
          break;
        case 6:
          message.logo = reader.string();
          break;
        case 7:
          message.versions = reader.string();
          break;
        case 8:
          message.config = reader.string();
          break;
        case 9:
          message.uploadInterval = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.operatingCost = longToNumber(reader.uint64() as Long);
          break;
        case 11:
          message.maxBundleSize = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UpdatePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
      name: isSet(object.name) ? String(object.name) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      logo: isSet(object.logo) ? String(object.logo) : "",
      versions: isSet(object.versions) ? String(object.versions) : "",
      config: isSet(object.config) ? String(object.config) : "",
      uploadInterval: isSet(object.uploadInterval)
        ? Number(object.uploadInterval)
        : 0,
      operatingCost: isSet(object.operatingCost)
        ? Number(object.operatingCost)
        : 0,
      maxBundleSize: isSet(object.maxBundleSize)
        ? Number(object.maxBundleSize)
        : 0,
    };
  },

  toJSON(message: UpdatePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.name !== undefined && (obj.name = message.name);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.logo !== undefined && (obj.logo = message.logo);
    message.versions !== undefined && (obj.versions = message.versions);
    message.config !== undefined && (obj.config = message.config);
    message.uploadInterval !== undefined &&
      (obj.uploadInterval = Math.round(message.uploadInterval));
    message.operatingCost !== undefined &&
      (obj.operatingCost = Math.round(message.operatingCost));
    message.maxBundleSize !== undefined &&
      (obj.maxBundleSize = Math.round(message.maxBundleSize));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UpdatePoolProposal>, I>>(
    object: I
  ): UpdatePoolProposal {
    const message = createBaseUpdatePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? 0;
    message.name = object.name ?? "";
    message.runtime = object.runtime ?? "";
    message.logo = object.logo ?? "";
    message.versions = object.versions ?? "";
    message.config = object.config ?? "";
    message.uploadInterval = object.uploadInterval ?? 0;
    message.operatingCost = object.operatingCost ?? 0;
    message.maxBundleSize = object.maxBundleSize ?? 0;
    return message;
  },
};

function createBasePausePoolProposal(): PausePoolProposal {
  return { title: "", description: "", id: 0 };
}

export const PausePoolProposal = {
  encode(
    message: PausePoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): PausePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBasePausePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PausePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: PausePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<PausePoolProposal>, I>>(
    object: I
  ): PausePoolProposal {
    const message = createBasePausePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseUnpausePoolProposal(): UnpausePoolProposal {
  return { title: "", description: "", id: 0 };
}

export const UnpausePoolProposal = {
  encode(
    message: UnpausePoolProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.id !== 0) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UnpausePoolProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUnpausePoolProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): UnpausePoolProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      id: isSet(object.id) ? Number(object.id) : 0,
    };
  },

  toJSON(message: UnpausePoolProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<UnpausePoolProposal>, I>>(
    object: I
  ): UnpausePoolProposal {
    const message = createBaseUnpausePoolProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseSchedulePoolUpgradeProposal(): SchedulePoolUpgradeProposal {
  return {
    title: "",
    description: "",
    runtime: "",
    version: "",
    scheduledAt: 0,
    duration: 0,
    binaries: "",
  };
}

export const SchedulePoolUpgradeProposal = {
  encode(
    message: SchedulePoolUpgradeProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    if (message.version !== "") {
      writer.uint32(34).string(message.version);
    }
    if (message.scheduledAt !== 0) {
      writer.uint32(40).uint64(message.scheduledAt);
    }
    if (message.duration !== 0) {
      writer.uint32(48).uint64(message.duration);
    }
    if (message.binaries !== "") {
      writer.uint32(58).string(message.binaries);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): SchedulePoolUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSchedulePoolUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        case 4:
          message.version = reader.string();
          break;
        case 5:
          message.scheduledAt = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.duration = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.binaries = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SchedulePoolUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
      version: isSet(object.version) ? String(object.version) : "",
      scheduledAt: isSet(object.scheduledAt) ? Number(object.scheduledAt) : 0,
      duration: isSet(object.duration) ? Number(object.duration) : 0,
      binaries: isSet(object.binaries) ? String(object.binaries) : "",
    };
  },

  toJSON(message: SchedulePoolUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    message.version !== undefined && (obj.version = message.version);
    message.scheduledAt !== undefined &&
      (obj.scheduledAt = Math.round(message.scheduledAt));
    message.duration !== undefined &&
      (obj.duration = Math.round(message.duration));
    message.binaries !== undefined && (obj.binaries = message.binaries);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<SchedulePoolUpgradeProposal>, I>>(
    object: I
  ): SchedulePoolUpgradeProposal {
    const message = createBaseSchedulePoolUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runtime = object.runtime ?? "";
    message.version = object.version ?? "";
    message.scheduledAt = object.scheduledAt ?? 0;
    message.duration = object.duration ?? 0;
    message.binaries = object.binaries ?? "";
    return message;
  },
};

function createBaseCancelPoolUpgradeProposal(): CancelPoolUpgradeProposal {
  return { title: "", description: "", runtime: "" };
}

export const CancelPoolUpgradeProposal = {
  encode(
    message: CancelPoolUpgradeProposal,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.runtime !== "") {
      writer.uint32(26).string(message.runtime);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): CancelPoolUpgradeProposal {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCancelPoolUpgradeProposal();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.runtime = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CancelPoolUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      runtime: isSet(object.runtime) ? String(object.runtime) : "",
    };
  },

  toJSON(message: CancelPoolUpgradeProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.runtime !== undefined && (obj.runtime = message.runtime);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CancelPoolUpgradeProposal>, I>>(
    object: I
  ): CancelPoolUpgradeProposal {
    const message = createBaseCancelPoolUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.runtime = object.runtime ?? "";
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
