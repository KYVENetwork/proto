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
exports.__esModule = true;
exports.cosmos = void 0;
var _cosmosTx = __importStar(require("./proto/cosmos/gov/v1beta1/tx"));
var _cosmosQuery = __importStar(require("./proto/cosmos/gov/v1beta1/query"));
var _cosmosGenesis = __importStar(require("./proto/cosmos/gov/v1beta1/genesis"));
var _cosmosGov = __importStar(require("./proto/cosmos/gov/v1beta1/gov"));
var _cosmosParams = __importStar(require("./proto/cosmos/params/v1beta1/params"));
var cosmos;
(function (cosmos) {
    var registry;
    (function (registry) {
        var v1beta1;
        (function (v1beta1) {
            v1beta1.cosmosTx = _cosmosTx;
            v1beta1.cosmosQuery = _cosmosQuery;
            v1beta1.cosmosGenesis = _cosmosGenesis;
            v1beta1.cosmosGov = _cosmosGov;
            v1beta1.cosmosParams = _cosmosParams;
        })(v1beta1 = registry.v1beta1 || (registry.v1beta1 = {}));
    })(registry = cosmos.registry || (cosmos.registry = {}));
})(cosmos = exports.cosmos || (exports.cosmos = {}));
