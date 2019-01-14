const knex = require("../db/knex");

class UserModel {
  save(obj) {
    console.log(obj);
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

  find({ username, password }) {}
}

module.exports = UserModel;
