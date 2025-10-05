export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-playfair text-2xl font-bold text-foreground mb-4">ZARR</h4>
            <p className="text-muted-foreground">
              Luxury fashion redefined for the modern individual. Heritage meets contemporary style.
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
  );
};
