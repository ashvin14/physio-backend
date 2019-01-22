const express = require("express");
const fs = require("fs");
const userModel = require("../models/userModel");
const route = express.Router();
const knex = require("knex");

module.exports.controllerFunction = function(app) {
  route.post("/login", (req, res) => {
    let { username, password } = req.body;
    let user = new userModel();
    user
      .find({ username, password })
      .then(user => {
        req.session.user = user;
        let { sessionID } = req;
        user = {...user, sessionID};
        delete user.password;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).json(err.message));
  });

  app.post("/signup", (req, res) => {
    let { fullname, username, password, age, mobile, gender, diagnosed } = req.body;
    console.log({ fullname, username, password, age, mobile, gender, diagnosed })
    let userDetails = { fullname, username, password, age, mobile, gender, diagnosed };

    const newUser = new userModel();
    newUser.save(userDetails).then(user => res.status(201).json(user));
  });

  route.delete("/signOut", (req, res) => {
    delete req.session.user;
    res.json({ loggedOut: true }).status(200);
  });

  app.use("/", route);
};
