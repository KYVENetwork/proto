import * as _genesisKyve from "./proto/kyve/registry/v1beta1/genesis";
import * as _kyveGov from "./proto/kyve/registry/v1beta1/gov";
import * as _kyveParams from "./proto/kyve/registry/v1beta1/params";
import * as _kyveQuery from "./proto/kyve/registry/v1beta1/query";
import * as _kyveRegistry from "./proto/kyve/registry/v1beta1/registry";
import * as _kyveTx from "./proto/kyve/registry/v1beta1/tx";

/**
 * With this approach we can use entities as types and values
 * For example:
 * As a type:
 *   const varPool: kyve.registry.v1beta1.kyveGov.UnpausePoolProposal = {} as kyve.registry.v1beta1.kyveRegistry.Pool
 *   the varPool has type Pool
 * As a value:
 *  const result = kyve.registry.v1beta1.kyveRegistry.Pool.decode(buffer)
 */
export namespace kyve {
    export namespace registry {
        export namespace v1beta1 {
            export import genesisKyve = _genesisKyve;
            export import kyveGov = _kyveGov;
            export import kyveParams = _kyveParams;
            export import kyveQuery = _kyveQuery;
            export import kyveRegistry = _kyveRegistry;
            export import kyveTx = _kyveTx;
        }
    }
}