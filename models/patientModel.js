const mongoose = require("mongoose");
const userschema = require("../schema/userSchema");
const objectId = mongoose.Types.ObjectId;

class PatientModel {
  constructor() {
    this.usermodel = mongoose.model("user", userschema);
  }

  findAllPatients() {
    return this.usermodel.find({ roles: "patient" }).then(patients => {
      console.log(patients);
      if (!patients.length) throw new Error("no  patients  found");
      return patients;
    });
  }
}

module.exports = PatientModel;
