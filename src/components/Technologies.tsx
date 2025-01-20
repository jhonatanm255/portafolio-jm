import { motion } from "framer-motion";

const technologies = [
  { name: "HTML", icon: "💻" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "Tailwind", icon: "🌊" },
  { name: "Git", icon: "📦" },
  { name: "Firebase", icon: "🔥" },
  { name: "TypeScript", icon: "📘" },
  { name: "Node.js", icon: "🟢" },
];

const Technologies = () => {
  return (
    <section id="tecnologias" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tecnologías</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones web
            modernas y escalables.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center hover:scale-105 transition-transform"
            >
              <span className="text-4xl mb-4 block">{tech.icon}</span>
              <h3 className="text-lg font-medium">{tech.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;