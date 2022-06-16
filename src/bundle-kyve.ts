import * as genesisKyve from "./proto/kyve/registry/v1beta1/genesis";
import * as kyveGov from "./proto/kyve/registry/v1beta1/gov";
import * as kyveParams from "./proto/kyve/registry/v1beta1/params";
import * as kyveQuery from "./proto/kyve/registry/v1beta1/query";
import * as kyveRegistry from "./proto/kyve/registry/v1beta1/registry";
import * as kyveTx from "./proto/kyve/registry/v1beta1/tx";
export namespace kyve {
    export namespace registry {
        export const v1beta1 = {
            ...genesisKyve,
            ...kyveGov,
            ...kyveParams,
            ...kyveQuery,
            ...kyveRegistry,
            ...kyveTx
        };
    }
}