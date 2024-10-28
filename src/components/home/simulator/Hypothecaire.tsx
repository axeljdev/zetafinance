"use client";

import Link from "next/link";
import { useState } from "react";

function Hypothecaire() {
    const [revenu, setRevenue] = useState(40);
    const [loyer, setLoyer] = useState(40);
    const [type, setType] = useState("");


  return (
    <>
      <form>
        <p>Revenu mensuel du foyer</p>
        <div className="flex gap-4 justify-center pt-3">
          <input
            type="range"
            min={0}
            max={10000}
            value={revenu}
            onChange={(e) => setRevenue(parseInt(e.target.value))}
            className="range range-xs w-full mt-3 mb-7 max-w-xs [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
          />
          <input
            type="number"
            value={revenu}
            onChange={(e) => setRevenue(parseInt(e.target.value))}
            className="input input-bordered w-20 h-10 max-w-xs text-primary"
          />
        </div>
        <p>Vous êtes :</p>
        <div className="flex gap-4 justify-center my-4">
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
              onChange={() => setType("locataire")}
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
              onChange={() => setType("proprietaire")}
            />
            Propriétaire
          </label>
          <label
            className={`btn text-textColor rounded-full ${
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
              onChange={() => setType("heberge")}
            />
            Hébergé
          </label>
        </div>
        <p>Montant de votre loyer</p>
        <div className="flex gap-4 justify-center pt-3">
          <input
            type="range"
            min={0}
            max={10000}
            value={loyer}
            onChange={(e) => setLoyer(parseInt(e.target.value))}
            className="range range-xs w-full mt-3 mb-7 max-w-xs [--range-shdw:#db0505] [--range-shdw:[&::-webkit-slider-runnable-track]:bg-gradient-button-light] [&::-webkit-slider-runnable-track]:bg-gray-300"
          />
          <input
            type="number"
            value={loyer}
            onChange={(e) => setLoyer(parseInt(e.target.value))}
            className="input input-bordered w-20 h-10 max-w-xs text-primary"
          />
        </div>
        <Link
          href="/"
          className=" btn mt-5 w-full border-none bg-gradient-button-light uppercase text-textColor rounded-full bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        >
          Passez à l&apos;étape suivante
        </Link>
      </form>
    </>
  );
}

export default Hypothecaire;
