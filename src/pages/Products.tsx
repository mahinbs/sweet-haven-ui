import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowUpDown, Search, SlidersHorizontal } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allProducts, productCategories } from "@/data/products";

type SortOption = "featured" | "price-asc" | "price-desc" | "name-asc";

const sortOptions: { label: string; value: SortOption }[] = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A to Z", value: "name-asc" },
];

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const validCategoryValues = useMemo(() => new Set(productCategories.map((category) => category.value)), []);
  const categoryFromQuery = searchParams.get("category") ?? "all";
  const activeCategory = validCategoryValues.has(categoryFromQuery) ? categoryFromQuery : "all";

  const handleCategoryChange = (value: string) => {
    const nextParams = new URLSearchParams(searchParams);

    if (value === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", value);
    }

    setSearchParams(nextParams);
  };

  const filteredProducts = useMemo(() => {
    const normalizedQuery = searchTerm.trim().toLowerCase();

    const filtered = allProducts.filter((product) => {
      const categoryMatch = activeCategory === "all" || product.categorySlug === activeCategory;
      const queryMatch =
        normalizedQuery.length === 0 ||
        product.name.toLowerCase().includes(normalizedQuery) ||
        product.description.toLowerCase().includes(normalizedQuery);

      return categoryMatch && queryMatch;
    });

    if (sortBy === "featured") {
      return filtered;
    }

    const sorted = [...filtered];

    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.priceValue - b.priceValue);
    }

    if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.priceValue - a.priceValue);
    }

    if (sortBy === "name-asc") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [activeCategory, searchTerm, sortBy]);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-cream via-background to-beige/40">
      <section className="px-4 pb-12 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-white/80 p-8 shadow-[var(--shadow-soft)] backdrop-blur md:grid-cols-[1.3fr_1fr] md:p-10">
          <AnimatedSection animation="slide-left" className="space-y-4">
            <span className="inline-flex items-center rounded-full bg-pink-light px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brown-dark">
              Products Listing
            </span>
            <h1 className="font-lilita text-4xl text-brown-dark md:text-6xl font-extrabold">Explore Our Bakery Range</h1>
            <p className="max-w-2xl text-brown-dark/80 md:text-lg">
              Discover breads, buns, cakes, biscuits, and custom creations with quick filters and smart sorting.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="zoom" delay={180}>
            <div className="rounded-[1.6rem] bg-brown-dark p-6 text-cream">
              <p className="text-xs uppercase tracking-[0.16em] text-cream/80">Live Catalog</p>
              <h4 className="mt-3 text-4xl font-semibold">{filteredProducts.length}</h4>
              <p className="mt-2 text-cream/80">Products matched to your preferences.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-8">
        <AnimatedSection animation="slide-up" className="mx-auto max-w-7xl rounded-[1.8rem] border border-brown-warm/15 bg-white p-5 shadow-[var(--shadow-soft)] md:p-6">
          <div className="grid gap-4 md:grid-cols-[1.7fr_1fr_1fr]">
            <label className="group flex items-center gap-3 rounded-xl border border-brown-warm/20 bg-cream/60 px-4 py-3">
              <Search className="h-4 w-4 text-brown-dark/60" />
              <input
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by product name or keyword"
                className="w-full bg-transparent text-sm text-brown-dark outline-none placeholder:text-brown-dark/50"
              />
            </label>

            <div className="relative">
              <SlidersHorizontal className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-brown-dark/60" />
              <Select value={activeCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="h-[50px] rounded-xl border-brown-warm/20 bg-cream/60 pl-10 text-sm text-brown-dark ring-offset-0 focus:ring-1 focus:ring-[#E93354]">
                  <SelectValue placeholder="Choose category" />
                </SelectTrigger>
                <SelectContent className="border-brown-warm/20 bg-white">
                  {productCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value} className="text-brown-dark">
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="relative">
              <ArrowUpDown className="pointer-events-none absolute left-4 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-brown-dark/60" />
              <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                <SelectTrigger className="h-[50px] rounded-xl border-brown-warm/20 bg-cream/60 pl-10 text-sm text-brown-dark ring-offset-0 focus:ring-1 focus:ring-[#E93354]">
                  <SelectValue placeholder="Sort products" />
                </SelectTrigger>
                <SelectContent className="border-brown-warm/20 bg-white">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value} className="text-brown-dark">
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          {filteredProducts.length === 0 ? (
            <AnimatedSection animation="fade" className="rounded-[1.6rem] border border-dashed border-brown-warm/35 bg-white/80 p-10 text-center shadow-[var(--shadow-soft)]">
              <h2 className="font-lilita text-3xl text-brown-dark font-bold">No products found</h2>
              <p className="mt-2 text-brown-dark/70">Try changing your search, category, or sort preferences.</p>
            </AnimatedSection>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <AnimatedSection key={product.id} animation="zoom" delay={index * 45}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-brown-warm/15 bg-white shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                        {product.categoryTitle}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-lilita text-2xl text-brown-dark font-bold">{product.name}</h3>
                      <p className="mt-2 text-sm text-brown-dark/70">{product.description}</p>
                      <div className="mt-5 flex items-center justify-between">
                        <p className="text-xl font-semibold text-[#E93354]">{product.price}</p>
                        <Link
                          to={`/products/${product.id}`}
                          className="rounded-full border border-brown-warm/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-brown-dark transition-colors hover:border-[#E93354] hover:text-[#E93354]"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
