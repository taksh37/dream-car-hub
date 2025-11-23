import { ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCarImage from "@/assets/hero-car.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroCarImage} 
          alt="Luxury Sports Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-32 md:py-40">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20 mb-6">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">2024 Collection</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Discover Your
            <span className="block text-chrome">Dream Machine</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Experience automotive excellence. From electric powerhouses to classic sports cars, 
            find your perfect ride in our curated collection.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="gradient-hero hover:opacity-90 transition-smooth shadow-glow group">
              Explore Collection
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted transition-smooth">
              Compare Cars
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Premium Cars</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Top Brands</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
    </section>
  );
};
