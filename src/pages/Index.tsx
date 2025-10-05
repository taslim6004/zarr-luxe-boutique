import { useState } from "react";
import { ShoppingBag, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import tshirtImage from "@/assets/tshirt.jpg";
import dropsholderImage from "@/assets/dropsholder.jpg";
import shirtImage from "@/assets/shirt.jpg";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Premium T-Shirt",
      price: "৳500",
      image: tshirtImage,
      description: "Crafted from the finest cotton, tailored for perfection.",
    },
    {
      id: 2,
      name: "Designer Dropsholder",
      price: "৳350",
      image: dropsholderImage,
      description: "Contemporary comfort meets sophisticated style.",
    },
    {
      id: 3,
      name: "Luxury Dress Shirt",
      price: "৳600",
      image: shirtImage,
      description: "Impeccable tailoring for the modern connoisseur.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
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
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-foreground"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="ZARR Luxury Fashion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h2 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-in-up leading-tight">
            Luxury
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Redefined
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            Experience the pinnacle of contemporary fashion. Each piece tells a story of craftsmanship and elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 group"
            >
              Explore Collection
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-semibold text-lg px-8 py-6"
            >
              Discover More
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="collection" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Our Collection
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meticulously crafted pieces that blend timeless elegance with modern sophistication.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-playfair text-3xl font-bold text-accent">
                      {product.price}
                    </span>
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  New
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h3 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-6">
            The ZARR Philosophy
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            At ZARR, we believe luxury is not just about what you wear, but how it makes you feel. Every thread, every stitch, every detail is a testament to our commitment to excellence. We draw inspiration from Bangladesh's rich heritage while embracing contemporary design principles to create pieces that transcend time and trends.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our collection represents the perfect marriage of traditional craftsmanship and modern aesthetics, designed for those who appreciate the finer things in life.
          </p>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h3 className="font-playfair text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Seamless Payment Experience
            </h3>
            <p className="text-lg text-muted-foreground">
              We accept all major payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-scale-in">
            {[
              { name: "bKash", color: "from-[#E2136E] to-[#C60F5E]" },
              { name: "Nagad", color: "from-[#EE4023] to-[#D13218]" },
              { name: "Rocket", color: "from-[#8B3A9F] to-[#6E2D7F]" },
              { name: "Cash on Delivery", color: "from-accent to-accent/80" },
            ].map((method, index) => (
              <div
                key={method.name}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white font-bold text-xl`}>
                  {method.name.charAt(0)}
                </div>
                <p className="text-foreground font-semibold">{method.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              All major credit and debit cards accepted
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              {["Visa", "Mastercard", "American Express"].map((card) => (
                <div
                  key={card}
                  className="bg-secondary px-6 py-3 rounded-lg border border-border text-foreground font-semibold"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-playfair text-2xl font-bold text-foreground mb-4">ZARR</h4>
              <p className="text-muted-foreground">
                Luxury fashion redefined for the modern individual.
              </p>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#collection" className="text-muted-foreground hover:text-foreground transition-colors">
                    Collection
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-foreground mb-4">Contact</h5>
              <p className="text-muted-foreground">
                Email: hello@zarr.com
                <br />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 ZARR. All rights reserved. Crafted with passion in Bangladesh.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
