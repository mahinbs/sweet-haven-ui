import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CONTACT", href: "/contact" },
];

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="shadow-soft font-baloo">
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2">
          <div className="flex justify-between w-full items-center gap-6">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Honey Gold logo"
                className="h-10 w-auto md:h-14"
              />
            </a>
            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "text-base font-extrabold uppercase tracking-wide transition-colors text-[#111] hover:text-[#E93354]",
                  )}
                >
                  <span className="text-[#E93354]">
                    {item.href === pathname ? "/" : ""}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-6">
            {/* <div className="hidden h-24 w-16 -skew-y-[6deg] items-center justify-center rounded-b-lg bg-gradient-to-b from-[#E93354] to-[#1E3A8A] text-white shadow-md md:flex">
              <div className="flex flex-col items-center justify-center gap-1 text-center text-[0.62rem] font-medium leading-tight">
                <span className="uppercase">Great</span>
                <span className="uppercase">Place</span>
                <span className="uppercase">To</span>
                <span className="uppercase">Work</span>
                <span className="text-[0.55rem] uppercase text-white/80">Certified</span>
                <span className="text-[0.55rem] uppercase text-white/70">India</span>
              </div>
            </div> */}
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
