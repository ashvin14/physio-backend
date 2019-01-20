exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "abc",
          password: "123",
          fullname: "Atif Aslam",
          age: 46,
          gender: "male",
          roles: "patient",
          diagnosed: "elbow",
        },
        {
          username: "def",
          password: "123",
          fullname: "Arijit Singh",
          age: 35,
          gender: "male",
          roles: "doctor",
        },
        {
          username: "ghi",
          password: "123",
          fullname: "Emiway Bantai",
          age: 24,
          gender: "male",
          roles: "patient",
          diagnosed: "wrist",
        },
        {
          username: "jkl",
          password: "123",
          fullname: "Raftaar",
          age: 32,
          gender: "male",
          roles: "doctor",
        },
        {
          username: "mno",
          password: "123",
          fullname: "Ranveer Singh",
          age: 33,
          gender: "male",
          roles: "patient",
          diagnosed: "elbow",
        },
      ]);
    });
};
