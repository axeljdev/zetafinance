import nodemailer from "nodemailer";
import { CustomFormData } from "@/types/simulator";
import { emailConfig, EMAIL_SENDER } from "@/config/email.config";
import { formatSimulationEmail } from "@/utils/emailTemplates";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendSimulationEmail(formData: CustomFormData): Promise<string> {
    try {
      await this.transporter.verify();

      const mailOptions = {
        from: EMAIL_SENDER,
        to: process.env.EMAIL_USER,
        subject: `Simulateur : Demande d'étude ${formData.nom} ${formData.prenom}`,
        text: formatSimulationEmail(formData),
      };

      const info = await this.transporter.sendMail(mailOptions);
      return info.messageId;
    } catch (error) {
      throw this.handleEmailError(error);
    }
  }

  private handleEmailError(error: unknown): Error {
    if (error instanceof Error) {
      return new Error(`Erreur d'envoi d'email: ${error.message}`);
    }
    return new Error(
      "Une erreur inconnue s'est produite lors de l'envoi de l'email"
    );
  }
}
