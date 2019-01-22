const express = require("express");
const fs = require("fs");
const route = express.Router();

module.exports.controllerFunction = function(app) {

  route.post('/score', (req, res) => {
    let { sessionID } = req;
    /*let user = new userModel();
    user
      .find({ username, password })
      .then(user => {
        req.session.user = user;
        let { sessionID } = req;
        user = {...user, sessionID};
        delete user.password;
        res.status(200).json(user);
      })
      .catch(err => res.status(404).json(err.message));*/
  });

  app.use("/patient", route);
};
