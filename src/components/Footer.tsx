import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Products: [
    { label: "All Products", href: "/products" },
    { label: "Cakes", href: "/products?category=cakes" },
    { label: "Biscuits", href: "/products?category=biscuits" },
    { label: "Cookies", href: "/products?category=cookies" },
    { label: "Rusks", href: "/products?category=rusks" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
    { label: "Careers", href: "/contact" },
    { label: "Contact", href: "/contact" },
  ],
  "Get in Touch": [
    { label: "General Enquiries", href: "/contact" },
    { label: "Become a Distributor", href: "/contact" },
    { label: "Book a Site Visit", href: "/contact" },
    { label: "Export Enquiry", href: "/contact" },
  ],
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0f0f12] text-white">
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-flex">
              <img
                src="/logo.png"
                alt="Honey Gold logo"
                className="h-14 w-auto brightness-200"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </Link>
            <p className="text-sm font-lilita font-bold text-white tracking-wide">
              One of India&apos;s Leading Bakery Brands.
            </p>
            <p className="text-white/55 text-sm leading-relaxed max-w-xs">
              Crafting delicious memories since 1995. Premium baked goods made with love, tradition, and the finest ingredients.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/8 border border-white/10 text-white/60 hover:bg-[#E93354] hover:border-[#E93354] hover:text-white transition-all duration-300"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-white text-sm uppercase tracking-[0.18em] mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-white/50 text-sm hover:text-[#E93354] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact bar */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-6">
              <a href="tel:+917428787694" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200">
                <Phone className="h-4 w-4 text-[#E93354]" />
                +91 74287 87694
              </a>
              <a href="mailto:info@honeygoldbakers.com" className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200">
                <Mail className="h-4 w-4 text-[#E93354]" />
                info@honeygoldbakers.com
              </a>
              <span className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="h-4 w-4 text-[#E93354]" />
                India
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-white/35">
              <a href="#" className="hover:text-white/70 transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-white/70 transition-colors">Terms & Conditions</a>
              <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 bg-black/30">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/30 text-xs">
            Copyright © {new Date().getFullYear()} | All Rights Reserved | Honey Gold Bakers Pvt. Ltd.
          </p>
          <p className="text-white/20 text-xs">
            Website by <span className="text-white/40">Boostmysites</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
