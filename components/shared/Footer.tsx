"use client";
import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer>
      <m.div
        variants={fadeId("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className=" overflow-hidden gap-6 flex flex-col flex-wrap lg:flex-row lg:items-start justify-between  container pt-[45px] lg:pt-[110px] pb-[32px] lg:pb-[58px]"
      >
        <div className="space-y-3 max-w-[235px] lg:space-y-4">
          <Image
            width={195}
            height={42}
            src={"/images/Logo.svg"}
            alt="GoActive"
          />
          <p className="text-xs text-[#afafaf] font-normal leading-[176%] lg:text-base">
            Embark on a journey of camaraderie fun, and shared GoActive mobile
            app
          </p>
        </div>
        <div className="flex  items-start gap-x-[45px] xl:gap-x-[92px]">
          <div>
            <h4 className="text-sm lg:text-lg text-white font-bold leading-[171.419%]">
              How It Works
            </h4>
            <ul className=" space-y-5 lg:space-y-7 pt-3">
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Play Pick Up
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Host Pick Up
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Instruction
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm lg:text-lg text-white font-bold leading-[171.419%]">
              Company
            </h4>
            <ul className=" space-y-5 lg:space-y-7 pt-3">
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Mission & Team
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  News & Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Go Play
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm lg:text-lg text-white font-bold leading-[171.419%]">
              Resources
            </h4>
            <ul className=" space-y-5 lg:space-y-7 pt-3">
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Organizer
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Dashbaord
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#AFAFAF] hover:text-white/95 hover:underline text-xs font-medium lg:text-base"
                  href={"/"}
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className=" space-y-6 lg:space-y-8">
          <div>
            <h4 className="text-sm lg:text-lg text-white font-bold leading-[171.419%]">
              Always stay updated
            </h4>
            <p className="text-xs max-w-[239px] text-[#afafaf] font-normal leading-[170%]">
              Please enter your email address and updated your app
            </p>
          </div>
          <div className="flex bg-black-400 rounded-full pl-4 items-center justify-between">
            <input
              className=" bg-transparent focus:outline-none flex-1 text-base font-normal text-white"
              placeholder="Email address"
            />
            <Button
              className=" bg-secondary/10 lg:bg-secondary "
              variant={"secondary"}
            >
              Enter
            </Button>
          </div>
        </div>
      </m.div>
      <div className=" pb-[32px] lg:pb-[46px] container pt-11 lg:pt-6 flex flex-wrap justify-between gap-4">
        <p className="text-[#AFAFAF] text-sm font-normal">
          © Copyright ©2023 All rights reserved goactive.com{" "}
        </p>
        <ul className=" gap-x-3  inline-flex items-center ">
          <li>
            <Link
              className="text-[#AFAFAF] underline text-sm font-normal"
              href={"/"}
            >
              Terms & Conditions
            </Link>
          </li>
          <li>
            <Link
              className="text-[#AFAFAF] underline text-sm font-normal"
              href={"/"}
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
