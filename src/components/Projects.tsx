import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import project1 from "../../public/assets/img-projects/karina-dance.png"
import project2 from "../../public/assets/img-projects/learning.png";
import project3 from "../../public/assets/img-projects/residentes.png";
import project4 from "../../public/assets/img-projects/dashboard.png";

const projects = [
  {
    title: "Danza Karina Gym",
    description:
      "Landing page para una academia de danzas para niñas, con panel de administración para gestionar la galería, los eventos, testimonios y la sección de tienda. Sistema de eliminación automática para los eventos caducados. Diseño responsivo y optimizado para SEO.",
    image: project1,
    tags: ["React", "Typescript", "Tailwind", "Firebase", "Supabase"],
    links: {
      demo: "https://www.danzakarinagym.com",
      github: "https://github.com/jhonatanm255/karina-dance",
    },
  },
  {
    title: "Learning English",
    description:
      "Proyecto de PWA personal para aprender inglés, con un sistema de autenticación de Google, lecciones, traductor y un chatbot para practicar conversaciones. Además, cuenta con un sistema de actualizaciones para notificar y descargar versiones con mejoras, correcciones o nuevas funcionalidades.",
    image: project2,
    tags: ["React", "Tailwind", "Firebase", "Gemini Api"],
    links: {
      demo: "https://app-ingles.vercel.app/",
      github: "https://github.com/jhonatanm255/learning-english",
    },
  },
  {
    title: "Control de Condominios",
    description:
      "Proyecto de PWA para gestionar los residentes de uno o varios condominios, con un sistema de autenticación de Google, creación de cuentas con verificación por email, operaciones CRUD, persistencia de datos y migración de los mismos mediante código QR.",
    image: project3,
    tags: ["HTML", "Css", "Javascript", "Firebase"],
    links: {
      demo: "https://jhonatanm255.github.io/App-Nunoa/#",
      github: "https://github.com/jhonatanm255/App-Nunoa",
    },
  },
  {
    title: "Dashboard Financiero",
    description:
      "Creación de un dashboard como proyecto de práctica para visualizar activos financieros como: criptomonedas, acciones de empresas y datos de indicadores económicos de Chile, utilizando APIs financieras como: mindicador.cl, Binance y widget de TradingView, conectándolas mediante WebSocket. Incluye un diseño responsivo y dark mode para mejorar la accesibilidad.",
    image: project4,
    tags: ["HTML", "Css", "Javascript", "API"],
    links: {
      demo: "https://jhonatanm255.github.io/dashboard/",
      github: "https://github.com/jhonatanm255/dashboard",
    },
  },
];

const Projects = () => {
  return (
    <section id="proyectos" className="section-padding">
      <div className="lg:container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-projects text-3xl md:text-4xl font-bold mb-4">
            Proyectos Destacados<span className="text-primary">.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Una selección de mis mejores trabajos que demuestran mis habilidades
            y experiencia.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative aspect-video object-cover">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-white/60 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;