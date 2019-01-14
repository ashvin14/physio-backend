exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      /*return knex("users").insert([
        {
          id: 1,
          username: "vishal_doc",
          patientName: "vishal doctor",
          Age: 20,
          roles: "doctor",
          password: "123",
        },
        {
          id: 2,
          username: "ashvin",
          patientName: "ashvin khairnar",
          Age: 20,
          roles: "patient",
          password: "123",
        },
        {
          id: 3,
          username: "mwaqar29",
          patientName: "Waqar Ali",
          Age: 22,
          roles: "patient",
          password: "123",
        },
      ]);*/
    });
};
