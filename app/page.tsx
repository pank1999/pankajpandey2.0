import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      {/* Add other components below */}
    </main>
  );
}
