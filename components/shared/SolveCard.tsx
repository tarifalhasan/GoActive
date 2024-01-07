"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
interface SolveCardProps {
  title: string;
  desciption: string;

  image: string;
  placementHorizontal?: boolean;
  className?: string;
}
const SolveCard: FC<SolveCardProps> = ({
  title,
  desciption,

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

export default SolveCard;
