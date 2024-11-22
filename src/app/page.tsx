import HeroSection from "@/components/home/HeroSectionHome";
import Simulator from "@/components/home/simulator/Simulator";
import Image from "next/image";
import arrow from "@/images/zeta-arrow.svg";
import satisfaction from "@/images/zeta-satisfaction.svg";
import economies from "@/images/zeta-economies.svg";
import mensualites from "@/images/zeta-mensualites.svg";
import after from "@/images/diagram-after.svg";
import before from "@/images/diagram-before.svg";
import satisfactionpng from "@/images/satisfaction.png";
import economiespng from "@/images/economies.png";
import mensualitespng from "@/images/mensualites.png";
import RoleList from "@/components/home/info-section/RoleList";
import StatisticsCard from "@/components/home/info-section/StatisticsCard";
import DiagramSection from "@/components/home/info-section/DiagramSection";
import { backgrounds } from "@/app/constants/backgrounds";

export default function Home() {
  const style = {
    backgroundImage: backgrounds.hero,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <main>
      <HeroSection />
      <Simulator />
      <article
        style={style}
        className="p-4 xl:px-52 lg:mt-12 flex flex-col pb-10 2xl:px-96 3xl:px-[30rem]"
      >
        <h2 className="text-2xl font-semibold uppercase py-5">
          <span className="text-secondary">Zeta</span> Finance, votre
          regroupement de crédits
        </h2>
        <div className="flex flex-col lg:flex-row gap-4">
          <aside className="flex flex-col bg-gradient-card-darkest lg:h-fit lg:w-1/2 rounded-xl p-4 text-textColor space-y-4">
            <h3 className="text-lg uppercase font-semibold relative pb-5 after:absolute after:top-9 after:left-0 after:w-10 after:h-[5px] after:bg-secondary">
              Qui sommes-nous ?
            </h3>
            <p className="font-light">
              ZETA FINANCE est votre société spécialisée dans le regroupement de
              crédits.
            </p>
            <p className="font-light">
              Notre mission est de négocier à votre place les meilleures
              conditions (taux, durée, montage financier…) en mettant ces
              établissements en concurrence, nous vous proposerons la solution
              la plus adaptée à votre situation financière.
            </p>
          </aside>
          <div className="divider hidden divider-horizontal before:bg-secondary before:w-[1px] after:bg-secondary after:w-[1px] lg:flex"></div>
          <div className="flex flex-col gap-4 lg:w-1/2">
            <div className="flex items-baseline gap-2 pt-5 lg:pt-0">
              <Image src={arrow} alt="" />
              <p className="uppercase">Un interlocuteur unique à vos cotés</p>
            </div>
            <div className="flex items-baseline gap-2 pt-2">
              <Image src={arrow} alt="" />
              <p className="uppercase">
                Proposer l&apos;offre la plus adaptée à votre situation
              </p>
            </div>
            <div className="flex items-baseline gap-2 py-2">
              <Image src={arrow} alt="" />
              <p className="uppercase ">
                Une étude de faisabilité immédiate sur simple appel
              </p>
            </div>
            <div className="flex items-baseline gap-2">
              <Image src={arrow} alt="" />
              <p className="uppercase ">
                Une offre de regroupement de crédits aux meilleurs conditions
              </p>
            </div>
          </div>
        </div>
        <aside className="flex items-center justify-between lg:gap-10 mt-5 xl:mt-10">
          <StatisticsCard
            icon={satisfaction}
            statistic="1K"
            label="de clients satisfaits"
            image={satisfactionpng}
          />
          <StatisticsCard
            icon={economies}
            statistic="250 €"
            label="économisés en moyenne"
            image={economiespng}
          />
          <StatisticsCard
            icon={mensualites}
            statistic="60%"
            label="mensualité réduite"
            image={mensualitespng}
          />
        </aside>
      </article>
      <div className="p-4 xl:px-52 flex flex-col pb-10 2xl:px-96">
        <h2 className="text-xl font-semibold uppercase py-5 lg:mt-10 lg:text-2xl">
          Objectif : <span className="text-secondary">réduire</span> ses
          mensualités
        </h2>
        <p className="uppercase lg:text-xl relative pb-6 after:absolute after:top-9 after:left-0 after:w-10 after:h-[5px] after:bg-secondary">
          Pour qui ?
        </p>
        <aside className="flex flex-col lg:flex-row gap-2 bg-gradient-button-dark rounded-xl p-4 lg:mt-5 lg:p-10">
          <RoleList />
          <DiagramSection before={before} after={after} />
        </aside>
      </div>
    </main>
  );
}
