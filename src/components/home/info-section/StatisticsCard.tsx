import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface StatisticsCardProps {
  icon: string;
  statistic: string;
  label: string;
  image: StaticImageData;
}

export default function StatisticsCard({ icon, statistic, label, image }: StatisticsCardProps) {
  return (
    <div className="flex">
      <div className="bg-gradient-card-light rounded-xl p-4 flex flex-col items-center text-center justify-center lg:rounded-r-none w-28 lg:h-36 lg:w-40 h-40">
        <Image src={icon} className="w-14" alt="" />
        <p className="text-xs uppercase text-textColor">
          <span className="font-semibold text-3xl">{statistic}</span>
          <br />
          {label}
        </p>
      </div>
      <Image src={image} className="hidden lg:block" alt="" />
    </div>
  );
} 