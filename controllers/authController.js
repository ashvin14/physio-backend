const express = require("express");
const fs = require("fs");
const userModel = require("../models/userModel");
const route = express.Router();
const knex = require('knex')

const db = require('knex')({
  client: 'pg',
  version: '10',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : 'postgres',
    database : 'physio'
  }
});

module.exports.controllerFunction = function(app) {
  route.post("/login", (req, res) => {
    let { username, password } = req.body;
    user
      .find({ username, password })
      .then(user => {
        req.session.user = user;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).json(err.message));
  });

  app.post("/signup", (req, res) => {
    let { username, patientName, Age, roles, password, problems } = req.body;
    db('users')
      .insert({ username, patientName, Age, roles, password, problems })
      .then(function() {
        db.select('*').from('users')
            .then(function(userList) {
              res.send(userList);
            });
      });
  });

  route.delete("/signOut", (req, res) => {
    delete req.session.user;
    res.json({ loggedOut: true }).status(200);
  });

  app.use("/", route);
};
