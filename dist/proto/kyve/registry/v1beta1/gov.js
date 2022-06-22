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
exports.CancelPoolUpgradeProposal = exports.SchedulePoolUpgradeProposal = exports.UnpausePoolProposal = exports.PausePoolProposal = exports.UpdatePoolProposal = exports.CreatePoolProposal = exports.protobufPackage = void 0;
/* eslint-disable */
var long_1 = __importDefault(require("long"));
var _m0 = __importStar(require("protobufjs/minimal"));
exports.protobufPackage = "kyve.registry.v1beta1";
function createBaseCreatePoolProposal() {
    return {
        title: "",
        description: "",
        name: "",
        runtime: "",
        logo: "",
        version: "",
        config: "",
        start_height: "0",
        upload_interval: "0",
        operating_cost: "0",
        max_bundle_size: "0",
        binaries: ""
    };
}
exports.CreatePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
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
        if (message.version !== "") {
            writer.uint32(50).string(message.version);
        }
        if (message.config !== "") {
            writer.uint32(58).string(message.config);
        }
        if (message.start_height !== "0") {
            writer.uint32(64).uint64(message.start_height);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(72).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(80).uint64(message.operating_cost);
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(88).uint64(message.max_bundle_size);
        }
        if (message.binaries !== "") {
            writer.uint32(98).string(message.binaries);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCreatePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
                    message.version = reader.string();
                    break;
                case 7:
                    message.config = reader.string();
                    break;
                case 8:
                    message.start_height = longToString(reader.uint64());
                    break;
                case 9:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 10:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 11:
                    message.max_bundle_size = longToString(reader.uint64());
                    break;
                case 12:
                    message.binaries = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            version: isSet(object.version) ? String(object.version) : "",
            config: isSet(object.config) ? String(object.config) : "",
            start_height: isSet(object.start_height)
                ? String(object.start_height)
                : "0",
            upload_interval: isSet(object.upload_interval)
                ? String(object.upload_interval)
                : "0",
            operating_cost: isSet(object.operating_cost)
                ? String(object.operating_cost)
                : "0",
            max_bundle_size: isSet(object.max_bundle_size)
                ? String(object.max_bundle_size)
                : "0",
            binaries: isSet(object.binaries) ? String(object.binaries) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.version !== undefined && (obj.version = message.version);
        message.config !== undefined && (obj.config = message.config);
        message.start_height !== undefined &&
            (obj.start_height = message.start_height);
        message.upload_interval !== undefined &&
            (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined &&
            (obj.operating_cost = message.operating_cost);
        message.max_bundle_size !== undefined &&
            (obj.max_bundle_size = message.max_bundle_size);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var message = createBaseCreatePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.runtime = (_d = object.runtime) !== null && _d !== void 0 ? _d : "";
        message.logo = (_e = object.logo) !== null && _e !== void 0 ? _e : "";
        message.version = (_f = object.version) !== null && _f !== void 0 ? _f : "";
        message.config = (_g = object.config) !== null && _g !== void 0 ? _g : "";
        message.start_height = (_h = object.start_height) !== null && _h !== void 0 ? _h : "0";
        message.upload_interval = (_j = object.upload_interval) !== null && _j !== void 0 ? _j : "0";
        message.operating_cost = (_k = object.operating_cost) !== null && _k !== void 0 ? _k : "0";
        message.max_bundle_size = (_l = object.max_bundle_size) !== null && _l !== void 0 ? _l : "0";
        message.binaries = (_m = object.binaries) !== null && _m !== void 0 ? _m : "";
        return message;
    }
};
function createBaseUpdatePoolProposal() {
    return {
        title: "",
        description: "",
        id: "0",
        name: "",
        runtime: "",
        logo: "",
        versions: "",
        config: "",
        upload_interval: "0",
        operating_cost: "0",
        max_bundle_size: "0"
    };
}
exports.UpdatePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        if (message.name !== "") {
            writer.uint32(34).string(message.name);
        }
        if (message.runtime !== "") {
            writer.uint32(42).string(message.runtime);
        }
        if (message.logo !== "") {
            writer.uint32(50).string(message.logo);
        }
        if (message.versions !== "") {
            writer.uint32(58).string(message.versions);
        }
        if (message.config !== "") {
            writer.uint32(66).string(message.config);
        }
        if (message.upload_interval !== "0") {
            writer.uint32(72).uint64(message.upload_interval);
        }
        if (message.operating_cost !== "0") {
            writer.uint32(80).uint64(message.operating_cost);
        }
        if (message.max_bundle_size !== "0") {
            writer.uint32(88).uint64(message.max_bundle_size);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUpdatePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.id = longToString(reader.uint64());
                    break;
                case 4:
                    message.name = reader.string();
                    break;
                case 5:
                    message.runtime = reader.string();
                    break;
                case 6:
                    message.logo = reader.string();
                    break;
                case 7:
                    message.versions = reader.string();
                    break;
                case 8:
                    message.config = reader.string();
                    break;
                case 9:
                    message.upload_interval = longToString(reader.uint64());
                    break;
                case 10:
                    message.operating_cost = longToString(reader.uint64());
                    break;
                case 11:
                    message.max_bundle_size = longToString(reader.uint64());
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0",
            name: isSet(object.name) ? String(object.name) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            logo: isSet(object.logo) ? String(object.logo) : "",
            versions: isSet(object.versions) ? String(object.versions) : "",
            config: isSet(object.config) ? String(object.config) : "",
            upload_interval: isSet(object.upload_interval)
                ? String(object.upload_interval)
                : "0",
            operating_cost: isSet(object.operating_cost)
                ? String(object.operating_cost)
                : "0",
            max_bundle_size: isSet(object.max_bundle_size)
                ? String(object.max_bundle_size)
                : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.logo !== undefined && (obj.logo = message.logo);
        message.versions !== undefined && (obj.versions = message.versions);
        message.config !== undefined && (obj.config = message.config);
        message.upload_interval !== undefined &&
            (obj.upload_interval = message.upload_interval);
        message.operating_cost !== undefined &&
            (obj.operating_cost = message.operating_cost);
        message.max_bundle_size !== undefined &&
            (obj.max_bundle_size = message.max_bundle_size);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var message = createBaseUpdatePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        message.name = (_d = object.name) !== null && _d !== void 0 ? _d : "";
        message.runtime = (_e = object.runtime) !== null && _e !== void 0 ? _e : "";
        message.logo = (_f = object.logo) !== null && _f !== void 0 ? _f : "";
        message.versions = (_g = object.versions) !== null && _g !== void 0 ? _g : "";
        message.config = (_h = object.config) !== null && _h !== void 0 ? _h : "";
        message.upload_interval = (_j = object.upload_interval) !== null && _j !== void 0 ? _j : "0";
        message.operating_cost = (_k = object.operating_cost) !== null && _k !== void 0 ? _k : "0";
        message.max_bundle_size = (_l = object.max_bundle_size) !== null && _l !== void 0 ? _l : "0";
        return message;
    }
};
function createBasePausePoolProposal() {
    return { title: "", description: "", id: "0" };
}
exports.PausePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBasePausePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBasePausePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseUnpausePoolProposal() {
    return { title: "", description: "", id: "0" };
}
exports.UnpausePoolProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.id !== "0") {
            writer.uint32(24).uint64(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseUnpausePoolProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            id: isSet(object.id) ? String(object.id) : "0"
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseUnpausePoolProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.id = (_c = object.id) !== null && _c !== void 0 ? _c : "0";
        return message;
    }
};
function createBaseSchedulePoolUpgradeProposal() {
    return {
        title: "",
        description: "",
        runtime: "",
        version: "",
        scheduled_at: "0",
        duration: "0",
        binaries: ""
    };
}
exports.SchedulePoolUpgradeProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        if (message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        if (message.scheduled_at !== "0") {
            writer.uint32(40).uint64(message.scheduled_at);
        }
        if (message.duration !== "0") {
            writer.uint32(48).uint64(message.duration);
        }
        if (message.binaries !== "") {
            writer.uint32(58).string(message.binaries);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseSchedulePoolUpgradeProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                case 5:
                    message.scheduled_at = longToString(reader.uint64());
                    break;
                case 6:
                    message.duration = longToString(reader.uint64());
                    break;
                case 7:
                    message.binaries = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : "",
            version: isSet(object.version) ? String(object.version) : "",
            scheduled_at: isSet(object.scheduled_at)
                ? String(object.scheduled_at)
                : "0",
            duration: isSet(object.duration) ? String(object.duration) : "0",
            binaries: isSet(object.binaries) ? String(object.binaries) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        message.version !== undefined && (obj.version = message.version);
        message.scheduled_at !== undefined &&
            (obj.scheduled_at = message.scheduled_at);
        message.duration !== undefined && (obj.duration = message.duration);
        message.binaries !== undefined && (obj.binaries = message.binaries);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g;
        var message = createBaseSchedulePoolUpgradeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
        message.version = (_d = object.version) !== null && _d !== void 0 ? _d : "";
        message.scheduled_at = (_e = object.scheduled_at) !== null && _e !== void 0 ? _e : "0";
        message.duration = (_f = object.duration) !== null && _f !== void 0 ? _f : "0";
        message.binaries = (_g = object.binaries) !== null && _g !== void 0 ? _g : "";
        return message;
    }
};
function createBaseCancelPoolUpgradeProposal() {
    return { title: "", description: "", runtime: "" };
}
exports.CancelPoolUpgradeProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = _m0.Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        if (message.runtime !== "") {
            writer.uint32(26).string(message.runtime);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseCancelPoolUpgradeProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                case 3:
                    message.runtime = reader.string();
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
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : "",
            runtime: isSet(object.runtime) ? String(object.runtime) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        message.runtime !== undefined && (obj.runtime = message.runtime);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseCancelPoolUpgradeProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        message.runtime = (_c = object.runtime) !== null && _c !== void 0 ? _c : "";
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
