require("dotenv").config();
const nodemailer = require("nodemailer"),
  path = require("path"),
  fs = require("fs"),
  jade = require("jade"),
  Promise = require("bluebird");

const FunctionToChooseMailsFromTemplate = file =>
  __dirname / +"mail-templates/" + file;

exports.functionToSendEmail = (emailId, File, subject, name, message) => {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_SENDER_USERNAME,
        password: process.env.EMAIL_SENDER_PASSWORD,
      },
    });

    const template = FunctionToChooseMailsFromTemplate(File);

    fs.readFile(template, "UTF8", (err, file) => {
      if (err) throw new Error("cannot send Mail at the moment");
      else {
        const compiledTmplate = jade.compile(file, { filename: template });
        const context = { name, message };
        const htmlMessage = compiledTmplate(context);

        const mailOptions = {
          from:
            "physio-admin doctor <" + process.env.EMAIL_SENDER_USERNAME + ">",
          to: emailId,
          subject: sub + " [Do not reply]",
          html: htmlMessage,
        };

        transporter.sendMail(mailOptions, (err, info) => {
          if (error) {
            reject(new Error("no such EMailId found"));
          } else {
            console.log("Mssage Sent: " + info.response);
            resolve(info.response);
          }
        });
      }
    });
  });
};
