import { useState } from "react";
import { AutresDettesProps } from "@/types/simulator";
import { autresDettesSchema } from "@/schemas/simulatorSchema";
import { useNotificationStore } from "@/stores/notificationStore";

const AutresDettes: React.FC<AutresDettesProps> = ({ onNext, setFormData }) => {
  const [totalDettes, setTotalDettes] = useState(0);
  const [dureeRestante, setDureeRestante] = useState(0);
  const [tresorerieSouhaitee, setTresorerieSouhaitee] = useState(0);
  const [dureeSouhaitee, setDureeSouhaitee] = useState(0);
  const { addNotification } = useNotificationStore();

  const handleNext = () => {
    try {
      const formData = {
        totalDettes,
        dureeRestante,
        tresorerieSouhaitee,
        dureeSouhaitee,
      };

      autresDettesSchema.parse(formData);

      setFormData((prevData) => ({
        ...prevData,
        ...formData,
      }));
      onNext();
    } catch (error) {
      if (error instanceof Error) {
        addNotification({
          message: error.message,
          type: "error",
        });
      }
    }
  };

  return (
    <>
      <h4 className="text-lg uppercase mt-5 mb-4">Autres dettes</h4>
      <div className="flex items-center justify-around">
        <p>Total des dettes à racheter* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={totalDettes}
            onChange={(e) => setTotalDettes(Number(e.target.value))}
            placeholder="100000"
            className="grow w-12 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
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
            value={dureeRestante}
            onChange={(e) => setDureeRestante(Number(e.target.value))}
            placeholder="5"
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          mois
        </label>
      </div>
      <div className="flex items-center justify-around mt-10">
        <p className="uppercase">Trésorerie souhaitée* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={tresorerieSouhaitee}
            onChange={(e) => setTresorerieSouhaitee(Number(e.target.value))}
            placeholder="20000"
            className="grow w-12 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p className="uppercase">Durée souhaitée* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            value={dureeSouhaitee}
            onChange={(e) => setDureeSouhaitee(Number(e.target.value))}
            placeholder="12"
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

export default AutresDettes;
