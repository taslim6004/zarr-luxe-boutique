import { Instagram, Twitter, Facebook, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-transparent to-accent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-playfair text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
              ZARR
            </h4>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Where innovation meets elegance. Crafting the future of luxury fashion, one masterpiece at a time.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-xl border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 text-foreground hover:text-primary-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h5 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Collection</h5>
            <ul className="space-y-3">
              {["New Arrivals", "Best Sellers", "Limited Edition", "Seasonal", "Archive"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 inline-block duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Company</h5>
            <ul className="space-y-3">
              {["About Us", "Sustainability", "Careers", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-2 inline-block duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h5 className="font-bold text-foreground mb-6 uppercase tracking-wider text-sm">Get in Touch</h5>
            <div className="space-y-4">
              <a href="mailto:contact@zarr.luxury" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors group">
                <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>contact@zarr.luxury</span>
              </a>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Global Headquarters<br />New York · London · Tokyo</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              &copy; 2025 ZARR. All rights reserved. Engineered with precision.
            </p>
            <div className="flex gap-6 text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <a key={item} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
