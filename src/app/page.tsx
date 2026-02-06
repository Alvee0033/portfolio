import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Chatbot from "@/components/Chatbot";
import ParticleField from "@/components/ParticleField";
import CursorTrail from "@/components/CursorTrail";
import Preloader from "@/components/Preloader";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-white relative overflow-x-hidden selection:bg-cyan-500/30">
      <Preloader />

      {/* Background Elements */}
      <div className="bg-horizon-glow" /> {/* Dynamic Lighting */}
      <div className="bg-cyber-grid" />   {/* Perspective Grid */}

      <CursorTrail />
      <ParticleField />

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <TechStack />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </div>

      <Chatbot />

      <footer className="py-8 text-center text-white/40 text-sm border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="mt-1">Designed and built with <span className="text-red-400">♥</span> using Next.js</p>
      </footer>
    </main>
  );
}
