import Hero from "./components/Hero";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Hero />
      <Experience />
      {/* Add other components below */}
    </main>
  );
}
