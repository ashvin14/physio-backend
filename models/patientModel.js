const knex = require("../db/knex");

class PatientModel {
  findAllPatients() {
    const Roles = "patient";
    return knex
      .select()
      .from("users")
      .where({ roles: Roles })
      .then(patients => patients)
      .catch(err => {
        throw err;
      });
  }
}

module.exports = PatientModel;
