import { CustomFormData } from "@/types/simulator";

export const formatSimulationEmail = (data: CustomFormData): string => {
  // Vérification des données obligatoires
  if (!data.telephone || !data.email) {
    console.warn("Données de contact manquantes:", { data });
  }

  const sections = [
    {
      title: "Informations personnelles",
      content: `
        Téléphone: ${data.telephone || "Non renseigné"}
        Email: ${data.email || "Non renseigné"}
        Type de foyer: ${data.selectedType || "Non renseigné"}
      `,
    },
    {
      title: "Situation financière",
      content: `
        Revenus: ${data.revenu ? data.revenu + "€" : "Non renseigné"}
        Loyer: ${data.loyer ? data.loyer + "€" : "Non renseigné"}
        Nombre de crédits à regrouper: ${data.nombreCredits || "Non renseigné"}
      `,
    },
    {
      title: "Crédits immobiliers",
      content: `
        Total mensualités: ${
          data.mensualitesImmo ? data.mensualitesImmo + "€" : "Non renseigné"
        }
        Capital restant dû: ${
          data.capitalRestantImmo
            ? data.capitalRestantImmo + "€"
            : "Non renseigné"
        }
        Durée moyenne restante: ${
          data.dureeRestanteImmo
            ? data.dureeRestanteImmo + " mois"
            : "Non renseigné"
        }
      `,
    },
    {
      title: "Crédits consommation",
      content: `
        Total mensualités: ${
          data.mensualitesConso ? data.mensualitesConso + "€" : "Non renseigné"
        }
        Capital restant dû: ${
          data.capitalRestantConso
            ? data.capitalRestantConso + "€"
            : "Non renseigné"
        }
        Durée moyenne restante: ${
          data.dureeRestanteConso
            ? data.dureeRestanteConso + " mois"
            : "Non renseigné"
        }
      `,
    },
    {
      title: "Autres informations",
      content: `
        Total des dettes à racheter: ${
          data.totalDettes ? data.totalDettes + "€" : "Non renseigné"
        }
        Durée moyenne restante: ${
          data.dureeRestante ? data.dureeRestante + " mois" : "Non renseigné"
        }
        Trésorerie souhaitée: ${
          data.tresorerieSouhaitee
            ? data.tresorerieSouhaitee + "€"
            : "Non renseigné"
        }
        Durée souhaitée: ${
          data.dureeSouhaitee ? data.dureeSouhaitee + " mois" : "Non renseigné"
        }
      `,
    },
  ];

  return sections
    .map((section) => `${section.title}\n${section.content.trim()}`)
    .join("\n\n");
};

export const formatContactEmail = (data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): string => {
  return `
    Nom: ${data.name}
    Email: ${data.email}
    Téléphone: ${data.phone}
    Message: ${data.message}
  `;
};
