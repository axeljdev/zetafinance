"use client";

import { useState } from "react";
import Consommation from "./Consommation";
import Hypothecaire from "./Hypothecaire";

type TabType = "consommation" | "hypothecaire";

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const TabButton = ({ isActive, onClick, children }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`btn flex-1 bg-transparent hover:bg-secondary/50 border-none rounded-none text-textColor transition-all uppercase duration-300 text-base relative ${
      isActive
        ? "bg-primary/75 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-secondary"
        : ""
    }`}
  >
    {children}
  </button>
);

const MobileDropdown = ({
  activeTab,
  handleTabChange,
}: {
  activeTab: TabType;
  handleTabChange: (tab: TabType) => void;
}) => (
  <div className="dropdown w-full max-w-xs uppercase lg:hidden">
    <div
      tabIndex={0}
      role="button"
      className="btn w-full m-1 bg-transparent hover:bg-secondary/50 border-none text-textColor transition-all duration-300 focus-visible:focus-ring focus-visible:ring-offset-2"
    >
      {activeTab === "consommation" ? "Rachat consommation" : "Rachat hypothècaire"}
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
      <li>
        <p className="hover:bg-secondary/50 duration-300" onClick={() => handleTabChange("consommation")}>
          Rachat consommation
        </p>
      </li>
      <li>
        <p className="hover:bg-secondary/50 duration-300" onClick={() => handleTabChange("hypothecaire")}>
          Rachat hypothècaire
        </p>
      </li>
    </ul>
  </div>
);

function Simulator() {
  const [activeTab, setActiveTab] = useState<TabType>("consommation");

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    (document.activeElement as HTMLElement)?.blur();
  };

  return (
    <section className="bg-gradient-button-dark rounded-t-xl p-4 flex flex-col items-center pb-10 lg:items-start lg:p-12 lg:w-2/3 lg:rounded-3xl lg:mx-auto lg:mt-[-2rem]">
      <h2 className="text-xl lg:text-2xl font-semibold text-textColor uppercase">
        Étude <span className="text-secondary">gratuite</span> et sans engagement,&nbsp; sur simple appel
      </h2>
      <h2 className="text-lg lg:text-xl font-medium text-textColor uppercase">
        ou faites une simulation immédiate :
      </h2>

      <MobileDropdown activeTab={activeTab} handleTabChange={handleTabChange} />

      <div className="hidden lg:flex w-full uppercase pt-4">
        <TabButton isActive={activeTab === "consommation"} onClick={() => handleTabChange("consommation")}>
          Rachat consommation
        </TabButton>
        <TabButton isActive={activeTab === "hypothecaire"} onClick={() => handleTabChange("hypothecaire")}>
          Rachat hypothècaire
        </TabButton>
      </div>

      <div className="mt-4 text-textColor w-full">
        {activeTab === "consommation" && <Consommation />}
        {activeTab === "hypothecaire" && <Hypothecaire />}
      </div>
    </section>
  );
}

export default Simulator;
