import Header from "@/components/header";
import ActiveUsers from "@/components/home/ActiveUsers";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ActiveUsers />
      <Features />
    </>
  );
}
