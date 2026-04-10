import officersImg from "@/assets/officers.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Who We Are</p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            New Mexico First Chaplains
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            New Mexico First Chaplains exists to assist law enforcement agencies in establishing and strengthening chaplaincy programs that support officers, staff, and their families.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            NMFC provides training, guidance, and support for chaplains serving the law enforcement community throughout New Mexico — helping departments build resilient, well-equipped chaplain units grounded in professional and ethical standards.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our mission is to equip chaplains who stand alongside those who serve — offering presence, support, and care when it matters most.
          </p>
          <a
            href="#contact"
            className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
          >
            Connect with NMFC
          </a>
        </div>
        <div className="relative">
          <img
            src={officersImg}
            alt="Law enforcement officers at ceremony"
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-4 border-primary rounded-lg -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
