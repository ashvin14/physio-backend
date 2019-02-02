const express = require("express");
const fs = require("fs");
const userModel = require("../models/userModel");
const route = express.Router();
const knex = require("knex");

module.exports.controllerFunction = function(app) {

  route.post('/score', (req, res) => {
    let { user_id, session_id, score, date, day, joint } = req.body;
    let scoreDetails = { user_id, session_id, score, date, day, joint };

    const newUser = new userModel();
    newUser
      .saveScores(scoreDetails)
      .then(scores => res.status(201).json(scores))
      .catch(err => res.status(500).send(err.message));
  });

  route.post('/rom', (req, res) => {
    let { user_id, session_id, joint, created_at, min_rom, max_rom } = req.body;
    let ROMDetails = { user_id, session_id, joint, created_at, min_rom, max_rom };

    const newUser = new userModel();
    newUser
      .saveROMDetails(ROMDetails)
      .then(rom => res.status(201).json(rom))
      .catch(err => res.status(500).send(err.message));
  });

  app.use("/patient", route);
};
