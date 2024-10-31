"use client";

import Image from "next/image";
import logo from "@/images/zeta-site-logo-font.svg";
import Link from "next/link";
import { useState } from "react";
import Drawer from "@/components/Drawer";
import { usePathname } from "next/navigation";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
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
              className="btn btn-square btn-ghost hover:bg-secondary/75 hover:text-textColor transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className={`inline-block h-6 w-6 stroke-current ${pathname !== "/" ? "stroke-white" : ""}`}
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
                  href="/"
                  className="font-medium uppercase hover:bg-gradient-button-light hover:text-textColor rounded-full px-5 transition-all duration-300 ease-in-out "
                >
                  Les étapes et délais
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
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
      <Drawer isDrawerOpen={isDrawerOpen} closeDrawer={closeDrawer} />
    </div>
  );
}

export default Navbar;
