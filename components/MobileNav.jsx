"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
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
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className=" flex justify-center items-center">
        <CiMenuFries className=" text-[32px] text-accent-default" />
      </SheetTrigger>
      <SheetContent className=" flex flex-col">
        <div>
          <Link href="/">
            <h1 className=" text-4xl font-semibold">
              {" "}
              Amir<small className=" text-accent-default text-xs ps-1">S</small>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-5 pt-7">
          {links.map((link,index) => (
            <Link key={index}
              href={link.path}
              className={`${
                link.path === pathName &&
                "text-accent-default border-b-2 border-accent-default"
              } text-xl capitalize hover:text-accent-hover transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
