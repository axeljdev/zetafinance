"use client";

import { useState } from "react";
import { PMT } from "../../../utils/calculations";
import { FaCarAlt, FaCaravan, FaHammer, FaQuestion } from "react-icons/fa";

const typesProjets = [
  { id: "vehicule", label: "Voiture et moto", image: <FaCarAlt /> },
  { id: "travaux", label: "Travaux et déco", image: <FaHammer /> },
  { id: "loisirs", label: "Véhicule de loisir", image: <FaCaravan /> },
  { id: "divers", label: "Projet divers", image: <FaQuestion /> },
];

function Classique() {
  const [montant, setMontant] = useState<number | undefined>(undefined);
  const [duree, setDuree] = useState<number | undefined>(undefined);
  const [type, setType] = useState<string>("");
  const [mensualite, setMensualite] = useState<number | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  const calculerMensualite = () => {
    if (!montant || !duree) {
      setErrorMessage("Veuillez remplir tous les champs.");
      return;
    }

    if (!type) {
      setErrorMessage("Veuillez sélectionner un type de projet.");
      return;
    }

    const taeg = 0.07; // 7%
    const taegMensuel = taeg / 12;
    const mensualiteCalculee = Math.abs(PMT(taegMensuel, duree, -montant));
    setMensualite(Math.round(mensualiteCalculee * 100) / 100);
    setErrorMessage("");
    setShowModal(true);
  };

  const formatNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center lg:pt-5">
        <p className="lg:text-lg font-medium">Montant demandé</p>
        <div className="flex gap-4 justify-center pt-3 w-full">
          <input
            type="range"
            min={1000}
            max={50000}
            step={100}
            value={montant || 25000}
            onChange={(e) => setMontant(parseInt(e.target.value))}
            className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
          />
          <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="number"
              min="1000"
              max="50000"
              placeholder="25000"
              value={montant || ""}
              onChange={(e) =>
                setMontant(Math.max(1000, parseInt(e.target.value)))
              }
              className="grow w-20 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
            €
          </label>
        </div>

        <p className="lg:text-lg font-medium">Durée souhaitée</p>
        <div className="flex gap-4 justify-center pt-3 w-full">
          <input
            type="range"
            min={6}
            max={84}
            value={duree || 44}
            onChange={(e) => setDuree(parseInt(e.target.value))}
            className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
          />
          <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="number"
              min="6"
              max="84"
              placeholder="48"
              value={duree || ""}
              onChange={(e) => setDuree(Math.max(6, parseInt(e.target.value)))}
              className="grow w-14 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
            mois
          </label>
        </div>

        <p className="lg:text-lg font-medium">Type de projet</p>
        <div className="flex gap-4 justify-center my-4 lg:my-5 lg:pb-5 lg:gap-10 flex-wrap">
          {typesProjets.map((projet) => (
            <label
              key={projet.id}
              className={`btn text-textColor rounded-full hover:bg-gradient-button-light hover:border-none ${
                type === projet.id
                  ? "bg-gradient-button-light border-none"
                  : "bg-transparent"
              }`}
            >
              <input
                type="radio"
                name="type"
                className="hidden"
                checked={type === projet.id}
                onChange={() => setType(projet.id)}
              />
              {projet.image}
              {projet.label}
            </label>
          ))}
        </div>

        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}

        <button
          type="button"
          onClick={calculerMensualite}
          className="btn mt-10 w-[94%] border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        >
          Simuler
        </button>
      </form>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="bg-gradient-button-dark rounded-xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-white hover:text-secondary"
            >
              ✕
            </button>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Mensualité estimée :</h3>
              <p className="text-lg font-semibold"></p>
              <p className="text-3xl font-bold my-2">
                {formatNumber(mensualite || 0)} €/mois*
              </p>
              <p className="text-xs italic">
                *Hors assurance emprunteurs facultative
              </p>
              <ul className="text-md mb-6 mt-4 flex flex-col gap-2 justify-center items-center">
                <li>Montant emprunté : {formatNumber(montant || 0)} €</li>
                <li className="font-black">Durée : {duree} mois</li>
                <li>TAEG fixe : 7%</li>
              </ul>
              <p className="text-base mb-4">
                Montant total dû :{" "}
                {formatNumber(
                  Math.round((mensualite ?? 0) * (duree ?? 0) * 100) / 100
                )}{" "}
                €
              </p>
              <p className="text-xs italic">
                *Assurance Emprunteurs facultative
              </p>
              <p className="text-xs italic">
                Assurez-vous contre les risques de Décès, Invalidité, Maladie
                L'assurance prend en charge le solde de votre crédit ou vos
                charge le solde de votre crédit ou vos mensualités : simulation
                à faire lors de l'étude de votre dossier
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="/contact"
                  className="btn mt-6 border-none bg-gradient-button-light uppercase text-textColor rounded-full px-8"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Classique;
