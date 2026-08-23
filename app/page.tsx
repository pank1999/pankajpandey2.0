import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Header from "./components/Header";
import CustomCursor from "./components/CustomCursor";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060913] text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      <CustomCursor />
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
      <Chatbot />
      
      {/* Footer */}
      <footer className="py-8 border-t border-slate-800/80 bg-[#04060d] text-center text-xs font-mono text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Pankaj Pandey. Engineered with Next.js, Three.js & Tailwind CSS.</p>
          <div className="flex items-center gap-4 text-cyan-400">
            <span>✨ 3D Immersive Portfolio</span>
            <span>•</span>
            <a href="#hero" className="hover:underline">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

