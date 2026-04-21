import { ChefHat, Award, Clock, Cake } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const features = [
  {
    icon: ChefHat,
    title: "Freshly Baked Daily",
    description: "Every item is made fresh each morning with premium ingredients",
  },
  {
    icon: Award,
    title: "Premium Ingredients",
    description: "We use only the finest organic and locally-sourced ingredients",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Same-day delivery available for all orders placed before noon",
  },
  {
    icon: Cake,
    title: "Custom Cakes",
    description: "Personalized designs for all your special celebrations",
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-background px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brown-dark/70">Why Choose Us</p>
            <h2 className="mb-4 font-lilita text-4xl font-semibold text-foreground md:text-5xl">
              Why Choose Us
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Quality, tradition, and passion in every bite
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedSection
              key={feature.title}
              animation="zoom"
              delay={index * 100}
            >
              <div className="h-full rounded-2xl border border-border/70 bg-card p-6 text-center shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-hover">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 font-lilita text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
