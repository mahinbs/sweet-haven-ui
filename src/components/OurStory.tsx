import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";

export const OurStory = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cream/40 px-4 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr,1fr]">
        <AnimatedSection animation="slide-left" delay={0}>
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-pink-light px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown-dark">
              Our Story
            </p>
            <h2 className="font-lilita text-4xl leading-tight text-foreground md:text-5xl">
              Rooted in tradition, refined for today.
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Honey Gold Bakers started with one clear promise: deliver bakery products people can trust every day for
              freshness, consistency, and taste.
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {["Premium ingredients", "Hygienic environment", "Consistent quality", "Timely supply"].map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-border/70 bg-white px-4 py-3 text-sm font-medium text-foreground shadow-[var(--shadow-soft)]"
                >
                  {point}
                </div>
              ))}
            </div>

            <Button asChild variant="outline" size="lg" className="w-fit rounded-full border-brown-warm/40 bg-white">
              <Link to="/about">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="slide-right" delay={200}>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl opacity-60" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-hover)]">
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

