import { useState } from "react";
import { ContactProps } from "@/types/simulator";
import { contactSchema } from "@/schemas/contactSchema";
import { useNotificationStore } from "@/stores/notificationStore";
import { ZodError } from "zod";

const Contact: React.FC<ContactProps> = ({ onFinish, setFormData }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { addNotification } = useNotificationStore();
  const [isLoading, setIsLoading] = useState(false);

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
      const formData = { nom, prenom, telephone, email };
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
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p>Nom* :</p>
          <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="text"
              value={nom}
              onChange={(e) => {
                setNom(e.target.value);
                validateField("nom", e.target.value);
              }}
              placeholder="Nom"
              className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
          </label>
        </div>
        {errors.nom && <p className="text-red-500 text-sm">{errors.nom}</p>}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p>Prénom* :</p>
          <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="text"
              value={prenom}
              onChange={(e) => {
                setPrenom(e.target.value);
                validateField("prenom", e.target.value);
              }}
              placeholder="Prénom"
              className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
          </label>
        </div>
        {errors.prenom && (
          <p className="text-red-500 text-sm">{errors.prenom}</p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <p>Tléphone* :</p>
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
              required
            />
          </label>
        </div>
        {errors.telephone && (
          <p className="text-red-500 text-sm">{errors.telephone}</p>
        )}
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
        {isLoading ? "Envoi en cours..." : "Recevoir ma simulation"}
      </button>
    </>
  );
};

export default Contact;
