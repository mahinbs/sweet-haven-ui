import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
}

export const CategoryCard = ({ title, image, href }: CategoryCardProps) => {
  return (
    <Link to={href} className="group block cursor-pointer animate-scale-in focus:outline-none focus-visible:ring-4 focus-visible:ring-[#E93354]/40 rounded-2xl">
      <div className="relative h-72 overflow-hidden rounded-2xl bg-card shadow-soft transition-all duration-500 group-hover:shadow-hover">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-serif font-bold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
