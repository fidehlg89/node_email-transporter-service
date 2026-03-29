import nodemailer from "nodemailer";
import { EmailSender } from "../../domain/interfaces/EmailSender.js";

export class NodemailerEmailSender extends EmailSender {
  constructor(user, pass) {
    super();
    this.transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL/TLS
      auth: {
        user: user,
        pass: pass,
      },
      tls: {
        rejectUnauthorized: false, // Help with CA cert issues on some cloud platforms
      },
      connectionTimeout: 15000, // 15 seconds
      greetingTimeout: 15000,
      socketTimeout: 30000, // 30 seconds
    });
  }

  async send(email) {
    try {
      console.log(`Attempting to send email from ${email.from}...`);
      
      // Verify connection configuration
      await this.transporter.verify();
      console.log("SMTP connection verified successfully");

      const mailOptions = {
        from: email.from,
        to: process.env.EMAIL_USER, // Recipient is the admin
        subject: `New Notification: ${email.subject}`,
        html: `<p>Email: ${email.from}</p><p>Message: ${email.message}</p>`,
      };

      const result = await this.transporter.sendMail(mailOptions);
      console.log(`Email sent from ${email.from}: ${result.response}`);
      return result;
    } catch (error) {
      console.error(`Nodemailer Error: ${error.message}`);
      if (error.code === 'ETIMEDOUT') {
        console.error("Connection timed out. Check your firewall or Render port permissions.");
      }
      throw error;
    }
  }
}
