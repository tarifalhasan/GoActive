"use client";
import Image from "next/image";
const TheUltimateHub = () => {
  return (
    <section className="container pt-10 lg:pt-[110px]">
      <div className=" rounded-2xl   overflow-hidden  bg-cover bg-no-repeat bg-bg-4 min-h-[238px]  grid place-items-center lg:min-h-[580px]">
        <div className="space-y-4 lg:space-y-9">
          <div className="space-y-2 lg:space-y-5">
            <h2 className="text-center leading-[150%] text-gray-400 text-xl lg:text-6xl ">
              The Ultimate Hub <br />
              Sports & Activities GoActive
            </h2>
            <p className="text-[#d7d7d7] text-center font-normal text-xs lg:text-xl max-w-[265px] mx-auto lg:max-w-[654px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="flex px-5 items-center justify-center space-x-2">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheUltimateHub;
