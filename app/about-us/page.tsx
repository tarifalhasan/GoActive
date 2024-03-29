import AboutGoactive from "@/components/about-us/AboutGoactive";
import CoreValues from "@/components/about-us/CoreValues";
import OurFounders from "@/components/about-us/OurFounders";
import OurMission from "@/components/about-us/OurMission";
import TheUltimateHub from "@/components/home/TheUltimateHub";
import { IFounder } from "@/types";

const AboutUs = async () => {
  const founderDummyData: IFounder[] = [
    {
      name: "Orlando masso",
      role: "CEO &amp, Founder",
      id: 1,
      avatar: "/images/founders/1.png",
    },
    {
      name: "David Loed",
      role: "CEO &amp, Founder",
      id: 2,
      avatar: "/images/founders/2.png",
    },
    {
      name: "Jonathan Benamoz",
      role: "CEO &amp, Founder",
      id: 3,
      avatar: "/images/founders/3.png",
    },
  ];

  return (
    <>
      <OurMission />
      <OurFounders data={founderDummyData} />
      <CoreValues />
      <AboutGoactive />
      <TheUltimateHub />
    </>
  );
};

export default AboutUs;
