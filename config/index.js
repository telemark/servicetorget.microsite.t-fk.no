'use strict'

const envs = process.env

module.exports = {
  SERVER_PORT: envs.SERVICETORGET_SERVER_PORT || 8000
}
