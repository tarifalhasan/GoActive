import Image from "next/image";
import AppleIcons from "../assets/AppleIcons";
import GoolePlay from "../assets/GoolePlay";
import Sponsored from "./Sponsored";

const Hero = () => {
  const SponsoredList = [
    "/images/sponsor/1.svg",
    "/images/sponsor/2.svg",
    "/images/sponsor/3.svg",
    "/images/sponsor/4.svg",
    "/images/sponsor/5.svg",
    "/images/sponsor/6.svg",
    "/images/sponsor/7.svg",
    "/images/sponsor/1.svg",
    "/images/sponsor/2.svg",
    "/images/sponsor/3.svg",
    "/images/sponsor/4.svg",
    "/images/sponsor/5.svg",
    "/images/sponsor/6.svg",
    "/images/sponsor/1.svg",
    "/images/sponsor/2.svg",
    "/images/sponsor/3.svg",
    "/images/sponsor/4.svg",
    "/images/sponsor/5.svg",
    "/images/sponsor/6.svg",
    "/images/sponsor/1.svg",
    "/images/sponsor/2.svg",
    "/images/sponsor/3.svg",
    "/images/sponsor/4.svg",
    "/images/sponsor/5.svg",
    "/images/sponsor/6.svg",
  ];
  return (
    <section className=" overflow-hidden   relative  sm:items-center">
      <div className="space-y-3 container relative z-30 pt-6  lg:pt-7 md:space-y-8 flex sm:items-center flex-col">
        <div>
          <button
            aria-label="play with GoActive"
            className=" inline-flex items-center bg-secondary/35  bg-opacity-20 lg:bg-secondary font-bold py-2 px-3 sm:px-6 rounded-full hover:bg-secondary/80"
          >
            <span className="font-bold tg block text-xs md:text-base bg-clip-text  bg-s lg:bg-black">
              Play Together. Thrive Together. With GoActive.
            </span>
          </button>
        </div>
        <div className="space-y-2 w-full lg:space-y-4">
          <h2 className="text-t-26 md:text-t-40  lg:text-[3.25rem] leading-[146%] sm:leading-[130%] text-left md:text-center">
            The Ultimate Hub To Connect <br className=" hidden sm:block" />{" "}
            Communities Through <span className="tg bg-s">Sports</span> &{" "}
            <span className="tg bg-s">Activities</span>
          </h2>
          <p className=" md:max-w-[90%] lg:max-w-[720px] text-left md:text-center md:mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem Ipsum has been the industry&apos;s printing and
            typesetting industry
          </p>
        </div>
        <div className="  w-full space-y-6">
          <div className="flex items-center justify-start sm:justify-center space-x-4">
            <button aria-label="Download from Apple App Store">
              <AppleIcons />
            </button>
            <button aria-label="Download from Google Play Store">
              <GoolePlay />
            </button>
          </div>
        </div>
      </div>
      <div className="relative z-20">
        <div className="  sm:ml-[7.5%] ">
          <Image
            src={"/images/mobile.png"}
            alt="mobile"
            width={515}
            className=" hidden lg:block mx-auto"
            height={720}
          />
          <Image
            src={"/images/horo_mobile_2.png"}
            alt="mobile"
            width={300}
            className="  lg:hidden mx-auto"
            height={450}
          />
        </div>
        <Sponsored images={SponsoredList} />
      </div>
      <div className="  hidden lg:block z-10 absolute bottom-0 transform  w-full   translate-x-1/2 right-0 -left-1/2">
        <Image
          src={"/images/hero_reg.png"}
          className=" w-full h-[70%] "
          alt="hero"
          width={1280}
          height={560}
        />
      </div>
    </section>
  );
};

export default Hero;
