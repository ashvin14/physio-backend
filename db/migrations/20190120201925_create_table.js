exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", function(table) {
      table
        .increments("user_id")
        .primary();
      table
        .string("username")
        .unique()
        .notNullable();
      table
        .string("password")
        .notNullable();
      table
        .string("fullname")
        .notNullable();
      table
        .integer("age")
        .notNullable()
      table
        .bigint("mobile");
      table
        .enu("gender", ["Male", "Female"])
        .notNullable();
      table
        .enu("roles", ["doctor", "patient"])
        .notNullable();
      table
        .specificType("diagnosed", "text ARRAY")
        .defaultTo();
    })
    .createTable("exercise", function(table) {
      table
        .integer("user_id")
        .references("user_id")
        .inTable("users")
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .string("session_id")
        .primary();
      table
        .enu("joint", ["Elbow", "Wrist"])
        .notNullable();
      table
        .timestamp("created_at")
        .defaultTo(knex.fn.now());
      table
        .integer("min_rom")
        .notNullable()
      table
        .integer("max_rom")
        .notNullable()
    })
    .createTable("scores", function(table) {
      table
        .integer("user_id")
        .references("user_id")
        .inTable("users")
        .onDelete("cascade");
      table
        .string("session_id")
        .references("session_id")
        .inTable("exercise")
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .integer("score")
        .notNullable();
      table
        .timestamp("date")
        .defaultTo(knex.fn.now());
      table
        .integer("day")
        .notNullable()
        .defaultTo(0);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("users")
    .dropTable("exercise")
    .dropTable("scores");
};
