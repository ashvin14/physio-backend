exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("exercise")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("exercise").insert([
        {
          user_id: 2,
          session_id: "1121",
          joint: "Elbow",
          created_at: "2019-01-02 07:26:16+05:30",
          min_rom: 45,
          max_rom: 110,
        },
        {
          user_id: 2,
          session_id: "7341",
          joint: "Elbow",
          created_at: "2019-01-03 08:00:56+05:30",
          min_rom: 44,
          max_rom: 112,
        },
        {
          user_id: 2,
          session_id: "2967",
          joint: "Elbow",
          created_at: "2019-01-04 05:09:18+05:30",
          min_rom: 42,
          max_rom: 113,
        },
        {
          user_id: 2,
          session_id: "9785",
          joint: "Elbow",
          created_at: "2019-01-05 11:33:02+05:30",
          min_rom: 42,
          max_rom: 114,
        },
        {
          user_id: 2,
          session_id: "1823",
          joint: "Elbow",
          created_at: "2019-01-07 15:00:00+05:30",
          min_rom: 40,
          max_rom: 114,
        },

        {
          user_id: 6,
          session_id: "1234",
          joint: "Wrist",
          created_at: "2019-01-13 13:30:12+05:30",
          min_rom: 30,
          max_rom: 75,
        },

        {
          user_id: 6,
          session_id: "1234",
          joint: "Elbow",
          created_at: "2019-01-13 14:15:39+05:30",
          min_rom: 22,
          max_rom: 83,
        },
      ]);
    });
};
