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
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Quality, tradition, and passion in every bite
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection 
              key={feature.title}
              animation="zoom"
              delay={index * 100}
            >
              <div className="text-center p-6 rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
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
