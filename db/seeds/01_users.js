exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          //1
          username: "nic",
          password: "123",
          fullname: "Nick Fury",
          age: 58,
          mobile: 7418529632,
          email: "nic@gmail.com",
          gender: "Male",
          roles: "doctor",
        },
        {
          username: "ashvin",
          password: "123",
          fullname: "Ashvin Khairnar",
          age: 21,
          mobile: 8879742596,
          email: "yashkhrnr@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow", "Wrist"],
        },
      ]);
    });
};
