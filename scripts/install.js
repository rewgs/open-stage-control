/**
 * Install script for Open Stage Control on Linux.
 * Copies package in `dist` to `/usr/bin/Open Stage Control/${version}`
 */

const fs = require('fs')
const path = require('path')

const data = require('../package.json')

const src = path.resolve(`${__dirname}/../dist/open-stage-control-linux-x64`)
const dst = '/usr/local/Open Stage Control'

// FIXME: Requires sudo
if (!fs.existsSync(dst)) {
    fs.mkdirSync(dst, { recursive: true })
}

// FIXME: Requires sudo
fs.cpSync(src, `${dst}/${data.version}`, { recursive: true }, (err) => {
    if (err) throw err
    console.log(`Copied ${src} to ${dst}`)
})
