
exports.up = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table
      .string("email")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('users', function(table) {
    table
      .dropColumn('email');
  });
};
