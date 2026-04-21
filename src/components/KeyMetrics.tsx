import { useEffect, useRef, useState } from "react";
import { Cookie, CakeSlice, Globe2, PieChart, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: Cookie,
    value: 41,
    label: "Biscuit Varieties",
    caption: "",
  },
  {
    icon: CakeSlice,
    value: 6,
    label: "Cake Varieties",
    caption: "",
  },
  {
    icon: Globe2,
    value: 27,
    label: "Biscuit Varieties Exported",
    caption: "",
  },
  {
    icon: PieChart,
    value: 4,
    suffix: "th",
    label: "Largest Biscuit Brand",
    caption: "*Revenue Report — Frost & Sullivan 2018",
  },
  {
    icon: TrendingUp,
    value: 5,
    suffix: "th",
    label: "Largest Cakes Brand",
    caption: "*Revenue Report — Frost & Sullivan 2018",
  },
] as const;

export const KeyMetrics = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(() => metrics.map(() => 0));

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

    const duration = 1600;
    const start = performance.now();
    let frameId: number;

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const step = () => {
      const now = performance.now();
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);

      setCounts(
        metrics.map((metric) => {
          if (progress === 1) {
            return metric.value;
          }
          return Math.floor(metric.value * eased);
        }),
      );

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-cream px-4 py-24">
      <div className="mx-auto mb-10 max-w-7xl text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-brown-dark/70">At a Glance</p>
        <h2 className="font-lilita text-4xl text-foreground md:text-5xl">Our Scale in Numbers</h2>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border/60 bg-white shadow-[var(--shadow-soft)]">
        <div className="grid divide-y border-border/60 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {metrics.map((metric, index) => {
            const isComplete = hasAnimated && counts[index] === metric.value;
            const suffix = "suffix" in metric ? metric.suffix : undefined;
            return (
              <div
                key={metric.label}
                className="animate-scale-in flex flex-col items-center gap-4 p-8 text-center md:p-10"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/40">
                  <metric.icon className="h-10 w-10 text-[#E93354]" />
                </span>
                <span className="text-6xl font-lilita font-semibold text-[#E93354]">
                  {isComplete && suffix ? `${metric.value}${suffix}` : `${counts[index]}`}
                </span>
                <div>
                  <h5 className="text-lg font-medium text-foreground">{metric.label}</h5>
                  {metric.caption && <p className="mt-1 text-sm text-muted-foreground">{metric.caption}</p>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

