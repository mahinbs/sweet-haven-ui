import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocation, Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "CAREERS", href: "/careers" },
  { label: "CONTACT", href: "/contact" },
];

export const Header = () => {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="shadow-soft font-baloo relative z-50">
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-2">
          <div className="flex justify-between w-full items-center gap-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Honey Gold logo"
                className="h-10 w-auto md:h-14"
              />
            </Link>
            <nav className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={cn(
                    "text-base font-extrabold uppercase tracking-wide transition-colors text-[#111] hover:text-[#E93354]",
                  )}
                >
                  <span className="text-[#E93354]">
                    {item.href === pathname ? "/" : ""}
                  </span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-md border border-border text-[#E93354] transition-colors lg:hidden",
                "hover:border-[#E93354] hover:bg-[#E93354] hover:text-white",
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-border shadow-md py-4 px-6 lg:hidden flex flex-col gap-4 z-50">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-base font-extrabold uppercase tracking-wide py-2 border-b border-border/40 text-[#111] hover:text-[#E93354]",
                item.href === pathname && "text-[#E93354]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
