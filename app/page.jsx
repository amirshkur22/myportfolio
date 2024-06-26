import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import TypeWriter from "@/components/TypeWriter";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className=" h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6 text-accent-default"> Amir Shkur</h1>
            <TypeWriter />
            <p className="max-w-[500px] mb-9 text-white/80">
              I am a passionate junior web developer based in Ethiopia,
              specializing in full-stack development with a strong focus on the
              MERN stack. Driven by a love for coding and problem-solving, I am
              always eager to work on exciting and innovative projects. I am
              committed to continuously enhancing my skills in the full-stack
              development landscape. <br />
              <br />
              Let's connect and create something amazing together!
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className=" mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6 justify-items-center items-center"
                  iconStyles="w-12 h-12 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-hover hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div>
            <Photo className=" order-1 xl:order-none mb-8 xl:mb-0" />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
