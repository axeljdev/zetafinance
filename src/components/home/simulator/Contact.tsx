import { useState } from "react";
import { ContactProps } from "@/types/simulator";

const Contact: React.FC<ContactProps> = ({ onFinish, setFormData }) => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    await setFormData((prevData) => ({
      ...prevData,
      nom,
      prenom,
      telephone,
      email,
      isSubmitted: true,
    }));
    onFinish();
  };

  return (
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
      <div className="flex items-center justify-between">
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
      <div className="flex items-center justify-between">
        <p>Adresse e-mail* :</p>
        <label className="input input-bordered h-10 flex items-center gap-1 text-sm text-primary focus-within:outline-secondary focus-within:outline-1">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@domaine.com"
            className="grow text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
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
  );
};

export default Contact;
