const express = require("express");
const authController = require("../controllers/auth");
const cors = require("cors");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/signup", authController.signup);

router.post("/login", authController.login);

// router.post("/order", authController.order);

// router.post("/donations", authController.donations);

router.post("/refresh_token", authController.refreshtoken);

router.post("/send_mail", cors(), async (req, res) => {
  let { text, info } = req.body;
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: process.env.MAIL_FROM,
    to: "test@test.com",
    subject: "test email",
    html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h2>Here is your email!</h2>
        <p>${text}</p>
        <p>${info}</p>
    
        <p>Kind regards,</br> ${text}</p>
         </div>
    `,
  });
});

router.post("/logout", (_req, res) => {
  res.clearCookie("refreshtoken", { path: "/auth/refresh_token" });
  return res.send({
    message: "Logged out",
  });
});

module.exports = router;
