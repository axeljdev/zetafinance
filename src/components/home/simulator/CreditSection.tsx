import { CreditSectionProps } from "@/types/simulator";

const CreditSection: React.FC<CreditSectionProps> = ({
  title,
  mensualitesName,
  capitalRestantName,
  dureeRestanteName,
  formData,
  onChange,
}) => {
  return (
    <>
      <h4 className="text-lg uppercase mt-5 mb-4">{title}</h4>
      <div className="flex items-center justify-around">
        <p>Total des mensualités* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="number"
            min="0"
            name={mensualitesName}
            value={String(formData[mensualitesName as keyof typeof formData])}
            onChange={onChange}
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
            name={capitalRestantName}
            value={String(
              formData[capitalRestantName as keyof typeof formData]
            )}
            onChange={onChange}
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
            name={dureeRestanteName}
            value={String(formData[dureeRestanteName as keyof typeof formData])}
            onChange={onChange}
            className="grow w-9 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            required
          />
          mois
        </label>
      </div>
    </>
  );
};

export default CreditSection;
