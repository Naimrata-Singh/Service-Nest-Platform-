const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  port: 465,
  secure: true,

  auth: {
    // user: 
    // pass: 
  }
})



module.exports = {transporter}