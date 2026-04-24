import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export const CategoryCard = ({ title, image, href }: CategoryCardProps) => {
  return (
    <Link
      to={href}
      className="group block cursor-pointer rounded-2xl animate-scale-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E93354]/40"
    >
      <div className="relative h-72 overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-hover">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/25 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-lilita text-2xl font-bold text-white">{title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/80">View Products</p>
        </div>
      </div>
    </Link>
  );
};
