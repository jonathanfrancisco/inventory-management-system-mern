const {Model} = require('objection');
const Knex = require('knex');

const knex = Knex({
   client: 'mysql2',
   useNullAsDefault: true,
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
   }
});

Model.knex(knex);

module.exports = Model;