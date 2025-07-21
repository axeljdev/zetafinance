import Image from "next/image";
import { Section as SectionType } from "@/data/etapes-delais";

type SectionProps = {
  section: SectionType;
};

export function Section({ section }: SectionProps) {
  // Pour l'étape 5, on veut afficher les creditTypes entre le paragraphe 1 et les autres
  const isStep5 = section.step === "Étape 5";
  const isDelaisSection = section.step === "LES DÉLAIS";
  const firstParagraph = isStep5 && section.creditTypes ? section.paragraphs[0] : null;
  const remainingParagraphs = isStep5 && section.creditTypes ? section.paragraphs.slice(1) : null;

  return (
    <div className="mb-10">
      {/* Titre spécial pour la section LES DÉLAIS */}
      {isDelaisSection ? (
        <h3 id={`${section.step.toLowerCase().replace(/\s+/g, '-')}`} className="text-xl lg:text-2xl font-bold uppercase lg:pb-5 pt-10 scroll-mt-32 text-secondary">
          {section.step}
        </h3>
      ) : (
        <h3 id={`${section.step.toLowerCase()}`} className="text-xl lg:text-2xl font-bold uppercase lg:pb-5 pt-10 scroll-mt-32">
          <span className="text-secondary">{section.step}</span> : {section.title}
        </h3>
      )}
      
      {/* Affichage spécial pour l'étape 5 avec creditTypes */}
      {isStep5 && section.creditTypes ? (
        <>
          {/* Premier paragraphe */}
          {firstParagraph && (
            <p className="text-lg lg:text-xl pt-5">
              {firstParagraph}
            </p>
          )}
          
          {/* Types de crédit en deux colonnes */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Colonne gauche - Rachat hypothécaire */}
            <div className="border-2 border-secondary rounded-lg p-6 bg-white">
              <h4 className="text-xl font-bold text-black mb-4">
                {section.creditTypes.hypothecaire.title}
              </h4>
              <p className="text-lg text-black">
                {section.creditTypes.hypothecaire.intro}
              </p>
              {section.creditTypes.hypothecaire.items.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {section.creditTypes.hypothecaire.items.map((item, index) => (
                    <li key={index} className="text-base flex items-start text-black">
                      <span className="text-secondary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Colonne droite - Rachat consommation */}
            <div className="border-2 border-secondary rounded-lg p-6 bg-white">
              <h4 className="text-xl font-bold text-black mb-4">
                {section.creditTypes.consommation.title}
              </h4>
              <p className="text-lg text-black">
                {section.creditTypes.consommation.intro}
              </p>
              {section.creditTypes.consommation.items.length > 0 && (
                <ul className="space-y-2 mt-4">
                  {section.creditTypes.consommation.items.map((item, index) => (
                    <li key={index} className="text-base flex items-start text-black">
                      <span className="text-secondary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          
          {/* Paragraphes restants */}
          {remainingParagraphs && remainingParagraphs.map((paragraph, index) => (
            <p key={index + 1} className="text-lg lg:text-xl pt-5">
              {paragraph}
            </p>
          ))}
        </>
      ) : (
        /* Affichage normal pour les autres étapes */
        <>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-lg lg:text-xl pt-5">
              {paragraph}
            </p>
          ))}
          
          {/* Affichage spécial en deux colonnes pour les types de crédit (étape 3) */}
          {section.creditTypes && (
            <>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Colonne gauche - Rachat hypothécaire */}
                <div className="border-2 border-secondary rounded-lg p-6 bg-white">
                  <h4 className="text-xl font-bold text-black mb-4">
                    {section.creditTypes.hypothecaire.title}
                  </h4>
                  <p className="text-lg mb-4 text-black">
                    {section.creditTypes.hypothecaire.intro}
                  </p>
                  <ul className="space-y-2">
                    {section.creditTypes.hypothecaire.items.map((item, index) => (
                      <li key={index} className="text-base flex items-start text-black">
                        <span className="text-secondary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Colonne droite - Rachat consommation */}
                <div className="border-2 border-secondary rounded-lg p-6 bg-white">
                  <h4 className="text-xl font-bold text-black mb-4">
                    {section.creditTypes.consommation.title}
                  </h4>
                  <p className="text-lg mb-4 text-black">
                    {section.creditTypes.consommation.intro}
                  </p>
                  <ul className="space-y-2">
                    {section.creditTypes.consommation.items.map((item, index) => (
                      <li key={index} className="text-base flex items-start text-black">
                        <span className="text-secondary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Image en pleine largeur après les cartes pour l'étape 3 */}
              {section.image && (
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  className="mt-10 w-full"
                />
              )}
            </>
          )}
        </>
      )}
      
      {/* Image normale pour les autres sections */}
      {section.image && (!section.creditTypes || isStep5) && (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          className="mt-10"
        />
      )}
    </div>
  );
} 