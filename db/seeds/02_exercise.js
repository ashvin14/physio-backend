
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('exercise').del()
    .then(function () {
      // Inserts seed entries
      return knex('exercise').insert([
        {session_id: 1234, joint: 'elbow', created_at: '2018-11-24', min_rom: 30, max_rom: 100},
        {session_id: 5678, joint: 'wrist', created_at: '2018-06-19', min_rom: 60, max_rom: 65},
        {session_id: 9101, joint: 'elbow', created_at: '2018-09-13', min_rom: 40, max_rom: 80},
        {session_id: 1121, joint: 'elbow', created_at: '2018-10-06', min_rom: 45, max_rom: 75},
      ]);
    });
};
