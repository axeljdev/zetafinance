import Image from "next/image";
import immo from "@/images/immo.svg"
import conso from "@/images/conso.svg"
import auto from "@/images/auto.svg"
import travaux from "@/images/travaux.svg"
import renouvelable from "@/images/renouvelable.svg"
import bancaire from "@/images/bancaire.svg"
import dettes from "@/images/dettes.svg"
import familiales from "@/images/familiales.svg"
import tresorerie from "@/images/tresorerie.svg"


function Bento() {
  return (
    <ul className="grid grid-cols-3 gap-2 p-4">
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={immo} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Crédit immobilier</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={conso} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Crédit consommation</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={auto} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Crédit voiture</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={travaux} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Crédit travaux</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={renouvelable} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Crédit renouvelables</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={bancaire} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Découvert bancaire</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={dettes} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Dettes fiscales</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={familiales} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Dettes personnelles, familiales</p>
        </li>
        <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-base">
          <Image src={tresorerie} alt="icon" className="bg-gradient-card-darkest rounded-lg p-3 w-20 h-20" />
          <p className="uppercase text-center">Trésorerie</p>
        </li>
    </ul>
  )
}

export default Bento