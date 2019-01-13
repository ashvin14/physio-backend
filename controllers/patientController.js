const express = require("express");
const fs = require("fs");

const route = express.Router();

module.exports.controllerFunction = function(app) {
  app.use("/patient", route);
};
