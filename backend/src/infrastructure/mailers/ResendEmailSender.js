import { Resend } from "resend";
import { EmailSender } from "../../domain/interfaces/EmailSender.js";

export class ResendEmailSender extends EmailSender {
  constructor(apiKey) {
    super();
    this.resend = new Resend(apiKey);
  }

  async send(email) {
    try {
      console.log(`Attempting to send email via Resend from ${email.from}...`);
      
      const { data, error } = await this.resend.emails.send({
        from: "onboarding@resend.dev", // Default for testing, or use verified domain
        to: process.env.EMAIL_USER || "fidehlg89@gmail.com",
        subject: `New Notification: ${email.subject}`,
        html: `<p><strong>From:</strong> ${email.from}</p><p><strong>Message:</strong> ${email.message}</p>`,
      });

      if (error) {
        throw new Error(error.message);
      }

      console.log(`Email sent successfully via Resend: ${data.id}`);
      return data;
    } catch (error) {
      console.error(`Resend Error: ${error.message}`);
      throw error;
    }
  }
}
