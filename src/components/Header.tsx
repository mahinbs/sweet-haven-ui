import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "/HOME", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "PRODUCTS", href: "#" },
  { label: "EXPORT", href: "#" },
  { label: "NEWSROOM", href: "#" },
  { label: "PEOPLE", href: "#" },
  { label: "INVESTORS", href: "#" },
  { label: "CONTACT", href: "#" },
];

export const Header = () => {
  return (
    <header className="shadow-soft font-baloo">
      <div className="h-3 w-full bg-[#E93354]" />
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
          <div className="flex items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dknafpppp/image/upload/v1763039285/ChatGPT_Image_Nov_13_2025_02_07_56_PM_eeyu1w.png"
                alt="Anmol logo"
                className="h-16 w-auto md:h-20"
              />
            </a>
            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-base font-extrabold uppercase tracking-wide transition-colors text-[#111]",
                    item.label === "/HOME" ? "text-[#E93354]" : "text-[#111]",
                    "hover:text-[#E93354]",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <div className="hidden h-24 w-16 -skew-y-[6deg] items-center justify-center rounded-b-lg bg-gradient-to-b from-[#E93354] to-[#1E3A8A] text-white shadow-md md:flex">
              <div className="flex flex-col items-center justify-center gap-1 text-center text-[0.62rem] font-semibold leading-tight">
                <span className="uppercase">Great</span>
                <span className="uppercase">Place</span>
                <span className="uppercase">To</span>
                <span className="uppercase">Work</span>
                <span className="text-[0.55rem] uppercase text-white/80">Certified</span>
                <span className="text-[0.55rem] uppercase text-white/70">India</span>
              </div>
            </div>
            <button
              type="button"
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-md border border-border text-[#E93354] transition-colors",
                "hover:border-[#E93354] hover:bg-[#E93354] hover:text-white",
              )}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

