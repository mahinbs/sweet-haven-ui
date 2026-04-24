import { ArrowRight, Factory, Globe2, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const contactOptions = [
  {
    title: "Honey Gold Anubhav",
    label: "GET IN TOUCH",
    description:
      "We welcome students nationwide to come on over and see how we bake happiness into every delicious Honey Gold treat.",
    cta: "Book a Visit",
    href: "/contact",
    icon: Factory,
    bgImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    title: "Become a Distributor",
    label: "PARTNER WITH US",
    description:
      "Spice up your journey by joining our flavor-packed retail network and becoming part of the Honey Gold family.",
    cta: "Apply Now",
    href: "/contact",
    icon: Truck,
    bgImage: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=800&q=80",
  },
  {
    title: "Export Enquiry",
    label: "GO GLOBAL",
    description:
      "If you're keen on becoming an international distributor and helping us expand our market coverage, we'd love to hear from you.",
    cta: "Apply Now",
    href: "/contact",
    icon: Globe2,
    bgImage: "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=800&q=80",
  },
];

export const GetInTouch = () => {
  return (
    <section className="bg-[#f7f5f2] py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-14 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#E93354] font-medium">
              Get in Touch
            </p>
            <h2 className="font-lilita text-4xl font-bold text-foreground md:text-5xl">
              We&apos;re Eager to
              <br />
              <span className="text-[#E93354]">Hear from You!</span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-lg text-muted-foreground">
              Whether you are planning a factory visit, looking to partner with us, or
              want to explore global distribution — we are just one message away.
            </p>
          </div>
        </AnimatedSection>

        {/* 3 cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {contactOptions.map((option, index) => (
            <AnimatedSection key={option.title} animation="slide-up" delay={index * 120}>
              <div className="group relative overflow-hidden rounded-3xl h-[460px] flex flex-col justify-end">
                {/* Background Image */}
                <img
                  src={option.bgImage}
                  alt={option.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="absolute inset-0 bg-[#E93354]/0 transition-all duration-500 group-hover:bg-[#E93354]/10" />

                {/* Content */}
                <div className="relative p-8 space-y-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E93354]/20 border border-[#E93354]/30 mb-2">
                    <option.icon className="h-6 w-6 text-[#E93354]" />
                  </span>
                  <p className="text-[#E93354] text-[10px] uppercase tracking-[0.3em] font-medium">
                    {option.label}
                  </p>
                  <h3 className="font-lilita text-2xl font-bold text-white leading-tight">
                    {option.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {option.description}
                  </p>
                  <Link
                    to={option.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white pt-2 transition-all duration-200 group-hover:text-[#E93354] group-hover:gap-3"
                  >
                    {option.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
