import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Careers = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 text-white">
      <div className="pointer-events-none absolute inset-0 translate-y-12 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.05fr,1fr] lg:items-center">
        <div className="order-2 space-y-6 lg:order-1">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-primary/80">
            Careers
          </p>
          <h2 className="font-lilita text-4xl font-semibold leading-tight md:text-5xl">
            Join The Sweet Haven Team
          </h2>
          <p className="text-lg text-white/80">
            We&apos;re always on the lookout for passionate bakers, creative storytellers, and hospitality champions who
            want to bring joy to every table. Explore roles across our kitchens, cafés, and community outreach teams.
          </p>
          <p className="text-lg text-white/70">
            Whether you&apos;re a seasoned artisan or just discovering your love for pastry arts, there&apos;s a place for
            you in our warm, collaborative kitchen. Come craft moments that people savor.
          </p>
          <Button size="lg" variant="secondary" className="group w-fit">
            View Openings
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <img
              src="https://res.cloudinary.com/dknafpppp/image/upload/v1763038770/assorted-pastries-arranged-in-dispaly_axrbqo.webp"
              alt="Sweet Haven bakery team standing together"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};


