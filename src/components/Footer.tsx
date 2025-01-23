import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <>
    <hr />
    <footer className="py-8 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60">
            © {new Date().getFullYear()} Jhonatan Muñoz Dev
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jhonatanm255"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jhonatan-mu%C3%B1oz-1aa8bb28b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="jhonatan@jhoncode.com"
              className="text-white/60 hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;