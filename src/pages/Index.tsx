import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { PaymentMethods } from "@/components/PaymentMethods";
import { Footer } from "@/components/Footer";
import tshirtImage from "@/assets/tshirt.jpg";
import dropsholderImage from "@/assets/dropsholder.jpg";
import shirtImage from "@/assets/shirt.jpg";
import toteImage from "@/assets/tote.jpg";
import capImage from "@/assets/cap.jpg";
import hoodieImage from "@/assets/hoodie.jpg";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: "৳500",
      image: tshirtImage,
      description: "Cut from ultra-soft premium cotton in an oversized urban silhouette. Your new everyday essential from coffee runs to midnight city strolls.",
    },
    {
      id: 2,
      name: "Signature Dropsholder",
      price: "৳350",
      image: dropsholderImage,
      description: "Handcrafted with precision for the modern Dhakaite. Functional meets fashion-forward – the little detail that makes a big style statement.",
    },
    {
      id: 3,
      name: "Everyday Luxury Shirt",
      price: "৳600",
      image: shirtImage,
      description: "Luxe cotton blend with a fine matte finish. Slightly tailored fit that balances sharp and laid-back, instantly adding polish to any look.",
    },
    {
      id: 4,
      name: "Streetwise Saddle Tote",
      price: "৳800",
      image: toteImage,
      description: "A structured canvas tote with premium hardware. Perfect for carrying essentials in style, whether hitting the streets or heading to work.",
    },
    {
      id: 5,
      name: "Urban Crest Cap",
      price: "৳400",
      image: capImage,
      description: "Upscale baseball cap with subtle embroidered logo. Offers sun protection and a finishing touch to complete your street-luxe outfit.",
    },
    {
      id: 6,
      name: "Dhaka Night Hoodie",
      price: "৳900",
      image: hoodieImage,
      description: "Cozy, slouchy heavyweight hoodie in premium fabric. Ideal for layering and capturing that effortless street-luxury aesthetic.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter transition-colors">
      <Navbar />
      <Hero />

      {/* Collection Section */}
      <section id="collection" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h3 className="font-playfair text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Step Up Your Style
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meticulously crafted pieces that blend Bangladesh's rich heritage with modern sophistication. Each item tells a story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
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
            At ZARR, luxury isn't just about what you wear – it's how it makes you feel. Every thread, every stitch, every detail is a testament to our commitment to excellence. We draw inspiration from Bangladesh's rich textile heritage, the vibrant energy of Dhaka's streets, and the lush green landscapes that define our nation.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our collection represents the perfect marriage of traditional craftsmanship and contemporary aesthetics, designed for those who appreciate quality, culture, and the finer things in life. From urban explorers to modern connoisseurs, ZARR creates pieces that transcend time and trends.
          </p>
        </div>
      </section>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;
