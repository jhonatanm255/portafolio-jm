import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import HeroTyped from "./ui/HeroTyped";
import foto from "../../public/assets/perfil.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Animated background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(234,179,8,0.15),transparent_80%)]"></div>

      <div className="mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10 px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left md:text-left sm:text-center"
        >
          <span className="text-primary font-medium block">¡Hola! Soy</span>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-2 mb-4">
            Jhonatan Muñoz
          </h1>
          <HeroTyped />
          <p className="text-white/60 text-base sm:text-lg md:text-xl mb-8 max-w-lg mx-auto sm:mx-0">
            Especializado en crear experiencias web modernas y atractivas,
            combinando diseño y funcionalidad para dar vida a interfaces únicas
            y proyectos innovadores.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10 text-black font-semibold">
              Contáctame
            </span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Tech-themed background patterns */}
          <div className="absolute inset-0 bg-circuit-pattern opacity-10 animate-pulse"></div>
          <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>

          <div className="aspect-square w-64 sm:w-72 md:w-80 lg:w-96 flex justify-center m-auto rounded-full overflow-hidden border-4 border-primary/20 glass-card relative group">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tech-themed decorative elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_107%,rgba(234,179,8,0.2)_0%,rgba(234,179,8,0.1)_5%,rgba(234,179,8,0.05)_45%,rgba(0,0,0,0)_80%)]"></div>
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(234,179,8,0.1)_0%,transparent_25%,transparent_100%)] animate-spin-slow"></div>

            <Code2 className="absolute top-4 right-4 text-primary w-6 sm:w-8 h-6 sm:h-8 animate-float" />
            <div className="absolute bottom-4 left-4 w-6 sm:w-8 h-6 sm:h-8 rounded-full border border-primary/30 animate-pulse"></div>
            <img
              src={foto}
              alt="Tu Nombre"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
