import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? ¡Contáctame por cualquiera de estos
            medios!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <a
                href="mailto:tu@email.com"
                className="p-6 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <Mail className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">Email</h3>
                <p className="text-white/60">tu@email.com</p>
              </a>

              <a
                href="https://github.com/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <Github className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">GitHub</h3>
                <p className="text-white/60">@tuusuario</p>
              </a>

              <a
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <Linkedin className="w-8 h-8 mx-auto mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="font-medium mb-2">LinkedIn</h3>
                <p className="text-white/60">@tuusuario</p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;