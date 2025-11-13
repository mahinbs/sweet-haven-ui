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
    <section ref={sectionRef} className="py-20 bg-cream">
      <div className="w-full border-y border-border/60 bg-white">
        <div className="grid divide-y border-x border-border/60 sm:grid-cols-2 lg:grid-cols-5 sm:divide-y-0 lg:divide-x">
          {metrics.map((metric, index) => {
            const isComplete = hasAnimated && counts[index] === metric.value;
            return (
              <div
                key={metric.label}
                className="flex flex-col items-center gap-4 p-10 text-center animate-scale-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/40">
                  <metric.icon className="h-10 w-10 text-[#E93354]" />
                </span>
                <span className="text-6xl font-serif font-bold text-[#E93354]">
                  {isComplete && metric.suffix ? `${metric.value}${metric.suffix}` : `${counts[index]}`}
                </span>
                <div>
                  <p className="text-lg font-semibold text-foreground">{metric.label}</p>
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

