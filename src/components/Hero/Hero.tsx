import StarsCanvas from "../Canvas/StarsCanvas";
import DeveloperPlayarea from "./DeveloperPlayarea";

const Hero = () => {
  return (
    <section id="home" className="relative z-0 h-svh sm:h-[400px]">
      <div className="absolute w-full h-full z-10">
        <StarsCanvas />
      </div>
      <div className="flex items-center justify-evenly h-full">
        <div className="w-1/2">
          <DeveloperPlayarea />
        </div>
        <div className="w-1/2">
          <div className="relative  w-2/3 m-auto ">
            {/* <svg className='absolute top-[0%] left-[20%] inset-0 w-[400px] h-[400px]' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <clipPath id="shape">
                                    <path fill="#455CE9" d="M37,-54.9C50.8,-56,67,-52,68.5,-42C70,-32,56.6,-16,52.1,-2.6C47.6,10.8,51.8,21.6,49.2,29.6C46.6,37.7,37.3,43,27.9,49.3C18.6,55.5,9.3,62.7,-0.2,63C-9.7,63.3,-19.4,56.8,-25.5,48.8C-31.7,40.7,-34.4,31,-40.1,22.6C-45.8,14.3,-54.5,7.1,-56.6,-1.3C-58.8,-9.6,-54.4,-19.3,-49.2,-28.4C-43.9,-37.5,-37.8,-46.1,-29.4,-48.2C-21.1,-50.3,-10.5,-45.8,0.5,-46.7C11.5,-47.5,23.1,-53.8,37,-54.9Z" transform="translate(100 100)" />
                                </clipPath>
                            </defs>
                        </svg> */}
            {/* <img
              className="hero-image rounded-full drop-shadow-2xl backdrop-contrast-150 bg-blend-color-burn"
              alt="my profile"
              src="/user-nobg.png"
            /> */}
          </div>
        </div>
      </div>
      {/* <div className="merger"></div> */}
    </section>
  );
};

export default Hero;
