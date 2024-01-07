"use client";
import { animateContainer, animateItems, fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
const ActiveUsers = () => {
  const DATA = [
    {
      title: "Go Play",
      icon: "/images/go-play.gif",
    },
    {
      title: "Go Go Compete ",
      icon: "/images/trophy.gif",
    },
    {
      title: "Go Play",
      icon: "/images/community.gif",
    },
  ];
  const DATA_FOR_MOBILE = [
    {
      title: "Integrity",
      icon: "/images/fi_3522053.svg",
      des: "We uphold the highest standards of hones and fairness, fostering a community within our mobile app where trust is paramount ",
    },
    {
      title: "Trushed",
      icon: "/images/fi_1489589.svg",
      des: "We uphold the highest standards of hones and fairness, fostering a community within our mobile app where trust is paramount ",
    },
    {
      title: "Community",
      icon: "/images/fi_7466353.svg",
      des: "We uphold the highest standards of hones and fairness, fostering a community within our mobile app where trust is paramount ",
    },
  ];

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        type: "tween",
      },
    },
  };
  const Mitem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="container py-8 lg:py-16 space-y-[27px] lg:space-y-[48px]">
      <div className="space-y-3 lg:space-y-4 ">
        <m.h2
          variants={fadeId("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="heading1 text-center"
        >
          3,583 Active Users At{" "}
          <span className=" text-secondary">GoActive</span>
        </m.h2>
        <m.p
          variants={fadeId("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center max-w-[681px] mx-auto"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry Lorem Ipsum has been the industry&apos;s
        </m.p>
      </div>
      <m.div
        variants={animateContainer}
        initial="hidden"
        exit="exit"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }}
        className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
      >
        {DATA.map((item, i) => (
          <m.div
            variants={animateItems}
            key={i}
            className=" hidden lg:flex py-12 bg-activeCard rounded-[8px] border border-[#2F2E2E]  flex-col items-center gap-y-2"
          >
            <Image src={item.icon} alt={item.title} width={110} height={110} />
            <h2 className=" text-[1.875rem] font-bold text-secondary">
              {item.title}
            </h2>
          </m.div>
        ))}
        {DATA_FOR_MOBILE.map((item, i) => (
          <m.div
            variants={animateItems}
            key={i}
            className="  lg:hidden py-8 px-6 bg-[#202020] rounded-[14px]    gap-y-2"
          >
            <Image
              className=" w-9 h-9"
              src={item.icon}
              alt={item.title}
              width={35}
              height={35}
            />
            <div className=" pt-4">
              <h2 className=" text-base font-bold text-secondary">
                {item.title}
              </h2>
              <p className=" text-xs pt-2 text-gray-350 font-normal">
                {item.des}
              </p>
            </div>
          </m.div>
        ))}
      </m.div>
    </section>
  );
};

export default ActiveUsers;
