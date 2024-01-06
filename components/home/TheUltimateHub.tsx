"use client";
import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import Image from "next/image";
const TheUltimateHub = () => {
  return (
    <section className="container pt-10 lg:pt-[110px]">
      <div className=" rounded-2xl   overflow-hidden  bg-cover bg-no-repeat bg-bg-4 min-h-[238px]  grid place-items-center lg:min-h-[580px]">
        <div className="space-y-4 lg:space-y-9">
          <div className="space-y-2 lg:space-y-5">
            <m.h2
              variants={fadeId("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-center leading-[150%] text-gray-400 text-xl lg:text-6xl "
            >
              The Ultimate Hub <br />
              Sports & Activities GoActive
            </m.h2>
            <m.p
              variants={fadeId("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="text-[#d7d7d7] text-center font-normal text-xs lg:text-xl max-w-[265px] mx-auto lg:max-w-[654px]"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </m.p>
          </div>
          <m.div
            variants={fadeId("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.8 }}
            className="flex px-5 items-center justify-center space-x-2"
          >
            <button aria-label="fi_google_play">
              <Image
                width={220}
                height={62}
                quality={90}
                src={"/images/fi_google_play.svg"}
                alt="fi_google_play"
              />
            </button>
            <button aria-label="fi_google_play">
              <Image
                width={220}
                height={62}
                quality={90}
                src={"/images/fi_apple_store.svg"}
                alt="fi_google_play"
              />
            </button>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default TheUltimateHub;
