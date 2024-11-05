import { FaAngleRight } from "react-icons/fa6";

const benefits = [
    "Regroupement de tous vos crédits en un prêt unique",
    "Réduire ses mensualités",
    "Gestion simplifiée de votre budget mensuel : un seul prêt à rembourser, une seule mensualité à un taux et sur une durée unique",
    "Rééquilibrer un budget suite à une baisse de revenus",
    "Financement de dettes",
    "Financement trésorerie (travaux, voiture, voyage...)",
    "Taux global plus faible",
    "Un interlocuteur unique à votre dossier",
    "Réduire son taux d'endettement (pour faciliter un prêt immobilier)",
    "Aucun changement de banque"
];

function Benefits() {
    return (
        <section className="flex flex-col px-2">
            <h3 className="text-xl font-semibold uppercase pb-4 pl-4 text-secondary">
                Les avantages
            </h3>
            <ul className="flex flex-col justify-start gap-2 pb-8">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex text-sm">
                        <FaAngleRight className="text-secondary text-lg mt-1 min-w-[1.5rem]" />
                        <p className="pl-2">{benefit}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Benefits