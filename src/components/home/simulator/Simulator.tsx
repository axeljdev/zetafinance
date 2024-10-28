"use client";

import { useState } from "react";
import Consommation from "./Consommation";
import Hypothecaire from "./Hypothecaire";

function Simulator() {
  const [activeTab, setActiveTab] = useState("consommation");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // Ferme le dropdown en retirant le focus
    const element = document.activeElement as HTMLElement;
    if (element) {
      element.blur();
    }
  };

  return (
    <section className="bg-gradient-button-dark rounded-t-xl p-4 flex flex-col items-center pb-10">
      <h2 className="text-xl font-semibold text-textColor uppercase">
        Étude gratuite et sans engagement,&nbsp; sur simple appel
      </h2>
      <h2 className="text-lg font-medium text-textColor uppercase">
        ou faites une simulation immédiate :
      </h2>
      <div className="dropdown w-full max-w-xs uppercase">
        <div tabIndex={0} role="button" className="btn w-full m-1 bg-transparent border-none text-textColor">
          {activeTab === "consommation" ? "Rachat consommation" : "Rachat hypothècaire"}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full ">
          <li><p className="hover:border hover:border-secondary" onClick={() => handleTabChange("consommation")}>Rachat consommation</p></li>
          <li><p className="hover:border hover:border-secondary" onClick={() => handleTabChange("hypothecaire")}>Rachat hypothècaire</p></li>
        </ul>
      </div>

      <div className="mt-4 text-textColor">
        {activeTab === "consommation" && (
          <Consommation />
        )}
        {activeTab === "hypothecaire" && (
          <Hypothecaire />
        )}
      </div>
    </section>
  );
}

export default Simulator;
