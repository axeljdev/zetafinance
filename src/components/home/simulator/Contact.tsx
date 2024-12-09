import { useState, useEffect, useMemo } from "react";
import { ContactProps, CustomFormData } from "@/types/simulator";
import { contactSchema } from "@/schemas/contactSchema";
import { useNotificationStore } from "@/stores/notificationStore";
import { ZodError } from "zod";
import { useCalculations } from "@/hooks/useCalculations";

const Contact: React.FC<ContactProps & { mensualite: number }> = ({
  onFinish,
  setFormData,
  mensualite,
}) => {
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { addNotification } = useNotificationStore();
  const [isLoading, setIsLoading] = useState(false);
  const { calculer } = useCalculations();

  // Récupérer les données du formulaire directement via une prop
  const [formDataState, setFormDataState] = useState<CustomFormData>();

  // Utiliser useEffect uniquement pour mettre à jour le state local
  useEffect(() => {
    if (!formDataState) {
      const currentFormData = setFormData((prevData) => {
        if (prevData) {
          setFormDataState(prevData);
        }
        return prevData;
      });
    }
  }, [formDataState, setFormData]);

  // Calculer les valeurs après rachat
  const calculatedValues = useMemo(() => {
    if (!formDataState) return null;

    return calculer(
      formDataState.capitalRestantImmo,
      formDataState.capitalRestantConso,
      formDataState.totalDettes,
      formDataState.tresorerieSouhaitee,
      formDataState.dureeSouhaitee || 1,
      formDataState.revenu || 0,
      formDataState.selectedType === "locataire",
      formDataState.loyer || 0
    );
  }, [formDataState, calculer]);

  // Calculer les valeurs avant rachat
  const mensualiteAvantRachat = useMemo(() => {
    if (!formDataState) return 0;
    return formDataState.mensualitesImmo + formDataState.mensualitesConso;
  }, [formDataState]);

  const validateField = (
    field: keyof typeof contactSchema.shape,
    value: string
  ) => {
    try {
      contactSchema
        .pick({ [field]: true as const } as Partial<
          Record<keyof typeof contactSchema.shape, true>
        >)
        .parse({ [field]: value });
      setErrors((prev) => ({ ...prev, [field]: "" }));
    } catch (error) {
      if (error instanceof ZodError) {
        const zodError = error.errors[0];
        setErrors((prev) => ({ ...prev, [field]: zodError.message }));
      }
    }
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const formData = { telephone, email };

      // Validation des champs obligatoires
      if (!email) {
        addNotification({
          type: "error",
          message: "Veuillez remplir l'adresse e-mail",
        });
        return;
      }

      // Validation avec Zod
      contactSchema.parse(formData);

      await setFormData((prevData) => ({
        ...prevData,
        ...formData,
        isSubmitted: true,
      }));

      onFinish(formData);
    } catch (error: unknown) {
      const zodErrors: Record<string, string> = {};
      if (error instanceof ZodError) {
        error.errors.forEach((err) => {
          if (err.path) {
            zodErrors[err.path[0]] = err.message;
          }
        });
        setErrors(zodErrors);
      }
      addNotification({
        type: "error",
        message: "Veuillez corriger les erreurs dans le formulaire",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-1 pt-4 rounded-md">
        <p className=" uppercase">Avant rachat</p>
        <p className="font-bold">
          Mensualité crédit : {mensualiteAvantRachat} €
        </p>
        <p className="font-bold">
          Reste à vivre :{" "}
          {formDataState?.revenu
            ? formDataState.revenu -
              mensualiteAvantRachat -
              (formDataState.selectedType === "locataire"
                ? formDataState.loyer || 0
                : 0)
            : 0}{" "}
          €
        </p>
        <p className="text-sm italic">
          (Avec une durée moyenne de crédits de :{" "}
          {formDataState
            ? Math.max(
                formDataState.dureeRestanteImmo,
                formDataState.dureeRestanteConso
              )
            : 0}{" "}
          mois / TAEG moyen de : 9%)
        </p>
      </div>
      <div className="flex flex-col gap-1 p-2 rounded-md bg-gradient-card-light">
        <p className="font-bold uppercase text-lg">Après rachat</p>
        <p className="font-bold">
          Mensualité du nouveau crédit : {mensualite.toFixed(2)} €
        </p>
        <p className="font-bold">
          Reste à vivre :{" "}
          {calculatedValues ? calculatedValues.resteAVivreApres.toFixed(2) : 0}{" "}
          €
        </p>
        <p className="text-sm italic">
          (Sur une durée de : {formDataState?.dureeSouhaitee} mois / TAEG moyen
          de : 3% / assurance facultative)
        </p>
      </div>
      <div className="flex flex-col gap-1 mt-4 border-t-2 border-secondary">
        <p className="uppercase font-bold text-lg my-6">
          Alors contactez-nous !
        </p>
        <div className="flex items-center justify-between">
          <p>Téléphone :</p>
          <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="tel"
              value={telephone}
              onChange={(e) => {
                setTelephone(e.target.value);
                validateField("telephone", e.target.value);
              }}
              placeholder="00 00 00 00 00"
              className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
            />
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p>Adresse e-mail* :</p>
          <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateField("email", e.target.value);
              }}
              placeholder="exemple@domaine.com"
              className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
          </label>
        </div>
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <button
        type="button"
        disabled={isLoading}
        className="btn mt-4 border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        onClick={handleSubmit}
      >
        {isLoading ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>
    </>
  );
};

export default Contact;
