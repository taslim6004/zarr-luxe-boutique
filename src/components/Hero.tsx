import { ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 backdrop-blur-xl border border-primary/20 mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent" />
          <span className="text-sm font-medium text-foreground">Premium Collection 2025</span>
        </div>
        
        <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-foreground mb-6 animate-fade-in-up leading-[1.1] tracking-tight">
          Luxury
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary mt-2 animate-shimmer bg-[length:200%_auto]">
            Redefined
          </span>
        </h2>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-10 animate-fade-in-up max-w-3xl mx-auto font-light leading-relaxed" style={{ animationDelay: "0.2s" }}>
          Experience unparalleled craftsmanship. Every piece is a masterpiece, meticulously designed for those who demand excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold text-lg px-10 py-7 group transition-all hover:scale-105 hover:shadow-[var(--shadow-glow)] rounded-xl"
          >
            Explore Collection
            <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-accent/50 backdrop-blur-xl bg-background/30 text-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent font-semibold text-lg px-10 py-7 transition-all hover:scale-105 rounded-xl"
          >
            View Lookbook
          </Button>
        </div>
      </div>
    </section>
  );
};
