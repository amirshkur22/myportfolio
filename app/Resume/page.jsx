"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMysql,
  SiMongodb,
  SiFirebase,
} from "react-icons/si";
import { FaArrowCircleRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const about = {
  title: "About Me",
  info: [
    {
      fieldName: "Name",
      Value: "Amir Shkur",
    },
    {
      fieldName: "Phone",
      Value: "+251 9 87 27 35 52",
    },
    {
      fieldName: "Whatsup",
      Value: "amir",
    },
    {
      fieldName: "Experience",
      Value: "6+ months",
    },
    {
      fieldName: "Nationality",
      Value: "Ethiopian",
    },
    {
      fieldName: "Email",
      Value: "amirshkurhu@gmail.com",
    },
    {
      fieldName: "Freelance",
      Value: "Available",
    },
    {
      fieldName: "Language",
      Value: "English,Amaharic",
    },
  ],
};
const experience = {
  title: "My Experience",
  description: `
Although I am just starting my professional career, I have accumulated a solid foundation in coding through self-study and hands-on projects. My journey has been driven by a passion for technology and a commitment to continuous learning.

`,
  items: [
    {
      company: "Azs Tech Company",
      postion: "full-stack Developer",
      duration: "2024-present",
    },
    {
      company: "Azs Tech Company",
      postion: "Mobile App Developer",
      duration: "2024-present",
    },
    {
      company: "Azs Tech Company",
      postion: "Front End Developer",
      duration: "2023-2024",
    },
    {
      company: "Azs Tech Company",
      postion: "freelancer",
      duration: "Summer 2023",
    },
    {
      company: "Azs Tech Company",
      postion: "UI/UX Designer",
      duration: "Summer 2022",
    },
    {
      company: "Azs Tech Company",
      postion: "Graphics Designer",
      duration: "Summer 2022",
    },
  ],
};
const education = {
  title: "My Education",
  description:
    "My educational journey has been focused on gaining practical skills and knowledge in the field of web development. I have dedicated myself to learning both the theoretical and hands-on aspects of full-stack development, along with specialized courses in UI/UX design and graphic design.",
  items: [
    {
      institution: "Hawassa University",
      degree: "BSc degree in Computer Science",
      duration: "june 2020 - June 2024",
    },
    {
      institution: "Evangadi Tech Academy",
      degree: "Full-Stack Web Development",
      duration: "November 2023 - June 2024",
    },
    {
      institution: "Coursera Online Learning Platform",
      degree: "Certificate in UI/UX Design",
      duration: "April 2024 -  June 2024",
    },

    {
      institution: "Coursera Online Learning Platform",
      degree: "Certificate in Front End Web Development",
      duration: "January 2023 - march 2023",
    },
    {
      institution: "Migbare Kibure College",
      degree: "Certificate in Graphics Design",
      duration: "January 2023 - June 2023",
    },
    {
      institution: "Coursera Online Learning Platform",
      degree: "Certificate in JavaScript Development",
      duration: "December 2022 - February 2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "I have acquired a diverse set of skills in web development, mobile app development, and design, utilizing a variety of modern technologies and tools.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiMysql />,
      name: "Mysql",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <FaReact />,
      name: "React Native",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      name: "Adobe Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      name: "Adobe Illustrator",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto mb-10">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className=" h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {item.duration}
                        </span>
                        <h1 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.postion}
                        </h1>
                        <div className="flex items-center gap-3">
                          <span className="w-[10px] h-[10px] rounded-full bg-accent-default"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className=" h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, i) => (
                      <li
                        key={i}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent-default">
                          {item.duration}
                        </span>
                        <h1 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.institution}
                        </h1>
                        <div className="flex items-center gap-3">
                          <span className="w-[10px] h-[10px] rounded-full bg-accent-default"></span>
                          <p className="text-white/60">{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold"> {skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-4 lg:gap-[30px]">
                  {skills.skillList.map((skill, i) => (
                    <li key={i} className="">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent-default transition-all duration-500">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize"> {skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold"> {about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  Hello! I’m Amir Shkur, a passionate Web Developer, Mobile App
                  Developer, Graphic Designer, and UI/UX Designer. I'm eager to
                  grow in technology and design. I love learning and strive for
                  excellence in all I do.
                </p>
                <div>
                  <div className=" flex items-center justify-items-center gap-2 mb-3">
                    <FaArrowCircleRight className=" text-2xl mt-1" />
                    <h1 className=" font-bold text-3xl">I specialize in:</h1>
                  </div>
                  <ul className="ps-6">
                    <li>
                      <span className=" font-semibold text-2xl pe-2">
                        Web Development :
                      </span>{" "}
                      <span className="text-white/60">
                        Building responsive, scalable, maintainable, and dynamic
                        websites with HTML5, CSS3, JavaScript , Tailwind CSS,
                        React.JS, Next.JS, Node.js, Express.js Mysql, and
                        Mongodb.
                      </span>
                    </li>
                    <li>
                      <span className=" font-semibold text-2xl pe-2">
                        Mobile App Development :
                      </span>{" "}
                      <span className="text-white/60">
                        Creating user-friendly and interactive apps using
                        Flutter and React Native.
                      </span>
                    </li>
                    <li>
                      <span className=" font-semibold text-2xl pe-2">
                        Graphic Design :
                      </span>
                      <span className="text-white/60">
                        Designing visually appealing graphics, logos, icons, and
                        Crafting visuals with Adobe Illustrator, Photoshop
                        ,AfterEffect and Figma.
                      </span>
                    </li>
                    <li>
                      <span className=" font-semibold text-2xl pe-2">
                        UI/UX Design :
                      </span>
                      <span className="text-white/60">
                        Designing user-friendly interfaces with Figma and Adobe
                        XD. I focus on user needs and delivering high-quality
                        solutions.
                      </span>
                    </li>
                  </ul>
                  <div>
                    <div className=" flex items-center justify-items-center gap-2 my-3">
                      <FaArrowCircleRight className=" text-2xl mt-1" />
                      <h1 className=" font-bold text-3xl">
                        Why You Should Work with Me:
                      </h1>
                    </div>
                    <span>1.Fresh Perspective and Innovative Ideas: </span>
                    <span className="text-white/60">
                      As a newcomer to the industry, I bring a fresh perspective
                      that’s not confined by traditional approaches. I am driven
                      by curiosity and a passion for learning, which allows me
                      to think creatively and find innovative solutions.
                    </span>
                    <br />
                    <span>
                      2.Commitment to Growth and Passion for Continuous
                      Learning:{" "}
                    </span>
                    <span className="text-white/60">
                      I believe that continuous learning is the key to growth
                      and success. My journey in web development, mobile app
                      development, and graphic design is fueled by a commitment
                      to expanding my knowledge and skills. I stay updated with
                      the latest trends and technologies, ensuring that I bring
                      the most current and effective solutions to your project.
                    </span>

                    <br />
                    <span>3.Passion for Excellence: </span>
                    <span className="text-white/60">
                      Despite being early in my career, I am dedicated to
                      delivering high-quality results. I approach every project
                      with a meticulous eye for detail and a relentless pursuit
                      of excellence. My work ethic ensures that you will receive
                      a final product that meets and exceeds your expectations.
                    </span>
                    <br />
                    <span>4.Versatile Skill Set: </span>
                    <span className="text-white/60">
                      I have developed a versatile set of skills in various
                      areas such as web development, mobile app development, and
                      design. My proficiency in tools and technologies like
                      HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS,
                      Flutter, and Adobe Creative Suite allows me to handle
                      diverse projects with confidence and efficiency.
                    </span>
                    <br />
                    <span>5.Reliable and Enthusiastic:: </span>
                    <span className="text-white/60">
                      I’m dedicated, enthusiastic, and reliable, always ready to
                      meet deadlines and exceed expectations.
                    </span>
                  </div>
                  <p className=" text-accent-default mt-5">
                    {" "}
                    Let’s bring your vision to life! <br />
                    Thank you for visiting!
                  </p>
                </div>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 border border-dashed border-accent-default py-6 px-3">
                  {about.info.map((item, i) => (
                    <li
                      key={i}
                      className=" flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}:</span>
                      <span className="text-xl">{item.Value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
