import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const OurStory = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-[1.1fr,1fr] items-center">
        <AnimatedSection animation="slide-left" delay={0}>
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/80">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-foreground">
              From Sweet Haven Dreams<br className="hidden sm:block" /> to Humble Beginnings
            </h2>
            <p className="text-lg text-muted-foreground">
              What started as a neighborhood bakery has grown into a beloved destination for artisanal breads, decadent cakes,
              and handcrafted pastries. Every recipe carries a piece of our family's story and a promise of warmth in every bite.
            </p>
            <p className="text-lg text-muted-foreground/90">
              We source the finest ingredients, nurture slow-fermented doughs, and bake in small batches to preserve the heart
              of traditional baking. Step into our world and savor the craft that has delighted our community since 1994.
            </p>
            <Button variant="outline" size="lg" className="w-fit">
              Read Our Story
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-right" delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-3xl opacity-60" aria-hidden />
            <div className="relative rounded-3xl overflow-hidden shadow-soft">
              <AspectRatio ratio={16 / 9}>
                <iframe
                  src="https://www.youtube.com/embed/gt7zOP_wPfM?rel=0"
                  title="Sweet Haven Bakery Story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </AspectRatio>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

