import { useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <h1 className="font-playfair text-3xl font-bold text-foreground tracking-wider">
            ZARR
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#collection" className="text-muted-foreground hover:text-foreground transition-colors">
              Collection
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <ThemeToggle />
            <Button variant="default" className="bg-primary hover:bg-primary/90 transition-transform hover:scale-105">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <div className="px-4 py-6 space-y-4">
            <a
              href="#collection"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collection
            </a>
            <a
              href="#about"
              className="block text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <Button variant="default" className="w-full bg-primary hover:bg-primary/90">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Shop Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
