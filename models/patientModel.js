const knex = require("../db/knex");

class PatientModel {
  findAllPatients() {
    const Roles = "patient";
    return knex
      .select()
      .from("users")
      .where({ roles: Roles })
      .orderBy("user_id")
      .then(patients => patients)
      .catch(err => {
        throw err;
      });
  }

  findOneAndReturn(patientID) {
    return knex("users")
      .select()
      .where({ user_id: patientID })
      .first()
      .then(patient => {
        if (patient) return patient;
        else throw new Error(`no such patient with ${patientID} found`);
      })
      .catch(err => {
        throw err;
      });
  }

  getMaxScore(patientID, joint) {
    return knex
      .select("session_id", "day", "joint")
      .max("score as maxscore")
      .from("scores")
      .where("user_id", patientID)
      .andWhere("joint", joint)
      .groupBy("session_id", "day", "joint")
      .orderBy("day")
      .then(points => points)
      .catch(err => {
        throw err;
      });
  }

  getScore(patientID, day, joint) {
    return knex
      .select("session_id", "day", "score", "joint")
      .from("scores")
      .where({
        user_id: patientID,
        day: day,
        joint: joint,
      })
      .orderBy("date")
      .then(points => points)
      .catch(err => {
        throw err;
      });
  }

  getROMDetails(patientID, joint) {
    return knex
      .select("session_id", "joint", "created_at", "min_rom", "max_rom")
      .from("exercise")
      .where("user_id", patientID)
      .andWhere("joint", joint)
      .orderBy("created_at")
      .then(details => details)
      .catch(err => {
        throw err;
      });
  }

  getSessions() {
    return knex
      .distinct("session_id")
      .select()
      .from("exercise")
      .then(sessions => sessions)
      .catch(err => {
        throw err;
      });
  }

  deletePatientFromUsers(patientID) {
    return knex("users")
      .where("user_id", patientID)
      .del()
      .then(response => response)
      .catch(err => {
        throw new Error("Patient Cannot be Deleted");
      });
  }

  deletePatientFromExercise(patientID) {
    return knex("exercise")
      .where("user_id", patientID)
      .del()
      .then(response => response)
      .catch(err => {
        throw new Error("E: Patient Cannot be Deleted");
      });
  }

  deletePatientFromScores(patientID) {
    return knex("scores")
      .where("user_id", patientID)
      .del()
      .then(response => response)
      .catch(err => {
        throw new Error("S: Patient Cannot be Deleted");
      });
  }

  deletePatientFromMessages(patientID) {
    return knex("messages")
      .where("user_id", patientID)
      .del()
      .then(response => response)
      .catch(err => {
        throw new Error("M: Patient Cannot be Deleted");
      });
  }

  updatePatientDetails(patientID, updatedDetails) {
    let user_id = patientID;
    let patientData = { user_id, ...updatedDetails };

    return knex("users")
      .where("user_id", patientID)
      .update(updatedDetails)
      .then(() =>
        knex
          .where({ user_id })
          .from("users")
          .first()
          .then(response => response)
          .catch(err => {
            throw err;
          }),
      )
      .catch(err => {
        throw new Error("User Details cannot be updated");
      });
  }

  saveMail({ message, user_id }) {
    return knex("messages")
      .insert({ message, user_id })
      .then(response =>
        knex
          .where({ message, user_id })
          .from("messages")
          .first()
          .then(response => response)
          .catch(err => {
            throw new Error("Mail cannot be saved!");
          }),
      )
      .catch(err => {
        throw err;
      });
  }

  getMails(patientID) {
    return knex
      .select()
      .from("messages")
      .where("user_id", patientID)
      .orderBy("date")
      .then(mails => mails)
      .catch(err => {
        throw err;
      });
  }
}

module.exports = PatientModel;
