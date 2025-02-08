import { motion } from "framer-motion";
import "boxicons/css/boxicons.min.css"; // Asegúrate de importar el CSS de Boxicons

const technologies = {
  mastered: [
    {
      name: "HTML",
      icon: <i className="bx bxl-html5"></i>,
      level: "Intermedio",
      color: "text-orange-500", // Color de hover
    },
    {
      name: "CSS",
      icon: <i className="bx bxl-css3"></i>,
      level: "Intermedio",
      color: "text-blue-500",
    },
    {
      name: "JavaScript",
      icon: <i className="bx bxl-javascript"></i>,
      level: "Intermedio",
      color: "text-yellow-500",
    },
    {
      name: "React",
      icon: <i className="bx bxl-react"></i>,
      level: "Intermedio",
      color: "text-cyan-500",
    },
    {
      name: "Tailwind",
      icon: <i className="bx bxl-tailwind-css"></i>,
      level: "Intermedio",
      color: "text-teal-500",
    },
    {
      name: "Git",
      icon: <i className="bx bxl-git"></i>,
      level: "Básico",
      color: "text-red-500",
    },
    {
      name: "GitHub",
      icon: <i className="bx bxl-github"></i>,
      level: "Básico",
      color: "text-gray-500",
    },
    {
      name: "Firebase",
      icon: <i className="bx bxl-firebase"></i>,
      level: "Básico",
      color: "text-amber-500",
    },
  ],
  learning: [
    {
      name: "TypeScript",
      icon: <i className="bx bxl-typescript"></i>,
      level: "Aprendiendo",
      color: "text-blue-400",
    },
    {
      name: "Node.js",
      icon: <i className="bx bxl-nodejs"></i>,
      level: "Aprendiendo",
      color: "text-green-500",
    },
  ],
};

const Technologies = () => {
  return (
    <section
      id="tecnologías"
      className="section-padding relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Tecnologías<span className="text-primary">.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Herramientas y tecnologías que domino y las que estoy aprendiendo
            para crear soluciones web modernas y escalables.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Tecnologías dominadas */}
          <div>
            <h3 className="text-2xl text-center md:text-left font-semibold mb-6 text-primary">
              Tecnologías que domino
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.mastered.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform group"
                >
                  <span
                    className={`text-5xl mb-4 block group-hover:scale-110 transition-transform ${tech.color} group-hover:opacity-100 opacity-100`}
                  >
                    {tech.icon}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                  <span className="text-sm text-primary">{tech.level}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tecnologías en aprendizaje */}
          <div>
            <h3 className="text-2xl text-center md:text-left font-semibold mb-6 text-primary">
              Tecnologías en aprendizaje
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technologies.learning.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform group"
                >
                  <span
                    className={`text-5xl mb-4 block group-hover:scale-110 transition-transform ${tech.color} group-hover:opacity-100 opacity-80`}
                  >
                    {tech.icon}
                  </span>
                  <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                  <span className="text-sm text-primary/80">{tech.level}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;




