import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
const Header = () => {
  return (
    <header className="pb-20 pt-5  text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className=" text-4xl font-semibold">
            {" "}
            Amir<small className=" text-accent-default text-xs ps-1">S</small>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/Contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;
