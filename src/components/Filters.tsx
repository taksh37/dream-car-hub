import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { brands, bodyTypes, fuelTypes } from "@/data/cars";

export interface FilterState {
  brand: string;
  bodyType: string;
  fuelType: string;
  priceRange: string;
  year: string;
}

interface FiltersProps {
  filters: FilterState;
  onFilterChange: (key: keyof FilterState, value: string) => void;
  onResetFilters: () => void;
}

export const Filters = ({ filters, onFilterChange, onResetFilters }: FiltersProps) => {
  return (
    <section className="py-8 border-b border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-bold">Filters</h2>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onResetFilters}
            className="hover:bg-muted"
          >
            Reset All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Brand Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Brand</label>
            <Select value={filters.brand} onValueChange={(value) => onFilterChange("brand", value)}>
              <SelectTrigger className="bg-muted/50 border-border">
                <SelectValue placeholder="All Brands" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {brands.map((brand) => (
                  <SelectItem key={brand} value={brand}>
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Body Type Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Body Type</label>
            <Select value={filters.bodyType} onValueChange={(value) => onFilterChange("bodyType", value)}>
              <SelectTrigger className="bg-muted/50 border-border">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {bodyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Fuel Type Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Fuel Type</label>
            <Select value={filters.fuelType} onValueChange={(value) => onFilterChange("fuelType", value)}>
              <SelectTrigger className="bg-muted/50 border-border">
                <SelectValue placeholder="All Fuels" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {fuelTypes.map((fuel) => (
                  <SelectItem key={fuel} value={fuel}>
                    {fuel}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Price Range</label>
            <Select value={filters.priceRange} onValueChange={(value) => onFilterChange("priceRange", value)}>
              <SelectTrigger className="bg-muted/50 border-border">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="All">All Prices</SelectItem>
                <SelectItem value="0-15">Under ₹1.5 Cr</SelectItem>
                <SelectItem value="15-25">₹1.5 Cr - ₹2.5 Cr</SelectItem>
                <SelectItem value="25-35">₹2.5 Cr - ₹3.5 Cr</SelectItem>
                <SelectItem value="35">Above ₹3.5 Cr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Year Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-muted-foreground">Year</label>
            <Select value={filters.year} onValueChange={(value) => onFilterChange("year", value)}>
              <SelectTrigger className="bg-muted/50 border-border">
                <SelectValue placeholder="All Years" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="All">All Years</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};
