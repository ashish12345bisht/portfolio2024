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
  return (
    <section id="experience">
      <ContainerHeading heading="Experience" />
      <div className="m-auto w-[90vw]">
        <Carousel className="m-auto w-3/4">
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
