exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("messages", function(table) {
      table
        .integer("user_id")
        .references("user_id")
        .inTable("users")
        .onUpdate("cascade")
        .onDelete("cascade");
      table
        .timestamp("date")
        .defaultTo(knex.fn.now());
      table
        .string("message")
        .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable("messages")
};
