import SMTPTransport from "nodemailer/lib/smtp-transport";

export const emailConfig: SMTPTransport.Options = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
};

export const EMAIL_SENDER = `"Zeta Finance" <${process.env.EMAIL_USER}>`;
