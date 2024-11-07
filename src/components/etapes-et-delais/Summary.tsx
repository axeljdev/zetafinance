"use client";

import { etapesDelaisContent } from "@/data/etapes-delais";
import Link from "next/link";
import { useEffect, useState } from "react";

function Summary() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [sectionProgress, setSectionProgress] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h3[id]");
      const footer = document.querySelector("footer");
      let currentSection = "";
      
      sections.forEach((section, index) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionId = section.getAttribute("id") || "";
        
        let progress;
        if (index === sections.length - 1 && footer) {
          // Pour la dernière section, on utilise la position du footer
          const footerTop = (footer as HTMLElement).offsetTop;
          const sectionHeight = footerTop - sectionTop;
          progress = Math.min(
            100,
            Math.max(0, (window.scrollY - (sectionTop - 200)) / (sectionHeight - 400) * 100)
          );
        } else {
          const nextSection = sections[index + 1] as HTMLElement;
          const sectionHeight = nextSection.offsetTop - sectionTop;
          progress = Math.min(
            100,
            Math.max(0, (window.scrollY - (sectionTop - 200)) / sectionHeight * 100)
          );
        }
        
        setSectionProgress(prev => ({
          ...prev,
          [sectionId]: progress
        }));

        if (window.scrollY >= sectionTop - 200) {
          currentSection = sectionId;
        }
      });
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="p-10 mx-5 mt-5 bg-gradient-card-darkest rounded-2xl text-base text-textColor lg:w-1/3 lg:h-fit lg:sticky lg:top-32 lg:mt-20">
      <div className="relative">
        <ul className="flex flex-col gap-5">
          {etapesDelaisContent.map((section) => {
            const sectionId = section.step.toLowerCase();
            const isActive = activeSection === sectionId;
            
            return (
              <li 
                className="relative w-fit group cursor-pointer"
                key={section.step}
              >
                <Link 
                  href={`#${sectionId}`}
                  className={`relative transition-colors duration-300 ${
                    isActive ? "text-secondary" : "group-hover:text-secondary"
                  }`}
                >
                  <p className="2xl:text-xl">{section.step} : {section.stepTitle}</p>
                  {isActive && (
                    <div className="absolute -bottom-2 left-0 w-full">
                      <div 
                        className="absolute top-0 left-0 h-[4px] bg-secondary transition-all duration-200"
                        style={{ width: `${sectionProgress[sectionId] || 0}%` }}
                      />
                    </div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Summary;
