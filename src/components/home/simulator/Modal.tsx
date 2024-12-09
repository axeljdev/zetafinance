import { useState, useEffect, useRef, useMemo } from "react";
import Credits from "./Credits";
import Contact from "./Contact";
import AutresDettes from "./AutresDettes";
import { ModalProps, CustomFormData } from "@/types/simulator";
import { useCalculations } from "@/hooks/useCalculations";
import { FaArrowLeft } from "react-icons/fa";

const Modal: React.FC<ModalProps> = ({ selectedType, revenu, loyer }) => {
  const { calculer } = useCalculations();
  const [showCredits, setShowCredits] = useState(true);
  const [showEmail, setShowEmail] = useState(false);
  const checkboxRef = useRef<HTMLInputElement>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [previousStep, setPreviousStep] = useState<
    "credits" | "dettes" | "contact"
  >("credits");

  const [formState, setFormState] = useState<CustomFormData>(() => ({
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
    telephone: "",
    email: "",
    isSubmitted: false,
  }));

  useEffect(() => {
    setFormState((prevState) => ({
      ...prevState,
      selectedType,
      revenu,
      loyer,
    }));
  }, [selectedType, revenu, loyer]);

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

  const handleSubmit = async (contactData?: {
    telephone?: string;
    email: string;
  }) => {
    try {
      const dataToSend = {
        ...formState,
        revenu: formState.revenu || revenu || 0,
        loyer: formState.loyer || loyer || 0,
        selectedType: formState.selectedType || selectedType,
        ...(contactData && { ...contactData }),
      };

      if (!dataToSend.email) {
        console.error("Email manquant:", dataToSend);
        return;
      }

      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData: dataToSend, template: "simulation" }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowConfirmation(true);
      } else {
        console.error("Erreur serveur:", data);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  const calculatedMensualite = useMemo(() => {
    if (!formState) return 0;

    const result = calculer(
      formState.capitalRestantImmo,
      formState.capitalRestantConso,
      formState.totalDettes,
      formState.tresorerieSouhaitee,
      formState.dureeSouhaitee || 1,
      formState.revenu || 0,
      formState.selectedType === "locataire",
      formState.loyer || 0
    );

    return result ? result.mensualiteApres : 0;
  }, [formState, calculer]);

  const handleBack = () => {
    if (showEmail) {
      setShowEmail(false);
      setPreviousStep("dettes");
    } else {
      setShowCredits(true);
      setPreviousStep("credits");
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
          {(showEmail || !showCredits) && (
            <button
              onClick={handleBack}
              className="absolute top-4 left-4 text-textColor hover:text-secondary transition-all duration-300"
              aria-label="Retour à l'étape précédente"
            >
              <FaArrowLeft size={20} />
            </button>
          )}
          <h3 className="text-xl font-bold uppercase mb-4 after:absolute after:top-12 after:left-4 after:w-10 after:h-[5px] after:bg-secondary">
            <span className="text-secondary">
              {showEmail ? "Étape 3" : "Étape 2"}
            </span>{" "}
            : {showEmail ? "Contact" : "Vos crédits"}
          </h3>
          <div className="flex flex-col gap-4">
            {showConfirmation ? (
              <>
                <div className="text-center">
                  Merci ! Vous allez bientôt recevoir un email ou un appel avec
                  votre simulation.
                </div>
                <button
                  className="btn mt-4 border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
                  onClick={() => {
                    document.getElementById("my_modal_7")?.click();
                  }}
                >
                  Fermer
                </button>
              </>
            ) : showCredits ? (
              <Credits
                onNext={() => {
                  setShowCredits(false);
                  setPreviousStep("credits");
                }}
                setFormData={setFormState}
                initialData={formState}
              />
            ) : showEmail ? (
              <Contact
                onFinish={async (contactData) => {
                  await handleSubmit(contactData);
                }}
                setFormData={setFormState}
                mensualite={calculatedMensualite}
                initialData={formState}
              />
            ) : (
              <AutresDettes
                onNext={() => {
                  setShowEmail(true);
                  setPreviousStep("dettes");
                }}
                setFormData={setFormState}
                initialData={formState}
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
