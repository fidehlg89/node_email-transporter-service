export class Email {
  constructor(from, subject, message) {
    this.from = from;
    this.subject = subject;
    this.message = message;
    this.validate();
  }

  validate() {
    if (!this.from || !this.from.includes("@")) {
      throw new Error("Invalid sender email");
    }
    if (!this.subject || this.subject.trim().length === 0) {
      throw new Error("Subject is required");
    }
    if (!this.message || this.message.trim().length === 0) {
      throw new Error("Message is required");
    }
  }
}
