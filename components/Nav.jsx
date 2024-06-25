"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "services",
    path: "/Services",
  },
  {
    name: "resume",
    path: "/Resume",
  },
  {
    name: "MyProjects",
    path: "/MyProjects",
  },
  {
    name: "contact",
    path: "/Contact",
  },
];
const Nav = () => {
  const pathName = usePathname();
  // console.log(pathName)
  return (
    <nav className="  flex gap-10">
      {links.map((link, i) => {
        return (
          <Link
            href={link.path}
            key={i}
            className={`${
              link.path === pathName &&
              " text-accent-default border-b-2 border-accent-default"
            } capitalize font-medium hover:text-accent-hover transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
