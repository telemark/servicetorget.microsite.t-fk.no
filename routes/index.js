'use strict'

const handlers = require('../handlers')

module.exports = [
  {
    method: 'GET',
    path: '/',
    config: {
      handler: handlers.showFrontpage,
      description: 'Show frontpage'
    }
  },
  {
    method: 'GET',
    path: '/team/{team}',
    config: {
      handler: handlers.showTeam,
      description: 'Show team'
    }
  },
  {
    method: 'GET',
    path: '/personvern',
    config: {
      handler: handlers.showLegal,
      description: 'Show legal'
    }
  }
]
