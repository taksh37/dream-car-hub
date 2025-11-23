import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Filters, FilterState } from "@/components/Filters";
import { CarGrid } from "@/components/CarGrid";
import { cars } from "@/data/cars";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>({
    brand: "All",
    bodyType: "All",
    fuelType: "All",
    priceRange: "All",
    year: "All",
  });

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      brand: "All",
      bodyType: "All",
      fuelType: "All",
      priceRange: "All",
      year: "All",
    });
    setSearchQuery("");
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Search filter
      const matchesSearch =
        car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        car.brand.toLowerCase().includes(searchQuery.toLowerCase());

      // Brand filter
      const matchesBrand = filters.brand === "All" || car.brand === filters.brand;

      // Body type filter
      const matchesBodyType = filters.bodyType === "All" || car.bodyType === filters.bodyType;

      // Fuel type filter
      const matchesFuelType = filters.fuelType === "All" || car.fuelType === filters.fuelType;

      // Price range filter
      const matchesPriceRange = (() => {
        if (filters.priceRange === "All") return true;
        const priceInCr = car.price / 10000000;
        if (filters.priceRange === "0-15") return priceInCr < 1.5;
        if (filters.priceRange === "15-25") return priceInCr >= 1.5 && priceInCr < 2.5;
        if (filters.priceRange === "25-35") return priceInCr >= 2.5 && priceInCr < 3.5;
        if (filters.priceRange === "35") return priceInCr >= 3.5;
        return true;
      })();

      // Year filter
      const matchesYear = filters.year === "All" || car.year.toString() === filters.year;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesBodyType &&
        matchesFuelType &&
        matchesPriceRange &&
        matchesYear
      );
    });
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen">
      <Navbar onSearchChange={setSearchQuery} favoritesCount={favorites.length} />
      <Hero />
      <Filters 
        filters={filters} 
        onFilterChange={handleFilterChange} 
        onResetFilters={handleResetFilters}
      />
      <CarGrid 
        cars={filteredCars} 
        favorites={favorites} 
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default Index;
