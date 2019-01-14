exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          username: "vishal_doc",
          patientName: "vishal doctor",
          roles: "doctor",
          password: "123",
          Age: 20,
        },
        {
          id: 2,
          username: "ashvin",
          patientName: "ashvin khairnar",
          roles: "patient",
          password: "123",
          Age: 20,
        },
      ]);
    });
};
