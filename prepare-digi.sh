#!/usr/bin/env bash
cp -f public/modules/prepare/index.umd.js node_modules/@digitalpersona/devices/dist/es5.bundles/index.umd.js
#sed "2s/.*/typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@digitalpersona/core'), require('../../../../../public/modules/websdk')) :/"  node_modules/@digitalpersona/devices/dist/es5.bundle/index.umd.js >  node_modules/@digitalpersona/devices/dist/es5.bundle/index2.umd.js
