import { z } from "zod";

export const contactSchema = z.object({
  telephone: z.string().optional(),
  email: z.string().email("L'adresse email n'est pas valide"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
