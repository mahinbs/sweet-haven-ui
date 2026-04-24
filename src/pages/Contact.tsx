import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

const contactBlocks = [
  {
    title: "Call Us",
    value: "+91 98765 43210",
    caption: "Sales & support",
    icon: Phone,
  },
  {
    title: "Email",
    value: "hello@honeygoldbakers.com",
    caption: "Business enquiries",
    icon: Mail,
  },
  {
    title: "Visit Factory",
    value: "Industrial Area, Jaipur",
    caption: "Monday to Saturday",
    icon: MapPin,
  },
  {
    title: "Working Hours",
    value: "9:00 AM - 7:00 PM",
    caption: "Sunday by appointment",
    icon: Clock3,
  },
];

const Contact = () => {
  return (
    <div className="overflow-hidden bg-gradient-to-b from-cream via-background to-beige/40">
      <section className="px-4 pb-14 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-white/85 p-8 shadow-[var(--shadow-soft)] md:p-12">
          <AnimatedSection animation="slide-left" className="space-y-4">
            <span className="inline-flex rounded-full bg-pink-light px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brown-dark">
              Contact Us
            </span>
            <h1 className="font-lilita text-4xl font-extrabold text-brown-dark md:text-6xl">Let&apos;s Build Something Fresh Together</h1>
            <p className="max-w-3xl text-brown-dark/80 md:text-lg">
              Connect with Honey Gold Bakers Pvt. Ltd. for product enquiries, distribution, bulk orders, or general
              support.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="px-4 pb-16">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactBlocks.map((block, index) => {
            const Icon = block.icon;
            return (
              <AnimatedSection key={block.title} animation="zoom" delay={index * 90}>
                <article className="h-full rounded-[1.5rem] border border-brown-warm/15 bg-white p-6 shadow-[var(--shadow-soft)]">
                  <span className="inline-flex rounded-2xl bg-pink-light p-3 text-brown-dark">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-brown-dark/60">{block.title}</p>
                  <p className="mt-2 text-lg font-semibold text-brown-dark">{block.value}</p>
                  <p className="mt-1 text-sm text-brown-dark/70">{block.caption}</p>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_1.25fr]">
          <AnimatedSection animation="slide-left" className="space-y-4 rounded-[1.8rem] bg-brown-dark p-8 text-cream shadow-[var(--shadow-hover)] md:p-10">
            <h2 className="font-lilita text-3xl md:text-4xl font-bold">Partnership Ready</h2>
            <p className="text-cream/85">
              We support retailers, wholesalers, and distributors with timely supply and consistent quality.
            </p>
            <ul className="space-y-3 text-sm text-cream/85">
              <li>Bulk order handling</li>
              <li>Reliable delivery planning</li>
              <li>Dedicated customer-first communication</li>
            </ul>
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1100&q=80"
              alt="Fresh bakery products"
              className="h-48 w-full rounded-2xl object-cover"
            />
          </AnimatedSection>

          <AnimatedSection animation="slide-right" delay={140}>
            <form className="rounded-[1.8rem] border border-brown-warm/15 bg-white p-7 shadow-[var(--shadow-soft)] md:p-9">
              <h3 className="font-lilita text-3xl text-brown-dark font-bold">Send an Enquiry</h3>
              <p className="mt-2 text-brown-dark/70">Tell us what you need and our team will contact you shortly.</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full name"
                  className="rounded-xl border border-brown-warm/25 bg-cream/40 px-4 py-3 text-sm text-brown-dark outline-none focus:border-[#E93354]"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="rounded-xl border border-brown-warm/25 bg-cream/40 px-4 py-3 text-sm text-brown-dark outline-none focus:border-[#E93354]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl border border-brown-warm/25 bg-cream/40 px-4 py-3 text-sm text-brown-dark outline-none focus:border-[#E93354] sm:col-span-2"
                />
                <select className="rounded-xl border border-brown-warm/25 bg-cream/40 px-4 py-3 text-sm text-brown-dark outline-none focus:border-[#E93354] sm:col-span-2">
                  <option>General enquiry</option>
                  <option>Bulk order</option>
                  <option>Distribution partnership</option>
                  <option>Custom product request</option>
                </select>
                <textarea
                  placeholder="Your message"
                  rows={5}
                  className="rounded-xl border border-brown-warm/25 bg-cream/40 px-4 py-3 text-sm text-brown-dark outline-none focus:border-[#E93354] sm:col-span-2"
                />
              </div>

              <div className="mt-6">
                <Button className="rounded-full px-10">Submit Enquiry</Button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
