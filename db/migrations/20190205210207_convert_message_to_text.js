exports.up = function(knex, Promise) {
  return knex.schema.table("messages", function(table) {
    table.text("message").alter();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("messages", function(table) {
    table.string("message").alter();
  });
};
