import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Truck,
  Trophy,
} from "lucide-react";

const whyChooseUs = [
  {
    title: "Fresh & Hygienic Baking",
    description: "Maintained with advanced equipment and strict quality checks.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Quality Ingredients",
    description: "No compromise on purity and taste.",
    icon: Sparkles,
  },
  {
    title: "Wide Product Range",
    description: "Every type of bakery item in one place.",
    icon: Trophy,
  },
  {
    title: "Timely Supply & Bulk Orders",
    description: "Perfect for retailers, wholesalers, and distributors.",
    icon: Truck,
  },
  {
    title: "Customer-Centered Approach",
    description: "Your satisfaction is our priority.",
    icon: HeartHandshake,
  },
];

const promisePoints = [
  "Pure and tested ingredients",
  "Hygienic baking environment",
  "Consistent quality",
  "Affordable pricing",
  "Customer satisfaction as our priority",
];

const galleryImages = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80",
];

const About = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-cream via-background to-beige/40">
      <section className="relative px-4 pb-20 pt-16 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <AnimatedSection animation="slide-left" className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-pink-light px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-brown-dark">
              ABOUT US
            </span>
            <h1 className="font-lilita text-4xl leading-tight text-brown-dark md:text-6xl font-extrabold">
              Honey Gold Bakers Pvt. Ltd.
            </h1>
            <p className="max-w-xl text-base text-brown-dark/80 md:text-lg">
              A modern bakery manufacturing company producing high-quality, hygienic, and delicious baked goods.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-8">Explore Products</Button>
              <Button variant="outline" className="rounded-full border-brown-warm px-8 text-brown-dark">
                Contact Sales
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="zoom" delay={200}>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
                alt="Pastries on display"
                className="h-72 w-full rounded-[2rem] object-cover shadow-[var(--shadow-hover)] md:h-80"
              />
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
                  alt="Decorated celebration cake"
                  className="h-40 w-full rounded-[1.6rem] object-cover shadow-[var(--shadow-soft)] md:h-44"
                />
                <div className="rounded-[1.6rem] bg-white p-6 shadow-[var(--shadow-soft)]">
                  <p className="text-4xl font-semibold text-brown-dark">100%</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.16em] text-brown-dark/60">
                    Quality-focused production
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-20">
        <AnimatedSection animation="fade" className="mx-auto mb-8 max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-brown-dark/70">WHY CHOOSE US?</p>
        </AnimatedSection>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((card, index) => {
            const Icon = card.icon;
            return (
              <AnimatedSection key={card.title} animation="slide-up" delay={index * 150}>
                <article className="h-full rounded-[1.8rem] border border-brown-warm/15 bg-white/90 p-6 shadow-[var(--shadow-soft)] backdrop-blur">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="inline-flex rounded-full bg-[#E93354]/10 p-2 text-[#E93354]">
                      <Star className="h-4 w-4 fill-current" />
                    </span>
                    <div className="inline-flex rounded-2xl bg-pink-light p-3 text-brown-dark">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="font-lilita text-2xl text-brown-dark font-bold">{card.title}</h3>
                  <p className="mt-2 text-brown-dark/70">{card.description}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-24">
        <AnimatedSection
          animation="fade"
          className="mx-auto max-w-7xl rounded-[2rem] bg-brown-dark px-6 py-10 text-cream md:px-10"
        >
          <div className="mb-6 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-pink-light" />
            <p className="text-xs uppercase tracking-[0.2em] text-cream/80">Our Promise</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {promisePoints.map((item, index) => (
              <AnimatedSection key={item} animation="slide-right" delay={index * 100}>
                <div className="flex items-start gap-3 rounded-2xl border border-cream/15 bg-cream/5 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pink-light" />
                  <p className="text-cream/90">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <AnimatedSection animation="slide-left" className="space-y-4">
            <p className="text-xs uppercase tracking-[0.22em] text-brown-dark/70">About Honey Gold Bakers</p>
            <h2 className="font-lilita text-4xl text-brown-dark md:text-5xl font-bold">Built for taste, purity, and trust.</h2>
            <p className="max-w-md text-brown-dark/75">
              Our product range includes breads, buns, rusk, cakes, biscuits, and customized bakery items - all made
              using premium ingredients and advanced baking technology.
            </p>
            <p className="max-w-md text-brown-dark/75">
              We are here to build a bakery brand that your family can trust every day.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((src, index) => (
              <AnimatedSection key={src} animation={index % 2 === 0 ? "slide-up" : "zoom"} delay={index * 120}>
                <img
                  src={src}
                  alt={`Bakery visual ${index + 1}`}
                  className={`w-full rounded-[1.5rem] object-cover shadow-[var(--shadow-soft)] ${
                    index % 3 === 0 ? "h-60" : "h-44 md:h-52"
                  }`}
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <AnimatedSection
            animation="slide-left"
            className="rounded-[2rem] bg-gradient-to-br from-pink-light to-cream p-8 shadow-[var(--shadow-hover)] md:p-10"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-white/80 p-3 text-brown-dark">
              <Target className="h-6 w-6" />
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-brown-dark/70">Mission</p>
            <h3 className="mt-2 font-lilita text-3xl text-brown-dark font-bold">Fresh. Hygienic. High Quality.</h3>
            <p className="mt-4 text-brown-dark/80">
              To provide fresh, hygienic, and high-quality bakery products that bring joy, convenience, and great
              taste to every household.
            </p>
            <p className="mt-2 text-brown-dark/80">
              We aim to set new benchmarks in bakery manufacturing through innovation, purity, and customer-first
              values.
            </p>
          </AnimatedSection>

          <AnimatedSection
            animation="slide-right"
            className="rounded-[2rem] bg-brown-dark p-8 text-cream shadow-[var(--shadow-hover)] md:p-10"
          >
            <div className="mb-4 inline-flex rounded-2xl bg-cream/10 p-3 text-pink-light">
              <Sparkles className="h-6 w-6" />
            </div>
            <p className="text-xs uppercase tracking-[0.18em] text-cream/75">Vision</p>
            <h3 className="mt-2 font-lilita text-3xl text-cream font-bold">Trusted across India.</h3>
            <p className="mt-4 text-cream/85">
              To become one of India&apos;s most trusted and loved bakery brands, known for unmatched quality,
              innovation, and taste.
            </p>
            <p className="mt-2 text-cream/85">
              We are expanding our presence across cities and markets with a strong commitment to excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-24">
        <AnimatedSection
          animation="rotate"
          className="mx-auto max-w-6xl rounded-[2.2rem] bg-gradient-to-r from-pink-light via-beige to-cream p-8 text-center shadow-[var(--shadow-hover)] md:p-12"
        >
          <h3 className="font-lilita text-3xl text-brown-dark md:text-5xl font-bold">Ready for retail and bulk supply.</h3>
          <p className="mx-auto mt-4 max-w-2xl text-brown-dark/80">
            Connect with us for distribution, wholesale orders, and consistent quality delivery.
          </p>
          <div className="mt-8">
            <Button size="lg" className="rounded-full px-10">
              Partner With Us
            </Button>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </div>
  );
};

export default About;
