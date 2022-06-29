import * as _m0 from "protobufjs/minimal";
import { Params } from "../../../kyve/registry/v1beta1/params";
import { UnbondingStakingQueueState, UnbondingDelegationQueueState, Pool, Funder, Staker, Delegator, DelegationPoolData, DelegationEntries, Proposal, UnbondingStakingQueueEntry, UnbondingStaker, UnbondingDelegationQueueEntry } from "../../../kyve/registry/v1beta1/registry";
export declare const protobufPackage = "kyve.registry.v1beta1";
/** GenesisState defines the registry module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** pool_list ... */
    pool_list: Pool[];
    /** pool_count ... */
    pool_count: string;
    /** funder_list ... */
    funder_list: Funder[];
    /** staker_list ... */
    staker_list: Staker[];
    /** delegator_list ... */
    delegator_list: Delegator[];
    /** delegation_pool_data_list ... */
    delegation_pool_data_list: DelegationPoolData[];
    /** delegation_entries_list ... */
    delegation_entries_list: DelegationEntries[];
    /** proposal_list ... */
    proposal_list: Proposal[];
    /** unbonding_staking_queue_state ... */
    unbonding_staking_queue_state?: UnbondingStakingQueueState;
    /** unbonding_staking_queue_entries ... */
    unbonding_staking_queue_entries: UnbondingStakingQueueEntry[];
    /** unbonding_staker_list ... */
    unbonding_staker_list: UnbondingStaker[];
    /** unbonding_delegation_queue_state ... */
    unbonding_delegation_queue_state?: UnbondingDelegationQueueState;
    /** unbonding_delegation_queue_entries ... */
    unbonding_delegation_queue_entries: UnbondingDelegationQueueEntry[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    fromPartial<I extends {
        params?: {
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
            unbonding_staking_time?: string | undefined;
            unbonding_delegation_time?: string | undefined;
        } | undefined;
        pool_list?: {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: string[] | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } | undefined;
            max_bundle_size?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[] | undefined;
        pool_count?: string | undefined;
        funder_list?: {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        }[] | undefined;
        staker_list?: {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            unbonding_amount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] | undefined;
        delegator_list?: {
            id?: string | undefined;
            k_index?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] | undefined;
        delegation_pool_data_list?: {
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        }[] | undefined;
        delegation_entries_list?: {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            k_index?: string | undefined;
        }[] | undefined;
        proposal_list?: {
            bundle_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] | undefined;
        unbonding_staking_queue_state?: {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } | undefined;
        unbonding_staking_queue_entries?: {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[] | undefined;
        unbonding_staker_list?: {
            staker?: string | undefined;
            pool_id?: string | undefined;
            unbonding_amount?: string | undefined;
        }[] | undefined;
        unbonding_delegation_queue_state?: {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } | undefined;
        unbonding_delegation_queue_entries?: {
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[] | undefined;
    } & {
        params?: ({
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
            unbonding_staking_time?: string | undefined;
            unbonding_delegation_time?: string | undefined;
        } & {
            vote_slash?: string | undefined;
            upload_slash?: string | undefined;
            timeout_slash?: string | undefined;
            upload_timeout?: string | undefined;
            storage_cost?: string | undefined;
            network_fee?: string | undefined;
            max_points?: string | undefined;
            unbonding_staking_time?: string | undefined;
            unbonding_delegation_time?: string | undefined;
        } & Record<Exclude<keyof I["params"], keyof Params>, never>) | undefined;
        pool_list?: ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: string[] | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } | undefined;
            max_bundle_size?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[] & ({
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: string[] | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } | undefined;
            max_bundle_size?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: (string[] & string[] & Record<Exclude<keyof I["pool_list"][number]["funders"], keyof string[]>, never>) | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: (string[] & string[] & Record<Exclude<keyof I["pool_list"][number]["stakers"], keyof string[]>, never>) | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: ({
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } & {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: (string[] & string[] & Record<Exclude<keyof I["pool_list"][number]["bundle_proposal"]["voters_valid"], keyof string[]>, never>) | undefined;
                voters_invalid?: (string[] & string[] & Record<Exclude<keyof I["pool_list"][number]["bundle_proposal"]["voters_invalid"], keyof string[]>, never>) | undefined;
                voters_abstain?: (string[] & string[] & Record<Exclude<keyof I["pool_list"][number]["bundle_proposal"]["voters_abstain"], keyof string[]>, never>) | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } & Record<Exclude<keyof I["pool_list"][number]["bundle_proposal"], keyof import("../../../kyve/registry/v1beta1/registry").BundleProposal>, never>) | undefined;
            max_bundle_size?: string | undefined;
            protocol?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } & Record<Exclude<keyof I["pool_list"][number]["protocol"], keyof import("../../../kyve/registry/v1beta1/registry").Protocol>, never>) | undefined;
            upgrade_plan?: ({
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } & {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } & Record<Exclude<keyof I["pool_list"][number]["upgrade_plan"], keyof import("../../../kyve/registry/v1beta1/registry").UpgradePlan>, never>) | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        } & Record<Exclude<keyof I["pool_list"][number], keyof Pool>, never>)[] & Record<Exclude<keyof I["pool_list"], keyof {
            id?: string | undefined;
            creator?: string | undefined;
            name?: string | undefined;
            runtime?: string | undefined;
            logo?: string | undefined;
            versions?: string | undefined;
            config?: string | undefined;
            current_height?: string | undefined;
            total_bytes?: string | undefined;
            total_bundles?: string | undefined;
            total_bundle_rewards?: string | undefined;
            start_height?: string | undefined;
            upload_interval?: string | undefined;
            operating_cost?: string | undefined;
            paused?: boolean | undefined;
            funders?: string[] | undefined;
            lowest_funder?: string | undefined;
            total_funds?: string | undefined;
            stakers?: string[] | undefined;
            lowest_staker?: string | undefined;
            total_stake?: string | undefined;
            total_delegation?: string | undefined;
            bundle_proposal?: {
                uploader?: string | undefined;
                next_uploader?: string | undefined;
                bundle_id?: string | undefined;
                byte_size?: string | undefined;
                from_height?: string | undefined;
                to_height?: string | undefined;
                created_at?: string | undefined;
                voters_valid?: string[] | undefined;
                voters_invalid?: string[] | undefined;
                voters_abstain?: string[] | undefined;
                to_key?: string | undefined;
                to_value?: string | undefined;
            } | undefined;
            max_bundle_size?: string | undefined;
            protocol?: {
                version?: string | undefined;
                binaries?: string | undefined;
                last_upgrade?: string | undefined;
            } | undefined;
            upgrade_plan?: {
                version?: string | undefined;
                binaries?: string | undefined;
                scheduled_at?: string | undefined;
                duration?: string | undefined;
            } | undefined;
            start_key?: string | undefined;
            current_key?: string | undefined;
            current_value?: string | undefined;
        }[]>, never>) | undefined;
        pool_count?: string | undefined;
        funder_list?: ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        }[] & ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        } & {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        } & Record<Exclude<keyof I["funder_list"][number], keyof Funder>, never>)[] & Record<Exclude<keyof I["funder_list"], keyof {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
        }[]>, never>) | undefined;
        staker_list?: ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            unbonding_amount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[] & ({
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            unbonding_amount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            unbonding_amount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        } & Record<Exclude<keyof I["staker_list"][number], keyof Staker>, never>)[] & Record<Exclude<keyof I["staker_list"], keyof {
            account?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            unbonding_amount?: string | undefined;
            commission?: string | undefined;
            moniker?: string | undefined;
            website?: string | undefined;
            logo?: string | undefined;
            points?: string | undefined;
        }[]>, never>) | undefined;
        delegator_list?: ({
            id?: string | undefined;
            k_index?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[] & ({
            id?: string | undefined;
            k_index?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        } & {
            id?: string | undefined;
            k_index?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        } & Record<Exclude<keyof I["delegator_list"][number], keyof Delegator>, never>)[] & Record<Exclude<keyof I["delegator_list"], keyof {
            id?: string | undefined;
            k_index?: string | undefined;
            delegation_amount?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
        }[]>, never>) | undefined;
        delegation_pool_data_list?: ({
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        }[] & ({
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        } & {
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        } & Record<Exclude<keyof I["delegation_pool_data_list"][number], keyof DelegationPoolData>, never>)[] & Record<Exclude<keyof I["delegation_pool_data_list"], keyof {
            id?: string | undefined;
            staker?: string | undefined;
            current_rewards?: string | undefined;
            total_delegation?: string | undefined;
            latest_index_k?: string | undefined;
            delegator_count?: string | undefined;
            latest_index_was_undelegation?: boolean | undefined;
        }[]>, never>) | undefined;
        delegation_entries_list?: ({
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            k_index?: string | undefined;
        }[] & ({
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            k_index?: string | undefined;
        } & {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            k_index?: string | undefined;
        } & Record<Exclude<keyof I["delegation_entries_list"][number], keyof DelegationEntries>, never>)[] & Record<Exclude<keyof I["delegation_entries_list"], keyof {
            id?: string | undefined;
            balance?: string | undefined;
            staker?: string | undefined;
            k_index?: string | undefined;
        }[]>, never>) | undefined;
        proposal_list?: ({
            bundle_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[] & ({
            bundle_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & {
            bundle_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        } & Record<Exclude<keyof I["proposal_list"][number], keyof Proposal>, never>)[] & Record<Exclude<keyof I["proposal_list"], keyof {
            bundle_id?: string | undefined;
            pool_id?: string | undefined;
            uploader?: string | undefined;
            from_height?: string | undefined;
            to_height?: string | undefined;
            finalized_at?: string | undefined;
            id?: string | undefined;
            key?: string | undefined;
            value?: string | undefined;
        }[]>, never>) | undefined;
        unbonding_staking_queue_state?: ({
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & Record<Exclude<keyof I["unbonding_staking_queue_state"], keyof UnbondingStakingQueueState>, never>) | undefined;
        unbonding_staking_queue_entries?: ({
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[] & ({
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        } & {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        } & Record<Exclude<keyof I["unbonding_staking_queue_entries"][number], keyof UnbondingStakingQueueEntry>, never>)[] & Record<Exclude<keyof I["unbonding_staking_queue_entries"], keyof {
            index?: string | undefined;
            staker?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[]>, never>) | undefined;
        unbonding_staker_list?: ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            unbonding_amount?: string | undefined;
        }[] & ({
            staker?: string | undefined;
            pool_id?: string | undefined;
            unbonding_amount?: string | undefined;
        } & {
            staker?: string | undefined;
            pool_id?: string | undefined;
            unbonding_amount?: string | undefined;
        } & Record<Exclude<keyof I["unbonding_staker_list"][number], keyof UnbondingStaker>, never>)[] & Record<Exclude<keyof I["unbonding_staker_list"], keyof {
            staker?: string | undefined;
            pool_id?: string | undefined;
            unbonding_amount?: string | undefined;
        }[]>, never>) | undefined;
        unbonding_delegation_queue_state?: ({
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & {
            low_index?: string | undefined;
            high_index?: string | undefined;
        } & Record<Exclude<keyof I["unbonding_delegation_queue_state"], keyof UnbondingDelegationQueueState>, never>) | undefined;
        unbonding_delegation_queue_entries?: ({
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[] & ({
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        } & {
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        } & Record<Exclude<keyof I["unbonding_delegation_queue_entries"][number], keyof UnbondingDelegationQueueEntry>, never>)[] & Record<Exclude<keyof I["unbonding_delegation_queue_entries"], keyof {
            index?: string | undefined;
            staker?: string | undefined;
            delegator?: string | undefined;
            pool_id?: string | undefined;
            amount?: string | undefined;
            creation_time?: string | undefined;
        }[]>, never>) | undefined;
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
