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
          fullname: "Tony Stark",
          age: 46,
          mobile: 9123456789,
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
        {
          username: "def",
          password: "123",
          fullname: "Steve Rogers",
          age: 35,
          mobile: 9876543210,
          gender: "Male",
          roles: "doctor",
        },
        {
          username: "ghi",
          password: "123",
          fullname: "Thanos",
          age: 24,
          mobile: 1116668889,
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow", "Wrist"],
        },
        {
          username: "jkl",
          password: "123",
          fullname: "Bruce Banner",
          age: 32,
          mobile: 9993336664,
          gender: "Male",
          roles: "doctor",
        },
        {
          username: "mno",
          password: "123",
          fullname: "Natasha Romanoff",
          age: 33,
          mobile: 7776662225,
          gender: "Female",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
      ]);
    });
};
