const {Model} = require('objection');
const Knex = require('knex');

const knex = Knex({
   client: 'mysql2',
   useNullAsDefault: true,
   connection: {
      host: 'localhost',
      user: 'root',
      password: 'mathematics',
      database: 'inventory'
   }
});

Model.knex(knex);

module.exports = Model;