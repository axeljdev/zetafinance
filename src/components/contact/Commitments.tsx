import Slider from "./Slider";

function Commitments() {
  return (
    <aside className="bg-gradient-button-dark p-4 lg:py-10 text-textColor flex flex-col lg:flex-row lg:px-52 lg:gap-10 lg:items-center 2xl:px-80 3xl:px-[30rem] animate-fade-down animate-ease-in-out">
      <div className="mb-6">
        <h2 className="text-xl lg:text-3xl font-bold uppercase mb-4 relative pb-6 after:absolute after:top-12 after:left-0 after:w-10 after:h-[5px] after:bg-secondary">
          Nos engagements
        </h2>
        <p className="text-sm lg:text-lg lg:pt-8">
          En tant qu&apos;IOBSP (Intermédiaire en Opérations de Banque et
          Services de Paiements), ZETA FINANCE a pour rôle de vous conseiller et
          de vous accompagner efficacement dans la recherche et la mise en œuvre
          de la solution la plus satisfaisante pour vous, en vue de votre
          situation, de vos besoins, de vos objectifs et de vos contraintes.
        </p>
      </div>
      <div className="pb-10 lg:w-2/5">
        <Slider />
      </div>
    </aside>
  );
}

export default Commitments;
