// change API's they are not correct
const express = require("express");
const fs = require("fs");
const patientModel = require("../models/patientModel");
const chk_login = require("../middleware/check_login");
const route = express.Router();

module.exports.controllerFunction = function(app) {
  route.get("/all/patients", (req, res) => {
    let user = new patientModel({});

    user
      .findAllPatients()
      .then(patientList => {
        res.json(patientList).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  route.get("/patient/score/:patientID", (req, res) => {
    let { patientID } = req.params;    
    let user = new patientModel({});

    user
      .getMaxScore(patientID)
      .then(patientList => {
        res.json(patientList).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  app.use("/doctor", chk_login.check, route);
};
