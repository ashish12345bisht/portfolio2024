import Experience from "@/components/Experience/Experience";
import Hero from "@/components/Hero/Hero";
import Works from "@/components/Works/Works";
import Technologies from "@/components/Technologies/Technologies";
import Certificates from "@/components/Certificates/Certificates";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className="main-container relative">
      <Hero />
      <Works />
      <Experience />
      <Technologies />
      <Certificates />
      <Contact />
      <Footer />
      <div className="profile">
        <img alt="profile" src="/myself.png" />
        <h1>Hi! I am Ashish</h1>
      </div>
    </main>
  );
}
