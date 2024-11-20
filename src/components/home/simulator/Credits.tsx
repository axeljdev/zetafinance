import { useState } from "react";
import { CreditsProps, CustomFormData } from "@/types/simulator";

const Credits: React.FC<CreditsProps> = ({ onNext, setFormData }) => {
  const [nombreCredits, setNombreCredits] = useState(0);
  const [mensualitesImmo, setMensualitesImmo] = useState(0);
  const [capitalRestantImmo, setCapitalRestantImmo] = useState(0);
  const [dureeRestanteImmo, setDureeRestanteImmo] = useState(0);
  const [mensualitesConso, setMensualitesConso] = useState(0);
  const [capitalRestantConso, setCapitalRestantConso] = useState(0);
  const [dureeRestanteConso, setDureeRestanteConso] = useState(0);

  const handleNext = () => {
    setFormData((prevData: CustomFormData) => ({
      ...prevData,
      nombreCredits,
      mensualitesImmo,
      capitalRestantImmo,
      dureeRestanteImmo,
      mensualitesConso,
      capitalRestantConso,
      dureeRestanteConso,
    }));
    onNext();
  };

  return (
    <>
      <label className="flex items-center justify-around">
        Nombre de crédits à regrouper :
        <input
          type="number"
          min="1"
          value={nombreCredits}
          onChange={(e) => setNombreCredits(Number(e.target.value))}
          className="w-14 h-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70 rounded-xl focus-within:outline-secondary focus-within:outline-1"
          required
        />
      </label>
      <h4 className="text-lg uppercase mt-5 mb-4">Crédits Immobiliers</h4>
      <div className="flex items-center justify-around">
        <p>Total des mensualités* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={mensualitesImmo}
            onChange={(e) => setMensualitesImmo(Number(e.target.value))}
            className="grow w-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          €/mois
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Total capital restant dû* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={capitalRestantImmo}
            onChange={(e) => setCapitalRestantImmo(Number(e.target.value))}
            className="grow w-16 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Durée moyenne restante* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={dureeRestanteImmo}
            onChange={(e) => setDureeRestanteImmo(Number(e.target.value))}
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          mois
        </label>
      </div>
      <h4 className="text-lg uppercase mt-5 mb-4">Crédits Consommation</h4>
      <div className="flex items-center justify-around">
        <p>Total des mensualités* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={mensualitesConso}
            onChange={(e) => setMensualitesConso(Number(e.target.value))}
            className="grow w-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          €/mois
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Total capital restant dû* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={capitalRestantConso}
            onChange={(e) => setCapitalRestantConso(Number(e.target.value))}
            className="grow w-16 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Durée moyenne restante* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={dureeRestanteConso}
            onChange={(e) => setDureeRestanteConso(Number(e.target.value))}
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          mois
        </label>
      </div>
      <button
        type="button"
        className="btn mt-4 border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        onClick={handleNext}
      >
        Suivant
      </button>
    </>
  );
};

export default Credits;
