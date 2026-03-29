import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { ResendEmailSender } from "./infrastructure/mailers/ResendEmailSender.js";
import { SendEmail } from "./application/use-cases/SendEmail.js";
import { EmailController } from "./interfaces/controllers/EmailController.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Dependency Injection
const emailSender = new ResendEmailSender(process.env.RESEND_API_KEY);
const sendEmailUseCase = new SendEmail(emailSender);
const emailController = new EmailController(sendEmailUseCase);

// Routes
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

app.post("/send-email", (req, res) => emailController.handleSendEmail(req, res));

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Email Transporter Service listening at http://localhost:${PORT}`);
});
