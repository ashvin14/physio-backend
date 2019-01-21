
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
        {user_id: 3, session_id: 1234, joint: 'Elbow', created_at: '2018-11-24', min_rom: 30, max_rom: 100},
        {user_id: 2, session_id: 5678, joint: 'Wrist', created_at: '2018-06-19', min_rom: 60, max_rom: 65},
        {user_id: 1, session_id: 9101, joint: 'Elbow', created_at: '2018-09-13', min_rom: 40, max_rom: 80},
        {user_id: 3, session_id: 1121, joint: 'Elbow', created_at: '2018-12-13', min_rom: 45, max_rom: 110},
      ]);
    });
};
