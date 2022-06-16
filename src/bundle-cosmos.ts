import * as cosmosTx from "./proto/cosmos/gov/v1beta1/tx";
import * as cosmosQuery from "./proto/cosmos/gov/v1beta1/query";
import * as cosmosGenesis from "./proto/cosmos/gov/v1beta1/genesis";
import * as cosmosGov from "./proto/cosmos/gov/v1beta1/gov"
import * as cosmosParams from "./proto/cosmos/params/v1beta1/params"
export namespace cosmos {
    export namespace registry {
        export const v1beta1 = {
            ...cosmosGov,
            ...cosmosTx,
            ...cosmosQuery,
            ...cosmosGenesis,
            ...cosmosParams
        };
    }
}