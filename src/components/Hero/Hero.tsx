import StarsCanvas from "../Canvas/StarsCanvas";
import DeveloperPlayarea from "./DeveloperPlayarea";

const Hero = () => {
  return (
    <section id="home" className="relative z-0 h-svh sm:h-[400px]">
      <div className="absolute z-10 h-full w-full">
        <StarsCanvas />
      </div>
      <div className="flex h-full items-center justify-evenly">
        <div className="w-1/2">
          <DeveloperPlayarea />
        </div>
        <div className="w-1/2">
          <div className="relative m-auto w-2/3"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
