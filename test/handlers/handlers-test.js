'use strict'

const tap = require('tap')
const handlers = require('../../handlers')

tap.equal(Object.keys(handlers).length, 3, 'There are 3 standard handlers')

tap.ok(handlers.showFrontpage, 'Handler has method showFrontpage')

tap.ok(handlers.showTeam, 'Handler has method showTeam')

tap.ok(handlers.showLegal, 'Handler has method showLegal')
