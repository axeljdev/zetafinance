"use client"

import Link from "next/link"
import { FaAngleRight } from "react-icons/fa6";
import logo from "@/images/logo-zeta-finance-white-bg.svg";
import Image from "next/image";
import { usePathname } from "next/navigation"

function Hero() {
  const pathname = usePathname()
  const pageName = pathname.split("/").pop() || "Accueil"
  const formattedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1)

  return (
    <header className="flex flex-col items-center justify-center hero-section-dark pt-10 lg:pt-40 lg:pb-24 pb-10 text-textColor">
      <Image src={logo} alt="logo" width={150} height={73} className="w-40 lg:w-72 2xl:w-96 pb-10" />
      <h1 className="text-2xl lg:text-4xl font-bold text-center uppercase lg:pb-10">Contactez-nous</h1>
      <ul className="flex items-center justify-center lg:text-xl gap-2">
        <li>
          <Link href="/" className="hover:underline-offset-4 hover:underline text-secondary">Accueil</Link>
        </li>
        <li>
          <FaAngleRight color="#FFFFFF" size={12} />
        </li>
        <li>
          <Link href={pathname}>{formattedPageName}</Link>
        </li>
      </ul>
    </header>
  )
}

export default Hero