"use client";
import { fadeId } from "@/lib/animation";
import { motion as m } from "framer-motion";
import FeatureCard from "../shared/FeatureCard";

const Features = () => {
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
        <FeatureCard
          image="/images/Front.png"
          buttonText="go compete"
          title="Step into the Arena with GoActive - Our app"
          subTitle="Leaderboards & Tournaments"
          desciption="Sport and activity into a thrilling competition. Climb the local or national leaderboard by showcasing your skills in real-time"
          placementHorizontal
          className=" hidden lg:block"
        />

        <div className="grid md:grid-cols-2 gap-10">
          <FeatureCard
            image="/images/Front.png"
            buttonText="go compete"
            title="Step into the Arena with GoActive - Our app"
            subTitle="Leaderboards & Tournaments"
            desciption="Sport and activity into a thrilling competition. Climb the local or national leaderboard by showcasing your skills in real-time"
            className="  lg:hidden"
          />
          <FeatureCard
            image="/images/Front.png"
            buttonText="go compete"
            title="Step into the Arena with GoActive - Our app"
            subTitle="Leaderboards & Tournaments"
            desciption="Sport and activity into a thrilling competition. Climb the local or national leaderboard by showcasing your skills in real-time"
          />

          <FeatureCard
            image="/images/Front2.png"
            buttonText="go activities"
            title="Evolve with GoActive - Your Passport to Fitness"
            subTitle="Discover, Play, Connect."
            desciption="We empower users to seamlessly book a diverse range of activities and instructional classes. From fitness sessions to skill-building workshops"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
