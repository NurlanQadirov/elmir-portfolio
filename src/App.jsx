// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


export default function App() {
  return (
    <div className="font-sans bg-[#050505] text-slate-300 antialiased selection:bg-purple-500/30">
      <Navbar />
      {/* pt-16 sildik, artıq Navbar Hero-nun üstündə üzəcək */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}