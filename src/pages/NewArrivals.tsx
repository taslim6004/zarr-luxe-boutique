import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import shirtImage from "@/assets/shirt.jpg";
import hoodieImage from "@/assets/hoodie.jpg";
import tshirtImage from "@/assets/tshirt.jpg";
import capImage from "@/assets/cap.jpg";

export default function NewArrivals() {
  const products = [
    {
      id: 1,
      name: "Premium Silk Shirt",
      price: "8,500",
      image: shirtImage,
      description: "Handcrafted with the finest silk threads"
    },
    {
      id: 2,
      name: "Designer Hoodie",
      price: "12,000",
      image: hoodieImage,
      description: "Ultimate comfort meets contemporary style"
    },
    {
      id: 3,
      name: "Classic T-Shirt",
      price: "3,500",
      image: tshirtImage,
      description: "Timeless design, superior quality"
    },
    {
      id: 4,
      name: "Signature Cap",
      price: "2,800",
      image: capImage,
      description: "Complete your look with elegance"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Fresh Arrivals</span>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
            </div>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              New Arrivals
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our latest collection of premium apparel
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
