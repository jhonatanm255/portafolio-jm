import { useEffect } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    const options = {
      strings: [
        '<i class="text-primary text-2xl">Desarrollo Frontend</i>',
        '<i class="text-primary text-2xl">Diseño UI UX</i>',
        '<i class="text-primary text-2xl">Desarrollo de Software</i>',
        '<i class="text-primary text-2xl">Diseño Responsivo y SEO</i>',
      ],
      typeSpeed: 75,
      startDelay: 300,
      backSpeed: 75,
      smartBackspace: true,
      shuffle: false,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: "html",
    };

    const typed = new Typed(".typed", options);
    return () => {
      typed.destroy(); // Limpia cuando el componente se desmonta
    };
  }, []);

  return (
    <section className="hero-section">
      <h1>
        <span className="typed"></span>
      </h1>
    </section>
  );
};

export default HeroSection;
