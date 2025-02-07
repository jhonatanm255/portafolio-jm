import React from 'react'
import { Github, Linkedin, Mail } from "lucide-react";

function FooterLinks() {
  return (
    <div>
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
  );
}

export default FooterLinks
