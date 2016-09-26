'use strict'

const pkg = require('../package.json')

module.exports.showFrontpage = (request, reply) => {
  var viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    teams: require('../config/teams.json')
  }
  reply.view('index', viewOptions)
}

module.exports.showTeam = (request, reply) => {
  const teams = require('../config/teams.json')
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url,
    cards: teams[request.params.team].cards
  }
  reply.view('team', viewOptions)
}

module.exports.showLegal = (request, reply) => {
  const viewOptions = {
    version: pkg.version,
    versionName: pkg.louie.versionName,
    versionVideoUrl: pkg.louie.versionVideoUrl,
    systemName: pkg.louie.systemName,
    githubUrl: pkg.repository.url
  }
  reply.view('personvern', viewOptions)
}
