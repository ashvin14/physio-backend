const knex = require("../db/knex");

class UserModel {
  save(obj) {
    return knex('users')
      .insert(obj)
      .then(response =>
        knex
          .where(obj)
          .from('users')
          .first()
          .then(response => response)
          .catch(err => {
            throw err;
          }),
      )
      .catch(err => {
        if (err.code === '23505')
          throw new Error("Username already exists! Please chose another one");
        else
          throw err
      });
  }

  find({ username, password }) {
    return knex
      .select()
      .from("users")
      .where({ username, password })
      .first()
      .then(response => {
        if (response) return response;
        else throw new Error("Either Email ID or Password is Invalid");
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
          .first()
          .then(response => response)
          .catch(err => {
            throw new Error("Score Details cannot be saved!");
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
          .first()
          .then(response => response)
          .catch(err => {
            throw new Error("ROM Details cannot be saved!");
          }),
      )
      .catch(err => {
        throw err;
      });
  }
}

module.exports = UserModel;
