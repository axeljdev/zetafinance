"use client";

import Consommation from "./Consommation";

function Simulator() {
  return (
    <section className="bg-gradient-button-dark rounded-t-xl p-4 flex flex-col items-center pb-10 lg:items-start lg:p-12 lg:rounded-3xl lg:mx-52 lg:mt-[-2rem] 2xl:mx-96">
      <h2 className="text-xl lg:text-2xl font-semibold text-textColor uppercase">
        Étude <span className="text-secondary">gratuite</span> et sans
        engagement,&nbsp; sur simple appel
      </h2>
      <h2 className="text-lg lg:text-xl font-medium text-textColor uppercase">
        ou faites une simulation immédiate :
      </h2>

      <div className="mt-4 text-textColor w-full">
        <Consommation />
      </div>
    </section>
  );
}

export default Simulator;
