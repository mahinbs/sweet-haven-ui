import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Briefcase, FolderOpen, Package, Users } from "lucide-react";
import { fetchCategories } from "@/services/categories";
import { fetchProducts } from "@/services/products";
import { fetchJobs } from "@/services/jobs";
import { fetchApplications } from "@/services/applications";

const statCards = [
  { label: "Collections", key: "collections", icon: FolderOpen, href: "/admin/collections" },
  { label: "Products", key: "products", icon: Package, href: "/admin/products" },
  { label: "Career Posts", key: "jobs", icon: Briefcase, href: "/admin/jobs" },
  { label: "Applications", key: "applications", icon: Users, href: "/admin/applications" },
] as const;

export default function AdminDashboard() {
  const categories = useQuery({ queryKey: ["categories"], queryFn: fetchCategories });
  const products = useQuery({ queryKey: ["products"], queryFn: fetchProducts });
  const jobs = useQuery({ queryKey: ["jobs", "all"], queryFn: () => fetchJobs(false) });
  const applications = useQuery({ queryKey: ["applications"], queryFn: fetchApplications });

  const counts: Record<string, number> = {
    collections: categories.data?.length ?? 0,
    products: products.data?.length ?? 0,
    jobs: jobs.data?.length ?? 0,
    applications: applications.data?.length ?? 0,
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold text-slate-900">Dashboard</h1>
      <p className="mt-1 text-sm text-slate-500">Manage products, collections, and career posts.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.key}
              to={card.href}
              className="rounded-xl border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-[#E93354]" />
                <span className="text-2xl font-bold text-slate-900">{counts[card.key]}</span>
              </div>
              <p className="mt-2 text-sm text-slate-600">{card.label}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
