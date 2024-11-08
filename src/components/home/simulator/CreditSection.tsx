import InputField from "./InputField";

interface CreditSectionProps {
  title: string;
}

const CreditSection: React.FC<CreditSectionProps> = ({ title }) => (
  <>
    <h4 className="text-lg uppercase mt-5 mb-4">{title}</h4>
    <InputField
      label="Total des mensualités* :"
      placeholder="500"
      unit="€/mois"
    />
    <InputField
      label="Total capital restant dû* :"
      placeholder="500"
      unit="€"
    />
    <InputField label="Durée moyenne restante* :" placeholder="5" unit="mois" />
  </>
);

export default CreditSection;
