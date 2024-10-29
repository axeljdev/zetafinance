import Image from "next/image";
import logo from "@/images/logo-zeta-white.svg";
import Link from "next/link";
import arrowRight from "@/images/zeta-arrow.svg";

function Footer() {
  return (
    <footer>
      <div className="bg-gradient-footer-lightest h-fit absolute uppercase p-4 left-0 w-full text-textColor clip-path-footer">
        <h3 className="text-xl font-semibold">
          Contrôlez vos dépenses et boostez votre épargne
        </h3>
        <p className="text-base font-light pt-2">
          Gérez vos dépenses et augmentez votre épargne en quelques secondes
        </p>
        <button className="rounded-full border my-6 border-textColor text-textColor hover:bg-textColor hover:text-background hover:text-primary transition-all duration-300 px-6 py-2">
          En savoir plus
        </button>
      </div>
      <div className="bg-gradient-card-darkest text-textColor p-6 pt-64 flex flex-col justify-center items-center font-semibold">
        <Image src={logo} alt="logo" className="pb-4" />
        <p className="uppercase">Nous contacter</p>
        <a href="tel:0972606443" className="hoverRed">09 72 60 64 43</a>
        <a href="tel:0769762636" className="hoverRed">07 69 76 26 36</a>
        <a href="mailto:contact@zetafinance.fr" className="hoverRed">contact@zetafinance.fr</a>
        <div className="divider before:bg-secondary before:w-[1px] after:bg-secondary after:w-[1px] px-24"></div>
        <ul className="flex flex-col gap-2 uppercase font-semibold">
          <li className="flex items-center gap-2 hoverRed">
            <Image src={arrowRight} alt="arrow right" className="w-4 h-4" />
            <Link href="/">Les étapes et les délais</Link>
          </li>
          <li className="flex items-center gap-2 hoverRed">
            <Image src={arrowRight} alt="arrow right" className="w-4 h-4" />
            <Link href="/">Justificatifs</Link>
          </li>
          <li className="flex items-center gap-2 hoverRed">
            <Image src={arrowRight} alt="arrow right" className="w-4 h-4" />
            <Link href="/">Contactez-nous</Link>
          </li>
        </ul>
        <ul className="flex gap-2 uppercase text-xs pt-6 font-semibold">
          <li className="flex items-center gap-2 hoverRed">
            <Image src={arrowRight} alt="arrow right" className="w-2 h-2" />
            <Link href="/">Mentions légales</Link>
          </li>
          <li className="flex items-center gap-2 hoverRed">
            <Image src={arrowRight} alt="arrow right" className="w-2 h-2" />
            <Link href="/">Procédure RGPD</Link>
          </li>
        </ul>
      </div>
      <div className="bg-gradient-button-light text-textColor w-full p-2 text-center">
        Tous droits réservés © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
