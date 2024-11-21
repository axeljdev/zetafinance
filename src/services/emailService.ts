import nodemailer from "nodemailer";
import { emailConfig, EMAIL_SENDER } from "@/config/email.config";
import {
  formatSimulationEmail,
  formatContactEmail,
} from "@/utils/emailTemplates";
import { CustomFormData } from "@/types/simulator";

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport(emailConfig);
  }

  async sendEmail(formData: unknown, template: string): Promise<string> {
    try {
      await this.transporter.verify();

      const text =
        template === "contact"
          ? formatContactEmail(
              formData as {
                name: string;
                email: string;
                phone: string;
                message: string;
              }
            )
          : formatSimulationEmail(formData as CustomFormData);

      const mailOptions = {
        from: EMAIL_SENDER,
        to: process.env.EMAIL_USER,
        subject:
          template === "contact"
            ? `Mail de contact de ${(formData as { name: string }).name}`
            : `Simulateur : Demande d'étude ${
                (formData as CustomFormData).email
              }`,
        text,
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
