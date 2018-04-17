#!/bin/bash

CUR_DIR=`dirname "$0"`
pushd $CUR_DIR
npm run dev
popd