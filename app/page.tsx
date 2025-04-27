import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="contact">
        <Contact />
      </div>
      {/* Add other components below */}
    </main>
  );
}
