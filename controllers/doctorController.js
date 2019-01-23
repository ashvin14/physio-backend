// change API's they are not correct
const express = require("express");
const fs = require("fs");
const patientModel = require("../models/patientModel");
const chkLogin = require("../middleware/checkLogin");
const route = express.Router();

module.exports.controllerFunction = function(app) {
  route.get("/all/patients", (req, res) => {
    let patient = new patientModel({});

    patient
      .findAllPatients()
      .then(patientList => {
        res.json(patientList).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  route.get("/patient/maxscore/:patientID", (req, res) => {
    let { patientID } = req.params;    
    let patient = new patientModel({});

    patient
      .getMaxScore(patientID)
      .then(maxScoreDetails => {
        res.json(maxScoreDetails).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  route.get("/patient/score/", (req, res) => {
    let { patientID, day } = req.query;   
    let patient = new patientModel({});

    patient
      .getScore(patientID, day)
      .then(scoreDetails => {
        res.json(scoreDetails).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

    route.get("/patient/rom/:sessionID", (req, res) => {
    let { sessionID } = req.params;   
    let patient = new patientModel({});

    patient
      .getROMDetails(sessionID)
      .then(ROMDetails => {
        res.json(ROMDetails).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

    route.get("/sessions", (req, res) => {
    let patient = new patientModel({});

    patient
      .getSessions()
      .then(sessions => {
        res.json(sessions).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  app.use("/doctor", chkLogin.check, route);
};
