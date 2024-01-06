import CoreValuesCard from "../shared/CoreValuesCard";

const CoreValues = () => {
  return (
    <section className="py-[62px] container lg:py-[118px]">
      <h2 className="text-2xl text-center font-bold text-white pb-11 lg:text-5xl">
        Core Values
      </h2>
      <div className="   grid sm:grid-cols-2 lg:grid-cols-3  gap-11">
        <CoreValuesCard
          description="We uphold the highest standards of honesty and fairness, fostering a community within our mobile app where trust is paramount and every interaction is guided by integrity."
          title="Integrity"
          icon="/images/icons/fi_3522036.svg"
        />
        <CoreValuesCard
          description="Building a foundation of trust, we prioritize the safety and well-being of our users, ensuring that GoActive is a reliable platform where athletes can connect, compet"
          title="Trust "
          icon="/images/icons/fi_4832828.svg"
        />
        <CoreValuesCard
          description="In GoActive, we believe in the strength of unity, creating a tight-knit community of individuals that not only competes together but also celebrates victories, supports challenges"
          title="Community"
          icon="/images/icons/fi_8215621.svg"
        />
      </div>
    </section>
  );
};

export default CoreValues;
