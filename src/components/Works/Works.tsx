import React from "react";
import SingleWork from "./SingleWork";
import ContainerHeading from "../Canvas/ContainerHeading";

const Works = () => {
  const works = [
    {
      title: "PartnerGate",
      time: "(01/2023 - 09/2023)",
      description: [
        "Developed a dynamic web application using React JS, Node JS, MySQL, and Python technologies.",
        "Reverse engineered a Vue.js project and proficiently converted it into a fully functional React.js application",
        "Implemented the Webcc Library to enable interactive window drawing and precise manual calculations of dimensions.",
      ],
      image: "/partnergate.png",
      index: 1,
      url: "https://partnergate.co.in",
    },
    {
      title: "Blackjet",
      time: "(09/2023 - Present)",
      description: [
        "Created the marketing website using React JS, Tailwind, SVG Animations.",
        "Implemented the Pannallem to enable 3D viewing and tour inside the private plane.",
      ],
      image: "/blackjet.svg",
      index: 2,
      url: "https://test.blackjet.au/",
    },
    {
      title: "SCCH",
      time: "(09/2023 - 01/2024)",
      description: [
        "Contributed to a Government Project with STPI, showcasing expertise in the MERN stack.",
        "Implemented a seamless multi-module login system within the application.",
      ],
      image: "/scch.svg",
      index: 3,
      url: "http://13.126.131.184/SCCH_STPI/",
    },
    {
      title: "Recrutium",
      time: "(07/2022 - 12/2022)",
      description: [
        "Developed a dynamic web application using React JS, Node JS, MySQL, and Python technologies.",
        "Employed Redux to efficiently manage states and seamlessly integrated multiple modules into a unified website, ensuring enhanced performance and a seamless user experience.",
      ],
      image: "/recrutium.png",
      index: 4,
      url: "https://techugoapps.com/Recrutium/",
    },
  ];

  return (
    <section id="projects">
      <ContainerHeading heading="Projects" />
      {works?.map((work) => (
        <SingleWork key={work.title} work={work} />
      ))}
    </section>
  );
};

export default Works;
