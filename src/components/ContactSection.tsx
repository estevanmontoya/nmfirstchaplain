import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3 text-center">
          Get in Touch
        </p>
        <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4 text-center">
          Contact New Mexico First Chaplains
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Interested in chaplain training or starting a chaplain program? We'd love to hear from you.
        </p>

        <div className="max-w-md mx-auto space-y-8">
          <h3 className="font-display text-xl text-foreground mb-6 text-center">Direct Contact</h3>
          <div className="flex items-start gap-4">
            <Mail className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-foreground">Email</p>
              <a href="mailto:jeff@nmfirstchaplains.org" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                jeff@nmfirstchaplains.org
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-foreground">Phone</p>
              <a href="tel:5053506984" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                (505) 350-6984
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
            <div>
              <p className="font-semibold text-sm text-foreground">Service Area</p>
              <p className="text-muted-foreground text-sm">Statewide — New Mexico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
