import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  index: number;
}

export const ProductCard = ({ name, price, image, description, index }: ProductCardProps) => {
  return (
    <div
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-500 animate-scale-in hover:scale-105 hover:shadow-[var(--shadow-luxury)]"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <h4 className="font-playfair text-2xl font-semibold text-foreground mb-2 transition-colors">
          {name}
        </h4>
        <p className="text-muted-foreground mb-4 min-h-[3rem]">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-playfair text-3xl font-bold text-accent">
            {price}
          </span>
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:scale-105"
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        New
      </div>
    </div>
  );
};
