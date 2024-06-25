"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeWriter = () => {
  const words = [
    "Frontend Developer",
    "React Developer",
    "Next Js Developer",
    "UI/UX Designer",
    "MERN-Stack Web-Developer",
    "Full-Stack Web-Developer",
    "Mobile App Developer",
    "Graphics Designer",
    "Freelancer",
  ];

  return (
    <h1 className="text-4xl text-white pb-5">
      <span className="pe-3">Hello, I am</span>
      <span className=" text-accent-default  border-b-2">
        <Typewriter
          words={words}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default TypeWriter;
