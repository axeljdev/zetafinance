"use client";

import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import logo from "@/images/logo-zeta-finance-white-bg.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import bgEtapesDelais from "@/images/bg-etapes-et-delais.png";
import bgRegroupementCredit from "@/images/bg-regroupement-credit.png";

function Hero({ title, bg }: { title: string; bg: string }) {
  const pathname = usePathname();
  const pageName = pathname.split("/").pop() || "Accueil";
  const formattedPageName =
    pageName === "regroupement-credit"
      ? "Regroupement de crédit"
      : pageName === "etapes-et-delais"
      ? "Les étapes et délais"
      : pageName.charAt(0).toUpperCase() + pageName.slice(1);

  console.log(bg);

  const getBackgroundImage = (bgType: string) => {
    switch (bgType) {
      case "hero-section-regroupement":
        return bgRegroupementCredit.src;
      case "hero-section-etapes-et-delais":
        return bgEtapesDelais.src;
      default:
        return bgEtapesDelais.src;
    }
  };

  const style = {
    backgroundImage: `url(${getBackgroundImage(bg)})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <header
      style={style}
      className={`flex flex-col items-center justify-center pt-10 lg:pt-40 lg:pb-24 pb-10 text-textColor`}
    >
      <Image
        src={logo}
        alt="logo"
        width={150}
        height={73}
        className="w-40 lg:w-72 pb-10 animate-fade-down animate-ease-in-out"
      />
      <h1 className="text-2xl lg:text-4xl pb-5 font-bold text-center uppercase lg:pb-10 animate-fade-down animate-ease-in-out">
        {title}
      </h1>
      <ul className="flex items-center justify-center lg:text-xl gap-2 animate-fade-down animate-ease-in-out">
        <li>
          <Link
            href="/"
            className="hover:underline-offset-4 hover:underline text-secondary"
          >
            Accueil
          </Link>
        </li>
        <li>
          <FaAngleRight color="#FFFFFF" size={12} />
        </li>
        <li>
          <Link href={pathname}>{formattedPageName}</Link>
        </li>
      </ul>
    </header>
  );
}

export default Hero;
