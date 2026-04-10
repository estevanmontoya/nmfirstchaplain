import { CheckCircle } from "lucide-react";

const modules = [
  "The Origins and History of Chaplaincy",
  "Starting Your Journey in Law Enforcement Chaplaincy",
  "Ethical Standards and Confidentiality",
  "The Chaplain on Scene",
  "Supporting Officer Families",
  "Department Events and Traditions",
  "Officer Wellness and Resilience",
  "Suicide Awareness and Intervention",
  "Death Notifications",
  "Chaplain Resiliency and Wellness",
];

const TrainingSection = () => (
  <section id="training" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">
            NMLEA-Approved Course
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            Basic Law Enforcement Chaplain Training
          </h2>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="h-4 w-4" />
            Approved by NMLEA
          </div>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This course provides foundational training for individuals serving or preparing to serve as law enforcement chaplains. The training equips chaplains with the knowledge, ethical framework, and practical skills necessary to support officers, departments, and their families.
          </p>
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <p className="font-display text-4xl text-primary">16</p>
              <p className="text-muted-foreground text-sm mt-1">Hours of Instruction</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-primary">10</p>
              <p className="text-muted-foreground text-sm mt-1">Course Modules</p>
            </div>
            <div className="text-center">
              <p className="font-display text-4xl text-primary">NM</p>
              <p className="text-muted-foreground text-sm mt-1">Statewide Service</p>
            </div>
          </div>
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors"
          >
            Request Training Info
          </a>
        </div>
        <div className="space-y-3">
          {modules.map((mod, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-muted rounded-lg px-5 py-4 hover:bg-muted/80 transition-colors"
            >
              <span className="text-primary font-bold text-sm w-7 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground text-sm font-medium">{mod}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TrainingSection;
