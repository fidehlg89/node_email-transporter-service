const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors()); // Agregamos el middleware de cors

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post("/send-email", async (req, res) => {
  try {
    const { to, subject, body } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: subject,
      html: body,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log(`Correo electrónico enviado a ${to}: ${result.response}`);

    res.status(200).send("Correo electrónico enviado");
  } catch (error) {
    console.error(`Error al enviar el correo electrónico: ${error}`);
    res.status(500).send("Error al enviar el correo electrónico");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
