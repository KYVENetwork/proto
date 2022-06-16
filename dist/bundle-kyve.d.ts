import * as genesisKyve from "./proto/kyve/registry/v1beta1/genesis";
import * as kyveGov from "./proto/kyve/registry/v1beta1/gov";
import * as kyveParams from "./proto/kyve/registry/v1beta1/params";
import * as kyveQuery from "./proto/kyve/registry/v1beta1/query";
import * as kyveRegistry from "./proto/kyve/registry/v1beta1/registry";
import * as kyveTx from "./proto/kyve/registry/v1beta1/tx";
export declare namespace kyve {
    namespace registry {
        const v1beta1: {
            protobufPackage: "kyve.registry.v1beta1";
            MsgFundPool: {
                encode(message: kyveTx.MsgFundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgFundPool;
                fromJSON(object: any): kyveTx.MsgFundPool;
                toJSON(message: kyveTx.MsgFundPool): unknown;
                fromPartial<I extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I, keyof kyveTx.MsgFundPool>, never>>(object: I): kyveTx.MsgFundPool;
            };
            MsgFundPoolResponse: {
                encode(_: kyveTx.MsgFundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgFundPoolResponse;
                fromJSON(_: any): kyveTx.MsgFundPoolResponse;
                toJSON(_: kyveTx.MsgFundPoolResponse): unknown;
                fromPartial<I_1 extends {} & {} & Record<Exclude<keyof I_1, never>, never>>(_: I_1): kyveTx.MsgFundPoolResponse;
            };
            MsgDefundPool: {
                encode(message: kyveTx.MsgDefundPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgDefundPool;
                fromJSON(object: any): kyveTx.MsgDefundPool;
                toJSON(message: kyveTx.MsgDefundPool): unknown;
                fromPartial<I_2 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_2, keyof kyveTx.MsgDefundPool>, never>>(object: I_2): kyveTx.MsgDefundPool;
            };
            MsgDefundPoolResponse: {
                encode(_: kyveTx.MsgDefundPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgDefundPoolResponse;
                fromJSON(_: any): kyveTx.MsgDefundPoolResponse;
                toJSON(_: kyveTx.MsgDefundPoolResponse): unknown;
                fromPartial<I_3 extends {} & {} & Record<Exclude<keyof I_3, never>, never>>(_: I_3): kyveTx.MsgDefundPoolResponse;
            };
            MsgStakePool: {
                encode(message: kyveTx.MsgStakePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgStakePool;
                fromJSON(object: any): kyveTx.MsgStakePool;
                toJSON(message: kyveTx.MsgStakePool): unknown;
                fromPartial<I_4 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_4, keyof kyveTx.MsgStakePool>, never>>(object: I_4): kyveTx.MsgStakePool;
            };
            MsgStakePoolResponse: {
                encode(_: kyveTx.MsgStakePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgStakePoolResponse;
                fromJSON(_: any): kyveTx.MsgStakePoolResponse;
                toJSON(_: kyveTx.MsgStakePoolResponse): unknown;
                fromPartial<I_5 extends {} & {} & Record<Exclude<keyof I_5, never>, never>>(_: I_5): kyveTx.MsgStakePoolResponse;
            };
            MsgUnstakePool: {
                encode(message: kyveTx.MsgUnstakePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUnstakePool;
                fromJSON(object: any): kyveTx.MsgUnstakePool;
                toJSON(message: kyveTx.MsgUnstakePool): unknown;
                fromPartial<I_6 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_6, keyof kyveTx.MsgUnstakePool>, never>>(object: I_6): kyveTx.MsgUnstakePool;
            };
            MsgUnstakePoolResponse: {
                encode(_: kyveTx.MsgUnstakePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUnstakePoolResponse;
                fromJSON(_: any): kyveTx.MsgUnstakePoolResponse;
                toJSON(_: kyveTx.MsgUnstakePoolResponse): unknown;
                fromPartial<I_7 extends {} & {} & Record<Exclude<keyof I_7, never>, never>>(_: I_7): kyveTx.MsgUnstakePoolResponse;
            };
            MsgDelegatePool: {
                encode(message: kyveTx.MsgDelegatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgDelegatePool;
                fromJSON(object: any): kyveTx.MsgDelegatePool;
                toJSON(message: kyveTx.MsgDelegatePool): unknown;
                fromPartial<I_8 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_8, keyof kyveTx.MsgDelegatePool>, never>>(object: I_8): kyveTx.MsgDelegatePool;
            };
            MsgDelegatePoolResponse: {
                encode(_: kyveTx.MsgDelegatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgDelegatePoolResponse;
                fromJSON(_: any): kyveTx.MsgDelegatePoolResponse;
                toJSON(_: kyveTx.MsgDelegatePoolResponse): unknown;
                fromPartial<I_9 extends {} & {} & Record<Exclude<keyof I_9, never>, never>>(_: I_9): kyveTx.MsgDelegatePoolResponse;
            };
            MsgWithdrawPool: {
                encode(message: kyveTx.MsgWithdrawPool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgWithdrawPool;
                fromJSON(object: any): kyveTx.MsgWithdrawPool;
                toJSON(message: kyveTx.MsgWithdrawPool): unknown;
                fromPartial<I_10 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                } & Record<Exclude<keyof I_10, keyof kyveTx.MsgWithdrawPool>, never>>(object: I_10): kyveTx.MsgWithdrawPool;
            };
            MsgWithdrawPoolResponse: {
                encode(_: kyveTx.MsgWithdrawPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgWithdrawPoolResponse;
                fromJSON(_: any): kyveTx.MsgWithdrawPoolResponse;
                toJSON(_: kyveTx.MsgWithdrawPoolResponse): unknown;
                fromPartial<I_11 extends {} & {} & Record<Exclude<keyof I_11, never>, never>>(_: I_11): kyveTx.MsgWithdrawPoolResponse;
            };
            MsgUndelegatePool: {
                encode(message: kyveTx.MsgUndelegatePool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUndelegatePool;
                fromJSON(object: any): kyveTx.MsgUndelegatePool;
                toJSON(message: kyveTx.MsgUndelegatePool): unknown;
                fromPartial<I_12 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                    amount?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    staker?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_12, keyof kyveTx.MsgUndelegatePool>, never>>(object: I_12): kyveTx.MsgUndelegatePool;
            };
            MsgUndelegatePoolResponse: {
                encode(_: kyveTx.MsgUndelegatePoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUndelegatePoolResponse;
                fromJSON(_: any): kyveTx.MsgUndelegatePoolResponse;
                toJSON(_: kyveTx.MsgUndelegatePoolResponse): unknown;
                fromPartial<I_13 extends {} & {} & Record<Exclude<keyof I_13, never>, never>>(_: I_13): kyveTx.MsgUndelegatePoolResponse;
            };
            MsgSubmitBundleProposal: {
                encode(message: kyveTx.MsgSubmitBundleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgSubmitBundleProposal;
                fromJSON(object: any): kyveTx.MsgSubmitBundleProposal;
                toJSON(message: kyveTx.MsgSubmitBundleProposal): unknown;
                fromPartial<I_14 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    bundleId?: string | undefined;
                    byteSize?: string | undefined;
                    fromHeight?: string | undefined;
                    bundleSize?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    bundleId?: string | undefined;
                    byteSize?: string | undefined;
                    fromHeight?: string | undefined;
                    bundleSize?: string | undefined;
                } & Record<Exclude<keyof I_14, keyof kyveTx.MsgSubmitBundleProposal>, never>>(object: I_14): kyveTx.MsgSubmitBundleProposal;
            };
            MsgSubmitBundleProposalResponse: {
                encode(_: kyveTx.MsgSubmitBundleProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgSubmitBundleProposalResponse;
                fromJSON(_: any): kyveTx.MsgSubmitBundleProposalResponse;
                toJSON(_: kyveTx.MsgSubmitBundleProposalResponse): unknown;
                fromPartial<I_15 extends {} & {} & Record<Exclude<keyof I_15, never>, never>>(_: I_15): kyveTx.MsgSubmitBundleProposalResponse;
            };
            MsgVoteProposal: {
                encode(message: kyveTx.MsgVoteProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgVoteProposal;
                fromJSON(object: any): kyveTx.MsgVoteProposal;
                toJSON(message: kyveTx.MsgVoteProposal): unknown;
                fromPartial<I_16 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    bundleId?: string | undefined;
                    vote?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    bundleId?: string | undefined;
                    vote?: string | undefined;
                } & Record<Exclude<keyof I_16, keyof kyveTx.MsgVoteProposal>, never>>(object: I_16): kyveTx.MsgVoteProposal;
            };
            MsgVoteProposalResponse: {
                encode(_: kyveTx.MsgVoteProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgVoteProposalResponse;
                fromJSON(_: any): kyveTx.MsgVoteProposalResponse;
                toJSON(_: kyveTx.MsgVoteProposalResponse): unknown;
                fromPartial<I_17 extends {} & {} & Record<Exclude<keyof I_17, never>, never>>(_: I_17): kyveTx.MsgVoteProposalResponse;
            };
            MsgClaimUploaderRole: {
                encode(message: kyveTx.MsgClaimUploaderRole, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgClaimUploaderRole;
                fromJSON(object: any): kyveTx.MsgClaimUploaderRole;
                toJSON(message: kyveTx.MsgClaimUploaderRole): unknown;
                fromPartial<I_18 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                } & Record<Exclude<keyof I_18, keyof kyveTx.MsgClaimUploaderRole>, never>>(object: I_18): kyveTx.MsgClaimUploaderRole;
            };
            MsgClaimUploaderRoleResponse: {
                encode(_: kyveTx.MsgClaimUploaderRoleResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgClaimUploaderRoleResponse;
                fromJSON(_: any): kyveTx.MsgClaimUploaderRoleResponse;
                toJSON(_: kyveTx.MsgClaimUploaderRoleResponse): unknown;
                fromPartial<I_19 extends {} & {} & Record<Exclude<keyof I_19, never>, never>>(_: I_19): kyveTx.MsgClaimUploaderRoleResponse;
            };
            MsgUpdateMetadata: {
                encode(message: kyveTx.MsgUpdateMetadata, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUpdateMetadata;
                fromJSON(object: any): kyveTx.MsgUpdateMetadata;
                toJSON(message: kyveTx.MsgUpdateMetadata): unknown;
                fromPartial<I_20 extends {
                    creator?: string | undefined;
                    id?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                } & {
                    creator?: string | undefined;
                    id?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                } & Record<Exclude<keyof I_20, keyof kyveTx.MsgUpdateMetadata>, never>>(object: I_20): kyveTx.MsgUpdateMetadata;
            };
            MsgUpdateMetadataResponse: {
                encode(_: kyveTx.MsgUpdateMetadataResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveTx.MsgUpdateMetadataResponse;
                fromJSON(_: any): kyveTx.MsgUpdateMetadataResponse;
                toJSON(_: kyveTx.MsgUpdateMetadataResponse): unknown;
                fromPartial<I_21 extends {} & {} & Record<Exclude<keyof I_21, never>, never>>(_: I_21): kyveTx.MsgUpdateMetadataResponse;
            };
            MsgClientImpl: typeof kyveTx.MsgClientImpl;
            BundleProposal: {
                encode(message: kyveRegistry.BundleProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.BundleProposal;
                fromJSON(object: any): kyveRegistry.BundleProposal;
                toJSON(message: kyveRegistry.BundleProposal): unknown;
                fromPartial<I_22 extends {
                    uploader?: string | undefined;
                    nextUploader?: string | undefined;
                    bundleId?: string | undefined;
                    byteSize?: string | undefined;
                    fromHeight?: string | undefined;
                    toHeight?: string | undefined;
                    createdAt?: string | undefined;
                    votersValid?: string[] | undefined;
                    votersInvalid?: string[] | undefined;
                    votersAbstain?: string[] | undefined;
                } & {
                    uploader?: string | undefined;
                    nextUploader?: string | undefined;
                    bundleId?: string | undefined;
                    byteSize?: string | undefined;
                    fromHeight?: string | undefined;
                    toHeight?: string | undefined;
                    createdAt?: string | undefined;
                    votersValid?: (string[] & string[] & Record<Exclude<keyof I_22["votersValid"], keyof string[]>, never>) | undefined;
                    votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_22["votersInvalid"], keyof string[]>, never>) | undefined;
                    votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_22["votersAbstain"], keyof string[]>, never>) | undefined;
                } & Record<Exclude<keyof I_22, keyof kyveRegistry.BundleProposal>, never>>(object: I_22): kyveRegistry.BundleProposal;
            };
            Protocol: {
                encode(message: kyveRegistry.Protocol, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Protocol;
                fromJSON(object: any): kyveRegistry.Protocol;
                toJSON(message: kyveRegistry.Protocol): unknown;
                fromPartial<I_23 extends {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    lastUpgrade?: string | undefined;
                } & Record<Exclude<keyof I_23, keyof kyveRegistry.Protocol>, never>>(object: I_23): kyveRegistry.Protocol;
            };
            UpgradePlan: {
                encode(message: kyveRegistry.UpgradePlan, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.UpgradePlan;
                fromJSON(object: any): kyveRegistry.UpgradePlan;
                toJSON(message: kyveRegistry.UpgradePlan): unknown;
                fromPartial<I_24 extends {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    scheduledAt?: string | undefined;
                    duration?: string | undefined;
                } & {
                    version?: string | undefined;
                    binaries?: string | undefined;
                    scheduledAt?: string | undefined;
                    duration?: string | undefined;
                } & Record<Exclude<keyof I_24, keyof kyveRegistry.UpgradePlan>, never>>(object: I_24): kyveRegistry.UpgradePlan;
            };
            DelegationEntries: {
                encode(message: kyveRegistry.DelegationEntries, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.DelegationEntries;
                fromJSON(object: any): kyveRegistry.DelegationEntries;
                toJSON(message: kyveRegistry.DelegationEntries): unknown;
                fromPartial<I_25 extends {
                    id?: string | undefined;
                    balance?: string | undefined;
                    staker?: string | undefined;
                    kIndex?: string | undefined;
                } & {
                    id?: string | undefined;
                    balance?: string | undefined;
                    staker?: string | undefined;
                    kIndex?: string | undefined;
                } & Record<Exclude<keyof I_25, keyof kyveRegistry.DelegationEntries>, never>>(object: I_25): kyveRegistry.DelegationEntries;
            };
            DelegationPoolData: {
                encode(message: kyveRegistry.DelegationPoolData, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.DelegationPoolData;
                fromJSON(object: any): kyveRegistry.DelegationPoolData;
                toJSON(message: kyveRegistry.DelegationPoolData): unknown;
                fromPartial<I_26 extends {
                    id?: string | undefined;
                    staker?: string | undefined;
                    currentRewards?: string | undefined;
                    totalDelegation?: string | undefined;
                    latestIndexK?: string | undefined;
                    delegatorCount?: string | undefined;
                    latestIndexWasUndelegation?: boolean | undefined;
                } & {
                    id?: string | undefined;
                    staker?: string | undefined;
                    currentRewards?: string | undefined;
                    totalDelegation?: string | undefined;
                    latestIndexK?: string | undefined;
                    delegatorCount?: string | undefined;
                    latestIndexWasUndelegation?: boolean | undefined;
                } & Record<Exclude<keyof I_26, keyof kyveRegistry.DelegationPoolData>, never>>(object: I_26): kyveRegistry.DelegationPoolData;
            };
            Delegator: {
                encode(message: kyveRegistry.Delegator, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Delegator;
                fromJSON(object: any): kyveRegistry.Delegator;
                toJSON(message: kyveRegistry.Delegator): unknown;
                fromPartial<I_27 extends {
                    id?: string | undefined;
                    kIndex?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                } & {
                    id?: string | undefined;
                    kIndex?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                } & Record<Exclude<keyof I_27, keyof kyveRegistry.Delegator>, never>>(object: I_27): kyveRegistry.Delegator;
            };
            Funder: {
                encode(message: kyveRegistry.Funder, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Funder;
                fromJSON(object: any): kyveRegistry.Funder;
                toJSON(message: kyveRegistry.Funder): unknown;
                fromPartial<I_28 extends {
                    account?: string | undefined;
                    poolId?: string | undefined;
                    amount?: string | undefined;
                } & {
                    account?: string | undefined;
                    poolId?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_28, keyof kyveRegistry.Funder>, never>>(object: I_28): kyveRegistry.Funder;
            };
            Pool: {
                encode(message: kyveRegistry.Pool, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Pool;
                fromJSON(object: any): kyveRegistry.Pool;
                toJSON(message: kyveRegistry.Pool): unknown;
                fromPartial<I_29 extends {
                    id?: string | undefined;
                    creator?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    versions?: string | undefined;
                    config?: string | undefined;
                    heightArchived?: string | undefined;
                    bytesArchived?: string | undefined;
                    totalBundles?: string | undefined;
                    totalBundleRewards?: string | undefined;
                    startHeight?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    paused?: boolean | undefined;
                    funders?: string[] | undefined;
                    lowestFunder?: string | undefined;
                    totalFunds?: string | undefined;
                    stakers?: string[] | undefined;
                    lowestStaker?: string | undefined;
                    totalStake?: string | undefined;
                    totalDelegation?: string | undefined;
                    bundleProposal?: {
                        uploader?: string | undefined;
                        nextUploader?: string | undefined;
                        bundleId?: string | undefined;
                        byteSize?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        createdAt?: string | undefined;
                        votersValid?: string[] | undefined;
                        votersInvalid?: string[] | undefined;
                        votersAbstain?: string[] | undefined;
                    } | undefined;
                    maxBundleSize?: string | undefined;
                    protocol?: {
                        version?: string | undefined;
                        binaries?: string | undefined;
                        lastUpgrade?: string | undefined;
                    } | undefined;
                    upgradePlan?: {
                        version?: string | undefined;
                        binaries?: string | undefined;
                        scheduledAt?: string | undefined;
                        duration?: string | undefined;
                    } | undefined;
                } & {
                    id?: string | undefined;
                    creator?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    versions?: string | undefined;
                    config?: string | undefined;
                    heightArchived?: string | undefined;
                    bytesArchived?: string | undefined;
                    totalBundles?: string | undefined;
                    totalBundleRewards?: string | undefined;
                    startHeight?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    paused?: boolean | undefined;
                    funders?: (string[] & string[] & Record<Exclude<keyof I_29["funders"], keyof string[]>, never>) | undefined;
                    lowestFunder?: string | undefined;
                    totalFunds?: string | undefined;
                    stakers?: (string[] & string[] & Record<Exclude<keyof I_29["stakers"], keyof string[]>, never>) | undefined;
                    lowestStaker?: string | undefined;
                    totalStake?: string | undefined;
                    totalDelegation?: string | undefined;
                    bundleProposal?: ({
                        uploader?: string | undefined;
                        nextUploader?: string | undefined;
                        bundleId?: string | undefined;
                        byteSize?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        createdAt?: string | undefined;
                        votersValid?: string[] | undefined;
                        votersInvalid?: string[] | undefined;
                        votersAbstain?: string[] | undefined;
                    } & {
                        uploader?: string | undefined;
                        nextUploader?: string | undefined;
                        bundleId?: string | undefined;
                        byteSize?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        createdAt?: string | undefined;
                        votersValid?: (string[] & string[] & Record<Exclude<keyof I_29["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                        votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_29["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                        votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_29["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                    } & Record<Exclude<keyof I_29["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                    maxBundleSize?: string | undefined;
                    protocol?: ({
                        version?: string | undefined;
                        binaries?: string | undefined;
                        lastUpgrade?: string | undefined;
                    } & {
                        version?: string | undefined;
                        binaries?: string | undefined;
                        lastUpgrade?: string | undefined;
                    } & Record<Exclude<keyof I_29["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                    upgradePlan?: ({
                        version?: string | undefined;
                        binaries?: string | undefined;
                        scheduledAt?: string | undefined;
                        duration?: string | undefined;
                    } & {
                        version?: string | undefined;
                        binaries?: string | undefined;
                        scheduledAt?: string | undefined;
                        duration?: string | undefined;
                    } & Record<Exclude<keyof I_29["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                } & Record<Exclude<keyof I_29, keyof kyveRegistry.Pool>, never>>(object: I_29): kyveRegistry.Pool;
            };
            Proposal: {
                encode(message: kyveRegistry.Proposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Proposal;
                fromJSON(object: any): kyveRegistry.Proposal;
                toJSON(message: kyveRegistry.Proposal): unknown;
                fromPartial<I_30 extends {
                    bundleId?: string | undefined;
                    poolId?: string | undefined;
                    uploader?: string | undefined;
                    fromHeight?: string | undefined;
                    toHeight?: string | undefined;
                    finalizedAt?: string | undefined;
                } & {
                    bundleId?: string | undefined;
                    poolId?: string | undefined;
                    uploader?: string | undefined;
                    fromHeight?: string | undefined;
                    toHeight?: string | undefined;
                    finalizedAt?: string | undefined;
                } & Record<Exclude<keyof I_30, keyof kyveRegistry.Proposal>, never>>(object: I_30): kyveRegistry.Proposal;
            };
            Staker: {
                encode(message: kyveRegistry.Staker, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.Staker;
                fromJSON(object: any): kyveRegistry.Staker;
                toJSON(message: kyveRegistry.Staker): unknown;
                fromPartial<I_31 extends {
                    account?: string | undefined;
                    poolId?: string | undefined;
                    amount?: string | undefined;
                    unbondingAmount?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    points?: string | undefined;
                } & {
                    account?: string | undefined;
                    poolId?: string | undefined;
                    amount?: string | undefined;
                    unbondingAmount?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    points?: string | undefined;
                } & Record<Exclude<keyof I_31, keyof kyveRegistry.Staker>, never>>(object: I_31): kyveRegistry.Staker;
            };
            UnbondingEntries: {
                encode(message: kyveRegistry.UnbondingEntries, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.UnbondingEntries;
                fromJSON(object: any): kyveRegistry.UnbondingEntries;
                toJSON(message: kyveRegistry.UnbondingEntries): unknown;
                fromPartial<I_32 extends {
                    index?: string | undefined;
                    poolId?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                    creationTime?: string | undefined;
                    amount?: string | undefined;
                } & {
                    index?: string | undefined;
                    poolId?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                    creationTime?: string | undefined;
                    amount?: string | undefined;
                } & Record<Exclude<keyof I_32, keyof kyveRegistry.UnbondingEntries>, never>>(object: I_32): kyveRegistry.UnbondingEntries;
            };
            UnbondingState: {
                encode(message: kyveRegistry.UnbondingState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveRegistry.UnbondingState;
                fromJSON(object: any): kyveRegistry.UnbondingState;
                toJSON(message: kyveRegistry.UnbondingState): unknown;
                fromPartial<I_33 extends {
                    lowIndex?: string | undefined;
                    highIndex?: string | undefined;
                } & {
                    lowIndex?: string | undefined;
                    highIndex?: string | undefined;
                } & Record<Exclude<keyof I_33, keyof kyveRegistry.UnbondingState>, never>>(object: I_33): kyveRegistry.UnbondingState;
            };
            QueryParamsRequest: {
                encode(_: kyveQuery.QueryParamsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryParamsRequest;
                fromJSON(_: any): kyveQuery.QueryParamsRequest;
                toJSON(_: kyveQuery.QueryParamsRequest): unknown;
                fromPartial<I_34 extends {} & {} & Record<Exclude<keyof I_34, never>, never>>(_: I_34): kyveQuery.QueryParamsRequest;
            };
            QueryParamsResponse: {
                encode(message: kyveQuery.QueryParamsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryParamsResponse;
                fromJSON(object: any): kyveQuery.QueryParamsResponse;
                toJSON(message: kyveQuery.QueryParamsResponse): unknown;
                fromPartial<I_35 extends {
                    params?: {
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } | undefined;
                } & {
                    params?: ({
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } & {
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } & Record<Exclude<keyof I_35["params"], keyof kyveParams.Params>, never>) | undefined;
                } & Record<Exclude<keyof I_35, "params">, never>>(object: I_35): kyveQuery.QueryParamsResponse;
            };
            QueryPoolRequest: {
                encode(message: kyveQuery.QueryPoolRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryPoolRequest;
                fromJSON(object: any): kyveQuery.QueryPoolRequest;
                toJSON(message: kyveQuery.QueryPoolRequest): unknown;
                fromPartial<I_36 extends {
                    id?: string | undefined;
                } & {
                    id?: string | undefined;
                } & Record<Exclude<keyof I_36, "id">, never>>(object: I_36): kyveQuery.QueryPoolRequest;
            };
            QueryPoolResponse: {
                encode(message: kyveQuery.QueryPoolResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryPoolResponse;
                fromJSON(object: any): kyveQuery.QueryPoolResponse;
                toJSON(message: kyveQuery.QueryPoolResponse): unknown;
                fromPartial<I_37 extends {
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_37["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_37["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_37["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_37["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_37["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_37["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_37["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_37["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_37["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                } & Record<Exclude<keyof I_37, "pool">, never>>(object: I_37): kyveQuery.QueryPoolResponse;
            };
            QueryPoolsRequest: {
                encode(message: kyveQuery.QueryPoolsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryPoolsRequest;
                fromJSON(object: any): kyveQuery.QueryPoolsRequest;
                toJSON(message: kyveQuery.QueryPoolsRequest): unknown;
                fromPartial<I_38 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    search?: string | undefined;
                    runtime?: string | undefined;
                    paused?: boolean | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_38["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    search?: string | undefined;
                    runtime?: string | undefined;
                    paused?: boolean | undefined;
                } & Record<Exclude<keyof I_38, keyof kyveQuery.QueryPoolsRequest>, never>>(object: I_38): kyveQuery.QueryPoolsRequest;
            };
            QueryPoolsResponse: {
                encode(message: kyveQuery.QueryPoolsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryPoolsResponse;
                fromJSON(object: any): kyveQuery.QueryPoolsResponse;
                toJSON(message: kyveQuery.QueryPoolsResponse): unknown;
                fromPartial<I_39 extends {
                    pools?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    pools?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[] & ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_39["pools"][number]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_39["pools"][number]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_39["pools"][number]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_39["pools"][number]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_39["pools"][number]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_39["pools"][number]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_39["pools"][number]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_39["pools"][number]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_39["pools"][number], keyof kyveRegistry.Pool>, never>)[] & Record<Exclude<keyof I_39["pools"], keyof {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_39["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_39, keyof kyveQuery.QueryPoolsResponse>, never>>(object: I_39): kyveQuery.QueryPoolsResponse;
            };
            QueryFundersListRequest: {
                encode(message: kyveQuery.QueryFundersListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryFundersListRequest;
                fromJSON(object: any): kyveQuery.QueryFundersListRequest;
                toJSON(message: kyveQuery.QueryFundersListRequest): unknown;
                fromPartial<I_40 extends {
                    poolId?: string | undefined;
                } & {
                    poolId?: string | undefined;
                } & Record<Exclude<keyof I_40, "poolId">, never>>(object: I_40): kyveQuery.QueryFundersListRequest;
            };
            QueryFundersListResponse: {
                encode(message: kyveQuery.QueryFundersListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryFundersListResponse;
                fromJSON(object: any): kyveQuery.QueryFundersListResponse;
                toJSON(message: kyveQuery.QueryFundersListResponse): unknown;
                fromPartial<I_41 extends {
                    funders?: {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    funders?: ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_41["funders"][number], keyof kyveRegistry.Funder>, never>)[] & Record<Exclude<keyof I_41["funders"], keyof {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_41, "funders">, never>>(object: I_41): kyveQuery.QueryFundersListResponse;
            };
            QueryFunderRequest: {
                encode(message: kyveQuery.QueryFunderRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryFunderRequest;
                fromJSON(object: any): kyveQuery.QueryFunderRequest;
                toJSON(message: kyveQuery.QueryFunderRequest): unknown;
                fromPartial<I_42 extends {
                    poolId?: string | undefined;
                    funder?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    funder?: string | undefined;
                } & Record<Exclude<keyof I_42, keyof kyveQuery.QueryFunderRequest>, never>>(object: I_42): kyveQuery.QueryFunderRequest;
            };
            QueryFunderResponse: {
                encode(message: kyveQuery.QueryFunderResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryFunderResponse;
                fromJSON(object: any): kyveQuery.QueryFunderResponse;
                toJSON(message: kyveQuery.QueryFunderResponse): unknown;
                fromPartial<I_43 extends {
                    funder?: {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } | undefined;
                } & {
                    funder?: ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_43["funder"], keyof kyveRegistry.Funder>, never>) | undefined;
                } & Record<Exclude<keyof I_43, "funder">, never>>(object: I_43): kyveQuery.QueryFunderResponse;
            };
            QueryStakersListRequest: {
                encode(message: kyveQuery.QueryStakersListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakersListRequest;
                fromJSON(object: any): kyveQuery.QueryStakersListRequest;
                toJSON(message: kyveQuery.QueryStakersListRequest): unknown;
                fromPartial<I_44 extends {
                    poolId?: string | undefined;
                } & {
                    poolId?: string | undefined;
                } & Record<Exclude<keyof I_44, "poolId">, never>>(object: I_44): kyveQuery.QueryStakersListRequest;
            };
            QueryStakersListResponse: {
                encode(message: kyveQuery.QueryStakersListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakersListResponse;
                fromJSON(object: any): kyveQuery.QueryStakersListResponse;
                toJSON(message: kyveQuery.QueryStakersListResponse): unknown;
                fromPartial<I_45 extends {
                    stakers?: {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[] | undefined;
                } & {
                    stakers?: ({
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[] & ({
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & Record<Exclude<keyof I_45["stakers"][number], keyof kyveQuery.StakerResponse>, never>)[] & Record<Exclude<keyof I_45["stakers"], keyof {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_45, "stakers">, never>>(object: I_45): kyveQuery.QueryStakersListResponse;
            };
            QueryStakerRequest: {
                encode(message: kyveQuery.QueryStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakerRequest;
                fromJSON(object: any): kyveQuery.QueryStakerRequest;
                toJSON(message: kyveQuery.QueryStakerRequest): unknown;
                fromPartial<I_46 extends {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & Record<Exclude<keyof I_46, keyof kyveQuery.QueryStakerRequest>, never>>(object: I_46): kyveQuery.QueryStakerRequest;
            };
            QueryStakerResponse: {
                encode(message: kyveQuery.QueryStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakerResponse;
                fromJSON(object: any): kyveQuery.QueryStakerResponse;
                toJSON(message: kyveQuery.QueryStakerResponse): unknown;
                fromPartial<I_47 extends {
                    staker?: {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } | undefined;
                } & {
                    staker?: ({
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        totalDelegation?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & Record<Exclude<keyof I_47["staker"], keyof kyveQuery.StakerResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_47, "staker">, never>>(object: I_47): kyveQuery.QueryStakerResponse;
            };
            StakerResponse: {
                encode(message: kyveQuery.StakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.StakerResponse;
                fromJSON(object: any): kyveQuery.StakerResponse;
                toJSON(message: kyveQuery.StakerResponse): unknown;
                fromPartial<I_48 extends {
                    staker?: string | undefined;
                    poolId?: string | undefined;
                    account?: string | undefined;
                    amount?: string | undefined;
                    totalDelegation?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    points?: string | undefined;
                } & {
                    staker?: string | undefined;
                    poolId?: string | undefined;
                    account?: string | undefined;
                    amount?: string | undefined;
                    totalDelegation?: string | undefined;
                    commission?: string | undefined;
                    moniker?: string | undefined;
                    website?: string | undefined;
                    logo?: string | undefined;
                    points?: string | undefined;
                } & Record<Exclude<keyof I_48, keyof kyveQuery.StakerResponse>, never>>(object: I_48): kyveQuery.StakerResponse;
            };
            QueryProposalRequest: {
                encode(message: kyveQuery.QueryProposalRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalRequest;
                fromJSON(object: any): kyveQuery.QueryProposalRequest;
                toJSON(message: kyveQuery.QueryProposalRequest): unknown;
                fromPartial<I_49 extends {
                    bundleId?: string | undefined;
                } & {
                    bundleId?: string | undefined;
                } & Record<Exclude<keyof I_49, "bundleId">, never>>(object: I_49): kyveQuery.QueryProposalRequest;
            };
            QueryProposalResponse: {
                encode(message: kyveQuery.QueryProposalResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalResponse;
                fromJSON(object: any): kyveQuery.QueryProposalResponse;
                toJSON(message: kyveQuery.QueryProposalResponse): unknown;
                fromPartial<I_50 extends {
                    proposal?: {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } | undefined;
                } & {
                    proposal?: ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & Record<Exclude<keyof I_50["proposal"], keyof kyveRegistry.Proposal>, never>) | undefined;
                } & Record<Exclude<keyof I_50, "proposal">, never>>(object: I_50): kyveQuery.QueryProposalResponse;
            };
            QueryProposalsRequest: {
                encode(message: kyveQuery.QueryProposalsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalsRequest;
                fromJSON(object: any): kyveQuery.QueryProposalsRequest;
                toJSON(message: kyveQuery.QueryProposalsRequest): unknown;
                fromPartial<I_51 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    poolId?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_51["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    poolId?: string | undefined;
                } & Record<Exclude<keyof I_51, keyof kyveQuery.QueryProposalsRequest>, never>>(object: I_51): kyveQuery.QueryProposalsRequest;
            };
            QueryProposalsResponse: {
                encode(message: kyveQuery.QueryProposalsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalsResponse;
                fromJSON(object: any): kyveQuery.QueryProposalsResponse;
                toJSON(message: kyveQuery.QueryProposalsResponse): unknown;
                fromPartial<I_52 extends {
                    proposals?: {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    proposals?: ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[] & ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & Record<Exclude<keyof I_52["proposals"][number], keyof kyveRegistry.Proposal>, never>)[] & Record<Exclude<keyof I_52["proposals"], keyof {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_52["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_52, keyof kyveQuery.QueryProposalsResponse>, never>>(object: I_52): kyveQuery.QueryProposalsResponse;
            };
            QueryProposalByHeightRequest: {
                encode(message: kyveQuery.QueryProposalByHeightRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalByHeightRequest;
                fromJSON(object: any): kyveQuery.QueryProposalByHeightRequest;
                toJSON(message: kyveQuery.QueryProposalByHeightRequest): unknown;
                fromPartial<I_53 extends {
                    poolId?: string | undefined;
                    height?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    height?: string | undefined;
                } & Record<Exclude<keyof I_53, keyof kyveQuery.QueryProposalByHeightRequest>, never>>(object: I_53): kyveQuery.QueryProposalByHeightRequest;
            };
            QueryProposalByHeightResponse: {
                encode(message: kyveQuery.QueryProposalByHeightResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryProposalByHeightResponse;
                fromJSON(object: any): kyveQuery.QueryProposalByHeightResponse;
                toJSON(message: kyveQuery.QueryProposalByHeightResponse): unknown;
                fromPartial<I_54 extends {
                    proposal?: {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } | undefined;
                } & {
                    proposal?: ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & Record<Exclude<keyof I_54["proposal"], keyof kyveRegistry.Proposal>, never>) | undefined;
                } & Record<Exclude<keyof I_54, "proposal">, never>>(object: I_54): kyveQuery.QueryProposalByHeightResponse;
            };
            QueryCanProposeRequest: {
                encode(message: kyveQuery.QueryCanProposeRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryCanProposeRequest;
                fromJSON(object: any): kyveQuery.QueryCanProposeRequest;
                toJSON(message: kyveQuery.QueryCanProposeRequest): unknown;
                fromPartial<I_55 extends {
                    poolId?: string | undefined;
                    proposer?: string | undefined;
                    fromHeight?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    proposer?: string | undefined;
                    fromHeight?: string | undefined;
                } & Record<Exclude<keyof I_55, keyof kyveQuery.QueryCanProposeRequest>, never>>(object: I_55): kyveQuery.QueryCanProposeRequest;
            };
            QueryCanProposeResponse: {
                encode(message: kyveQuery.QueryCanProposeResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryCanProposeResponse;
                fromJSON(object: any): kyveQuery.QueryCanProposeResponse;
                toJSON(message: kyveQuery.QueryCanProposeResponse): unknown;
                fromPartial<I_56 extends {
                    possible?: boolean | undefined;
                    reason?: string | undefined;
                } & {
                    possible?: boolean | undefined;
                    reason?: string | undefined;
                } & Record<Exclude<keyof I_56, keyof kyveQuery.QueryCanProposeResponse>, never>>(object: I_56): kyveQuery.QueryCanProposeResponse;
            };
            QueryCanVoteRequest: {
                encode(message: kyveQuery.QueryCanVoteRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryCanVoteRequest;
                fromJSON(object: any): kyveQuery.QueryCanVoteRequest;
                toJSON(message: kyveQuery.QueryCanVoteRequest): unknown;
                fromPartial<I_57 extends {
                    poolId?: string | undefined;
                    voter?: string | undefined;
                    bundleId?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    voter?: string | undefined;
                    bundleId?: string | undefined;
                } & Record<Exclude<keyof I_57, keyof kyveQuery.QueryCanVoteRequest>, never>>(object: I_57): kyveQuery.QueryCanVoteRequest;
            };
            QueryCanVoteResponse: {
                encode(message: kyveQuery.QueryCanVoteResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryCanVoteResponse;
                fromJSON(object: any): kyveQuery.QueryCanVoteResponse;
                toJSON(message: kyveQuery.QueryCanVoteResponse): unknown;
                fromPartial<I_58 extends {
                    possible?: boolean | undefined;
                    reason?: string | undefined;
                } & {
                    possible?: boolean | undefined;
                    reason?: string | undefined;
                } & Record<Exclude<keyof I_58, keyof kyveQuery.QueryCanVoteResponse>, never>>(object: I_58): kyveQuery.QueryCanVoteResponse;
            };
            QueryStakeInfoRequest: {
                encode(message: kyveQuery.QueryStakeInfoRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakeInfoRequest;
                fromJSON(object: any): kyveQuery.QueryStakeInfoRequest;
                toJSON(message: kyveQuery.QueryStakeInfoRequest): unknown;
                fromPartial<I_59 extends {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & Record<Exclude<keyof I_59, keyof kyveQuery.QueryStakeInfoRequest>, never>>(object: I_59): kyveQuery.QueryStakeInfoRequest;
            };
            QueryStakeInfoResponse: {
                encode(message: kyveQuery.QueryStakeInfoResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakeInfoResponse;
                fromJSON(object: any): kyveQuery.QueryStakeInfoResponse;
                toJSON(message: kyveQuery.QueryStakeInfoResponse): unknown;
                fromPartial<I_60 extends {
                    balance?: string | undefined;
                    currentStake?: string | undefined;
                    minimumStake?: string | undefined;
                } & {
                    balance?: string | undefined;
                    currentStake?: string | undefined;
                    minimumStake?: string | undefined;
                } & Record<Exclude<keyof I_60, keyof kyveQuery.QueryStakeInfoResponse>, never>>(object: I_60): kyveQuery.QueryStakeInfoResponse;
            };
            QueryAccountAssetsRequest: {
                encode(message: kyveQuery.QueryAccountAssetsRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountAssetsRequest;
                fromJSON(object: any): kyveQuery.QueryAccountAssetsRequest;
                toJSON(message: kyveQuery.QueryAccountAssetsRequest): unknown;
                fromPartial<I_61 extends {
                    address?: string | undefined;
                } & {
                    address?: string | undefined;
                } & Record<Exclude<keyof I_61, "address">, never>>(object: I_61): kyveQuery.QueryAccountAssetsRequest;
            };
            QueryAccountAssetsResponse: {
                encode(message: kyveQuery.QueryAccountAssetsResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountAssetsResponse;
                fromJSON(object: any): kyveQuery.QueryAccountAssetsResponse;
                toJSON(message: kyveQuery.QueryAccountAssetsResponse): unknown;
                fromPartial<I_62 extends {
                    balance?: string | undefined;
                    protocolStaking?: string | undefined;
                    protocolDelegation?: string | undefined;
                    protocolRewards?: string | undefined;
                    protocolFunding?: string | undefined;
                } & {
                    balance?: string | undefined;
                    protocolStaking?: string | undefined;
                    protocolDelegation?: string | undefined;
                    protocolRewards?: string | undefined;
                    protocolFunding?: string | undefined;
                } & Record<Exclude<keyof I_62, keyof kyveQuery.QueryAccountAssetsResponse>, never>>(object: I_62): kyveQuery.QueryAccountAssetsResponse;
            };
            QueryAccountFundedListRequest: {
                encode(message: kyveQuery.QueryAccountFundedListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountFundedListRequest;
                fromJSON(object: any): kyveQuery.QueryAccountFundedListRequest;
                toJSON(message: kyveQuery.QueryAccountFundedListRequest): unknown;
                fromPartial<I_63 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    address?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_63["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I_63, keyof kyveQuery.QueryAccountFundedListRequest>, never>>(object: I_63): kyveQuery.QueryAccountFundedListRequest;
            };
            QueryAccountFundedListResponse: {
                encode(message: kyveQuery.QueryAccountFundedListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountFundedListResponse;
                fromJSON(object: any): kyveQuery.QueryAccountFundedListResponse;
                toJSON(message: kyveQuery.QueryAccountFundedListResponse): unknown;
                fromPartial<I_64 extends {
                    funded?: {
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    funded?: ({
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[] & ({
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: ({
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } & {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: (string[] & string[] & Record<Exclude<keyof I_64["funded"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: (string[] & string[] & Record<Exclude<keyof I_64["funded"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: ({
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } & {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: (string[] & string[] & Record<Exclude<keyof I_64["funded"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_64["funded"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_64["funded"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I_64["funded"][number]["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & Record<Exclude<keyof I_64["funded"][number]["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                            upgradePlan?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & Record<Exclude<keyof I_64["funded"][number]["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                        } & Record<Exclude<keyof I_64["funded"][number]["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                    } & Record<Exclude<keyof I_64["funded"][number], keyof kyveQuery.Funded>, never>)[] & Record<Exclude<keyof I_64["funded"], keyof {
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_64["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_64, keyof kyveQuery.QueryAccountFundedListResponse>, never>>(object: I_64): kyveQuery.QueryAccountFundedListResponse;
            };
            Funded: {
                encode(message: kyveQuery.Funded, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.Funded;
                fromJSON(object: any): kyveQuery.Funded;
                toJSON(message: kyveQuery.Funded): unknown;
                fromPartial<I_65 extends {
                    account?: string | undefined;
                    amount?: string | undefined;
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    account?: string | undefined;
                    amount?: string | undefined;
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_65["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_65["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_65["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_65["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_65["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_65["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_65["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_65["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_65["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                } & Record<Exclude<keyof I_65, keyof kyveQuery.Funded>, never>>(object: I_65): kyveQuery.Funded;
            };
            QueryAccountStakedListRequest: {
                encode(message: kyveQuery.QueryAccountStakedListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountStakedListRequest;
                fromJSON(object: any): kyveQuery.QueryAccountStakedListRequest;
                toJSON(message: kyveQuery.QueryAccountStakedListRequest): unknown;
                fromPartial<I_66 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    address?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_66["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I_66, keyof kyveQuery.QueryAccountStakedListRequest>, never>>(object: I_66): kyveQuery.QueryAccountStakedListRequest;
            };
            QueryAccountStakedListResponse: {
                encode(message: kyveQuery.QueryAccountStakedListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountStakedListResponse;
                fromJSON(object: any): kyveQuery.QueryAccountStakedListResponse;
                toJSON(message: kyveQuery.QueryAccountStakedListResponse): unknown;
                fromPartial<I_67 extends {
                    staked?: {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    staked?: ({
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[] & ({
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    } & {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: ({
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } & {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: (string[] & string[] & Record<Exclude<keyof I_67["staked"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: (string[] & string[] & Record<Exclude<keyof I_67["staked"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: ({
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } & {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: (string[] & string[] & Record<Exclude<keyof I_67["staked"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_67["staked"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_67["staked"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I_67["staked"][number]["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & Record<Exclude<keyof I_67["staked"][number]["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                            upgradePlan?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & Record<Exclude<keyof I_67["staked"][number]["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                        } & Record<Exclude<keyof I_67["staked"][number]["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                    } & Record<Exclude<keyof I_67["staked"][number], keyof kyveQuery.Staked>, never>)[] & Record<Exclude<keyof I_67["staked"], keyof {
                        staker?: string | undefined;
                        poolId?: string | undefined;
                        account?: string | undefined;
                        amount?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_67["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_67, keyof kyveQuery.QueryAccountStakedListResponse>, never>>(object: I_67): kyveQuery.QueryAccountStakedListResponse;
            };
            Staked: {
                encode(message: kyveQuery.Staked, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.Staked;
                fromJSON(object: any): kyveQuery.Staked;
                toJSON(message: kyveQuery.Staked): unknown;
                fromPartial<I_68 extends {
                    staker?: string | undefined;
                    poolId?: string | undefined;
                    account?: string | undefined;
                    amount?: string | undefined;
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                } & {
                    staker?: string | undefined;
                    poolId?: string | undefined;
                    account?: string | undefined;
                    amount?: string | undefined;
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_68["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_68["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_68["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_68["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_68["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_68["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_68["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_68["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_68["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                } & Record<Exclude<keyof I_68, keyof kyveQuery.Staked>, never>>(object: I_68): kyveQuery.Staked;
            };
            QueryAccountDelegationListRequest: {
                encode(message: kyveQuery.QueryAccountDelegationListRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountDelegationListRequest;
                fromJSON(object: any): kyveQuery.QueryAccountDelegationListRequest;
                toJSON(message: kyveQuery.QueryAccountDelegationListRequest): unknown;
                fromPartial<I_69 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    address?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_69["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    address?: string | undefined;
                } & Record<Exclude<keyof I_69, keyof kyveQuery.QueryAccountDelegationListRequest>, never>>(object: I_69): kyveQuery.QueryAccountDelegationListRequest;
            };
            QueryAccountDelegationListResponse: {
                encode(message: kyveQuery.QueryAccountDelegationListResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryAccountDelegationListResponse;
                fromJSON(object: any): kyveQuery.QueryAccountDelegationListResponse;
                toJSON(message: kyveQuery.QueryAccountDelegationListResponse): unknown;
                fromPartial<I_70 extends {
                    delegations?: {
                        account?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegationPoolData?: {
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    delegations?: ({
                        account?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegationPoolData?: {
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } | undefined;
                    }[] & ({
                        account?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegationPoolData?: {
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } | undefined;
                    } & {
                        account?: string | undefined;
                        pool?: ({
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } & {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: (string[] & string[] & Record<Exclude<keyof I_70["delegations"][number]["pool"]["funders"], keyof string[]>, never>) | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: (string[] & string[] & Record<Exclude<keyof I_70["delegations"][number]["pool"]["stakers"], keyof string[]>, never>) | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: ({
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } & {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: (string[] & string[] & Record<Exclude<keyof I_70["delegations"][number]["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                                votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_70["delegations"][number]["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                                votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_70["delegations"][number]["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                            } & Record<Exclude<keyof I_70["delegations"][number]["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } & Record<Exclude<keyof I_70["delegations"][number]["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                            upgradePlan?: ({
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } & Record<Exclude<keyof I_70["delegations"][number]["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                        } & Record<Exclude<keyof I_70["delegations"][number]["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegationPoolData?: ({
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } & {
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } & Record<Exclude<keyof I_70["delegations"][number]["delegationPoolData"], keyof kyveRegistry.DelegationPoolData>, never>) | undefined;
                    } & Record<Exclude<keyof I_70["delegations"][number], keyof kyveQuery.DelegatorResponse>, never>)[] & Record<Exclude<keyof I_70["delegations"], keyof {
                        account?: string | undefined;
                        pool?: {
                            id?: string | undefined;
                            creator?: string | undefined;
                            name?: string | undefined;
                            runtime?: string | undefined;
                            logo?: string | undefined;
                            versions?: string | undefined;
                            config?: string | undefined;
                            heightArchived?: string | undefined;
                            bytesArchived?: string | undefined;
                            totalBundles?: string | undefined;
                            totalBundleRewards?: string | undefined;
                            startHeight?: string | undefined;
                            uploadInterval?: string | undefined;
                            operatingCost?: string | undefined;
                            paused?: boolean | undefined;
                            funders?: string[] | undefined;
                            lowestFunder?: string | undefined;
                            totalFunds?: string | undefined;
                            stakers?: string[] | undefined;
                            lowestStaker?: string | undefined;
                            totalStake?: string | undefined;
                            totalDelegation?: string | undefined;
                            bundleProposal?: {
                                uploader?: string | undefined;
                                nextUploader?: string | undefined;
                                bundleId?: string | undefined;
                                byteSize?: string | undefined;
                                fromHeight?: string | undefined;
                                toHeight?: string | undefined;
                                createdAt?: string | undefined;
                                votersValid?: string[] | undefined;
                                votersInvalid?: string[] | undefined;
                                votersAbstain?: string[] | undefined;
                            } | undefined;
                            maxBundleSize?: string | undefined;
                            protocol?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                lastUpgrade?: string | undefined;
                            } | undefined;
                            upgradePlan?: {
                                version?: string | undefined;
                                binaries?: string | undefined;
                                scheduledAt?: string | undefined;
                                duration?: string | undefined;
                            } | undefined;
                        } | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegationPoolData?: {
                            id?: string | undefined;
                            staker?: string | undefined;
                            currentRewards?: string | undefined;
                            totalDelegation?: string | undefined;
                            latestIndexK?: string | undefined;
                            delegatorCount?: string | undefined;
                            latestIndexWasUndelegation?: boolean | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_70["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_70, keyof kyveQuery.QueryAccountDelegationListResponse>, never>>(object: I_70): kyveQuery.QueryAccountDelegationListResponse;
            };
            QueryDelegatorRequest: {
                encode(message: kyveQuery.QueryDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryDelegatorRequest;
                fromJSON(object: any): kyveQuery.QueryDelegatorRequest;
                toJSON(message: kyveQuery.QueryDelegatorRequest): unknown;
                fromPartial<I_71 extends {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                } & {
                    poolId?: string | undefined;
                    staker?: string | undefined;
                    delegator?: string | undefined;
                } & Record<Exclude<keyof I_71, keyof kyveQuery.QueryDelegatorRequest>, never>>(object: I_71): kyveQuery.QueryDelegatorRequest;
            };
            QueryDelegatorResponse: {
                encode(message: kyveQuery.QueryDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryDelegatorResponse;
                fromJSON(object: any): kyveQuery.QueryDelegatorResponse;
                toJSON(message: kyveQuery.QueryDelegatorResponse): unknown;
                fromPartial<I_72 extends {
                    delegator?: {
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    } | undefined;
                } & {
                    delegator?: ({
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    } & {
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    } & Record<Exclude<keyof I_72["delegator"], keyof kyveQuery.StakerDelegatorResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_72, "delegator">, never>>(object: I_72): kyveQuery.QueryDelegatorResponse;
            };
            DelegatorResponse: {
                encode(message: kyveQuery.DelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.DelegatorResponse;
                fromJSON(object: any): kyveQuery.DelegatorResponse;
                toJSON(message: kyveQuery.DelegatorResponse): unknown;
                fromPartial<I_73 extends {
                    account?: string | undefined;
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                    delegationPoolData?: {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } | undefined;
                } & {
                    account?: string | undefined;
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_73["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_73["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_73["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_73["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_73["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_73["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_73["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_73["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_73["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                    delegationPoolData?: ({
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & Record<Exclude<keyof I_73["delegationPoolData"], keyof kyveRegistry.DelegationPoolData>, never>) | undefined;
                } & Record<Exclude<keyof I_73, keyof kyveQuery.DelegatorResponse>, never>>(object: I_73): kyveQuery.DelegatorResponse;
            };
            QueryDelegatorsByPoolAndStakerRequest: {
                encode(message: kyveQuery.QueryDelegatorsByPoolAndStakerRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryDelegatorsByPoolAndStakerRequest;
                fromJSON(object: any): kyveQuery.QueryDelegatorsByPoolAndStakerRequest;
                toJSON(message: kyveQuery.QueryDelegatorsByPoolAndStakerRequest): unknown;
                fromPartial<I_74 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_74["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    poolId?: string | undefined;
                    staker?: string | undefined;
                } & Record<Exclude<keyof I_74, keyof kyveQuery.QueryDelegatorsByPoolAndStakerRequest>, never>>(object: I_74): kyveQuery.QueryDelegatorsByPoolAndStakerRequest;
            };
            QueryDelegatorsByPoolAndStakerResponse: {
                encode(message: kyveQuery.QueryDelegatorsByPoolAndStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryDelegatorsByPoolAndStakerResponse;
                fromJSON(object: any): kyveQuery.QueryDelegatorsByPoolAndStakerResponse;
                toJSON(message: kyveQuery.QueryDelegatorsByPoolAndStakerResponse): unknown;
                fromPartial<I_75 extends {
                    delegators?: {
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    }[] | undefined;
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                    delegationPoolData?: {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    delegators?: ({
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    }[] & ({
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    } & {
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    } & Record<Exclude<keyof I_75["delegators"][number], keyof kyveQuery.StakerDelegatorResponse>, never>)[] & Record<Exclude<keyof I_75["delegators"], keyof {
                        delegator?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                    }[]>, never>) | undefined;
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_75["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_75["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_75["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_75["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_75["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_75["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_75["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_75["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_75["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                    delegationPoolData?: ({
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & Record<Exclude<keyof I_75["delegationPoolData"], keyof kyveRegistry.DelegationPoolData>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_75["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_75, keyof kyveQuery.QueryDelegatorsByPoolAndStakerResponse>, never>>(object: I_75): kyveQuery.QueryDelegatorsByPoolAndStakerResponse;
            };
            StakerDelegatorResponse: {
                encode(message: kyveQuery.StakerDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.StakerDelegatorResponse;
                fromJSON(object: any): kyveQuery.StakerDelegatorResponse;
                toJSON(message: kyveQuery.StakerDelegatorResponse): unknown;
                fromPartial<I_76 extends {
                    delegator?: string | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                } & {
                    delegator?: string | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    staker?: string | undefined;
                } & Record<Exclude<keyof I_76, keyof kyveQuery.StakerDelegatorResponse>, never>>(object: I_76): kyveQuery.StakerDelegatorResponse;
            };
            QueryStakersByPoolAndDelegatorRequest: {
                encode(message: kyveQuery.QueryStakersByPoolAndDelegatorRequest, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakersByPoolAndDelegatorRequest;
                fromJSON(object: any): kyveQuery.QueryStakersByPoolAndDelegatorRequest;
                toJSON(message: kyveQuery.QueryStakersByPoolAndDelegatorRequest): unknown;
                fromPartial<I_77 extends {
                    pagination?: {
                        key?: Uint8Array | undefined;
                        offset?: string | undefined;
                        limit?: string | undefined;
                        countTotal?: boolean | undefined;
                        reverse?: boolean | undefined;
                    } | undefined;
                    poolId?: string | undefined;
                    delegator?: string | undefined;
                } & {
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
                    } & Record<Exclude<keyof I_77["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageRequest>, never>) | undefined;
                    poolId?: string | undefined;
                    delegator?: string | undefined;
                } & Record<Exclude<keyof I_77, keyof kyveQuery.QueryStakersByPoolAndDelegatorRequest>, never>>(object: I_77): kyveQuery.QueryStakersByPoolAndDelegatorRequest;
            };
            QueryStakersByPoolAndDelegatorResponse: {
                encode(message: kyveQuery.QueryStakersByPoolAndDelegatorResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.QueryStakersByPoolAndDelegatorResponse;
                fromJSON(object: any): kyveQuery.QueryStakersByPoolAndDelegatorResponse;
                toJSON(message: kyveQuery.QueryStakersByPoolAndDelegatorResponse): unknown;
                fromPartial<I_78 extends {
                    delegator?: string | undefined;
                    pool?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } | undefined;
                    stakers?: {
                        staker?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        totalDelegationAmount?: string | undefined;
                        delegatorCount?: string | undefined;
                    }[] | undefined;
                    pagination?: {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } | undefined;
                } & {
                    delegator?: string | undefined;
                    pool?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_78["pool"]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_78["pool"]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_78["pool"]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_78["pool"]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_78["pool"]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_78["pool"]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_78["pool"]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_78["pool"]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_78["pool"], keyof kyveRegistry.Pool>, never>) | undefined;
                    stakers?: ({
                        staker?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        totalDelegationAmount?: string | undefined;
                        delegatorCount?: string | undefined;
                    }[] & ({
                        staker?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        totalDelegationAmount?: string | undefined;
                        delegatorCount?: string | undefined;
                    } & {
                        staker?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        totalDelegationAmount?: string | undefined;
                        delegatorCount?: string | undefined;
                    } & Record<Exclude<keyof I_78["stakers"][number], keyof kyveQuery.DelegationForStakerResponse>, never>)[] & Record<Exclude<keyof I_78["stakers"], keyof {
                        staker?: string | undefined;
                        currentReward?: string | undefined;
                        delegationAmount?: string | undefined;
                        totalDelegationAmount?: string | undefined;
                        delegatorCount?: string | undefined;
                    }[]>, never>) | undefined;
                    pagination?: ({
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & {
                        nextKey?: Uint8Array | undefined;
                        total?: string | undefined;
                    } & Record<Exclude<keyof I_78["pagination"], keyof import("./proto/cosmos/base/query/v1beta1/pagination").PageResponse>, never>) | undefined;
                } & Record<Exclude<keyof I_78, keyof kyveQuery.QueryStakersByPoolAndDelegatorResponse>, never>>(object: I_78): kyveQuery.QueryStakersByPoolAndDelegatorResponse;
            };
            DelegationForStakerResponse: {
                encode(message: kyveQuery.DelegationForStakerResponse, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveQuery.DelegationForStakerResponse;
                fromJSON(object: any): kyveQuery.DelegationForStakerResponse;
                toJSON(message: kyveQuery.DelegationForStakerResponse): unknown;
                fromPartial<I_79 extends {
                    staker?: string | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    totalDelegationAmount?: string | undefined;
                    delegatorCount?: string | undefined;
                } & {
                    staker?: string | undefined;
                    currentReward?: string | undefined;
                    delegationAmount?: string | undefined;
                    totalDelegationAmount?: string | undefined;
                    delegatorCount?: string | undefined;
                } & Record<Exclude<keyof I_79, keyof kyveQuery.DelegationForStakerResponse>, never>>(object: I_79): kyveQuery.DelegationForStakerResponse;
            };
            QueryClientImpl: typeof kyveQuery.QueryClientImpl;
            Params: {
                encode(message: kyveParams.Params, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveParams.Params;
                fromJSON(object: any): kyveParams.Params;
                toJSON(message: kyveParams.Params): unknown;
                fromPartial<I_80 extends {
                    voteSlash?: string | undefined;
                    uploadSlash?: string | undefined;
                    timeoutSlash?: string | undefined;
                    uploadTimeout?: string | undefined;
                    storageCost?: string | undefined;
                    networkFee?: string | undefined;
                    maxPoints?: string | undefined;
                } & {
                    voteSlash?: string | undefined;
                    uploadSlash?: string | undefined;
                    timeoutSlash?: string | undefined;
                    uploadTimeout?: string | undefined;
                    storageCost?: string | undefined;
                    networkFee?: string | undefined;
                    maxPoints?: string | undefined;
                } & Record<Exclude<keyof I_80, keyof kyveParams.Params>, never>>(object: I_80): kyveParams.Params;
            };
            CreatePoolProposal: {
                encode(message: kyveGov.CreatePoolProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.CreatePoolProposal;
                fromJSON(object: any): kyveGov.CreatePoolProposal;
                toJSON(message: kyveGov.CreatePoolProposal): unknown;
                fromPartial<I_81 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    version?: string | undefined;
                    config?: string | undefined;
                    startHeight?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    maxBundleSize?: string | undefined;
                    binaries?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    version?: string | undefined;
                    config?: string | undefined;
                    startHeight?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    maxBundleSize?: string | undefined;
                    binaries?: string | undefined;
                } & Record<Exclude<keyof I_81, keyof kyveGov.CreatePoolProposal>, never>>(object: I_81): kyveGov.CreatePoolProposal;
            };
            UpdatePoolProposal: {
                encode(message: kyveGov.UpdatePoolProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.UpdatePoolProposal;
                fromJSON(object: any): kyveGov.UpdatePoolProposal;
                toJSON(message: kyveGov.UpdatePoolProposal): unknown;
                fromPartial<I_82 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    versions?: string | undefined;
                    config?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    maxBundleSize?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                    name?: string | undefined;
                    runtime?: string | undefined;
                    logo?: string | undefined;
                    versions?: string | undefined;
                    config?: string | undefined;
                    uploadInterval?: string | undefined;
                    operatingCost?: string | undefined;
                    maxBundleSize?: string | undefined;
                } & Record<Exclude<keyof I_82, keyof kyveGov.UpdatePoolProposal>, never>>(object: I_82): kyveGov.UpdatePoolProposal;
            };
            PausePoolProposal: {
                encode(message: kyveGov.PausePoolProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.PausePoolProposal;
                fromJSON(object: any): kyveGov.PausePoolProposal;
                toJSON(message: kyveGov.PausePoolProposal): unknown;
                fromPartial<I_83 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                } & Record<Exclude<keyof I_83, keyof kyveGov.PausePoolProposal>, never>>(object: I_83): kyveGov.PausePoolProposal;
            };
            UnpausePoolProposal: {
                encode(message: kyveGov.UnpausePoolProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.UnpausePoolProposal;
                fromJSON(object: any): kyveGov.UnpausePoolProposal;
                toJSON(message: kyveGov.UnpausePoolProposal): unknown;
                fromPartial<I_84 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    id?: string | undefined;
                } & Record<Exclude<keyof I_84, keyof kyveGov.UnpausePoolProposal>, never>>(object: I_84): kyveGov.UnpausePoolProposal;
            };
            SchedulePoolUpgradeProposal: {
                encode(message: kyveGov.SchedulePoolUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.SchedulePoolUpgradeProposal;
                fromJSON(object: any): kyveGov.SchedulePoolUpgradeProposal;
                toJSON(message: kyveGov.SchedulePoolUpgradeProposal): unknown;
                fromPartial<I_85 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    runtime?: string | undefined;
                    version?: string | undefined;
                    scheduledAt?: string | undefined;
                    duration?: string | undefined;
                    binaries?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    runtime?: string | undefined;
                    version?: string | undefined;
                    scheduledAt?: string | undefined;
                    duration?: string | undefined;
                    binaries?: string | undefined;
                } & Record<Exclude<keyof I_85, keyof kyveGov.SchedulePoolUpgradeProposal>, never>>(object: I_85): kyveGov.SchedulePoolUpgradeProposal;
            };
            CancelPoolUpgradeProposal: {
                encode(message: kyveGov.CancelPoolUpgradeProposal, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): kyveGov.CancelPoolUpgradeProposal;
                fromJSON(object: any): kyveGov.CancelPoolUpgradeProposal;
                toJSON(message: kyveGov.CancelPoolUpgradeProposal): unknown;
                fromPartial<I_86 extends {
                    title?: string | undefined;
                    description?: string | undefined;
                    runtime?: string | undefined;
                } & {
                    title?: string | undefined;
                    description?: string | undefined;
                    runtime?: string | undefined;
                } & Record<Exclude<keyof I_86, keyof kyveGov.CancelPoolUpgradeProposal>, never>>(object: I_86): kyveGov.CancelPoolUpgradeProposal;
            };
            GenesisState: {
                encode(message: genesisKyve.GenesisState, writer?: import("protobufjs").Writer): import("protobufjs").Writer;
                decode(input: Uint8Array | import("protobufjs").Reader, length?: number | undefined): genesisKyve.GenesisState;
                fromJSON(object: any): genesisKyve.GenesisState;
                toJSON(message: genesisKyve.GenesisState): unknown;
                fromPartial<I_87 extends {
                    params?: {
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } | undefined;
                    poolList?: {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[] | undefined;
                    poolCount?: string | undefined;
                    funderList?: {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                    stakerList?: {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                        unbondingAmount?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[] | undefined;
                    delegatorList?: {
                        id?: string | undefined;
                        kIndex?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                    }[] | undefined;
                    delegationPoolDataList?: {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    }[] | undefined;
                    delegationEntriesList?: {
                        id?: string | undefined;
                        balance?: string | undefined;
                        staker?: string | undefined;
                        kIndex?: string | undefined;
                    }[] | undefined;
                    proposalList?: {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[] | undefined;
                    unbondingState?: {
                        lowIndex?: string | undefined;
                        highIndex?: string | undefined;
                    } | undefined;
                    unbondingEntries?: {
                        index?: string | undefined;
                        poolId?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                        creationTime?: string | undefined;
                        amount?: string | undefined;
                    }[] | undefined;
                } & {
                    params?: ({
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } & {
                        voteSlash?: string | undefined;
                        uploadSlash?: string | undefined;
                        timeoutSlash?: string | undefined;
                        uploadTimeout?: string | undefined;
                        storageCost?: string | undefined;
                        networkFee?: string | undefined;
                        maxPoints?: string | undefined;
                    } & Record<Exclude<keyof I_87["params"], keyof kyveParams.Params>, never>) | undefined;
                    poolList?: ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[] & ({
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    } & {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: (string[] & string[] & Record<Exclude<keyof I_87["poolList"][number]["funders"], keyof string[]>, never>) | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: (string[] & string[] & Record<Exclude<keyof I_87["poolList"][number]["stakers"], keyof string[]>, never>) | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: ({
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } & {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: (string[] & string[] & Record<Exclude<keyof I_87["poolList"][number]["bundleProposal"]["votersValid"], keyof string[]>, never>) | undefined;
                            votersInvalid?: (string[] & string[] & Record<Exclude<keyof I_87["poolList"][number]["bundleProposal"]["votersInvalid"], keyof string[]>, never>) | undefined;
                            votersAbstain?: (string[] & string[] & Record<Exclude<keyof I_87["poolList"][number]["bundleProposal"]["votersAbstain"], keyof string[]>, never>) | undefined;
                        } & Record<Exclude<keyof I_87["poolList"][number]["bundleProposal"], keyof kyveRegistry.BundleProposal>, never>) | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } & Record<Exclude<keyof I_87["poolList"][number]["protocol"], keyof kyveRegistry.Protocol>, never>) | undefined;
                        upgradePlan?: ({
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } & Record<Exclude<keyof I_87["poolList"][number]["upgradePlan"], keyof kyveRegistry.UpgradePlan>, never>) | undefined;
                    } & Record<Exclude<keyof I_87["poolList"][number], keyof kyveRegistry.Pool>, never>)[] & Record<Exclude<keyof I_87["poolList"], keyof {
                        id?: string | undefined;
                        creator?: string | undefined;
                        name?: string | undefined;
                        runtime?: string | undefined;
                        logo?: string | undefined;
                        versions?: string | undefined;
                        config?: string | undefined;
                        heightArchived?: string | undefined;
                        bytesArchived?: string | undefined;
                        totalBundles?: string | undefined;
                        totalBundleRewards?: string | undefined;
                        startHeight?: string | undefined;
                        uploadInterval?: string | undefined;
                        operatingCost?: string | undefined;
                        paused?: boolean | undefined;
                        funders?: string[] | undefined;
                        lowestFunder?: string | undefined;
                        totalFunds?: string | undefined;
                        stakers?: string[] | undefined;
                        lowestStaker?: string | undefined;
                        totalStake?: string | undefined;
                        totalDelegation?: string | undefined;
                        bundleProposal?: {
                            uploader?: string | undefined;
                            nextUploader?: string | undefined;
                            bundleId?: string | undefined;
                            byteSize?: string | undefined;
                            fromHeight?: string | undefined;
                            toHeight?: string | undefined;
                            createdAt?: string | undefined;
                            votersValid?: string[] | undefined;
                            votersInvalid?: string[] | undefined;
                            votersAbstain?: string[] | undefined;
                        } | undefined;
                        maxBundleSize?: string | undefined;
                        protocol?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            lastUpgrade?: string | undefined;
                        } | undefined;
                        upgradePlan?: {
                            version?: string | undefined;
                            binaries?: string | undefined;
                            scheduledAt?: string | undefined;
                            duration?: string | undefined;
                        } | undefined;
                    }[]>, never>) | undefined;
                    poolCount?: string | undefined;
                    funderList?: ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_87["funderList"][number], keyof kyveRegistry.Funder>, never>)[] & Record<Exclude<keyof I_87["funderList"], keyof {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                    stakerList?: ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                        unbondingAmount?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[] & ({
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                        unbondingAmount?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                        unbondingAmount?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    } & Record<Exclude<keyof I_87["stakerList"][number], keyof kyveRegistry.Staker>, never>)[] & Record<Exclude<keyof I_87["stakerList"], keyof {
                        account?: string | undefined;
                        poolId?: string | undefined;
                        amount?: string | undefined;
                        unbondingAmount?: string | undefined;
                        commission?: string | undefined;
                        moniker?: string | undefined;
                        website?: string | undefined;
                        logo?: string | undefined;
                        points?: string | undefined;
                    }[]>, never>) | undefined;
                    delegatorList?: ({
                        id?: string | undefined;
                        kIndex?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                    }[] & ({
                        id?: string | undefined;
                        kIndex?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                    } & {
                        id?: string | undefined;
                        kIndex?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                    } & Record<Exclude<keyof I_87["delegatorList"][number], keyof kyveRegistry.Delegator>, never>)[] & Record<Exclude<keyof I_87["delegatorList"], keyof {
                        id?: string | undefined;
                        kIndex?: string | undefined;
                        delegationAmount?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                    }[]>, never>) | undefined;
                    delegationPoolDataList?: ({
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    }[] & ({
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    } & Record<Exclude<keyof I_87["delegationPoolDataList"][number], keyof kyveRegistry.DelegationPoolData>, never>)[] & Record<Exclude<keyof I_87["delegationPoolDataList"], keyof {
                        id?: string | undefined;
                        staker?: string | undefined;
                        currentRewards?: string | undefined;
                        totalDelegation?: string | undefined;
                        latestIndexK?: string | undefined;
                        delegatorCount?: string | undefined;
                        latestIndexWasUndelegation?: boolean | undefined;
                    }[]>, never>) | undefined;
                    delegationEntriesList?: ({
                        id?: string | undefined;
                        balance?: string | undefined;
                        staker?: string | undefined;
                        kIndex?: string | undefined;
                    }[] & ({
                        id?: string | undefined;
                        balance?: string | undefined;
                        staker?: string | undefined;
                        kIndex?: string | undefined;
                    } & {
                        id?: string | undefined;
                        balance?: string | undefined;
                        staker?: string | undefined;
                        kIndex?: string | undefined;
                    } & Record<Exclude<keyof I_87["delegationEntriesList"][number], keyof kyveRegistry.DelegationEntries>, never>)[] & Record<Exclude<keyof I_87["delegationEntriesList"], keyof {
                        id?: string | undefined;
                        balance?: string | undefined;
                        staker?: string | undefined;
                        kIndex?: string | undefined;
                    }[]>, never>) | undefined;
                    proposalList?: ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[] & ({
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    } & Record<Exclude<keyof I_87["proposalList"][number], keyof kyveRegistry.Proposal>, never>)[] & Record<Exclude<keyof I_87["proposalList"], keyof {
                        bundleId?: string | undefined;
                        poolId?: string | undefined;
                        uploader?: string | undefined;
                        fromHeight?: string | undefined;
                        toHeight?: string | undefined;
                        finalizedAt?: string | undefined;
                    }[]>, never>) | undefined;
                    unbondingState?: ({
                        lowIndex?: string | undefined;
                        highIndex?: string | undefined;
                    } & {
                        lowIndex?: string | undefined;
                        highIndex?: string | undefined;
                    } & Record<Exclude<keyof I_87["unbondingState"], keyof kyveRegistry.UnbondingState>, never>) | undefined;
                    unbondingEntries?: ({
                        index?: string | undefined;
                        poolId?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                        creationTime?: string | undefined;
                        amount?: string | undefined;
                    }[] & ({
                        index?: string | undefined;
                        poolId?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                        creationTime?: string | undefined;
                        amount?: string | undefined;
                    } & {
                        index?: string | undefined;
                        poolId?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                        creationTime?: string | undefined;
                        amount?: string | undefined;
                    } & Record<Exclude<keyof I_87["unbondingEntries"][number], keyof kyveRegistry.UnbondingEntries>, never>)[] & Record<Exclude<keyof I_87["unbondingEntries"], keyof {
                        index?: string | undefined;
                        poolId?: string | undefined;
                        staker?: string | undefined;
                        delegator?: string | undefined;
                        creationTime?: string | undefined;
                        amount?: string | undefined;
                    }[]>, never>) | undefined;
                } & Record<Exclude<keyof I_87, keyof genesisKyve.GenesisState>, never>>(object: I_87): genesisKyve.GenesisState;
            };
        };
    }
}
