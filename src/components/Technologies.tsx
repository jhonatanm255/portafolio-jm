import { motion } from "framer-motion";

const technologies = {
  mastered: [
    { name: "HTML", icon: "💻", level: "Avanzado" },
    { name: "CSS", icon: "🎨", level: "Avanzado" },
    { name: "JavaScript", icon: "⚡", level: "Avanzado" },
    { name: "React", icon: "⚛️", level: "Avanzado" },
    { name: "Tailwind", icon: "🌊", level: "Avanzado" },
    { name: "Git", icon: "📦", level: "Intermedio" },
    { name: "GitHub", icon: "🐙", level: "Intermedio" },
  ],
  learning: [
    { name: "TypeScript", icon: "📘", level: "Aprendiendo" },
    { name: "Node.js", icon: "🟢", level: "Aprendiendo" },
    { name: "Express", icon: "🚂", level: "Aprendiendo" },
  ],
};

const Technologies = () => {
  return (
    <section id="tecnologias" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologías</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino y las que estoy aprendiendo para
            crear soluciones web modernas y escalables.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Tecnologías dominadas */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Tecnologías que domino
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.mastered.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform"
                >
                  <span className="text-4xl mb-4 block">{tech.icon}</span>
                  <h3 className="text-lg font-medium mb-2">{tech.name}</h3>
                  <span className="text-sm text-primary">{tech.level}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tecnologías en aprendizaje */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              Tecnologías en aprendizaje
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.learning.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 text-center hover:scale-105 transition-transform"
                >
                  <span className="text-4xl mb-4 block">{tech.icon}</span>
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