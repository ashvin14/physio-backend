require("dotenv").config();
const nodemailer = require("nodemailer"),
  path = require("path"),
  fs = require("fs"),
  xoauth2 = require("xoauth2"),
  jade = require("jade"),
  Promise = require("bluebird");

exports.functionToSendEmail = (emailId, subject, name, message) => {
  const mailOptions = {
    from: "physio-admin doctor <" + process.env.EMAIL_SENDER_USERNAME + ">",
    to: emailId,
    subject: subject + " [Do not reply]",
    html: message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_SENDER_USERNAME,
      pass: process.env.EMAIL_SENDER_PASSWORD,
    },
  });

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        reject(err);
      } else {
        console.log("Message Sent: " + info.response);
        resolve(info.response);
      }
    });
  });
};
