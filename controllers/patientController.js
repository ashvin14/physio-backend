const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");

const route = express.Router();

module.exports.controllerFunction = function(app) {
  app.use("/patient", route);
};
