import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AnimatedSection } from "./AnimatedSection";
import { fetchHomepageCategories } from "@/services/categories";

const CategoryBlock = ({
  title,
  label,
  image,
  href,
  delay,
}: {
  title: string;
  label: string;
  image: string;
  href: string;
  delay: number;
}) => {
  return (
    <AnimatedSection animation="zoom" delay={delay} className="h-full">
      <Link
        to={href}
        className="group relative block h-64 lg:h-80 overflow-hidden rounded-2xl"
      >
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-[#E93354]/0 transition-all duration-500 group-hover:bg-[#E93354]/15" />

        <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
          <div>
            <p className="text-[#E93354] text-[10px] uppercase tracking-[0.3em] font-medium mb-1 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {label}
            </p>
            <h3 className="font-lilita text-2xl font-bold text-white leading-tight">
              {title}
            </h3>
          </div>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 border border-white/20 text-white opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 backdrop-blur-sm flex-shrink-0">
            <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </Link>
    </AnimatedSection>
  );
};

export const Categories = () => {
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["categories", "homepage"],
    queryFn: fetchHomepageCategories,
  });

  const [first, ...rest] = categories;

  if (isLoading) {
    return (
      <section className="bg-[#0f0f12] px-4 py-24">
        <div className="mx-auto max-w-7xl text-center text-white/60">Loading categories...</div>
      </section>
    );
  }

  if (categories.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#0f0f12] px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#E93354] font-medium">
                Our Products
              </p>
              <h2 className="font-lilita text-4xl font-bold text-white md:text-5xl">
                Every Treat Baked
                <br />
                <span className="text-[#E93354]">with Love.</span>
              </h2>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white border border-white/20 hover:border-[#E93354]/60 hover:bg-[#E93354]/10 transition-all duration-300 w-fit whitespace-nowrap"
            >
              See All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <AnimatedSection animation="slide-left" delay={0} className="h-full">
              <Link
                to={`/collections/${first.slug}`}
                className="group relative flex h-80 lg:h-full min-h-[420px] overflow-hidden rounded-2xl"
              >
                <img
                  src={first.image}
                  alt={first.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-[#E93354]/0 transition-all duration-500 group-hover:bg-[#E93354]/15" />

                <div className="absolute inset-x-0 bottom-0 p-7 flex items-end justify-between">
                  <div>
                    <p className="text-[#E93354] text-[10px] uppercase tracking-[0.3em] font-medium mb-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {first.label ?? first.title.toUpperCase()}
                    </p>
                    <h3 className="font-lilita text-3xl font-bold text-white">
                      {first.title}
                    </h3>
                    <p className="text-white/60 text-sm mt-1 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      See Products →
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {rest.map((cat, i) => (
              <CategoryBlock
                key={cat.id}
                title={cat.title}
                label={cat.label ?? cat.title.toUpperCase()}
                image={cat.image}
                href={`/collections/${cat.slug}`}
                delay={(i + 1) * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
