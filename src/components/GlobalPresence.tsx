import { useEffect, useRef, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";

export const GlobalPresence = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const target = 34;
    const duration = 1600;
    const start = performance.now();
    let frameId: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);
      const nextValue = progress === 1 ? target : Math.floor(target * eased);

      setCount(nextValue);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="mx-auto max-w-6xl space-y-6 px-4 text-center">
        <AnimatedSection animation="slide-up" delay={0}>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Spreading Our Wings To</p>
        </AnimatedSection>
        <AnimatedSection animation="zoom" delay={200}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground">
            <span className="block text-6xl md:text-7xl text-[#E93354]">{count}</span>
            Countries
          </h2>
        </AnimatedSection>
        <AnimatedSection animation="fade" delay={400}>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our handcrafted delights travel far and wide, reaching dessert lovers across the globe.
          </p>
        </AnimatedSection>
      </div>
      <AnimatedSection animation="zoom" delay={600}>
        <div className="relative mt-16">
          <div className="pointer-events-none absolute inset-x-0 -top-8 h-48 bg-[#E93354]/10 blur-3xl" aria-hidden />
          <img
            src="https://res.cloudinary.com/dknafpppp/image/upload/v1763039490/360_F_87048573_6xUujMh3gPspzBh2uspdMPrKQA68JkVF_wbjg5i.jpg"
            alt="World map highlighting our reach"
            className="block w-full object-cover"
            loading="lazy"
          />
        </div>
      </AnimatedSection>
    </section>
  );
};

