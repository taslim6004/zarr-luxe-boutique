import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 animate-parallax-slow">
        <img
          src={heroImage}
          alt="ZARR Luxury Fashion - Heritage meets modern elegance"
          className="w-full h-full object-cover animate-tilt-3d"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
          স্টাইলে রাজত্ব করুন
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mt-2">
            Reign in Style
          </span>
        </h2>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
          Where Bangladesh's rich heritage meets contemporary luxury. Each piece tells a story of craftsmanship, culture, and timeless elegance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group transition-all hover:scale-105 animate-glow-pulse"
          >
            Own the Look
            <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6 transition-all hover:scale-105"
          >
            Shop the Drop
          </Button>
        </div>
      </div>
    </section>
  );
};
