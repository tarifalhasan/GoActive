"use client";
import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import SolveCard from "../shared/SolveCard";

const WeSolves = () => {
  return (
    <section className=" container space-y-6 lg:space-y-12">
      <div className=" space-y-3">
        <m.h2
          variants={fadeId("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.6 }}
          className="heading1 text-left sm:text-center"
        >
          Our Feature <span className="tg bg-s">GoActive</span>
        </m.h2>
        <p className=" lg:hidden">
          Lorem Ipsum is simply dummy text of the printing and types etting
          industry Lorem Ipsum has been the industry&apos;s
        </p>
      </div>
      <div className=" f grid gap-10 ">
        <SolveCard
          image="/images/Front.png"
          title="Enhanced User Engagement Immersive Gameplay and Social Features Engagement"
          desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          placementHorizontal
          className=" hidden lg:block"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <SolveCard
            image="/images/Front.png"
            title="Enhanced User Engagement Immersive Gameplay and Social Features Engagement"
            desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            className="  lg:hidden"
          />
          <SolveCard
            image="/images/Front.png"
            title="Monetization Challenges Difficulty in Monetizing"
            desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "
          />

          <SolveCard
            image="/images/Front2.png"
            title="Evolving Market Trends Keeping Pace"
            desciption="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever "
          />
        </div>
      </div>
    </section>
  );
};

export default WeSolves;
