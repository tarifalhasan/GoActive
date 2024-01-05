"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface SponsoredProps {
  images: string[];
}

const Sponsored: React.FC<SponsoredProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderInterval = setInterval(() => {
      // Move to the next slide
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the interval as per your requirement

    return () => clearInterval(sliderInterval);
  }, [images]); // Update the effect dependency to include 'images'

  return (
    <div className="w-full relative z-20 -mt-[15px] lg:mt-0 py-5 lg:py-[48px] bg-[#191E23]  lg:px-[180px]">
      <div className=" gap-y-8">
        <h4 className="text-gray-300 text-center text-xs sm:text-lg font-medium">
          Trusted By
        </h4>
        <div className="container pt-2 m-auto sm:first-letter:w-1">
          <div className="slider  relative w-full overflow-hidden before:left-0 before:absolute before:h-9 before:bg-g5 before:top-[35%] lg:before:z-50 before:w-[250px] max-w-full after:right-[-1%] after:absolute after:h-9 after:bg-g5 after:top-[35%] lg:after:z-50 lg:after:w-[250px]">
            <div className="slide-track justify-center  flex items-center space-x-10">
              {images.map((item, index) => (
                <div
                  key={index}
                  className={`slide ${index === currentIndex ? "" : ""}`}
                >
                  <Image
                    src={item}
                    alt={`sfdsfd-${index}`}
                    width={250}
                    className=" w-full block"
                    height={250}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
