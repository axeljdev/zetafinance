export interface ModalProps {
  selectedType: string;
  revenu: number | undefined;
  loyer: number | undefined;
}

export type CustomFormData = {
  selectedType: string;
  revenu: number | undefined;
  loyer: number | undefined;
  nombreCredits: number;
  mensualitesImmo: number;
  capitalRestantImmo: number;
  dureeRestanteImmo: number;
  mensualitesConso: number;
  capitalRestantConso: number;
  dureeRestanteConso: number;
  totalDettes: number;
  dureeRestante: number;
  tresorerieSouhaitee: number;
  dureeSouhaitee: number;
  telephone: string;
  email: string;
  isSubmitted: boolean;
};

export interface InputFieldProps {
  label: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export interface CreditsProps {
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
}

export interface AutresDettesProps {
  onNext: () => void;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
}

export interface ContactProps {
  onFinish: (contactData: { telephone: string; email: string }) => void;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
  mensualite: number;
}

export interface CreditSectionProps {
  title: string;
  mensualitesName: string;
  capitalRestantName: string;
  dureeRestanteName: string;
  formData: CustomFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
