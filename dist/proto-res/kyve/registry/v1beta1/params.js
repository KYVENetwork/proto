"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Params = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseParams() {
    return {
        vote_slash: "",
        upload_slash: "",
        timeout_slash: "",
        upload_timeout: "0",
        storage_cost: "0",
        network_fee: "",
        max_points: "0",
        unbonding_staking_time: "0",
        unbonding_delegation_time: "0",
        redelegation_cooldown: "0",
        redelegation_max_amount: "0",
        commission_change_time: "0"
    };
}
exports.Params = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.vote_slash !== "") {
            writer.uint32(26).string(message.vote_slash);
        }
        if (message.upload_slash !== "") {
            writer.uint32(34).string(message.upload_slash);
        }
        if (message.timeout_slash !== "") {
            writer.uint32(42).string(message.timeout_slash);
        }
        if (message.upload_timeout !== "0") {
            writer.uint32(48).uint64(message.upload_timeout);
        }
        if (message.storage_cost !== "0") {
            writer.uint32(56).uint64(message.storage_cost);
        }
        if (message.network_fee !== "") {
            writer.uint32(66).string(message.network_fee);
        }
        if (message.max_points !== "0") {
            writer.uint32(72).uint64(message.max_points);
        }
        if (message.unbonding_staking_time !== "0") {
            writer.uint32(80).uint64(message.unbonding_staking_time);
        }
        if (message.unbonding_delegation_time !== "0") {
            writer.uint32(88).uint64(message.unbonding_delegation_time);
        }
        if (message.redelegation_cooldown !== "0") {
            writer.uint32(96).uint64(message.redelegation_cooldown);
        }
        if (message.redelegation_max_amount !== "0") {
            writer.uint32(104).uint64(message.redelegation_max_amount);
        }
        if (message.commission_change_time !== "0") {
            writer.uint32(112).uint64(message.commission_change_time);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 3:
                    message.vote_slash = reader.string();
                    break;
                case 4:
                    message.upload_slash = reader.string();
                    break;
                case 5:
                    message.timeout_slash = reader.string();
                    break;
                case 6:
                    message.upload_timeout = longToString(reader.uint64());
                    break;
                case 7:
                    message.storage_cost = longToString(reader.uint64());
                    break;
                case 8:
                    message.network_fee = reader.string();
                    break;
                case 9:
                    message.max_points = longToString(reader.uint64());
                    break;
                case 10:
                    message.unbonding_staking_time = longToString(reader.uint64());
                    break;
                case 11:
                    message.unbonding_delegation_time = longToString(reader.uint64());
                    break;
                case 12:
                    message.redelegation_cooldown = longToString(reader.uint64());
                    break;
                case 13:
                    message.redelegation_max_amount = longToString(reader.uint64());
                    break;
                case 14:
                    message.commission_change_time = longToString(reader.uint64());
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
            vote_slash: isSet(object.vote_slash) ? String(object.vote_slash) : "",
            upload_slash: isSet(object.upload_slash)
                ? String(object.upload_slash)
                : "",
            timeout_slash: isSet(object.timeout_slash)
                ? String(object.timeout_slash)
                : "",
            upload_timeout: isSet(object.upload_timeout)
                ? String(object.upload_timeout)
                : "0",
            storage_cost: isSet(object.storage_cost)
                ? String(object.storage_cost)
                : "0",
            network_fee: isSet(object.network_fee) ? String(object.network_fee) : "",
            max_points: isSet(object.max_points) ? String(object.max_points) : "0",
            unbonding_staking_time: isSet(object.unbonding_staking_time)
                ? String(object.unbonding_staking_time)
                : "0",
            unbonding_delegation_time: isSet(object.unbonding_delegation_time)
                ? String(object.unbonding_delegation_time)
                : "0",
            redelegation_cooldown: isSet(object.redelegation_cooldown)
                ? String(object.redelegation_cooldown)
                : "0",
            redelegation_max_amount: isSet(object.redelegation_max_amount)
                ? String(object.redelegation_max_amount)
                : "0",
            commission_change_time: isSet(object.commission_change_time)
                ? String(object.commission_change_time)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote_slash !== undefined && (obj.vote_slash = message.vote_slash);
        message.upload_slash !== undefined &&
            (obj.upload_slash = message.upload_slash);
        message.timeout_slash !== undefined &&
            (obj.timeout_slash = message.timeout_slash);
        message.upload_timeout !== undefined &&
            (obj.upload_timeout = message.upload_timeout);
        message.storage_cost !== undefined &&
            (obj.storage_cost = message.storage_cost);
        message.network_fee !== undefined &&
            (obj.network_fee = message.network_fee);
        message.max_points !== undefined && (obj.max_points = message.max_points);
        message.unbonding_staking_time !== undefined &&
            (obj.unbonding_staking_time = message.unbonding_staking_time);
        message.unbonding_delegation_time !== undefined &&
            (obj.unbonding_delegation_time = message.unbonding_delegation_time);
        message.redelegation_cooldown !== undefined &&
            (obj.redelegation_cooldown = message.redelegation_cooldown);
        message.redelegation_max_amount !== undefined &&
            (obj.redelegation_max_amount = message.redelegation_max_amount);
        message.commission_change_time !== undefined &&
            (obj.commission_change_time = message.commission_change_time);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseParams();
        message.vote_slash = (_a = object.vote_slash) !== null && _a !== void 0 ? _a : "";
        message.upload_slash = (_b = object.upload_slash) !== null && _b !== void 0 ? _b : "";
        message.timeout_slash = (_c = object.timeout_slash) !== null && _c !== void 0 ? _c : "";
        message.upload_timeout = (_d = object.upload_timeout) !== null && _d !== void 0 ? _d : "0";
        message.storage_cost = (_e = object.storage_cost) !== null && _e !== void 0 ? _e : "0";
        message.network_fee = (_f = object.network_fee) !== null && _f !== void 0 ? _f : "";
        message.max_points = (_g = object.max_points) !== null && _g !== void 0 ? _g : "0";
        message.unbonding_staking_time = (_h = object.unbonding_staking_time) !== null && _h !== void 0 ? _h : "0";
        message.unbonding_delegation_time = (_j = object.unbonding_delegation_time) !== null && _j !== void 0 ? _j : "0";
        message.redelegation_cooldown = (_k = object.redelegation_cooldown) !== null && _k !== void 0 ? _k : "0";
        message.redelegation_max_amount = (_l = object.redelegation_max_amount) !== null && _l !== void 0 ? _l : "0";
        message.commission_change_time = (_m = object.commission_change_time) !== null && _m !== void 0 ? _m : "0";
        return message;
    }
};
function longToString(long) {
    return long.toString();
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
