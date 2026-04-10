import { User } from "lucide-react";

const instructors = [
  {
    name: "Chaplain Jeff Carr",
    role: "Lead Instructor",
    bio: "Chaplain Jeff Carr brings extensive experience in law enforcement chaplaincy to NMFC's training program. His background spans years of frontline ministry alongside officers and their families, equipping him to deliver training that is both practically grounded and deeply compassionate.",
  },
  {
    name: "Instructor Name",
    role: "Instructor",
    bio: "Bio paragraph for the second NMFC instructor. This section can be updated with their full name, title, and background once provided. Each instructor card is designed to highlight their experience and commitment to supporting the law enforcement chaplaincy community.",
  },
];

const InstructorsSection = () => (
  <section id="instructors" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3 text-center">Leadership</p>
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 text-center">Meet the Instructors</h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
        Experienced chaplains committed to equipping the next generation of law enforcement chaplaincy.
      </p>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {instructors.map((inst) => (
          <div key={inst.name} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center mb-6">
              <User className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl text-card-foreground">{inst.name}</h3>
            <p className="text-primary text-sm font-medium mb-1">{inst.role}</p>
            <p className="text-muted-foreground text-xs mb-4">New Mexico First Chaplains</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{inst.bio}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection;
