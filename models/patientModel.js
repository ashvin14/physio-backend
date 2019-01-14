class PatientModel {
  constructor() {}

  findAllPatients() {
    return this.usermodel.find({ roles: "patient" }).then(patients => {
      console.log(patients);
      if (!patients.length) throw new Error("no  patients  found");
      return patients;
    });
  }
}

module.exports = PatientModel;
