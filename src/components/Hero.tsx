import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center section-padding pt-32"
    >
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <span className="text-primary font-medium">¡Hola! Soy</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-4">
            Tu Nombre
          </h1>
          <h2 className="text-2xl md:text-3xl text-white/80 font-light mb-6">
            Desarrollador Frontend
          </h2>
          <p className="text-white/60 text-lg mb-8 max-w-lg">
            Especializado en crear experiencias web modernas y atractivas,
            combinando diseño y funcionalidad para dar vida a interfaces únicas.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full transition-colors"
          >
            Contáctame
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-full overflow-hidden border-4 border-primary/20 glass-card">
            <img
              src="/placeholder.svg"
              alt="Tu Nombre"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;