import React from "react";
import { useState, useEffect} from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";
const links = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Beyond Coding",
    href: "#beyondCoding",
  },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "py-3" : "py-5"} z-50`}>
      <nav className={`container mx-auto px-6 flex items-center justify-between gap-4 ${isScrolled ? "glass-strong rounded-none md:rounded-md px-4 py-3" : "glass rounded-none md:rounded-md px-4 py-3"}`}>
        <a
          href="#"
          className="text-lg sm:text-xl font-semibold uppercase tracking-[0.3em] text-secondary-foreground hover:text-primary transition-colors"
        >
          M<span className="text-primary">.</span>pjp
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="data-card rounded-md px-2 py-2 flex items-center gap-1">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground rounded-sm hover:bg-primary/8 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/*cta button*/}
        <div className="hidden md:block">
          <Button size="sm" href="#contact">Contact Me</Button>
        </div>
        {/*mobile menu*/}

        <button
          className="md:hidden data-card rounded-md p-3 text-foreground cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </button>
      </nav>
      {/*mobile menu items*/}
      {isMenuOpen && (
        <div className="md:hidden container mx-auto px-6 pt-3 animate-fade-in">
          <div className="glass-strong rounded-md px-6 py-6 flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={()=>setIsMenuOpen(false)}
                className="text-sm uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={()=>setIsMenuOpen(false)} href="#contact">
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
