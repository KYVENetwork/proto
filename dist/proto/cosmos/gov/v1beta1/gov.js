"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ProposalVotingPeriod = exports.TallyParams = exports.VotingParams = exports.DepositParams = exports.Vote = exports.TallyResult = exports.Proposal = exports.Deposit = exports.TextProposal = exports.WeightedVoteOption = exports.proposalStatusToJSON = exports.proposalStatusFromJSON = exports.ProposalStatus = exports.voteOptionToJSON = exports.voteOptionFromJSON = exports.VoteOption = exports.protobufPackage = void 0;
/* eslint-disable */
var any_1 = require("../../../google/protobuf/any");
var duration_1 = require("../../../google/protobuf/duration");
var timestamp_1 = require("../../../google/protobuf/timestamp");
var long_1 = __importDefault(require("long"));
var coin_1 = require("../../base/v1beta1/coin");
var minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cosmos.gov.v1beta1";
/** VoteOption enumerates the valid vote options for a given governance proposal. */
var VoteOption;
(function (VoteOption) {
    /** VOTE_OPTION_UNSPECIFIED - VOTE_OPTION_UNSPECIFIED defines a no-op vote option. */
    VoteOption[VoteOption["VOTE_OPTION_UNSPECIFIED"] = 0] = "VOTE_OPTION_UNSPECIFIED";
    /** VOTE_OPTION_YES - VOTE_OPTION_YES defines a yes vote option. */
    VoteOption[VoteOption["VOTE_OPTION_YES"] = 1] = "VOTE_OPTION_YES";
    /** VOTE_OPTION_ABSTAIN - VOTE_OPTION_ABSTAIN defines an abstain vote option. */
    VoteOption[VoteOption["VOTE_OPTION_ABSTAIN"] = 2] = "VOTE_OPTION_ABSTAIN";
    /** VOTE_OPTION_NO - VOTE_OPTION_NO defines a no vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO"] = 3] = "VOTE_OPTION_NO";
    /** VOTE_OPTION_NO_WITH_VETO - VOTE_OPTION_NO_WITH_VETO defines a no with veto vote option. */
    VoteOption[VoteOption["VOTE_OPTION_NO_WITH_VETO"] = 4] = "VOTE_OPTION_NO_WITH_VETO";
    VoteOption[VoteOption["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(VoteOption = exports.VoteOption || (exports.VoteOption = {}));
function voteOptionFromJSON(object) {
    switch (object) {
        case 0:
        case "VOTE_OPTION_UNSPECIFIED":
            return VoteOption.VOTE_OPTION_UNSPECIFIED;
        case 1:
        case "VOTE_OPTION_YES":
            return VoteOption.VOTE_OPTION_YES;
        case 2:
        case "VOTE_OPTION_ABSTAIN":
            return VoteOption.VOTE_OPTION_ABSTAIN;
        case 3:
        case "VOTE_OPTION_NO":
            return VoteOption.VOTE_OPTION_NO;
        case 4:
        case "VOTE_OPTION_NO_WITH_VETO":
            return VoteOption.VOTE_OPTION_NO_WITH_VETO;
        case -1:
        case "UNRECOGNIZED":
        default:
            return VoteOption.UNRECOGNIZED;
    }
}
exports.voteOptionFromJSON = voteOptionFromJSON;
function voteOptionToJSON(object) {
    switch (object) {
        case VoteOption.VOTE_OPTION_UNSPECIFIED:
            return "VOTE_OPTION_UNSPECIFIED";
        case VoteOption.VOTE_OPTION_YES:
            return "VOTE_OPTION_YES";
        case VoteOption.VOTE_OPTION_ABSTAIN:
            return "VOTE_OPTION_ABSTAIN";
        case VoteOption.VOTE_OPTION_NO:
            return "VOTE_OPTION_NO";
        case VoteOption.VOTE_OPTION_NO_WITH_VETO:
            return "VOTE_OPTION_NO_WITH_VETO";
        case VoteOption.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.voteOptionToJSON = voteOptionToJSON;
/** ProposalStatus enumerates the valid statuses of a proposal. */
var ProposalStatus;
(function (ProposalStatus) {
    /** PROPOSAL_STATUS_UNSPECIFIED - PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status. */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_UNSPECIFIED"] = 0] = "PROPOSAL_STATUS_UNSPECIFIED";
    /**
     * PROPOSAL_STATUS_DEPOSIT_PERIOD - PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_DEPOSIT_PERIOD"] = 1] = "PROPOSAL_STATUS_DEPOSIT_PERIOD";
    /**
     * PROPOSAL_STATUS_VOTING_PERIOD - PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting
     * period.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_VOTING_PERIOD"] = 2] = "PROPOSAL_STATUS_VOTING_PERIOD";
    /**
     * PROPOSAL_STATUS_PASSED - PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has
     * passed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_PASSED"] = 3] = "PROPOSAL_STATUS_PASSED";
    /**
     * PROPOSAL_STATUS_REJECTED - PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has
     * been rejected.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_REJECTED"] = 4] = "PROPOSAL_STATUS_REJECTED";
    /**
     * PROPOSAL_STATUS_FAILED - PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has
     * failed.
     */
    ProposalStatus[ProposalStatus["PROPOSAL_STATUS_FAILED"] = 5] = "PROPOSAL_STATUS_FAILED";
    ProposalStatus[ProposalStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(ProposalStatus = exports.ProposalStatus || (exports.ProposalStatus = {}));
function proposalStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PROPOSAL_STATUS_UNSPECIFIED":
            return ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED;
        case 1:
        case "PROPOSAL_STATUS_DEPOSIT_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD;
        case 2:
        case "PROPOSAL_STATUS_VOTING_PERIOD":
            return ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD;
        case 3:
        case "PROPOSAL_STATUS_PASSED":
            return ProposalStatus.PROPOSAL_STATUS_PASSED;
        case 4:
        case "PROPOSAL_STATUS_REJECTED":
            return ProposalStatus.PROPOSAL_STATUS_REJECTED;
        case 5:
        case "PROPOSAL_STATUS_FAILED":
            return ProposalStatus.PROPOSAL_STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return ProposalStatus.UNRECOGNIZED;
    }
}
exports.proposalStatusFromJSON = proposalStatusFromJSON;
function proposalStatusToJSON(object) {
    switch (object) {
        case ProposalStatus.PROPOSAL_STATUS_UNSPECIFIED:
            return "PROPOSAL_STATUS_UNSPECIFIED";
        case ProposalStatus.PROPOSAL_STATUS_DEPOSIT_PERIOD:
            return "PROPOSAL_STATUS_DEPOSIT_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_VOTING_PERIOD:
            return "PROPOSAL_STATUS_VOTING_PERIOD";
        case ProposalStatus.PROPOSAL_STATUS_PASSED:
            return "PROPOSAL_STATUS_PASSED";
        case ProposalStatus.PROPOSAL_STATUS_REJECTED:
            return "PROPOSAL_STATUS_REJECTED";
        case ProposalStatus.PROPOSAL_STATUS_FAILED:
            return "PROPOSAL_STATUS_FAILED";
        case ProposalStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.proposalStatusToJSON = proposalStatusToJSON;
function createBaseWeightedVoteOption() {
    return { option: 0, weight: "" };
}
exports.WeightedVoteOption = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.option !== 0) {
            writer.uint32(8).int32(message.option);
        }
        if (message.weight !== "") {
            writer.uint32(18).string(message.weight);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseWeightedVoteOption();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.option = reader.int32();
                    break;
                case 2:
                    message.weight = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            weight: isSet(object.weight) ? String(object.weight) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.option !== undefined &&
            (obj.option = voteOptionToJSON(message.option));
        message.weight !== undefined && (obj.weight = message.weight);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseWeightedVoteOption();
        message.option = (_a = object.option) !== null && _a !== void 0 ? _a : 0;
        message.weight = (_b = object.weight) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseTextProposal() {
    return { title: "", description: "" };
}
exports.TextProposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.title !== "") {
            writer.uint32(10).string(message.title);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTextProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.title = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            title: isSet(object.title) ? String(object.title) : "",
            description: isSet(object.description) ? String(object.description) : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.title !== undefined && (obj.title = message.title);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b;
        var message = createBaseTextProposal();
        message.title = (_a = object.title) !== null && _a !== void 0 ? _a : "";
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : "";
        return message;
    }
};
function createBaseDeposit() {
    return { proposal_id: "0", depositor: "", amount: [] };
}
exports.Deposit = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (var _i = 0, _a = message.amount; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDeposit();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.depositor = reader.string();
                    break;
                case 3:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object === null || object === void 0 ? void 0 : object.amount)
                ? object.amount.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.depositor !== undefined && (obj.depositor = message.depositor);
        if (message.amount) {
            obj.amount = message.amount.map(function (e) { return (e ? coin_1.Coin.toJSON(e) : undefined); });
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDeposit();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.depositor = (_b = object.depositor) !== null && _b !== void 0 ? _b : "";
        message.amount = ((_c = object.amount) === null || _c === void 0 ? void 0 : _c.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseProposal() {
    return {
        proposal_id: "0",
        content: undefined,
        status: 0,
        final_tally_result: undefined,
        submit_time: undefined,
        deposit_end_time: undefined,
        total_deposit: [],
        voting_start_time: undefined,
        voting_end_time: undefined,
        is_expedited: false
    };
}
exports.Proposal = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.content !== undefined) {
            any_1.Any.encode(message.content, writer.uint32(18).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(24).int32(message.status);
        }
        if (message.final_tally_result !== undefined) {
            exports.TallyResult.encode(message.final_tally_result, writer.uint32(34).fork()).ldelim();
        }
        if (message.submit_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.submit_time), writer.uint32(42).fork()).ldelim();
        }
        if (message.deposit_end_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.deposit_end_time), writer.uint32(50).fork()).ldelim();
        }
        for (var _i = 0, _a = message.total_deposit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(58).fork()).ldelim();
        }
        if (message.voting_start_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.voting_start_time), writer.uint32(66).fork()).ldelim();
        }
        if (message.voting_end_time !== undefined) {
            timestamp_1.Timestamp.encode(toTimestamp(message.voting_end_time), writer.uint32(74).fork()).ldelim();
        }
        if (message.is_expedited === true) {
            writer.uint32(80).bool(message.is_expedited);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposal();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.content = any_1.Any.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.status = reader.int32();
                    break;
                case 4:
                    message.final_tally_result = exports.TallyResult.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.submit_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.deposit_end_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.total_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 8:
                    message.voting_start_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.voting_end_time = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                case 10:
                    message.is_expedited = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
            content: isSet(object.content) ? any_1.Any.fromJSON(object.content) : undefined,
            status: isSet(object.status) ? proposalStatusFromJSON(object.status) : 0,
            final_tally_result: isSet(object.final_tally_result)
                ? exports.TallyResult.fromJSON(object.final_tally_result)
                : undefined,
            submit_time: isSet(object.submit_time)
                ? fromJsonTimestamp(object.submit_time)
                : undefined,
            deposit_end_time: isSet(object.deposit_end_time)
                ? fromJsonTimestamp(object.deposit_end_time)
                : undefined,
            total_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.total_deposit)
                ? object.total_deposit.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            voting_start_time: isSet(object.voting_start_time)
                ? fromJsonTimestamp(object.voting_start_time)
                : undefined,
            voting_end_time: isSet(object.voting_end_time)
                ? fromJsonTimestamp(object.voting_end_time)
                : undefined,
            is_expedited: isSet(object.is_expedited)
                ? Boolean(object.is_expedited)
                : false
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.content !== undefined &&
            (obj.content = message.content ? any_1.Any.toJSON(message.content) : undefined);
        message.status !== undefined &&
            (obj.status = proposalStatusToJSON(message.status));
        message.final_tally_result !== undefined &&
            (obj.final_tally_result = message.final_tally_result
                ? exports.TallyResult.toJSON(message.final_tally_result)
                : undefined);
        message.submit_time !== undefined &&
            (obj.submit_time = message.submit_time.toISOString());
        message.deposit_end_time !== undefined &&
            (obj.deposit_end_time = message.deposit_end_time.toISOString());
        if (message.total_deposit) {
            obj.total_deposit = message.total_deposit.map(function (e) {
                return e ? coin_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.total_deposit = [];
        }
        message.voting_start_time !== undefined &&
            (obj.voting_start_time = message.voting_start_time.toISOString());
        message.voting_end_time !== undefined &&
            (obj.voting_end_time = message.voting_end_time.toISOString());
        message.is_expedited !== undefined &&
            (obj.is_expedited = message.is_expedited);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var message = createBaseProposal();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.content =
            object.content !== undefined && object.content !== null
                ? any_1.Any.fromPartial(object.content)
                : undefined;
        message.status = (_b = object.status) !== null && _b !== void 0 ? _b : 0;
        message.final_tally_result =
            object.final_tally_result !== undefined &&
                object.final_tally_result !== null
                ? exports.TallyResult.fromPartial(object.final_tally_result)
                : undefined;
        message.submit_time = (_c = object.submit_time) !== null && _c !== void 0 ? _c : undefined;
        message.deposit_end_time = (_d = object.deposit_end_time) !== null && _d !== void 0 ? _d : undefined;
        message.total_deposit =
            ((_e = object.total_deposit) === null || _e === void 0 ? void 0 : _e.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.voting_start_time = (_f = object.voting_start_time) !== null && _f !== void 0 ? _f : undefined;
        message.voting_end_time = (_g = object.voting_end_time) !== null && _g !== void 0 ? _g : undefined;
        message.is_expedited = (_h = object.is_expedited) !== null && _h !== void 0 ? _h : false;
        return message;
    }
};
function createBaseTallyResult() {
    return { yes: "", abstain: "", no: "", no_with_veto: "" };
}
exports.TallyResult = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.yes !== "") {
            writer.uint32(10).string(message.yes);
        }
        if (message.abstain !== "") {
            writer.uint32(18).string(message.abstain);
        }
        if (message.no !== "") {
            writer.uint32(26).string(message.no);
        }
        if (message.no_with_veto !== "") {
            writer.uint32(34).string(message.no_with_veto);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyResult();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.yes = reader.string();
                    break;
                case 2:
                    message.abstain = reader.string();
                    break;
                case 3:
                    message.no = reader.string();
                    break;
                case 4:
                    message.no_with_veto = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            yes: isSet(object.yes) ? String(object.yes) : "",
            abstain: isSet(object.abstain) ? String(object.abstain) : "",
            no: isSet(object.no) ? String(object.no) : "",
            no_with_veto: isSet(object.no_with_veto)
                ? String(object.no_with_veto)
                : ""
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.yes !== undefined && (obj.yes = message.yes);
        message.abstain !== undefined && (obj.abstain = message.abstain);
        message.no !== undefined && (obj.no = message.no);
        message.no_with_veto !== undefined &&
            (obj.no_with_veto = message.no_with_veto);
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTallyResult();
        message.yes = (_a = object.yes) !== null && _a !== void 0 ? _a : "";
        message.abstain = (_b = object.abstain) !== null && _b !== void 0 ? _b : "";
        message.no = (_c = object.no) !== null && _c !== void 0 ? _c : "";
        message.no_with_veto = (_d = object.no_with_veto) !== null && _d !== void 0 ? _d : "";
        return message;
    }
};
function createBaseVote() {
    return { proposal_id: "0", voter: "", option: 0, options: [] };
}
exports.Vote = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.proposal_id !== "0") {
            writer.uint32(8).uint64(message.proposal_id);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        for (var _i = 0, _a = message.options; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.WeightedVoteOption.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVote();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_id = longToString(reader.uint64());
                    break;
                case 2:
                    message.voter = reader.string();
                    break;
                case 3:
                    message.option = reader.int32();
                    break;
                case 4:
                    message.options.push(exports.WeightedVoteOption.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            proposal_id: isSet(object.proposal_id) ? String(object.proposal_id) : "0",
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : 0,
            options: Array.isArray(object === null || object === void 0 ? void 0 : object.options)
                ? object.options.map(function (e) { return exports.WeightedVoteOption.fromJSON(e); })
                : []
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_id !== undefined &&
            (obj.proposal_id = message.proposal_id);
        message.voter !== undefined && (obj.voter = message.voter);
        message.option !== undefined &&
            (obj.option = voteOptionToJSON(message.option));
        if (message.options) {
            obj.options = message.options.map(function (e) {
                return e ? exports.WeightedVoteOption.toJSON(e) : undefined;
            });
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseVote();
        message.proposal_id = (_a = object.proposal_id) !== null && _a !== void 0 ? _a : "0";
        message.voter = (_b = object.voter) !== null && _b !== void 0 ? _b : "";
        message.option = (_c = object.option) !== null && _c !== void 0 ? _c : 0;
        message.options =
            ((_d = object.options) === null || _d === void 0 ? void 0 : _d.map(function (e) { return exports.WeightedVoteOption.fromPartial(e); })) || [];
        return message;
    }
};
function createBaseDepositParams() {
    return {
        min_deposit: [],
        max_deposit_period: undefined,
        min_expedited_deposit: [],
        min_deposit_percentage: new Uint8Array()
    };
}
exports.DepositParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.min_deposit; _i < _a.length; _i++) {
            var v = _a[_i];
            coin_1.Coin.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.max_deposit_period !== undefined) {
            duration_1.Duration.encode(message.max_deposit_period, writer.uint32(18).fork()).ldelim();
        }
        for (var _b = 0, _c = message.min_expedited_deposit; _b < _c.length; _b++) {
            var v = _c[_b];
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        if (message.min_deposit_percentage.length !== 0) {
            writer.uint32(34).bytes(message.min_deposit_percentage);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseDepositParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.min_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.max_deposit_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.min_expedited_deposit.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.min_deposit_percentage = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            min_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.min_deposit)
                ? object.min_deposit.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            max_deposit_period: isSet(object.max_deposit_period)
                ? duration_1.Duration.fromJSON(object.max_deposit_period)
                : undefined,
            min_expedited_deposit: Array.isArray(object === null || object === void 0 ? void 0 : object.min_expedited_deposit)
                ? object.min_expedited_deposit.map(function (e) { return coin_1.Coin.fromJSON(e); })
                : [],
            min_deposit_percentage: isSet(object.min_deposit_percentage)
                ? bytesFromBase64(object.min_deposit_percentage)
                : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        if (message.min_deposit) {
            obj.min_deposit = message.min_deposit.map(function (e) {
                return e ? coin_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.min_deposit = [];
        }
        message.max_deposit_period !== undefined &&
            (obj.max_deposit_period = message.max_deposit_period
                ? duration_1.Duration.toJSON(message.max_deposit_period)
                : undefined);
        if (message.min_expedited_deposit) {
            obj.min_expedited_deposit = message.min_expedited_deposit.map(function (e) {
                return e ? coin_1.Coin.toJSON(e) : undefined;
            });
        }
        else {
            obj.min_expedited_deposit = [];
        }
        message.min_deposit_percentage !== undefined &&
            (obj.min_deposit_percentage = base64FromBytes(message.min_deposit_percentage !== undefined
                ? message.min_deposit_percentage
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c;
        var message = createBaseDepositParams();
        message.min_deposit =
            ((_a = object.min_deposit) === null || _a === void 0 ? void 0 : _a.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.max_deposit_period =
            object.max_deposit_period !== undefined &&
                object.max_deposit_period !== null
                ? duration_1.Duration.fromPartial(object.max_deposit_period)
                : undefined;
        message.min_expedited_deposit =
            ((_b = object.min_expedited_deposit) === null || _b === void 0 ? void 0 : _b.map(function (e) { return coin_1.Coin.fromPartial(e); })) || [];
        message.min_deposit_percentage =
            (_c = object.min_deposit_percentage) !== null && _c !== void 0 ? _c : new Uint8Array();
        return message;
    }
};
function createBaseVotingParams() {
    return {
        voting_period: undefined,
        proposal_voting_periods: [],
        expedited_voting_period: undefined
    };
}
exports.VotingParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.voting_period !== undefined) {
            duration_1.Duration.encode(message.voting_period, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.proposal_voting_periods; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.ProposalVotingPeriod.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.expedited_voting_period !== undefined) {
            duration_1.Duration.encode(message.expedited_voting_period, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseVotingParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.voting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.proposal_voting_periods.push(exports.ProposalVotingPeriod.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.expedited_voting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            voting_period: isSet(object.voting_period)
                ? duration_1.Duration.fromJSON(object.voting_period)
                : undefined,
            proposal_voting_periods: Array.isArray(object === null || object === void 0 ? void 0 : object.proposal_voting_periods)
                ? object.proposal_voting_periods.map(function (e) {
                    return exports.ProposalVotingPeriod.fromJSON(e);
                })
                : [],
            expedited_voting_period: isSet(object.expedited_voting_period)
                ? duration_1.Duration.fromJSON(object.expedited_voting_period)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.voting_period !== undefined &&
            (obj.voting_period = message.voting_period
                ? duration_1.Duration.toJSON(message.voting_period)
                : undefined);
        if (message.proposal_voting_periods) {
            obj.proposal_voting_periods = message.proposal_voting_periods.map(function (e) {
                return e ? exports.ProposalVotingPeriod.toJSON(e) : undefined;
            });
        }
        else {
            obj.proposal_voting_periods = [];
        }
        message.expedited_voting_period !== undefined &&
            (obj.expedited_voting_period = message.expedited_voting_period
                ? duration_1.Duration.toJSON(message.expedited_voting_period)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseVotingParams();
        message.voting_period =
            object.voting_period !== undefined && object.voting_period !== null
                ? duration_1.Duration.fromPartial(object.voting_period)
                : undefined;
        message.proposal_voting_periods =
            ((_a = object.proposal_voting_periods) === null || _a === void 0 ? void 0 : _a.map(function (e) {
                return exports.ProposalVotingPeriod.fromPartial(e);
            })) || [];
        message.expedited_voting_period =
            object.expedited_voting_period !== undefined &&
                object.expedited_voting_period !== null
                ? duration_1.Duration.fromPartial(object.expedited_voting_period)
                : undefined;
        return message;
    }
};
function createBaseTallyParams() {
    return {
        quorum: new Uint8Array(),
        threshold: new Uint8Array(),
        veto_threshold: new Uint8Array(),
        expedited_threshold: new Uint8Array()
    };
}
exports.TallyParams = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.quorum.length !== 0) {
            writer.uint32(10).bytes(message.quorum);
        }
        if (message.threshold.length !== 0) {
            writer.uint32(18).bytes(message.threshold);
        }
        if (message.veto_threshold.length !== 0) {
            writer.uint32(26).bytes(message.veto_threshold);
        }
        if (message.expedited_threshold.length !== 0) {
            writer.uint32(34).bytes(message.expedited_threshold);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseTallyParams();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.quorum = reader.bytes();
                    break;
                case 2:
                    message.threshold = reader.bytes();
                    break;
                case 3:
                    message.veto_threshold = reader.bytes();
                    break;
                case 4:
                    message.expedited_threshold = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            quorum: isSet(object.quorum)
                ? bytesFromBase64(object.quorum)
                : new Uint8Array(),
            threshold: isSet(object.threshold)
                ? bytesFromBase64(object.threshold)
                : new Uint8Array(),
            veto_threshold: isSet(object.veto_threshold)
                ? bytesFromBase64(object.veto_threshold)
                : new Uint8Array(),
            expedited_threshold: isSet(object.expedited_threshold)
                ? bytesFromBase64(object.expedited_threshold)
                : new Uint8Array()
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.quorum !== undefined &&
            (obj.quorum = base64FromBytes(message.quorum !== undefined ? message.quorum : new Uint8Array()));
        message.threshold !== undefined &&
            (obj.threshold = base64FromBytes(message.threshold !== undefined ? message.threshold : new Uint8Array()));
        message.veto_threshold !== undefined &&
            (obj.veto_threshold = base64FromBytes(message.veto_threshold !== undefined
                ? message.veto_threshold
                : new Uint8Array()));
        message.expedited_threshold !== undefined &&
            (obj.expedited_threshold = base64FromBytes(message.expedited_threshold !== undefined
                ? message.expedited_threshold
                : new Uint8Array()));
        return obj;
    },
    fromPartial: function (object) {
        var _a, _b, _c, _d;
        var message = createBaseTallyParams();
        message.quorum = (_a = object.quorum) !== null && _a !== void 0 ? _a : new Uint8Array();
        message.threshold = (_b = object.threshold) !== null && _b !== void 0 ? _b : new Uint8Array();
        message.veto_threshold = (_c = object.veto_threshold) !== null && _c !== void 0 ? _c : new Uint8Array();
        message.expedited_threshold =
            (_d = object.expedited_threshold) !== null && _d !== void 0 ? _d : new Uint8Array();
        return message;
    }
};
function createBaseProposalVotingPeriod() {
    return { proposal_type: "", voting_period: undefined };
}
exports.ProposalVotingPeriod = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.proposal_type !== "") {
            writer.uint32(10).string(message.proposal_type);
        }
        if (message.voting_period !== undefined) {
            duration_1.Duration.encode(message.voting_period, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = createBaseProposalVotingPeriod();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.proposal_type = reader.string();
                    break;
                case 2:
                    message.voting_period = duration_1.Duration.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        return {
            proposal_type: isSet(object.proposal_type)
                ? String(object.proposal_type)
                : "",
            voting_period: isSet(object.voting_period)
                ? duration_1.Duration.fromJSON(object.voting_period)
                : undefined
        };
    },
    toJSON: function (message) {
        var obj = {};
        message.proposal_type !== undefined &&
            (obj.proposal_type = message.proposal_type);
        message.voting_period !== undefined &&
            (obj.voting_period = message.voting_period
                ? duration_1.Duration.toJSON(message.voting_period)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var _a;
        var message = createBaseProposalVotingPeriod();
        message.proposal_type = (_a = object.proposal_type) !== null && _a !== void 0 ? _a : "";
        message.voting_period =
            object.voting_period !== undefined && object.voting_period !== null
                ? duration_1.Duration.fromPartial(object.voting_period)
                : undefined;
        return message;
    }
};
var globalThis = (function () {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
var atob = globalThis.atob ||
    (function (b64) { return globalThis.Buffer.from(b64, "base64").toString("binary"); });
function bytesFromBase64(b64) {
    var bin = atob(b64);
    var arr = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
var btoa = globalThis.btoa ||
    (function (bin) { return globalThis.Buffer.from(bin, "binary").toString("base64"); });
function base64FromBytes(arr) {
    var bin = [];
    arr.forEach(function (byte) {
        bin.push(String.fromCharCode(byte));
    });
    return btoa(bin.join(""));
}
function toTimestamp(date) {
    var seconds = Math.trunc(date.getTime() / 1000).toString();
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = Number(t.seconds) * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function longToString(long) {
    return long.toString();
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
