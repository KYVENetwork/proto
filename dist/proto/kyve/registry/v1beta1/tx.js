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
exports.MsgClientImpl = exports.MsgUpdateMetadataResponse = exports.MsgUpdateMetadata = exports.MsgClaimUploaderRoleResponse = exports.MsgClaimUploaderRole = exports.MsgVoteProposalResponse = exports.MsgVoteProposal = exports.MsgSubmitBundleProposalResponse = exports.MsgSubmitBundleProposal = exports.MsgRedelegatePoolResponse = exports.MsgRedelegatePool = exports.MsgUndelegatePoolResponse = exports.MsgUndelegatePool = exports.MsgWithdrawPoolResponse = exports.MsgWithdrawPool = exports.MsgDelegatePoolResponse = exports.MsgDelegatePool = exports.MsgUnstakePoolResponse = exports.MsgUnstakePool = exports.MsgStakePoolResponse = exports.MsgStakePool = exports.MsgDefundPoolResponse = exports.MsgDefundPool = exports.MsgFundPoolResponse = exports.MsgFundPool = exports.voteTypeToJSON = exports.voteTypeFromJSON = exports.VoteType = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
/** VoteType ... */
var VoteType;
(function (VoteType) {
    /** VOTE_TYPE_UNSPECIFIED - VOTE_TYPE_UNSPECIFIED ... */
    VoteType[VoteType["VOTE_TYPE_UNSPECIFIED"] = 0] = "VOTE_TYPE_UNSPECIFIED";
    /** VOTE_TYPE_YES - VOTE_TYPE_YES ... */
    VoteType[VoteType["VOTE_TYPE_YES"] = 1] = "VOTE_TYPE_YES";
    /** VOTE_TYPE_NO - VOTE_TYPE_NO ... */
    VoteType[VoteType["VOTE_TYPE_NO"] = 2] = "VOTE_TYPE_NO";
    /** VOTE_TYPE_ABSTAIN - VOTE_TYPE_ABSTAIN ... */
    VoteType[VoteType["VOTE_TYPE_ABSTAIN"] = 3] = "VOTE_TYPE_ABSTAIN";
    VoteType[VoteType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteType = exports.VoteType || (exports.VoteType = {}));
function voteTypeFromJSON(object) {
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
exports.voteTypeFromJSON = voteTypeFromJSON;
function voteTypeToJSON(object) {
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
exports.voteTypeToJSON = voteTypeToJSON;
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
function createBaseMsgRedelegatePool() {
    return {
        creator: "",
        from_pool_id: "0",
        from_staker: "",
        to_pool_id: "0",
        to_staker: "",
        amount: "0"
    };
}
exports.MsgRedelegatePool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.from_pool_id !== "0") {
            writer.uint32(16).uint64(message.from_pool_id);
        }
        if (message.from_staker !== "") {
            writer.uint32(26).string(message.from_staker);
        }
        if (message.to_pool_id !== "0") {
            writer.uint32(32).uint64(message.to_pool_id);
        }
        if (message.to_staker !== "") {
            writer.uint32(42).string(message.to_staker);
        }
        if (message.amount !== "0") {
            writer.uint32(48).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRedelegatePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.from_pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.from_staker = reader.string();
                    break;
                case 4:
                    message.to_pool_id = longToString(reader.uint64());
                    break;
                case 5:
                    message.to_staker = reader.string();
                    break;
                case 6:
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
            from_pool_id: isSet(object.from_pool_id)
                ? String(object.from_pool_id)
                : "0",
            from_staker: isSet(object.from_staker) ? String(object.from_staker) : "",
            to_pool_id: isSet(object.to_pool_id) ? String(object.to_pool_id) : "0",
            to_staker: isSet(object.to_staker) ? String(object.to_staker) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.from_pool_id !== undefined &&
            (obj.from_pool_id = message.from_pool_id);
        message.from_staker !== undefined &&
            (obj.from_staker = message.from_staker);
        message.to_pool_id !== undefined && (obj.to_pool_id = message.to_pool_id);
        message.to_staker !== undefined && (obj.to_staker = message.to_staker);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseMsgRedelegatePool();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.from_pool_id = (_b = object.from_pool_id) !== null && _b !== void 0 ? _b : "0";
        message.from_staker = (_c = object.from_staker) !== null && _c !== void 0 ? _c : "";
        message.to_pool_id = (_d = object.to_pool_id) !== null && _d !== void 0 ? _d : "0";
        message.to_staker = (_e = object.to_staker) !== null && _e !== void 0 ? _e : "";
        message.amount = (_f = object.amount) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseMsgRedelegatePoolResponse() {
    return {};
}
exports.MsgRedelegatePoolResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseMsgRedelegatePoolResponse();
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
        var message = createBaseMsgRedelegatePoolResponse();
        return message;
    }
};
function createBaseMsgSubmitBundleProposal() {
    return {
        creator: "",
        id: "0",
        storage_id: "",
        byte_size: "0",
        from_height: "0",
        to_height: "0",
        from_key: "",
        to_key: "",
        to_value: "",
        bundle_hash: ""
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
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
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
                    message.storage_id = reader.string();
                    break;
                case 4:
                    message.byte_size = longToString(reader.uint64());
                    break;
                case 5:
                    message.from_height = longToString(reader.uint64());
                    break;
                case 6:
                    message.to_height = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            byte_size: isSet(object.byte_size) ? String(object.byte_size) : "0",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0",
            to_height: isSet(object.to_height) ? String(object.to_height) : "0",
            from_key: isSet(object.from_key) ? String(object.from_key) : "",
            to_key: isSet(object.to_key) ? String(object.to_key) : "",
            to_value: isSet(object.to_value) ? String(object.to_value) : "",
            bundle_hash: isSet(object.bundle_hash) ? String(object.bundle_hash) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
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
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseMsgSubmitBundleProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.byte_size = (_d = object.byte_size) !== null && _d !== void 0 ? _d : "0";
        message.from_height = (_e = object.from_height) !== null && _e !== void 0 ? _e : "0";
        message.to_height = (_f = object.to_height) !== null && _f !== void 0 ? _f : "0";
        message.from_key = (_g = object.from_key) !== null && _g !== void 0 ? _g : "";
        message.to_key = (_h = object.to_key) !== null && _h !== void 0 ? _h : "";
        message.to_value = (_j = object.to_value) !== null && _j !== void 0 ? _j : "";
        message.bundle_hash = (_k = object.bundle_hash) !== null && _k !== void 0 ? _k : "";
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
    return { creator: "", id: "0", storage_id: "", vote: 0 };
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
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
        }
        if (message.vote !== 0) {
            writer.uint32(32).int32(message.vote);
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
                    message.storage_id = reader.string();
                    break;
                case 4:
                    message.vote = reader.int32();
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
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : "",
            vote: isSet(object.vote) ? voteTypeFromJSON(object.vote) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        message.vote !== undefined && (obj.vote = voteTypeToJSON(message.vote));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseMsgVoteProposal();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
        message.vote = (_d = object.vote) !== null && _d !== void 0 ? _d : 0;
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
        this.RedelegatePool = this.RedelegatePool.bind(this);
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
    MsgClientImpl.prototype.RedelegatePool = function (request) {
        var data = exports.MsgRedelegatePool.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Msg", "RedelegatePool", data);
        return promise.then(function (data) {
            return exports.MsgRedelegatePoolResponse.decode(new _m0.Reader(data));
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
