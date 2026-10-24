import React from "react";

const DeveloperPlayarea: React.FC = () => {
  return (
    <div>
      <video
        className="border-bottom absolute top-0 z-0 h-[100%] w-[100vw] object-cover mix-blend-multiply sm:object-fill"
        autoPlay
        muted
        loop
      >
        <source src="heroblue.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default DeveloperPlayarea;
