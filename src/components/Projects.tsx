import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import projectsData from "../data/projectsData.json";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFramer,
  SiVite,
  SiPython,
  SiSupabase,
  SiDjango,
  SiGooglegemini,
  SiPhp
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";

// Mapeo de tecnologías a iconos
const techIcons = {
  react: <SiReact className="text-[#61DAFB]" />,
  javascript: <SiJavascript className="text-[#F7DF1E]" />,
  typescript: <SiTypescript className="text-[#3178C6]" />,
  tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
  nextjs: <SiNextdotjs className="text-white" />,
  node: <SiNodedotjs className="text-[#339933]" />,
  express: <SiExpress className="text-white" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  firebase: <IoLogoFirebase className="text-[#F59E0B]" />,
  html: <SiHtml5 className="text-[#E34F26]" />,
  css: <SiCss3 className="text-[#1572B6]" />,
  git: <SiGit className="text-[#F05032]" />,
  github: <SiGithub className="text-white" />,
  framer: <SiFramer className="text-white" />,
  vite: <SiVite className="text-[#646CFF]" />,
  python: <SiPython className="text-[#3776AB]" />,
  django: <SiDjango className="text-[#092E20]" />,
  supabase: <SiSupabase className="text-[#33AE77]"/>,
  gemini: <SiGooglegemini className="text-[#1492FC]"/>,
  api: <TbApi className="text-3xl flex items-center -mt-1 text-[#fff]"/>,
  php: <SiPhp className="text-[#777BB3] text-3xl -mt-1"/>,
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
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
                <div className="flex items-start gap-2 mb-4">
                  <p className="text-white/60 line-clamp-2 flex-1">
                    {project.description}
                  </p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-sm text-primary mt-7 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Ver más
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xl"
                      title={tag}
                    >
                      {techIcons[tag.toLowerCase()] || tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black border rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl w-[80%] md:w-[100%] font-semibold">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-white text-xl hover:text-primary"
                  >
                    ✕
                  </button>
                </div>

                <div className="aspect-video bg-gray-800 rounded-md mb-6 overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-white/80 mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xl"
                      title={tag}
                    >
                      {techIcons[tag.toLowerCase()] || tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-black rounded hover:bg-primary/80 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver demo
                  </a>
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded hover:bg-white/20 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;