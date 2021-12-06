require("./env");
const nodemailer = require("nodemailer");

/*
    Important: Gmail Account Configuration Needed
    1. Login to the Gmail Account used for sending emails.
    Visit: https://myaccount.google.com/security
    2. TURN ON "Less secure app access"
*/

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});

module.exports.sendMail = async (message) => {
  let mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: process.env.EMAIL_SUBJECT,
    html: message,
  };
  try {
  } catch (error) {}
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

this.sendMail("This is a test. Please ignore.");
