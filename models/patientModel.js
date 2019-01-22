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

  getMaxScore(patientID) {
    return knex
      .select('session_id', 'day', 'score')
      .from('scores')
      .whereIn('score',
          function() {
            this
              .select()
              .max('score')
              .from('scores')
              .where('user_id', patientID)
              .groupBy('session_id');
          }
      )
      .then(points => {
        if (points.length)
          return points
        else
          return 'Not Found!';
      })
    .catch(err => {
      throw err;
    });
  }
}

module.exports = PatientModel;
