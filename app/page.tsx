import ActiveUsers from "@/components/home/ActiveUsers";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import TheUltimateHub from "@/components/home/TheUltimateHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GoActive",
  description:
    "The Ultimate Hub To Connect Communities Through Sports & Activities",
  keywords: ["Sports"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <ActiveUsers />
      <Features />
      <TheUltimateHub />
    </>
  );
}
