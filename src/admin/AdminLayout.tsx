import { Link, useLocation, useNavigate } from "react-router-dom";
import { Briefcase, FolderOpen, LayoutDashboard, LogOut, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/services/auth";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Collections", href: "/admin/collections", icon: FolderOpen },
  { label: "Products", href: "/admin/products", icon: Package },
  { label: "Career Posts", href: "/admin/jobs", icon: Briefcase },
  { label: "Applications", href: "/admin/applications", icon: Users },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="fixed inset-y-0 left-0 z-40 w-64 border-r border-slate-200 bg-white">
        <div className="flex h-16 items-center border-b border-slate-200 px-6">
          <Link to="/admin" className="font-lilita text-lg text-[#E93354]">
            Honey Gold Admin
          </Link>
        </div>
        <nav className="space-y-1 p-4">
          {navItems.map((item) => {
            const isActive =
              item.href === "/admin"
                ? location.pathname === "/admin"
                : location.pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[#E93354]/10 text-[#E93354]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 border-t border-slate-200 p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-slate-600"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
          <Link
            to="/"
            className="mt-2 block px-3 text-xs text-slate-400 hover:text-slate-600"
          >
            ← Back to website
          </Link>
        </div>
      </aside>

      <main className="ml-64 flex-1 p-8">{children}</main>
    </div>
  );
}
