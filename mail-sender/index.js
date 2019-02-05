require("dotenv").config();
const nodemailer = require("nodemailer"),
  path = require("path"),
  fs = require("fs"),
  xoauth2 = require("xoauth2"),
  jade = require("jade"),
  Promise = require("bluebird");

exports.functionToSendEmail = (emailId, subject, name, message) => {
  message =
    `<head>
    <style>
table, th, td {
  border: 1px solid black;
}
</style>
</head>` + message;

  const mailOptions = {
    from: `physio-admin doctor <${process.env.EMAIL_SENDER_USERNAME ||
      senderUserName}>`,
    to: emailId,
    subject: subject + " [Do not reply]",
    html: message,
  };

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_SENDER_USERNAME || "physioa6@gmail.com",

      pass: process.env.EMAIL_SENDER_PASSWORD || "Pass@1234",
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
