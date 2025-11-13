interface CategoryCardProps {
  title: string;
  image: string;
}

export const CategoryCard = ({ title, image }: CategoryCardProps) => {
  return (
    <div className="group cursor-pointer animate-scale-in">
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-hover transition-all duration-500 h-72">
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
    </div>
  );
};
