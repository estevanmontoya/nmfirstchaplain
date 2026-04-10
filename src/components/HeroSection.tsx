import { Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/nmfc-logo.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <img
      src={heroBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-navy/80" />
    <div className="relative container mx-auto px-4 pt-24 pb-16">
      <img src={logo} alt="NMFC Badge" className="h-24 w-24 mb-8 drop-shadow-lg" />
      <p className="text-gold font-semibold uppercase tracking-[0.25em] text-sm mb-4">
        New Mexico Law Enforcement Chaplaincy
      </p>
      <h1 className="font-display text-4xl md:text-6xl lg:text-7xl text-hero-foreground leading-tight max-w-3xl">
        Building & Equipping{" "}
        <span className="text-primary">Law Enforcement</span>{" "}
        Chaplaincy Programs
      </h1>
      <p className="mt-6 text-hero-muted text-lg md:text-xl max-w-xl leading-relaxed">
        Training and supporting chaplains who care for those who serve — throughout New Mexico.
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#contact"
          className="bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
        >
          Request Training Information
        </a>
        <a
          href="#training"
          className="border border-hero-muted/40 text-hero-foreground px-8 py-3.5 rounded font-semibold uppercase tracking-wider text-sm hover:bg-hero-foreground/10 transition-colors"
        >
          View the Course
        </a>
      </div>
    </div>
    <div className="absolute bottom-8 right-8 bg-hero-foreground/10 backdrop-blur-md border border-hero-foreground/20 rounded-lg px-5 py-3 hidden md:flex items-center gap-3">
      <Shield className="text-gold h-6 w-6" />
      <div>
        <p className="text-gold text-sm font-semibold">NMLEA Accredited</p>
        <p className="text-hero-muted text-xs">Training approved by the New Mexico Law Enforcement Academy</p>
      </div>
    </div>
  </section>
);

export default HeroSection;
