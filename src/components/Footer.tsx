import Image from "next/image";
import logo from "@/images/logo-zeta-white.svg";
import Link from "next/link";
import arrowRight from "@/images/zeta-arrow.svg";
import background from "@/images/zeta-footer-dsktp.png";
import ContactInfo from "./Footer/ContactInfo";
import FooterLinks from "./Footer/FooterLinks";

const FooterCTA = () => (
  <div className="relative flex lg:justify-end">
    <div className="w-4/5 hidden lg:block lg:absolute lg:left-0">
      <Image src={background} alt="background" className="h-[21.25rem] w-full object-cover" />
    </div>
    <div className="w-full lg:w-[33rem] xl:w-[36rem]">
      <div className="bg-gradient-footer-lightest h-fit absolute uppercase p-4 left-0 w-full text-textColor clip-path-footer lg:relative lg:h-[21.25rem] lg:p-12 lg:flex lg:flex-col lg:pl-24 lg:justify-center lg:items-start lg:bg-gradient-footer-lightest-revert">
        <h2 className="text-xl font-semibold">
          Contrôlez vos dépenses et boostez votre épargne
        </h2>
        <p className="text-base font-light pt-2">
          Gérez vos dépenses et augmentez votre épargne en quelques secondes
        </p>
        <button className="rounded-full border my-6 border-textColor text-textColor hover:bg-textColor hover:text-background hover:text-primary transition-all duration-300 px-6 py-2">
          En savoir plus
        </button>
      </div>
    </div>
  </div>
);

const LegalLinks = () => (
  <ul className="flex gap-2 lg:gap-10 pt-6 uppercase text-xs font-semibold w-full justify-center pr-20">
    {['Mentions légales', 'Procédure RGPD'].map((text) => (
      <li key={text} className="flex items-center gap-2 hoverRed">
        <Image src={arrowRight} alt="arrow right" className="w-2 h-2" />
        <Link href="/">{text}</Link>
      </li>
    ))}
  </ul>
);

const MainContent = () => (
  <div className="flex flex-col items-center lg:items-center lg:flex-row lg:justify-between w-full">
    <Image src={logo} alt="logo" className="pb-4 lg:hidden" />
    <ContactInfo />
    <Image src={logo} alt="logo" className="pb-4 hidden lg:block" />
    <div className="divider before:bg-secondary before:w-[1px] after:bg-secondary after:w-[1px] px-24 lg:hidden"></div>
    <FooterLinks />
  </div>
);

function Footer() {
  return (
    <footer>
      <FooterCTA />
      <div className="bg-gradient-card-darkest text-textColor p-6 pt-64 lg:pt-10 flex flex-col justify-center items-center lg:px-60 font-semibold">
        <MainContent />
        <LegalLinks />
      </div>
      <div className="bg-gradient-button-light text-textColor w-full p-2 text-center">
        Tous droits réservés © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export default Footer;
