import { FaAngleRight } from "react-icons/fa6";
import Image from "next/image";
import attention from "@/images/bulle-warning.svg";

const list = [
  "Réduire vos mensualités : pour avoir plus de budget en fin de mois",
  "Réduire votre taux d’endettement : pour se lancer dans un nouveau projet",
  "Unifier vos versements : pour pouvoir prévoir sur la durée ses dépenses",
];

function CreditsTypes() {
  return (
    <article>
      <h3 className="px-4 pt-4 text-xl font-semibold uppercase pb-10 lg:text-2xl lg:px-36 2xl:px-56">
        2 types de <span className="text-secondary">rachat de crédits</span>
      </h3>
      <div className="bg-section py-8 flex flex-col lg:flex-row lg:px-36 lg:gap-4 2xl:px-56 2xl:gap-20">
        <section className="bg-gradient-card-darkest relative text-textColor p-5 mx-4 rounded-2xl lg:w-[30rem] lg:h-[22.5rem] lg:mx-0">
          <h4 className="text-lg font-semibold uppercase pb-12 lg:pb-10 after:absolute after:top-24 lg:after:top-16 after:left-4 after:w-10 after:h-[5px] after:bg-secondary">
            Rachat de crédit à la consommation
          </h4>
          <p className="text-sm lg:text-base">
            Le rachat de crédits à la consommation est une opération bancaire
            permettant aux personnes ayant cumulé plusieurs crédits à la
            consommation de les regrouper en un seul pour réduire leurs
            mensualités.
          </p>
          <p className="pt-4 text-sm lg:text-base">
            Si vous avez un crédit immobilier que vous ne souhaitez pas
            regrouper avec vos crédits à la consommation, vous pouvez aussi y
            avoir recours.La banque rembourse vos prêts auprès de vos différents
            créanciers et vous accorde un nouveau crédit du montant de ce qu’il
            vous restait à rembourser. Elle peut aussi vous accorder une
            trésorerie supplémentaire.
          </p>
        </section>
        <ul className="flex flex-col justify-start gap-2 px-4 pt-4 lg:px-0 lg:gap-4">
          {list.map((item, index) => (
            <li key={index} className="flex text-sm lg:text-xl">
              <FaAngleRight className="text-secondary text-lg mt-1 min-w-[1.5rem]" />
              <p className="pl-2">{item}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:mt-48 lg:w-[34rem] lg:ml-40 2xl:ml-56">
        <p className="px-4 pt-4 text-lg font-semibold uppercase">
          Ce nouveau prêt peut être :
        </p>
        <ul className="list-disc px-4 mx-4 pt-4 text-[1rem]">
          <li>
            <p>
              <span className="font-semibold">Étalé dans le temps</span> (15 ans
              au maximum)
            </p>
          </li>
          <li>
            <p>
              <span className="font-semibold">
                Proposé à un taux d&apos;intérêt moyen plus faible,
              </span>{" "}
              ce qui réduit systématiquement vos mensualités et donc votre taux
              d&apos;endettement
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-section py-8 flex flex-col lg:flex-row lg:gap-4 mt-4 lg:px-36 2xl:px-56 2xl:gap-20">
        <section className="bg-gradient-card-darkest relative text-textColor p-5 mx-4 rounded-2xl lg:w-[30rem] lg:h-[20rem] lg:mx-0">
          <h4 className="text-lg font-semibold uppercase pb-12 lg:pb-10 after:absolute after:top-24 lg:after:top-16 after:left-4 after:w-10 after:h-[5px] after:bg-secondary">
            Rachat de crédit hypothécaire
          </h4>
          <p className="text-sm lg:text-base 2">
            Le rachat de crédits hypothécaire s’adresse exclusivement aux
            propriétaires. On désigne en effet ainsi une opération de
            regroupement de prêts garantie par l’hypothèque d’un bien
            immobilier.
          </p>
          <p className="pt-4 text-sm lg:text-base">
            Concrètement, l’établissement bancaire rachète vos crédits auprès de
            vos différents créanciers pour mettre en place un seul et unique
            emprunt aux mensualités réduites sur une durée maximum de 35 ans.
          </p>
        </section>
        <div className="flex pt-4 lg:pt-10">
          <FaAngleRight className="text-secondary text-lg mt-1 min-w-[1.5rem]" />
          <p className="pl-2 lg:text-xl lg:w-[40rem]">
            Une mise en hypothèque exige le recours à un notaire. Par
            conséquent, contrairement au rachat de crédits à la consommation,
            une opération hypothécaire implique des frais de notaire.
          </p>
        </div>
      </div>
      <div className="lg:flex lg:px-36  lg:justify-between lg:mb-10 2xl:px-56">
        <div className="lg:mt-40 lg:w-[30rem]">
          <h4 className="px-4 pt-4 text-lg font-semibold uppercase">
            Pourquoi une garantie ?
          </h4>
          <p className="px-4 pt-4 pb-8 text-sm lg:text-base">
            Les montants des dettes regroupées étant généralement plus
            importants que pour un rachat de crédits à la consommation,
            l’organisme a besoin de garantir l’opération avec votre bien
            immobilier. Si vous n’êtes plus en capacité de verser vos
            mensualités, et uniquement en dernier recours, il pourra revendre
            votre bien hypothéqué et récupérer une partie des revenus de la
            vente.
          </p>
        </div>
        <Image
          src={attention}
          alt="attention"
          className="hidden lg:block lg:w-[25rem] lg:mt-36"
        />
      </div>
    </article>
  );
}

export default CreditsTypes;
