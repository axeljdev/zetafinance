import sgMail from "@sendgrid/mail";
import {
  formatSimulationEmail,
  formatContactEmail,
} from "@/utils/emailTemplates";
import { CustomFormData } from "@/types/simulator";

export class EmailService {
  constructor() {
    if (!process.env.SENDGRID_API_KEY || !process.env.EMAIL_USER) {
      throw new Error("Variables d'environnement manquantes");
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  async sendEmail(formData: unknown, template: string): Promise<string> {
    try {
      const text =
        template === "contact"
          ? formatContactEmail(formData as any)
          : formatSimulationEmail(formData as CustomFormData);

      const msg = {
        to: process.env.EMAIL_USER,
        from: process.env.EMAIL_USER!,
        subject:
          template === "contact"
            ? `Contact de ${(formData as any).name}`
            : "Nouvelle simulation de regroupement de crédits",
        text: text,
      };

      const [response] = await sgMail.send(msg);
      return response.headers["x-message-id"] || "sent";
    } catch (error) {
      throw error;
    }
  }
}
