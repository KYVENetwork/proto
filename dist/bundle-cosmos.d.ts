import * as cosmosTx from "./proto/cosmos/gov/v1beta1/tx";
import * as cosmosQuery from "./proto/cosmos/gov/v1beta1/query";
import * as cosmosGenesis from "./proto/cosmos/gov/v1beta1/genesis";
import * as cosmosGov from "./proto/cosmos/gov/v1beta1/gov";
import * as cosmosParams from "./proto/cosmos/params/v1beta1/params";
export declare namespace cosmos {
    namespace registry {
        const v1beta1: {
            protobufPackage: "cosmos.params.v1beta1";
            ParameterChangeProposal: {
                encode(message: cosmosParams.ParameterChangeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosParams.ParameterChangeProposal;
                fromJSON(object: any): cosmosParams.ParameterChangeProposal;
                toJSON(message: cosmosParams.ParameterChangeProposal): unknown;
                fromPartial<I extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    changes?: {
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    changes?: ({
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    }[] & ({
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    } & {
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    } & Record<Exclude<keyof I["changes"][number], keyof cosmosParams.ParamChange>, never>)[] & Record<Exclude<keyof I["changes"], keyof {
                        subspace?: string | undefined;
                        key?: string | undefined;
                        value?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I, keyof cosmosParams.ParameterChangeProposal>, never>>(object: I): cosmosParams.ParameterChangeProposal;
            };
            ParamChange: {
                encode(message: cosmosParams.ParamChange, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosParams.ParamChange;
                fromJSON(object: any): cosmosParams.ParamChange;
                toJSON(message: cosmosParams.ParamChange): unknown;
                fromPartial<I_1 extends {
                    subspace?: string | undefined;
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    subspace?: string | undefined;
                    key?: string | undefined;
                    value?: string | undefined;
                } & Record<Exclude<keyof I_1, keyof cosmosParams.ParamChange>, never>>(object: I_1): cosmosParams.ParamChange;
            };
            GenesisState: {
                encode(message: cosmosGenesis.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGenesis.GenesisState;
                fromJSON(object: any): cosmosGenesis.GenesisState;
                toJSON(message: cosmosGenesis.GenesisState): unknown;
                fromPartial<I_2 extends {
                    starting_proposal_id?: string | undefined;
                    deposits?: {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    votes?: {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    proposals?: {
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[] | undefined;
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        max_deposit_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tally_params?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    starting_proposal_id?: string | undefined;
                    deposits?: ({
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_2["deposits"][number]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["deposits"][number]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_2["deposits"][number], keyof cosmosGov.Deposit>, never>)[] & Record<Exclude<keyof I_2["deposits"], keyof {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    votes?: ({
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] & ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & Record<Exclude<keyof I_2["votes"][number]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_2["votes"][number]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_2["votes"][number], keyof cosmosGov.Vote>, never>)[] & Record<Exclude<keyof I_2["votes"], keyof {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    proposals?: ({
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        content?: ({
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I_2["proposals"][number]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & Record<Exclude<keyof I_2["proposals"][number]["final_tally_result"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_2["proposals"][number]["total_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["proposals"][number]["total_deposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & Record<Exclude<keyof I_2["proposals"][number], keyof cosmosGov.Proposal>, never>)[] & Record<Exclude<keyof I_2["proposals"], keyof {
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[]>, never>) | undefined;
                    deposit_params?: ({
                        min_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        max_deposit_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        min_deposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_2["deposit_params"]["min_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["deposit_params"]["min_deposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        max_deposit_period?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_2["deposit_params"]["max_deposit_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_2["deposit_params"], keyof cosmosGov.DepositParams>, never>) | undefined;
                    voting_params?: ({
                        voting_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        voting_period?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_2["voting_params"]["voting_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_2["voting_params"], "voting_period">, never>) | undefined;
                    tally_params?: ({
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } & {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_2["tally_params"], keyof cosmosGov.TallyParams>, never>) | undefined;
                } & Record<Exclude<keyof I_2, keyof cosmosGenesis.GenesisState>, never>>(object: I_2): cosmosGenesis.GenesisState;
            };
            QueryProposalRequest: {
                encode(message: cosmosQuery.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalRequest;
                fromJSON(object: any): cosmosQuery.QueryProposalRequest;
                toJSON(message: cosmosQuery.QueryProposalRequest): unknown;
                fromPartial<I_3 extends {
                    proposal_id?: string | undefined;
                } & {
                    proposal_id?: string | undefined;
                } & Record<Exclude<keyof I_3, "proposal_id">, never>>(object: I_3): cosmosQuery.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: cosmosQuery.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalResponse;
                fromJSON(object: any): cosmosQuery.QueryProposalResponse;
                toJSON(message: cosmosQuery.QueryProposalResponse): unknown;
                fromPartial<I_4 extends {
                    proposal?: {
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } | undefined;
                } & {
                    proposal?: ({
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        content?: ({
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I_4["proposal"]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & Record<Exclude<keyof I_4["proposal"]["final_tally_result"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_4["proposal"]["total_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_4["proposal"]["total_deposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & Record<Exclude<keyof I_4["proposal"], keyof cosmosGov.Proposal>, never>) | undefined;
                } & Record<Exclude<keyof I_4, "proposal">, never>>(object: I_4): cosmosQuery.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: cosmosQuery.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalsRequest;
                fromJSON(object: any): cosmosQuery.QueryProposalsRequest;
                toJSON(message: cosmosQuery.QueryProposalsRequest): unknown;
                fromPartial<I_5 extends {
                    proposal_status?: cosmosGov.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposal_status?: cosmosGov.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_5["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_5, keyof cosmosQuery.QueryProposalsRequest>, never>>(object: I_5): cosmosQuery.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: cosmosQuery.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalsResponse;
                fromJSON(object: any): cosmosQuery.QueryProposalsResponse;
                toJSON(message: cosmosQuery.QueryProposalsResponse): unknown;
                fromPartial<I_6 extends {
                    proposals?: {
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    proposals?: ({
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        content?: ({
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I_6["proposals"][number]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } & Record<Exclude<keyof I_6["proposals"][number]["final_tally_result"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_6["proposals"][number]["total_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_6["proposals"][number]["total_deposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    } & Record<Exclude<keyof I_6["proposals"][number], keyof cosmosGov.Proposal>, never>)[] & Record<Exclude<keyof I_6["proposals"], keyof {
                        proposal_id?: string | undefined;
                        content?: {
                            type_url?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        final_tally_result?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            no_with_veto?: string | undefined;
                        } | undefined;
                        submit_time?: Date | undefined;
                        deposit_end_time?: Date | undefined;
                        total_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        voting_start_time?: Date | undefined;
                        voting_end_time?: Date | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_6["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_6, keyof cosmosQuery.QueryProposalsResponse>, never>>(object: I_6): cosmosQuery.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: cosmosQuery.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVoteRequest;
                fromJSON(object: any): cosmosQuery.QueryVoteRequest;
                toJSON(message: cosmosQuery.QueryVoteRequest): unknown;
                fromPartial<I_7 extends {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                } & {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                } & Record<Exclude<keyof I_7, keyof cosmosQuery.QueryVoteRequest>, never>>(object: I_7): cosmosQuery.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: cosmosQuery.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVoteResponse;
                fromJSON(object: any): cosmosQuery.QueryVoteResponse;
                toJSON(message: cosmosQuery.QueryVoteResponse): unknown;
                fromPartial<I_8 extends {
                    vote?: {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    vote?: ({
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] & ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & Record<Exclude<keyof I_8["vote"]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_8["vote"]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_8["vote"], keyof cosmosGov.Vote>, never>) | undefined;
                } & Record<Exclude<keyof I_8, "vote">, never>>(object: I_8): cosmosQuery.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: cosmosQuery.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVotesRequest;
                fromJSON(object: any): cosmosQuery.QueryVotesRequest;
                toJSON(message: cosmosQuery.QueryVotesRequest): unknown;
                fromPartial<I_9 extends {
                    proposal_id?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposal_id?: string | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_9["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_9, keyof cosmosQuery.QueryVotesRequest>, never>>(object: I_9): cosmosQuery.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: cosmosQuery.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVotesResponse;
                fromJSON(object: any): cosmosQuery.QueryVotesResponse;
                toJSON(message: cosmosQuery.QueryVotesResponse): unknown;
                fromPartial<I_10 extends {
                    votes?: {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    votes?: ({
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] & ({
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        } & Record<Exclude<keyof I_10["votes"][number]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_10["votes"][number]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_10["votes"][number], keyof cosmosGov.Vote>, never>)[] & Record<Exclude<keyof I_10["votes"], keyof {
                        proposal_id?: string | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_10["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_10, keyof cosmosQuery.QueryVotesResponse>, never>>(object: I_10): cosmosQuery.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: cosmosQuery.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryParamsRequest;
                fromJSON(object: any): cosmosQuery.QueryParamsRequest;
                toJSON(message: cosmosQuery.QueryParamsRequest): unknown;
                fromPartial<I_11 extends {
                    params_type?: string | undefined;
                } & {
                    params_type?: string | undefined;
                } & Record<Exclude<keyof I_11, "params_type">, never>>(object: I_11): cosmosQuery.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: cosmosQuery.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryParamsResponse;
                fromJSON(object: any): cosmosQuery.QueryParamsResponse;
                toJSON(message: cosmosQuery.QueryParamsResponse): unknown;
                fromPartial<I_12 extends {
                    voting_params?: {
                        voting_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    deposit_params?: {
                        min_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        max_deposit_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tally_params?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    voting_params?: ({
                        voting_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        voting_period?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_12["voting_params"]["voting_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_12["voting_params"], "voting_period">, never>) | undefined;
                    deposit_params?: ({
                        min_deposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        max_deposit_period?: {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        min_deposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_12["deposit_params"]["min_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_12["deposit_params"]["min_deposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        max_deposit_period?: ({
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: string | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_12["deposit_params"]["max_deposit_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_12["deposit_params"], keyof cosmosGov.DepositParams>, never>) | undefined;
                    tally_params?: ({
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } & {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        veto_threshold?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_12["tally_params"], keyof cosmosGov.TallyParams>, never>) | undefined;
                } & Record<Exclude<keyof I_12, keyof cosmosQuery.QueryParamsResponse>, never>>(object: I_12): cosmosQuery.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: cosmosQuery.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositRequest;
                fromJSON(object: any): cosmosQuery.QueryDepositRequest;
                toJSON(message: cosmosQuery.QueryDepositRequest): unknown;
                fromPartial<I_13 extends {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                } & {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                } & Record<Exclude<keyof I_13, keyof cosmosQuery.QueryDepositRequest>, never>>(object: I_13): cosmosQuery.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: cosmosQuery.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositResponse;
                fromJSON(object: any): cosmosQuery.QueryDepositResponse;
                toJSON(message: cosmosQuery.QueryDepositResponse): unknown;
                fromPartial<I_14 extends {
                    deposit?: {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    deposit?: ({
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_14["deposit"]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_14["deposit"]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_14["deposit"], keyof cosmosGov.Deposit>, never>) | undefined;
                } & Record<Exclude<keyof I_14, "deposit">, never>>(object: I_14): cosmosQuery.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: cosmosQuery.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositsRequest;
                fromJSON(object: any): cosmosQuery.QueryDepositsRequest;
                toJSON(message: cosmosQuery.QueryDepositsRequest): unknown;
                fromPartial<I_15 extends {
                    proposal_id?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposal_id?: string | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        count_total?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_15["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_15, keyof cosmosQuery.QueryDepositsRequest>, never>>(object: I_15): cosmosQuery.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: cosmosQuery.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositsResponse;
                fromJSON(object: any): cosmosQuery.QueryDepositsResponse;
                toJSON(message: cosmosQuery.QueryDepositsResponse): unknown;
                fromPartial<I_16 extends {
                    deposits?: {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    deposits?: ({
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_16["deposits"][number]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_16["deposits"][number]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_16["deposits"][number], keyof cosmosGov.Deposit>, never>)[] & Record<Exclude<keyof I_16["deposits"], keyof {
                        proposal_id?: string | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        next_key?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_16["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_16, keyof cosmosQuery.QueryDepositsResponse>, never>>(object: I_16): cosmosQuery.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: cosmosQuery.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryTallyResultRequest;
                fromJSON(object: any): cosmosQuery.QueryTallyResultRequest;
                toJSON(message: cosmosQuery.QueryTallyResultRequest): unknown;
                fromPartial<I_17 extends {
                    proposal_id?: string | undefined;
                } & {
                    proposal_id?: string | undefined;
                } & Record<Exclude<keyof I_17, "proposal_id">, never>>(object: I_17): cosmosQuery.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: cosmosQuery.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryTallyResultResponse;
                fromJSON(object: any): cosmosQuery.QueryTallyResultResponse;
                toJSON(message: cosmosQuery.QueryTallyResultResponse): unknown;
                fromPartial<I_18 extends {
                    tally?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } | undefined;
                } & {
                    tally?: ({
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } & {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } & Record<Exclude<keyof I_18["tally"], keyof cosmosGov.TallyResult>, never>) | undefined;
                } & Record<Exclude<keyof I_18, "tally">, never>>(object: I_18): cosmosQuery.QueryTallyResultResponse;
            };
            QueryClientImpl: typeof cosmosQuery.QueryClientImpl;
            MsgSubmitProposal: {
                encode(message: cosmosTx.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgSubmitProposal;
                fromJSON(object: any): cosmosTx.MsgSubmitProposal;
                toJSON(message: cosmosTx.MsgSubmitProposal): unknown;
                fromPartial<I_19 extends {
                    content?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    initial_deposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    proposer?: string | undefined;
                } & {
                    content?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_19["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                    initial_deposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_19["initial_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_19["initial_deposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    proposer?: string | undefined;
                } & Record<Exclude<keyof I_19, keyof cosmosTx.MsgSubmitProposal>, never>>(object: I_19): cosmosTx.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: cosmosTx.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgSubmitProposalResponse;
                fromJSON(object: any): cosmosTx.MsgSubmitProposalResponse;
                toJSON(message: cosmosTx.MsgSubmitProposalResponse): unknown;
                fromPartial<I_20 extends {
                    proposal_id?: string | undefined;
                } & {
                    proposal_id?: string | undefined;
                } & Record<Exclude<keyof I_20, "proposal_id">, never>>(object: I_20): cosmosTx.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: cosmosTx.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVote;
                fromJSON(object: any): cosmosTx.MsgVote;
                toJSON(message: cosmosTx.MsgVote): unknown;
                fromPartial<I_21 extends {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                } & {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                } & Record<Exclude<keyof I_21, keyof cosmosTx.MsgVote>, never>>(object: I_21): cosmosTx.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: cosmosTx.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteResponse;
                fromJSON(_: any): cosmosTx.MsgVoteResponse;
                toJSON(_: cosmosTx.MsgVoteResponse): unknown;
                fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): cosmosTx.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: cosmosTx.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteWeighted;
                fromJSON(object: any): cosmosTx.MsgVoteWeighted;
                toJSON(message: cosmosTx.MsgVoteWeighted): unknown;
                fromPartial<I_23 extends {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    options?: {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                } & {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    options?: ({
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] & ({
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    } & {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    } & Record<Exclude<keyof I_23["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_23["options"], keyof {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_23, keyof cosmosTx.MsgVoteWeighted>, never>>(object: I_23): cosmosTx.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: cosmosTx.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteWeightedResponse;
                fromJSON(_: any): cosmosTx.MsgVoteWeightedResponse;
                toJSON(_: cosmosTx.MsgVoteWeightedResponse): unknown;
                fromPartial<I_24 extends {} & {} & Record<Exclude<keyof I_24, never>, never>>(_: I_24): cosmosTx.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: cosmosTx.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgDeposit;
                fromJSON(object: any): cosmosTx.MsgDeposit;
                toJSON(message: cosmosTx.MsgDeposit): unknown;
                fromPartial<I_25 extends {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_25["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_25["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_25, keyof cosmosTx.MsgDeposit>, never>>(object: I_25): cosmosTx.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: cosmosTx.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgDepositResponse;
                fromJSON(_: any): cosmosTx.MsgDepositResponse;
                toJSON(_: cosmosTx.MsgDepositResponse): unknown;
                fromPartial<I_26 extends {} & {} & Record<Exclude<keyof I_26, never>, never>>(_: I_26): cosmosTx.MsgDepositResponse;
            };
            MsgClientImpl: typeof cosmosTx.MsgClientImpl;
            voteOptionFromJSON(object: any): cosmosGov.VoteOption;
            voteOptionToJSON(object: cosmosGov.VoteOption): string;
            proposalStatusFromJSON(object: any): cosmosGov.ProposalStatus;
            proposalStatusToJSON(object: cosmosGov.ProposalStatus): string;
            VoteOption: typeof cosmosGov.VoteOption;
            ProposalStatus: typeof cosmosGov.ProposalStatus;
            WeightedVoteOption: {
                encode(message: cosmosGov.WeightedVoteOption, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.WeightedVoteOption;
                fromJSON(object: any): cosmosGov.WeightedVoteOption;
                toJSON(message: cosmosGov.WeightedVoteOption): unknown;
                fromPartial<I_27 extends {
                    option?: cosmosGov.VoteOption | undefined;
                    weight?: string | undefined;
                } & {
                    option?: cosmosGov.VoteOption | undefined;
                    weight?: string | undefined;
                } & Record<Exclude<keyof I_27, keyof cosmosGov.WeightedVoteOption>, never>>(object: I_27): cosmosGov.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: cosmosGov.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TextProposal;
                fromJSON(object: any): cosmosGov.TextProposal;
                toJSON(message: cosmosGov.TextProposal): unknown;
                fromPartial<I_28 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                } & Record<Exclude<keyof I_28, keyof cosmosGov.TextProposal>, never>>(object: I_28): cosmosGov.TextProposal;
            };
            Deposit: {
                encode(message: cosmosGov.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Deposit;
                fromJSON(object: any): cosmosGov.Deposit;
                toJSON(message: cosmosGov.Deposit): unknown;
                fromPartial<I_29 extends {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    proposal_id?: string | undefined;
                    depositor?: string | undefined;
                    amount?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_29["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_29["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_29, keyof cosmosGov.Deposit>, never>>(object: I_29): cosmosGov.Deposit;
            };
            Proposal: {
                encode(message: cosmosGov.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Proposal;
                fromJSON(object: any): cosmosGov.Proposal;
                toJSON(message: cosmosGov.Proposal): unknown;
                fromPartial<I_30 extends {
                    proposal_id?: string | undefined;
                    content?: {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    status?: cosmosGov.ProposalStatus | undefined;
                    final_tally_result?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } | undefined;
                    submit_time?: Date | undefined;
                    deposit_end_time?: Date | undefined;
                    total_deposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    voting_start_time?: Date | undefined;
                    voting_end_time?: Date | undefined;
                } & {
                    proposal_id?: string | undefined;
                    content?: ({
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        type_url?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_30["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                    status?: cosmosGov.ProposalStatus | undefined;
                    final_tally_result?: ({
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } & {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        no_with_veto?: string | undefined;
                    } & Record<Exclude<keyof I_30["final_tally_result"], keyof cosmosGov.TallyResult>, never>) | undefined;
                    submit_time?: Date | undefined;
                    deposit_end_time?: Date | undefined;
                    total_deposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_30["total_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_30["total_deposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    voting_start_time?: Date | undefined;
                    voting_end_time?: Date | undefined;
                } & Record<Exclude<keyof I_30, keyof cosmosGov.Proposal>, never>>(object: I_30): cosmosGov.Proposal;
            };
            TallyResult: {
                encode(message: cosmosGov.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TallyResult;
                fromJSON(object: any): cosmosGov.TallyResult;
                toJSON(message: cosmosGov.TallyResult): unknown;
                fromPartial<I_31 extends {
                    yes?: string | undefined;
                    abstain?: string | undefined;
                    no?: string | undefined;
                    no_with_veto?: string | undefined;
                } & {
                    yes?: string | undefined;
                    abstain?: string | undefined;
                    no?: string | undefined;
                    no_with_veto?: string | undefined;
                } & Record<Exclude<keyof I_31, keyof cosmosGov.TallyResult>, never>>(object: I_31): cosmosGov.TallyResult;
            };
            Vote: {
                encode(message: cosmosGov.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Vote;
                fromJSON(object: any): cosmosGov.Vote;
                toJSON(message: cosmosGov.Vote): unknown;
                fromPartial<I_32 extends {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                    options?: {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                } & {
                    proposal_id?: string | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                    options?: ({
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] & ({
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    } & {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    } & Record<Exclude<keyof I_32["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_32["options"], keyof {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_32, keyof cosmosGov.Vote>, never>>(object: I_32): cosmosGov.Vote;
            };
            DepositParams: {
                encode(message: cosmosGov.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.DepositParams;
                fromJSON(object: any): cosmosGov.DepositParams;
                toJSON(message: cosmosGov.DepositParams): unknown;
                fromPartial<I_33 extends {
                    min_deposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    max_deposit_period?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    min_deposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_33["min_deposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_33["min_deposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    max_deposit_period?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I_33["max_deposit_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                } & Record<Exclude<keyof I_33, keyof cosmosGov.DepositParams>, never>>(object: I_33): cosmosGov.DepositParams;
            };
            VotingParams: {
                encode(message: cosmosGov.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.VotingParams;
                fromJSON(object: any): cosmosGov.VotingParams;
                toJSON(message: cosmosGov.VotingParams): unknown;
                fromPartial<I_34 extends {
                    voting_period?: {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    voting_period?: ({
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: string | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I_34["voting_period"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                } & Record<Exclude<keyof I_34, "voting_period">, never>>(object: I_34): cosmosGov.VotingParams;
            };
            TallyParams: {
                encode(message: cosmosGov.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TallyParams;
                fromJSON(object: any): cosmosGov.TallyParams;
                toJSON(message: cosmosGov.TallyParams): unknown;
                fromPartial<I_35 extends {
                    quorum?: Uint8Array | undefined;
                    threshold?: Uint8Array | undefined;
                    veto_threshold?: Uint8Array | undefined;
                } & {
                    quorum?: Uint8Array | undefined;
                    threshold?: Uint8Array | undefined;
                    veto_threshold?: Uint8Array | undefined;
                } & Record<Exclude<keyof I_35, keyof cosmosGov.TallyParams>, never>>(object: I_35): cosmosGov.TallyParams;
            };
        };
    }
}
