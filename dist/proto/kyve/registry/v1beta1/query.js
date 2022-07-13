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
exports.Staked = exports.QueryAccountStakedListResponse = exports.QueryAccountStakedListRequest = exports.Funded = exports.QueryAccountFundedListResponse = exports.QueryAccountFundedListRequest = exports.DelegationUnbonding = exports.QueryAccountDelegationUnbondingsResponse = exports.QueryAccountDelegationUnbondingsRequest = exports.StakingUnbonding = exports.QueryAccountStakingUnbondingsResponse = exports.QueryAccountStakingUnbondingsRequest = exports.QueryAccountAssetsResponse = exports.QueryAccountAssetsRequest = exports.QueryStakeInfoResponse = exports.QueryStakeInfoRequest = exports.QueryCanVoteResponse = exports.QueryCanVoteRequest = exports.QueryCanProposeResponse = exports.QueryCanProposeRequest = exports.QueryProposalSinceIdResponse = exports.QueryProposalSinceIdRequest = exports.QueryProposalSinceFinalizedAtResponse = exports.QueryProposalSinceFinalizedAtRequest = exports.QueryProposalByHeightResponse = exports.QueryProposalByHeightRequest = exports.QueryProposalsResponse = exports.QueryProposalsRequest = exports.QueryProposalResponse = exports.QueryProposalRequest = exports.VoteStatusResponse = exports.QueryVoteStatusResponse = exports.QueryVoteStatusRequest = exports.StakerResponse = exports.PendingCommissionChange = exports.QueryStakerResponse = exports.QueryStakerRequest = exports.QueryStakersListResponse = exports.QueryStakersListRequest = exports.QueryFunderResponse = exports.QueryFunderRequest = exports.QueryFundersListResponse = exports.QueryFundersListRequest = exports.QueryPoolsResponse = exports.QueryPoolsRequest = exports.QueryPoolResponse = exports.QueryPoolRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.protobufPackage = void 0;
exports.QueryClientImpl = exports.DelegationForStakerResponse = exports.QueryStakersByPoolAndDelegatorResponse = exports.QueryStakersByPoolAndDelegatorRequest = exports.QueryDelegatorsByPoolAndStakerResponse = exports.QueryDelegatorsByPoolAndStakerRequest = exports.StakerDelegatorResponse = exports.QueryDelegatorResponse = exports.QueryDelegatorRequest = exports.QueryAccountRedelegationResponse = exports.QueryAccountRedelegationRequest = exports.DelegatorResponse = exports.QueryAccountDelegationListResponse = exports.QueryAccountDelegationListRequest = void 0;
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
    return { pool_id: "0" };
}
exports.QueryFundersListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryFundersListRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
    return { pool_id: "0", funder: "" };
}
exports.QueryFunderRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            funder: isSet(object.funder) ? String(object.funder) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.funder !== undefined && (obj.funder = message.funder);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryFunderRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
    return { pool_id: "0", status: 0, pagination: undefined };
}
exports.QueryStakersListRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(26).fork()).ldelim();
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                case 3:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            status: isSet(object.status) ? (0, registry_1.stakerStatusFromJSON)(object.status) : 0,
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.status !== undefined &&
            (obj.status = (0, registry_1.stakerStatusToJSON)(message.status));
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakersListRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryStakersListResponse() {
    return { stakers: [], pagination: undefined };
}
exports.QueryStakersListResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.stakers; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StakerResponse.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
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
            stakers: Array.isArray(object === null || object === void 0 ? void 0 : object.stakers)
                ? object.stakers.map(function (e) { return exports.StakerResponse.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
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
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryStakersListResponse();
        message.stakers =
            ((_a = object.stakers) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StakerResponse.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryStakerRequest() {
    return { pool_id: "0", staker: "" };
}
exports.QueryStakerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakerRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
function createBasePendingCommissionChange() {
    return { new_commission: "", creation_date: "0", finish_date: "0" };
}
exports.PendingCommissionChange = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.new_commission !== "") {
            writer.uint32(10).string(message.new_commission);
        }
        if (message.creation_date !== "0") {
            writer.uint32(16).int64(message.creation_date);
        }
        if (message.finish_date !== "0") {
            writer.uint32(24).int64(message.finish_date);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePendingCommissionChange();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.new_commission = reader.string();
                    break;
                case 2:
                    message.creation_date = longToString(reader.int64());
                    break;
                case 3:
                    message.finish_date = longToString(reader.int64());
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
            new_commission: isSet(object.new_commission)
                ? String(object.new_commission)
                : "",
            creation_date: isSet(object.creation_date)
                ? String(object.creation_date)
                : "0",
            finish_date: isSet(object.finish_date) ? String(object.finish_date) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.new_commission !== undefined &&
            (obj.new_commission = message.new_commission);
        message.creation_date !== undefined &&
            (obj.creation_date = message.creation_date);
        message.finish_date !== undefined &&
            (obj.finish_date = message.finish_date);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePendingCommissionChange();
        message.new_commission = (_a = object.new_commission) !== null && _a !== void 0 ? _a : "";
        message.creation_date = (_b = object.creation_date) !== null && _b !== void 0 ? _b : "0";
        message.finish_date = (_c = object.finish_date) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseStakerResponse() {
    return {
        staker: "",
        pool_id: "0",
        account: "",
        amount: "0",
        total_delegation: "0",
        commission: "",
        moniker: "",
        website: "",
        logo: "",
        points: "0",
        unbonding_amount: "0",
        upload_probability: "",
        status: 0,
        pending_commission_change: undefined
    };
}
exports.StakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.account !== "") {
            writer.uint32(26).string(message.account);
        }
        if (message.amount !== "0") {
            writer.uint32(32).uint64(message.amount);
        }
        if (message.total_delegation !== "0") {
            writer.uint32(40).uint64(message.total_delegation);
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
        if (message.unbonding_amount !== "0") {
            writer.uint32(88).uint64(message.unbonding_amount);
        }
        if (message.upload_probability !== "") {
            writer.uint32(98).string(message.upload_probability);
        }
        if (message.status !== 0) {
            writer.uint32(104).int32(message.status);
        }
        if (message.pending_commission_change !== undefined) {
            exports.PendingCommissionChange.encode(message.pending_commission_change, writer.uint32(114).fork()).ldelim();
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
                    message.account = reader.string();
                    break;
                case 4:
                    message.amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.total_delegation = longToString(reader.uint64());
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
                case 11:
                    message.unbonding_amount = longToString(reader.uint64());
                    break;
                case 12:
                    message.upload_probability = reader.string();
                    break;
                case 13:
                    message.status = reader.int32();
                    break;
                case 14:
                    message.pending_commission_change = exports.PendingCommissionChange.decode(reader, reader.uint32());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            account: isSet(object.account) ? String(object.account) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            total_delegation: isSet(object.total_delegation)
                ? String(object.total_delegation)
                : "0",
            commission: isSet(object.commission) ? String(object.commission) : "",
            moniker: isSet(object.moniker) ? String(object.moniker) : "",
            website: isSet(object.website) ? String(object.website) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            points: isSet(object.points) ? String(object.points) : "0",
            unbonding_amount: isSet(object.unbonding_amount)
                ? String(object.unbonding_amount)
                : "0",
            upload_probability: isSet(object.upload_probability)
                ? String(object.upload_probability)
                : "",
            status: isSet(object.status) ? (0, registry_1.stakerStatusFromJSON)(object.status) : 0,
            pending_commission_change: isSet(object.pending_commission_change)
                ? exports.PendingCommissionChange.fromJSON(object.pending_commission_change)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.total_delegation !== undefined &&
            (obj.total_delegation = message.total_delegation);
        message.commission !== undefined && (obj.commission = message.commission);
        message.moniker !== undefined && (obj.moniker = message.moniker);
        message.website !== undefined && (obj.website = message.website);
        message.logo !== undefined && (obj.logo = message.logo);
        message.points !== undefined && (obj.points = message.points);
        message.unbonding_amount !== undefined &&
            (obj.unbonding_amount = message.unbonding_amount);
        message.upload_probability !== undefined &&
            (obj.upload_probability = message.upload_probability);
        message.status !== undefined &&
            (obj.status = (0, registry_1.stakerStatusToJSON)(message.status));
        message.pending_commission_change !== undefined &&
            (obj.pending_commission_change = message.pending_commission_change
                ? exports.PendingCommissionChange.toJSON(message.pending_commission_change)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var message = createBaseStakerResponse();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.total_delegation = (_e = object.total_delegation) !== null && _e !== void 0 ? _e : "0";
        message.commission = (_f = object.commission) !== null && _f !== void 0 ? _f : "";
        message.moniker = (_g = object.moniker) !== null && _g !== void 0 ? _g : "";
        message.website = (_h = object.website) !== null && _h !== void 0 ? _h : "";
        message.logo = (_j = object.logo) !== null && _j !== void 0 ? _j : "";
        message.points = (_k = object.points) !== null && _k !== void 0 ? _k : "0";
        message.unbonding_amount = (_l = object.unbonding_amount) !== null && _l !== void 0 ? _l : "0";
        message.upload_probability = (_m = object.upload_probability) !== null && _m !== void 0 ? _m : "";
        message.status = (_o = object.status) !== null && _o !== void 0 ? _o : 0;
        message.pending_commission_change =
            object.pending_commission_change !== undefined &&
                object.pending_commission_change !== null
                ? exports.PendingCommissionChange.fromPartial(object.pending_commission_change)
                : undefined;
        return message;
    }
};
function createBaseQueryVoteStatusRequest() {
    return { pool_id: "0" };
}
exports.QueryVoteStatusRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteStatusRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryVoteStatusRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        return message;
    }
};
function createBaseQueryVoteStatusResponse() {
    return { vote_status: undefined };
}
exports.QueryVoteStatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.vote_status !== undefined) {
            exports.VoteStatusResponse.encode(message.vote_status, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryVoteStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.vote_status = exports.VoteStatusResponse.decode(reader, reader.uint32());
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
            vote_status: isSet(object.vote_status)
                ? exports.VoteStatusResponse.fromJSON(object.vote_status)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.vote_status !== undefined &&
            (obj.vote_status = message.vote_status
                ? exports.VoteStatusResponse.toJSON(message.vote_status)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = createBaseQueryVoteStatusResponse();
        message.vote_status =
            object.vote_status !== undefined && object.vote_status !== null
                ? exports.VoteStatusResponse.fromPartial(object.vote_status)
                : undefined;
        return message;
    }
};
function createBaseVoteStatusResponse() {
    return { valid: "0", invalid: "0", abstain: "0", total: "0" };
}
exports.VoteStatusResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.valid !== "0") {
            writer.uint32(8).uint64(message.valid);
        }
        if (message.invalid !== "0") {
            writer.uint32(16).uint64(message.invalid);
        }
        if (message.abstain !== "0") {
            writer.uint32(24).uint64(message.abstain);
        }
        if (message.total !== "0") {
            writer.uint32(32).uint64(message.total);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVoteStatusResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valid = longToString(reader.uint64());
                    break;
                case 2:
                    message.invalid = longToString(reader.uint64());
                    break;
                case 3:
                    message.abstain = longToString(reader.uint64());
                    break;
                case 4:
                    message.total = longToString(reader.uint64());
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
            valid: isSet(object.valid) ? String(object.valid) : "0",
            invalid: isSet(object.invalid) ? String(object.invalid) : "0",
            abstain: isSet(object.abstain) ? String(object.abstain) : "0",
            total: isSet(object.total) ? String(object.total) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.valid !== undefined && (obj.valid = message.valid);
        message.invalid !== undefined && (obj.invalid = message.invalid);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseVoteStatusResponse();
        message.valid = (_a = object.valid) !== null && _a !== void 0 ? _a : "0";
        message.invalid = (_b = object.invalid) !== null && _b !== void 0 ? _b : "0";
        message.abstain = (_c = object.abstain) !== null && _c !== void 0 ? _c : "0";
        message.total = (_d = object.total) !== null && _d !== void 0 ? _d : "0";
        return message;
    }
};
function createBaseQueryProposalRequest() {
    return { storage_id: "" };
}
exports.QueryProposalRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.storage_id !== "") {
            writer.uint32(10).string(message.storage_id);
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
                    message.storage_id = reader.string();
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
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalRequest();
        message.storage_id = (_a = object.storage_id) !== null && _a !== void 0 ? _a : "";
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
    return { pagination: undefined, pool_id: "0" };
}
exports.QueryProposalsRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryProposalsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
    return { pool_id: "0", height: "0" };
}
exports.QueryProposalByHeightRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            height: isSet(object.height) ? String(object.height) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.height !== undefined && (obj.height = message.height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryProposalByHeightRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
function createBaseQueryProposalSinceFinalizedAtRequest() {
    return { pagination: undefined, pool_id: "0", finalized_at: "0" };
}
exports.QueryProposalSinceFinalizedAtRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.finalized_at !== "0") {
            writer.uint32(24).uint64(message.finalized_at);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalSinceFinalizedAtRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            finalized_at: isSet(object.finalized_at)
                ? String(object.finalized_at)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.finalized_at !== undefined &&
            (obj.finalized_at = message.finalized_at);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryProposalSinceFinalizedAtRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.finalized_at = (_b = object.finalized_at) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseQueryProposalSinceFinalizedAtResponse() {
    return { proposals: [], pagination: undefined };
}
exports.QueryProposalSinceFinalizedAtResponse = {
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
        var message = createBaseQueryProposalSinceFinalizedAtResponse();
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
        var message = createBaseQueryProposalSinceFinalizedAtResponse();
        message.proposals =
            ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Proposal.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryProposalSinceIdRequest() {
    return { pagination: undefined, pool_id: "0", id: "0" };
}
exports.QueryProposalSinceIdRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryProposalSinceIdRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 3:
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
            pagination: isSet(object.pagination)
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined,
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            id: isSet(object.id) ? String(object.id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryProposalSinceIdRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "0";
        return message;
    }
};
function createBaseQueryProposalSinceIdResponse() {
    return { proposals: [], pagination: undefined };
}
exports.QueryProposalSinceIdResponse = {
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
        var message = createBaseQueryProposalSinceIdResponse();
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
        var message = createBaseQueryProposalSinceIdResponse();
        message.proposals =
            ((_a = object.proposals) === null || _a === void 0 ? void 0 : _a.map(function (e) { return registry_1.Proposal.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryCanProposeRequest() {
    return { pool_id: "0", proposer: "", from_height: "0" };
}
exports.QueryCanProposeRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.proposer !== "") {
            writer.uint32(18).string(message.proposer);
        }
        if (message.from_height !== "0") {
            writer.uint32(24).uint64(message.from_height);
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.proposer = reader.string();
                    break;
                case 3:
                    message.from_height = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            proposer: isSet(object.proposer) ? String(object.proposer) : "",
            from_height: isSet(object.from_height) ? String(object.from_height) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.proposer !== undefined && (obj.proposer = message.proposer);
        message.from_height !== undefined &&
            (obj.from_height = message.from_height);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryCanProposeRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.proposer = (_b = object.proposer) !== null && _b !== void 0 ? _b : "";
        message.from_height = (_c = object.from_height) !== null && _c !== void 0 ? _c : "0";
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
    return { pool_id: "0", voter: "", storage_id: "" };
}
exports.QueryCanVoteRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.storage_id !== "") {
            writer.uint32(26).string(message.storage_id);
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
                    message.pool_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.storage_id = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            voter: isSet(object.voter) ? String(object.voter) : "",
            storage_id: isSet(object.storage_id) ? String(object.storage_id) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.voter !== undefined && (obj.voter = message.voter);
        message.storage_id !== undefined && (obj.storage_id = message.storage_id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryCanVoteRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.storage_id = (_c = object.storage_id) !== null && _c !== void 0 ? _c : "";
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
    return { pool_id: "0", staker: "" };
}
exports.QueryStakeInfoRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseQueryStakeInfoRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryStakeInfoResponse() {
    return { balance: "", current_stake: "", minimum_stake: "", status: 0 };
}
exports.QueryStakeInfoResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.balance !== "") {
            writer.uint32(10).string(message.balance);
        }
        if (message.current_stake !== "") {
            writer.uint32(18).string(message.current_stake);
        }
        if (message.minimum_stake !== "") {
            writer.uint32(26).string(message.minimum_stake);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
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
                    message.current_stake = reader.string();
                    break;
                case 3:
                    message.minimum_stake = reader.string();
                    break;
                case 4:
                    message.status = reader.int32();
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
            current_stake: isSet(object.current_stake)
                ? String(object.current_stake)
                : "",
            minimum_stake: isSet(object.minimum_stake)
                ? String(object.minimum_stake)
                : "",
            status: isSet(object.status) ? (0, registry_1.stakerStatusFromJSON)(object.status) : 0
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.current_stake !== undefined &&
            (obj.current_stake = message.current_stake);
        message.minimum_stake !== undefined &&
            (obj.minimum_stake = message.minimum_stake);
        message.status !== undefined &&
            (obj.status = (0, registry_1.stakerStatusToJSON)(message.status));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseQueryStakeInfoResponse();
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "";
        message.current_stake = (_b = object.current_stake) !== null && _b !== void 0 ? _b : "";
        message.minimum_stake = (_c = object.minimum_stake) !== null && _c !== void 0 ? _c : "";
        message.status = (_d = object.status) !== null && _d !== void 0 ? _d : 0;
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
        protocol_staking: "0",
        protocol_staking_unbonding: "0",
        protocol_delegation: "0",
        protocol_delegation_unbonding: "0",
        protocol_rewards: "0",
        protocol_funding: "0"
    };
}
exports.QueryAccountAssetsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.balance !== "0") {
            writer.uint32(8).uint64(message.balance);
        }
        if (message.protocol_staking !== "0") {
            writer.uint32(16).uint64(message.protocol_staking);
        }
        if (message.protocol_staking_unbonding !== "0") {
            writer.uint32(24).uint64(message.protocol_staking_unbonding);
        }
        if (message.protocol_delegation !== "0") {
            writer.uint32(32).uint64(message.protocol_delegation);
        }
        if (message.protocol_delegation_unbonding !== "0") {
            writer.uint32(40).uint64(message.protocol_delegation_unbonding);
        }
        if (message.protocol_rewards !== "0") {
            writer.uint32(48).uint64(message.protocol_rewards);
        }
        if (message.protocol_funding !== "0") {
            writer.uint32(56).uint64(message.protocol_funding);
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
                    message.protocol_staking = longToString(reader.uint64());
                    break;
                case 3:
                    message.protocol_staking_unbonding = longToString(reader.uint64());
                    break;
                case 4:
                    message.protocol_delegation = longToString(reader.uint64());
                    break;
                case 5:
                    message.protocol_delegation_unbonding = longToString(reader.uint64());
                    break;
                case 6:
                    message.protocol_rewards = longToString(reader.uint64());
                    break;
                case 7:
                    message.protocol_funding = longToString(reader.uint64());
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
            protocol_staking: isSet(object.protocol_staking)
                ? String(object.protocol_staking)
                : "0",
            protocol_staking_unbonding: isSet(object.protocol_staking_unbonding)
                ? String(object.protocol_staking_unbonding)
                : "0",
            protocol_delegation: isSet(object.protocol_delegation)
                ? String(object.protocol_delegation)
                : "0",
            protocol_delegation_unbonding: isSet(object.protocol_delegation_unbonding)
                ? String(object.protocol_delegation_unbonding)
                : "0",
            protocol_rewards: isSet(object.protocol_rewards)
                ? String(object.protocol_rewards)
                : "0",
            protocol_funding: isSet(object.protocol_funding)
                ? String(object.protocol_funding)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.balance !== undefined && (obj.balance = message.balance);
        message.protocol_staking !== undefined &&
            (obj.protocol_staking = message.protocol_staking);
        message.protocol_staking_unbonding !== undefined &&
            (obj.protocol_staking_unbonding = message.protocol_staking_unbonding);
        message.protocol_delegation !== undefined &&
            (obj.protocol_delegation = message.protocol_delegation);
        message.protocol_delegation_unbonding !== undefined &&
            (obj.protocol_delegation_unbonding =
                message.protocol_delegation_unbonding);
        message.protocol_rewards !== undefined &&
            (obj.protocol_rewards = message.protocol_rewards);
        message.protocol_funding !== undefined &&
            (obj.protocol_funding = message.protocol_funding);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseQueryAccountAssetsResponse();
        message.balance = (_a = object.balance) !== null && _a !== void 0 ? _a : "0";
        message.protocol_staking = (_b = object.protocol_staking) !== null && _b !== void 0 ? _b : "0";
        message.protocol_staking_unbonding =
            (_c = object.protocol_staking_unbonding) !== null && _c !== void 0 ? _c : "0";
        message.protocol_delegation = (_d = object.protocol_delegation) !== null && _d !== void 0 ? _d : "0";
        message.protocol_delegation_unbonding =
            (_e = object.protocol_delegation_unbonding) !== null && _e !== void 0 ? _e : "0";
        message.protocol_rewards = (_f = object.protocol_rewards) !== null && _f !== void 0 ? _f : "0";
        message.protocol_funding = (_g = object.protocol_funding) !== null && _g !== void 0 ? _g : "0";
        return message;
    }
};
function createBaseQueryAccountStakingUnbondingsRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountStakingUnbondingsRequest = {
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
        var message = createBaseQueryAccountStakingUnbondingsRequest();
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
        var message = createBaseQueryAccountStakingUnbondingsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountStakingUnbondingsResponse() {
    return { unbondings: [], pagination: undefined };
}
exports.QueryAccountStakingUnbondingsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.unbondings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.StakingUnbonding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountStakingUnbondingsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondings.push(exports.StakingUnbonding.decode(reader, reader.uint32()));
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
            unbondings: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondings)
                ? object.unbondings.map(function (e) { return exports.StakingUnbonding.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(function (e) {
                return e ? exports.StakingUnbonding.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbondings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountStakingUnbondingsResponse();
        message.unbondings =
            ((_a = object.unbondings) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.StakingUnbonding.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseStakingUnbonding() {
    return { amount: "0", creation_time: "0", pool: undefined };
}
exports.StakingUnbonding = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.creation_time !== "0") {
            writer.uint32(16).uint64(message.creation_time);
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseStakingUnbonding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToString(reader.uint64());
                    break;
                case 2:
                    message.creation_time = longToString(reader.uint64());
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time)
                ? String(object.creation_time)
                : "0",
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined &&
            (obj.creation_time = message.creation_time);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseStakingUnbonding();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        message.creation_time = (_b = object.creation_time) !== null && _b !== void 0 ? _b : "0";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    }
};
function createBaseQueryAccountDelegationUnbondingsRequest() {
    return { pagination: undefined, address: "" };
}
exports.QueryAccountDelegationUnbondingsRequest = {
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
        var message = createBaseQueryAccountDelegationUnbondingsRequest();
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
        var message = createBaseQueryAccountDelegationUnbondingsRequest();
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountDelegationUnbondingsResponse() {
    return { unbondings: [], pagination: undefined };
}
exports.QueryAccountDelegationUnbondingsResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        for (var _i = 0, _a = message.unbondings; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.DelegationUnbonding.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountDelegationUnbondingsResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.unbondings.push(exports.DelegationUnbonding.decode(reader, reader.uint32()));
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
            unbondings: Array.isArray(object === null || object === void 0 ? void 0 : object.unbondings)
                ? object.unbondings.map(function (e) { return exports.DelegationUnbonding.fromJSON(e); })
                : [],
            pagination: isSet(object.pagination)
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.unbondings) {
            obj.unbondings = message.unbondings.map(function (e) {
                return e ? exports.DelegationUnbonding.toJSON(e) : undefined;
            });
        }
        else {
            obj.unbondings = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountDelegationUnbondingsResponse();
        message.unbondings =
            ((_a = object.unbondings) === null || _a === void 0 ? void 0 : _a.map(function (e) { return exports.DelegationUnbonding.fromPartial(e); })) || [];
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseDelegationUnbonding() {
    return {
        amount: "0",
        creation_time: "0",
        staker: undefined,
        pool: undefined
    };
}
exports.DelegationUnbonding = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.amount !== "0") {
            writer.uint32(8).uint64(message.amount);
        }
        if (message.creation_time !== "0") {
            writer.uint32(16).uint64(message.creation_time);
        }
        if (message.staker !== undefined) {
            exports.StakerResponse.encode(message.staker, writer.uint32(26).fork()).ldelim();
        }
        if (message.pool !== undefined) {
            registry_1.Pool.encode(message.pool, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDelegationUnbonding();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.amount = longToString(reader.uint64());
                    break;
                case 2:
                    message.creation_time = longToString(reader.uint64());
                    break;
                case 3:
                    message.staker = exports.StakerResponse.decode(reader, reader.uint32());
                    break;
                case 4:
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
            amount: isSet(object.amount) ? String(object.amount) : "0",
            creation_time: isSet(object.creation_time)
                ? String(object.creation_time)
                : "0",
            staker: isSet(object.staker)
                ? exports.StakerResponse.fromJSON(object.staker)
                : undefined,
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.amount !== undefined && (obj.amount = message.amount);
        message.creation_time !== undefined &&
            (obj.creation_time = message.creation_time);
        message.staker !== undefined &&
            (obj.staker = message.staker
                ? exports.StakerResponse.toJSON(message.staker)
                : undefined);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseDelegationUnbonding();
        message.amount = (_a = object.amount) !== null && _a !== void 0 ? _a : "0";
        message.creation_time = (_b = object.creation_time) !== null && _b !== void 0 ? _b : "0";
        message.staker =
            object.staker !== undefined && object.staker !== null
                ? exports.StakerResponse.fromPartial(object.staker)
                : undefined;
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
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
    return {
        staker: "",
        pool_id: "0",
        account: "",
        amount: "0",
        pool: undefined,
        unbonding_amount: "0",
        upload_probability: ""
    };
}
exports.Staked = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
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
        if (message.unbonding_amount !== "0") {
            writer.uint32(56).uint64(message.unbonding_amount);
        }
        if (message.upload_probability !== "") {
            writer.uint32(66).string(message.upload_probability);
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
                    message.pool_id = longToString(reader.uint64());
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
                case 7:
                    message.unbonding_amount = longToString(reader.uint64());
                    break;
                case 8:
                    message.upload_probability = reader.string();
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            account: isSet(object.account) ? String(object.account) : "",
            amount: isSet(object.amount) ? String(object.amount) : "0",
            pool: isSet(object.pool) ? registry_1.Pool.fromJSON(object.pool) : undefined,
            unbonding_amount: isSet(object.unbonding_amount)
                ? String(object.unbonding_amount)
                : "0",
            upload_probability: isSet(object.upload_probability)
                ? String(object.upload_probability)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.account !== undefined && (obj.account = message.account);
        message.amount !== undefined && (obj.amount = message.amount);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        message.unbonding_amount !== undefined &&
            (obj.unbonding_amount = message.unbonding_amount);
        message.upload_probability !== undefined &&
            (obj.upload_probability = message.upload_probability);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f;
        var message = createBaseStaked();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.pool_id = (_b = object.pool_id) !== null && _b !== void 0 ? _b : "0";
        message.account = (_c = object.account) !== null && _c !== void 0 ? _c : "";
        message.amount = (_d = object.amount) !== null && _d !== void 0 ? _d : "0";
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? registry_1.Pool.fromPartial(object.pool)
                : undefined;
        message.unbonding_amount = (_e = object.unbonding_amount) !== null && _e !== void 0 ? _e : "0";
        message.upload_probability = (_f = object.upload_probability) !== null && _f !== void 0 ? _f : "";
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
function createBaseDelegatorResponse() {
    return {
        account: "",
        pool: undefined,
        current_reward: "0",
        delegation_amount: "0",
        staker: "",
        pending_commission_change: undefined,
        delegation_pool_data: undefined
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
        if (message.current_reward !== "0") {
            writer.uint32(24).uint64(message.current_reward);
        }
        if (message.delegation_amount !== "0") {
            writer.uint32(32).uint64(message.delegation_amount);
        }
        if (message.staker !== "") {
            writer.uint32(42).string(message.staker);
        }
        if (message.pending_commission_change !== undefined) {
            exports.PendingCommissionChange.encode(message.pending_commission_change, writer.uint32(50).fork()).ldelim();
        }
        if (message.delegation_pool_data !== undefined) {
            registry_1.DelegationPoolData.encode(message.delegation_pool_data, writer.uint32(58).fork()).ldelim();
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
                    message.current_reward = longToString(reader.uint64());
                    break;
                case 4:
                    message.delegation_amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.staker = reader.string();
                    break;
                case 6:
                    message.pending_commission_change = exports.PendingCommissionChange.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.delegation_pool_data = registry_1.DelegationPoolData.decode(reader, reader.uint32());
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
            current_reward: isSet(object.current_reward)
                ? String(object.current_reward)
                : "0",
            delegation_amount: isSet(object.delegation_amount)
                ? String(object.delegation_amount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            pending_commission_change: isSet(object.pending_commission_change)
                ? exports.PendingCommissionChange.fromJSON(object.pending_commission_change)
                : undefined,
            delegation_pool_data: isSet(object.delegation_pool_data)
                ? registry_1.DelegationPoolData.fromJSON(object.delegation_pool_data)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.account !== undefined && (obj.account = message.account);
        message.pool !== undefined &&
            (obj.pool = message.pool ? registry_1.Pool.toJSON(message.pool) : undefined);
        message.current_reward !== undefined &&
            (obj.current_reward = message.current_reward);
        message.delegation_amount !== undefined &&
            (obj.delegation_amount = message.delegation_amount);
        message.staker !== undefined && (obj.staker = message.staker);
        message.pending_commission_change !== undefined &&
            (obj.pending_commission_change = message.pending_commission_change
                ? exports.PendingCommissionChange.toJSON(message.pending_commission_change)
                : undefined);
        message.delegation_pool_data !== undefined &&
            (obj.delegation_pool_data = message.delegation_pool_data
                ? registry_1.DelegationPoolData.toJSON(message.delegation_pool_data)
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
        message.current_reward = (_b = object.current_reward) !== null && _b !== void 0 ? _b : "0";
        message.delegation_amount = (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        message.pending_commission_change =
            object.pending_commission_change !== undefined &&
                object.pending_commission_change !== null
                ? exports.PendingCommissionChange.fromPartial(object.pending_commission_change)
                : undefined;
        message.delegation_pool_data =
            object.delegation_pool_data !== undefined &&
                object.delegation_pool_data !== null
                ? registry_1.DelegationPoolData.fromPartial(object.delegation_pool_data)
                : undefined;
        return message;
    }
};
function createBaseQueryAccountRedelegationRequest() {
    return { address: "" };
}
exports.QueryAccountRedelegationRequest = {
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
        var message = createBaseQueryAccountRedelegationRequest();
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
        var message = createBaseQueryAccountRedelegationRequest();
        message.address = (_a = object.address) !== null && _a !== void 0 ? _a : "";
        return message;
    }
};
function createBaseQueryAccountRedelegationResponse() {
    return { redelegation_cooldown_entries: [] };
}
exports.QueryAccountRedelegationResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        writer.uint32(10).fork();
        for (var _i = 0, _a = message.redelegation_cooldown_entries; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseQueryAccountRedelegationResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.redelegation_cooldown_entries.push(longToString(reader.uint64()));
                        }
                    }
                    else {
                        message.redelegation_cooldown_entries.push(longToString(reader.uint64()));
                    }
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
            redelegation_cooldown_entries: Array.isArray(object === null || object === void 0 ? void 0 : object.redelegation_cooldown_entries)
                ? object.redelegation_cooldown_entries.map(function (e) { return String(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.redelegation_cooldown_entries) {
            obj.redelegation_cooldown_entries =
                message.redelegation_cooldown_entries.map(function (e) { return e; });
        }
        else {
            obj.redelegation_cooldown_entries = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseQueryAccountRedelegationResponse();
        message.redelegation_cooldown_entries =
            ((_a = object.redelegation_cooldown_entries) === null || _a === void 0 ? void 0 : _a.map(function (e) { return e; })) || [];
        return message;
    }
};
function createBaseQueryDelegatorRequest() {
    return { pool_id: "0", staker: "", delegator: "" };
}
exports.QueryDelegatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pool_id !== "0") {
            writer.uint32(8).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : "",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
        message.staker !== undefined && (obj.staker = message.staker);
        message.delegator !== undefined && (obj.delegator = message.delegator);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseQueryDelegatorRequest();
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
function createBaseStakerDelegatorResponse() {
    return {
        delegator: "",
        current_reward: "0",
        delegation_amount: "0",
        staker: ""
    };
}
exports.StakerDelegatorResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.delegator !== "") {
            writer.uint32(10).string(message.delegator);
        }
        if (message.current_reward !== "0") {
            writer.uint32(16).uint64(message.current_reward);
        }
        if (message.delegation_amount !== "0") {
            writer.uint32(24).uint64(message.delegation_amount);
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
                    message.current_reward = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegation_amount = longToString(reader.uint64());
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
            current_reward: isSet(object.current_reward)
                ? String(object.current_reward)
                : "0",
            delegation_amount: isSet(object.delegation_amount)
                ? String(object.delegation_amount)
                : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.delegator !== undefined && (obj.delegator = message.delegator);
        message.current_reward !== undefined &&
            (obj.current_reward = message.current_reward);
        message.delegation_amount !== undefined &&
            (obj.delegation_amount = message.delegation_amount);
        message.staker !== undefined && (obj.staker = message.staker);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseStakerDelegatorResponse();
        message.delegator = (_a = object.delegator) !== null && _a !== void 0 ? _a : "";
        message.current_reward = (_b = object.current_reward) !== null && _b !== void 0 ? _b : "0";
        message.delegation_amount = (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
        message.staker = (_d = object.staker) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseQueryDelegatorsByPoolAndStakerRequest() {
    return { pagination: undefined, pool_id: "0", staker: "" };
}
exports.QueryDelegatorsByPoolAndStakerRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            staker: isSet(object.staker) ? String(object.staker) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
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
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
        message.staker = (_b = object.staker) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseQueryDelegatorsByPoolAndStakerResponse() {
    return {
        delegators: [],
        pool: undefined,
        delegation_pool_data: undefined,
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
        if (message.delegation_pool_data !== undefined) {
            registry_1.DelegationPoolData.encode(message.delegation_pool_data, writer.uint32(26).fork()).ldelim();
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
                    message.delegation_pool_data = registry_1.DelegationPoolData.decode(reader, reader.uint32());
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
            delegation_pool_data: isSet(object.delegation_pool_data)
                ? registry_1.DelegationPoolData.fromJSON(object.delegation_pool_data)
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
        message.delegation_pool_data !== undefined &&
            (obj.delegation_pool_data = message.delegation_pool_data
                ? registry_1.DelegationPoolData.toJSON(message.delegation_pool_data)
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
        message.delegation_pool_data =
            object.delegation_pool_data !== undefined &&
                object.delegation_pool_data !== null
                ? registry_1.DelegationPoolData.fromPartial(object.delegation_pool_data)
                : undefined;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    }
};
function createBaseQueryStakersByPoolAndDelegatorRequest() {
    return { pagination: undefined, pool_id: "0", delegator: "" };
}
exports.QueryStakersByPoolAndDelegatorRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        if (message.pool_id !== "0") {
            writer.uint32(16).uint64(message.pool_id);
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
                    message.pool_id = longToString(reader.uint64());
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
            pool_id: isSet(object.pool_id) ? String(object.pool_id) : "0",
            delegator: isSet(object.delegator) ? String(object.delegator) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        message.pool_id !== undefined && (obj.pool_id = message.pool_id);
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
        message.pool_id = (_a = object.pool_id) !== null && _a !== void 0 ? _a : "0";
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
        current_reward: "0",
        delegation_amount: "0",
        total_delegation_amount: "0",
        delegator_count: "0"
    };
}
exports.DelegationForStakerResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.staker !== "") {
            writer.uint32(10).string(message.staker);
        }
        if (message.current_reward !== "0") {
            writer.uint32(16).uint64(message.current_reward);
        }
        if (message.delegation_amount !== "0") {
            writer.uint32(24).uint64(message.delegation_amount);
        }
        if (message.total_delegation_amount !== "0") {
            writer.uint32(32).uint64(message.total_delegation_amount);
        }
        if (message.delegator_count !== "0") {
            writer.uint32(40).uint64(message.delegator_count);
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
                    message.current_reward = longToString(reader.uint64());
                    break;
                case 3:
                    message.delegation_amount = longToString(reader.uint64());
                    break;
                case 4:
                    message.total_delegation_amount = longToString(reader.uint64());
                    break;
                case 5:
                    message.delegator_count = longToString(reader.uint64());
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
            current_reward: isSet(object.current_reward)
                ? String(object.current_reward)
                : "0",
            delegation_amount: isSet(object.delegation_amount)
                ? String(object.delegation_amount)
                : "0",
            total_delegation_amount: isSet(object.total_delegation_amount)
                ? String(object.total_delegation_amount)
                : "0",
            delegator_count: isSet(object.delegator_count)
                ? String(object.delegator_count)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.staker !== undefined && (obj.staker = message.staker);
        message.current_reward !== undefined &&
            (obj.current_reward = message.current_reward);
        message.delegation_amount !== undefined &&
            (obj.delegation_amount = message.delegation_amount);
        message.total_delegation_amount !== undefined &&
            (obj.total_delegation_amount = message.total_delegation_amount);
        message.delegator_count !== undefined &&
            (obj.delegator_count = message.delegator_count);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBaseDelegationForStakerResponse();
        message.staker = (_a = object.staker) !== null && _a !== void 0 ? _a : "";
        message.current_reward = (_b = object.current_reward) !== null && _b !== void 0 ? _b : "0";
        message.delegation_amount = (_c = object.delegation_amount) !== null && _c !== void 0 ? _c : "0";
        message.total_delegation_amount = (_d = object.total_delegation_amount) !== null && _d !== void 0 ? _d : "0";
        message.delegator_count = (_e = object.delegator_count) !== null && _e !== void 0 ? _e : "0";
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
        this.VoteStatus = this.VoteStatus.bind(this);
        this.Proposal = this.Proposal.bind(this);
        this.Proposals = this.Proposals.bind(this);
        this.ProposalByHeight = this.ProposalByHeight.bind(this);
        this.ProposalSinceFinalizedAt = this.ProposalSinceFinalizedAt.bind(this);
        this.ProposalSinceId = this.ProposalSinceId.bind(this);
        this.CanPropose = this.CanPropose.bind(this);
        this.CanVote = this.CanVote.bind(this);
        this.StakeInfo = this.StakeInfo.bind(this);
        this.AccountAssets = this.AccountAssets.bind(this);
        this.AccountStakingUnbondings = this.AccountStakingUnbondings.bind(this);
        this.AccountDelegationUnbondings =
            this.AccountDelegationUnbondings.bind(this);
        this.AccountFundedList = this.AccountFundedList.bind(this);
        this.AccountStakedList = this.AccountStakedList.bind(this);
        this.AccountDelegationList = this.AccountDelegationList.bind(this);
        this.AccountRedelegation = this.AccountRedelegation.bind(this);
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
    QueryClientImpl.prototype.VoteStatus = function (request) {
        var data = exports.QueryVoteStatusRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "VoteStatus", data);
        return promise.then(function (data) {
            return exports.QueryVoteStatusResponse.decode(new _m0.Reader(data));
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
    QueryClientImpl.prototype.ProposalSinceFinalizedAt = function (request) {
        var data = exports.QueryProposalSinceFinalizedAtRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "ProposalSinceFinalizedAt", data);
        return promise.then(function (data) {
            return exports.QueryProposalSinceFinalizedAtResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.ProposalSinceId = function (request) {
        var data = exports.QueryProposalSinceIdRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "ProposalSinceId", data);
        return promise.then(function (data) {
            return exports.QueryProposalSinceIdResponse.decode(new _m0.Reader(data));
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
    QueryClientImpl.prototype.AccountStakingUnbondings = function (request) {
        var data = exports.QueryAccountStakingUnbondingsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountStakingUnbondings", data);
        return promise.then(function (data) {
            return exports.QueryAccountStakingUnbondingsResponse.decode(new _m0.Reader(data));
        });
    };
    QueryClientImpl.prototype.AccountDelegationUnbondings = function (request) {
        var data = exports.QueryAccountDelegationUnbondingsRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountDelegationUnbondings", data);
        return promise.then(function (data) {
            return exports.QueryAccountDelegationUnbondingsResponse.decode(new _m0.Reader(data));
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
    QueryClientImpl.prototype.AccountRedelegation = function (request) {
        var data = exports.QueryAccountRedelegationRequest.encode(request).finish();
        var promise = this.rpc.request("kyve.registry.v1beta1.Query", "AccountRedelegation", data);
        return promise.then(function (data) {
            return exports.QueryAccountRedelegationResponse.decode(new _m0.Reader(data));
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
