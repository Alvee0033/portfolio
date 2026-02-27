import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <div id="about" className="h-0 w-0 overflow-hidden" /> {/* scroll anchor */}
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}

