import { useState } from "react";
import { CustomFormData } from "./Modal";

type ContactProps = {
  onFinish: () => void;
  setFormData: React.Dispatch<React.SetStateAction<CustomFormData>>;
};

function Contact({ onFinish, setFormData }: ContactProps) {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setFormData((prevData) => ({
      ...prevData,
      nom,
      prenom,
      telephone,
      email,
      isSubmitted: true,
    }));
    setIsSubmitted(true);
    onFinish();
  };

  return (
    <>
      {!isSubmitted ? (
        <>
          <div className="flex items-center justify-between">
            <p>Nom* :</p>
            <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
              <input
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                placeholder="Nom"
                className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <p>Prénom* :</p>
            <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
              <input
                type="text"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                placeholder="Prénom"
                className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-around">
            <p>Téléphone* :</p>
            <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
              <input
                type="tel"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                placeholder="00 00 00 00 00"
                className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
                required
              />
            </label>
          </div>
          <div className="flex items-center justify-around">
            <p>Adresse e-mail* :</p>
            <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="exemple@domaine.com"
                className="grow w-32 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
                required
              />
            </label>
          </div>
          <button
            type="button"
            className="btn mt-4 border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
            onClick={handleSubmit}
          >
            Recevoir ma simulation
          </button>
        </>
      ) : (
        <p className="text-center text-lg mt-4">
          Merci ! Vous allez bientôt recevoir un email avec votre simulation.
        </p>
      )}
    </>
  );
}

export default Contact;
