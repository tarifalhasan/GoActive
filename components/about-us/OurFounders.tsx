import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IFounder } from "@/types";
import { FC } from "react";

interface Props {
  data: IFounder[];
}
const OurFounders: FC<Props> = ({ data }) => {
  return (
    <section className=" bg-skin-slate-900 py-10 lg:py-20">
      <div className="container space-y-6 lg:space-y-16">
        <h2 className="text-t-26 md:text-t-40  lg:text-[3.25rem] leading-[146%] sm:leading-[130%] text-left md:text-center">
          Our Founders
        </h2>
        <div className="grid gap-2 lg:gap-5 grid-cols-3">
          {data.map((item) => (
            <div key={item.id} className="space-y-4 lg:space-y-8">
              <div>
                <Avatar className=" block mx-auto max-w-[90%] w-full h-full">
                  <AvatarImage src={item.avatar} />
                  <AvatarFallback className="  uppercase">
                    {item.name.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h3 className="text-center text-xs lg:text-xl font-bold leading-normal">
                  {item.name}
                </h3>
                <p className="text-center text-[0.6rem] lg:text-lg text-gray-300">
                  CEO &amp, Founder
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFounders;
