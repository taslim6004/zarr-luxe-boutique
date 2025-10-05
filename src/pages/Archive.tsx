import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import tshirtImage from "@/assets/tshirt.jpg";
import shirtImage from "@/assets/shirt.jpg";

export default function Archive() {
  const products = [
    {
      id: 1,
      name: "Classic T-Shirt 2024",
      price: "3,000",
      image: tshirtImage,
      description: "From our heritage collection"
    },
    {
      id: 2,
      name: "Vintage Silk Shirt",
      price: "7,500",
      image: shirtImage,
      description: "Timeless archive piece"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Heritage Collection</span>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
            </div>
            <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6">
              Archive
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our timeless classics from past collections
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
