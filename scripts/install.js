/**
 * Install script for Open Stage Control on Linux.
 * Copies package in `dist` to `/usr/bin/Open Stage Control/${version}`
 */

const path = require('path')
const fs = require('fs')

src = path.resolve(__dirname + '/../dist/open-stage-control-linux-x64')
// dst = "/usr/bin/Open Stage Control/" // TODO: Get version and copy src dir to dir with version number instead of arch 
