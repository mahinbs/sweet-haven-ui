import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Newsletter = () => {
  return (
    <section className="bg-primary px-4 py-24">
      <div className="mx-auto max-w-4xl rounded-3xl border border-white/15 bg-white/5 p-8 text-center backdrop-blur-sm animate-fade-in md:p-12">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-primary-foreground/80">Newsletter</p>
        <h2 className="mb-4 font-lilita text-4xl font-bold text-primary-foreground md:text-5xl">
          Stay Sweet with Us
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90">
          Subscribe to our newsletter for exclusive offers, new product launches, and baking tips
        </p>

        <div className="mx-auto flex max-w-lg flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border-0 bg-primary-foreground"
          />
          <Button variant="secondary" size="lg" className="rounded-full sm:w-auto">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
