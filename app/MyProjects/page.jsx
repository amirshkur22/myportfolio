"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
const projects = [
  {
    num: "01",
    category: "Full-stack",
    title: "Evangadi Forum Clone",
    description:
      "A clone of the Evangadi Forum, a question-and-answer platform similar to Stack Overflow. Features include user registration, question posting, and answers. Built with React for the frontend, MySQL for database management, and Node.js for the backend.",
    stack: [{ name: "React" }, { name: "MySQL" }, { name: "Node.js" }],
    image: "/assets/evangadiForum.jpg",
    live: "https://evangadi-front-end.vercel.app/",
    github: "https://github.com/amirshkur22/EvangadiForum",
  },
  {
    num: "02",
    category: "Full-stack",
    title: "Amazon Clone",
    description:
      "A full-featured Amazon clone with functionalities such as product browsing, shopping cart, and payment integration. Technologies include React, Firebase for real-time database, Node.js for server, and Stripe for payments.",
    stack: [
      { name: "React" },
      { name: "Firebase" },
      { name: "Node.js" },
      { name: "Stripe" },
    ],
    image: "/assets/amazon.jpg",
    live: "https://amiramazonclone.netlify.app/",
    github: "https://github.com/amirshkur22/AmazoneClone",
  },
  {
    num: "03",
    category: "Full-stack",
    title: "Netflix Clone",
    description:
      "A full-stack clone of Netflix featuring movie browsing, user authentication, and a responsive design. Built with React for the UI, CSS3 for styling, and Node.js for server-side logic.",
    stack: [{ name: "React" }, { name: "CSS 3" }, { name: "Node.js" }],
    image: "/assets/netflix.jpg",
    live: "https://amirnetflix.netlify.app/",
    github: "https://github.com/amirshkur22/NetFlixCloneUsingReact",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Apple Website",
    description:
      "A visually appealing static website replicating the Apple homepage, built with React.js, CSS, Bootstrap 5. This project showcases my skills in creating responsive and modern layouts.",
    stack: [{ name: "React" }, { name: "Bootstrap 5" }, { name: "CSS 3" }],
    image: "/assets/appleBootstrap.jpeg",
    live: "https://myfirstclone-nine.vercel.app/",
    github: "https://github.com/amirshkur22/AppleFrontEnd",
  },
  // {
  //   num: "05",
  //   category: "Full-stack",
  //   title: "Apple Full-stack Application",
  //   description:
  //     "A comprehensive web application for Apple product management, utilizing React.js for the frontend, Bootstrap for styling, and Node.js for backend services.",
  //   stack: [{ name: "React.js" }, { name: "Bootstrap" }, { name: "Node.js" }],
  //   image: "/assets/appleFullstack.jpg",
  //   live: "",
  //   github: "https://github.com/amirshkur22/AppleFullStack",
  // },

  // {
  //   num: "06",
  //   category: "Full-stack",
  //   title: "E-commerce App",
  //   description:
  //     "An e-commerce application featuring product listings, user authentication, and order management. It uses Next.js for server-side rendering, MySQL for database operations, and Node.js for the backend.",
  //   stack: [{ name: "Next.js" }, { name: "MySQL" }, { name: "Node.js" }],
  //   image: "/assets/e-commerce.jpg",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "07",
  //   category: "Full-stack",
  //   title: "ELMS App",
  //   description:
  //     "An E-Learning Management System (ELMS) application for course management and student enrollment. Built with Next.js for the frontend, Tailwind CSS for styling, and Node.js for backend services.",
  //   stack: [{ name: "Next.js" }, { name: "Tailwind CSS" }, { name: "Node.js" }],
  //   image: "/assets/elms.jpeg",
  //   live: "",
  //   github: "",
  // },
  // {
  //   num: "08",
  //   category: "Full-stack",
  //   title: "Booking App",
  //   description:
  //     "A full-stack booking application for reservations and appointments, featuring a user-friendly interface, real-time availability checking, and secure user authentication. Developed using React for the frontend, MySQL for database management, and Node.js for backend operations.",
  //   stack: [{ name: "React" }, { name: "MySQL" }, { name: "Node.js" }],
  //   image: "/assets/booking.png",
  //   live: "",
  //   github: "",
  // },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl font-extrabold leading-none text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white first:group-hover:text-accent-default transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent-default">
                    {stack.name} {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-5">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent-hover" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 md:w-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                <div className="relative group flex justify-center items-center bg-pink-50/20">
                  <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                  <div className="relative w-full h-full flex justify-center items-center">
                    <div className="relative w-full h-auto">
                      <Image
                        src={project.image}
                        layout="intrinsic"
                        width={600}
                        height={100}
                        className="object-cover"
                        alt=""
                        style={{
                          width: '100%',
                          height: 'auto', 
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              
              ))}
              <WorkSliderBtns
                containerStyles=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-50 z-20 w-full justify-between xl:w:max xl:justify-none"
                btnStyles=" bg-accent-default hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
