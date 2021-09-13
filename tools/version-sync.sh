#!/bin/bash

PACKAGE_VERSION=$(node -p -e "require('./package.json').version")
echo $PACKAGE_VERSION
cd projects/ngx-lipsum
npm version $PACKAGE_VERSION
