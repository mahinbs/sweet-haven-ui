import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Star } from "lucide-react";

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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who love our baked goods
          </p>
        </div>
        
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
                <div className="p-8 bg-card rounded-2xl shadow-soft text-center mx-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-lg text-foreground mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="font-serif font-bold text-primary">
                    {testimonial.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
