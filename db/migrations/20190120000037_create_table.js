
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
  	table.increments('user_id').primary();
  	table.string("username").unique().notNullable();
  	table.string("password").notNullable();
  	table.string("fullname").notNullable();
  	table.integer('age').notNullable().defaultTo(0);
  	table.enu("gender", ["male", "female"]).notNullable();
  	table.enu("roles", ["patient", "doctor"]).notNullable();
  	table.enu("diagnosed", ["elbow", "wrist"]).defaultTo();
  })
  .createTable('exercise', function(table) {
  	table.integer('user_id').references('user_id').inTable('users').onUpdate('cascade').onDelete('cascade');
  	table.integer('session_id').primary();
  	table.enu("joint", ["elbow", "wrist"]).notNullable();
  	table.timestamp('created_at').defaultTo(knex.fn.now());
  	table.integer('min_rom').notNullable().defaultTo(0);
  	table.integer('max_rom').notNullable().defaultTo(0);
  })
  .createTable('scores', function(table) {
  	table.integer('user_id').references('user_id').inTable('users').onDelete('cascade');
  	table.integer('session_id').references('session_id').inTable('exercise').onUpdate('cascade').onDelete('cascade');
  	table.integer('score').notNullable().defaultTo(0);
  	table.timestamp('date').defaultTo(knex.fn.now());
  	table.integer('day').notNullable().defaultTo(0);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema
    .dropTable("users")
    .dropTable("exercise")
    .dropTable("scores");
};
