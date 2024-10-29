import HeroSection from "@/components/home/HeroSection";
import Simulator from "@/components/home/simulator/Simulator";
import Image from "next/image";
import arrow from "@/images/zeta-arrow.svg";
import satisfaction from "@/images/zeta-satisfaction.svg";
import economies from "@/images/zeta-economies.svg";
import mensualites from "@/images/zeta-mensualites.svg";
import after from "@/images/diagram-after.svg";
import before from "@/images/diagram-before.svg";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Simulator />
      <article className="p-4 flex flex-col pb-10">
        <h2 className="text-xl font-semibold uppercase py-5">
          <span className="text-secondary ">Zeta</span> Finance, votre
          regroupement de crédits
        </h2>
        <aside className="flex flex-col bg-gradient-card-darkest rounded-xl p-4 text-textColor space-y-4">
          <h3 className="text-lg uppercase font-semibold">Qui sommes-nous ?</h3>
          <p className="font-light">
            ZETA FINANCE est votre société spécialisée dans le regroupement de
            crédits.
          </p>
          <p className="font-light">
            Notre mission est de négocier à votre place les meilleures
            conditions (taux, durée, montage financier…) en mettant ces
            établissements en concurrence, nous vous proposerons la solution la
            plus adaptée à votre situation financière.
          </p>
        </aside>
        <div className="flex items-baseline gap-2 pt-5">
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
        <aside className="flex items-center justify-between mt-5">
          <div className="bg-gradient-card-light rounded-xl p-2 flex flex-col items-center text-center justify-center w-28 h-40">
            <Image src={satisfaction} className="w-14" alt="" />
            <p className="text-xs uppercase text-textColor">
              <span className="font-semibold text-3xl">1K</span>
              <br />
              de clients satisfaits
            </p>
          </div>
          <div className="bg-gradient-card-light rounded-xl p-4 flex flex-col items-center text-center justify-center w-28 h-40">
            <Image src={economies} className="w-14" alt="" />
            <p className="text-xs uppercase text-textColor">
              <span className="font-semibold text-3xl">250 €</span>
              <br />
              économisés en moyenne
            </p>
          </div>
          <div className="bg-gradient-card-light rounded-xl p-4 flex flex-col items-center text-center justify-center w-28 h-40">
            <Image src={mensualites} className="w-14" alt="" />
            <p className="text-sm uppercase text-textColor">
              <span className="font-semibold text-3xl">60%</span>
              <br />
              mensualité réduite
            </p>
          </div>
        </aside>
        <h2 className="text-xl font-semibold uppercase py-5">
          Objectif : <span className="text-secondary">réduire</span> ses
          mensualités
        </h2>
        <p>Pour qui ?</p>
        <aside className="flex flex-col gap-2 bg-gradient-button-dark rounded-xl p-4 ">
          <div className="flex items-center text-sm justify-between">
            <ul className="uppercase text-textColor font-light flex flex-col gap-2">
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Locataire</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Propriétaire</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Hébergé</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Salarié</p>
              </li>
            </ul>
            <ul className="uppercase text-textColor font-light flex flex-col gap-2">
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Retraité</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>CDI/CDD/INTERIM</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Fonctionnaire</p>
              </li>
              <li className="flex items-center gap-2 w-fit">
                <svg
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.786911 12.2728C0.487534 12.1605 0.312898 11.8798 0.113314 11.6271C-0.0488483 11.4166 -0.0239003 11.0937 0.113314 10.8832C0.150736 10.8271 0.188158 10.785 0.22558 10.7428C1.44803 9.36731 2.65801 8.00581 3.88047 6.63028C3.90541 6.60221 3.94284 6.57414 3.98026 6.54607C3.93036 6.48992 3.90541 6.46185 3.88047 6.43378C2.65801 5.05825 1.42309 3.66868 0.200632 2.29314C0.00104777 2.0405 -0.0737963 1.74574 0.0883659 1.49309C0.238054 1.26851 0.425164 1.05797 0.624748 0.889541C0.811859 0.721108 1.06134 0.777252 1.24845 0.945685C1.2734 0.973757 1.29834 1.00183 1.32329 1.0299C2.8077 2.70019 4.29211 4.37048 5.77652 6.04077C6.00105 6.29342 6.05094 6.58817 5.90126 6.85486C5.86383 6.92504 5.81394 6.98118 5.76404 7.03733C4.27963 8.70762 2.79523 10.3779 1.31082 12.0482C1.2235 12.1464 1.09876 12.2026 0.986495 12.2868H0.761963L0.786911 12.2728Z"
                    fill="#FFFFFF"
                  />
                </svg>
                <p>Artisan, commerçant</p>
              </li>
            </ul>
          </div>
          <div className="flex w-full items-center justify-between gap-2 text-textColor text-sm pt-6">
            <div className="flex flex-col items-center">
              <p className="text-center text-nowrap pb-4">Avant rachat de crédits</p>
              <Image src={before} alt="graphique avant rachat de crédits"/>
            </div>
            <div className="divider divider-horizontal before:bg-secondary before:w-[1px] after:bg-secondary after:w-[1px]"></div>
            <div className="flex flex-col items-center">
              <p className="text-center text-nowrap pb-4">Après rachat de crédits</p>
              <Image src={after} alt="graphique après rachat de crédits" />
            </div>
          </div>
            <div className="flex items-center gap-5 text-textColor text-sm pt-6">
              <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-secondary rounded-sm"></div>
              <p>Mensualités crédits</p>
              </div>
              <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#D9D9D9]  rounded-sm"></div>
              <p>Reste à vivres</p>
              </div>
            </div>
        </aside>
      </article>
    </main>
  );
}
