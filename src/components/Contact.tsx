import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
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

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="glass-card p-8">
              <div className="grid gap-6">
                <a
                  href="mailto:tu@email.com"
                  className="p-4 hover:bg-white/5 rounded-xl transition-colors group flex items-center gap-4"
                >
                  <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-white/60">tu@email.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 hover:bg-white/5 rounded-xl transition-colors group flex items-center gap-4"
                >
                  <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <h3 className="font-medium mb-1">GitHub</h3>
                    <p className="text-white/60">@tuusuario</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 hover:bg-white/5 rounded-xl transition-colors group flex items-center gap-4"
                >
                  <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <div className="text-left">
                    <h3 className="font-medium mb-1">LinkedIn</h3>
                    <p className="text-white/60">@tuusuario</p>
                  </div>
                </a>

                <Button
                  className="w-full group"
                  onClick={() => window.open("/cv.pdf", "_blank")}
                >
                  <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  Descargar CV
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-card p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;