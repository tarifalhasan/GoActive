import Image from "next/image";

const AboutGoactive = () => {
  return (
    <section className=" bg-skin-slate-900">
      <div className="container  space-y-6 lg:space-y-12 py-[40px] lg:py-[80px]">
        <div className="space-y-2 max-w-[1156px] lg:space-y-4">
          <h2 className="text-t-26 md:text-t-40  lg:text-[3.25rem] leading-[146%] sm:leading-[130%] text-left ">
            About GoActive
          </h2>
          <p className=" text-xs lg:text-base text-skin-slate-200 leading-7 font-normal">
            Welcome to GoActive, where the thrill of sports and the joy of
            shared activities come together to forge new connections and
            friendships. Our mobile app is designed to seamlessly connect
            individuals who share a passion for sports and various recreational
            activities, creating a vibrant community bound by the love of
            movement and play.
          </p>
        </div>
        <div className="space-y-[6px] max-w-[1156px]">
          <h2 className="text-base lg:text-2xl font-bold text-white">
            Discover Your Tribe
          </h2>
          <p className="text-xs lg:text-base font-normal text-skin-slate-200">
            Through technology-driven innovation, we aim to break down barriers,
            promote inclusivity, and ignite the passion for an active and
            connected lifestyle. At GoActive, we believe that we can transcend
            boundaries, and create a world where every individual finds their
            perfect match in the pursuit of fun and fitness.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-2 lg:gap-x-5">
          <div>
            <Image
              src={"/images/about_pic_2.png"}
              alt="Welcome to GoActive, where the thrill of sports and the joy of
            shared activities come t"
              className=" w-full rounded-[7px] lg:rounded-[24px] h-[224px] sm:h-[55vh] rounde  lg:h-[664px] object-cover"
              width={610}
              quality={90}
              height={664}
            />
          </div>
          <div>
            <Image
              src={"/images/about_pic_3.png"}
              alt="Welcome to GoActive, where the thrill of sports and the joy of
            shared activities come t"
              className=" w-full rounded-[7px] lg:rounded-[24px] h-[224px] sm:h-[55vh] rounde  lg:h-[664px] object-cover"
              width={610}
              height={664}
              quality={90}
            />
          </div>
        </div>
        <div className="space-y-[6px] max-w-[1156px]">
          <h2 className="text-base lg:text-2xl font-bold text-white">
            Connect Through Play
          </h2>
          <p className="text-xs lg:text-base font-normal text-skin-slate-200">
            Tailor your GoActive experience to suit your preferences. Customize
            your profile to highlight your favorite sports and activities, set
            your availability, and explore our map and calendar of events
            happening in your area. Our intelligent matching algorithm ensures
            that you connect with individuals whose interests align with yours,
            fostering genuine connections based on shared passions.
          </p>
        </div>
        <div className="space-y-[6px] max-w-[1156px]">
          <h2 className="text-base lg:text-2xl font-bold text-white">
            Personalized Experiences
          </h2>
          <p className="text-xs lg:text-base font-normal text-skin-slate-200">
            Our app goes beyond traditional social networking by centering on
            the activities that bring people together. Whether you&apos;re into
            team sports, solo adventures, or group fitness classes, GoActive
            provides a platform to discover and join events tailored to your
            interests. Create lasting memories as you connect with others who
            share your enthusiasm for staying active and having fun.
          </p>
        </div>
        <div className="space-y-[6px] max-w-[1156px]">
          <h2 className="text-base lg:text-2xl font-bold text-white">
            Stay Active, Stay Social
          </h2>
          <p className="text-xs lg:text-base font-normal text-skin-slate-200">
            We believe that staying active should be a social experience, and
            GoActive is committed to making that vision a reality. Whether
            you&apos;re organizing a friendly game of soccer, planning a turkey
            bowl football game, or simply looking for a workout partner, our app
            empowers you to turn your aspirations into reality.
          </p>
        </div>
        <div>
          <Image
            src={"/images/about_pic_4.png"}
            alt="mission_image.png"
            width={1240}
            height={764}
            className=" h-[283px] md:h-[75vh] xl:h-[85vh] w-full max-h-[764px] rounded-xl object-cover"
          />
        </div>
        <div className="space-y-[6px] max-w-[1156px]">
          <h2 className="text-base lg:text-2xl font-bold text-white">
            Safety and Trust
          </h2>
          <p className="text-xs lg:text-base font-normal text-skin-slate-200">
            At GoActive, your safety and well-being are our top priorities. Our
            platform incorporates robust safety features, and user profiles are
            verified to create a secure environment for connecting with others.
            Join a community where mutual respect and shared interests lay the
            foundation for meaningful connections.
          </p>
          <p className="text-xs lg:text-base pt-6 font-normal text-skin-slate-200">
            Embark on a journey of camaraderie, fun, and shared experiences with
            GoActive. Download the app and start connecting with individuals who
            share your love for sports and activities. It&apos;s time to turn
            your passion into a community!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGoactive;
