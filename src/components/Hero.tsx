import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    id: 1,
    eyebrow: "Since 1995",
    title: "From Our Bakery",
    titleAccent: "To Your Table.",
    subtitle:
      "Our purpose is to cultivate trust and deliver endless joy through freshly baked, nutritious treats crafted with love.",
    cta: { label: "Read Our Story", href: "/about" },
    ctaSecondary: { label: "See Products", href: "/products" },
    bg: "https://res.cloudinary.com/dknafpppp/image/upload/v1763038770/assorted-pastries-arranged-in-dispaly_axrbqo.webp",
  },
  {
    id: 2,
    eyebrow: "Premium Quality",
    title: "Every Treat Baked",
    titleAccent: "With Love.",
    subtitle:
      "From crunchy biscuits to cakealicious cakes, droolworthy cookies and crispy rusks — all crafted with premium ingredients.",
    cta: { label: "Explore Products", href: "/products" },
    ctaSecondary: { label: "Our Story", href: "/about" },
    bg: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80",
  },
  {
    id: 3,
    eyebrow: "Nationwide Reach",
    title: "Freshness You Can",
    titleAccent: "Count On.",
    subtitle:
      "Supplying retailers, wholesalers and distributors with timely delivery, consistent quality and bulk order support.",
    cta: { label: "Become a Distributor", href: "/contact" },
    ctaSecondary: { label: "Contact Us", href: "/contact" },
    bg: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1600&q=80",
  },
];

export const Hero = () => {
  const autoplay = Autoplay({ delay: 5000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative h-[90vh] min-h-[600px] max-h-[860px] overflow-hidden">
      {/* Embla Viewport */}
      <div ref={emblaRef} className="h-full overflow-hidden">
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative min-w-full h-full flex-shrink-0"
            >
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.bg})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating decorative orbs */}
              <div className="absolute top-[15%] right-[8%] w-72 h-72 rounded-full opacity-10 blur-3xl bg-[#E93354] animate-pulse" />
              <div className="absolute bottom-[20%] right-[18%] w-48 h-48 rounded-full opacity-15 blur-2xl bg-[#E93354]" style={{ animation: "pulse 4s ease-in-out infinite 1s" }} />

              {/* Content */}
              <div className="relative h-full flex items-center px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">
                <div className="max-w-2xl">
                  <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-medium mb-5 animate-fade-in" style={{ animationDelay: "0.1s", animationFillMode: "both" }}>
                    {slide.eyebrow}
                  </p>

                  <h1 className="font-lilita font-extrabold text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.0] mb-6 animate-fade-in" style={{ animationDelay: "0.2s", animationFillMode: "both" }}>
                    {slide.title}
                    <br />
                    <span className="text-[#E93354]">{slide.titleAccent}</span>
                  </h1>

                  <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.4s", animationFillMode: "both" }}>
                    {slide.subtitle}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.6s", animationFillMode: "both" }}>
                    <Link
                      to={slide.cta.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide bg-[#E93354] transition-all duration-300 hover:gap-3 hover:scale-105 hover:shadow-xl hover:shadow-[#E93354]/30"
                    >
                      {slide.cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to={slide.ctaSecondary.href}
                      className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm tracking-wide border border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/70"
                    >
                      {slide.ctaSecondary.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`transition-all duration-300 rounded-full ${
              index === selectedIndex
                ? "w-8 h-2.5 bg-[#E93354]"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-8 hidden md:flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
        <span className="text-white text-[10px] uppercase tracking-[0.25em]">Scroll</span>
      </div>
    </section>
  );
};
