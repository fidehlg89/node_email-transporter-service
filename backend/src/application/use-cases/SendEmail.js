import { Email } from "../../domain/entities/Email.js";

export class SendEmail {
  constructor(emailSender) {
    this.emailSender = emailSender;
  }

  async execute({ from, subject, message }) {
    const email = new Email(from, subject, message);
    return await this.emailSender.send(email);
  }
}
