
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
     table.increments();
     table.string('first_name').notNullable();
     table.string('middle_name').nullable();
     table.string('last_name').notNullable();
     table.string('username').notNullable();
     table.string('password').notNullable();
     table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
   return knex.schema.dropTable('user');
};
