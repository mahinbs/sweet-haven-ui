import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Users, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedSection } from "./AnimatedSection";

const perks = [
  { icon: Briefcase, label: "Current Openings" },
  { icon: Users, label: "Life at Honey Gold" },
  { icon: Heart, label: "Submit Your CV" },
];

export const Careers = () => {
  return (
    <section className="relative overflow-hidden bg-[#111218] py-24 px-4">
      {/* Subtle texture overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,_rgba(233,51,84,0.08),_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,1fr] lg:items-center">
          {/* Left: Text */}
          <AnimatedSection animation="slide-left" delay={0} className="space-y-7">
            <p className="text-[#E93354] text-xs uppercase tracking-[0.35em] font-medium">
              Careers
            </p>
            <h2 className="font-lilita text-4xl font-bold text-white md:text-5xl leading-tight">
              Join The
              <br />
              <span className="text-[#E93354]">Sweet Haven Team.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              We&apos;re always looking for passionate bakers, creative storytellers, and
              hospitality champions who want to bring joy to every table.
              Explore roles across our kitchens, cafés, and community outreach teams.
            </p>
            <p className="text-white/50 text-base leading-relaxed max-w-md">
              Whether you&apos;re a seasoned artisan or just discovering your love for
              pastry arts, there&apos;s a place for you in our warm, collaborative kitchen.
            </p>

            {/* Perk tags */}
            <div className="flex flex-wrap gap-3">
              {perks.map((perk) => (
                <span
                  key={perk.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 text-white/70 text-xs font-medium backdrop-blur-sm hover:border-[#E93354]/50 hover:text-white transition-colors duration-200"
                >
                  <perk.icon className="h-3.5 w-3.5 text-[#E93354]" />
                  {perk.label}
                </span>
              ))}
            </div>

            <Button asChild size="lg" className="bg-[#E93354] hover:bg-[#c72944] text-white rounded-full group w-fit border-0">
              <Link to="/contact">
                View Openings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </AnimatedSection>

          {/* Right: Image */}
          <AnimatedSection animation="slide-right" delay={200}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-3xl bg-[#E93354]/10 blur-2xl" aria-hidden />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                <img
                  src="https://res.cloudinary.com/dknafpppp/image/upload/v1763038770/assorted-pastries-arranged-in-dispaly_axrbqo.webp"
                  alt="Sweet Haven bakery team"
                  className="h-full w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
                {/* Bottom badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-black/60 backdrop-blur-md border border-white/10 px-5 py-4">
                    <p className="text-white font-lilita text-lg font-bold">We&apos;re Hiring!</p>
                    <p className="text-white/60 text-sm mt-0.5">Join a team that bakes happiness daily.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
