import Image from "next/image";

const InvertHero = () => {
  return (
    <section className="grid  gap-6 py-7 container lg:grid-cols-2 items-center">
      <div className="max-w-[458px]">
        <div className="space-y-2 lg:space-y-4">
          <h2 className="text-2xl lg:text-5xl font-bold text-gray-400">
            Invest in GoActive
          </h2>
          <p className="text-xs lg:text-xl text-skin-slate-200 leading-[160%]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry Lorem
            Ipsum has been the industry&apos;s
          </p>
        </div>
      </div>
      <div>
        <Image
          src={"/images/invest_hero.png"}
          alt="dfdsfds"
          quality={90}
          className=" w-full rounded-[7px] lg:rounded-[24px] lg:h-[454px] md:h-[55vh] h-[283px] object-cover"
          width={618}
          height={554}
        />
      </div>
    </section>
  );
};

export default InvertHero;
