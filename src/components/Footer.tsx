import { Github, Linkedin, Mail } from "lucide-react";
import FooterLinks from "./FooterLinks";

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

          <FooterLinks />
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;