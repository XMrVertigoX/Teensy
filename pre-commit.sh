#!/bin/bash

git status --short | grep -Po '(?<=[ M?]{3}).*[\.c|\.cpp]$' | xargs clang-format -i
