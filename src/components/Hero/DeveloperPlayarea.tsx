import React from "react";

const DeveloperPlayarea: React.FC = () => {
  return (
    <div>
      {/* <video
        src="/herogreen.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 z-0 w-[100vw] h-full object-contain mix-blend-multiply"
      /> */}
      <video
        className="absolute top-0 z-0 w-[100vw] h-[100%] object-cover sm:object-fill mix-blend-multiply border-bottom"
        autoPlay
        muted
        loop
      >
        <source src="heroblue.mp4" type="video/mp4" />
      </video>
      {/* <h1>Hello, 
        I am Ashish Bisht.
      </h1> */}
    </div>
  );
};

export default DeveloperPlayarea;
