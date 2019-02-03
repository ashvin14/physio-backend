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
          //2
          username: "ton",
          password: "123",
          fullname: "Tony Stark",
          age: 46,
          mobile: 9123456789,
          email: "ton@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
        {
          //3
          username: "ste",
          password: "123",
          fullname: "Steve Rogers",
          age: 35,
          mobile: 9876543210,
          email: "ste@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist"],
        },
        {
          //4
          username: "bru",
          password: "123",
          fullname: "Bruce Banner",
          age: 32,
          mobile: 9993336664,
          email: "bru@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
        {
          //5
          username: "nat",
          password: "123",
          fullname: "Natasha Romanoff",
          age: 33,
          mobile: 7776662225,
          email: "nat@gmail.com",
          gender: "Female",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
        {
          //6
          username: "sco",
          password: "123",
          fullname: "Scott Lang",
          age: 30,
          mobile: 9632587412,
          email: "sco@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist", "Elbow"],
        },
        {
          //7
          username: "tha",
          password: "123",
          fullname: "Thanos",
          age: 60,
          mobile: 7896541236,
          email: "tha@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist"],
        },
        {
          //8
          username: "lok",
          password: "123",
          fullname: "Loki",
          age: 35,
          mobile: 1593578963,
          email: "lok@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Elbow"],
        },
        {
          //9
          username: "tho",
          password: "123",
          fullname: "Thor",
          age: 37,
          mobile: 8855225588,
          email: "tho@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist"],
        },
        {
          //10
          username: "doc",
          password: "123",
          fullname: "Doctor Strange",
          age: 40,
          mobile: 7776662225,
          email: "ste@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist", "Elbow"],
        },
        {
          //11
          username: "pet",
          password: "123",
          fullname: "Peter Parker",
          age: 20,
          mobile: 5825936971,
          email: "pet@gmail.com",
          gender: "Male",
          roles: "patient",
          diagnosed: ["Wrist"],
        },
      ]);
    });
};
