import heroBg from "@/assets/hero-bg.jpg";

const CtaBanner = () => (
  <section className="relative py-20 overflow-hidden">
    <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
    <div className="absolute inset-0 bg-navy/85" />
    <div className="relative container mx-auto px-4 text-center">
      <h2 className="font-display text-3xl md:text-4xl text-hero-foreground mb-6">
        Ready to Bring Chaplain Training to Your Agency?
      </h2>
      <a
        href="#contact"
        className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded font-semibold uppercase tracking-wider text-sm hover:bg-primary/90 transition-colors"
      >
        Contact NMFC Today
      </a>
    </div>
  </section>
);

export default CtaBanner;
