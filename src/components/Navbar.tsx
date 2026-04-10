import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/nmfc-logo.png";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Training", href: "#training" },
  { label: "Programs", href: "#programs" },
  { label: "Instructors", href: "#instructors" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-secondary/20">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="NMFC Logo" className="h-10 w-10" />
          <span className="font-display text-lg text-hero-foreground tracking-tight">
            New Mexico First Chaplains
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-hero-muted hover:text-hero-foreground transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-hero-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-navy border-t border-secondary/20 px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-hero-muted hover:text-hero-foreground uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-2 text-center bg-primary text-primary-foreground px-5 py-2 rounded text-sm font-semibold uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
