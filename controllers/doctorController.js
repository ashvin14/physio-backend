// change API's they are not correct
const express = require("express");
const fs = require("fs");

const route = express.Router();

module.exports.controllerFunction = function(app) {
  route.get("/patients", (req, res) => {
    let user = new patientModel({});

    user
      .findAllPatients()
      .then(patientList => {
        console.log(patientList);
        res.json(patientList).status(200);
      })
      .catch(err => res.json({ error: err.message }).status(400));
  });

  app.use("/doctor", route);
};
