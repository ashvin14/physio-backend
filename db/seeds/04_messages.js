exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("messages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("messages").insert([
        {
          user_id: 2,
          date: "2019-01-02 07:26:16+05:30",
          message: "Some improvement in elbow, increase number of sets to 5",
        },
        {
          user_id: 2,
          date: "2019-01-03 08:56:06+05:30",
          message: "No improvement in elbow, Follow same plan",
        },
        {
          user_id: 2,
          date: "2019-01-04 11:39:44+05:30",
          message: "Improvement in elbow, follow same plan",
        },
        {
          user_id: 2,
          date: "2019-01-05 10:22:52+05:30",
          message: "Improvement in elbow, reduce sets to 4",
        },
        {
          user_id: 2,
          date: "2019-01-07 13:41:27+05:30",
          message: "Good improvement in elbow, reduce sets to 2",
        },

        {
          user_id: 6,
          date: "2019-01-13 16:30:35+05:30",
          message: "Change no. of reps to 6 in wrist",
        },
      ]);
    });
};
