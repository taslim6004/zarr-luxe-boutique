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
      name: "Signature Cotton Tee",
      price: "3,500",
      image: tshirtImage,
      description: "Engineered from Egyptian cotton with a refined drape. Features invisible seam technology and a contemporary relaxed fit that defines modern luxury casualwear.",
    },
    {
      id: 2,
      name: "Heritage Collection Piece",
      price: "2,800",
      image: dropsholderImage,
      description: "Precision-crafted accessory merging traditional artisanship with cutting-edge design. Each piece undergoes a 48-hour quality inspection process.",
    },
    {
      id: 3,
      name: "Executive Dress Shirt",
      price: "5,500",
      image: shirtImage,
      description: "Italian cotton weave with mother-of-pearl buttons. Tailored using advanced body-mapping technology for the perfect fit that moves with you.",
    },
    {
      id: 4,
      name: "Metropolitan Leather Tote",
      price: "8,500",
      image: toteImage,
      description: "Full-grain leather construction with brass hardware. Interior features organized compartments and a dedicated laptop sleeve. Designed for the modern professional.",
    },
    {
      id: 5,
      name: "Limited Edition Cap",
      price: "3,200",
      image: capImage,
      description: "Premium wool blend with embroidered insignia. Structured crown with moisture-wicking sweatband. Limited to 500 pieces worldwide.",
    },
    {
      id: 6,
      name: "Architect's Hoodie",
      price: "7,500",
      image: hoodieImage,
      description: "380gsm heavyweight French terry with reinforced kangaroo pocket. Oversized silhouette with dropped shoulders. The ultimate statement in elevated streetwear.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-inter transition-colors">
      <Navbar />
      <Hero />

      {/* Collection Section */}
      <section id="collection" className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Premium Collection</span>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
            </div>
            <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Masterpieces in Motion
            </h3>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto font-light leading-relaxed">
              Each piece represents the apex of design innovation, where centuries-old craftsmanship meets tomorrow's technology. Welcome to the future of luxury.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <ProductCard key={product.id} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 bg-card relative">
        {/* Glass Morphism Container */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-3xl"></div>
          <div className="relative backdrop-blur-xl bg-background/30 border border-border/50 rounded-3xl p-12 sm:p-16 shadow-[var(--shadow-luxury)]">
            <div className="text-center animate-fade-in-up">
              <div className="inline-block mb-6">
                <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">Our Story</span>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent mt-2"></div>
              </div>
              
              <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                The Art of Perfection
              </h3>
              
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-8 font-light">
                At ZARR, we don't just create fashion—we engineer experiences. Every garment undergoes a rigorous 127-point quality assessment, ensuring that what reaches you represents nothing less than absolute excellence.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground font-medium">Artisan Hours</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30">
                  <div className="text-4xl font-bold text-accent mb-2">98%</div>
                  <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
                </div>
                <div className="text-center p-6 rounded-2xl bg-background/50 backdrop-blur-xl border border-border/30">
                  <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                  <p className="text-muted-foreground font-medium">Global Community</p>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed mt-10">
                From sketch to finished product, our process is a symphony of traditional techniques and cutting-edge innovation. We partner with the world's finest mills, source sustainable materials, and collaborate with master craftspeople who share our obsession with detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <PaymentMethods />
      <Footer />
    </div>
  );
};

export default Index;
