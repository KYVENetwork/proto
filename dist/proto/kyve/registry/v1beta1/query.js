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
exports.QueryClientImpl = exports.DelegationForStakerResponse = exports.QueryStakersByPoolAndDelegatorResponse = exports.QueryStakersByPoolAndDelegatorRequest = exports.StakerDelegatorResponse = exports.QueryDelegatorsByPoolAndStakerResponse = exports.QueryDelegatorsByPoolAndStakerRequest = exports.DelegatorResponse = exports.QueryDelegatorResponse = exports.QueryDelegatorRequest = exports.QueryAccountDelegationListResponse = exports.QueryAccountDelegationListRequest = exports.Staked = exports.QueryAccountStakedListResponse = exports.QueryAccountStakedListRequest = exports.Funded = exports.QueryAccountFundedListResponse = exports.QueryAccountFundedListRequest = exports.QueryAccountAssetsResponse = exports.QueryAccountAssetsRequest = exports.QueryStakeInfoResponse = exports.QueryStakeInfoRequest = exports.QueryCanVoteResponse = exports.QueryCanVoteRequest = exports.QueryCanProposeResponse = exports.QueryCanProposeRequest = exports.QueryProposalByHeightResponse = exports.QueryProposalByHeightRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.StakerResponse = exports.QueryStakerResponse = exports.QueryStakerRequest = exports.QueryStakersListResponse = exports.QueryStakersListRequest = exports.QueryFunderResponse = exports.QueryFunderRequest = exports.QueryFundersListResponse = exports.QueryFundersListRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
var params_1 = require("../../../kyve/registry/v1beta1/params");
var registry_1 = require("../../../kyve/registry/v1beta1/registry");
var pagination_1 = require("../../../cosmos/base/query/v1beta1/pagination");
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseQueryParamsRequest() {
    return {};
}
exports.QueryParamsRequest = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsRequest();
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
        var message = createBaseQueryParamsRequest();
        return message;
    }
};
function createBaseQueryParamsResponse() {
    return { params: undefined };
}
exports.QueryParamsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.params !== undefined) {
            params_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryParamsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = params_1.Params.decode(reader, reader.uint32());
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
            params: isSet(object.params) ? params_1.Params.fromJSON(object.params) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? params_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryParamsResponse();
        message.params =
            object.params !== undefined && object.params !== null
                ? params_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    }
};
function createBaseQueryPoolRequest() {
    return { id: "0" };
}
exports.QueryPoolRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.id !== "0") {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
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
            id: isSet(object.id) ? String(object.id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryPoolRequest();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseQueryPoolResponse() {
    return { pool: undefined };
}
exports.QueryPoolResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryPoolResponse();
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    }
};
function createBaseQueryPoolsRequest() {
    return { pagination: undefined, search: "", runtime: "", paused: false };
}
exports.QueryPoolsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.search !== "") {
            writer.uint32(18).string(message.search);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.paused === true) {
            writer.uint32(32).bool(message.paused);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.search = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.paused = reader.bool();
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            search: isSet(object.search) ? String(object.search) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            paused: isSet(object.paused) ? Boolean(object.paused) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.search !== undefined && (obj.search = message.search);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.paused !== undefined && (obj.paused = message.paused);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryPoolsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.search = (_a = object.search) !== null && _a !== void 0 ? _a : "";
        message.runtime = (_b = object.runtime) !== null && _b !== void 0 ? _b : "";
        message.paused = (_c = object.paused) !== null && _c !== void 0 ? _c : false;
        return message;
    }
};
function createBaseQueryPoolsResponse() {
    return { pools: [], pagination: undefined };
}
exports.QueryPoolsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.pools; _i < _a.length; _i++) {
            var v = _a[_i];
            registry_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryPoolsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(registry_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            pools: Array.isArray(object === null || object === void 0 ? void 0 : object.pools)
                ? object.pools.map(function (e) { return registry_1.Pool.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.pools) {
            obj.pools = message.pools.map(function (e) { return (e ? registry_1.Pool.toJSON(e) : undefined); });
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryPoolsResponse();
        message.pools = ((_a = object.pools) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Pool.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryFundersListRequest() {
    return { poolId: "0" };
}
exports.QueryFundersListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFundersListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFundersListRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseQueryFundersListResponse() {
    return { funders: [] };
}
exports.QueryFundersListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.funders; _i < _a.length; _i++) {
            var v = _a[_i];
            registry_1.Funder.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFundersListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funders.push(registry_1.Funder.decode(reader, reader.uint32()));
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
            funders: Array.isArray(object === null || object === void 0 ? void 0 : object.funders)
                ? object.funders.map(function (e) { return registry_1.Funder.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.funders) {
            obj.funders = message.funders.map(function (e) {
                return e ? registry_1.Funder.toJSON(e) : undefined;
            });
        }
        else {
            obj.funders = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFundersListResponse();
        message.funders = ((_a = object.funders) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Funder.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryFunderRequest() {
    return { poolId: "0", funder: "" };
}
exports.QueryFunderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.funder !== "") {
            writer.uint32(18).string(message.funder);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFunderRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
                    message.funder = reader.string();
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            funder: isSet(object.funder) ? String(object.funder) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.funder !== undefined && (obj.funder = message.funder);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryFunderRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.funder = (_b = object.funder) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryFunderResponse() {
    return { funder: undefined };
}
exports.QueryFunderResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.funder !== undefined) {
            registry_1.Funder.encode(message.funder, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryFunderResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funder = registry_1.Funder.decode(reader, reader.uint32());
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
            funder: isSet(object.funder) ? registry_1.Funder.fromJSON(object.funder) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.funder !== undefined &&
            (obj.funder = message.funder ? registry_1.Funder.toJSON(message.funder) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryFunderResponse();
        message.funder =
            object.funder !== undefined && object.funder !== null
                ? registry_1.Funder.fromPartial(object.funder)
                : undefined;
        return message;
    }
};
function createBaseQueryStakersListRequest() {
    return { poolId: "0" };
}
exports.QueryStakersListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersListRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseQueryStakersListResponse() {
    return { stakers: [] };
}
exports.QueryStakersListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StakerResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakers.push(exports.StakerResponse.decode(reader, reader.uint32()));
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
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers)
                ? object.stakers.map(function (e) { return exports.StakerResponse.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) {
                return e ? exports.StakerResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.stakers = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersListResponse();
        message.stakers =
            ((_a = object.stakers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StakerResponse.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseQueryStakerRequest() {
    return { poolId: "0", staker: "" };
}
exports.QueryStakerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakerRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryStakerResponse() {
    return { staker: undefined };
}
exports.QueryStakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== undefined) {
            exports.StakerResponse.encode(message.staker, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = exports.StakerResponse.decode(reader, reader.uint32());
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
            staker: isSet(object.staker)
                ? exports.StakerResponse.fromJSON(object.staker)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined &&
            (obj.staker = message.staker
                ? exports.StakerResponse.toJSON(message.staker)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryStakerResponse();
        message.staker =
            object.staker !== undefined && object.staker !== null
                ? exports.StakerResponse.fromPartial(object.staker)
                : undefined;
        return message;
    }
};
function createBaseStakerResponse() {
    return {
        staker: "",
        poolId: "0",
        account: "",
        amount: "0",
        totalDelegation: "0",
        commission: "",
        moniker: "",
        website: "",
        logo: "",
        points: "0"
    };
}
exports.StakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.account !== "") {
            writer.uint32(26).string(message.account);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.totalDelegation !== "0") {
            writer.uint32(40).uint64(message.totalDelegation);
        }
        if (message.commission !== "") {
            writer.uint32(50).string(message.commission);
        }
        if (message.moniker !== "") {
            writer.uint32(58).string(message.moniker);
        }
        if (message.website !== "") {
            writer.uint32(66).string(message.website);
        }
        if (message.logo !== "") {
            writer.uint32(74).string(message.logo);
        }
        if (message.points !== "0") {
            writer.uint32(80).uint64(message.points);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.totalDelegation = longToString(reader.uint64());
                    break;
                case 6:
                    message.commission = reader.string();
                    break;
                case 7:
                    message.moniker = reader.string();
                    break;
                case 8:
                    message.website = reader.string();
                    break;
                case 9:
                    message.logo = reader.string();
                    break;
                case 10:
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            account: isSet(object.account) ? String(object.account) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            totalDelegation: isSet(object.totalDelegation)
                ? String(object.totalDelegation)
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
        message.staker !== undefined && (obj.staker = message.staker);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.totalDelegation !== undefined &&
            (obj.totalDelegation = message.totalDelegation);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        message.points !== undefined && (obj.points = message.points);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        var message = createBaseStakerResponse();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.totalDelegation = (_e = object.totalDelegation) !== null && _e !== void 0 ? _e : "0";
        message.commission = (_f = object.commission) !== null && _f !== void 0 ? _f : "";
        message.moniker = (_g = object.moniker) !== null && _g !== void 0 ? _g : "";
        message.website = (_h = object.website) !== null && _h !== void 0 ? _h : "";
        message.logo = (_j = object.logo) !== null && _j !== void 0 ? _j : "";
        message.points = (_k = object.points) !== null && _k !== void 0 ? _k : "0";
        return message;
    }
};
function createBaseQueryProposalRequest() {
    return { bundleId: "" };
}
exports.QueryProposalRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.bundleId !== "") {
            writer.uint32(10).string(message.bundleId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bundleId = reader.string();
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
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalRequest();
        message.bundleId = (_a = object.bundleId) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryProposalResponse() {
    return { proposal: undefined };
}
exports.QueryProposalResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            registry_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = registry_1.Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal)
                ? registry_1.Proposal.fromJSON(object.proposal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? registry_1.Proposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposalResponse();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? registry_1.Proposal.fromPartial(object.proposal)
                : undefined;
        return message;
    }
};
function createBaseQueryProposalsRequest() {
    return { pagination: undefined, poolId: "0" };
}
exports.QueryProposalsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            poolId: isSet(object.poolId) ? String(object.poolId) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseQueryProposalsResponse() {
    return { proposals: [], pagination: undefined };
}
exports.QueryProposalsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.proposals; _i < _a.length; _i++) {
            var v = _a[_i];
            registry_1.Proposal.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposals.push(registry_1.Proposal.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            proposals: Array.isArray(object === null || object === void 0 ? void 0 : object.proposals)
                ? object.proposals.map(function (e) { return registry_1.Proposal.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.proposals) {
            obj.proposals = message.proposals.map(function (e) {
                return e ? registry_1.Proposal.toJSON(e) : undefined;
            });
        }
        else {
            obj.proposals = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalsResponse();
        message.proposals =
            ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Proposal.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryProposalByHeightRequest() {
    return { poolId: "0", height: "0" };
}
exports.QueryProposalByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.height !== "0") {
            writer.uint32(16).uint64(message.height);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalByHeightRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
                    message.height = longToString(reader.uint64());
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            height: isSet(object.height) ? String(object.height) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryProposalByHeightRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.height = (_b = object.height) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseQueryProposalByHeightResponse() {
    return { proposal: undefined };
}
exports.QueryProposalByHeightResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.proposal !== undefined) {
            registry_1.Proposal.encode(message.proposal, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalByHeightResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal = registry_1.Proposal.decode(reader, reader.uint32());
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
            proposal: isSet(object.proposal)
                ? registry_1.Proposal.fromJSON(object.proposal)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal !== undefined &&
            (obj.proposal = message.proposal
                ? registry_1.Proposal.toJSON(message.proposal)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryProposalByHeightResponse();
        message.proposal =
            object.proposal !== undefined && object.proposal !== null
                ? registry_1.Proposal.fromPartial(object.proposal)
                : undefined;
        return message;
    }
};
function createBaseQueryCanProposeRequest() {
    return { poolId: "0", proposer: "", fromHeight: "0" };
}
exports.QueryCanProposeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        if (message.fromHeight !== "0") {
            writer.uint32(24).uint64(message.fromHeight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanProposeRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                case 3:
                    message.fromHeight = longToString(reader.uint64());
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            fromHeight: isSet(object.fromHeight) ? String(object.fromHeight) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.fromHeight !== undefined && (obj.fromHeight = message.fromHeight);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryCanProposeRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.proposer = (_b = object.proposer) !== null && _b !== void 0 ? _b : "";
        message.fromHeight = (_c = object.fromHeight) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseQueryCanProposeResponse() {
    return { possible: false, reason: "" };
}
exports.QueryCanProposeResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.possible === true) {
            writer.uint32(8).bool(message.possible);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanProposeResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.possible = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
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
            possible: isSet(object.possible) ? Boolean(object.possible) : false,
            reason: isSet(object.reason) ? String(object.reason) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.possible !== undefined && (obj.possible = message.possible);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanProposeResponse();
        message.possible = (_a = object.possible) !== null && _a !== void 0 ? _a : false;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryCanVoteRequest() {
    return { poolId: "0", voter: "", bundleId: "" };
}
exports.QueryCanVoteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.bundleId !== "") {
            writer.uint32(26).string(message.bundleId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanVoteRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.bundleId = reader.string();
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            voter: isSet(object.voter) ? String(object.voter) : "",
            bundleId: isSet(object.bundleId) ? String(object.bundleId) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.voter !== undefined && (obj.voter = message.voter);
        message.bundleId !== undefined && (obj.bundleId = message.bundleId);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryCanVoteRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.bundleId = (_c = object.bundleId) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseQueryCanVoteResponse() {
    return { possible: false, reason: "" };
}
exports.QueryCanVoteResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.possible === true) {
            writer.uint32(8).bool(message.possible);
        }
        if (message.reason !== "") {
            writer.uint32(18).string(message.reason);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryCanVoteResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.possible = reader.bool();
                    break;
                case 2:
                    message.reason = reader.string();
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
            possible: isSet(object.possible) ? Boolean(object.possible) : false,
            reason: isSet(object.reason) ? String(object.reason) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.possible !== undefined && (obj.possible = message.possible);
        message.reason !== undefined && (obj.reason = message.reason);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryCanVoteResponse();
        message.possible = (_a = object.possible) !== null && _a !== void 0 ? _a : false;
        message.reason = (_b = object.reason) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryStakeInfoRequest() {
    return { poolId: "0", staker: "" };
}
exports.QueryStakeInfoRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakeInfoRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakeInfoRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryStakeInfoResponse() {
    return { balance: "", currentStake: "", minimumStake: "" };
}
exports.QueryStakeInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.currentStake !== "") {
            writer.uint32(18).string(message.currentStake);
        }
        if (message.minimumStake !== "") {
            writer.uint32(26).string(message.minimumStake);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakeInfoResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = reader.string();
                    break;
                case 2:
                    message.currentStake = reader.string();
                    break;
                case 3:
                    message.minimumStake = reader.string();
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
            balance: isSet(object.balance) ? String(object.balance) : "",
            currentStake: isSet(object.currentStake)
                ? String(object.currentStake)
                : "",
            minimumStake: isSet(object.minimumStake)
                ? String(object.minimumStake)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.currentStake !== undefined &&
            (obj.currentStake = message.currentStake);
        message.minimumStake !== undefined &&
            (obj.minimumStake = message.minimumStake);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryStakeInfoResponse();
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "";
        message.currentStake = (_b = object.currentStake) !== null && _b !== void 0 ? _b : "";
        message.minimumStake = (_c = object.minimumStake) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseQueryAccountAssetsRequest() {
    return { address: "" };
}
exports.QueryAccountAssetsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountAssetsRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
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
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountAssetsRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountAssetsResponse() {
    return {
        balance: "0",
        protocolStaking: "0",
        protocolDelegation: "0",
        protocolRewards: "0",
        protocolFunding: "0"
    };
}
exports.QueryAccountAssetsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.balance !== "0") {
            writer.uint32(8).uint64(message.balance);
        }
        if (message.protocolStaking !== "0") {
            writer.uint32(16).uint64(message.protocolStaking);
        }
        if (message.protocolDelegation !== "0") {
            writer.uint32(24).uint64(message.protocolDelegation);
        }
        if (message.protocolRewards !== "0") {
            writer.uint32(48).uint64(message.protocolRewards);
        }
        if (message.protocolFunding !== "0") {
            writer.uint32(56).uint64(message.protocolFunding);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountAssetsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.balance = longToString(reader.uint64());
                    break;
                case 2:
                    message.protocolStaking = longToString(reader.uint64());
                    break;
                case 3:
                    message.protocolDelegation = longToString(reader.uint64());
                    break;
                case 6:
                    message.protocolRewards = longToString(reader.uint64());
                    break;
                case 7:
                    message.protocolFunding = longToString(reader.uint64());
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
            balance: isSet(object.balance) ? String(object.balance) : "0",
            protocolStaking: isSet(object.protocolStaking)
                ? String(object.protocolStaking)
                : "0",
            protocolDelegation: isSet(object.protocolDelegation)
                ? String(object.protocolDelegation)
                : "0",
            protocolRewards: isSet(object.protocolRewards)
                ? String(object.protocolRewards)
                : "0",
            protocolFunding: isSet(object.protocolFunding)
                ? String(object.protocolFunding)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.protocolStaking !== undefined &&
            (obj.protocolStaking = message.protocolStaking);
        message.protocolDelegation !== undefined &&
            (obj.protocolDelegation = message.protocolDelegation);
        message.protocolRewards !== undefined &&
            (obj.protocolRewards = message.protocolRewards);
        message.protocolFunding !== undefined &&
            (obj.protocolFunding = message.protocolFunding);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseQueryAccountAssetsResponse();
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "0";
        message.protocolStaking = (_b = object.protocolStaking) !== null && _b !== void 0 ? _b : "0";
        message.protocolDelegation = (_c = object.protocolDelegation) !== null && _c !== void 0 ? _c : "0";
        message.protocolRewards = (_d = object.protocolRewards) !== null && _d !== void 0 ? _d : "0";
        message.protocolFunding = (_e = object.protocolFunding) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
function createBaseQueryAccountFundedListRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountFundedListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountFundedListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountFundedListRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountFundedListResponse() {
    return { funded: [], pagination: undefined };
}
exports.QueryAccountFundedListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.funded; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Funded.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountFundedListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.funded.push(exports.Funded.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            funded: Array.isArray(object === null || object === void 0 ? void 0 : object.funded)
                ? object.funded.map(function (e) { return exports.Funded.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.funded) {
            obj.funded = message.funded.map(function (e) {
                return e ? exports.Funded.toJSON(e) : undefined;
            });
        }
        else {
            obj.funded = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountFundedListResponse();
        message.funded = ((_a = object.funded) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Funded.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseFunded() {
    return { account: "", amount: "0", pool: undefined };
}
exports.Funded = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.amount !== "0") {
            writer.uint32(16).uint64(message.amount);
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseFunded();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.amount = longToString(reader.uint64());
                    break;
                case 3:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseFunded();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.amount = (_b = object.amount) !== null && _b !== void 0 ? _b : "0";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    }
};
function createBaseQueryAccountStakedListRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountStakedListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountStakedListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountStakedListRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountStakedListResponse() {
    return { staked: [], pagination: undefined };
}
exports.QueryAccountStakedListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.staked; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.Staked.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountStakedListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staked.push(exports.Staked.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            staked: Array.isArray(object === null || object === void 0 ? void 0 : object.staked)
                ? object.staked.map(function (e) { return exports.Staked.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.staked) {
            obj.staked = message.staked.map(function (e) {
                return e ? exports.Staked.toJSON(e) : undefined;
            });
        }
        else {
            obj.staked = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountStakedListResponse();
        message.staked = ((_a = object.staked) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.Staked.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseStaked() {
    return { staker: "", poolId: "0", account: "", amount: "0", pool: undefined };
}
exports.Staked = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.account !== "") {
            writer.uint32(26).string(message.account);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStaked();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
                    break;
                case 6:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            account: isSet(object.account) ? String(object.account) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStaked();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.poolId = (_b = object.poolId) !== null && _b !== void 0 ? _b : "0";
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    }
};
function createBaseQueryAccountDelegationListRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountDelegationListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountDelegationListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.address = reader.string();
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            address: isSet(object.address) ? String(object.address) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountDelegationListRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountDelegationListResponse() {
    return { delegations: [], pagination: undefined };
}
exports.QueryAccountDelegationListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.delegations; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegatorResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountDelegationListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegations.push(exports.DelegatorResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            delegations: Array.isArray(object === null || object === void 0 ? void 0 : object.delegations)
                ? object.delegations.map(function (e) { return exports.DelegatorResponse.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.delegations) {
            obj.delegations = message.delegations.map(function (e) {
                return e ? exports.DelegatorResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegations = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountDelegationListResponse();
        message.delegations =
            ((_a = object.delegations) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelegatorResponse.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryDelegatorRequest() {
    return { poolId: "0", staker: "", delegator: "" };
}
exports.QueryDelegatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.poolId !== "0") {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.staker !== "") {
            writer.uint32(18).string(message.staker);
        }
        if (message.delegator !== "") {
            writer.uint32(26).string(message.delegator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 2:
                    message.staker = reader.string();
                    break;
                case 3:
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
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryDelegatorRequest();
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        message.delegator = (_c = object.delegator) !== null && _c !== void 0 ? _c : "";
        return message;
    }
};
function createBaseQueryDelegatorResponse() {
    return { delegator: undefined };
}
exports.QueryDelegatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegator !== undefined) {
            exports.StakerDelegatorResponse.encode(message.delegator, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = exports.StakerDelegatorResponse.decode(reader, reader.uint32());
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
            delegator: isSet(object.delegator)
                ? exports.StakerDelegatorResponse.fromJSON(object.delegator)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator !== undefined &&
            (obj.delegator = message.delegator
                ? exports.StakerDelegatorResponse.toJSON(message.delegator)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryDelegatorResponse();
        message.delegator =
            object.delegator !== undefined && object.delegator !== null
                ? exports.StakerDelegatorResponse.fromPartial(object.delegator)
                : undefined;
        return message;
    }
};
function createBaseDelegatorResponse() {
    return {
        account: "",
        pool: undefined,
        currentReward: "0",
        delegationAmount: "0",
        staker: "",
        delegationPoolData: undefined
    };
}
exports.DelegatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.account !== "") {
            writer.uint32(10).string(message.account);
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
        }
        if (message.currentReward !== "0") {
            writer.uint32(24).uint64(message.currentReward);
        }
        if (message.delegationAmount !== "0") {
            writer.uint32(32).uint64(message.delegationAmount);
        }
        if (message.staker !== "") {
            writer.uint32(42).string(message.staker);
        }
        if (message.delegationPoolData !== undefined) {
            registry_1.DelegationPoolData.encode(message.delegationPoolData, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.currentReward = longToString(reader.uint64());
                    break;
                case 4:
                    message.delegationAmount = longToString(reader.uint64());
                    break;
                case 5:
                    message.staker = reader.string();
                    break;
                case 6:
                    message.delegationPoolData = registry_1.DelegationPoolData.decode(reader, reader.uint32());
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
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined,
            currentReward: isSet(object.currentReward)
                ? String(object.currentReward)
                : "0",
            delegationAmount: isSet(object.delegationAmount)
                ? String(object.delegationAmount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegationPoolData: isSet(object.delegationPoolData)
                ? registry_1.DelegationPoolData.fromJSON(object.delegationPoolData)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        message.currentReward !== undefined &&
            (obj.currentReward = message.currentReward);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegationPoolData !== undefined &&
            (obj.delegationPoolData = message.delegationPoolData
                ? registry_1.DelegationPoolData.toJSON(message.delegationPoolData)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseDelegatorResponse();
        message.account = (_a = object.account) !== null && _a !== void 0 ? _a : "";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        message.currentReward = (_b = object.currentReward) !== null && _b !== void 0 ? _b : "0";
        message.delegationAmount = (_c = object.delegationAmount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        message.delegationPoolData =
            object.delegationPoolData !== undefined &&
                object.delegationPoolData !== null
                ? registry_1.DelegationPoolData.fromPartial(object.delegationPoolData)
                : undefined;
        return message;
    }
};
function createBaseQueryDelegatorsByPoolAndStakerRequest() {
    return { pagination: undefined, poolId: "0", staker: "" };
}
exports.QueryDelegatorsByPoolAndStakerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.staker !== "") {
            writer.uint32(26).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorsByPoolAndStakerRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryDelegatorsByPoolAndStakerRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryDelegatorsByPoolAndStakerResponse() {
    return {
        delegators: [],
        pool: undefined,
        delegationPoolData: undefined,
        pagination: undefined
    };
}
exports.QueryDelegatorsByPoolAndStakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.delegators; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StakerDelegatorResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
        }
        if (message.delegationPoolData !== undefined) {
            registry_1.DelegationPoolData.encode(message.delegationPoolData, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryDelegatorsByPoolAndStakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegators.push(exports.StakerDelegatorResponse.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.delegationPoolData = registry_1.DelegationPoolData.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            delegators: Array.isArray(object === null || object === void 0 ? void 0 : object.delegators)
                ? object.delegators.map(function (e) { return exports.StakerDelegatorResponse.fromJSON(e); })
                : [],
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined,
            delegationPoolData: isSet(object.delegationPoolData)
                ? registry_1.DelegationPoolData.fromJSON(object.delegationPoolData)
                : undefined,
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.delegators) {
            obj.delegators = message.delegators.map(function (e) {
                return e ? exports.StakerDelegatorResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.delegators = [];
        }
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        message.delegationPoolData !== undefined &&
            (obj.delegationPoolData = message.delegationPoolData
                ? registry_1.DelegationPoolData.toJSON(message.delegationPoolData)
                : undefined);
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryDelegatorsByPoolAndStakerResponse();
        message.delegators =
            ((_a = object.delegators) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StakerDelegatorResponse.fromPartial(e); })) ||
                [];
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        message.delegationPoolData =
            object.delegationPoolData !== undefined &&
                object.delegationPoolData !== null
                ? registry_1.DelegationPoolData.fromPartial(object.delegationPoolData)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseStakerDelegatorResponse() {
    return {
        delegator: "",
        currentReward: "0",
        delegationAmount: "0",
        staker: ""
    };
}
exports.StakerDelegatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.currentReward !== "0") {
            writer.uint32(16).uint64(message.currentReward);
        }
        if (message.delegationAmount !== "0") {
            writer.uint32(24).uint64(message.delegationAmount);
        }
        if (message.staker !== "") {
            writer.uint32(34).string(message.staker);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakerDelegatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.currentReward = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegationAmount = longToString(reader.uint64());
                    break;
                case 4:
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
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            currentReward: isSet(object.currentReward)
                ? String(object.currentReward)
                : "0",
            delegationAmount: isSet(object.delegationAmount)
                ? String(object.delegationAmount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.currentReward !== undefined &&
            (obj.currentReward = message.currentReward);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStakerDelegatorResponse();
        message.delegator = (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
        message.currentReward = (_b = object.currentReward) !== null && _b !== void 0 ? _b : "0";
        message.delegationAmount = (_c = object.delegationAmount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseQueryStakersByPoolAndDelegatorRequest() {
    return { pagination: undefined, poolId: "0", delegator: "" };
}
exports.QueryStakersByPoolAndDelegatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolId !== "0") {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.delegator !== "") {
            writer.uint32(26).string(message.delegator);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolAndDelegatorRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolId = longToString(reader.uint64());
                    break;
                case 3:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            poolId: isSet(object.poolId) ? String(object.poolId) : "0",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.poolId !== undefined && (obj.poolId = message.poolId);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakersByPoolAndDelegatorRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.poolId = (_a = object.poolId) !== null && _a !== void 0 ? _a : "0";
        message.delegator = (_b = object.delegator) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryStakersByPoolAndDelegatorResponse() {
    return { delegator: "", pool: undefined, stakers: [], pagination: undefined };
}
exports.QueryStakersByPoolAndDelegatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(18).fork()).ldelim();
        }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegationForStakerResponse.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryStakersByPoolAndDelegatorResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.delegator = reader.string();
                    break;
                case 2:
                    message.pool = registry_1.Pool.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.stakers.push(exports.DelegationForStakerResponse.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
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
            delegator: isSet(object.delegator) ? String(object.delegator) : "",
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined,
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers)
                ? object.stakers.map(function (e) {
                    return exports.DelegationForStakerResponse.fromJSON(e);
                })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        if (message.stakers) {
            obj.stakers = message.stakers.map(function (e) {
                return e ? exports.DelegationForStakerResponse.toJSON(e) : undefined;
            });
        }
        else {
            obj.stakers = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakersByPoolAndDelegatorResponse();
        message.delegator = (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        message.stakers =
            ((_b = object.stakers) === null || _b === void 0 ? void 0 : _b.map(function (e) { return exports.DelegationForStakerResponse.fromPartial(e); })) ||
                [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseDelegationForStakerResponse() {
    return {
        staker: "",
        currentReward: "0",
        delegationAmount: "0",
        totalDelegationAmount: "0",
        delegatorCount: "0"
    };
}
exports.DelegationForStakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.currentReward !== "0") {
            writer.uint32(16).uint64(message.currentReward);
        }
        if (message.delegationAmount !== "0") {
            writer.uint32(24).uint64(message.delegationAmount);
        }
        if (message.totalDelegationAmount !== "0") {
            writer.uint32(32).uint64(message.totalDelegationAmount);
        }
        if (message.delegatorCount !== "0") {
            writer.uint32(40).uint64(message.delegatorCount);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationForStakerResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staker = reader.string();
                    break;
                case 2:
                    message.currentReward = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegationAmount = longToString(reader.uint64());
                    break;
                case 4:
                    message.totalDelegationAmount = longToString(reader.uint64());
                    break;
                case 5:
                    message.delegatorCount = longToString(reader.uint64());
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
            staker: isSet(object.staker) ? String(object.staker) : "",
            currentReward: isSet(object.currentReward)
                ? String(object.currentReward)
                : "0",
            delegationAmount: isSet(object.delegationAmount)
                ? String(object.delegationAmount)
                : "0",
            totalDelegationAmount: isSet(object.totalDelegationAmount)
                ? String(object.totalDelegationAmount)
                : "0",
            delegatorCount: isSet(object.delegatorCount)
                ? String(object.delegatorCount)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.currentReward !== undefined &&
            (obj.currentReward = message.currentReward);
        message.delegationAmount !== undefined &&
            (obj.delegationAmount = message.delegationAmount);
        message.totalDelegationAmount !== undefined &&
            (obj.totalDelegationAmount = message.totalDelegationAmount);
        message.delegatorCount !== undefined &&
            (obj.delegatorCount = message.delegatorCount);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseDelegationForStakerResponse();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.currentReward = (_b = object.currentReward) !== null && _b !== void 0 ? _b : "0";
        message.delegationAmount = (_c = object.delegationAmount) !== null && _c !== void 0 ? _c : "0";
        message.totalDelegationAmount = (_d = object.totalDelegationAmount) !== null && _d !== void 0 ? _d : "0";
        message.delegatorCount = (_e = object.delegatorCount) !== null && _e !== void 0 ? _e : "0";
        return message;
    }
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.Params = this.Params.bind(this);
        this.Pool = this.Pool.bind(this);
        this.Pools = this.Pools.bind(this);
        this.FundersList = this.FundersList.bind(this);
        this.Funder = this.Funder.bind(this);
        this.StakersList = this.StakersList.bind(this);
        this.Staker = this.Staker.bind(this);
        this.Proposal = this.Proposal.bind(this);
        this.Proposals = this.Proposals.bind(this);
        this.ProposalByHeight = this.ProposalByHeight.bind(this);
        this.CanPropose = this.CanPropose.bind(this);
        this.CanVote = this.CanVote.bind(this);
        this.StakeInfo = this.StakeInfo.bind(this);
        this.AccountAssets = this.AccountAssets.bind(this);
        this.AccountFundedList = this.AccountFundedList.bind(this);
        this.AccountStakedList = this.AccountStakedList.bind(this);
        this.AccountDelegationList = this.AccountDelegationList.bind(this);
        this.Delegator = this.Delegator.bind(this);
        this.DelegatorsByPoolAndStaker = this.DelegatorsByPoolAndStaker.bind(this);
        this.StakersByPoolAndDelegator = this.StakersByPoolAndDelegator.bind(this);
    }
    QueryClientImpl.prototype.Params = function (request) {
        var data = exports.QueryParamsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Params", data);
        return promise.then(function (data) {
            return exports.QueryParamsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Pool = function (request) {
        var data = exports.QueryPoolRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Pool", data);
        return promise.then(function (data) {
            return exports.QueryPoolResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Pools = function (request) {
        var data = exports.QueryPoolsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Pools", data);
        return promise.then(function (data) {
            return exports.QueryPoolsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.FundersList = function (request) {
        var data = exports.QueryFundersListRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "FundersList", data);
        return promise.then(function (data) {
            return exports.QueryFundersListResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Funder = function (request) {
        var data = exports.QueryFunderRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Funder", data);
        return promise.then(function (data) {
            return exports.QueryFunderResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.StakersList = function (request) {
        var data = exports.QueryStakersListRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "StakersList", data);
        return promise.then(function (data) {
            return exports.QueryStakersListResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Staker = function (request) {
        var data = exports.QueryStakerRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Staker", data);
        return promise.then(function (data) {
            return exports.QueryStakerResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Proposal = function (request) {
        var data = exports.QueryProposalRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Proposal", data);
        return promise.then(function (data) {
            return exports.QueryProposalResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Proposals = function (request) {
        var data = exports.QueryProposalsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Proposals", data);
        return promise.then(function (data) {
            return exports.QueryProposalsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ProposalByHeight = function (request) {
        var data = exports.QueryProposalByHeightRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "ProposalByHeight", data);
        return promise.then(function (data) {
            return exports.QueryProposalByHeightResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.CanPropose = function (request) {
        var data = exports.QueryCanProposeRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "CanPropose", data);
        return promise.then(function (data) {
            return exports.QueryCanProposeResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.CanVote = function (request) {
        var data = exports.QueryCanVoteRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "CanVote", data);
        return promise.then(function (data) {
            return exports.QueryCanVoteResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.StakeInfo = function (request) {
        var data = exports.QueryStakeInfoRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "StakeInfo", data);
        return promise.then(function (data) {
            return exports.QueryStakeInfoResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AccountAssets = function (request) {
        var data = exports.QueryAccountAssetsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountAssets", data);
        return promise.then(function (data) {
            return exports.QueryAccountAssetsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AccountFundedList = function (request) {
        var data = exports.QueryAccountFundedListRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountFundedList", data);
        return promise.then(function (data) {
            return exports.QueryAccountFundedListResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AccountStakedList = function (request) {
        var data = exports.QueryAccountStakedListRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountStakedList", data);
        return promise.then(function (data) {
            return exports.QueryAccountStakedListResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AccountDelegationList = function (request) {
        var data = exports.QueryAccountDelegationListRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountDelegationList", data);
        return promise.then(function (data) {
            return exports.QueryAccountDelegationListResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.Delegator = function (request) {
        var data = exports.QueryDelegatorRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "Delegator", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.DelegatorsByPoolAndStaker = function (request) {
        var data = exports.QueryDelegatorsByPoolAndStakerRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "DelegatorsByPoolAndStaker", data);
        return promise.then(function (data) {
            return exports.QueryDelegatorsByPoolAndStakerResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.StakersByPoolAndDelegator = function (request) {
        var data = exports.QueryStakersByPoolAndDelegatorRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "StakersByPoolAndDelegator", data);
        return promise.then(function (data) {
            return exports.QueryStakersByPoolAndDelegatorResponse.decode(new _m0.Reader(data));
        });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
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
