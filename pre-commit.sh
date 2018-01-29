#!/bin/bash

git diff --name-only | grep -e '^.*[\.c|\.cpp]$' | xargs clang-format -i
