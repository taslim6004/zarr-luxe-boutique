import { CreditCard, Shield, Zap, Globe } from "lucide-react";

export const PaymentMethods = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-primary">Secure Checkout</span>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent mt-2"></div>
          </div>
          <h3 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise-Grade Security
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bank-level encryption. Instant processing. Complete peace of mind.
          </p>
        </div>

        {/* Payment Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Shield, title: "256-bit Encryption", desc: "Military-grade security" },
            { icon: Zap, title: "Instant Processing", desc: "Real-time confirmation" },
            { icon: Globe, title: "Global Coverage", desc: "150+ currencies accepted" },
            { icon: CreditCard, title: "Zero Fees", desc: "No hidden charges" },
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-6 text-center hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-luxury)] animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="font-bold text-foreground mb-1">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <p className="text-muted-foreground mb-8 text-lg">
            Accepted worldwide payment methods
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: "Visa", gradient: "from-[#1A1F71] to-[#0E1451]" },
              { name: "Mastercard", gradient: "from-[#EB001B] to-[#FF5F00]" },
              { name: "American Express", gradient: "from-[#006FCF] to-[#00478F]" },
              { name: "PayPal", gradient: "from-[#003087] to-[#009CDE]" },
              { name: "Apple Pay", gradient: "from-[#000000] to-[#1A1A1A]" },
              { name: "Google Pay", gradient: "from-[#4285F4] to-[#34A853]" },
            ].map((method, index) => (
              <div
                key={method.name}
                className={`bg-gradient-to-br ${method.gradient} px-8 py-4 rounded-xl text-white font-bold shadow-lg hover:scale-110 transition-all duration-300 animate-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {method.name}
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 rounded-2xl bg-card/30 backdrop-blur-xl border border-border/50">
            <p className="text-muted-foreground text-sm">
              <Shield className="w-4 h-4 inline mr-2 text-primary" />
              All transactions are encrypted and PCI DSS compliant. Your payment information is never stored on our servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
