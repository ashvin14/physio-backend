const mongoose = require("mongoose");
const userschema = require("../schema/userSchema");
const objectId = mongoose.Types.ObjectId;

class UserModel {
  constructor() {
    this.usermodel = mongoose.model("user", userschema);
  }

  save(obj) {
    let user = new this.usermodel(obj);
    return user
      .save()
      .then(user => user)
      .catch(err => err);
  }

  find({ username, password }) {
    return this.usermodel
      .findOne({ $and: [{ username, password }] })
      .then(user => {
        if (user == null) throw new Error("no such user found");
        else return user;
      })
      .catch(err => {
        throw err;
      });
  }
}

module.exports = UserModel;
