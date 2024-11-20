import { z } from "zod";

const baseSchema = z.object({
  revenu: z.number().min(1, "Le revenu est requis"),
  type: z.enum(["locataire", "proprietaire", "heberge"], {
    required_error: "Veuillez sélectionner votre statut",
  }),
  loyer: z.number().optional(),
});

export const consommationSchema = baseSchema.extend({
  nombreCredits: z.number().min(1, "Le nombre de crédits est requis"),
  mensualitesImmo: z.number().min(0, "Montant invalide"),
  capitalRestantImmo: z.number().min(0, "Montant invalide"),
  dureeRestanteImmo: z.number().min(0, "Durée invalide"),
  mensualitesConso: z.number().min(0, "Montant invalide"),
  capitalRestantConso: z.number().min(0, "Montant invalide"),
  dureeRestanteConso: z.number().min(0, "Durée invalide"),
});

export const hypothecaireSchema = z.object({
  revenu: z
    .number({
      required_error: "Le revenu est requis",
      invalid_type_error: "Le revenu doit être un nombre",
    })
    .min(0, "Le revenu ne peut pas être négatif"),
  type: z.enum(["locataire", "proprietaire", "heberge"], {
    required_error: "Veuillez sélectionner votre statut",
  }),
  loyer: z
    .number({
      required_error: "Le loyer est requis",
      invalid_type_error: "Le loyer doit être un nombre",
    })
    .min(0, "Le loyer ne peut pas être négatif")
    .optional()
    .nullable(),
});

export const creditsSchema = z.object({
  nombreCredits: z.number().min(1, "Veuillez saisir au moins 1 crédit"),
  mensualitesImmo: z.number().min(0, "La mensualité ne peut pas être négative"),
  capitalRestantImmo: z
    .number()
    .min(0, "Le capital restant dû ne peut pas être négatif"),
  dureeRestanteImmo: z.number().min(0, "La durée ne peut pas être négative"),
  mensualitesConso: z
    .number()
    .min(0, "La mensualité ne peut pas être négative"),
  capitalRestantConso: z
    .number()
    .min(0, "Le capital restant dû ne peut pas être négatif"),
  dureeRestanteConso: z.number().min(0, "La durée ne peut pas être négative"),
});

export const autresDettesSchema = z.object({
  totalDettes: z
    .number()
    .min(0, "Le total des dettes doit être positif")
    .max(1000000, "Le total des dettes ne peut pas dépasser 1 000 000 €"),
  dureeRestante: z
    .number()
    .min(0, "La durée restante doit être positive")
    .max(360, "La durée restante ne peut pas dépasser 360 mois"),
  tresorerieSouhaitee: z
    .number()
    .min(0, "La trésorerie souhaitée doit être positive")
    .max(100000, "La trésorerie souhaitée ne peut pas dépasser 100 000 €"),
  dureeSouhaitee: z
    .number()
    .min(0, "La durée souhaitée doit être positive")
    .max(360, "La durée souhaitée ne peut pas dépasser 360 mois"),
});

export type ConsommationFormData = z.infer<typeof consommationSchema>;
export type HypothecaireFormData = z.infer<typeof hypothecaireSchema>;
export type CreditsFormData = z.infer<typeof creditsSchema>;
