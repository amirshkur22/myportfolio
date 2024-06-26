"use client";
import CountUp from "react-countup";
const Stats = () => {
  const stats = [
    // {
    //   num: 0,
    //   text: "year of experience",
    // },
    {
      num: 8,
      text: "projects completed",
    },
    {
      num: 15,
      text: "Technonlogies mastered",
    },
    {
      num: 300,
      text: "code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none pb-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex-1 flex gap-4 items-center justify-center xl:justify-start "
            >
              <CountUp
                end={item.num}
                duration={5}
                delay={1}
                className=" text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
