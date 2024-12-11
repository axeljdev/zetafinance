import { useState } from "react";
import { AutresDettesProps } from "@/types/simulator";
import { autresDettesSchema } from "@/schemas/simulatorSchema";
import { useNotificationStore } from "@/stores/notificationStore";
import NumericInput from "@/components/common/NumericInput";

const AutresDettes: React.FC<AutresDettesProps> = ({
  onNext,
  setFormData,
  initialData,
}) => {
  const [totalDettes, setTotalDettes] = useState(
    initialData?.totalDettes?.toString() || ""
  );
  const [dureeRestante, setDureeRestante] = useState(
    initialData?.dureeRestante?.toString() || ""
  );
  const [tresorerieSouhaitee, setTresorerieSouhaitee] = useState(
    initialData?.tresorerieSouhaitee?.toString() || ""
  );
  const [dureeSouhaitee, setDureeSouhaitee] = useState(
    initialData?.dureeSouhaitee?.toString() || ""
  );
  const { addNotification } = useNotificationStore();

  const handleNext = () => {
    try {
      const formData = {
        totalDettes: Number(totalDettes) || 0,
        dureeRestante: Number(dureeRestante) || 0,
        tresorerieSouhaitee: Number(tresorerieSouhaitee) || 0,
        dureeSouhaitee: Number(dureeSouhaitee) || 0,
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
          <NumericInput
            value={totalDettes}
            onChange={setTotalDettes}
            min={0}
            placeholder="100000"
            className="grow w-12 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
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
            value={dureeRestante}
            onChange={setDureeRestante}
            min={0}
            placeholder="5"
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="mois"
          />
          mois
        </label>
      </div>
      <div className="flex items-center justify-around mt-10">
        <p className="uppercase">Trésorerie souhaitée* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={tresorerieSouhaitee}
            onChange={setTresorerieSouhaitee}
            min={0}
            placeholder="20000"
            className="grow w-12 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
            suffix="€"
          />
          €
        </label>
      </div>
      <div className="flex items-center justify-around">
        <p className="uppercase">Durée souhaitée* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <NumericInput
            value={dureeSouhaitee}
            onChange={setDureeSouhaitee}
            min={0}
            placeholder="12"
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
        Calculer mes mensualités
      </button>
    </>
  );
};

export default AutresDettes;
