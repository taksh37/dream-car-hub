import { CarCard } from "./CarCard";
import { Car } from "@/data/cars";

interface CarGridProps {
  cars: Car[];
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const CarGrid = ({ cars, favorites, onToggleFavorite }: CarGridProps) => {
  if (cars.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
            <span className="text-4xl">🚗</span>
          </div>
          <h3 className="text-2xl font-bold mb-2">No Cars Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters to see more results
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">
            Available Cars <span className="text-primary">({cars.length})</span>
          </h2>
          <p className="text-muted-foreground">
            Find your perfect match from our curated collection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CarCard
                car={car}
                onToggleFavorite={onToggleFavorite}
                isFavorite={favorites.includes(car.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
