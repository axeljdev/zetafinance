import Image from "next/image";
import logo from "@/images/logo-zeta-finance-01.svg";
import Link from "next/link";

function HeroSection() {
  return (
    <header className="hero-section flex flex-col items-center pt-10 lg:pt-40 pb-10">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={73}
          className="w-40 md:w-2/4 lg:w-56 xl:w-2/4 pb-10"
          priority
        />
        <h2 className="text-[1.4rem] md:text-3xl lg:text-4xl xl:text-5xl uppercase mx-10 text-center text-wrap w-full font-semibold text-gradient">
          Un conseil sur nos services?{" "}
        </h2>
        <h2 className="text-[1.4rem] md:text-3xl lg:text-4xl xl:text-5xl uppercase mx-10 text-center text-wrap font-semibold w-full">
          Nos offres? un besoin d&apos;appui ?{" "}
        </h2>
        <h1 className="text-sm italic pt-2 md:text-xl lg:text-3xl xl:text-3xl mx-10 text-center uppercase w-full">
          Nos spécialistes financiers sont à votre écoute
        </h1>
        <Link
          href="*"
          className=" btn mt-10 text-md bg-gradient-button-dark uppercase text-textColor rounded-full px-14 group/button relative inline-flex items-center justify-center overflow-hidden bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
        >
          Contact{" "}
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
            <div className="relative h-full w-10 bg-white/30"></div>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default HeroSection;
