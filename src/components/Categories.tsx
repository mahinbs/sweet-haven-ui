import { CategoryCard } from "./CategoryCard";
import { categories } from "@/data/categories";
import { AnimatedSection } from "./AnimatedSection";

export const Categories = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Our Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handcrafted selection of premium baked goods
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <AnimatedSection 
              key={category.slug}
              animation="zoom"
              delay={index * 100}
            >
              <CategoryCard title={category.title} image={category.image} href={`/collections/${category.slug}`} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
