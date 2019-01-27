
exports.up = function(knex, Promise) {
  return knex.schema
  .table('scores', function (table) {
		table.dropForeign('session_id');
	})
  .table('exercise', function (table) {
  	table.dropPrimary('exercise_pkey')
	});
};

exports.down = function(knex, Promise) {
  return knex.schema
  .table('exercise', function (table) {
  	table.primary('session_id')
	})
	.table('scores', function (table) {
  	table.foreign('session_id').references('exercise.session_id')
	});
};
