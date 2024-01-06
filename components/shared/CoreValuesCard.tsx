import Image from "next/image";
import { FC } from "react";

interface Props {
  icon: string;
  title: string;
  description: string;
}
const CoreValuesCard: FC<Props> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col  items-center space-y-6 lg:space-y-8">
      <Image src={icon} alt={title} width={54} height={54} />
      <div className="space-y-3 lg:space-y-4">
        <h2 className="text-lg text-center font-bold text-white lg:text-2xl">
          {title}
        </h2>
        <p className="text-center text-xs lg:text-base text-skin-slate-200 leading-7 font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CoreValuesCard;
