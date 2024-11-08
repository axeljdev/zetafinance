"use client";

import { useState } from "react";
import Modal from "./Modal";

function Consommation() {
  const [revenu, setRevenue] = useState<number | undefined>(undefined);
  const [loyer, setLoyer] = useState<number | undefined>(undefined);
  const [type, setType] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleNextStep = () => {
    if (revenu === undefined || revenu <= 0) {
      setErrorMessage("Veuillez remplir le champ de revenu.");
      return;
    }

    if (type === "locataire" && (loyer === undefined || loyer <= 0)) {
      setErrorMessage("Veuillez remplir le champ de loyer.");
      return;
    }

    setErrorMessage("");
    document.getElementById("my_modal_7")?.click();
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center lg:pt-5">
        <p className="lg:text-lg font-medium">Revenu mensuel du foyer</p>
        <div className="flex gap-4 justify-center pt-3 w-full">
          <input
            type="range"
            min={0}
            max={10000}
            value={revenu || ""}
            onChange={(e) => setRevenue(parseInt(e.target.value))}
            className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
            required
          />
          <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
            <input
              type="number"
              min="0"
              placeholder="1400"
              value={revenu || ""}
              onChange={(e) =>
                setRevenue(Math.max(0, parseInt(e.target.value)))
              }
              className="grow w-14 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
              required
            />
            €/mois
          </label>
        </div>
        <p className="lg:text-lg font-medium">Vous êtes :</p>
        <div className="flex gap-4 justify-center my-4 lg:my-5 lg:pb-5 lg:gap-10">
          <label
            className={`btn text-textColor rounded-full hover:bg-gradient-button-light hover:border-none ${
              type === "locataire"
                ? "bg-gradient-button-light border-none"
                : "bg-transparent"
            }`}
          >
            <input
              type="radio"
              name="type"
              className="hidden"
              checked={type === "locataire"}
              onChange={() => {
                setType("locataire");
                setSelectedType("locataire");
              }}
            />
            Locataire
          </label>
          <label
            className={`btn text-textColor rounded-full hover:bg-gradient-button-light hover:border-none ${
              type === "proprietaire"
                ? "bg-gradient-button-light border-none"
                : "bg-transparent"
            }`}
          >
            <input
              type="radio"
              name="type"
              className="hidden"
              checked={type === "proprietaire"}
              onChange={() => {
                setType("proprietaire");
                setSelectedType("proprietaire");
              }}
            />
            Propriétaire
          </label>
          <label
            className={`btn text-textColor rounded-full hover:bg-gradient-button-light hover:border-none ${
              type === "heberge"
                ? "btn bg-gradient-button-light border-none"
                : "btn bg-transparent"
            }`}
          >
            <input
              type="radio"
              name="type"
              className="hidden"
              checked={type === "heberge"}
              onChange={() => {
                setType("heberge");
                setSelectedType("heberge");
              }}
            />
            Hébergé
          </label>
        </div>
        {type === "locataire" && (
          <>
            <p>Montant de votre loyer</p>
            <div className="flex gap-4 justify-center pt-3 w-full">
              <input
                type="range"
                min={0}
                max={10000}
                value={loyer || ""}
                onChange={(e) => setLoyer(parseInt(e.target.value))}
                className="range range-xs w-3/4 mt-3 mb-7 [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
              />
              <label className="input input-bordered flex items-center gap-1 text-primary focus-within:outline-secondary focus-within:outline-1">
                <input
                  type="number"
                  min="0"
                  placeholder="600"
                  value={loyer || ""}
                  onChange={(e) =>
                    setLoyer(Math.max(0, parseInt(e.target.value)))
                  }
                  className="grow w-14 h-10 text-primary text-right placeholder:text-gray-400 placeholder:opacity-70"
                  required
                />
                €/mois
              </label>
            </div>
          </>
        )}
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
        <button
          type="button"
          onClick={handleNextStep}
          className="btn mt-10 w-[94%] border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        >
          Passez à l&apos;étape suivante
        </button>
        <Modal selectedType={selectedType} revenu={revenu} loyer={loyer} />
      </form>
    </>
  );
}

export default Consommation;
