export const PaymentMethods = () => {
  return (
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
              className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary transition-all duration-300 hover:scale-105 animate-float"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
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
                className="bg-secondary px-6 py-3 rounded-lg border border-border text-foreground font-semibold hover:border-primary transition-all hover:scale-105"
              >
                {card}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
