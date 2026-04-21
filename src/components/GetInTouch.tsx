import { ArrowRight, Factory, Globe2, Truck } from "lucide-react";

const contactOptions = [
  {
    title: "Honey Gold",
    description:
      "We welcome students nationwide to come on over and see how we bake happiness into every delicious Honey Gold treat.",
    cta: "Book a Visit",
    icon: Factory,
  },
  {
    title: "Become a Distributor",
    description:
      "Spice up your journey by joining our flavor-packed retail network and becoming part of the Honey Gold Family.",
    cta: "Apply Now",
    icon: Truck,
  },
  {
    title: "Export Enquiry",
    description:
      "If you’re keen on becoming an international distributor and helping us expand our market coverage, we’d love to hear from you.",
    cta: "Apply Now",
    icon: Globe2,
  },
];

export const GetInTouch = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-primary/80">
            Get in Touch
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-foreground sm:text-4xl md:text-[3rem]">
            We&apos;re Eager to Hear from You!
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Whether you are planning a factory visit or looking to collaborate
            with us, we are just one message away from creating something
            delightful together.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="group flex h-full flex-col justify-between rounded-3xl border border-border bg-background/80 p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-red-50 text-red-500">
                  <option.icon className="h-12 w-12" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">
                  {option.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {option.description}
                </p>
              </div>
              <button className="mt-6 inline-flex items-center justify-start text-sm font-medium text-primary transition-colors duration-200 group-hover:text-primary/80 md:text-base">
                {option.cta}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

