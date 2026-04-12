import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/jeff@nmfirstchaplains.org";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    agency: "",
    email: "",
    interest: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          agency: formData.agency,
          email: formData.email,
          interest: formData.interest,
          message: formData.message,
          _subject: "New NM First Chaplain contact form submission",
          _template: "table",
          _replyto: formData.email,
          _honey: "",
          _captcha: "false",
        }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", agency: "", email: "", interest: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="font-display text-xl text-foreground mb-6">Direct Contact</h3>
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

          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-5">
            <h3 className="font-display text-xl text-foreground mb-2">Send a Message</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Name *</label>
                <input
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-input bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Agency / Organization</label>
                <input
                  value={formData.agency}
                  onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                  className="w-full px-4 py-2.5 rounded border border-input bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-input bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">I'm Interested In</label>
              <select
                value={formData.interest}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-input bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a topic...</option>
                <option>Chaplain Training Information</option>
                <option>Starting a Chaplain Program</option>
                <option>General Inquiry</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded border border-input bg-card text-card-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-primary text-primary-foreground px-8 py-3 rounded font-semibold text-sm uppercase tracking-wider hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-600 text-sm mt-2">Message sent successfully! We'll be in touch soon.</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm mt-2">Failed to send. Please try again or email us directly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
