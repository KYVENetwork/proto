#!/bin/bash
# generate TypeScript proto
PROTO_DIR="./node_modules/@protobufs"
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"
OUT_DIR="./src/proto"
KYVE_PROTO='./chain/proto'
protoc --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
--ts_proto_out="${OUT_DIR}" \
--ts_proto_out="${PROTO_DIR}" \
--ts_proto_opt="esModuleInterop=true,forceLong=string,useOptionals=messages" \
--proto_path="$PROTO_DIR" \
--proto_path="$KYVE_PROTO" \
$(find ${KYVE_PROTO}  -path -prune -o -name '*.proto' -print0 | xargs -0)