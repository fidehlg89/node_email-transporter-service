export class EmailController {
  constructor(sendEmailUseCase) {
    this.sendEmailUseCase = sendEmailUseCase;
  }

  async handleSendEmail(req, res) {
    try {
      const { email, subject, message } = req.body;
      const result = await this.sendEmailUseCase.execute({ from: email, subject, message });
      res.status(200).json({ message: "Email sent successfully", data: result });
    } catch (error) {
      console.error(`Error sending email: ${error.message}`);
      res.status(400).json({ error: error.message });
    }
  }
}
