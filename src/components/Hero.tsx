import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bakery.jpg";

const AnimatedText = ({ text, className }: { text: string; className?: string }) => {
  const letters = text.split("");
  let letterIndex = 0;

  return (
    <span className={className}>
      {letters.map((letter, index) => {
        if (letter === " ") {
          return <span key={index}>&nbsp;</span>;
        }
        const delay = letterIndex++ * 0.05;
        return (
          <span
            key={index}
            className="letter-fall"
            style={{ animationDelay: `${delay}s` }}
          >
            {letter}
          </span>
        );
      })}
    </span>
  );
};

export const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-lilita font-semibold text-white mb-6">
            <AnimatedText text="Freshly Baked" />
            <br />
            <AnimatedText text="Every Morning" />
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}>
            Artisan pastries, cakes, and breads made with love and premium ingredients. Experience the taste of tradition.
          </p>
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}>
            <Button size="lg" variant="hero" className="text-lg px-8 py-6">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
