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
    <ul className="grid grid-cols-3 gap-2 p-4 lg:w-2/3">
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit xl:pb-6">
        <Image 
          src={immo} 
          alt="icon" 
          className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" 
        />
        <p className="uppercase text-center lg:w-32">Crédit immobilier</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit xl:pb-6">
        <Image src={conso} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Crédit consommation</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit xl:pb-6">
        <Image src={auto} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Crédit voiture</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit xl:pb-6">
        <Image src={travaux} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Crédit travaux</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit">
        <Image src={renouvelable} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Crédit renouvelables</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit">
        <Image src={bancaire} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Découvert bancaire</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit">
        <Image src={dettes} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Dettes fiscales</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit">
        <Image src={familiales} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Dettes personnelles, familiales</p>
      </li>
      <li className="flex flex-col items-center gap-2 text-xs font-semibold lg:text-sm lg:w-fit">
        <Image src={tresorerie} alt="icon" className="bg-gradient-card-darkest rounded-xl p-4 w-20 h-20 lg:w-36 lg:h-36" />
        <p className="uppercase text-center lg:w-32">Trésorerie</p>
      </li>
    </ul>
  )
}

export default Bento