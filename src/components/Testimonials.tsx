import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "The best bakery in town! Their croissants are absolutely divine and taste just like the ones I had in Paris.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    text: "Ordered a custom birthday cake and it exceeded all expectations. Beautiful design and incredibly delicious!",
    rating: 5,
  },
  {
    name: "Emma Williams",
    text: "Fresh, high-quality ingredients and wonderful service. Their sourdough bread is perfection!",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section className="bg-secondary/20 px-4 py-24">
      <div className="mx-auto max-w-5xl">
        <AnimatedSection animation="slide-up" delay={0}>
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brown-dark/70">Testimonials</p>
            <h2 className="mb-4 font-lilita text-4xl font-semibold text-foreground md:text-5xl">
            What Our Customers Say
          </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Join thousands of satisfied customers who love our baked goods
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="zoom" delay={120}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="mx-4 rounded-2xl border border-border/70 bg-card p-8 text-center shadow-soft">
                    <div className="mb-4 flex justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-6 text-lg italic text-foreground">&quot;{testimonial.text}&quot;</p>
                    <p className="font-lilita font-semibold text-primary">{testimonial.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-brown-warm/30 bg-white text-brown-dark" />
            <CarouselNext className="border-brown-warm/30 bg-white text-brown-dark" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
};
