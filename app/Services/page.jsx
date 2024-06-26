"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { delay, easeInOut, motion } from "framer-motion";
import Link from "next/link";
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "In the realm of web development, I specialize in creating robust, scalable, and visually compelling websites that not only look great but also perform seamlessly. Whether you need a simple blog, a dynamic e-commerce platform, or a complex web application, I bring your vision to life using the latest technologies and best practices. From responsive design to ensuring cross-browser compatibility, I am committed to delivering a web experience that meets your business goals and exceeds your expectations.",
    href: "",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "With a keen eye on usability and performance, I design and develop mobile applications that provide a seamless user experience on both iOS and Android platforms. From concept to deployment, I handle every aspect of mobile app development, including UI/UX design, backend integration, and app store optimization. My focus is on creating apps that are not only visually appealing but also offer a high level of functionality, ensuring that users have a positive and engaging experience.",
    href: "",
  },
  {
    num: "03",
    title: "Graphics Design",
    description:
      "As a graphic designer, I translate your ideas into captivating visuals that tell your story and resonate with your audience. Whether you need logos, brochures, social media graphics, or any other type of visual content, I combine creativity with technical skills to produce designs that are both beautiful and effective. My goal is to help you establish a strong visual identity and communicate your message clearly and compellingly through design.",
    href: "",
  },
  {
    num: "04",
    title: "UI/UX Design",
    description:
      "In the world of UI/UX design, I focus on creating interfaces that are not only aesthetically pleasing but also intuitive and user-centered. I use a blend of research, user feedback, and design principles to craft experiences that are easy to navigate and enjoyable to use. From wireframes and prototypes to final visual designs, I ensure that every element serves a purpose and contributes to a cohesive and satisfying user experience.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, i) => (
            <div
              key={i}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent-default transition-all duration-500 flex justify-center items-center hover:rotate-45"
                >
                  <BsArrowDownRight className=" text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold  leading-none text-white group-hover:text-accent-default transition-all duration-500">
                {service.title}
              </h2>
              <p className=" text-white/60">{service.description}</p>
              <div className="border-b border-white/80 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
