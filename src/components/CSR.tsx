import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

export const CSR = () => {
  return (
    <section className="relative overflow-hidden bg-[#111218] py-24 px-4">
      {/* Background image with parallax-style overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1593113598332-cd288d649433?w=1600&q=80)",
        }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111218]/90 via-[#111218]/70 to-[#E93354]/10" />

      {/* Decorative orb */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#E93354] opacity-5 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#E93354] opacity-5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Text content */}
          <AnimatedSection animation="slide-left" delay={0}>
            <div className="space-y-6">
              <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-medium">
                Corporate Social Responsibility
              </p>
              <h2 className="font-lilita font-bold text-4xl text-white md:text-5xl leading-tight">
                Making a Difference
                <br />
                <span className="text-[#E93354]">Together.</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                At Honey Gold Bakers, we are dedicated to enhancing societal
                welfare — from supporting local farming communities to
                championing sustainable baking practices that protect our planet
                for future generations.
              </p>
              <ul className="space-y-3">
                {[
                  "Community nutrition programs",
                  "Sustainable sourcing & zero-waste kitchens",
                  "Empowering local farmers & suppliers",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E93354] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide bg-[#E93354] transition-all duration-300 hover:gap-3 hover:scale-105 hover:shadow-xl hover:shadow-[#E93354]/30 w-fit"
              >
                View CSR Initiatives
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </AnimatedSection>

          {/* Right: Image grid */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80"
                    alt="CSR community work"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80"
                    alt="Community support"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="overflow-hidden rounded-2xl aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80"
                    alt="Sustainable farming"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80"
                    alt="Green sustainable agriculture"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
