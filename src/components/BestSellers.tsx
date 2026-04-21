import { ProductCard } from "./ProductCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AnimatedSection } from "./AnimatedSection";
import eclairImg from "@/assets/product-eclair.jpg";
import macaronsImg from "@/assets/product-macarons.jpg";
import croissantImg from "@/assets/product-croissant.jpg";
import tartImg from "@/assets/product-tart.jpg";

const products = [
  { name: "Chocolate Éclair", price: "$5.99", image: eclairImg },
  { name: "French Macarons", price: "$12.99", image: macaronsImg },
  { name: "Butter Croissant", price: "$4.50", image: croissantImg },
  { name: "Berry Tart", price: "$8.99", image: tartImg },
];

export const BestSellers = () => {
  return (
    <section className="bg-secondary/20 px-4 py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brown-dark/70">Signature Favorites</p>
            <h2 className="mb-4 font-lilita text-4xl font-semibold text-foreground md:text-5xl">
              Best Sellers
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Our customers' favorite treats, made fresh daily
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="zoom" delay={200}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {products.map((product) => (
                <CarouselItem key={product.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <ProductCard {...product} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden border-brown-warm/30 bg-white text-brown-dark md:flex" />
            <CarouselNext className="hidden border-brown-warm/30 bg-white text-brown-dark md:flex" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
