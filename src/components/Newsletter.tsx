import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
          Stay Sweet with Us
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, new product launches, and baking tips
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email"
            className="bg-primary-foreground border-0 flex-1"
          />
          <Button variant="secondary" size="lg" className="sm:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
