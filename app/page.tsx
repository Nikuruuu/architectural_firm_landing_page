import AboutUs from "@/components/sections/AboutUs";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Methodology from "@/components/sections/Methodology";
import Philosophy from "@/components/sections/Philosophy";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Services />
      <Projects />
      <AboutUs />
      <Methodology />
      <Contact />
    </>
  );
}
