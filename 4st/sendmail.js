const nodemailer = require("nodemailer");
const path = require("path");
const fileSystem = require("fs");

const transporter = nodemailer.createTransport({
  host: "smtp.daum.net",
  port: 465,
  secure: true,
  auth: {
    user: "itomato813",
    pass: "sebocxhqvkqqclea",
  },
});

function mailSendFunc(filePath) {
  const data = {
    from: "itomato813@daum.net",
    to: "itomato813@daum.net",
    subject: "2025/10/21/customers.xlsx from Node.js",
    text: "TEST 2025/10/20",
    attachments: [
      {
        filename: path.basename(filePath),
        path: filePath,
      },
    ],
  };
  return new Promise((resolve, reject) => {
    transporter.sendMail(data, (err, info) => {
      if (err) {
        console.log("전송실패", err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
}

module.exports = { mailSendFunc };
