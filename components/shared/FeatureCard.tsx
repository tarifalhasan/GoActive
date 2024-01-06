"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { IoPlayCircle } from "react-icons/io5";

import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
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
          <m.button
            variants={fadeId("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className=" hover:bg-secondary/50 bg-black py-2 inline-flex items-center gap-x-2 px-[18px] rounded-full"
          >
            <IoPlayCircle className="w-[18px] h-[18px] text-secondary" />
            <span className="text-lg  uppercase font-inter text-secondary font-semibold">
              {buttonText}
            </span>
          </m.button>
          <m.h3
            variants={fadeId("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-2xl text-secondary font-bold"
          >
            {subTitle}
          </m.h3>
        </div>
        <m.h2
          variants={fadeId("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="text-[2.375rem] font-bold text-white leading-[126%]"
        >
          {title}
        </m.h2>
        <m.p
          variants={fadeId("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          {desciption}
        </m.p>
      </div>
      <m.div>
        <Image
          className=" absolute  top-[82px] right-[82px]"
          src={image}
          width={315}
          height={676}
          alt="go-play-"
        />
      </m.div>
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
          <m.button
            variants={fadeId("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className=" hover:bg-secondary/50 bg-black py-2 inline-flex items-center gap-x-2 px-[18px] rounded-full"
          >
            <IoPlayCircle className="w-[18px] h-[18px] text-secondary" />
            <span className="text-lg  uppercase font-inter text-secondary font-semibold">
              {buttonText}
            </span>
          </m.button>
          <m.h3
            variants={fadeId("down", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
            className="text-2xl text-secondary font-bold"
          >
            {subTitle}
          </m.h3>
        </div>
        <m.h2
          variants={fadeId("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
          className="text-[2.375rem] font-bold text-white leading-[126%]"
        >
          {title}
        </m.h2>
        <m.p
          variants={fadeId("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.8 }}
        >
          {desciption}
        </m.p>
      </div>
      <m.div
        variants={fadeId("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          className=" "
          src={image}
          width={315}
          height={676}
          alt="go-play-"
        />
      </m.div>
    </div>
  );
};

export default FeatureCard;
