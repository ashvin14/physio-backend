const knex = require("../db/knex");

class UserModel {
  save(obj) {
    return knex("users")
      .insert(obj)
      .then(response =>
        knex
          .where(obj)
          .from("users")
          .then(response => response)
          .catch(err => {
            throw err;
          }),
      )
      .catch(err => {
        throw err;
      });
  }

  find({ username, password }) {
    return knex
      .select()
      .from("users")
      .where({ username, password })
      .first()
      .then(response => {
        if (response)
          return response;
        else
          throw new Error("Invalid credentials!");
      })
      .catch(err => {
        throw err;
      });
  }

  saveScores(obj) {
    return knex("scores")
      .insert(obj)
      .then(response =>
        knex
          .where(obj)
          .from("scores")
          .then(response => response)
          .catch(err => {
            throw err;
          }),
      )
      .catch(err => {
        throw err;
      });
  }

  saveROMDetails(obj) {
    return knex("exercise")
      .insert(obj)
      .then(response =>
        knex
          .where(obj)
          .from("exercise")
          .then(response => response)
          .catch(err => {
            throw err;
          }),
      )
      .catch(err => {
        throw err;
      });
  }
}

module.exports = UserModel;
