import Image from "next/image";
import { StaticImageData } from "next/image";

interface StatisticsCardProps {
  icon: string;
  statistic: string;
  label: string;
  image: StaticImageData;
}

export default function StatisticsCard({
  icon,
  statistic,
  label,
  image,
}: StatisticsCardProps) {
  return (
    <div className="flex lg:h-40">
      <div className="bg-gradient-card-light rounded-xl p-3 flex flex-col items-center text-center justify-center lg:rounded-r-none w-24 lg:w-1/3">
        <Image className="lg:w-8 lg:h-8" src={icon} alt="" />
        <p className="text-[0.65rem] uppercase text-textColor">
          <span className="font-semibold text-2xl lg:text-xl">{statistic}</span>
          <br />
          {label}
        </p>
      </div>
      <Image
        src={image}
        className="hidden lg:block w-2/3 rounded-r-xl"
        alt=""
      />
    </div>
  );
}
