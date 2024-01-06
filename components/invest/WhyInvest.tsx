import Image from "next/image";

const WhyInvest = () => {
  return (
    <section className="bg-skin-slate-900 py-[40px] lg:py-[80px] ">
      <div className="container  space-y-3 lg:space-y-12">
        <div className="space-y-2">
          <h2 className="text-2xl xl:text-5xl font-bold text-gray-400">
            Why invest with GoActive
          </h2>
          <p className="text-xs text-skin-slate-200  font-normal leading-6 lg:text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
          </p>
        </div>
        <div>
          <Image
            src={"/images/mission_image.png"}
            alt="mission_image.png"
            width={1240}
            height={764}
            className=" h-[283px] md:h-[75vh] xl:h-[85vh] w-full max-h-[764px] rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;
