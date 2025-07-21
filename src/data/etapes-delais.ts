import { StaticImageData } from "next/image";
import etapesImage from "@/images/section-etapes.png";
import delaisImage from "@/images/section-delais.png";

export type Section = {
  step: string;
  stepTitle: string;
  title: string;
  paragraphs: string[];
  creditTypes?: {
    hypothecaire: {
      title: string;
      intro: string;
      items: string[];
    };
    consommation: {
      title: string;
      intro: string;
      items: string[];
    };
  };
  image?: {
    src: StaticImageData;
    alt: string;
  };
};

export const etapesDelaisContent: Section[] = [
  {
    step: "Étape 1",
    stepTitle: "étude des besoins / étude faisabilité / constitution dossier",
    title:
      "Analyse des Besoins et Étude de Faisabilité pour le Regroupement de Crédits",
    paragraphs: [
      "La première étape dans un projet de regroupement de crédits consiste à réaliser une analyse personnalisée de votre situation financière et de vos besoins spécifiques. Chez ZETA Finance, nous vous proposons une étude approfondie de vos prêts en cours, de vos revenus et charges, ainsi que de vos objectifs financiers. L'objectif est de déterminer si le regroupement de crédits est une solution adaptée et faisable dans votre situation.",
      "Lors de cette phase, nous procédons à une évaluation de la faisabilité du projet en tenant compte de plusieurs critères, tels que votre niveau d'endettement, vos antécédents financiers et votre capacité de remboursement. En collaboration avec vous, nous établissons un dossier solide comprenant tous les documents justificatifs nécessaires (relevés de comptes, fiches de paie, justificatifs de crédit, etc.).",
      "Cette analyse initiale est déterminante pour maximiser vos chances de succès lors de la présentation de votre dossier aux banques. Nos conseillers restent disponibles pour répondre à toutes vos questions et vous guider dans la constitution de ce dossier afin d'assurer un gain de temps et d'efficacité dans la démarche.",
      "Votre conseiller est à votre écoute pour comprendre vos attentes. Avec vous, il fait la synthèse de votre situation, et vous accompagne pour réunir toutes les pièces justificatives nécessaires à la constitution de votre dossier. Votre interlocuteur vous explique en détail le principe du regroupement de vos crédits et définit vos besoins, pour étudier un plan de financement adapté. Il intègre tous les paramètres liés à votre situation professionnelle et personnelle, pour rechercher la solution personnalisée la plus avantageuse pour vous.L'intérêt d'un I.O.B.S.P. (Intermédiaire en Opérations de Banque et Services de Paiement) à ce stade est déterminant : lui seul est en mesure de pouvoir vous proposer, parmi tous ses partenaires bancaires, celui qui offre le produit le mieux adapté à votre situation. À cette étape une première réponse de principe peut vous être donnée et vous indiquer si le projet est réalisable ou non.",
    ],
    image: {
      src: etapesImage,
      alt: "Étapes du regroupement de crédits",
    },
  },
  {
    step: "Étape 2",
    stepTitle: "étude de votre dossier auprès des banques",
    title:
      "Présentation de Votre Dossier aux Banques et aux Partenaires Financiers",
    paragraphs: [
      "Une fois votre dossier constitué, ZETA Finance intervient pour le présenter à nos partenaires financiers et bancaires. Cette étape, essentielle dans un regroupement de crédits, vise à obtenir des offres compétitives et adaptées à votre profil. Grâce à notre réseau de partenaires de confiance, nous mettons en avant les points forts de votre dossier pour maximiser vos chances d'obtenir des conditions avantageuses.",
      "Notre rôle d'intermédiaire vous permet de bénéficier de l'expertise et des relations de ZETA Finance auprès des banques, réduisant ainsi les délais de réponse et augmentant la qualité des offres reçues. Nous travaillons en toute transparence, en tenant compte de vos objectifs et de vos priorités (réduction de mensualité, taux d'intérêt, durée de remboursement).",
      "Durant cette étape, nous vous informons régulièrement de l'avancée du processus et vous communiquons les premières réponses des banques. Cela vous permet de rester impliqué et de suivre le déroulement de votre projet de regroupement de crédits sans avoir à gérer les démarches complexes auprès des établissements financiers.",
    ],
  },
  {
    step: "Étape 3",
    stepTitle: "acceptation des banques et propositions d'offres de rachat",
    title:
      "Réception des Offres de Rachat et Sélection des Meilleures Propositions",
    paragraphs: [
      "Après l'étude de votre dossier par les banques, nous recevons plusieurs offres de rachat de crédits qui vous sont présentées de manière claire et transparente. Chacune de ces offres inclut des détails sur les taux d'intérêt, la durée de remboursement, les frais de dossier, et les modalités de paiement.",
    ],
    creditTypes: {
      hypothecaire: {
        title: "Rachat de crédit hypothécaire",
        intro:
          "7 jours plus tard, la banque nous fait un retour sur votre dossier. Deux cas de figure :",
        items: [
          "Votre dossier est complet et les offres peuvent être éditées directement, passage l'Étape 4",
          "La banque demande des documents complémentaires pour votre dossier : Une fois les documents récupérés, nous envoyons de nouveau le dossier en banque. Une fois le dossier renvoyé, il faut compter 2 jours supplémentaires pour qu'elle nous présente son accord définitif.",
        ],
      },
      consommation: {
        title: "Rachat de crédit consommation",
        intro:
          "4 jours plus tard, la banque nous fait un retour sur votre dossier. Deux cas de figure :",
        items: [
          "Votre dossier est complet et les offres peuvent être éditées directement, passage l'Étape 4",
          "La banque demande des documents complémentaires pour votre dossier : Une fois les documents récupérés, nous envoyons de nouveau le dossier en banque. Une fois le dossier renvoyé, il faut compter 2 jours supplémentaires pour qu'elle nous présente son accord définitif.",
        ],
      },
    },
    image: {
      src: delaisImage,
      alt: "Délais du regroupement de crédits",
    },
  },
  {
    step: "Étape 4",
    stepTitle: "acceptation client / signature de l’offre de rachat",
    title: "Validation Client et Signature de l'Offre de Rachat de Crédit",
    paragraphs: [
      "Une fois l'offre choisie, nous procédons à la validation avec vous, ce qui marque le début de la phase d'engagement formel dans votre projet de regroupement de crédits. Avant la signature, nos conseillers vous expliquent chaque terme du contrat pour vous assurer une compréhension totale des implications financières et des engagements associés.",
      "ZETA Finance attache une grande importance à la transparence, et cette étape est l'occasion de répondre à toutes vos questions et de vous fournir des conseils finaux avant la signature. La validation de l'offre constitue un acte décisif, officialisant votre entrée dans le processus de regroupement de crédits.",
      "Nos experts sont présents pour faciliter la finalisation de la transaction et s'assurer que toutes les démarches administratives sont correctement accomplies. Une fois le contrat signé, nous supervisons la suite du processus pour garantir que tout se déroule conformément aux délais prévus et sans aucune complication.",
      "(Si vous avez recours à un rachat de crédits hypothécaire, nous vous accompagnerons dans la signature de la garantie d'hypothèque chez le notaire. Cette dernière garantira en effet à la banque d'être remboursée du nouveau prêt qu'elle vient de vous accorder).",
    ],
  },
  {
    step: "Étape 5",
    stepTitle: "déblocage de fond / remboursement des créanciers",
    title: "Déblocage des Fonds et Remboursement des Créanciers",
    paragraphs: [
      "La dernière étape est celle du déblocage des fonds et du remboursement des créanciers. Une fois le contrat signé et toutes les vérifications effectuées, la banque procède au déblocage des fonds, destinés à solder l'ensemble de vos crédits en cours. Ce montant est directement versé aux créanciers concernés, mettant fin à vos anciens prêts.",
      "Dès réception de son offre de regroupement de crédits signée et après délai de rétractation s'il y a lieu, la banque rembourse vos créanciers et verse sur votre compte l'éventuelle trésorerie supplémentaire que vous avez pu demander. Elle prélèvera la première mensualité à la date prévue dans le contrat.",
    ],
    creditTypes: {
      hypothecaire: {
        title: "Rachat de crédit hypothécaire",
        intro:
          "Le déblocage des fonds ne pourra s'effectuer que 11 jours après la réception des offres signées par la banque de rachat.",
        items: [],
      },
      consommation: {
        title: "Rachat de crédit consommation",
        intro:
          "Le déblocage des fonds ne pourra s'effectuer que 8 jours après la réception des offres signées par la banque de rachat.",
        items: [],
      },
    },
  },
  {
    step: "LES DÉLAIS",
    stepTitle: "",
    title: "LES DÉLAIS",
    paragraphs: [
      "Pour protéger les consommateurs, la loi impose des procédures d'acceptation finale de l'offre. Après réception de l'offre de rachat de crédits envoyée par le courtier (valable 30 jours), l'emprunteur dispose d'un délai de réflexion de :",
      "• 11 jours dans le cas d'un rachat de crédits immo « conso + immo » (plus de 60 % de crédit immobilier)",
      "• 14 jours pour un rachat de crédits « conso » (moins de 60 % de crédit immobilier). (Si vous souhaitez avancer le déblocage des fonds, vous pouvez réduire le délai de rétractation à 8 jours en cochant une case spécifique dans l'offre de prêt)",
      "*Exemple : si j'ai signé mon offre de rachat de crédits le 12 juillet, je recevrai ma trésorerie le 26 juillet, à moins que j'ai choisi de la recevoir le 20.*",
    ],
  },
];
