import React from "react";
import Image from "next/image";

interface DiagramSectionProps {
  before: string;
  after: string;
}

export default function DiagramSection({ before, after }: DiagramSectionProps) {
  return (
    <div className="lg:w-2/3 flex flex-col items-center">
      <div className="flex w-full items-center justify-between lg:justify-around gap-2 text-textColor text-sm pt-6">
        <div className="flex flex-col items-center">
          <p className="text-center text-nowrap pb-4 text-xs lg:text-lg">
            Avant rachat de crédits
          </p>
          <Image src={before} alt="Graphique avant rachat de crédits" className="lg:w-60" />
        </div>
        <div className="divider divider-horizontal before:bg-secondary before:w-[1px] after:bg-secondary after:w-[1px]"></div>
        <div className="flex flex-col items-center">
          <p className="text-center text-nowrap pb-4 text-xs lg:text-lg">
            Après rachat de crédits
          </p>
          <Image src={after} alt="Graphique après rachat de crédits" className="lg:w-60" />
        </div>
      </div>
      <div className="flex items-center gap-5 lg:gap-10 text-textColor text-xs pt-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-secondary rounded-sm"></div>
          <p>Mensualités crédits</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#D9D9D9] rounded-sm"></div>
          <p>Reste à vivre</p>
        </div>
      </div>
    </div>
  );
} 