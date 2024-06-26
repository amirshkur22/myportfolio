import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/amir-shkur/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/amirshkur22/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://wa.me/0987273552",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => (
        <a key={i} href={item.path} className={iconStyles} target="_blank">
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
