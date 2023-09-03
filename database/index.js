const knex = require('knex');
const knexfile = require('../knexfile');
const config = require('../config');

module.exports = knex(knexfile[config.app_env]);