import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "./ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section id="contacto" className="section-padding relative overflow-hidden">
      {/* Background patterns and gradients */}
      <div className="absolute inset-0 bg-dots-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.15),transparent_70%)]"></div>
      
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
            className="h-full"
          >
            <div className="glass-card p-8 h-full flex flex-col justify-between group hover:bg-white/5 transition-colors duration-300">
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
              </div>

              <Button
                className="w-full group mt-6 relative overflow-hidden"
                onClick={() => window.open("/cv.pdf", "_blank")}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Download className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                  Descargar CV
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className="glass-card p-8 h-full group hover:bg-white/5 transition-colors duration-300">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;