import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-6">
            Freshly Baked<br />Every Morning
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Artisan pastries, cakes, and breads made with love and premium ingredients. Experience the taste of tradition.
          </p>
          <Button size="lg" variant="hero" className="text-lg px-8 py-6">
            Order Now
          </Button>
        </div>
      </div>
    </section>
  );
};
