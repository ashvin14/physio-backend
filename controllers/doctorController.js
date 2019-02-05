// change API's they are not correct
const express = require("express");
const fs = require("fs");
const patientModel = require("../models/patientModel");
const chkLogin = require("../middleware/checkLogin");
const route = express.Router(),
  emailSender = require("../mail-sender");

module.exports.controllerFunction = function(app) {
  route.get("/all/patients", (req, res) => {
    let patient = new patientModel({});

    patient
      .findAllPatients()
      .then(patientList => {
        res.status(200).json(patientList);
      })
      .catch(err => res.status(400).send(err.message));
  });

  route.get("/patient/maxscore", (req, res) => {
    let { patientID, joint } = req.query;
    let patient = new patientModel({});

    patient
      .getMaxScore(patientID, joint)
      .then(maxScoreDetails => {
        res.status(200).json(maxScoreDetails);
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  });

  route.get("/:patientID", (req, res) => {
    let { patientID } = req.params;
    let patient = new patientModel({});

    patient.findOneAndReturn(patientID).then(patient => {
      if (patient) {
        res.status(200).json(patient);
      } else
        res.status(404).send("patient for given User id could not be found");
    });
  });

  route.get("/patient/score", (req, res) => {
    let { patientID, day, joint } = req.query;
    let patient = new patientModel({});

    patient
      .getScore(patientID, day, joint)
      .then(scoreDetails => {
        res.status(200).json(scoreDetails);
      })
      .catch(err => res.status(400).send(err.message));
  });

  route.get("/patient/rom/:patientID", (req, res) => {
    let { patientID } = req.params;
    let { joint } = req.query;

    let patient = new patientModel({});

    patient
      .getROMDetails(patientID, joint)
      .then(ROMDetails => {
        res.status(200).json(ROMDetails);
      })
      .catch(err => res.status(400).send(err.message));
  });

  route.get("/sessions", (req, res) => {
    let patient = new patientModel({});

    patient
      .getSessions()
      .then(sessions => {
        res.status(200).json(sessions);
      })
      .catch(err => res.status(400).send(err.message));
  });

  route.delete("/delete/:patientID", (req, res) => {
    let { patientID } = req.params;
    let patient = new patientModel({});

    patient
      .deletePatientFromUsers(patientID)
      .then(patient.deletePatientFromExercise(patientID))
      .then(patient.deletePatientFromScores(patientID))
      .then(patient.deletePatientFromMessages(patientID))
      .then(() => {
        res.status(200).json({ status: "deleted" });
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  });

  route.put("/update/:patientID", (req, res) => {
    let { patientID } = req.params;
    let updatedDetails = req.body;
    let patient = new patientModel({});

    patient
      .updatePatientDetails(patientID, updatedDetails)
      .then(patientData => {
        res.status(200).json(patientData);
      })
      .catch(err => {
        res.status(400).send(err.message);
      });
  });

  route.post("/sendmail", (req, res) => {
    let { message } = req.body;
    let { user_id } = req.query;
    let Patient = new patientModel({});

    const sendMailToUser = patient =>
      emailSender.functionToSendEmail(
        patient.email,
        "update Report",
        patient.fullname,
        message,
      );
    const saveMailToDb = () => Patient.saveMail({ message, user_id });

    if (!message) res.status(500).send("message field cannot be empty");

    Patient.findOneAndReturn(user_id)
      .then(sendMailToUser)
      .then(saveMailToDb)
      .then(response => {
        res.status(200).json(response);
      })
      .catch(err => {
        throw err;
      });
  });

  route.get("/getmail/:patientID", (req, res) => {
    let { patientID } = req.params;
    let patient = new patientModel({});

    patient
      .getMails(patientID)
      .then(msgs => {
        res.status(200).json(msgs);
      })
      .catch(err => {
        console.log(err.message);
        res.status(400).send(err.message);
      });
  });

  app.use("/doctor", chkLogin.check, route);
};
