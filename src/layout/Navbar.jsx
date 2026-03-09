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
    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? "glass-strong py-3":"bg-transparent py-5"} z-50`}>
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          className="text-2xl font-bold tracking-tight hover:text-primary"
        >
          M<span className="text-primary">.</span>pjp
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
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
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </button>
      </nav>
      {/*mobile menu items*/}
      {isMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={()=>setIsMenuOpen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
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
