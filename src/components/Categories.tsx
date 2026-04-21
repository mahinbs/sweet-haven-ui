import { CategoryCard } from "./CategoryCard";
import { categories } from "@/data/categories";
import { AnimatedSection } from "./AnimatedSection";

export const Categories = () => {
  return (
    <section className="bg-background px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brown-dark/70">Our Collection</p>
            <h2 className="mb-4 font-lilita text-4xl font-semibold text-foreground md:text-5xl">
              Our Collection
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
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
              <CategoryCard title={category.title} image={category.image} href={`/products?category=${category.slug}`} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
