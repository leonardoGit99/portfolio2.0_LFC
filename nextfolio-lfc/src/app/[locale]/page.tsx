import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Aproach from "@/components/Aproach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Portfolio() {

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav />
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Experience />
        <Aproach />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
