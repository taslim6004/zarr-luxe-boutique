import { Button } from "@/components/ui/button";
import { ShoppingBag, Eye } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: string;
  image: string;
  description: string;
  index: number;
}

export const ProductCard = ({ name, price, image, description, index }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary transition-all duration-700 animate-scale-in hover:shadow-[var(--shadow-depth)] backdrop-blur-xl"
      style={{ 
        animationDelay: `${index * 0.15}s`,
        transform: isHovered ? 'translateY(-12px) rotateX(2deg)' : 'translateY(0) rotateX(0)',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium Badge */}
      <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
        Exclusive
      </div>
      
      {/* 3D Image Container */}
      <div className="aspect-square overflow-hidden bg-secondary/20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-125 transition-transform duration-1000 ease-out"
          style={{
            filter: isHovered ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
          }}
        />
        
        {/* Hover Overlay with Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex items-end justify-center pb-8">
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="backdrop-blur-xl bg-background/50 border-accent/50 hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all hover:scale-110 shadow-lg"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
      
      {/* Premium Content Section */}
      <div className="p-8 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        
        <h4 className="font-playfair text-2xl font-bold text-foreground mb-3 transition-colors group-hover:text-primary">
          {name}
        </h4>
        <p className="text-muted-foreground mb-6 min-h-[3rem] leading-relaxed text-sm">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Price</p>
            <span className="font-playfair text-3xl font-bold bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
              {price}
            </span>
          </div>
        </div>
      </div>
      
      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      </div>
    </div>
  );
};
