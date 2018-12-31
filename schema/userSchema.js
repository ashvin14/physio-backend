const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  patientName: { type: String },
  Age: { type: Number },
  roles: { type: String },
  password: { type: String },
  problems: [{ type: String }],
});

module.exports = userSchema;
