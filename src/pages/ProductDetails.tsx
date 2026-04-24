import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, BadgeCheck, Sparkles, Truck } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { allProducts } from "@/data/products";

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = allProducts.find((item) => item.id === productId);

  if (!product) {
    return <Navigate to="/not-found" replace />;
  }

  const relatedProducts = allProducts
    .filter((item) => item.categorySlug === product.categorySlug && item.id !== product.id)
    .slice(0, 4);

  return (
    <div className="overflow-hidden bg-gradient-to-b from-cream via-background to-beige/40">
      <section className="px-4 pb-16 pt-10 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-brown-warm/30 bg-white px-4 py-2 text-sm font-medium text-brown-dark transition-colors hover:border-[#E93354] hover:text-[#E93354]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Link>
        </div>
      </section>

      <section className="px-4 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <AnimatedSection animation="slide-left">
            <div className="overflow-hidden rounded-[2rem] bg-white shadow-[var(--shadow-hover)]">
              <img src={product.image} alt={product.name} className="h-[420px] w-full object-cover md:h-[520px]" />
            </div>
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={120} className="space-y-6">
            <span className="inline-flex rounded-full bg-pink-light px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brown-dark">
              {product.categoryTitle}
            </span>
            <h1 className="font-lilita text-4xl text-brown-dark md:text-6xl font-extrabold">{product.name}</h1>
            <p className="text-lg text-brown-dark/80">{product.description}</p>
            <p className="text-3xl font-semibold text-[#E93354]">{product.price}</p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-brown-warm/15 bg-white p-4">
                <BadgeCheck className="h-5 w-5 text-[#E93354]" />
                <p className="mt-2 text-sm text-brown-dark/80">Made with premium and tested ingredients.</p>
              </div>
              <div className="rounded-2xl border border-brown-warm/15 bg-white p-4">
                <Sparkles className="h-5 w-5 text-[#E93354]" />
                <p className="mt-2 text-sm text-brown-dark/80">Freshly prepared with strict hygiene standards.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8">Add to Enquiry</Button>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-brown-warm/30 px-8 py-3 text-sm font-semibold text-brown-dark transition-colors hover:border-[#E93354] hover:text-[#E93354]"
              >
                Contact Us
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-24">
        <AnimatedSection animation="zoom" className="mx-auto max-w-6xl rounded-[2rem] bg-brown-dark px-8 py-10 text-cream md:px-12">
          <div className="flex items-start gap-3">
            <Truck className="mt-1 h-6 w-6 text-pink-light" />
            <div>
              <h2 className="font-lilita text-3xl font-bold">Bulk Orders & Timely Supply</h2>
              <p className="mt-3 max-w-3xl text-cream/85">
                This product is available for retailers, wholesalers, and distribution partners with consistent quality
                and delivery support.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection animation="fade" className="mb-8">
            <h3 className="font-lilita text-3xl text-brown-dark font-bold">Related Products</h3>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((item, index) => (
              <AnimatedSection key={item.id} animation="slide-up" delay={index * 80}>
                <Link
                  to={`/products/${item.id}`}
                  className="block overflow-hidden rounded-[1.4rem] border border-brown-warm/15 bg-white shadow-[var(--shadow-soft)]"
                >
                  <img src={item.image} alt={item.name} className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <h4 className="font-lilita text-xl text-brown-dark">{item.name}</h4>
                    <p className="mt-1 text-sm text-[#E93354]">{item.price}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetails;
