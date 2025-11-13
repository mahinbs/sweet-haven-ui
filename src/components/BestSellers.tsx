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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
