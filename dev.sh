#!/bin/bash

CUR_DIR=`dirname "$0"`
pushd $CUR_DIR
cnpm run dev
popd
