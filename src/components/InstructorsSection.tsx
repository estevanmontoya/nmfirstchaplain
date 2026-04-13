import { User } from "lucide-react";
import carrJeffImg from "@/assets/carr-jeff.jpg";
import chrisKeelingImg from "@/assets/chris-keeling.jpg";

const instructors = [
  {
    name: "Chaplain Jeff Carr",
    role: "Lead Instructor",
    image: carrJeffImg,
    bio: [
      "Lead Chaplain for the Sandoval County Sheriff's Office",
      "28 Years as a Law Enforcement Chaplain",
      "ICPC Master Chaplain & Instructor",
      "NMLEA Professional Lecturer",
      "Author of NMLEA Approved Law Enforcement Chaplain Training",
      "Founder of Back the Blue Ministries and New Mexico FIRST Chaplains",
      "NM Crisis Support Team Member",
    ],
  },
  {
    name: "Chris Keeling Sr.",
    role: "Instructor",
    image: chrisKeelingImg,
    bio: [
      "Retired Deputy – Los Angeles County Sheriff's Department (33 years of service)",
      "4 Years of Service in Law Enforcement Chaplaincy",
      "Law Enforcement Chaplain – Sandoval County Sheriff's Office",
      "Chaplain – Blue Cancer Connect",
      "NMLEA Professional Lecturer",
      "NM Crisis Support Team Member",
    ],
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
            {inst.image ? (
              <img
                src={inst.image}
                alt={inst.name}
                className="h-24 w-24 rounded-full object-cover object-top mb-6"
                loading="lazy"
              />
            ) : (
              <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center mb-6">
                <User className="h-10 w-10 text-muted-foreground" />
              </div>
            )}
            <h3 className="font-display text-xl text-card-foreground">{inst.name}</h3>
            <p className="text-primary text-sm font-medium mb-1">{inst.role}</p>
            <p className="text-muted-foreground text-xs mb-4">New Mexico First Chaplains</p>
            <ul className="space-y-1">
              {inst.bio.map((item, i) => (
                <li key={i} className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2">
                  <span className="text-primary mt-1.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default InstructorsSection;
