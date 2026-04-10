import logo from "@/assets/nmfc-logo.png";

const Footer = () => (
  <footer className="bg-navy py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="NMFC" className="h-8 w-8" />
          <span className="text-hero-foreground font-display text-sm">New Mexico First Chaplains</span>
        </div>
        <p className="text-hero-muted text-xs text-center">
          © {new Date().getFullYear()} New Mexico First Chaplains. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="mailto:jeff@nmfirstchaplains.org" className="text-hero-muted text-xs hover:text-hero-foreground transition-colors">
            jeff@nmfirstchaplains.org
          </a>
          <a href="tel:5053506984" className="text-hero-muted text-xs hover:text-hero-foreground transition-colors">
            (505) 350-6984
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
