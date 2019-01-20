
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('scores').del()
    .then(function () {
      // Inserts seed entries
      return knex('scores').insert([
        {score: 10, date: '2019-01-16', day:1},
        {score: 23, date: '2019-01-17', day:2},
        {score: 35, date: '2019-01-18', day:3},
      ]);
    });
};
