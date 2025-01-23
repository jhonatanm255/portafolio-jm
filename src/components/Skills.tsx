import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["Desarrollo de interfaces", "Optimización web", "SEO básico", "Diseño Responsivo"],
  },
  {
    category: "Diseño",
    items: ["UI/UX", "Prototipado", "Diseño Mobile First", "Accesibilidad"],
  },
  {
    category: "Herramientas",
    items: ["Control de versiones", "Deploy"],
  },
];

const Skills = () => {
  return (
    <section id="habilidades" className="section-padding">
      <div className="lg:container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-skills text-3xl md:text-4xl font-bold mb-4">
            Habilidades<span className="text-primary">.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Competencias y conocimientos que he desarrollado a lo largo de mi
            carrera profesional.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;