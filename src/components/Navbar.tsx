import { Search, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import heritageVaultLogo from "@/assets/heritage-vault-logo.png";

interface NavbarProps {
  onSearchChange: (value: string) => void;
  favoritesCount: number;
}

export const Navbar = ({ onSearchChange, favoritesCount }: NavbarProps) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img 
                src={heritageVaultLogo} 
                alt="The Heritage Vault Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-chrome">THE HERITAGE VAULT</h1>
              <p className="text-xs text-muted-foreground">Luxury Automotive Collection</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search cars..."
                value={searchValue}
                onChange={handleSearch}
                className="pl-10 bg-muted/50 border-border focus:border-primary transition-smooth"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative hover:bg-muted">
              <Heart className="w-5 h-5" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full text-xs flex items-center justify-center text-white font-bold">
                  {favoritesCount}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden hover:bg-muted">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
