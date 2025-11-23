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

export const cars: Car[] = [
  {
    id: "1",
    name: "Tesla Model S Plaid",
    brand: "Tesla",
    price: 12999000,
    image: "/cars/tesla-model-s.jpg",
    bodyType: "Sedan",
    fuelType: "Electric",
    year: 2024,
    mileage: "637 km",
    transmission: "Automatic",
    seating: 5,
    engineCapacity: "N/A",
    power: "1020 hp",
    torque: "1420 Nm",
    topSpeed: "322 km/h",
    acceleration: "0-100 km/h in 1.99s",
    features: [
      "Autopilot",
      "17-inch Cinematic Display",
      "Tri-Motor AWD",
      "Ludicrous Mode",
      "Premium Sound System",
      "Glass Roof",
      "Wireless Charging",
      "Advanced Safety Features"
    ],
    colors: ["Pearl White", "Solid Black", "Deep Blue Metallic", "Red Multi-Coat"],
    description: "The fastest accelerating production car in the world. With a top speed of 322 km/h and instant torque, the Model S Plaid redefines performance.",
    featured: true
  },
  {
    id: "2",
    name: "Porsche 911 Turbo S",
    brand: "Porsche",
    price: 27000000,
    image: "/cars/porsche-911.jpg",
    bodyType: "Coupe",
    fuelType: "Petrol",
    year: 2024,
    mileage: "10 km/l",
    transmission: "Automatic",
    seating: 4,
    engineCapacity: "3745 cc",
    power: "640 hp",
    torque: "800 Nm",
    topSpeed: "330 km/h",
    acceleration: "0-100 km/h in 2.7s",
    features: [
      "Active Suspension",
      "Sport Chrono Package",
      "PASM",
      "Ceramic Brakes",
      "Burmester Sound",
      "Sport Exhaust",
      "Adaptive Cruise Control",
      "Night Vision"
    ],
    colors: ["GT Silver", "Racing Yellow", "Guards Red", "Gentian Blue"],
    description: "The ultimate sports car. Twin-turbocharged flat-six engine delivering breathtaking performance with legendary Porsche handling.",
    featured: true
  },
  {
    id: "3",
    name: "Mercedes-AMG G63",
    brand: "Mercedes-Benz",
    price: 22500000,
    image: "/cars/mercedes-g63.jpg",
    bodyType: "SUV",
    fuelType: "Petrol",
    year: 2024,
    mileage: "7 km/l",
    transmission: "Automatic",
    seating: 5,
    engineCapacity: "3982 cc",
    power: "585 hp",
    torque: "850 Nm",
    topSpeed: "240 km/h",
    acceleration: "0-100 km/h in 4.5s",
    features: [
      "AMG Performance 4MATIC",
      "Differential Locks",
      "Burmester 3D Sound",
      "Nappa Leather",
      "AMG Track Pace",
      "360° Camera",
      "Off-road Package",
      "Ambient Lighting"
    ],
    colors: ["Obsidian Black", "Polar White", "designo Platinum Magno", "AMG Night Black"],
    description: "Icon meets performance. The legendary G-Wagon with AMG's monstrous V8 twin-turbo engine combines luxury, capability, and pure power.",
    featured: true
  },
  {
    id: "4",
    name: "BMW M3 Competition",
    brand: "BMW",
    price: 14500000,
    image: "/cars/bmw-m3.jpg",
    bodyType: "Sedan",
    fuelType: "Petrol",
    year: 2024,
    mileage: "9 km/l",
    transmission: "Automatic",
    seating: 5,
    engineCapacity: "2993 cc",
    power: "510 hp",
    torque: "650 Nm",
    topSpeed: "290 km/h",
    acceleration: "0-100 km/h in 3.9s",
    features: [
      "M xDrive",
      "Carbon Fiber Roof",
      "M Sport Exhaust",
      "Harman Kardon Sound",
      "M Drive Professional",
      "Adaptive M Suspension",
      "M Carbon Seats",
      "Head-Up Display"
    ],
    colors: ["Brooklyn Grey", "Isle of Man Green", "Sao Paulo Yellow", "Toronto Red"],
    description: "Pure driving machine. Twin-turbo inline-six with M Division's finest engineering delivers an unmatched driving experience.",
    featured: false
  },
  {
    id: "5",
    name: "Audi RS e-tron GT",
    brand: "Audi",
    price: 17500000,
    image: "/cars/audi-etron.jpg",
    bodyType: "Sedan",
    fuelType: "Electric",
    year: 2024,
    mileage: "472 km",
    transmission: "Automatic",
    seating: 5,
    engineCapacity: "N/A",
    power: "646 hp",
    torque: "830 Nm",
    topSpeed: "250 km/h",
    acceleration: "0-100 km/h in 3.3s",
    features: [
      "Quattro AWD",
      "Air Suspension",
      "Matrix LED Headlights",
      "Bang & Olufsen 3D Sound",
      "Virtual Cockpit Plus",
      "150kW Fast Charging",
      "Carbon Fiber Interior",
      "Laser Scanner"
    ],
    colors: ["Tactical Green", "Daytona Grey", "Suzuka Grey", "Kemora Grey"],
    description: "Electric performance perfected. Combining Audi's luxury craftsmanship with thrilling electric performance and stunning design.",
    featured: false
  },
  {
    id: "6",
    name: "Lamborghini Huracán EVO",
    brand: "Lamborghini",
    price: 35000000,
    image: "/cars/lamborghini-huracan.jpg",
    bodyType: "Coupe",
    fuelType: "Petrol",
    year: 2024,
    mileage: "7 km/l",
    transmission: "Automatic",
    seating: 2,
    engineCapacity: "5204 cc",
    power: "640 hp",
    torque: "600 Nm",
    topSpeed: "325 km/h",
    acceleration: "0-100 km/h in 2.9s",
    features: [
      "LDVI System",
      "Active Aerodynamics",
      "Lamborghini Dinamica",
      "Carbon Ceramic Brakes",
      "Sensonum Sound",
      "Alcantara Interior",
      "Performance Traction Control",
      "Telemetry System"
    ],
    colors: ["Arancio Borealis", "Blu Cepheus", "Verde Mantis", "Bianco Monocerus"],
    description: "Italian supercar excellence. Naturally aspirated V10 screaming to 8,500 RPM with cutting-edge aerodynamics and exotic styling.",
    featured: true
  },
  {
    id: "7",
    name: "Range Rover Autobiography",
    brand: "Land Rover",
    price: 24000000,
    image: "/cars/range-rover.jpg",
    bodyType: "SUV",
    fuelType: "Hybrid",
    year: 2024,
    mileage: "12 km/l",
    transmission: "Automatic",
    seating: 5,
    engineCapacity: "2997 cc",
    power: "400 hp",
    torque: "550 Nm",
    topSpeed: "225 km/h",
    acceleration: "0-100 km/h in 5.5s",
    features: [
      "Air Suspension",
      "Terrain Response 2",
      "Meridian Signature Sound",
      "Configurable Ambient Lighting",
      "Massage Seats",
      "Rear Executive Seating",
      "ClearSight Camera",
      "Adaptive Cruise"
    ],
    colors: ["Santorini Black", "Fuji White", "Byron Blue", "Carpathian Grey"],
    description: "Ultimate luxury SUV. Combining unparalleled off-road capability with opulent interior craftsmanship and refined road manners.",
    featured: false
  },
  {
    id: "8",
    name: "Ferrari Roma",
    brand: "Ferrari",
    price: 38000000,
    image: "/cars/ferrari-roma.jpg",
    bodyType: "Coupe",
    fuelType: "Petrol",
    year: 2024,
    mileage: "8 km/l",
    transmission: "Automatic",
    seating: 4,
    engineCapacity: "3855 cc",
    power: "620 hp",
    torque: "760 Nm",
    topSpeed: "320 km/h",
    acceleration: "0-100 km/h in 3.4s",
    features: [
      "8-Speed DCT",
      "Side Slip Control",
      "Ferrari Dynamic Enhancer",
      "8.4\" Passenger Display",
      "Manettino Drive Mode",
      "Carbon Fiber Racing Seats",
      "Premium Sound System",
      "Electrochromic Roof"
    ],
    colors: ["Rosso Corsa", "Giallo Modena", "Blu Corsa", "Nero Daytona"],
    description: "La Nuova Dolce Vita. Twin-turbo V8 delivering Ferrari performance wrapped in elegant, timeless Italian grand touring design.",
    featured: false
  },
  {
    id: "9",
    name: "Aston Martin DB11",
    brand: "Aston Martin",
    price: 31000000,
    image: "/cars/aston-martin-db11.jpg",
    bodyType: "Coupe",
    fuelType: "Petrol",
    year: 2024,
    mileage: "9 km/l",
    transmission: "Automatic",
    seating: 4,
    engineCapacity: "3982 cc",
    power: "503 hp",
    torque: "675 Nm",
    topSpeed: "301 km/h",
    acceleration: "0-100 km/h in 3.9s",
    features: [
      "Adaptive Damping",
      "Carbon Ceramic Brakes",
      "Bang & Olufsen BeoSonic",
      "Herringbone Carbon Fiber",
      "One:1 Paddle Shifters",
      "360° Camera",
      "Bridge of Weir Leather",
      "Dynamic Stability Control"
    ],
    colors: ["Lightning Silver", "Mariana Blue", "Jet Black", "Magnetic Silver"],
    description: "British elegance meets performance. Twin-turbo V8 wrapped in handcrafted luxury and timeless Aston Martin design language.",
    featured: false
  },
  {
    id: "10",
    name: "Maserati MC20",
    brand: "Maserati",
    price: 32000000,
    image: "/cars/maserati-mc20.jpg",
    bodyType: "Coupe",
    fuelType: "Petrol",
    year: 2024,
    mileage: "8 km/l",
    transmission: "Automatic",
    seating: 2,
    engineCapacity: "3000 cc",
    power: "630 hp",
    torque: "730 Nm",
    topSpeed: "325 km/h",
    acceleration: "0-100 km/h in 2.9s",
    features: [
      "Nettuno V6 Engine",
      "Carbon Fiber Monocoque",
      "Butterfly Doors",
      "Maserati MIA System",
      "Sonus Faber Audio",
      "Carbon Ceramic Brakes",
      "Launch Control",
      "Corsa Mode"
    ],
    colors: ["Bianco Audace", "Blu Infinito", "Giallo Genio", "Nero Essenza"],
    description: "Racing DNA for the road. Innovative Nettuno V6 with F1-derived technology in stunning Italian supercar packaging.",
    featured: false
  }
];

export const brands = ["All", ...Array.from(new Set(cars.map(car => car.brand)))];
export const bodyTypes = ["All", ...Array.from(new Set(cars.map(car => car.bodyType)))];
export const fuelTypes = ["All", ...Array.from(new Set(cars.map(car => car.fuelType)))];
