"use client";

import Image from "next/image";
import logo from "@/images/zeta-site-logo-font.svg";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="drawer">
      <input
        id="my-drawer-3"
        type="checkbox"
        className="drawer-toggle"
        checked={isDrawerOpen}
        onChange={handleDrawerToggle}
      />
      <div className="drawer-content bg-transparent fixed z-10 top-0 left-0 right-0 flex flex-col ">
        {/* Navbar */}
        <div className="navbar justify-between lg:text-textColor lg:bg-primary w-full lg:w-4/5 mx-auto rounded-full lg:mt-5 lg:shadow-custom">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="ouvrir la barre latérale"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={`inline-block h-6 w-6 stroke-current ${
                  isDrawerOpen ? "text-white" : ""
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link href="/">
            <Image
              src={logo}
              alt="logo"
              className="w-64 h-7 mx-2 justify-between ml-6 hidden lg:block"
            />
          </Link>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal items-center gap-4">
              {/* Navbar menu content here */}
              <li>
                <details>
                  <summary className="font-medium uppercase hover:bg-gradient-button-light hover:text-textColor rounded-full px-5 transition-all duration-300 ease-in-out">
                    Regroupement de crédit
                  </summary>
                  <ul className="bg-primary text-textColor rounded-t-none w-full font-medium uppercase p-2 ">
                    <li>
                      <Link
                        className="hover:bg-gradient-button-light hover:text-textColor px-5 transition-all duration-300 ease-in-out"
                        href="/"
                      >
                        Définition
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:bg-gradient-button-light hover:text-textColor px-5 transition-all duration-300 ease-in-out"
                        href="/"
                      >
                        Les avantages
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:bg-gradient-button-light hover:text-textColor px-5 transition-all duration-300 ease-in-out"
                        href="/"
                      >
                        Quel crédit ?
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:bg-gradient-button-light hover:text-textColor px-5 transition-all duration-300 ease-in-out"
                        href="/"
                      >
                        Dans quel situation ?
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:bg-gradient-button-light hover:text-textColor px-5 transition-all duration-300 ease-in-out"
                        href="/"
                      >
                        2 types de rachat
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link
                  href="*"
                  className="font-medium uppercase hover:bg-gradient-button-light hover:text-textColor rounded-full px-5 transition-all duration-300 ease-in-out "
                >
                  Les étapes et délais
                </Link>
              </li>
              <li>
                <Link
                  href="*"
                  className="text-md bg-gradient-button-light uppercase text-textColor rounded-full px-10 group/button relative inline-flex items-center justify-center overflow-hidden bg-secondary text-base font-semibold duration-300 ease-in-out hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2"
                >
                  Contact{" "}
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer-3"
          aria-label="fermer la barre latérale"
          className="drawer-overlay"
        ></label>
        <ul className="menu min-h-full w-80 bg-primary text-textColor uppercase">
          {/* Icône de croix pour fermer */}
          <div className="flex items-center pb-8 pt-2 justify-between pr-4">
            <li className="flex justify-start w-fit">
              <label htmlFor="my-drawer-3" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white hover:border hover:border-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </label>
            </li>
            <Image src={logo} alt="logo" className="w-48 " />
          </div>
          {/* Reste du contenu de la barre latérale */}
          <li className="group/button">
            <details
              open
              className="open:text-secondary [&[open]>summary>p]:border-b [&[open]>summary>p]:border-secondary "
            >
              <summary>
                <p className="group-hover/button:border-b group-hover/button:border-secondary pb-1 text-lg">
                  Regroupement de crédit
                </p>
              </summary>
              <ul>
                <li>
                  <Link href="/">
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Définition
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Les avantages
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Quel crédit ?
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Dans quelle situation ?
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      2 types de rachat
                    </p>
                  </Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/">
              <p className="hover:border-b hover:border-secondary pb-1 text-lg">
                Qui sommes-nous ?
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="text-base bg-gradient-button-light uppercase text-textColor rounded-full px-10 py-2 bg-secondary font-semibold focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2 mt-4">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
