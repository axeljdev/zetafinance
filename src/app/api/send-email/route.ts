import { NextResponse, NextRequest } from "next/server";
import { EmailService } from "@/services/emailService";
import { CustomFormData } from "@/types/simulator";

export async function POST(request: NextRequest) {
  try {
    const formData: CustomFormData = await request.json();
    const emailService = new EmailService();

    const messageId = await emailService.sendSimulationEmail(formData);
    console.log("Message envoyé: %s", messageId);

    return NextResponse.json(
      { message: "Email envoyé avec succès", messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      {
        error: "Erreur lors de l'envoi de l'email",
        details: error instanceof Error ? error.message : "Erreur inconnue",
      },
      { status: 500 }
    );
  }
}