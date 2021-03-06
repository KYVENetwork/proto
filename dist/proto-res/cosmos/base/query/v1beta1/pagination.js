"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PageResponse = exports.PageRequest = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.base.query.v1beta1";
function createBasePageRequest() {
    return {
        key: new Uint8Array(),
        offset: "0",
        limit: "0",
        count_total: false,
        reverse: false
    };
}
exports.PageRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.key.length !== 0) {
            writer.uint32(10).bytes(message.key);
        }
        if (message.offset !== "0") {
            writer.uint32(16).uint64(message.offset);
        }
        if (message.limit !== "0") {
            writer.uint32(24).uint64(message.limit);
        }
        if (message.count_total === true) {
            writer.uint32(32).bool(message.count_total);
        }
        if (message.reverse === true) {
            writer.uint32(40).bool(message.reverse);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePageRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.key = reader.bytes();
                    break;
                case 2:
                    message.offset = longToString(reader.uint64());
                    break;
                case 3:
                    message.limit = longToString(reader.uint64());
                    break;
                case 4:
                    message.count_total = reader.bool();
                    break;
                case 5:
                    message.reverse = reader.bool();
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
            key: isSet(object.key) ? bytesFromBase64(object.key) : new Uint8Array(),
            offset: isSet(object.offset) ? String(object.offset) : "0",
            limit: isSet(object.limit) ? String(object.limit) : "0",
            count_total: isSet(object.count_total)
                ? Boolean(object.count_total)
                : false,
            reverse: isSet(object.reverse) ? Boolean(object.reverse) : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.key !== undefined &&
            (obj.key = base64FromBytes(message.key !== undefined ? message.key : new Uint8Array()));
        message.offset !== undefined && (obj.offset = message.offset);
        message.limit !== undefined && (obj.limit = message.limit);
        message.count_total !== undefined &&
            (obj.count_total = message.count_total);
        message.reverse !== undefined && (obj.reverse = message.reverse);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e;
        var message = createBasePageRequest();
        message.key = (_a = object.key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.offset = (_b = object.offset) !== null && _b !== void 0 ? _b : "0";
        message.limit = (_c = object.limit) !== null && _c !== void 0 ? _c : "0";
        message.count_total = (_d = object.count_total) !== null && _d !== void 0 ? _d : false;
        message.reverse = (_e = object.reverse) !== null && _e !== void 0 ? _e : false;
        return message;
    }
};
function createBasePageResponse() {
    return { next_key: new Uint8Array(), total: "0" };
}
exports.PageResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.next_key.length !== 0) {
            writer.uint32(10).bytes(message.next_key);
        }
        if (message.total !== "0") {
            writer.uint32(16).uint64(message.total);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePageResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.next_key = reader.bytes();
                    break;
                case 2:
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
            next_key: isSet(object.next_key)
                ? bytesFromBase64(object.next_key)
                : new Uint8Array(),
            total: isSet(object.total) ? String(object.total) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.next_key !== undefined &&
            (obj.next_key = base64FromBytes(message.next_key !== undefined ? message.next_key : new Uint8Array()));
        message.total !== undefined && (obj.total = message.total);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBasePageResponse();
        message.next_key = (_a = object.next_key) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.total = (_b = object.total) !== null && _b !== void 0 ? _b : "0";
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
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    arr.forEach(function (byte) {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
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
