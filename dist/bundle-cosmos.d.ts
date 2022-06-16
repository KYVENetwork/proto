import * as cosmosTx from "./proto/cosmos/gov/v1beta1/tx";
import * as cosmosQuery from "./proto/cosmos/gov/v1beta1/query";
import * as cosmosGenesis from "./proto/cosmos/gov/v1beta1/genesis";
import * as cosmosGov from "./proto/cosmos/gov/v1beta1/gov";
export declare namespace cosmos {
    namespace registry {
        const v1beta1: {
            protobufPackage: "cosmos.gov.v1beta1";
            GenesisState: {
                encode(message: cosmosGenesis.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGenesis.GenesisState;
                fromJSON(object: any): cosmosGenesis.GenesisState;
                toJSON(message: cosmosGenesis.GenesisState): unknown;
                fromPartial<I extends {
                    startingProposalId?: number | undefined;
                    deposits?: {
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    votes?: {
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    proposals?: {
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    startingProposalId?: number | undefined;
                    deposits?: ({
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["deposits"][number], keyof cosmosGov.Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    votes?: ({
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I["votes"][number], keyof cosmosGov.Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    proposals?: ({
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & {
                        proposalId?: number | undefined;
                        content?: ({
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I["proposals"][number]["totalDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["totalDeposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & Record<Exclude<keyof I["proposals"][number], keyof cosmosGov.Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[]>, never>) | undefined;
                    depositParams?: ({
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        minDeposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I["depositParams"]["minDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["depositParams"]["minDeposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        maxDepositPeriod?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["depositParams"]["maxDepositPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I["depositParams"], keyof cosmosGov.DepositParams>, never>) | undefined;
                    votingParams?: ({
                        votingPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        votingPeriod?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I["votingParams"]["votingPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I["votingParams"], "votingPeriod">, never>) | undefined;
                    tallyParams?: ({
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } & {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I["tallyParams"], keyof cosmosGov.TallyParams>, never>) | undefined;
                } & Record<Exclude<keyof I, keyof cosmosGenesis.GenesisState>, never>>(object: I): cosmosGenesis.GenesisState;
            };
            QueryProposalRequest: {
                encode(message: cosmosQuery.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalRequest;
                fromJSON(object: any): cosmosQuery.QueryProposalRequest;
                toJSON(message: cosmosQuery.QueryProposalRequest): unknown;
                fromPartial<I_1 extends {
                    proposalId?: number | undefined;
                } & {
                    proposalId?: number | undefined;
                } & Record<Exclude<keyof I_1, "proposalId">, never>>(object: I_1): cosmosQuery.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: cosmosQuery.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalResponse;
                fromJSON(object: any): cosmosQuery.QueryProposalResponse;
                toJSON(message: cosmosQuery.QueryProposalResponse): unknown;
                fromPartial<I_2 extends {
                    proposal?: {
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } | undefined;
                } & {
                    proposal?: ({
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & {
                        proposalId?: number | undefined;
                        content?: ({
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I_2["proposal"]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & Record<Exclude<keyof I_2["proposal"]["finalTallyResult"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_2["proposal"]["totalDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_2["proposal"]["totalDeposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & Record<Exclude<keyof I_2["proposal"], keyof cosmosGov.Proposal>, never>) | undefined;
                } & Record<Exclude<keyof I_2, "proposal">, never>>(object: I_2): cosmosQuery.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: cosmosQuery.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalsRequest;
                fromJSON(object: any): cosmosQuery.QueryProposalsRequest;
                toJSON(message: cosmosQuery.QueryProposalsRequest): unknown;
                fromPartial<I_3 extends {
                    proposalStatus?: cosmosGov.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposalStatus?: cosmosGov.ProposalStatus | undefined;
                    voter?: string | undefined;
                    depositor?: string | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_3["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_3, keyof cosmosQuery.QueryProposalsRequest>, never>>(object: I_3): cosmosQuery.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: cosmosQuery.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryProposalsResponse;
                fromJSON(object: any): cosmosQuery.QueryProposalsResponse;
                toJSON(message: cosmosQuery.QueryProposalsResponse): unknown;
                fromPartial<I_4 extends {
                    proposals?: {
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    proposals?: ({
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & {
                        proposalId?: number | undefined;
                        content?: ({
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } & Record<Exclude<keyof I_4["proposals"][number]["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: ({
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } & Record<Exclude<keyof I_4["proposals"][number]["finalTallyResult"], keyof cosmosGov.TallyResult>, never>) | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_4["proposals"][number]["totalDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_4["proposals"][number]["totalDeposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    } & Record<Exclude<keyof I_4["proposals"][number], keyof cosmosGov.Proposal>, never>)[] & Record<Exclude<keyof I_4["proposals"], keyof {
                        proposalId?: number | undefined;
                        content?: {
                            typeUrl?: string | undefined;
                            value?: Uint8Array | undefined;
                        } | undefined;
                        status?: cosmosGov.ProposalStatus | undefined;
                        finalTallyResult?: {
                            yes?: string | undefined;
                            abstain?: string | undefined;
                            no?: string | undefined;
                            noWithVeto?: string | undefined;
                        } | undefined;
                        submitTime?: Date | undefined;
                        depositEndTime?: Date | undefined;
                        totalDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        votingStartTime?: Date | undefined;
                        votingEndTime?: Date | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_4["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_4, keyof cosmosQuery.QueryProposalsResponse>, never>>(object: I_4): cosmosQuery.QueryProposalsResponse;
            };
            QueryVoteRequest: {
                encode(message: cosmosQuery.QueryVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVoteRequest;
                fromJSON(object: any): cosmosQuery.QueryVoteRequest;
                toJSON(message: cosmosQuery.QueryVoteRequest): unknown;
                fromPartial<I_5 extends {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                } & {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                } & Record<Exclude<keyof I_5, keyof cosmosQuery.QueryVoteRequest>, never>>(object: I_5): cosmosQuery.QueryVoteRequest;
            };
            QueryVoteResponse: {
                encode(message: cosmosQuery.QueryVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVoteResponse;
                fromJSON(object: any): cosmosQuery.QueryVoteResponse;
                toJSON(message: cosmosQuery.QueryVoteResponse): unknown;
                fromPartial<I_6 extends {
                    vote?: {
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    vote?: ({
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I_6["vote"]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_6["vote"]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_6["vote"], keyof cosmosGov.Vote>, never>) | undefined;
                } & Record<Exclude<keyof I_6, "vote">, never>>(object: I_6): cosmosQuery.QueryVoteResponse;
            };
            QueryVotesRequest: {
                encode(message: cosmosQuery.QueryVotesRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVotesRequest;
                fromJSON(object: any): cosmosQuery.QueryVotesRequest;
                toJSON(message: cosmosQuery.QueryVotesRequest): unknown;
                fromPartial<I_7 extends {
                    proposalId?: number | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposalId?: number | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_7["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_7, keyof cosmosQuery.QueryVotesRequest>, never>>(object: I_7): cosmosQuery.QueryVotesRequest;
            };
            QueryVotesResponse: {
                encode(message: cosmosQuery.QueryVotesResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryVotesResponse;
                fromJSON(object: any): cosmosQuery.QueryVotesResponse;
                toJSON(message: cosmosQuery.QueryVotesResponse): unknown;
                fromPartial<I_8 extends {
                    votes?: {
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    votes?: ({
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I_8["votes"][number]["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_8["votes"][number]["options"], keyof {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_8["votes"][number], keyof cosmosGov.Vote>, never>)[] & Record<Exclude<keyof I_8["votes"], keyof {
                        proposalId?: number | undefined;
                        voter?: string | undefined;
                        option?: cosmosGov.VoteOption | undefined;
                        options?: {
                            option?: cosmosGov.VoteOption | undefined;
                            weight?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_8["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_8, keyof cosmosQuery.QueryVotesResponse>, never>>(object: I_8): cosmosQuery.QueryVotesResponse;
            };
            QueryParamsRequest: {
                encode(message: cosmosQuery.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryParamsRequest;
                fromJSON(object: any): cosmosQuery.QueryParamsRequest;
                toJSON(message: cosmosQuery.QueryParamsRequest): unknown;
                fromPartial<I_9 extends {
                    paramsType?: string | undefined;
                } & {
                    paramsType?: string | undefined;
                } & Record<Exclude<keyof I_9, "paramsType">, never>>(object: I_9): cosmosQuery.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: cosmosQuery.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryParamsResponse;
                fromJSON(object: any): cosmosQuery.QueryParamsResponse;
                toJSON(message: cosmosQuery.QueryParamsResponse): unknown;
                fromPartial<I_10 extends {
                    votingParams?: {
                        votingPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    depositParams?: {
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } | undefined;
                    tallyParams?: {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } | undefined;
                } & {
                    votingParams?: ({
                        votingPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        votingPeriod?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_10["votingParams"]["votingPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_10["votingParams"], "votingPeriod">, never>) | undefined;
                    depositParams?: ({
                        minDeposit?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                        maxDepositPeriod?: {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } | undefined;
                    } & {
                        minDeposit?: ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] & ({
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        } & Record<Exclude<keyof I_10["depositParams"]["minDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_10["depositParams"]["minDeposit"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                        maxDepositPeriod?: ({
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & {
                            seconds?: number | undefined;
                            nanos?: number | undefined;
                        } & Record<Exclude<keyof I_10["depositParams"]["maxDepositPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                    } & Record<Exclude<keyof I_10["depositParams"], keyof cosmosGov.DepositParams>, never>) | undefined;
                    tallyParams?: ({
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } & {
                        quorum?: Uint8Array | undefined;
                        threshold?: Uint8Array | undefined;
                        vetoThreshold?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_10["tallyParams"], keyof cosmosGov.TallyParams>, never>) | undefined;
                } & Record<Exclude<keyof I_10, keyof cosmosQuery.QueryParamsResponse>, never>>(object: I_10): cosmosQuery.QueryParamsResponse;
            };
            QueryDepositRequest: {
                encode(message: cosmosQuery.QueryDepositRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositRequest;
                fromJSON(object: any): cosmosQuery.QueryDepositRequest;
                toJSON(message: cosmosQuery.QueryDepositRequest): unknown;
                fromPartial<I_11 extends {
                    proposalId?: number | undefined;
                    depositor?: string | undefined;
                } & {
                    proposalId?: number | undefined;
                    depositor?: string | undefined;
                } & Record<Exclude<keyof I_11, keyof cosmosQuery.QueryDepositRequest>, never>>(object: I_11): cosmosQuery.QueryDepositRequest;
            };
            QueryDepositResponse: {
                encode(message: cosmosQuery.QueryDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositResponse;
                fromJSON(object: any): cosmosQuery.QueryDepositResponse;
                toJSON(message: cosmosQuery.QueryDepositResponse): unknown;
                fromPartial<I_12 extends {
                    deposit?: {
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } | undefined;
                } & {
                    deposit?: ({
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I_12["deposit"]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_12["deposit"]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_12["deposit"], keyof cosmosGov.Deposit>, never>) | undefined;
                } & Record<Exclude<keyof I_12, "deposit">, never>>(object: I_12): cosmosQuery.QueryDepositResponse;
            };
            QueryDepositsRequest: {
                encode(message: cosmosQuery.QueryDepositsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositsRequest;
                fromJSON(object: any): cosmosQuery.QueryDepositsRequest;
                toJSON(message: cosmosQuery.QueryDepositsRequest): unknown;
                fromPartial<I_13 extends {
                    proposalId?: number | undefined;
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                } & {
                    proposalId?: number | undefined;
                    pagination?: ({
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } & Record<Exclude<keyof I_13["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                } & Record<Exclude<keyof I_13, keyof cosmosQuery.QueryDepositsRequest>, never>>(object: I_13): cosmosQuery.QueryDepositsRequest;
            };
            QueryDepositsResponse: {
                encode(message: cosmosQuery.QueryDepositsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryDepositsResponse;
                fromJSON(object: any): cosmosQuery.QueryDepositsResponse;
                toJSON(message: cosmosQuery.QueryDepositsResponse): unknown;
                fromPartial<I_14 extends {
                    deposits?: {
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    deposits?: ({
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[] & ({
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    } & {
                        proposalId?: number | undefined;
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
                        } & Record<Exclude<keyof I_14["deposits"][number]["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_14["deposits"][number]["amount"], keyof {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_14["deposits"][number], keyof cosmosGov.Deposit>, never>)[] & Record<Exclude<keyof I_14["deposits"], keyof {
                        proposalId?: number | undefined;
                        depositor?: string | undefined;
                        amount?: {
                            denom?: string | undefined;
                            amount?: string | undefined;
                        }[] | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_14["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_14, keyof cosmosQuery.QueryDepositsResponse>, never>>(object: I_14): cosmosQuery.QueryDepositsResponse;
            };
            QueryTallyResultRequest: {
                encode(message: cosmosQuery.QueryTallyResultRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryTallyResultRequest;
                fromJSON(object: any): cosmosQuery.QueryTallyResultRequest;
                toJSON(message: cosmosQuery.QueryTallyResultRequest): unknown;
                fromPartial<I_15 extends {
                    proposalId?: number | undefined;
                } & {
                    proposalId?: number | undefined;
                } & Record<Exclude<keyof I_15, "proposalId">, never>>(object: I_15): cosmosQuery.QueryTallyResultRequest;
            };
            QueryTallyResultResponse: {
                encode(message: cosmosQuery.QueryTallyResultResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosQuery.QueryTallyResultResponse;
                fromJSON(object: any): cosmosQuery.QueryTallyResultResponse;
                toJSON(message: cosmosQuery.QueryTallyResultResponse): unknown;
                fromPartial<I_16 extends {
                    tally?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } | undefined;
                } & {
                    tally?: ({
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } & {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } & Record<Exclude<keyof I_16["tally"], keyof cosmosGov.TallyResult>, never>) | undefined;
                } & Record<Exclude<keyof I_16, "tally">, never>>(object: I_16): cosmosQuery.QueryTallyResultResponse;
            };
            QueryClientImpl: typeof cosmosQuery.QueryClientImpl;
            MsgSubmitProposal: {
                encode(message: cosmosTx.MsgSubmitProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgSubmitProposal;
                fromJSON(object: any): cosmosTx.MsgSubmitProposal;
                toJSON(message: cosmosTx.MsgSubmitProposal): unknown;
                fromPartial<I_17 extends {
                    content?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    initialDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    proposer?: string | undefined;
                } & {
                    content?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_17["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                    initialDeposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_17["initialDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_17["initialDeposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    proposer?: string | undefined;
                } & Record<Exclude<keyof I_17, keyof cosmosTx.MsgSubmitProposal>, never>>(object: I_17): cosmosTx.MsgSubmitProposal;
            };
            MsgSubmitProposalResponse: {
                encode(message: cosmosTx.MsgSubmitProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgSubmitProposalResponse;
                fromJSON(object: any): cosmosTx.MsgSubmitProposalResponse;
                toJSON(message: cosmosTx.MsgSubmitProposalResponse): unknown;
                fromPartial<I_18 extends {
                    proposalId?: number | undefined;
                } & {
                    proposalId?: number | undefined;
                } & Record<Exclude<keyof I_18, "proposalId">, never>>(object: I_18): cosmosTx.MsgSubmitProposalResponse;
            };
            MsgVote: {
                encode(message: cosmosTx.MsgVote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVote;
                fromJSON(object: any): cosmosTx.MsgVote;
                toJSON(message: cosmosTx.MsgVote): unknown;
                fromPartial<I_19 extends {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                } & {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                } & Record<Exclude<keyof I_19, keyof cosmosTx.MsgVote>, never>>(object: I_19): cosmosTx.MsgVote;
            };
            MsgVoteResponse: {
                encode(_: cosmosTx.MsgVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteResponse;
                fromJSON(_: any): cosmosTx.MsgVoteResponse;
                toJSON(_: cosmosTx.MsgVoteResponse): unknown;
                fromPartial<I_20 extends {} & {} & Record<Exclude<keyof I_20, never>, never>>(_: I_20): cosmosTx.MsgVoteResponse;
            };
            MsgVoteWeighted: {
                encode(message: cosmosTx.MsgVoteWeighted, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteWeighted;
                fromJSON(object: any): cosmosTx.MsgVoteWeighted;
                toJSON(message: cosmosTx.MsgVoteWeighted): unknown;
                fromPartial<I_21 extends {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                    options?: {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                } & {
                    proposalId?: number | undefined;
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
                    } & Record<Exclude<keyof I_21["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_21["options"], keyof {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_21, keyof cosmosTx.MsgVoteWeighted>, never>>(object: I_21): cosmosTx.MsgVoteWeighted;
            };
            MsgVoteWeightedResponse: {
                encode(_: cosmosTx.MsgVoteWeightedResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgVoteWeightedResponse;
                fromJSON(_: any): cosmosTx.MsgVoteWeightedResponse;
                toJSON(_: cosmosTx.MsgVoteWeightedResponse): unknown;
                fromPartial<I_22 extends {} & {} & Record<Exclude<keyof I_22, never>, never>>(_: I_22): cosmosTx.MsgVoteWeightedResponse;
            };
            MsgDeposit: {
                encode(message: cosmosTx.MsgDeposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgDeposit;
                fromJSON(object: any): cosmosTx.MsgDeposit;
                toJSON(message: cosmosTx.MsgDeposit): unknown;
                fromPartial<I_23 extends {
                    proposalId?: number | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    proposalId?: number | undefined;
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
                    } & Record<Exclude<keyof I_23["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_23["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_23, keyof cosmosTx.MsgDeposit>, never>>(object: I_23): cosmosTx.MsgDeposit;
            };
            MsgDepositResponse: {
                encode(_: cosmosTx.MsgDepositResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosTx.MsgDepositResponse;
                fromJSON(_: any): cosmosTx.MsgDepositResponse;
                toJSON(_: cosmosTx.MsgDepositResponse): unknown;
                fromPartial<I_24 extends {} & {} & Record<Exclude<keyof I_24, never>, never>>(_: I_24): cosmosTx.MsgDepositResponse;
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
                fromPartial<I_25 extends {
                    option?: cosmosGov.VoteOption | undefined;
                    weight?: string | undefined;
                } & {
                    option?: cosmosGov.VoteOption | undefined;
                    weight?: string | undefined;
                } & Record<Exclude<keyof I_25, keyof cosmosGov.WeightedVoteOption>, never>>(object: I_25): cosmosGov.WeightedVoteOption;
            };
            TextProposal: {
                encode(message: cosmosGov.TextProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TextProposal;
                fromJSON(object: any): cosmosGov.TextProposal;
                toJSON(message: cosmosGov.TextProposal): unknown;
                fromPartial<I_26 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                } & Record<Exclude<keyof I_26, keyof cosmosGov.TextProposal>, never>>(object: I_26): cosmosGov.TextProposal;
            };
            Deposit: {
                encode(message: cosmosGov.Deposit, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Deposit;
                fromJSON(object: any): cosmosGov.Deposit;
                toJSON(message: cosmosGov.Deposit): unknown;
                fromPartial<I_27 extends {
                    proposalId?: number | undefined;
                    depositor?: string | undefined;
                    amount?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    proposalId?: number | undefined;
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
                    } & Record<Exclude<keyof I_27["amount"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_27["amount"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_27, keyof cosmosGov.Deposit>, never>>(object: I_27): cosmosGov.Deposit;
            };
            Proposal: {
                encode(message: cosmosGov.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Proposal;
                fromJSON(object: any): cosmosGov.Proposal;
                toJSON(message: cosmosGov.Proposal): unknown;
                fromPartial<I_28 extends {
                    proposalId?: number | undefined;
                    content?: {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } | undefined;
                    status?: cosmosGov.ProposalStatus | undefined;
                    finalTallyResult?: {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } | undefined;
                    submitTime?: Date | undefined;
                    depositEndTime?: Date | undefined;
                    totalDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    votingStartTime?: Date | undefined;
                    votingEndTime?: Date | undefined;
                } & {
                    proposalId?: number | undefined;
                    content?: ({
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & {
                        typeUrl?: string | undefined;
                        value?: Uint8Array | undefined;
                    } & Record<Exclude<keyof I_28["content"], keyof import("./proto/google/protobuf/any").Any>, never>) | undefined;
                    status?: cosmosGov.ProposalStatus | undefined;
                    finalTallyResult?: ({
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } & {
                        yes?: string | undefined;
                        abstain?: string | undefined;
                        no?: string | undefined;
                        noWithVeto?: string | undefined;
                    } & Record<Exclude<keyof I_28["finalTallyResult"], keyof cosmosGov.TallyResult>, never>) | undefined;
                    submitTime?: Date | undefined;
                    depositEndTime?: Date | undefined;
                    totalDeposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_28["totalDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_28["totalDeposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    votingStartTime?: Date | undefined;
                    votingEndTime?: Date | undefined;
                } & Record<Exclude<keyof I_28, keyof cosmosGov.Proposal>, never>>(object: I_28): cosmosGov.Proposal;
            };
            TallyResult: {
                encode(message: cosmosGov.TallyResult, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TallyResult;
                fromJSON(object: any): cosmosGov.TallyResult;
                toJSON(message: cosmosGov.TallyResult): unknown;
                fromPartial<I_29 extends {
                    yes?: string | undefined;
                    abstain?: string | undefined;
                    no?: string | undefined;
                    noWithVeto?: string | undefined;
                } & {
                    yes?: string | undefined;
                    abstain?: string | undefined;
                    no?: string | undefined;
                    noWithVeto?: string | undefined;
                } & Record<Exclude<keyof I_29, keyof cosmosGov.TallyResult>, never>>(object: I_29): cosmosGov.TallyResult;
            };
            Vote: {
                encode(message: cosmosGov.Vote, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.Vote;
                fromJSON(object: any): cosmosGov.Vote;
                toJSON(message: cosmosGov.Vote): unknown;
                fromPartial<I_30 extends {
                    proposalId?: number | undefined;
                    voter?: string | undefined;
                    option?: cosmosGov.VoteOption | undefined;
                    options?: {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[] | undefined;
                } & {
                    proposalId?: number | undefined;
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
                    } & Record<Exclude<keyof I_30["options"][number], keyof cosmosGov.WeightedVoteOption>, never>)[] & Record<Exclude<keyof I_30["options"], keyof {
                        option?: cosmosGov.VoteOption | undefined;
                        weight?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_30, keyof cosmosGov.Vote>, never>>(object: I_30): cosmosGov.Vote;
            };
            DepositParams: {
                encode(message: cosmosGov.DepositParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.DepositParams;
                fromJSON(object: any): cosmosGov.DepositParams;
                toJSON(message: cosmosGov.DepositParams): unknown;
                fromPartial<I_31 extends {
                    minDeposit?: {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    maxDepositPeriod?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    minDeposit?: ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_31["minDeposit"][number], keyof import("./proto/cosmos/base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I_31["minDeposit"], keyof {
                        denom?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    maxDepositPeriod?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I_31["maxDepositPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                } & Record<Exclude<keyof I_31, keyof cosmosGov.DepositParams>, never>>(object: I_31): cosmosGov.DepositParams;
            };
            VotingParams: {
                encode(message: cosmosGov.VotingParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.VotingParams;
                fromJSON(object: any): cosmosGov.VotingParams;
                toJSON(message: cosmosGov.VotingParams): unknown;
                fromPartial<I_32 extends {
                    votingPeriod?: {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } | undefined;
                } & {
                    votingPeriod?: ({
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & {
                        seconds?: number | undefined;
                        nanos?: number | undefined;
                    } & Record<Exclude<keyof I_32["votingPeriod"], keyof import("./proto/google/protobuf/duration").Duration>, never>) | undefined;
                } & Record<Exclude<keyof I_32, "votingPeriod">, never>>(object: I_32): cosmosGov.VotingParams;
            };
            TallyParams: {
                encode(message: cosmosGov.TallyParams, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): cosmosGov.TallyParams;
                fromJSON(object: any): cosmosGov.TallyParams;
                toJSON(message: cosmosGov.TallyParams): unknown;
                fromPartial<I_33 extends {
                    quorum?: Uint8Array | undefined;
                    threshold?: Uint8Array | undefined;
                    vetoThreshold?: Uint8Array | undefined;
                } & {
                    quorum?: Uint8Array | undefined;
                    threshold?: Uint8Array | undefined;
                    vetoThreshold?: Uint8Array | undefined;
                } & Record<Exclude<keyof I_33, keyof cosmosGov.TallyParams>, never>>(object: I_33): cosmosGov.TallyParams;
            };
        };
    }
}
