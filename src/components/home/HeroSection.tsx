import Image from "next/image";
import logo from "@/images/logo-full.png";

function HeroSection() {
  return (
    <header className="hero-section flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={73}
          className="sm:w-40 md:w-48 lg:w-56 xl:w-96"
          priority
        />
        <h1>Un conseil sur nos services, nos offres, un besoin d&apos;appui ?</h1>
        <h2>Nos spécialistes financiers sont à votre écoute</h2>
      </div>
    </header>
  )
}

export default HeroSection
