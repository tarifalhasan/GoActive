import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { IoPlayCircle } from "react-icons/io5";

interface FeatureProps {
  title: string;
  desciption: string;
  buttonText: string;
  subTitle: string;
  image: string;
  placementHorizontal?: boolean;
  className?: string;
}
const FeatureCard: FC<FeatureProps> = ({
  title,
  desciption,
  buttonText,
  subTitle,
  image,
  placementHorizontal = false,
  className,
}) => {
  return placementHorizontal ? (
    <div
      className={cn(
        " overflow-hidden flex  items-center relative py-16 bg-activeCard px-10 rounded-[37px] border border-[#2F2E2E]",
        className
      )}
    >
      <div className="space-y-5 max-w-[626px]">
        <div className="space-y-4">
          <button className=" hover:bg-secondary/50 bg-black py-2 inline-flex items-center gap-x-2 px-[18px] rounded-full">
            <IoPlayCircle className="w-[18px] h-[18px] text-secondary" />
            <span className="text-lg  uppercase font-inter text-secondary font-semibold">
              {buttonText}
            </span>
          </button>
          <h3 className="text-2xl text-secondary font-bold">{subTitle}</h3>
        </div>
        <h2 className="text-[2.375rem] font-bold text-white leading-[126%]">
          {title}
        </h2>
        <p>{desciption}</p>
      </div>
      <Image
        className=" absolute  top-[82px] right-[82px]"
        src={image}
        width={315}
        height={676}
        alt="go-play-"
      />
    </div>
  ) : (
    <div
      className={cn(
        " overflow-hidden gap-6 flex flex-col   items-center relative pt-16 bg-activeCard px-6 lg:px-10 rounded-[37px] border border-[#2F2E2E]",
        className
      )}
    >
      <div className="space-y-5 max-w-[626px]">
        <div className="space-y-4">
          <button className=" hover:bg-secondary/50 bg-black py-2 inline-flex items-center gap-x-2 px-[18px] rounded-full">
            <IoPlayCircle className="w-[18px] h-[18px] text-secondary" />
            <span className="text-lg  uppercase font-inter text-secondary font-semibold">
              {buttonText}
            </span>
          </button>
          <h3 className=" hidden lg:block text-xl lg:text-2xl text-secondary font-bold">
            {subTitle}
          </h3>
        </div>
        <h2 className="text-[1.125rem]  lg:text-[2.375rem] font-bold text-white leading-[126%]">
          {title}
        </h2>
        <p className="text-sm lg:text-xl font-normal">{desciption}</p>
      </div>
      <Image
        className=" "
        src={image}
        width={315}
        height={676}
        alt="go-play-"
      />
    </div>
  );
};

export default FeatureCard;
