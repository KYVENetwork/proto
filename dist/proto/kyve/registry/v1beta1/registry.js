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
exports.UnbondingState = exports.UnbondingEntries = exports.Staker = exports.Proposal = exports.Pool = exports.Funder = exports.Delegator = exports.DelegationPoolData = exports.DelegationEntries = exports.UpgradePlan = exports.Protocol = exports.BundleProposal = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseBundleProposal() {
    return {
        uploader: "",
        nextUploader: "",
        bundleId: "",
        byteSize: "0",
        fromHeight: "0",
        toHeight: "0",
        createdAt: "0",
        votersValid: [],
        votersInvalid: [],
        votersAbstain: []
    };
}
exports.BundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.uploader !== "") {
            writer.uint32(10).string(message.uploader);
        }
        if (message.nextUploader !== "") {
            writer.uint32(18).string(message.nextUploader);
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
        if (message.toHeight !== "0") {
            writer.uint32(48).uint64(message.toHeight);
        }
        if (message.createdAt !== "0") {
            writer.uint32(56).uint64(message.createdAt);
        }
        for (var _i = 0, _a = message.votersValid; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(66).string(v);
        }
        for (var _b = 0, _c = message.votersInvalid; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(74).string(v);
        }
        for (var _d = 0, _e = message.votersAbstain; _d < _e.length; _d++) {
            var v = _e[_d];
            writer.uint32(82).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseBundleProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                    message.byteSize = longToString(reader.uint64());
                    break;
                case 5:
                    message.fromHeight = longToString(reader.uint64());
                    break;
                case 6:
                    message.toHeight = longToString(reader.uint64());
                    break;
                case 7:
                    message.createdAt = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            nextUploader: isSet(object.nextUploader)
                ? String(object.nextUploader)
                : "",
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
            byteSize: isSet(object.byteSize) ? String(object.byteSize) : "0",
            fromHeight: isSet(object.fromHeight) ? String(object.fromHeight) : "0",
            toHeight: isSet(object.toHeight) ? String(object.toHeight) : "0",
            createdAt: isSet(object.createdAt) ? String(object.createdAt) : "0",
            votersValid: Array.isArray(object === null || object === void 0 ? void 0 : object.votersValid)
                ? object.votersValid.map(function (e) { return String(e); })
                : [],
            votersInvalid: Array.isArray(object === null || object === void 0 ? void 0 : object.votersInvalid)
                ? object.votersInvalid.map(function (e) { return String(e); })
                : [],
            votersAbstain: Array.isArray(object === null || object === void 0 ? void 0 : object.votersAbstain)
                ? object.votersAbstain.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.nextUploader !== undefined &&
            (obj.nextUploader = message.nextUploader);
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        message.byteSize !== undefined && (obj.byteSize = message.byteSize);
        message.fromHeight !== undefined && (obj.fromHeight = message.fromHeight);
        message.toHeight !== undefined && (obj.toHeight = message.toHeight);
        message.createdAt !== undefined && (obj.createdAt = message.createdAt);
        if (message.votersValid) {
            obj.votersValid = message.votersValid.map(function (e) { return e; });
        }
        else {
            obj.votersValid = [];
        }
        if (message.votersInvalid) {
            obj.votersInvalid = message.votersInvalid.map(function (e) { return e; });
        }
        else {
            obj.votersInvalid = [];
        }
        if (message.votersAbstain) {
            obj.votersAbstain = message.votersAbstain.map(function (e) { return e; });
        }
        else {
            obj.votersAbstain = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseBundleProposal();
        message.uploader = (_a = object.uploader) !== null && _a !== void 0 ? _a : "";
        message.nextUploader = (_b = object.nextUploader) !== null && _b !== void 0 ? _b : "";
        message.bundleId = (_c = object.bundleId) !== null && _c !== void 0 ? _c : "";
        message.byteSize = (_d = object.byteSize) !== null && _d !== void 0 ? _d : "0";
        message.fromHeight = (_e = object.fromHeight) !== null && _e !== void 0 ? _e : "0";
        message.toHeight = (_f = object.toHeight) !== null && _f !== void 0 ? _f : "0";
        message.createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : "0";
        message.votersValid = ((_h = object.votersValid) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        message.votersInvalid = ((_j = object.votersInvalid) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        message.votersAbstain = ((_k = object.votersAbstain) === null || _k === void 0 ? void 0 : _k.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseProtocol() {
    return { version: "", binaries: "", lastUpgrade: "0" };
}
exports.Protocol = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.binaries !== "") {
            writer.uint32(18).string(message.binaries);
        }
        if (message.lastUpgrade !== "0") {
            writer.uint32(24).uint64(message.lastUpgrade);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProtocol();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.binaries = reader.string();
                    break;
                case 3:
                    message.lastUpgrade = longToString(reader.uint64());
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
            version: isSet(object.version) ? String(object.version) : "",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
            lastUpgrade: isSet(object.lastUpgrade) ? String(object.lastUpgrade) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.lastUpgrade !== undefined &&
            (obj.lastUpgrade = message.lastUpgrade);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProtocol();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.lastUpgrade = (_c = object.lastUpgrade) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseUpgradePlan() {
    return { version: "", binaries: "", scheduledAt: "0", duration: "0" };
}
exports.UpgradePlan = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.version !== "") {
            writer.uint32(10).string(message.version);
        }
        if (message.binaries !== "") {
            writer.uint32(18).string(message.binaries);
        }
        if (message.scheduledAt !== "0") {
            writer.uint32(24).uint64(message.scheduledAt);
        }
        if (message.duration !== "0") {
            writer.uint32(32).uint64(message.duration);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpgradePlan();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                case 2:
                    message.binaries = reader.string();
                    break;
                case 3:
                    message.scheduledAt = longToString(reader.uint64());
                    break;
                case 4:
                    message.duration = longToString(reader.uint64());
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
            version: isSet(object.version) ? String(object.version) : "",
            binaries: isSet(object.binaries) ? String(object.binaries) : "",
            scheduledAt: isSet(object.scheduledAt) ? String(object.scheduledAt) : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.scheduledAt !== undefined &&
            (obj.scheduledAt = message.scheduledAt);
        message.duration !== undefined && (obj.duration = message.duration);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpgradePlan();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.scheduledAt = (_c = object.scheduledAt) !== null && _c !== void 0 ? _c : "0";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseDelegationEntries() {
    return { id: "0", balance: "", staker: "", kIndex: "0" };
}
exports.DelegationEntries = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.balance !== "") {
            writer.uint32(18).string(message.balance);
        }
        if (message.staker !== "") {
            writer.uint32(26).string(message.staker);
        }
        if (message.kIndex !== "0") {
            writer.uint32(32).uint64(message.kIndex);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationEntries();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.balance = reader.string();
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.kIndex = longToString(reader.uint64());
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
            id: isSet(object.id) ? String(object.id) : "0",
            balance: isSet(object.balance) ? String(object.balance) : "",
            staker: isSet(object.staker) ? String(object.staker) : "",
            kIndex: isSet(object.kIndex) ? String(object.kIndex) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.balance !== undefined && (obj.balance = message.balance);
        message.staker !== undefined && (obj.staker = message.staker);
        message.kIndex !== undefined && (obj.kIndex = message.kIndex);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegationEntries();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.balance = (_b = object.balance) !== null && _b !== void 0 ? _b : "";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.kIndex = (_d = object.kIndex) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseDelegationPoolData() {
    return {
        id: "0",
        staker: "",
        currentRewards: "0",
        totalDelegation: "0",
        latestIndexK: "0",
        delegatorCount: "0",
        latestIndexWasUndelegation: false
    };
}
exports.DelegationPoolData = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.currentRewards !== "0") {
            writer.uint32(24).uint64(message.currentRewards);
        }
        if (message.totalDelegation !== "0") {
            writer.uint32(32).uint64(message.totalDelegation);
        }
        if (message.latestIndexK !== "0") {
            writer.uint32(40).uint64(message.latestIndexK);
        }
        if (message.delegatorCount !== "0") {
            writer.uint32(48).uint64(message.delegatorCount);
        }
        if (message.latestIndexWasUndelegation === true) {
            writer.uint32(56).bool(message.latestIndexWasUndelegation);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationPoolData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
                    message.currentRewards = longToString(reader.uint64());
                    break;
                case 4:
                    message.totalDelegation = longToString(reader.uint64());
                    break;
                case 5:
                    message.latestIndexK = longToString(reader.uint64());
                    break;
                case 6:
                    message.delegatorCount = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            currentRewards: isSet(object.currentRewards)
                ? String(object.currentRewards)
                : "0",
            totalDelegation: isSet(object.totalDelegation)
                ? String(object.totalDelegation)
                : "0",
            latestIndexK: isSet(object.latestIndexK)
                ? String(object.latestIndexK)
                : "0",
            delegatorCount: isSet(object.delegatorCount)
                ? String(object.delegatorCount)
                : "0",
            latestIndexWasUndelegation: isSet(object.latestIndexWasUndelegation)
                ? Boolean(object.latestIndexWasUndelegation)
                : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.currentRewards !== undefined &&
            (obj.currentRewards = message.currentRewards);
        message.totalDelegation !== undefined &&
            (obj.totalDelegation = message.totalDelegation);
        message.latestIndexK !== undefined &&
            (obj.latestIndexK = message.latestIndexK);
        message.delegatorCount !== undefined &&
            (obj.delegatorCount = message.delegatorCount);
        message.latestIndexWasUndelegation !== undefined &&
            (obj.latestIndexWasUndelegation = message.latestIndexWasUndelegation);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseDelegationPoolData();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.currentRewards = (_c = object.currentRewards) !== null && _c !== void 0 ? _c : "0";
        message.totalDelegation = (_d = object.totalDelegation) !== null && _d !== void 0 ? _d : "0";
        message.latestIndexK = (_e = object.latestIndexK) !== null && _e !== void 0 ? _e : "0";
        message.delegatorCount = (_f = object.delegatorCount) !== null && _f !== void 0 ? _f : "0";
        message.latestIndexWasUndelegation =
            (_g = object.latestIndexWasUndelegation) !== null && _g !== void 0 ? _g : false;
        return message;
    }
};
function createBaseDelegator() {
    return {
        id: "0",
        kIndex: "0",
        delegationAmount: "0",
        staker: "",
        delegator: ""
    };
}
exports.Delegator = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        if (message.kIndex !== "0") {
            writer.uint32(16).uint64(message.kIndex);
        }
        if (message.delegationAmount !== "0") {
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
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegator();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
                    break;
                case 2:
                    message.kIndex = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegationAmount = longToString(reader.uint64());
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
    fromJSON: function (object) {
        return {
            id: isSet(object.id) ? String(object.id) : "0",
            kIndex: isSet(object.kIndex) ? String(object.kIndex) : "0",
            delegationAmount: isSet(object.delegationAmount)
                ? String(object.delegationAmount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.kIndex !== undefined && (obj.kIndex = message.kIndex);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseDelegator();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.kIndex = (_b = object.kIndex) !== null && _b !== void 0 ? _b : "0";
        message.delegationAmount = (_c = object.delegationAmount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        message.delegator = (_e = object.delegator) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseFunder() {
    return { account: "", poolId: "0", amount: "0" };
}
exports.Funder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFunder();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.account = reader.string();
                    break;
                case 1:
                    message.poolId = longToString(reader.uint64());
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
            account: isSet(object.account) ? String(object.account) : "",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFunder();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBasePool() {
    return {
        id: "0",
        creator: "",
        name: "",
        runtime: "",
        logo: "",
        versions: "",
        config: "",
        heightArchived: "0",
        bytesArchived: "0",
        totalBundles: "0",
        totalBundleRewards: "0",
        startHeight: "0",
        uploadInterval: "0",
        operatingCost: "0",
        paused: false,
        funders: [],
        lowestFunder: "",
        totalFunds: "0",
        stakers: [],
        lowestStaker: "",
        totalStake: "0",
        totalDelegation: "0",
        bundleProposal: undefined,
        maxBundleSize: "0",
        protocol: undefined,
        upgradePlan: undefined
    };
}
exports.Pool = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "0") {
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
        if (message.heightArchived !== "0") {
            writer.uint32(64).uint64(message.heightArchived);
        }
        if (message.bytesArchived !== "0") {
            writer.uint32(72).uint64(message.bytesArchived);
        }
        if (message.totalBundles !== "0") {
            writer.uint32(80).uint64(message.totalBundles);
        }
        if (message.totalBundleRewards !== "0") {
            writer.uint32(88).uint64(message.totalBundleRewards);
        }
        if (message.startHeight !== "0") {
            writer.uint32(96).uint64(message.startHeight);
        }
        if (message.uploadInterval !== "0") {
            writer.uint32(104).uint64(message.uploadInterval);
        }
        if (message.operatingCost !== "0") {
            writer.uint32(112).uint64(message.operatingCost);
        }
        if (message.paused === true) {
            writer.uint32(120).bool(message.paused);
        }
        for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(130).string(v);
        }
        if (message.lowestFunder !== "") {
            writer.uint32(138).string(message.lowestFunder);
        }
        if (message.totalFunds !== "0") {
            writer.uint32(144).uint64(message.totalFunds);
        }
        for (var _b = 0, _c = message.stakers; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(154).string(v);
        }
        if (message.lowestStaker !== "") {
            writer.uint32(162).string(message.lowestStaker);
        }
        if (message.totalStake !== "0") {
            writer.uint32(168).uint64(message.totalStake);
        }
        if (message.totalDelegation !== "0") {
            writer.uint32(176).uint64(message.totalDelegation);
        }
        if (message.bundleProposal !== undefined) {
            exports.BundleProposal.encode(message.bundleProposal, writer.uint32(186).fork()).ldelim();
        }
        if (message.maxBundleSize !== "0") {
            writer.uint32(192).uint64(message.maxBundleSize);
        }
        if (message.protocol !== undefined) {
            exports.Protocol.encode(message.protocol, writer.uint32(202).fork()).ldelim();
        }
        if (message.upgradePlan !== undefined) {
            exports.UpgradePlan.encode(message.upgradePlan, writer.uint32(210).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePool();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToString(reader.uint64());
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
                    message.heightArchived = longToString(reader.uint64());
                    break;
                case 9:
                    message.bytesArchived = longToString(reader.uint64());
                    break;
                case 10:
                    message.totalBundles = longToString(reader.uint64());
                    break;
                case 11:
                    message.totalBundleRewards = longToString(reader.uint64());
                    break;
                case 12:
                    message.startHeight = longToString(reader.uint64());
                    break;
                case 13:
                    message.uploadInterval = longToString(reader.uint64());
                    break;
                case 14:
                    message.operatingCost = longToString(reader.uint64());
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
                    message.totalFunds = longToString(reader.uint64());
                    break;
                case 19:
                    message.stakers.push(reader.string());
                    break;
                case 20:
                    message.lowestStaker = reader.string();
                    break;
                case 21:
                    message.totalStake = longToString(reader.uint64());
                    break;
                case 22:
                    message.totalDelegation = longToString(reader.uint64());
                    break;
                case 23:
                    message.bundleProposal = exports.BundleProposal.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.maxBundleSize = longToString(reader.uint64());
                    break;
                case 25:
                    message.protocol = exports.Protocol.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.upgradePlan = exports.UpgradePlan.decode(reader, reader.uint32());
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
            id: isSet(object.id) ? String(object.id) : "0",
            creator: isSet(object.creator) ? String(object.creator) : "",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            versions: isSet(object.versions) ? String(object.versions) : "",
            config: isSet(object.config) ? String(object.config) : "",
            heightArchived: isSet(object.heightArchived)
                ? String(object.heightArchived)
                : "0",
            bytesArchived: isSet(object.bytesArchived)
                ? String(object.bytesArchived)
                : "0",
            totalBundles: isSet(object.totalBundles)
                ? String(object.totalBundles)
                : "0",
            totalBundleRewards: isSet(object.totalBundleRewards)
                ? String(object.totalBundleRewards)
                : "0",
            startHeight: isSet(object.startHeight) ? String(object.startHeight) : "0",
            uploadInterval: isSet(object.uploadInterval)
                ? String(object.uploadInterval)
                : "0",
            operatingCost: isSet(object.operatingCost)
                ? String(object.operatingCost)
                : "0",
            paused: isSet(object.paused) ? Boolean(object.paused) : false,
            funders: Array.isArray(object === null || object === void 0 ? void 0 : object.funders)
                ? object.funders.map(function (e) { return String(e); })
                : [],
            lowestFunder: isSet(object.lowestFunder)
                ? String(object.lowestFunder)
                : "",
            totalFunds: isSet(object.totalFunds) ? String(object.totalFunds) : "0",
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers)
                ? object.stakers.map(function (e) { return String(e); })
                : [],
            lowestStaker: isSet(object.lowestStaker)
                ? String(object.lowestStaker)
                : "",
            totalStake: isSet(object.totalStake) ? String(object.totalStake) : "0",
            totalDelegation: isSet(object.totalDelegation)
                ? String(object.totalDelegation)
                : "0",
            bundleProposal: isSet(object.bundleProposal)
                ? exports.BundleProposal.fromJSON(object.bundleProposal)
                : undefined,
            maxBundleSize: isSet(object.maxBundleSize)
                ? String(object.maxBundleSize)
                : "0",
            protocol: isSet(object.protocol)
                ? exports.Protocol.fromJSON(object.protocol)
                : undefined,
            upgradePlan: isSet(object.upgradePlan)
                ? exports.UpgradePlan.fromJSON(object.upgradePlan)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.versions !== undefined && (obj.versions = message.versions);
        message.config !== undefined && (obj.config = message.config);
        message.heightArchived !== undefined &&
            (obj.heightArchived = message.heightArchived);
        message.bytesArchived !== undefined &&
            (obj.bytesArchived = message.bytesArchived);
        message.totalBundles !== undefined &&
            (obj.totalBundles = message.totalBundles);
        message.totalBundleRewards !== undefined &&
            (obj.totalBundleRewards = message.totalBundleRewards);
        message.startHeight !== undefined &&
            (obj.startHeight = message.startHeight);
        message.uploadInterval !== undefined &&
            (obj.uploadInterval = message.uploadInterval);
        message.operatingCost !== undefined &&
            (obj.operatingCost = message.operatingCost);
        message.paused !== undefined && (obj.paused = message.paused);
        if (message.funders) {
            obj.funders = message.funders.map(function (e) { return e; });
        }
        else {
            obj.funders = [];
        }
        message.lowestFunder !== undefined &&
            (obj.lowestFunder = message.lowestFunder);
        message.totalFunds !== undefined && (obj.totalFunds = message.totalFunds);
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e; });
        }
        else {
            obj.stakers = [];
        }
        message.lowestStaker !== undefined &&
            (obj.lowestStaker = message.lowestStaker);
        message.totalStake !== undefined && (obj.totalStake = message.totalStake);
        message.totalDelegation !== undefined &&
            (obj.totalDelegation = message.totalDelegation);
        message.bundleProposal !== undefined &&
            (obj.bundleProposal = message.bundleProposal
                ? exports.BundleProposal.toJSON(message.bundleProposal)
                : undefined);
        message.maxBundleSize !== undefined &&
            (obj.maxBundleSize = message.maxBundleSize);
        message.protocol !== undefined &&
            (obj.protocol = message.protocol
                ? exports.Protocol.toJSON(message.protocol)
                : undefined);
        message.upgradePlan !== undefined &&
            (obj.upgradePlan = message.upgradePlan
                ? exports.UpgradePlan.toJSON(message.upgradePlan)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
        var message = createBasePool();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.creator = (_b = object.creator) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.runtime = (_d = object.runtime) !== null && _d !== void 0 ? _d : "";
        message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
        message.versions = (_f = object.versions) !== null && _f !== void 0 ? _f : "";
        message.config = (_g = object.config) !== null && _g !== void 0 ? _g : "";
        message.heightArchived = (_h = object.heightArchived) !== null && _h !== void 0 ? _h : "0";
        message.bytesArchived = (_j = object.bytesArchived) !== null && _j !== void 0 ? _j : "0";
        message.totalBundles = (_k = object.totalBundles) !== null && _k !== void 0 ? _k : "0";
        message.totalBundleRewards = (_l = object.totalBundleRewards) !== null && _l !== void 0 ? _l : "0";
        message.startHeight = (_m = object.startHeight) !== null && _m !== void 0 ? _m : "0";
        message.uploadInterval = (_o = object.uploadInterval) !== null && _o !== void 0 ? _o : "0";
        message.operatingCost = (_p = object.operatingCost) !== null && _p !== void 0 ? _p : "0";
        message.paused = (_q = object.paused) !== null && _q !== void 0 ? _q : false;
        message.funders = ((_r = object.funders) === null || _r === void 0 ? void 0 : _r.map(function (e) { return e; })) || [];
        message.lowestFunder = (_s = object.lowestFunder) !== null && _s !== void 0 ? _s : "";
        message.totalFunds = (_t = object.totalFunds) !== null && _t !== void 0 ? _t : "0";
        message.stakers = ((_u = object.stakers) === null || _u === void 0 ? void 0 : _u.map(function (e) { return e; })) || [];
        message.lowestStaker = (_v = object.lowestStaker) !== null && _v !== void 0 ? _v : "";
        message.totalStake = (_w = object.totalStake) !== null && _w !== void 0 ? _w : "0";
        message.totalDelegation = (_x = object.totalDelegation) !== null && _x !== void 0 ? _x : "0";
        message.bundleProposal =
            object.bundleProposal !== undefined && object.bundleProposal !== null
                ? exports.BundleProposal.fromPartial(object.bundleProposal)
                : undefined;
        message.maxBundleSize = (_y = object.maxBundleSize) !== null && _y !== void 0 ? _y : "0";
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? exports.Protocol.fromPartial(object.protocol)
                : undefined;
        message.upgradePlan =
            object.upgradePlan !== undefined && object.upgradePlan !== null
                ? exports.UpgradePlan.fromPartial(object.upgradePlan)
                : undefined;
        return message;
    }
};
function createBaseProposal() {
    return {
        bundleId: "",
        poolId: "0",
        uploader: "",
        fromHeight: "0",
        toHeight: "0",
        finalizedAt: "0"
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bundleId !== "") {
            writer.uint32(10).string(message.bundleId);
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.uploader !== "") {
            writer.uint32(26).string(message.uploader);
        }
        if (message.fromHeight !== "0") {
            writer.uint32(32).uint64(message.fromHeight);
        }
        if (message.toHeight !== "0") {
            writer.uint32(40).uint64(message.toHeight);
        }
        if (message.finalizedAt !== "0") {
            writer.uint32(48).uint64(message.finalizedAt);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bundleId = reader.string();
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
                    message.uploader = reader.string();
                    break;
                case 4:
                    message.fromHeight = longToString(reader.uint64());
                    break;
                case 5:
                    message.toHeight = longToString(reader.uint64());
                    break;
                case 6:
                    message.finalizedAt = longToString(reader.uint64());
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
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : "",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            fromHeight: isSet(object.fromHeight) ? String(object.fromHeight) : "0",
            toHeight: isSet(object.toHeight) ? String(object.toHeight) : "0",
            finalizedAt: isSet(object.finalizedAt) ? String(object.finalizedAt) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.fromHeight !== undefined && (obj.fromHeight = message.fromHeight);
        message.toHeight !== undefined && (obj.toHeight = message.toHeight);
        message.finalizedAt !== undefined &&
            (obj.finalizedAt = message.finalizedAt);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseProposal();
        message.bundleId = (_a = object.bundleId) !== null && _a !== void 0 ? _a : "";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.uploader = (_c = object.uploader) !== null && _c !== void 0 ? _c : "";
        message.fromHeight = (_d = object.fromHeight) !== null && _d !== void 0 ? _d : "0";
        message.toHeight = (_e = object.toHeight) !== null && _e !== void 0 ? _e : "0";
        message.finalizedAt = (_f = object.finalizedAt) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseStaker() {
    return {
        account: "",
        poolId: "0",
        amount: "0",
        unbondingAmount: "0",
        commission: "",
        moniker: "",
        website: "",
        logo: "",
        points: "0"
    };
}
exports.Staker = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.unbondingAmount !== "0") {
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
        if (message.points !== "0") {
            writer.uint32(72).uint64(message.points);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStaker();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.unbondingAmount = longToString(reader.uint64());
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
                    message.points = longToString(reader.uint64());
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
            account: isSet(object.account) ? String(object.account) : "",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            unbondingAmount: isSet(object.unbondingAmount)
                ? String(object.unbondingAmount)
                : "0",
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            points: isSet(object.points) ? String(object.points) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.amount !== undefined && (obj.amount = message.amount);
        message.unbondingAmount !== undefined &&
            (obj.unbondingAmount = message.unbondingAmount);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        message.points !== undefined && (obj.points = message.points);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseStaker();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        message.unbondingAmount = (_d = object.unbondingAmount) !== null && _d !== void 0 ? _d : "0";
        message.commission = (_e = object.commission) !== null && _e !== void 0 ? _e : "";
        message.moniker = (_f = object.moniker) !== null && _f !== void 0 ? _f : "";
        message.website = (_g = object.website) !== null && _g !== void 0 ? _g : "";
        message.logo = (_h = object.logo) !== null && _h !== void 0 ? _h : "";
        message.points = (_j = object.points) !== null && _j !== void 0 ? _j : "0";
        return message;
    }
};
function createBaseUnbondingEntries() {
    return {
        index: "0",
        poolId: "0",
        staker: "",
        delegator: "",
        creationTime: "0",
        amount: "0"
    };
}
exports.UnbondingEntries = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.staker !== "") {
            writer.uint32(26).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(34).string(message.delegator);
        }
        if (message.creationTime !== "0") {
            writer.uint32(40).uint64(message.creationTime);
        }
        if (message.amount !== "0") {
            writer.uint32(48).uint64(message.amount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingEntries();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = longToString(reader.uint64());
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.delegator = reader.string();
                    break;
                case 5:
                    message.creationTime = longToString(reader.uint64());
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
            index: isSet(object.index) ? String(object.index) : "0",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            creationTime: isSet(object.creationTime)
                ? String(object.creationTime)
                : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.creationTime !== undefined &&
            (obj.creationTime = message.creationTime);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseUnbondingEntries();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.delegator = (_d = object.delegator) !== null && _d !== void 0 ? _d : "";
        message.creationTime = (_e = object.creationTime) !== null && _e !== void 0 ? _e : "0";
        message.amount = (_f = object.amount) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseUnbondingState() {
    return { lowIndex: "0", highIndex: "0" };
}
exports.UnbondingState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.lowIndex !== "0") {
            writer.uint32(8).uint64(message.lowIndex);
        }
        if (message.highIndex !== "0") {
            writer.uint32(16).uint64(message.highIndex);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnbondingState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.lowIndex = longToString(reader.uint64());
                    break;
                case 2:
                    message.highIndex = longToString(reader.uint64());
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
            lowIndex: isSet(object.lowIndex) ? String(object.lowIndex) : "0",
            highIndex: isSet(object.highIndex) ? String(object.highIndex) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.lowIndex !== undefined && (obj.lowIndex = message.lowIndex);
        message.highIndex !== undefined && (obj.highIndex = message.highIndex);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUnbondingState();
        message.lowIndex = (_a = object.lowIndex) !== null && _a !== void 0 ? _a : "0";
        message.highIndex = (_b = object.highIndex) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
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
