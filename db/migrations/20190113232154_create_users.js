exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("username").notNullable();
    table.string("patientName").notNullable();
    table.integer("Age").notNullable();
    table.enu("roles", ["patient", "doctor"]).notNullable();
    table.string("password").notNullable();
    table.enu("problems", ["elbow", "wrist"]).defaultTo("elbow");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
