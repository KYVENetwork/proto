"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
exports.cosmos = void 0;
var cosmosTx = __importStar(require("./proto/cosmos/gov/v1beta1/tx"));
var cosmosQuery = __importStar(require("./proto/cosmos/gov/v1beta1/query"));
var cosmosGenesis = __importStar(require("./proto/cosmos/gov/v1beta1/genesis"));
var cosmosGov = __importStar(require("./proto/cosmos/gov/v1beta1/gov"));
var cosmosParams = __importStar(require("./proto/cosmos/params/v1beta1/params"));
var cosmos;
(function (cosmos) {
    var registry;
    (function (registry) {
        registry.v1beta1 = __assign(__assign(__assign(__assign(__assign({}, cosmosGov), cosmosTx), cosmosQuery), cosmosGenesis), cosmosParams);
    })(registry = cosmos.registry || (cosmos.registry = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
