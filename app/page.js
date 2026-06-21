import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
 return (
      <main className="min-h-screen bg-gradient-to-br from-slate-800 to-blue-400">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}