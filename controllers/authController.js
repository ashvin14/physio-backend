const express = require("express");
const fs = require("fs");
const userModel = require("../models/userModel");
const route = express.Router();
const knex = require("knex");
const chkLogin = require("../middleware/checkLogin"),
  emailSender = require("../mail-sender");

module.exports.controllerFunction = function(app) {
  route.post("/login", (req, res) => {
    let { username, password } = req.body;
    let user = new userModel();
    user
      .find({ username, password })
      .then(user => {
        if (user.roles === "patient") res.status(403).json("Forbidden access");
        req.session.user = user;
        let { sessionID } = req;
        user = { ...user, sessionID };
        delete user.password;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).send(err.message));
  });

  route.post("/unitylogin", (req, res) => {
    let { username, password } = req.body;
    let user = new userModel();
    user
      .find({ username, password })
      .then(user => {
        if (user.roles === "doctor") res.status(403).json("Forbidden access");
        req.session.user = user;
        let { sessionID } = req;
        user = { ...user, sessionID };
        delete user.password;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).send(err.message));
  });

  route.post("/signup", (req, res) => {
    let userDetails = req.body;

    const newUser = new userModel();
    newUser
      .save(userDetails)
      .then(
        emailSender.functionToSendEmail(
          userDetails.email,
          "Sign Up",
          userDetails.fullname,
          `<h1>Congrats on setting up account on physio-app</h1>
          <p>your credentials for unity login are</p>
          <p>username:${userDetails.username}</p>
          <p>password:${userDetails.password}</p>`,
        ),
      )
      .then(user => {
        delete user.password;
        res.status(201).json(user);
      })
      .catch(err => res.status(500).send(err.message));
  });

  route.delete("/signOut", (req, res) => {
    delete req.session.user;
    res.status(200).json({ loggedOut: true });
  });

  app.use("/", route);
};
