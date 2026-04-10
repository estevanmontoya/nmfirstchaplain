import { BookOpen, Building2, Heart } from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Chaplain Training",
    description:
      "The NMFC Basic Law Enforcement Chaplain Training — 16 hours of NMLEA-approved foundational instruction for chaplains serving law enforcement agencies across New Mexico.",
  },
  {
    icon: Building2,
    title: "Program Development",
    description:
      "Guidance and hands-on assistance for agencies interested in establishing a formal chaplain unit — from structure and policy to recruitment and deployment.",
  },
  {
    icon: Heart,
    title: "Officer & Family Support",
    description:
      "Encouraging emotional and spiritual resilience within the law enforcement community — supporting officers and their families through challenging moments and critical incidents.",
  },
];

const ServicesSection = () => (
  <section className="py-24 bg-muted">
    <div className="container mx-auto px-4">
      <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3 text-center">
        What We Offer
      </p>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 text-center">
        How NMFC Serves Agencies
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Three areas of focused support for New Mexico law enforcement departments.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow border border-border"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-xl text-card-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
