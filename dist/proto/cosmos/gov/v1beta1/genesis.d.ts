import * as _m0 from "protobufjs/minimal";
import { Deposit, Vote, Proposal, DepositParams, VotingParams, TallyParams } from "../../../cosmos/gov/v1beta1/gov";
export declare const protobufPackage = "cosmos.gov.v1beta1";
/** GenesisState defines the gov module's genesis state. */
export interface GenesisState {
    /** starting_proposal_id is the ID of the starting proposal. */
    startingProposalId: number;
    /** deposits defines all the deposits present at genesis. */
    deposits: Deposit[];
    /** votes defines all the votes present at genesis. */
    votes: Vote[];
    /** proposals defines all the proposals present at genesis. */
    proposals: Proposal[];
    /** params defines all the paramaters of related to deposit. */
    depositParams: DepositParams | undefined;
    /** params defines all the paramaters of related to voting. */
    votingParams: VotingParams | undefined;
    /** params defines all the paramaters of related to tally. */
    tallyParams: TallyParams | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
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
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] | undefined;
        proposals?: {
            proposalId?: number | undefined;
            content?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus | undefined;
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
            } & Record<Exclude<keyof I["deposits"][number]["amount"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["deposits"][number]["amount"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["deposits"][number], keyof Deposit>, never>)[] & Record<Exclude<keyof I["deposits"], keyof {
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
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[] & ({
            proposalId?: number | undefined;
            voter?: string | undefined;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        } & {
            proposalId?: number | undefined;
            voter?: string | undefined;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
            options?: ({
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] & ({
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            } & {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            } & Record<Exclude<keyof I["votes"][number]["options"][number], keyof import("../../../cosmos/gov/v1beta1/gov").WeightedVoteOption>, never>)[] & Record<Exclude<keyof I["votes"][number]["options"], keyof {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[]>, never>) | undefined;
        } & Record<Exclude<keyof I["votes"][number], keyof Vote>, never>)[] & Record<Exclude<keyof I["votes"], keyof {
            proposalId?: number | undefined;
            voter?: string | undefined;
            option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
            options?: {
                option?: import("../../../cosmos/gov/v1beta1/gov").VoteOption | undefined;
                weight?: string | undefined;
            }[] | undefined;
        }[]>, never>) | undefined;
        proposals?: ({
            proposalId?: number | undefined;
            content?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus | undefined;
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
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus | undefined;
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
            } & Record<Exclude<keyof I["proposals"][number]["content"], keyof import("../../../google/protobuf/any").Any>, never>) | undefined;
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus | undefined;
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
            } & Record<Exclude<keyof I["proposals"][number]["finalTallyResult"], keyof import("../../../cosmos/gov/v1beta1/gov").TallyResult>, never>) | undefined;
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
            } & Record<Exclude<keyof I["proposals"][number]["totalDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["proposals"][number]["totalDeposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            votingStartTime?: Date | undefined;
            votingEndTime?: Date | undefined;
        } & Record<Exclude<keyof I["proposals"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposals"], keyof {
            proposalId?: number | undefined;
            content?: {
                typeUrl?: string | undefined;
                value?: Uint8Array | undefined;
            } | undefined;
            status?: import("../../../cosmos/gov/v1beta1/gov").ProposalStatus | undefined;
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
            } & Record<Exclude<keyof I["depositParams"]["minDeposit"][number], keyof import("../../base/v1beta1/coin").Coin>, never>)[] & Record<Exclude<keyof I["depositParams"]["minDeposit"], keyof {
                denom?: string | undefined;
                amount?: string | undefined;
            }[]>, never>) | undefined;
            maxDepositPeriod?: ({
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & {
                seconds?: number | undefined;
                nanos?: number | undefined;
            } & Record<Exclude<keyof I["depositParams"]["maxDepositPeriod"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["depositParams"], keyof DepositParams>, never>) | undefined;
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
            } & Record<Exclude<keyof I["votingParams"]["votingPeriod"], keyof import("../../../google/protobuf/duration").Duration>, never>) | undefined;
        } & Record<Exclude<keyof I["votingParams"], "votingPeriod">, never>) | undefined;
        tallyParams?: ({
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            vetoThreshold?: Uint8Array | undefined;
        } & {
            quorum?: Uint8Array | undefined;
            threshold?: Uint8Array | undefined;
            vetoThreshold?: Uint8Array | undefined;
        } & Record<Exclude<keyof I["tallyParams"], keyof TallyParams>, never>) | undefined;
    } & Record<Exclude<keyof I, keyof GenesisState>, never>>(object: I): GenesisState;
};
declare type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
declare type KeysOfUnion<T> = T extends T ? keyof T : never;
export declare type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & Record<Exclude<keyof I, KeysOfUnion<P>>, never>;
export {};
