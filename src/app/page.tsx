import Hero from "@/components/hero/Hero";
import "./index.scss";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import TechStack from "@/components/techStack/TechStack";

export const metadata = {
  title: "Anuja Rahul - Home",
};

export default function Home() {
  return (
    <main className="h-auto min-h-screen py-12">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
