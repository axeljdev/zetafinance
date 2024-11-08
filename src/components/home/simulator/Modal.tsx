import { useState, useEffect, useRef } from "react";
import Credits from "./Credits";
import Contact from "./Contact";
import AutresDettes from "./AutresDettes";

interface ModalProps {
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
  nom: string;
  prenom: string;
  telephone: string;
  email: string;
  isSubmitted: boolean;
};

const Modal: React.FC<ModalProps> = ({ selectedType, revenu, loyer }) => {
  const [showCredits, setShowCredits] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [formState, setFormState] = useState<CustomFormData>({
    selectedType,
    revenu,
    loyer,
    nombreCredits: 0,
    mensualitesImmo: 0,
    capitalRestantImmo: 0,
    dureeRestanteImmo: 0,
    mensualitesConso: 0,
    capitalRestantConso: 0,
    dureeRestanteConso: 0,
    totalDettes: 0,
    dureeRestante: 0,
    tresorerieSouhaitee: 0,
    dureeSouhaitee: 0,
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    isSubmitted: false,
  });

  useEffect(() => {
    const checkbox = checkboxRef.current;
    const handleCheckboxChange = () => {
      if (checkbox && !checkbox.checked) {
        setShowCredits(true);
        setShowEmail(false);
      }
    };

    checkbox?.addEventListener("change", handleCheckboxChange);

    return () => {
      checkbox?.removeEventListener("change", handleCheckboxChange);
    };
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès");
      } else {
        console.error("Erreur lors de l'envoi de l'email");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
  };

  return (
    <>
      <input
        type="checkbox"
        id="my_modal_7"
        className="modal-toggle"
        ref={checkboxRef}
      />
      <div className="modal" role="dialog">
        <div className="modal-box bg-gradient-button-dark p-4">
          <h3 className="text-xl font-bold uppercase mb-4 after:absolute after:top-12 after:left-4 after:w-10 after:h-[5px] after:bg-secondary">
            <span className="text-secondary ">
              {showEmail ? "Étape 3" : "Étape 2"}
            </span>{" "}
            : {showEmail ? "Contact" : "Vos crédits"}
          </h3>
          <div className="flex flex-col gap-4">
            {showCredits ? (
              <Credits
                onNext={() => setShowCredits(false)}
                setFormData={setFormState}
              />
            ) : showEmail ? (
              <Contact
                onFinish={() => {
                  setShowEmail(false);
                  handleSubmit();
                }}
                setFormData={setFormState}
              />
            ) : (
              <AutresDettes
                onNext={() => setShowEmail(true)}
                setFormData={setFormState}
              />
            )}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </>
  );
};

export default Modal;
