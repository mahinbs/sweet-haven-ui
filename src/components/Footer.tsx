import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Shop: ["All Products", "Cakes", "Pastries", "Bread", "Special Orders"],
  Company: ["About Us", "Our Story", "Careers", "Press", "Contact"],
  Support: ["FAQ", "Shipping", "Returns", "Track Order", "Gift Cards"],
};

export const Footer = () => {
  return (
    <footer className="bg-black text-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-4">
            <a href="/" className="inline-flex">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1763039285/ChatGPT_Image_Nov_13_2025_02_07_56_PM_eeyu1w.png"
                alt="Anmol logo"
                className="h-16 w-auto"
              />
            </a>
            <h3 className="text-3xl font-serif font-bold">The Bakery</h3>
            <p className="text-background/80 mb-6">
              Crafting delicious memories since 1995. Premium baked goods made with love and tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-serif font-bold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/80 hover:text-background transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-background/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-background/60" />
              <span className="text-background/80">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-background/60" />
              <span className="text-background/80">hello@thebakery.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-background/60" />
              <span className="text-background/80">123 Baker Street, NY</span>
            </div>
          </div>
          
          <div className="text-center text-background/60 text-sm">
            © 2024 The Bakery. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
