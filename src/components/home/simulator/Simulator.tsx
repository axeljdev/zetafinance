"use client";

import { useState } from "react";
import Consommation from "./Consommation";
import Classique from "./Classique";

function Simulator() {
  const [activeSimulator, setActiveSimulator] = useState<
    "consommation" | "classique"
  >("consommation");

  return (
    <section className="bg-gradient-button-dark rounded-t-xl p-4 flex flex-col items-center pb-10 lg:items-start lg:p-12 lg:rounded-3xl lg:mx-52 lg:mt-[-2rem] 2xl:mx-96 3xl:mx-[30rem]">
      <h2 className="text-xl lg:text-2xl font-semibold text-textColor uppercase">
        Étude <span className="text-secondary">gratuite</span> et sans
        engagement,&nbsp; sur simple appel
      </h2>
      <h2 className="text-lg lg:text-xl font-medium text-textColor uppercase">
        ou faites une simulation immédiate :
      </h2>

      <div className="flex mt-4 mb-6 w-full justify-center">
        <button
          onClick={() => setActiveSimulator("consommation")}
          className={`py-4 w-1/2 hover:cursor-pointer ${
            activeSimulator === "consommation"
              ? "border-b-2 border-secondary text-white bg-gray-800/20"
              : "text-white hover:text-secondary hover:border-b-2 hover:bg-gray-800/20"
          }`}
        >
          Rachat de crédit
        </button>
        <button
          onClick={() => setActiveSimulator("classique")}
          className={`py-4 w-1/2 hover:cursor-pointer ${
            activeSimulator === "classique"
              ? "border-b-2 border-secondary text-white bg-gray-800/20"
              : "text-white hover:text-secondary hover:border-b-2 hover:bg-gray-800/20"
          }`}
        >
          Prêt Classique
        </button>
      </div>

      <div className="mt-4 text-textColor w-full">
        {activeSimulator === "consommation" ? <Consommation /> : <Classique />}
      </div>
    </section>
  );
}

export default Simulator;
