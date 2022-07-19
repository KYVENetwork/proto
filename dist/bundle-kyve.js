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
exports.kyve = void 0;
var _genesisKyve = __importStar(require("./proto/kyve/registry/v1beta1/genesis"));
var _kyveGov = __importStar(require("./proto/kyve/registry/v1beta1/gov"));
var _kyveParams = __importStar(require("./proto/kyve/registry/v1beta1/params"));
var _kyveQuery = __importStar(require("./proto/kyve/registry/v1beta1/query"));
var _kyveRegistry = __importStar(require("./proto/kyve/registry/v1beta1/registry"));
var _kyveTx = __importStar(require("./proto/kyve/registry/v1beta1/tx"));
var _kyveQueryRes = __importStar(require("./proto-res/kyve/registry/v1beta1/query"));
var kyve;
(function (kyve) {
    var registry;
    (function (registry) {
        var v1beta1;
        (function (v1beta1) {
            v1beta1.genesisKyve = _genesisKyve;
            v1beta1.kyveGov = _kyveGov;
            v1beta1.kyveParams = _kyveParams;
            v1beta1.kyveQuery = _kyveQuery;
            v1beta1.kyveQueryRes = _kyveQueryRes;
            v1beta1.kyveRegistry = _kyveRegistry;
            v1beta1.kyveTx = _kyveTx;
        })(v1beta1 = registry.v1beta1 || (registry.v1beta1 = {}));
    })(registry = kyve.registry || (kyve.registry = {}));
})(kyve = exports.kyve || (exports.kyve = {}));
