const Model = require('../database');


class Person extends Model {
   static get tableName() {
      return 'user';
   }
}

module.exports = Person;