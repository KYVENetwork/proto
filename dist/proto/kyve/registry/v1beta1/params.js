"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseParams() {
    return {
        voteSlash: "",
        uploadSlash: "",
        timeoutSlash: "",
        uploadTimeout: 0,
        storageCost: 0,
        networkFee: "",
        maxPoints: 0
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.voteSlash !== "") {
            writer.uint32(26).string(message.voteSlash);
        }
        if (message.uploadSlash !== "") {
            writer.uint32(34).string(message.uploadSlash);
        }
        if (message.timeoutSlash !== "") {
            writer.uint32(42).string(message.timeoutSlash);
        }
        if (message.uploadTimeout !== 0) {
            writer.uint32(48).uint64(message.uploadTimeout);
        }
        if (message.storageCost !== 0) {
            writer.uint32(56).uint64(message.storageCost);
        }
        if (message.networkFee !== "") {
            writer.uint32(66).string(message.networkFee);
        }
        if (message.maxPoints !== 0) {
            writer.uint32(72).uint64(message.maxPoints);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.uploadTimeout = longToNumber(reader.uint64());
                    break;
                case 7:
                    message.storageCost = longToNumber(reader.uint64());
                    break;
                case 8:
                    message.networkFee = reader.string();
                    break;
                case 9:
                    message.maxPoints = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            voteSlash: isSet(object.voteSlash) ? String(object.voteSlash) : "",
            uploadSlash: isSet(object.uploadSlash) ? String(object.uploadSlash) : "",
            timeoutSlash: isSet(object.timeoutSlash)
                ? String(object.timeoutSlash)
                : "",
            uploadTimeout: isSet(object.uploadTimeout)
                ? Number(object.uploadTimeout)
                : 0,
            storageCost: isSet(object.storageCost) ? Number(object.storageCost) : 0,
            networkFee: isSet(object.networkFee) ? String(object.networkFee) : "",
            maxPoints: isSet(object.maxPoints) ? Number(object.maxPoints) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voteSlash !== undefined && (obj.voteSlash = message.voteSlash);
        message.uploadSlash !== undefined &&
            (obj.uploadSlash = message.uploadSlash);
        message.timeoutSlash !== undefined &&
            (obj.timeoutSlash = message.timeoutSlash);
        message.uploadTimeout !== undefined &&
            (obj.uploadTimeout = Math.round(message.uploadTimeout));
        message.storageCost !== undefined &&
            (obj.storageCost = Math.round(message.storageCost));
        message.networkFee !== undefined && (obj.networkFee = message.networkFee);
        message.maxPoints !== undefined &&
            (obj.maxPoints = Math.round(message.maxPoints));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseParams();
        message.voteSlash = (_a = object.voteSlash) !== null && _a !== void 0 ? _a : "";
        message.uploadSlash = (_b = object.uploadSlash) !== null && _b !== void 0 ? _b : "";
        message.timeoutSlash = (_c = object.timeoutSlash) !== null && _c !== void 0 ? _c : "";
        message.uploadTimeout = (_d = object.uploadTimeout) !== null && _d !== void 0 ? _d : 0;
        message.storageCost = (_e = object.storageCost) !== null && _e !== void 0 ? _e : 0;
        message.networkFee = (_f = object.networkFee) !== null && _f !== void 0 ? _f : "";
        message.maxPoints = (_g = object.maxPoints) !== null && _g !== void 0 ? _g : 0;
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (_m0.util.Long !== long_1["default"]) {
    _m0.util.Long = long_1["default"];
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
