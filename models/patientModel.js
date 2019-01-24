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
          return patients;
        else
          throw new Error('Patient Details Not Found!');
      })
      .catch(err => {
        throw err;
      });
  }

  getMaxScore(patientID, joint) {
    return knex
      .select('session_id', 'day', 'score', 'joint')
      .from('scores')
      .whereIn('score',
          function() {
            this
              .select()
              .max('score')
              .from('scores')
              .groupBy('session_id');
          }
      )
      .andWhere('user_id', patientID)
      .andWhere('joint', joint)
      .orderBy('day')
      .then(points => {
        if (points.length)
          return points
        else
          throw new Error('Score Details Not Found for the given Patient ID!');
      })
    .catch(err => {
      throw err;
    });
  }

  getScore(patientID, day, joint) {
    return knex
      .select('session_id', 'day', 'score', 'joint')
      .from('scores')
      .where({
        user_id: patientID,
        day:  day,
        joint: joint
      })
      .then(points => {
        if (points.length)
          return points
        else
          throw new Error('Score Details Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }

  getROMDetails(sessionID, joint) {
    return knex
    .select('session_id', 'joint', 'min_rom', 'max_rom')
    .from('exercise')
    .where('session_id', sessionID)
    .andWhere('joint', joint)
    .then(details => {
        if (details.length)
          return details[0];
        else
          throw new Error('ROM Details Not Found for given Session ID!');
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
          throw new Error('Session Details Not Found!');
      })
    .catch(err => {
      throw err;
    });
  }
}

module.exports = PatientModel;
