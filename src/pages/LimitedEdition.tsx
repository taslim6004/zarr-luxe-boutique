import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import dropshholderImage from "@/assets/dropsholder.jpg";
import shirtImage from "@/assets/shirt.jpg";

export default function LimitedEdition() {
  const products = [
    {
      id: 1,
      name: "Limited Dropsholder",
      price: "25,000",
      image: dropshholderImage,
      description: "Exclusive edition, limited stock"
    },
    {
      id: 2,
      name: "Premium Silk Shirt",
      price: "18,500",
      image: shirtImage,
      description: "Limited edition luxury piece"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Exclusive Collection</span>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
            </div>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Limited Edition
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rare pieces for the discerning collector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
