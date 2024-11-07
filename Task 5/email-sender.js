// email-sender.js
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-email-password", // Remember to delete this before uploading to GitHub!
  },
});

let mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com",
  subject: "Hello from Node.js",
  text: "This is a test email from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});
