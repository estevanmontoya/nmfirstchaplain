import { Check } from "lucide-react";

const items = [
  "Guidance in establishing a chaplain unit within your department",
  "Program structure and policy development tailored to your agency",
  "Chaplain recruitment support and screening recommendations",
  "NMLEA-approved training access for new and existing chaplains",
  "Ongoing support for agencies throughout New Mexico",
];

const ProgramsSection = () => (
  <section id="programs" className="py-24 bg-muted">
    <div className="container mx-auto px-4 max-w-3xl">
      <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">Agency Support</p>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">Starting a Chaplain Program</h2>
      <p className="text-muted-foreground leading-relaxed mb-8">
        New Mexico First Chaplains assists agencies in developing chaplaincy programs that provide emotional and spiritual support for officers and their families.
      </p>
      <ul className="space-y-4 mb-10">
        {items.map((item) => (
          <li key={item} className="flex gap-3 items-start">
            <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
      <div className="bg-card border border-border rounded-lg p-8">
        <h3 className="font-display text-xl text-card-foreground mb-3">Let's Build Your Program</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          Whether you're starting from scratch or looking to strengthen an existing chaplain unit, NMFC is ready to walk alongside your agency. Reach out to begin the conversation.
        </p>
        <a
          href="#contact"
          className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default ProgramsSection;
