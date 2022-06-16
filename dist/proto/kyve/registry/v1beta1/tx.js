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
exports.MsgClientImpl = exports.MsgUpdateMetadataResponse = exports.MsgUpdateMetadata = exports.MsgClaimUploaderRoleResponse = exports.MsgClaimUploaderRole = exports.MsgVoteProposalResponse = exports.MsgVoteProposal = exports.MsgSubmitBundleProposalResponse = exports.MsgSubmitBundleProposal = exports.MsgUndelegatePoolResponse = exports.MsgUndelegatePool = exports.MsgWithdrawPoolResponse = exports.MsgWithdrawPool = exports.MsgDelegatePoolResponse = exports.MsgDelegatePool = exports.MsgUnstakePoolResponse = exports.MsgUnstakePool = exports.MsgStakePoolResponse = exports.MsgStakePool = exports.MsgDefundPoolResponse = exports.MsgDefundPool = exports.MsgFundPoolResponse = exports.MsgFundPool = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseMsgFundPool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgFundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgFundPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseMsgFundPoolResponse() {
    return {};
}
exports.MsgFundPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgFundPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgFundPoolResponse();
        return message;
    }
};
function createBaseMsgDefundPool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgDefundPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDefundPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgDefundPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseMsgDefundPoolResponse() {
    return {};
}
exports.MsgDefundPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDefundPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgDefundPoolResponse();
        return message;
    }
};
function createBaseMsgStakePool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgStakePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStakePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgStakePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseMsgStakePoolResponse() {
    return {};
}
exports.MsgStakePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgStakePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgStakePoolResponse();
        return message;
    }
};
function createBaseMsgUnstakePool() {
    return { creator: "", id: "0", amount: "0" };
}
exports.MsgUnstakePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnstakePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgUnstakePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseMsgUnstakePoolResponse() {
    return {};
}
exports.MsgUnstakePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUnstakePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUnstakePoolResponse();
        return message;
    }
};
function createBaseMsgDelegatePool() {
    return { creator: "", id: "0", staker: "", amount: "0" };
}
exports.MsgDelegatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgDelegatePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseMsgDelegatePoolResponse() {
    return {};
}
exports.MsgDelegatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgDelegatePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgDelegatePoolResponse();
        return message;
    }
};
function createBaseMsgWithdrawPool() {
    return { creator: "", id: "0", staker: "" };
}
exports.MsgWithdrawPool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawPool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseMsgWithdrawPool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseMsgWithdrawPoolResponse() {
    return {};
}
exports.MsgWithdrawPoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgWithdrawPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgWithdrawPoolResponse();
        return message;
    }
};
function createBaseMsgUndelegatePool() {
    return { creator: "", id: "0", staker: "", amount: "0" };
}
exports.MsgUndelegatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgUndelegatePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseMsgUndelegatePoolResponse() {
    return {};
}
exports.MsgUndelegatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUndelegatePoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUndelegatePoolResponse();
        return message;
    }
};
function createBaseMsgSubmitBundleProposal() {
    return {
        creator: "",
        id: "0",
        bundleId: "",
        byteSize: "0",
        fromHeight: "0",
        bundleSize: "0"
    };
}
exports.MsgSubmitBundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.bundleId !== "") {
            writer.uint32(26).string(message.bundleId);
        }
        if (message.byteSize !== "0") {
            writer.uint32(32).uint64(message.byteSize);
        }
        if (message.fromHeight !== "0") {
            writer.uint32(40).uint64(message.fromHeight);
        }
        if (message.bundleSize !== "0") {
            writer.uint32(48).uint64(message.bundleSize);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitBundleProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.bundleId = reader.string();
                    break;
                case 4:
                    message.byteSize = longToString(reader.uint64());
                    break;
                case 5:
                    message.fromHeight = longToString(reader.uint64());
                    break;
                case 6:
                    message.bundleSize = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
            byteSize: isSet(object.byteSize) ? String(object.byteSize) : "0",
            fromHeight: isSet(object.fromHeight) ? String(object.fromHeight) : "0",
            bundleSize: isSet(object.bundleSize) ? String(object.bundleSize) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        message.byteSize !== undefined && (obj.byteSize = message.byteSize);
        message.fromHeight !== undefined && (obj.fromHeight = message.fromHeight);
        message.bundleSize !== undefined && (obj.bundleSize = message.bundleSize);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgSubmitBundleProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.bundleId = (_c = object.bundleId) !== null && _c !== void 0 ? _c : "";
        message.byteSize = (_d = object.byteSize) !== null && _d !== void 0 ? _d : "0";
        message.fromHeight = (_e = object.fromHeight) !== null && _e !== void 0 ? _e : "0";
        message.bundleSize = (_f = object.bundleSize) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseMsgSubmitBundleProposalResponse() {
    return {};
}
exports.MsgSubmitBundleProposalResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgSubmitBundleProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgSubmitBundleProposalResponse();
        return message;
    }
};
function createBaseMsgVoteProposal() {
    return { creator: "", id: "0", bundleId: "", vote: "0" };
}
exports.MsgVoteProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        if (message.bundleId !== "") {
            writer.uint32(26).string(message.bundleId);
        }
        if (message.vote !== "0") {
            writer.uint32(32).uint64(message.vote);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
                    break;
                case 3:
                    message.bundleId = reader.string();
                    break;
                case 4:
                    message.vote = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
            vote: isSet(object.vote) ? String(object.vote) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        message.vote !== undefined && (obj.vote = message.vote);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgVoteProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.bundleId = (_c = object.bundleId) !== null && _c !== void 0 ? _c : "";
        message.vote = (_d = object.vote) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseMsgVoteProposalResponse() {
    return {};
}
exports.MsgVoteProposalResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgVoteProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgVoteProposalResponse();
        return message;
    }
};
function createBaseMsgClaimUploaderRole() {
    return { creator: "", id: "0" };
}
exports.MsgClaimUploaderRole = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "0") {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimUploaderRole();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
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
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseMsgClaimUploaderRole();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseMsgClaimUploaderRoleResponse() {
    return {};
}
exports.MsgClaimUploaderRoleResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgClaimUploaderRoleResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgClaimUploaderRoleResponse();
        return message;
    }
};
function createBaseMsgUpdateMetadata() {
    return {
        creator: "",
        id: "0",
        commission: "",
        moniker: "",
        website: "",
        logo: ""
    };
}
exports.MsgUpdateMetadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMetadata();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgUpdateMetadata();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.commission = (_c = object.commission) !== null && _c !== void 0 ? _c : "";
        message.moniker = (_d = object.moniker) !== null && _d !== void 0 ? _d : "";
        message.website = (_e = object.website) !== null && _e !== void 0 ? _e : "";
        message.logo = (_f = object.logo) !== null && _f !== void 0 ? _f : "";
        return message;
    }
};
function createBaseMsgUpdateMetadataResponse() {
    return {};
}
exports.MsgUpdateMetadataResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgUpdateMetadataResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        return {};
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = createBaseMsgUpdateMetadataResponse();
        return message;
    }
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
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
    MsgClientImpl.prototype.FundPool = function (request) {
        var data = exports.MsgFundPool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "FundPool", data);
        return promise.then(function (data) {
            return exports.MsgFundPoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.DefundPool = function (request) {
        var data = exports.MsgDefundPool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "DefundPool", data);
        return promise.then(function (data) {
            return exports.MsgDefundPoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.StakePool = function (request) {
        var data = exports.MsgStakePool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "StakePool", data);
        return promise.then(function (data) {
            return exports.MsgStakePoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UnstakePool = function (request) {
        var data = exports.MsgUnstakePool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "UnstakePool", data);
        return promise.then(function (data) {
            return exports.MsgUnstakePoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.DelegatePool = function (request) {
        var data = exports.MsgDelegatePool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "DelegatePool", data);
        return promise.then(function (data) {
            return exports.MsgDelegatePoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.WithdrawPool = function (request) {
        var data = exports.MsgWithdrawPool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "WithdrawPool", data);
        return promise.then(function (data) {
            return exports.MsgWithdrawPoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UndelegatePool = function (request) {
        var data = exports.MsgUndelegatePool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "UndelegatePool", data);
        return promise.then(function (data) {
            return exports.MsgUndelegatePoolResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.SubmitBundleProposal = function (request) {
        var data = exports.MsgSubmitBundleProposal.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "SubmitBundleProposal", data);
        return promise.then(function (data) {
            return exports.MsgSubmitBundleProposalResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.VoteProposal = function (request) {
        var data = exports.MsgVoteProposal.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "VoteProposal", data);
        return promise.then(function (data) {
            return exports.MsgVoteProposalResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.ClaimUploaderRole = function (request) {
        var data = exports.MsgClaimUploaderRole.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "ClaimUploaderRole", data);
        return promise.then(function (data) {
            return exports.MsgClaimUploaderRoleResponse.decode(new _m0.Reader(data));
        });
    };
    MsgClientImpl.prototype.UpdateMetadata = function (request) {
        var data = exports.MsgUpdateMetadata.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "UpdateMetadata", data);
        return promise.then(function (data) {
            return exports.MsgUpdateMetadataResponse.decode(new _m0.Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
function longToString(long) {
    return long.toString();
}
if (_m0.util.Long !== long_1["default"]) {
    _m0.util.Long = long_1["default"];
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
