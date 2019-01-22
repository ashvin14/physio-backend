const knex = require("../db/knex");

class PatientModel {
  findAllPatients() {
    const Roles = "patient";
    return knex
      .select()
      .from("users")
      .where({ roles: Roles })
      .then(patients => {
        if (patients.length)
          return patients
        else
          throw new Error('Not Found!');
      })
      .catch(err => {
        throw err;
      });
  }

  getMaxScore(patientID) {
    return knex
      .select('session_id', 'day', 'score', 'joint')
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
          throw new Error('Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }

  getScore(patientID, day) {
    return knex
      .select('session_id', 'day', 'score', 'joint')
      .from('scores')
      .where({
        user_id: patientID,
        day:  day
      })
      .then(points => {
        if (points.length)
          return points
        else
          throw new Error('Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }

  getROMDetails(sessionID) {
    return knex
    .select('session_id', 'min_rom', 'max_rom', 'joint')
    .from('exercise')
    .where('session_id', sessionID)
    .then(details => {
        if (details.length)
          return details[0];
        else
          throw new Error('Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }

  getSessions() {
    return knex
    .select('session_id')
    .from('exercise')
    .then(sessions => {
        if (sessions.length)
          return sessions;
        else
          throw new Error('Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }
}

module.exports = PatientModel;
