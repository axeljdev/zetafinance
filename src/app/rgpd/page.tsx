import Hero from "@/components/Hero";

function Page() {
  return (
    <>
      <Hero
        title="Mentions Légales et Politique de Confidentialité"
        bg="hero-section-rgpd"
      />
      <article className="container mx-auto px-4 py-8 max-w-4xl prose prose-slate animate-fade-down animate-ease-in-out">
        <h1 className="text-3xl font-bold mb-4">
          Mentions Légales et Politique de Confidentialité
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          1. Informations générales
        </h2>
        <p className="mb-6">
          <strong>Nom du site :</strong> Zeta Finance
          <br />
          <strong>Propriétaire :</strong> Camille Pernot
          <br />
          <strong>Adresse :</strong> 20 Av. Jean Mermoz, 33185 Le Haillan
          <br />
          <strong>Numéro de téléphone :</strong> 06 65 43 69 48
          <br />
          <strong>Adresse e-mail :</strong> contact@zetafinance.com
          <br />
          <strong>Numéro d&apos;immatriculation au RCS :</strong> 878 460 302
          R.C.S. Bordeaux
          <br />
          <strong>Hébergeur :</strong> IONOS SARL, 7 PLACE DE LA GARE, 57200
          SARREGUEMINES
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          2. Collecte et traitement des données personnelles
        </h2>
        <p className="mb-6">
          Dans le cadre de son activité, Zeta Finance collecte et traite
          certaines données personnelles de ses utilisateurs, conformément au
          Règlement Général sur la Protection des Données (RGPD) du 27 avril
          2016.
        </p>
        <p className="mb-6">
          Les informations collectées sont uniquement celles nécessaires à la
          bonne utilisation de nos services, notamment :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>Données d’identification : Nom, prénom, adresse e-mail, etc.</li>
          <li>
            Données de connexion : Adresse IP, données de navigation, etc.
          </li>
          <li>
            Données de transaction : En cas d&apos;utilisation de services
            financiers.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          3. Finalité des traitements
        </h2>
        <p className="mb-6">
          Les données collectées sur Zeta Finance sont utilisées pour :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>La gestion des comptes utilisateurs et l’authentification ;</li>
          <li>L&apos;amélioration de nos services ;</li>
          <li>
            La communication des informations sur nos services et offres ;
          </li>
          <li>
            Le respect des obligations légales et réglementaires en matière
            financière.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          4. Bases légales du traitement
        </h2>
        <p className="mb-6">
          Les données personnelles sont collectées et traitées dans les cas
          suivants :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Consentement :</strong> L&apos;utilisateur a donné son
            consentement pour un ou plusieurs objectifs spécifiques (ex. :
            inscription à une newsletter).
          </li>
          <li>
            <strong>Exécution du contrat :</strong> Les traitements sont
            nécessaires à l&apos;exécution d&apos;un contrat (ex. : ouverture
            d&apos;un compte utilisateur).
          </li>
          <li>
            <strong>Intérêt légitime :</strong> Dans certains cas, Zeta Finance
            peut traiter des données en raison de son intérêt légitime (ex. :
            amélioration de la sécurité du site).
          </li>
          <li>
            <strong>Obligations légales :</strong> Pour répondre aux obligations
            légales ou réglementaires (ex. : obligations de conservation en
            matière financière).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mb-3">
          5. Droits des utilisateurs
        </h2>
        <p className="mb-6">
          Conformément au RGPD, les utilisateurs disposent des droits suivants :
        </p>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Droit d’accès :</strong> Obtenir la confirmation que des
            données sont traitées et en recevoir une copie.
          </li>
          <li>
            <strong>Droit de rectification :</strong> Demander la modification
            des données inexactes ou incomplètes.
          </li>
          <li>
            <strong>Droit à l’effacement :</strong> Demander la suppression de
            ses données personnelles.
          </li>
          <li>
            <strong>Droit à la limitation du traitement :</strong> Limiter
            l’utilisation de ses données dans certains cas.
          </li>
          <li>
            <strong>Droit d’opposition :</strong> S’opposer au traitement de ses
            données pour des raisons particulières ou au traitement à des fins
            de prospection.
          </li>
          <li>
            <strong>Droit à la portabilité :</strong> Recevoir les données dans
            un format structuré pour les transmettre à un autre responsable du
            traitement.
          </li>
        </ul>
        <p className="mb-6">
          Pour exercer ces droits, les utilisateurs peuvent nous contacter à
          l’adresse suivante : [Adresse e-mail de contact].
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          6. Conservation des données
        </h2>
        <p className="mb-6">
          Les données personnelles sont conservées aussi longtemps que
          nécessaire pour remplir les finalités pour lesquelles elles ont été
          collectées ou pour respecter nos obligations légales.
        </p>

        <h2 className="text-2xl font-semibold mb-3">7. Sécurité des données</h2>
        <p className="mb-6">
          Zeta Finance prend toutes les mesures techniques et organisationnelles
          nécessaires pour protéger les données personnelles contre tout accès
          non autorisé, modification, divulgation ou destruction.
        </p>

        <h2 className="text-2xl font-semibold mb-3">8. Cookies</h2>
        <p className="mb-6">
          Le site Zeta Finance utilise des cookies pour améliorer
          l&apos;expérience utilisateur, réaliser des statistiques et proposer
          des offres adaptées. L&apos;utilisateur peut paramétrer les cookies à
          tout moment via son navigateur ou les paramètres de notre site.
        </p>

        <h2 className="text-2xl font-semibold mb-3">
          9. Modifications de la politique de confidentialité
        </h2>
        <p className="mb-6">
          Zeta Finance se réserve le droit de modifier les présentes mentions
          légales et politique de confidentialité. Les utilisateurs seront
          informés en cas de changement significatif.
        </p>
      </article>
    </>
  );
}

export default Page;
