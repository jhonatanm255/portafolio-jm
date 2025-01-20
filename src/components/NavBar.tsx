import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
        isScrolled ? "bg-card/80 backdrop-blur-md py-4" : "bg-black/30 backdrop-blur-sm py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gradient">
          Portfolio
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={`${
            isMenuOpen
              ? "absolute top-full left-0 right-0 bg-card/95 backdrop-blur-md py-4 animate-menu-down"
              : "hidden md:block md:static md:bg-transparent md:py-0 md:animate-none"
          } md:block md:static md:bg-transparent md:py-0 transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row items-center gap-6 px-6 md:px-0">
            {["Inicio", "Tecnologías", "Proyectos", "Habilidades", "Contacto"].map(
              (item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/80 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;