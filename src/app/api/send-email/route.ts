import { NextResponse, NextRequest } from "next/server";
import { EmailService } from "@/services/emailService";

export async function POST(request: NextRequest) {
  try {
    const { formData, template } = await request.json();
    const emailService = new EmailService();

    const messageId = await emailService.sendEmail(formData, template);

    return NextResponse.json(
      { message: "Email envoyé avec succès", messageId },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi de l'email",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}
