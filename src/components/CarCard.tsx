import { Heart, Zap, Gauge, Fuel, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car } from "@/data/cars";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface CarCardProps {
  car: Car;
  onToggleFavorite: (id: string) => void;
  isFavorite: boolean;
}

export const CarCard = ({ car, onToggleFavorite, isFavorite }: CarCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();

  const formatPrice = (price: number) => {
    return `₹${(price / 10000000).toFixed(2)} Cr`;
  };

  return (
    <div className="group relative perspective-card">
      <div className="relative overflow-hidden rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <img
            src={car.image}
            alt={car.name}
            className={`w-full h-full object-cover transition-all duration-700 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
            } group-hover:scale-110`}
            onLoad={() => setImageLoaded(true)}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

          {/* Favorite Button */}
          <Button
            size="icon"
            variant="ghost"
            className={`absolute top-4 right-4 backdrop-blur-md transition-smooth ${
              isFavorite 
                ? "bg-accent text-white hover:bg-accent/90" 
                : "bg-background/50 hover:bg-background/80"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(car.id);
            }}
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
          </Button>

          {/* Featured Badge */}
          {car.featured && (
            <Badge className="absolute top-4 left-4 gradient-hero border-0">
              Featured
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary">{car.brand}</span>
              <Badge variant="outline" className="border-border">
                {car.year}
              </Badge>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-smooth">
              {car.name}
            </h3>
            <p className="text-2xl font-bold text-chrome">{formatPrice(car.price)}</p>
          </div>

          {/* Specs Grid */}
          <div className="grid grid-cols-2 gap-3 py-4 border-y border-border">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Power</div>
                <div className="text-sm font-semibold">{car.power}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">0-100</div>
                <div className="text-sm font-semibold">{car.acceleration.split(" ")[0]}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Fuel</div>
                <div className="text-sm font-semibold">{car.fuelType}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">Type</div>
                <div className="text-sm font-semibold">{car.bodyType}</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            className="w-full gradient-hero hover:opacity-90 transition-smooth"
            onClick={() => navigate(`/car/${car.id}`)}
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
