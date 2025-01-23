import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur py-4" : "bg-black/30  py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p className="text-2xl font-bold text-gradient relative group">
          <span className="text-white">Jhon</span>Code
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
        </p>

        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
<<<<<<< HEAD
              transition={{ duration: 0.1  }}
              className="absolute top-full left-0 right-0 nav-blur py-8"
            >
              <ul className="flex flex-col items-center gap-8 px-6">
                {[
                  "Inicio",
                  "Tecnologías",
                  "Proyectos",
                  "Habilidades",
                  // "Contacto",
                ].map((item) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-white/80 hover:text-primary transition-colors relative group"
                      onClick={() => setIsMenuOpen(false)}
=======
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 nav-blur"
            >
              <ul className="flex flex-col items-center gap-6 px-6 py-4">
                {["Inicio", "Tecnologías", "Proyectos", "Habilidades", "Contacto"].map(
                  (item) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
>>>>>>> e1318f718de727d512cb9f3b62fdcb9023ca047b
                    >
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:block">
          <ul className="flex items-center gap-8">
            {[
              "Inicio",
              "Tecnologías",
              "Proyectos",
              "Habilidades",
              // "Contacto",
            ].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-white/80 hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;






