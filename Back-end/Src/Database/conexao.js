const knex = require('knex')
const configuration = require('./knexfile')

const config = configuration.production

const connection = knex(config)
//console.dir(config)

module.exports = connection