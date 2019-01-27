
exports.up = function(knex, Promise) {
  return knex.schema.table('scores', function(table) {
    table
      .enu("joint", ["Elbow", "Wrist"])
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('scores', function(table) {
    table
      .dropColumn('joint');
  });
};
