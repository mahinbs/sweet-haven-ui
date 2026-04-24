import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ArrowRight, Target, ShieldCheck, MessageSquare } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { Link } from "react-router-dom";

const highlights = [
  {
    icon: Target,
    title: "Driven by Our Purpose",
    description: "Every loaf, cake, and biscuit we bake is driven by a singular purpose — to be Honey Gold trusted by millions.",
    cta: "Read more",
    href: "/about",
  },
  {
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description: "FSSAI-certified production with advanced baking technology, premium ingredients and hygienic standards at every step.",
    cta: "Read more",
    href: "/about",
  },
  {
    icon: MessageSquare,
    title: "A Message from Our MD",
    description: "Our Managing Director shares the vision behind Honey Gold's continued growth and commitment to consumer delight.",
    cta: "Read more",
    href: "/about",
  },
];

export const OurStory = () => {
  return (
    <section className="bg-gradient-to-b from-white to-cream/40">
      {/* Main two-column story section */}
      <div className="px-4 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr,1fr]">
          <AnimatedSection animation="slide-left" delay={0}>
            <div className="space-y-7">
              <p className="inline-flex rounded-full bg-pink-light px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-brown-dark">
                Our Story
              </p>
              <h2 className="font-lilita text-4xl leading-tight text-foreground md:text-5xl font-bold">
                From Humble Beginnings
                <br />
                <span className="text-[#E93354]">To Every Home.</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                Our purpose is to cultivate trust and deliver endless joy to our Honey Gold family of consumers
                and employees through nutritious treats.
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                Since 1995, we have successfully leveraged our established brand presence, strategic supply chain,
                diversified product portfolio and consequent value proposition for consumers to reach maximum households.
              </p>

              <Button asChild variant="outline" size="lg" className="w-fit rounded-full border-brown-warm/40 bg-white group">
                <Link to="/about">
                  Read Our Story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
                    title="Honey Gold Bakers Story"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </AspectRatio>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* 3-column highlight cards (like Anmol's "Driven by Purpose" section) */}
      <div className="border-t border-border/50 bg-white px-4 py-16">
        <div className="mx-auto max-w-7xl grid gap-8 md:grid-cols-3">
          {highlights.map((item, index) => (
            <AnimatedSection key={item.title} animation="slide-up" delay={index * 100}>
              <Link
                to={item.href}
                className="group flex flex-col gap-4 rounded-2xl border border-border/60 bg-background/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-hover)] hover:border-[#E93354]/30"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#E93354]/10">
                  <item.icon className="h-7 w-7 text-[#E93354]" />
                </span>
                <h3 className="font-lilita text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground flex-1">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-[#E93354] transition-all duration-200 group-hover:gap-2">
                  {item.cta} <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
