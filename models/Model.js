const knexconfig = require('../knexfile');
const {Model} = require('objection');
const Knex = require('knex');
const knex = Knex(knexconfig.development);
Model.knex(knex);

module.exports = Model;