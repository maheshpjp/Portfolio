import { Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/maheshpjp", label: "GitHub" },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mahesh-kumar-prajapati-190721281/",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/maheshpjp/",
    label: "Instagram",
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-primary/15">
      <div className="container mx-auto px-6">
        <div className="section-frame glass-strong px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-lg font-semibold uppercase tracking-[0.3em] text-secondary-foreground">
              M<span className="text-primary">.</span>pjp
            </a>
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-3">
              © {currentYear} Mahesh Kumar Prajapati. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav className="data-card rounded-md px-4 py-3 flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 rounded-md data-card hover:bg-primary/10 hover:text-primary transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
