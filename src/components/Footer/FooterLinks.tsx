import Image from "next/image";
import arrowRight from "@/images/zeta-arrow.svg";
import Link from "next/link";

function FooterLinks() {
  return (
    <div className="flex flex-col items-center">
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
    </div>
  );
}

export default FooterLinks; 