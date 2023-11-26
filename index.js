const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    host: process.env.HOST_SERVER,
    port: process.env.PORT_SERVER,
    secure: true,
    auth: {
      user: process.env.USER_GMAIL,
      pass: process.env.PASS_GMAIL,
    },
});

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/sendMail', async (req, res) => {
  try {
    const content = req.body.content
    if(content.length == 0) return res.status(200).json({ code: 1, message: "no send mail" });
    const info = await transporter.sendMail({
      from: process.env.USER_GMAIL,
      to: process.env.MAIL_TO,
      subject: "Auto support (VIP)", 
      html: `<h3>Nội dung người gửi</h3>
      <p>${content}</p>
      `,
    });

    console.log('content => ' + content)
    console.log("Message sent: %s", info.messageId);
    console.log('========================================');
    res.status(200).json({ code: 1, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ code: 0, error: "Internal server error" });
  }
});
app.get('/', (req, res) => { res.sendFile(__dirname + '/public/index.html') }); 

const PORT = process.env.PORT || 8081;
server.listen(PORT, () => {
  console.log(`=> http://localhost:${PORT}`);
});