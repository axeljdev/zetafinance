import { useState } from "react";
import { CreditsProps, CustomFormData } from "@/types/simulator";
import { useCalculations } from "@/hooks/useCalculations";
import NumericInput from "@/components/common/NumericInput";

const Credits: React.FC<CreditsProps> = ({
  onNext,
  setFormData,
  initialData,
}) => {
  const [nombreCredits, setNombreCredits] = useState(
    initialData?.nombreCredits ? initialData.nombreCredits.toString() : ""
  );
  const [mensualitesImmo, setMensualitesImmo] = useState(
    initialData?.mensualitesImmo ? initialData.mensualitesImmo.toString() : ""
  );
  const [capitalRestantImmo, setCapitalRestantImmo] = useState(
    initialData?.capitalRestantImmo
      ? initialData.capitalRestantImmo.toString()
      : ""
  );
  const [dureeRestanteImmo, setDureeRestanteImmo] = useState(
    initialData?.dureeRestanteImmo
      ? initialData.dureeRestanteImmo.toString()
      : ""
  );
  const [mensualitesConso, setMensualitesConso] = useState(
    initialData?.mensualitesConso ? initialData.mensualitesConso.toString() : ""
  );
  const [capitalRestantConso, setCapitalRestantConso] = useState(
    initialData?.capitalRestantConso
      ? initialData.capitalRestantConso.toString()
      : ""
  );
  const [dureeRestanteConso, setDureeRestanteConso] = useState(
    initialData?.dureeRestanteConso
      ? initialData.dureeRestanteConso.toString()
      : ""
  );

  const { calculer } = useCalculations();

  const handleNext = () => {
    setFormData((prevData: CustomFormData) => {
      const updatedData = {
        ...prevData,
        nombreCredits: Number(nombreCredits) || 0,
        mensualitesImmo: Number(mensualitesImmo) || 0,
        capitalRestantImmo: Number(capitalRestantImmo) || 0,
        dureeRestanteImmo: Number(dureeRestanteImmo) || 0,
        mensualitesConso: Number(mensualitesConso) || 0,
        capitalRestantConso: Number(capitalRestantConso) || 0,
        dureeRestanteConso: Number(dureeRestanteConso) || 0,
      };
      calculer(
        updatedData.capitalRestantImmo,
        updatedData.capitalRestantConso,
        updatedData.totalDettes,
        updatedData.tresorerieSouhaitee,
        updatedData.dureeSouhaitee,
        updatedData.revenu || 0
      );
      return updatedData;
    });
    onNext();
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };
  return (
    <>
      <label className="flex items-center justify-around">
        Nombre de crédits à regrouper :
        <NumericInput
          value={nombreCredits}
          onChange={setNombreCredits}
          min={1}
          placeholder="0"
          className="w-14 h-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70 rounded-xl focus-within:outline-secondary focus-within:outline-1"
          required
        />
      </label>
      <h4 className="text-lg uppercase mt-5 mb-4">Crédits Immobiliers</h4>
      <div className="flex items-center justify-around">
        <p>Total des mensualités* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={mensualitesImmo}
            onChange={setMensualitesImmo}
            min={0}
            placeholder="0"
            className="grow w-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="€/mois"
          />
          €/mois
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Total capital restant dû* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={capitalRestantImmo}
            onChange={setCapitalRestantImmo}
            min={0}
            placeholder="0"
            className="grow w-16 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="€"
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Durée moyenne restante* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={dureeRestanteImmo}
            onChange={setDureeRestanteImmo}
            min={0}
            placeholder="0"
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="mois"
          />
          mois
        </label>
      </div>
      <h4 className="text-lg uppercase mt-5 mb-4">Crédits Consommation</h4>
      <div className="flex items-center justify-around">
        <p>Total des mensualités* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={mensualitesConso}
            onChange={setMensualitesConso}
            min={0}
            placeholder="0"
            className="grow w-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="€/mois"
          />
          €/mois
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Total capital restant dû* :</p>
        <label className="input input-bordered h-10 flex items-center gp-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={capitalRestantConso}
            onChange={setCapitalRestantConso}
            min={0}
            placeholder="0"
            className="grow w-16 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="€"
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p>Durée moyenne restante* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={dureeRestanteConso}
            onChange={setDureeRestanteConso}
            min={0}
            placeholder="0"
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="mois"
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
