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
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
var params_1 = require("../../../kyve/registry/v1beta1/params");
var registry_1 = require("../../../kyve/registry/v1beta1/registry");
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseGenesisState() {
    return {
        params: undefined,
        poolList: [],
        poolCount: 0,
        funderList: [],
        stakerList: [],
        delegatorList: [],
        delegationPoolDataList: [],
        delegationEntriesList: [],
        proposalList: [],
        unbondingState: undefined,
        unbondingEntries: []
    };
}
exports.GenesisState = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.poolList; _i < _a.length; _i++) {
            var v = _a[_i];
            registry_1.Pool.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.poolCount !== 0) {
            writer.uint32(24).uint64(message.poolCount);
        }
        for (var _b = 0, _c = message.funderList; _b < _c.length; _b++) {
            var v = _c[_b];
            registry_1.Funder.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (var _d = 0, _e = message.stakerList; _d < _e.length; _d++) {
            var v = _e[_d];
            registry_1.Staker.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (var _f = 0, _g = message.delegatorList; _f < _g.length; _f++) {
            var v = _g[_f];
            registry_1.Delegator.encode(v, writer.uint32(50).fork()).ldelim();
        }
        for (var _h = 0, _j = message.delegationPoolDataList; _h < _j.length; _h++) {
            var v = _j[_h];
            registry_1.DelegationPoolData.encode(v, writer.uint32(58).fork()).ldelim();
        }
        for (var _k = 0, _l = message.delegationEntriesList; _k < _l.length; _k++) {
            var v = _l[_k];
            registry_1.DelegationEntries.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (var _m = 0, _o = message.proposalList; _m < _o.length; _m++) {
            var v = _o[_m];
            registry_1.Proposal.encode(v, writer.uint32(74).fork()).ldelim();
        }
        if (message.unbondingState !== undefined) {
            registry_1.UnbondingState.encode(message.unbondingState, writer.uint32(82).fork()).ldelim();
        }
        for (var _p = 0, _q = message.unbondingEntries; _p < _q.length; _p++) {
            var v = _q[_p];
            registry_1.UnbondingEntries.encode(v, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseGenesisState();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolList.push(registry_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.poolCount = longToNumber(reader.uint64());
                    break;
                case 4:
                    message.funderList.push(registry_1.Funder.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.stakerList.push(registry_1.Staker.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.delegatorList.push(registry_1.Delegator.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.delegationPoolDataList.push(registry_1.DelegationPoolData.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.delegationEntriesList.push(registry_1.DelegationEntries.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.proposalList.push(registry_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.unbondingState = registry_1.UnbondingState.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.unbondingEntries.push(registry_1.UnbondingEntries.decode(reader, reader.uint32()));
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined,
            poolList: Array.isArray(object === null || object === void 0 ? void 0 : object.poolList)
                ? object.poolList.map(function (e) { return registry_1.Pool.fromJSON(e); })
                : [],
            poolCount: isSet(object.poolCount) ? Number(object.poolCount) : 0,
            funderList: Array.isArray(object === null || object === void 0 ? void 0 : object.funderList)
                ? object.funderList.map(function (e) { return registry_1.Funder.fromJSON(e); })
                : [],
            stakerList: Array.isArray(object === null || object === void 0 ? void 0 : object.stakerList)
                ? object.stakerList.map(function (e) { return registry_1.Staker.fromJSON(e); })
                : [],
            delegatorList: Array.isArray(object === null || object === void 0 ? void 0 : object.delegatorList)
                ? object.delegatorList.map(function (e) { return registry_1.Delegator.fromJSON(e); })
                : [],
            delegationPoolDataList: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationPoolDataList)
                ? object.delegationPoolDataList.map(function (e) {
                    return registry_1.DelegationPoolData.fromJSON(e);
                })
                : [],
            delegationEntriesList: Array.isArray(object === null || object === void 0 ? void 0 : object.delegationEntriesList)
                ? object.delegationEntriesList.map(function (e) {
                    return registry_1.DelegationEntries.fromJSON(e);
                })
                : [],
            proposalList: Array.isArray(object === null || object === void 0 ? void 0 : object.proposalList)
                ? object.proposalList.map(function (e) { return registry_1.Proposal.fromJSON(e); })
                : [],
            unbondingState: isSet(object.unbondingState)
                ? registry_1.UnbondingState.fromJSON(object.unbondingState)
                : undefined,
            unbondingEntries: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondingEntries)
                ? object.unbondingEntries.map(function (e) { return registry_1.UnbondingEntries.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        if (message.poolList) {
            obj.poolList = message.poolList.map(function (e) {
                return e ? registry_1.Pool.toJSON(e) : undefined;
            });
        }
        else {
            obj.poolList = [];
        }
        message.poolCount !== undefined &&
            (obj.poolCount = Math.round(message.poolCount));
        if (message.funderList) {
            obj.funderList = message.funderList.map(function (e) {
                return e ? registry_1.Funder.toJSON(e) : undefined;
            });
        }
        else {
            obj.funderList = [];
        }
        if (message.stakerList) {
            obj.stakerList = message.stakerList.map(function (e) {
                return e ? registry_1.Staker.toJSON(e) : undefined;
            });
        }
        else {
            obj.stakerList = [];
        }
        if (message.delegatorList) {
            obj.delegatorList = message.delegatorList.map(function (e) {
                return e ? registry_1.Delegator.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegatorList = [];
        }
        if (message.delegationPoolDataList) {
            obj.delegationPoolDataList = message.delegationPoolDataList.map(function (e) {
                return e ? registry_1.DelegationPoolData.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegationPoolDataList = [];
        }
        if (message.delegationEntriesList) {
            obj.delegationEntriesList = message.delegationEntriesList.map(function (e) {
                return e ? registry_1.DelegationEntries.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegationEntriesList = [];
        }
        if (message.proposalList) {
            obj.proposalList = message.proposalList.map(function (e) {
                return e ? registry_1.Proposal.toJSON(e) : undefined;
            });
        }
        else {
            obj.proposalList = [];
        }
        message.unbondingState !== undefined &&
            (obj.unbondingState = message.unbondingState
                ? registry_1.UnbondingState.toJSON(message.unbondingState)
                : undefined);
        if (message.unbondingEntries) {
            obj.unbondingEntries = message.unbondingEntries.map(function (e) {
                return e ? registry_1.UnbondingEntries.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbondingEntries = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var message = createBaseGenesisState();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        message.poolList = ((_a = object.poolList) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Pool.fromPartial(e); })) || [];
        message.poolCount = (_b = object.poolCount) !== null && _b !== void 0 ? _b : 0;
        message.funderList =
            ((_c = object.funderList) === null || _c === void 0 ? void 0 : _c.map(function (e) { return registry_1.Funder.fromPartial(e); })) || [];
        message.stakerList =
            ((_d = object.stakerList) === null || _d === void 0 ? void 0 : _d.map(function (e) { return registry_1.Staker.fromPartial(e); })) || [];
        message.delegatorList =
            ((_e = object.delegatorList) === null || _e === void 0 ? void 0 : _e.map(function (e) { return registry_1.Delegator.fromPartial(e); })) || [];
        message.delegationPoolDataList =
            ((_f = object.delegationPoolDataList) === null || _f === void 0 ? void 0 : _f.map(function (e) {
                return registry_1.DelegationPoolData.fromPartial(e);
            })) || [];
        message.delegationEntriesList =
            ((_g = object.delegationEntriesList) === null || _g === void 0 ? void 0 : _g.map(function (e) {
                return registry_1.DelegationEntries.fromPartial(e);
            })) || [];
        message.proposalList =
            ((_h = object.proposalList) === null || _h === void 0 ? void 0 : _h.map(function (e) { return registry_1.Proposal.fromPartial(e); })) || [];
        message.unbondingState =
            object.unbondingState !== undefined && object.unbondingState !== null
                ? registry_1.UnbondingState.fromPartial(object.unbondingState)
                : undefined;
        message.unbondingEntries =
            ((_j = object.unbondingEntries) === null || _j === void 0 ? void 0 : _j.map(function (e) { return registry_1.UnbondingEntries.fromPartial(e); })) ||
                [];
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
