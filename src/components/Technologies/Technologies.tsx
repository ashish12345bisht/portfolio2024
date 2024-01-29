"use client";
import React, { useState } from "react";
import ContainerHeading from "../Canvas/ContainerHeading";
import BallCanvas from "../Canvas/BallCanvas";
import TextCanvas from "../Canvas/TextCanvas";

const Technologies = () => {
  const [text, setText] = useState("Click on any ball");
  const [positions, setPositions] = useState({
    cameraPosition: [12, 0, 0] as [number, number, number],
    textPosition: [-6.5, 0, 0] as [number, number, number],
  });

  const technologiesLeftArr = [
    {
      index: 1,
      image: "/javascript.png",
      text: "Javascript",
      positions: {
        cameraPosition: [8, 0, 0],
        textPosition: [-4, 0, 0],
      },
    },
    {
      index: 2,
      image: "/react.js-img.png",
      text: "React JS",
      positions: {
        cameraPosition: [6, 0, 0],
        textPosition: [-3, 0, 0],
      },
    },
    {
      index: 3,
      image: "/nextjs.png",
      text: "Next JS",
      positions: {
        cameraPosition: [5, 0, 0],
        textPosition: [-2.5, 0, 0],
      },
    },
    {
      index: 4,
      image: "/node-js.jpg",
      text: "Node",
      positions: {
        cameraPosition: [4, 0, 0],
        textPosition: [-1.75, 0, 0],
      },
    },
    {
      index: 5,
      image: "/express-js.png",
      text: "Express",
      positions: {
        cameraPosition: [5, 0, 0],
        textPosition: [-3, 0, 0],
      },
    },
    {
      index: 6,
      image: "/mongodb.svg",
      text: "MongoDB",
      positions: {
        cameraPosition: [6, 0, 0],
        textPosition: [-3.5, 0, 0],
      },
    },
  ];

  const technologiesRightArr = [
    {
      index: 7,
      image: "/git.png",
      text: "GIT",
      positions: {
        cameraPosition: [3, 0, 0],
        textPosition: [-1.25, 0, 0],
      },
    },
    {
      index: 8,
      image: "/C++.png",
      text: "C++",
      positions: {
        cameraPosition: [3, 0, 0],
        textPosition: [-1.5, 0, 0],
      },
    },
    {
      index: 9,
      image: "/three.png",
      text: "Three JS",
      positions: {
        cameraPosition: [5, 0, 0],
        textPosition: [-3, 0, 0],
      },
    },
    {
      index: 10,
      image: "/framer-motion.png",
      text: "Framer Motion",
      positions: {
        cameraPosition: [9, 0, 0],
        textPosition: [-5, 0, 0],
      },
    },
    {
      index: 11,
      image: "/tailwind.png",
      text: "Tailwind",
      positions: {
        cameraPosition: [5, 0, 0],
        textPosition: [-3, 0, 0],
      },
    },
    {
      index: 12,
      image: "/mySQL.png",
      text: "MySQL",
      positions: {
        cameraPosition: [4, 0, 0],
        textPosition: [-2.5, 0, 0],
      },
    },
  ];

  const handleTechnologyClick = (technology: any) => {
    setText(technology?.text);
    setPositions(technology?.positions);
  };

  return (
    <section id="technologies">
      <ContainerHeading heading="Technologies" />
      <div className="flex h-auto sm:flex-col w-full">
        <div className="w-1/6 sm:w-full sm:flex flex-wrap sm:items-center">
          {technologiesLeftArr?.map((technology) => (
            <BallCanvas
              key={technology?.image}
              icon={technology?.image}
              onClick={() => handleTechnologyClick(technology)}
            />
          ))}
        </div>
        <div className="w-4/6 sm:w-full">
          <TextCanvas positions={positions} text={text} />
        </div>
        <div className="w-1/6 sm:w-full sm:flex flex-wrap sm:items-center">
          {technologiesRightArr?.map((technology) => (
            <BallCanvas
              key={technology?.image}
              icon={technology?.image}
              onClick={() => handleTechnologyClick(technology)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
