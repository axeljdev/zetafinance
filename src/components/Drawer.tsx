"use client";

import Image from "next/image";
import logo from "@/images/zeta-site-logo-font.svg";
import Link from "next/link";

type DrawerProps = {
  isDrawerOpen: boolean;
  closeDrawer: () => void;
};

function Drawer({ closeDrawer }: DrawerProps) {
  return (
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
            <label
              htmlFor="my-drawer-3"
              className="cursor-pointer btn btn-ghost w-12 p-0 hover:bg-secondary/75 hover:text-textColor transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
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
          <Link href="/">
            <Image src={logo} alt="logo" className="w-48 " />
          </Link>
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
                  <Link href="/" onClick={closeDrawer}>
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Définition
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDrawer}>
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Les avantages
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDrawer}>
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Quel crédit ?
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDrawer}>
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      Dans quelle situation ?
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/" onClick={closeDrawer}>
                    <p className="hover:border-b hover:border-secondary text-textColor pb-1 text-base">
                      2 types de rachat
                    </p>
                  </Link>
                </li>
            </ul>
          </details>
        </li>
        <li>
          <Link href="/" onClick={closeDrawer}>
            <p className="hover:border-b hover:border-secondary pb-1 text-lg">
              Qui sommes-nous ?
            </p>
          </Link>
        </li>
        <li>
          <Link href="/" onClick={closeDrawer}>
            <p className="text-base bg-gradient-button-light uppercase text-textColor rounded-full px-10 py-2 bg-secondary font-semibold focus:outline-none focus-visible:ring focus-visible:ring-focus focus-visible:ring-offset-2 mt-4">
              Contact
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Drawer; 