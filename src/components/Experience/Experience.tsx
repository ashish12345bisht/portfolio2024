"use client";
import React from "react";
import ExperienceCard from "../Cards/ExperienceCard/ExperienceCard";
import ContainerHeading from "../Canvas/ContainerHeading";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";

const Experience = () => {
  const experience = [
    {
      title: "Techugo Pvt Ltd",
      position: "React JS Developer",
      description: [
        "Developed projects from scratch and delivered responsive web pages for Fixed Model and T&M Projects, ensuring exceptional user experiences aligned with client needs.",
        "Tech Stack: React JS, Node JS, React Redux, GitHub (version control).",
        "Worked with STPI Delhi, Government of India.",
        "Proficient in advanced libraries: Webcc, Threejs, Material UI, Tailwind, React-player & OpenLayers",
      ],
      image: "/techugo.jpeg",
      timeline: "03/2022 - Present",
      index: 1,
      url: "",
    },
    {
      title: "A Plus Digital Solution",
      position: "Frontend Developer",
      description: [
        "Proficient in JavaScript and WordPress technologies.",
        "Developed custom pages to cater to specific client requirements.",
        "Conducted research and development to explore resources for advanced projects.",
      ],
      image: "/aplus.png",
      timeline: "09/2021 - 02/2022",
      index: 2,
      url: "",
    },
    {
      title: "Sociolabs",
      position: "Frontend Developer Intern",
      description: [
        "Proficient in JavaScript and WordPress technologies.",
        "Developed custom pages to cater to specific client requirements.",
        "Conducted research and development to explore resources for advanced projects.",
      ],
      image: "/sociolabs-logo.png",
      timeline: "04/2021 - 06/2021",
      index: 3,
      url: "",
    },
  ];
  const isMobileScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <section id="experience">
      <ContainerHeading heading="Experience" />
      <div className="w-[90vw] m-auto">
        <Carousel
          className="w-3/4 m-auto"
          // orientation={isMobileScreen ? "vertical" : "horizontal"}
        >
          <CarouselContent>
            {experience?.map((experience) => (
              <CarouselItem key={experience.title}>
                <ExperienceCard
                  key={experience.title}
                  experience={experience}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Experience;
