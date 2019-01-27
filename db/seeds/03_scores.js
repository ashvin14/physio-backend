
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {user_id: 3, session_id: '1234', score: 10, day:1, date: '2019-01-16', joint: 'Elbow'},
        {user_id: 3, session_id: '1121', score: 23, day:2, date: '2019-01-17', joint: 'Wrist'},
        {user_id: 1, session_id: '9101', score: 35, day:1, date: '2019-01-18', joint: 'Elbow'},
      ]);
    });
};
