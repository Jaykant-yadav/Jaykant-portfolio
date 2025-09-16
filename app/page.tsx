import Hero from "@/components/Hero";
import Projects from "./projects/page";
import About from "./about/page";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </>
  );
}
