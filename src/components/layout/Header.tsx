import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CartIcon from "../cart/CartIcon";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#120f11] shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-2xl font-bold text-white">
          <img src="/logo.png" alt="" className="h-8" />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link
          to="/"
          className="text-white hover:text-yellow-500 transition-colors font-medium"
        >
          Início
        </Link>
        <Link
          to="/produtos"
          className="text-white hover:text-yellow-500 transition-colors font-medium"
        >
          Produtos
        </Link>
        <Link
          to="/servicos"
          className="text-white hover:text-yellow-500 transition-colors font-medium"
        >
          Serviços
        </Link>
        <Link
          to="/location"
          className="text-white hover:text-yellow-500 transition-colors font-medium"
        >
          Nossas Lojas
        </Link>
        <Link
          to="/delivery"
          className="text-white hover:text-yellow-500 transition-colors font-medium"
        >
          Entrega
        </Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link 
          to="/cart" 
          className="flex items-center justify-center text-yellow-500 hover:text-yellow-400 transition-colors"
          aria-label="Carrinho de compras"
        > 
          <CartIcon />
        </Link>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          className="md:hidden p-2 text-white hover:text-yellow-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#111] shadow-lg z-50 md:hidden">
          <div className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className="text-white hover:text-yellow-500 transition-colors py-2 font-medium"
            >
              Início
            </Link>
            <Link
              to="/produtos"
              className="text-white hover:text-yellow-500 transition-colors py-2 font-medium"
            >
              Produtos
            </Link>
            <Link
              to="/servicos"
              className="text-white hover:text-yellow-500 transition-colors py-2 font-medium"
            >
              Serviços
            </Link>
            <Link
              to="/location"
              className="text-white hover:text-yellow-500 transition-colors py-2 font-medium"
            >
              Nossas Lojas
            </Link>
            <Link
              to="/delivery"
              className="text-white hover:text-yellow-500 transition-colors py-2 font-medium"
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