import Image from "next/image";
import { Section as SectionType } from "@/data/etapes-delais";

type SectionProps = {
  section: SectionType;
};

export function Section({ section }: SectionProps) {
  return (
    <>
      <h3 id={`etape-${section.step.toLowerCase()}`} className="text-xl lg:text-2xl font-bold uppercase lg:pb-10 pt-10">
        <span className="text-secondary">{section.step}</span> : {section.title}
      </h3>
      {section.paragraphs.map((paragraph, index) => (
        <p key={index} className="text-lg lg:text-xl pt-5">
          {paragraph}
        </p>
      ))}
      {section.image && (
        <Image
          src={section.image.src}
          alt={section.image.alt}
          className="mt-10"
        />
      )}
    </>
  );
} 