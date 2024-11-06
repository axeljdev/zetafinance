import { etapesDelaisContent } from "@/data/etapes-delais";
import Link from "next/link";

function Summary() {
  return (
    <nav className="p-10 mx-5 mt-5 bg-gradient-card-darkest rounded-2xl text-base  text-textColor">
      <ul className="flex flex-col gap-5">
        {etapesDelaisContent.map((section) => (
          <li className="relative w-fit group cursor-pointer" key={section.step}>
            <Link 
              href={`#etape-${section.step.toLowerCase()}`}
              className="relative group-hover:text-secondary after:absolute after:top-12 after:left-0 after:w-20 after:h-1 after:bg-secondary after:hidden group-hover:after:block"
            >
              {section.step} : {section.stepTitle}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Summary;
