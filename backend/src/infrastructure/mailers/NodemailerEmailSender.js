import nodemailer from "nodemailer";
import { EmailSender } from "../../domain/interfaces/EmailSender.js";

export class NodemailerEmailSender extends EmailSender {
  constructor(user, pass) {
    super();
    this.transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: user,
        pass: pass,
      },
    });
  }

  async send(email) {
    const mailOptions = {
      from: email.from,
      to: process.env.EMAIL_USER, // Recipient is the admin
      subject: `New Notification: ${email.subject}`,
      html: `<p>Email: ${email.from}</p><p>Message: ${email.message}</p>`,
    };

    const result = await this.transporter.sendMail(mailOptions);
    console.log(`Email sent from ${email.from}: ${result.response}`);
    return result;
  }
}
