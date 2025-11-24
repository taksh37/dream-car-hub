export interface Car {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  bodyType: "Sedan" | "SUV" | "Hatchback" | "Coupe" | "Convertible";
  fuelType: "Petrol" | "Diesel" | "Electric" | "Hybrid";
  year: number;
  mileage: string;
  transmission: "Manual" | "Automatic";
  seating: number;
  engineCapacity: string;
  power: string;
  torque: string;
  topSpeed: string;
  acceleration: string;
  features: string[];
  colors: string[];
  description: string;
  featured?: boolean;
}

import { luxuryCars } from "./luxury-cars";
import { midLuxuryCars } from "./mid-luxury-cars";
import { semiLuxuryCars } from "./semi-luxury-cars";
import { indianCars } from "./indian-cars";

export const cars: Car[] = [
  ...luxuryCars,
  ...midLuxuryCars,
  ...semiLuxuryCars,
  ...indianCars
];

export const brands = ["All", ...Array.from(new Set(cars.map(car => car.brand)))];
export const bodyTypes = ["All", ...Array.from(new Set(cars.map(car => car.bodyType)))];
export const fuelTypes = ["All", ...Array.from(new Set(cars.map(car => car.fuelType)))];
