const express = require("express");
const fs = require("fs");

const userModel = require("../models/userModel");

const route = express.Router();

module.exports.controllerFunction = function(app) {
  route.post("/login", (req, res) => {
    let user = new userModel({});
    let { username, password } = req.body;

    user
      .find({ username, password })
      .then(user => {
        req.session.user = user;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).json(err.message));
  });

  route.post("/signup", (req, res) => {
    let { username, Age, patientName, password, roles } = req.body;
    let userDetails = { username, Age, patientName, password, roles };

    const newUser = new userModel();
    newUser.save(userDetails).then(user => res.status(201).json(user));
  });

  route.delete("/signOut", (req, res) => {
    delete req.session.user;
    res.json({ loggedOut: true }).status(200);
  });

  app.use("/", route);
};
