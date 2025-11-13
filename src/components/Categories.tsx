import { CategoryCard } from "./CategoryCard";
import cakesImg from "@/assets/category-cakes.jpg";
import pastriesImg from "@/assets/category-pastries.jpg";
import breadImg from "@/assets/category-bread.jpg";
import cookiesImg from "@/assets/category-cookies.jpg";
import customImg from "@/assets/category-custom.jpg";

const categories = [
  { title: "Cakes", image: cakesImg },
  { title: "Pastries", image: pastriesImg },
  { title: "Bread", image: breadImg },
  { title: "Cookies", image: cookiesImg },
  { title: "Special Orders", image: customImg },
];

export const Categories = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handcrafted selection of premium baked goods
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
