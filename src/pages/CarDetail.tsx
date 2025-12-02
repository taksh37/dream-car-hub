import { useParams, useNavigate } from "react-router-dom";
import { cars } from "@/data/cars";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, Heart, Share2, Zap, Gauge, Fuel, Users, 
  Cog, TrendingUp, Wind, Check 
} from "lucide-react";
import { useState } from "react";

export const CarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === id);
  const [selectedColor, setSelectedColor] = useState(0);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Car Not Found</h2>
          <Button onClick={() => navigate("/")}>Go Back</Button>
        </div>
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  };

  const getCarImageUrl = (image: string) => {
    if (image.startsWith("/src/assets/cars/")) {
      return image.replace("/src/assets/cars/", "/cars/");
    }
    return image;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={getCarImageUrl(car.image)} 
          alt={car.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Back Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 left-4 glass hover:bg-background/80"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-5 h-5" />
        </Button>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" size="icon" className="glass hover:bg-background/80">
            <Heart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="glass hover:bg-background/80">
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        {/* Car Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <Badge className="gradient-hero border-0 mb-4">
              {car.featured ? "Featured" : car.year}
            </Badge>
            <h1 className="text-5xl font-bold mb-2 text-chrome">{car.name}</h1>
            <p className="text-2xl text-muted-foreground">{car.brand}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Price & CTA */}
            <div className="glass rounded-2xl p-8 flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Starting Price</div>
                <div className="text-4xl font-bold text-chrome">{formatPrice(car.price)}</div>
              </div>
              <Button size="lg" className="gradient-hero hover:opacity-90">
                Book Test Drive
              </Button>
            </div>

            {/* Description */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">About This Car</h2>
              <p className="text-muted-foreground leading-relaxed">{car.description}</p>
            </div>

            {/* Key Specifications */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Key Specifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Power Output</div>
                    <div className="text-2xl font-bold text-primary">{car.power}</div>
                    <div className="text-sm text-muted-foreground">Maximum Power</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Gauge className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Acceleration</div>
                    <div className="text-2xl font-bold text-accent">{car.acceleration.split(" in ")[1]}</div>
                    <div className="text-sm text-muted-foreground">0-100 km/h</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Top Speed</div>
                    <div className="text-2xl font-bold text-primary">{car.topSpeed}</div>
                    <div className="text-sm text-muted-foreground">Maximum Speed</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Torque</div>
                    <div className="text-2xl font-bold text-accent">{car.torque}</div>
                    <div className="text-sm text-muted-foreground">Maximum Torque</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Fuel className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Fuel Type</div>
                    <div className="text-2xl font-bold text-primary">{car.fuelType}</div>
                    <div className="text-sm text-muted-foreground">{car.mileage}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Seating</div>
                    <div className="text-2xl font-bold text-accent">{car.seating}</div>
                    <div className="text-sm text-muted-foreground">Passengers</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Transmission</div>
                    <div className="text-2xl font-bold text-primary">{car.transmission}</div>
                    <div className="text-sm text-muted-foreground">{car.engineCapacity !== "N/A" ? car.engineCapacity : "Electric Motor"}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Premium Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {car.features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-smooth"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Summary Card */}
          <div className="lg:col-span-1">
            <div className="glass rounded-2xl p-8 sticky top-24 space-y-6">
              <h3 className="text-xl font-bold">Summary</h3>
              
              <div className="space-y-4 py-4 border-y border-border">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Brand</span>
                  <span className="font-semibold">{car.brand}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Model</span>
                  <span className="font-semibold">{car.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Year</span>
                  <span className="font-semibold">{car.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Body Type</span>
                  <span className="font-semibold">{car.bodyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transmission</span>
                  <span className="font-semibold">{car.transmission}</span>
                </div>
              </div>

              {/* Color Selection */}
              <div>
                <div className="text-sm font-medium mb-3">Available Colors</div>
                <div className="grid grid-cols-2 gap-2">
                  {car.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`p-3 rounded-xl text-sm font-medium transition-smooth ${
                        selectedColor === index
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-3">
                <Button className="w-full gradient-hero hover:opacity-90" size="lg">
                  Schedule Test Drive
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Get Best Price
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
