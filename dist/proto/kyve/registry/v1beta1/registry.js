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
        next_uploader: "",
        bundle_id: "",
        byte_size: "0",
        from_height: "0",
        to_height: "0",
        created_at: "0",
        voters_valid: [],
        voters_invalid: [],
        voters_abstain: []
    };
}
exports.BundleProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.uploader !== "") {
            writer.uint32(10).string(message.uploader);
        }
        if (message.next_uploader !== "") {
            writer.uint32(18).string(message.next_uploader);
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
        if (message.created_at !== "0") {
            writer.uint32(56).uint64(message.created_at);
        }
        for (var _i = 0, _a = message.voters_valid; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(66).string(v);
        }
        for (var _b = 0, _c = message.voters_invalid; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(74).string(v);
        }
        for (var _d = 0, _e = message.voters_abstain; _d < _e.length; _d++) {
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
                    message.next_uploader = reader.string();
                    break;
                case 3:
                    message.bundle_id = reader.string();
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
                    message.created_at = longToString(reader.uint64());
                    break;
                case 8:
                    message.voters_valid.push(reader.string());
                    break;
                case 9:
                    message.voters_invalid.push(reader.string());
                    break;
                case 10:
                    message.voters_abstain.push(reader.string());
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
            next_uploader: isSet(object.next_uploader)
                ? String(object.next_uploader)
                : "",
            bundle_id: isSet(object.bundle_id) ? String(object.bundle_id) : "",
            byte_size: isSet(object.byte_size) ? String(object.byte_size) : "0",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0",
            to_height: isSet(object.to_height) ? String(object.to_height) : "0",
            created_at: isSet(object.created_at) ? String(object.created_at) : "0",
            voters_valid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_valid)
                ? object.voters_valid.map(function (e) { return String(e); })
                : [],
            voters_invalid: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_invalid)
                ? object.voters_invalid.map(function (e) { return String(e); })
                : [],
            voters_abstain: Array.isArray(object === null || object === void 0 ? void 0 : object.voters_abstain)
                ? object.voters_abstain.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.next_uploader !== undefined &&
            (obj.next_uploader = message.next_uploader);
        message.bundle_id !== undefined && (obj.bundle_id = message.bundle_id);
        message.byte_size !== undefined && (obj.byte_size = message.byte_size);
        message.from_height !== undefined &&
            (obj.from_height = message.from_height);
        message.to_height !== undefined && (obj.to_height = message.to_height);
        message.created_at !== undefined && (obj.created_at = message.created_at);
        if (message.voters_valid) {
            obj.voters_valid = message.voters_valid.map(function (e) { return e; });
        }
        else {
            obj.voters_valid = [];
        }
        if (message.voters_invalid) {
            obj.voters_invalid = message.voters_invalid.map(function (e) { return e; });
        }
        else {
            obj.voters_invalid = [];
        }
        if (message.voters_abstain) {
            obj.voters_abstain = message.voters_abstain.map(function (e) { return e; });
        }
        else {
            obj.voters_abstain = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseBundleProposal();
        message.uploader = (_a = object.uploader) !== null && _a !== void 0 ? _a : "";
        message.next_uploader = (_b = object.next_uploader) !== null && _b !== void 0 ? _b : "";
        message.bundle_id = (_c = object.bundle_id) !== null && _c !== void 0 ? _c : "";
        message.byte_size = (_d = object.byte_size) !== null && _d !== void 0 ? _d : "0";
        message.from_height = (_e = object.from_height) !== null && _e !== void 0 ? _e : "0";
        message.to_height = (_f = object.to_height) !== null && _f !== void 0 ? _f : "0";
        message.created_at = (_g = object.created_at) !== null && _g !== void 0 ? _g : "0";
        message.voters_valid = ((_h = object.voters_valid) === null || _h === void 0 ? void 0 : _h.map(function (e) { return e; })) || [];
        message.voters_invalid = ((_j = object.voters_invalid) === null || _j === void 0 ? void 0 : _j.map(function (e) { return e; })) || [];
        message.voters_abstain = ((_k = object.voters_abstain) === null || _k === void 0 ? void 0 : _k.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseProtocol() {
    return { version: "", binaries: "", last_upgrade: "0" };
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
        if (message.last_upgrade !== "0") {
            writer.uint32(24).uint64(message.last_upgrade);
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
                    message.last_upgrade = longToString(reader.uint64());
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
            last_upgrade: isSet(object.last_upgrade)
                ? String(object.last_upgrade)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.last_upgrade !== undefined &&
            (obj.last_upgrade = message.last_upgrade);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseProtocol();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.last_upgrade = (_c = object.last_upgrade) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseUpgradePlan() {
    return { version: "", binaries: "", scheduled_at: "0", duration: "0" };
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
        if (message.scheduled_at !== "0") {
            writer.uint32(24).uint64(message.scheduled_at);
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
                    message.scheduled_at = longToString(reader.uint64());
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
            scheduled_at: isSet(object.scheduled_at)
                ? String(object.scheduled_at)
                : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.version !== undefined && (obj.version = message.version);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        message.scheduled_at !== undefined &&
            (obj.scheduled_at = message.scheduled_at);
        message.duration !== undefined && (obj.duration = message.duration);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseUpgradePlan();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : "";
        message.binaries = (_b = object.binaries) !== null && _b !== void 0 ? _b : "";
        message.scheduled_at = (_c = object.scheduled_at) !== null && _c !== void 0 ? _c : "0";
        message.duration = (_d = object.duration) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseDelegationEntries() {
    return { id: "0", balance: "", staker: "", k_index: "0" };
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
        if (message.k_index !== "0") {
            writer.uint32(32).uint64(message.k_index);
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
                    message.k_index = longToString(reader.uint64());
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
            k_index: isSet(object.k_index) ? String(object.k_index) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.balance !== undefined && (obj.balance = message.balance);
        message.staker !== undefined && (obj.staker = message.staker);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegationEntries();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.balance = (_b = object.balance) !== null && _b !== void 0 ? _b : "";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.k_index = (_d = object.k_index) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseDelegationPoolData() {
    return {
        id: "0",
        staker: "",
        current_rewards: "0",
        total_delegation: "0",
        latest_index_k: "0",
        delegator_count: "0",
        latest_index_was_undelegation: false
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
        if (message.current_rewards !== "0") {
            writer.uint32(24).uint64(message.current_rewards);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(32).uint64(message.total_delegation);
        }
        if (message.latest_index_k !== "0") {
            writer.uint32(40).uint64(message.latest_index_k);
        }
        if (message.delegator_count !== "0") {
            writer.uint32(48).uint64(message.delegator_count);
        }
        if (message.latest_index_was_undelegation === true) {
            writer.uint32(56).bool(message.latest_index_was_undelegation);
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
                    message.current_rewards = longToString(reader.uint64());
                    break;
                case 4:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 5:
                    message.latest_index_k = longToString(reader.uint64());
                    break;
                case 6:
                    message.delegator_count = longToString(reader.uint64());
                    break;
                case 7:
                    message.latest_index_was_undelegation = reader.bool();
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
            current_rewards: isSet(object.current_rewards)
                ? String(object.current_rewards)
                : "0",
            total_delegation: isSet(object.total_delegation)
                ? String(object.total_delegation)
                : "0",
            latest_index_k: isSet(object.latest_index_k)
                ? String(object.latest_index_k)
                : "0",
            delegator_count: isSet(object.delegator_count)
                ? String(object.delegator_count)
                : "0",
            latest_index_was_undelegation: isSet(object.latest_index_was_undelegation)
                ? Boolean(object.latest_index_was_undelegation)
                : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.current_rewards !== undefined &&
            (obj.current_rewards = message.current_rewards);
        message.total_delegation !== undefined &&
            (obj.total_delegation = message.total_delegation);
        message.latest_index_k !== undefined &&
            (obj.latest_index_k = message.latest_index_k);
        message.delegator_count !== undefined &&
            (obj.delegator_count = message.delegator_count);
        message.latest_index_was_undelegation !== undefined &&
            (obj.latest_index_was_undelegation =
                message.latest_index_was_undelegation);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseDelegationPoolData();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.current_rewards = (_c = object.current_rewards) !== null && _c !== void 0 ? _c : "0";
        message.total_delegation = (_d = object.total_delegation) !== null && _d !== void 0 ? _d : "0";
        message.latest_index_k = (_e = object.latest_index_k) !== null && _e !== void 0 ? _e : "0";
        message.delegator_count = (_f = object.delegator_count) !== null && _f !== void 0 ? _f : "0";
        message.latest_index_was_undelegation =
            (_g = object.latest_index_was_undelegation) !== null && _g !== void 0 ? _g : false;
        return message;
    }
};
function createBaseDelegator() {
    return {
        id: "0",
        k_index: "0",
        delegation_amount: "0",
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
        if (message.k_index !== "0") {
            writer.uint32(16).uint64(message.k_index);
        }
        if (message.delegation_amount !== "0") {
            writer.uint32(24).uint64(message.delegation_amount);
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
                    message.k_index = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegation_amount = longToString(reader.uint64());
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
            k_index: isSet(object.k_index) ? String(object.k_index) : "0",
            delegation_amount: isSet(object.delegation_amount)
                ? String(object.delegation_amount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.k_index !== undefined && (obj.k_index = message.k_index);
        message.delegation_amount !== undefined &&
            (obj.delegation_amount = message.delegation_amount);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseDelegator();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        message.k_index = (_b = object.k_index) !== null && _b !== void 0 ? _b : "0";
        message.delegation_amount = (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        message.delegator = (_e = object.delegator) !== null && _e !== void 0 ? _e : "";
        return message;
    }
};
function createBaseFunder() {
    return { account: "", pool_id: "0", amount: "0" };
}
exports.Funder = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(18).string(message.account);
        }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseFunder();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
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
        height_archived: "0",
        bytes_archived: "0",
        total_bundles: "0",
        total_bundle_rewards: "0",
        start_height: "0",
        upload_interval: "0",
        operating_cost: "0",
        paused: false,
        funders: [],
        lowest_funder: "",
        total_funds: "0",
        stakers: [],
        lowest_staker: "",
        total_stake: "0",
        total_delegation: "0",
        bundle_proposal: undefined,
        max_bundle_size: "0",
        protocol: undefined,
        upgrade_plan: undefined
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
        if (message.height_archived !== "0") {
            writer.uint32(64).uint64(message.height_archived);
        }
        if (message.bytes_archived !== "0") {
            writer.uint32(72).uint64(message.bytes_archived);
        }
        if (message.total_bundles !== "0") {
            writer.uint32(80).uint64(message.total_bundles);
        }
        if (message.total_bundle_rewards !== "0") {
            writer.uint32(88).uint64(message.total_bundle_rewards);
        }
        if (message.start_height !== "0") {
            writer.uint32(96).uint64(message.start_height);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(104).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(112).uint64(message.operating_cost);
        }
        if (message.paused === true) {
            writer.uint32(120).bool(message.paused);
        }
        for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(130).string(v);
        }
        if (message.lowest_funder !== "") {
            writer.uint32(138).string(message.lowest_funder);
        }
        if (message.total_funds !== "0") {
            writer.uint32(144).uint64(message.total_funds);
        }
        for (var _b = 0, _c = message.stakers; _b < _c.length; _b++) {
            var v = _c[_b];
            writer.uint32(154).string(v);
        }
        if (message.lowest_staker !== "") {
            writer.uint32(162).string(message.lowest_staker);
        }
        if (message.total_stake !== "0") {
            writer.uint32(168).uint64(message.total_stake);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(176).uint64(message.total_delegation);
        }
        if (message.bundle_proposal !== undefined) {
            exports.BundleProposal.encode(message.bundle_proposal, writer.uint32(186).fork()).ldelim();
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(192).uint64(message.max_bundle_size);
        }
        if (message.protocol !== undefined) {
            exports.Protocol.encode(message.protocol, writer.uint32(202).fork()).ldelim();
        }
        if (message.upgrade_plan !== undefined) {
            exports.UpgradePlan.encode(message.upgrade_plan, writer.uint32(210).fork()).ldelim();
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
                    message.height_archived = longToString(reader.uint64());
                    break;
                case 9:
                    message.bytes_archived = longToString(reader.uint64());
                    break;
                case 10:
                    message.total_bundles = longToString(reader.uint64());
                    break;
                case 11:
                    message.total_bundle_rewards = longToString(reader.uint64());
                    break;
                case 12:
                    message.start_height = longToString(reader.uint64());
                    break;
                case 13:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 14:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 15:
                    message.paused = reader.bool();
                    break;
                case 16:
                    message.funders.push(reader.string());
                    break;
                case 17:
                    message.lowest_funder = reader.string();
                    break;
                case 18:
                    message.total_funds = longToString(reader.uint64());
                    break;
                case 19:
                    message.stakers.push(reader.string());
                    break;
                case 20:
                    message.lowest_staker = reader.string();
                    break;
                case 21:
                    message.total_stake = longToString(reader.uint64());
                    break;
                case 22:
                    message.total_delegation = longToString(reader.uint64());
                    break;
                case 23:
                    message.bundle_proposal = exports.BundleProposal.decode(reader, reader.uint32());
                    break;
                case 24:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 25:
                    message.protocol = exports.Protocol.decode(reader, reader.uint32());
                    break;
                case 26:
                    message.upgrade_plan = exports.UpgradePlan.decode(reader, reader.uint32());
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
            height_archived: isSet(object.height_archived)
                ? String(object.height_archived)
                : "0",
            bytes_archived: isSet(object.bytes_archived)
                ? String(object.bytes_archived)
                : "0",
            total_bundles: isSet(object.total_bundles)
                ? String(object.total_bundles)
                : "0",
            total_bundle_rewards: isSet(object.total_bundle_rewards)
                ? String(object.total_bundle_rewards)
                : "0",
            start_height: isSet(object.start_height)
                ? String(object.start_height)
                : "0",
            upload_interval: isSet(object.upload_interval)
                ? String(object.upload_interval)
                : "0",
            operating_cost: isSet(object.operating_cost)
                ? String(object.operating_cost)
                : "0",
            paused: isSet(object.paused) ? Boolean(object.paused) : false,
            funders: Array.isArray(object === null || object === void 0 ? void 0 : object.funders)
                ? object.funders.map(function (e) { return String(e); })
                : [],
            lowest_funder: isSet(object.lowest_funder)
                ? String(object.lowest_funder)
                : "",
            total_funds: isSet(object.total_funds) ? String(object.total_funds) : "0",
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers)
                ? object.stakers.map(function (e) { return String(e); })
                : [],
            lowest_staker: isSet(object.lowest_staker)
                ? String(object.lowest_staker)
                : "",
            total_stake: isSet(object.total_stake) ? String(object.total_stake) : "0",
            total_delegation: isSet(object.total_delegation)
                ? String(object.total_delegation)
                : "0",
            bundle_proposal: isSet(object.bundle_proposal)
                ? exports.BundleProposal.fromJSON(object.bundle_proposal)
                : undefined,
            max_bundle_size: isSet(object.max_bundle_size)
                ? String(object.max_bundle_size)
                : "0",
            protocol: isSet(object.protocol)
                ? exports.Protocol.fromJSON(object.protocol)
                : undefined,
            upgrade_plan: isSet(object.upgrade_plan)
                ? exports.UpgradePlan.fromJSON(object.upgrade_plan)
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
        message.height_archived !== undefined &&
            (obj.height_archived = message.height_archived);
        message.bytes_archived !== undefined &&
            (obj.bytes_archived = message.bytes_archived);
        message.total_bundles !== undefined &&
            (obj.total_bundles = message.total_bundles);
        message.total_bundle_rewards !== undefined &&
            (obj.total_bundle_rewards = message.total_bundle_rewards);
        message.start_height !== undefined &&
            (obj.start_height = message.start_height);
        message.upload_interval !== undefined &&
            (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined &&
            (obj.operating_cost = message.operating_cost);
        message.paused !== undefined && (obj.paused = message.paused);
        if (message.funders) {
            obj.funders = message.funders.map(function (e) { return e; });
        }
        else {
            obj.funders = [];
        }
        message.lowest_funder !== undefined &&
            (obj.lowest_funder = message.lowest_funder);
        message.total_funds !== undefined &&
            (obj.total_funds = message.total_funds);
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) { return e; });
        }
        else {
            obj.stakers = [];
        }
        message.lowest_staker !== undefined &&
            (obj.lowest_staker = message.lowest_staker);
        message.total_stake !== undefined &&
            (obj.total_stake = message.total_stake);
        message.total_delegation !== undefined &&
            (obj.total_delegation = message.total_delegation);
        message.bundle_proposal !== undefined &&
            (obj.bundle_proposal = message.bundle_proposal
                ? exports.BundleProposal.toJSON(message.bundle_proposal)
                : undefined);
        message.max_bundle_size !== undefined &&
            (obj.max_bundle_size = message.max_bundle_size);
        message.protocol !== undefined &&
            (obj.protocol = message.protocol
                ? exports.Protocol.toJSON(message.protocol)
                : undefined);
        message.upgrade_plan !== undefined &&
            (obj.upgrade_plan = message.upgrade_plan
                ? exports.UpgradePlan.toJSON(message.upgrade_plan)
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
        message.height_archived = (_h = object.height_archived) !== null && _h !== void 0 ? _h : "0";
        message.bytes_archived = (_j = object.bytes_archived) !== null && _j !== void 0 ? _j : "0";
        message.total_bundles = (_k = object.total_bundles) !== null && _k !== void 0 ? _k : "0";
        message.total_bundle_rewards = (_l = object.total_bundle_rewards) !== null && _l !== void 0 ? _l : "0";
        message.start_height = (_m = object.start_height) !== null && _m !== void 0 ? _m : "0";
        message.upload_interval = (_o = object.upload_interval) !== null && _o !== void 0 ? _o : "0";
        message.operating_cost = (_p = object.operating_cost) !== null && _p !== void 0 ? _p : "0";
        message.paused = (_q = object.paused) !== null && _q !== void 0 ? _q : false;
        message.funders = ((_r = object.funders) === null || _r === void 0 ? void 0 : _r.map(function (e) { return e; })) || [];
        message.lowest_funder = (_s = object.lowest_funder) !== null && _s !== void 0 ? _s : "";
        message.total_funds = (_t = object.total_funds) !== null && _t !== void 0 ? _t : "0";
        message.stakers = ((_u = object.stakers) === null || _u === void 0 ? void 0 : _u.map(function (e) { return e; })) || [];
        message.lowest_staker = (_v = object.lowest_staker) !== null && _v !== void 0 ? _v : "";
        message.total_stake = (_w = object.total_stake) !== null && _w !== void 0 ? _w : "0";
        message.total_delegation = (_x = object.total_delegation) !== null && _x !== void 0 ? _x : "0";
        message.bundle_proposal =
            object.bundle_proposal !== undefined && object.bundle_proposal !== null
                ? exports.BundleProposal.fromPartial(object.bundle_proposal)
                : undefined;
        message.max_bundle_size = (_y = object.max_bundle_size) !== null && _y !== void 0 ? _y : "0";
        message.protocol =
            object.protocol !== undefined && object.protocol !== null
                ? exports.Protocol.fromPartial(object.protocol)
                : undefined;
        message.upgrade_plan =
            object.upgrade_plan !== undefined && object.upgrade_plan !== null
                ? exports.UpgradePlan.fromPartial(object.upgrade_plan)
                : undefined;
        return message;
    }
};
function createBaseProposal() {
    return {
        bundle_id: "",
        pool_id: "0",
        uploader: "",
        from_height: "0",
        to_height: "0",
        finalized_at: "0"
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bundle_id !== "") {
            writer.uint32(10).string(message.bundle_id);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.uploader !== "") {
            writer.uint32(26).string(message.uploader);
        }
        if (message.from_height !== "0") {
            writer.uint32(32).uint64(message.from_height);
        }
        if (message.to_height !== "0") {
            writer.uint32(40).uint64(message.to_height);
        }
        if (message.finalized_at !== "0") {
            writer.uint32(48).uint64(message.finalized_at);
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
                    message.bundle_id = reader.string();
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.uploader = reader.string();
                    break;
                case 4:
                    message.from_height = longToString(reader.uint64());
                    break;
                case 5:
                    message.to_height = longToString(reader.uint64());
                    break;
                case 6:
                    message.finalized_at = longToString(reader.uint64());
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
            bundle_id: isSet(object.bundle_id) ? String(object.bundle_id) : "",
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            uploader: isSet(object.uploader) ? String(object.uploader) : "",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0",
            to_height: isSet(object.to_height) ? String(object.to_height) : "0",
            finalized_at: isSet(object.finalized_at)
                ? String(object.finalized_at)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bundle_id !== undefined && (obj.bundle_id = message.bundle_id);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.uploader !== undefined && (obj.uploader = message.uploader);
        message.from_height !== undefined &&
            (obj.from_height = message.from_height);
        message.to_height !== undefined && (obj.to_height = message.to_height);
        message.finalized_at !== undefined &&
            (obj.finalized_at = message.finalized_at);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseProposal();
        message.bundle_id = (_a = object.bundle_id) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.uploader = (_c = object.uploader) !== null && _c !== void 0 ? _c : "";
        message.from_height = (_d = object.from_height) !== null && _d !== void 0 ? _d : "0";
        message.to_height = (_e = object.to_height) !== null && _e !== void 0 ? _e : "0";
        message.finalized_at = (_f = object.finalized_at) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseStaker() {
    return {
        account: "",
        pool_id: "0",
        amount: "0",
        unbonding_amount: "0",
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
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.amount !== "0") {
            writer.uint32(24).uint64(message.amount);
        }
        if (message.unbonding_amount !== "0") {
            writer.uint32(32).uint64(message.unbonding_amount);
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.unbonding_amount = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            unbonding_amount: isSet(object.unbonding_amount)
                ? String(object.unbonding_amount)
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
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.amount !== undefined && (obj.amount = message.amount);
        message.unbonding_amount !== undefined &&
            (obj.unbonding_amount = message.unbonding_amount);
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
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.amount = (_c = object.amount) !== null && _c !== void 0 ? _c : "0";
        message.unbonding_amount = (_d = object.unbonding_amount) !== null && _d !== void 0 ? _d : "0";
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
        pool_id: "0",
        staker: "",
        delegator: "",
        creation_time: "0",
        amount: "0"
    };
}
exports.UnbondingEntries = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.index !== "0") {
            writer.uint32(8).uint64(message.index);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.staker !== "") {
            writer.uint32(26).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(34).string(message.delegator);
        }
        if (message.creation_time !== "0") {
            writer.uint32(40).uint64(message.creation_time);
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = reader.string();
                    break;
                case 4:
                    message.delegator = reader.string();
                    break;
                case 5:
                    message.creation_time = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            creation_time: isSet(object.creation_time)
                ? String(object.creation_time)
                : "0",
            amount: isSet(object.amount) ? String(object.amount) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.index !== undefined && (obj.index = message.index);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.creation_time !== undefined &&
            (obj.creation_time = message.creation_time);
        message.amount !== undefined && (obj.amount = message.amount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseUnbondingEntries();
        message.index = (_a = object.index) !== null && _a !== void 0 ? _a : "0";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.staker = (_c = object.staker) !== null && _c !== void 0 ? _c : "";
        message.delegator = (_d = object.delegator) !== null && _d !== void 0 ? _d : "";
        message.creation_time = (_e = object.creation_time) !== null && _e !== void 0 ? _e : "0";
        message.amount = (_f = object.amount) !== null && _f !== void 0 ? _f : "0";
        return message;
    }
};
function createBaseUnbondingState() {
    return { low_index: "0", high_index: "0" };
}
exports.UnbondingState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.low_index !== "0") {
            writer.uint32(8).uint64(message.low_index);
        }
        if (message.high_index !== "0") {
            writer.uint32(16).uint64(message.high_index);
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
                    message.low_index = longToString(reader.uint64());
                    break;
                case 2:
                    message.high_index = longToString(reader.uint64());
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
            low_index: isSet(object.low_index) ? String(object.low_index) : "0",
            high_index: isSet(object.high_index) ? String(object.high_index) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.low_index !== undefined && (obj.low_index = message.low_index);
        message.high_index !== undefined && (obj.high_index = message.high_index);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseUnbondingState();
        message.low_index = (_a = object.low_index) !== null && _a !== void 0 ? _a : "0";
        message.high_index = (_b = object.high_index) !== null && _b !== void 0 ? _b : "0";
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
