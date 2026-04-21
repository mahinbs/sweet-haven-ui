import { Navigate, useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { AnimatedSection } from "@/components/AnimatedSection";

const filterButtonBase =
  "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-200 hover:border-[#E93354] hover:text-[#E93354]";

export const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="bg-background">
      <section className="bg-gradient-to-r from-[#FFE8CF] via-[#FFF4E6] to-white py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:text-left">
          <AnimatedSection animation="slide-left" delay={0} className="space-y-6 md:w-1/2">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#E93354]/80">Our Collection</p>
            <h1 className="text-4xl font-baloo font-extrabold text-[#111] md:text-5xl">{category.headline}</h1>
            <p className="text-lg text-[#5F4B3C]">{category.description}</p>
            <button className="inline-flex items-center justify-center rounded-full bg-[#E93354] px-6 py-3 font-baloo text-lg font-semibold uppercase tracking-wide text-white shadow-md transition-transform duration-200 hover:scale-105">
              Explore All
            </button>
          </AnimatedSection>
          <AnimatedSection animation="slide-right" delay={200} className="md:w-1/2">
            <div className="relative mx-auto max-w-md overflow-hidden rounded-3xl shadow-[0_30px_60px_rgba(233,51,84,0.25)]">
              <img src={category.image} alt={category.title} className="h-full w-full object-cover" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="px-6 lg:px-10">
          <div className="flex flex-col items-stretch gap-4 border-b border-[#E8D8C6] pb-6 sm:flex-row sm:justify-between sm:gap-6">
            {category.filters.map((filter, index) => (
              <button
                key={filter}
                type="button"
                className={`${filterButtonBase} ${index === 0 ? "border-[#E93354] text-[#E93354]" : "border-transparent text-[#5F4B3C]"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {category.products.map((product, index) => (
              <AnimatedSection key={product.name} animation="zoom" delay={index * 50}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#F0E5D8] bg-[#FFFBF6] shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-hover">
                  <div className="relative h-52 overflow-hidden bg-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-6 py-6 text-left">
                    <h3 className="text-2xl font-baloo font-semibold text-[#111]">{product.name}</h3>
                    <p className="text-sm text-[#6C5A4A]">{product.description}</p>
                    {product.price && (
                      <span className="mt-auto text-base font-medium text-[#E93354]">{product.price}</span>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryPage;

