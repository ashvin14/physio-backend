exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("scores")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("scores").insert([
        {
          user_id: 2,
          session_id: "1121",
          score: 10,
          day: 1,
          date: "2019-01-02 07:28:45+05:30",
          joint: "Elbow",
        },
        {
          user_id: 2,
          session_id: "1121",
          score: 12,
          day: 1,
          date: "2019-01-02 07:30:39+05:30",
          joint: "Elbow",
        },
        {
          user_id: 2,
          session_id: "1121",
          score: 11,
          day: 1,
          date: "2019-01-02 07:33:42+05:30",
          joint: "Elbow",
        },
      ]);
    });
};
