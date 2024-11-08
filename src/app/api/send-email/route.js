import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: formData.email,
      to: process.env.EMAIL_USER,
      subject: `Simulateur : Demande d'étude ${formData.nom} ${formData.prenom}`,
      text: `
        Nom: ${formData.nom}
        Prénom: ${formData.prenom}
        Téléphone: ${formData.telephone}
        Email: ${formData.email}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email envoyé avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
