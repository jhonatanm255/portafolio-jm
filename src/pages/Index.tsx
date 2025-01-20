import { useEffect } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault();
      const target = (e.target as HTMLAnchorElement).getAttribute("href");
      if (target && target.startsWith("#")) {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <NavBar />
      <Hero />
      <Technologies />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;