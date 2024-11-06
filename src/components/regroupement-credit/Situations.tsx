const situations = [
  {
    title: "CAS 1 : J'AI BESOIN DE PLUS DE CONFORT BUDGÉTAIRE",
    description:
      "Vous avez la sensation qu'une trop grande partie de votre budget part dans vos remboursements de crédits ? Le regroupement de prêts va vous permettre de réduire automatiquement vos mensualités.",
    description2: "Vous pourrez ainsi souffler en fin de mois et disposer de votre budget selon votre goût en consacrant une plus grande part à votre épargne, vos dépenses d'équipement, de loisirs..."
  },
  {
    title: "CAS 2 : J'AI BESOIN d'un nouveau crédit à la consommation",
    description:
      "Vous avez besoin d'une trésorerie supplémentaire pour financer un projet (achat d'une voiture, travaux, voyage...) mais vous avez déjà plusieurs crédits et une nouvelle mensualité déséquilibrerait votre budget ?",
    description2: "Certains établissements de regroupement de crédits accepteront d'inclure un nouvel emprunt dans votre rachat. L'ensemble de vos prêts seront ainsi regroupés et étirés dans le temps. Vous pourrez donc réaliser votre projet sans augmenter vos mensualités."
  },
  {
    title: "CAS 3 : Je veux me lancer dans un projet immobilier",
    description:
      "Vous avez un projet en tête qui demande un financement important ? Les banques refuseront de vous prêter si votre taux d'endettement est trop élevé. Le regroupement de crédits peut être alors une solution en réduisant la part occupée par les charges dans votre budget.",
    description2: "Une fois votre taux d'endettement réduit, les établissements bancaires seront garantis que vous pourrez supporter les nouvelles mensualités et accepteront de financer votre projet."
  }
];

function Situations() {
  return (
    <section className="flex flex-col px-2 lg:px-36 2xl:px-56">
      <h3 className="text-xl lg:text-2xl lg:py-10 font-semibold uppercase pb-4 pl-4 text-secondary">
        Dans quelles situations ?
      </h3>
      <ul className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-8 justify-start gap-4 px-2 lg:px-0 pb-4">
        {situations.map((situation, index) => (
          <li key={index} className="relative p-[0.3rem] rounded-2xl bg-gradient-button-light">
            <div className="flex flex-col bg-textColor lg:h-[20rem] rounded-xl p-4">
              <div className="flex flex-col">
                <h3 className="font-semibold uppercase pb-4 text-lg">
                  {situation.title}
                </h3>
                <div className="w-10 h-[5px] bg-secondary mb-6"></div>
              </div>
              <p>{situation.description}</p>
              <p className="pt-4">{situation.description2}</p>
            </div>
          </li>
        ))}
        <li className="relative p-1 rounded-2xl bg-gradient-button-light">
          <div className="flex flex-col bg-textColor lg:h-[20rem] rounded-xl p-4">
            <h3 className="font-semibold uppercase pb-10 text-lg after:absolute after:top-[9rem] lg:after:top-[5.5rem] after:left-5 after:w-10 after:h-[5px] after:bg-secondary">
              CAS 4 : mes revenus ont récemment baissé et je ne parviens plus à régler mes mensualités
            </h3>
            <p>L&apos;arrivée à la retraite, une maternité, ou un accident de la vie a modifié le montant de vos revenus et vous éprouvez désormais des difficultés à régler vos mensualités ? Si une trop grande partie de votre budget est engloutie dans le remboursement de vos emprunts, le rachat de crédits va vous aider à rééquilibrer votre budget. Cette opération peut en effet réduire drastiquement le montant de vos mensualités vous permettant ainsi de retrouver une sérénité financière.</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Situations;
