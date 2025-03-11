import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CartIcon from "../cart/CartIcon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-yellow-400 shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-bold text-black">
          PetShop
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-black hover:text-yellow-700 transition-colors font-medium"
        >
          Início
        </Link>
        <Link
          to="/produtos"
          className="text-black hover:text-yellow-700 transition-colors font-medium"
        >
          Produtos
        </Link>
        <Link
          to="/servicos"
          className="text-black hover:text-yellow-700 transition-colors font-medium"
        >
          Serviços
        </Link>
        <Link
          to="/location"
          className="text-black hover:text-yellow-700 transition-colors font-medium"
        >
          Nossas Lojas
        </Link>
        <Link
          to="/delivery"
          className="text-black hover:text-yellow-700 transition-colors font-medium"
        >
          Entrega
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <CartIcon />

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden p-2 text-black hover:text-yellow-700 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className="text-black hover:text-yellow-700 transition-colors py-2 font-medium"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="text-black hover:text-yellow-700 transition-colors py-2 font-medium"
            >
              Produtos
            </Link>
            <Link
              to="/servicos"
              className="text-black hover:text-yellow-700 transition-colors py-2 font-medium"
            >
              Serviços
            </Link>
            <Link
              to="/location"
              className="text-black hover:text-yellow-700 transition-colors py-2 font-medium"
            >
              Nossas Lojas
            </Link>
            <Link
              to="/delivery"
              className="text-black hover:text-yellow-700 transition-colors py-2 font-medium"
            >
              Entrega
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
