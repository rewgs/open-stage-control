/**
 * Creates a .desktop entry for Linux.
 */

const path = require('path')
const data = require('../package.json')

const desktopEntry = {
    name: data.name,
    comment: data.description,
    exec: '/usr/bin/Open Stage Control/<version>', // NOTE: This requires an install step
    icon: '/usr/bin/Open Stage Control/<version>/resources/app/assets/logo.png', // NOTE: This requires an install step
    terminal: false,
    type: 'Application',
    categories: data.keywords
}

