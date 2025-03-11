import { useState } from "react";
import { Search, Filter, ShoppingCart, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import WhatsAppButton from "../layout/WhatsAppButton";
import { useCart } from "@/context/CartContext";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  category: string;
  petType: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  tags: string[];
  inStock: boolean;
}

const ProdutosPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPetTypes, setSelectedPetTypes] = useState<string[]>([]);

  // Mock products data
  const products: Product[] = [
    {
      id: 1,
      name: "Ração Premium para Cães Adultos",
      category: "Ração",
      petType: "Cachorro",
      price: 129.9,
      oldPrice: 149.9,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80",
      tags: ["Premium", "Adulto"],
      inStock: true,
    },
    {
      id: 2,
      name: "Ração Super Premium para Gatos",
      category: "Ração",
      petType: "Gato",
      price: 99.9,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?w=400&q=80",
      tags: ["Super Premium", "Todas as Idades"],
      inStock: true,
    },
    {
      id: 3,
      name: "Brinquedo Interativo para Cães",
      category: "Brinquedos",
      petType: "Cachorro",
      price: 49.9,
      oldPrice: 59.9,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1546975490-e8b92a360b24?w=400&q=80",
      tags: ["Interativo", "Resistente"],
      inStock: true,
    },
    {
      id: 4,
      name: "Arranhador para Gatos",
      category: "Acessórios",
      petType: "Gato",
      price: 89.9,
      rating: 4.6,
      image:
        "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&q=80",
      tags: ["Casa", "Brinquedo"],
      inStock: true,
    },
    {
      id: 5,
      name: "Coleira Ajustável para Cães",
      category: "Acessórios",
      petType: "Cachorro",
      price: 39.9,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1567612529009-afe25301b6d0?w=400&q=80",
      tags: ["Passeio", "Ajustável"],
      inStock: true,
    },
    {
      id: 6,
      name: "Cama Ortopédica para Cães Idosos",
      category: "Camas",
      petType: "Cachorro",
      price: 199.9,
      oldPrice: 249.9,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=400&q=80",
      tags: ["Ortopédica", "Idosos"],
      inStock: false,
    },
    {
      id: 7,
      name: "Shampoo Hipoalergênico para Pets",
      category: "Higiene",
      petType: "Todos",
      price: 29.9,
      rating: 4.4,
      image:
        "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400&q=80",
      tags: ["Hipoalergênico", "Suave"],
      inStock: true,
    },
    {
      id: 8,
      name: "Transportadora para Gatos",
      category: "Transporte",
      petType: "Gato",
      price: 149.9,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1553688738-a278b9f063e0?w=400&q=80",
      tags: ["Viagem", "Segurança"],
      inStock: true,
    },
  ];

  // Extract unique categories and pet types for filters
  const categories = [...new Set(products.map((p) => p.category))];
  const petTypes = [...new Set(products.map((p) => p.petType))];

  // Filter products based on search and filters
  const filteredProducts = products.filter((product) => {
    // Search filter
    const matchesSearch =
      searchQuery === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    // Category filter
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.category);

    // Pet type filter
    const matchesPetType =
      selectedPetTypes.length === 0 ||
      selectedPetTypes.includes(product.petType);

    // Price range filter
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesPetType && matchesPrice;
  });

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handlePetTypeChange = (petType: string) => {
    setSelectedPetTypes((prev) =>
      prev.includes(petType)
        ? prev.filter((pt) => pt !== petType)
        : [...prev, petType],
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-2">
            Produtos para Pets
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Encontre tudo o que seu pet precisa com a melhor qualidade e preço
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Buscar produtos..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center mb-4">
                  <Filter className="h-5 w-5 text-yellow-700 mr-2" />
                  <h2 className="font-semibold">Filtros</h2>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Faixa de Preço</h3>
                  <Slider
                    defaultValue={[0, 500]}
                    max={500}
                    step={10}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>R${priceRange[0]}</span>
                    <span>R${priceRange[1]}</span>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Categorias</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <Checkbox
                          id={`category-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label
                          htmlFor={`category-${category}`}
                          className="ml-2 text-sm"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pet Type Filter */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Tipo de Pet</h3>
                  <div className="space-y-2">
                    {petTypes.map((petType) => (
                      <div key={petType} className="flex items-center">
                        <Checkbox
                          id={`pet-${petType}`}
                          checked={selectedPetTypes.includes(petType)}
                          onCheckedChange={() => handlePetTypeChange(petType)}
                        />
                        <Label
                          htmlFor={`pet-${petType}`}
                          className="ml-2 text-sm"
                        >
                          {petType}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h3 className="font-medium mb-3">Disponibilidade</h3>
                  <div className="flex items-center">
                    <Checkbox id="in-stock" />
                    <Label htmlFor="in-stock" className="ml-2 text-sm">
                      Apenas em estoque
                    </Label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products grid */}
            <div className="flex-grow">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12 bg-white rounded-lg shadow-sm">
                  <p className="text-gray-500">
                    Nenhum produto encontrado com os filtros selecionados.
                  </p>
                  <Button
                    variant="link"
                    onClick={() => {
                      setSearchQuery("");
                      setPriceRange([0, 500]);
                      setSelectedCategories([]);
                      setSelectedPetTypes([]);
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (!product.inStock) return;

    addToCart(product);
    toast({
      title: "Produto adicionado",
      description: `${product.name} foi adicionado ao carrinho.`,
      action: (
        <ToastAction
          altText="Ver carrinho"
          onClick={() => navigate("/checkout")}
        >
          Ver carrinho
        </ToastAction>
      ),
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
        </button>
        {product.oldPrice && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Esgotado
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex-grow">
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium bg-yellow-100 text-black px-2 py-0.5 rounded">
            {product.category}
          </span>
          <span className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-0.5 rounded ml-2">
            {product.petType}
          </span>
        </div>

        <h3 className="font-medium text-gray-900 mt-2">{product.name}</h3>

        <div className="flex items-center mt-1">
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
          </div>
        </div>

        <div className="mt-2">
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through mr-2">
              R${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="font-bold text-lg text-yellow-700">
            R${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="p-4 pt-0">
        <Button
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
          disabled={!product.inStock}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProdutosPage;
