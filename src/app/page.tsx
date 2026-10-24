import { Certificates, Contact, EarlierWork } from "@/sections/Closing";
import { Experience } from "@/sections/experience/Experience";
import { Hero } from "@/sections/hero/Hero";
import { Highlights } from "@/sections/Highlights";
import { PersonalProjects } from "@/sections/projects/PersonalProjects";
import { Writing } from "@/sections/blog/Writing";
import { SelectedWork } from "@/sections/work/SelectedWork";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Highlights />
      <SelectedWork />
      <PersonalProjects />
      <Experience />
      <Writing />
      <EarlierWork />
      <Certificates />
      <Contact />
    </main>
  );
}
