import Image from "next/image";

const OurMission = () => {
  return (
    <section className="container py-[40px] lg:py-[80px]  space-y-3 lg:space-y-12">
      <div className="space-y-2">
        <h2 className="text-2xl xl:text-5xl font-bold text-gray-400">
          Our Mission
        </h2>
        <p className="text-xs text-skin-slate-200  font-normal leading-6 lg:text-xl">
          Our Mission at GoActive is to foster a vibrant community where
          individuals come together through their shared love for sports and
          activities. We strive to provide a seamless platform that not only
          connects like-minded enthusiasts but also enriches their lives by
          offering a diverse range of pick-ups, leagues, and classes.{" "}
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
      <p className="text-xs text-skin-slate-200 font-normal leading-6 lg:text-xl">
        Through technology-driven innovation, we aim to break down barriers,
        promote inclusivity, and ignite the passion for an active and connected
        lifestyle. At GoActive, we believe that we can transcend boundaries, and
        create a world where every individual finds their perfect match in the
        pursuit of fun and fitness.
      </p>
    </section>
  );
};

export default OurMission;
