/* eslint-disable */
import Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "kyve.registry.v1beta1";

/** Params defines the set of params for the registry module. */
export interface Params {
  /** vote_slash ... */
  voteSlash: string;
  /** upload_slash ... */
  uploadSlash: string;
  /** timeout_slash ... */
  timeoutSlash: string;
  /** upload_timeout ... */
  uploadTimeout: string;
  /** storage_cost ... */
  storageCost: string;
  /** network_fee ... */
  networkFee: string;
  /** max_points ... */
  maxPoints: string;
}

function createBaseParams(): Params {
  return {
    voteSlash: "",
    uploadSlash: "",
    timeoutSlash: "",
    uploadTimeout: "0",
    storageCost: "0",
    networkFee: "",
    maxPoints: "0",
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.voteSlash !== "") {
      writer.uint32(26).string(message.voteSlash);
    }
    if (message.uploadSlash !== "") {
      writer.uint32(34).string(message.uploadSlash);
    }
    if (message.timeoutSlash !== "") {
      writer.uint32(42).string(message.timeoutSlash);
    }
    if (message.uploadTimeout !== "0") {
      writer.uint32(48).uint64(message.uploadTimeout);
    }
    if (message.storageCost !== "0") {
      writer.uint32(56).uint64(message.storageCost);
    }
    if (message.networkFee !== "") {
      writer.uint32(66).string(message.networkFee);
    }
    if (message.maxPoints !== "0") {
      writer.uint32(72).uint64(message.maxPoints);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 3:
          message.voteSlash = reader.string();
          break;
        case 4:
          message.uploadSlash = reader.string();
          break;
        case 5:
          message.timeoutSlash = reader.string();
          break;
        case 6:
          message.uploadTimeout = longToString(reader.uint64() as Long);
          break;
        case 7:
          message.storageCost = longToString(reader.uint64() as Long);
          break;
        case 8:
          message.networkFee = reader.string();
          break;
        case 9:
          message.maxPoints = longToString(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      voteSlash: isSet(object.voteSlash) ? String(object.voteSlash) : "",
      uploadSlash: isSet(object.uploadSlash) ? String(object.uploadSlash) : "",
      timeoutSlash: isSet(object.timeoutSlash)
        ? String(object.timeoutSlash)
        : "",
      uploadTimeout: isSet(object.uploadTimeout)
        ? String(object.uploadTimeout)
        : "0",
      storageCost: isSet(object.storageCost) ? String(object.storageCost) : "0",
      networkFee: isSet(object.networkFee) ? String(object.networkFee) : "",
      maxPoints: isSet(object.maxPoints) ? String(object.maxPoints) : "0",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.voteSlash !== undefined && (obj.voteSlash = message.voteSlash);
    message.uploadSlash !== undefined &&
      (obj.uploadSlash = message.uploadSlash);
    message.timeoutSlash !== undefined &&
      (obj.timeoutSlash = message.timeoutSlash);
    message.uploadTimeout !== undefined &&
      (obj.uploadTimeout = message.uploadTimeout);
    message.storageCost !== undefined &&
      (obj.storageCost = message.storageCost);
    message.networkFee !== undefined && (obj.networkFee = message.networkFee);
    message.maxPoints !== undefined && (obj.maxPoints = message.maxPoints);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.voteSlash = object.voteSlash ?? "";
    message.uploadSlash = object.uploadSlash ?? "";
    message.timeoutSlash = object.timeoutSlash ?? "";
    message.uploadTimeout = object.uploadTimeout ?? "0";
    message.storageCost = object.storageCost ?? "0";
    message.networkFee = object.networkFee ?? "";
    message.maxPoints = object.maxPoints ?? "0";
    return message;
  },
};

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
