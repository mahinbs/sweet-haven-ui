import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
}

export const ProductCard = ({ name, price, image }: ProductCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border/70 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-hover">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-2 font-lilita text-xl font-semibold text-foreground">{name}</h3>
        <p className="mb-4 text-2xl font-semibold text-primary">{price}</p>
        <Button
          variant="outline"
          className="w-full rounded-full border-brown-warm/40 bg-white transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Enquiry
        </Button>
      </div>
    </div>
  );
};
