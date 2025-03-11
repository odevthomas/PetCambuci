import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import StoreDetails from "./StoreDetails";

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  distance: number;
  image: string;
}

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  // Mock data for stores
  const stores: Store[] = [
    {
      id: 1,
      name: "PetShop Centro",
      address: "Av. Paulista, 1234",
      city: "São Paulo",
      state: "SP",
      zip: "01310-100",
      phone: "(11) 3555-1234",
      hours: "09:00 - 21:00",
      distance: 0.8,
      image:
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80",
    },
    {
      id: 2,
      name: "PetShop Zona Norte",
      address: "Rua dos Animais, 456",
      city: "São Paulo",
      state: "SP",
      zip: "02460-070",
      phone: "(11) 3555-5678",
      hours: "08:00 - 20:00",
      distance: 2.3,
      image:
        "https://images.unsplash.com/photo-1583337426008-2fef51aa871e?w=400&q=80",
    },
    {
      id: 3,
      name: "PetShop Zona Sul",
      address: "Av. Santo Amaro, 789",
      city: "São Paulo",
      state: "SP",
      zip: "04505-002",
      phone: "(11) 3555-9012",
      hours: "10:00 - 19:00",
      distance: 4.1,
      image:
        "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&q=80",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter stores based on the search query
    console.log("Buscando por:", searchQuery);
  };

  const handleStoreSelect = (store: Store) => {
    setSelectedStore(store);
  };

  return (
    <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Encontre uma Loja Próxima a Você
        </h2>
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Digite seu CEP ou cidade"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Buscar</Button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Store list */}
        <div className="w-full md:w-1/3 border-r border-gray-200 max-h-[400px] overflow-y-auto">
          {stores.map((store) => (
            <div
              key={store.id}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${selectedStore?.id === store.id ? "bg-blue-50" : ""}`}
              onClick={() => handleStoreSelect(store)}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-900">{store.name}</h3>
                  <p className="text-sm text-gray-600">
                    {store.address}, {store.city}
                  </p>
                </div>
                <div className="flex items-center text-sm text-yellow-600">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{store.distance} km</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="w-full md:w-2/3 h-[300px] md:h-auto bg-gray-100 flex items-center justify-center relative">
          {/* Mapa de fundo */}
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?w=1200&q=80"
            alt="Mapa"
            className="w-full h-full object-cover absolute inset-0 opacity-50"
          />

          {selectedStore ? (
            <div className="p-6 relative z-10 bg-white bg-opacity-90 rounded-lg shadow-lg">
              <StoreDetails store={selectedStore} />
            </div>
          ) : (
            <div className="text-center p-6 relative z-10 bg-white bg-opacity-90 rounded-lg">
              <MapPin className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <p className="text-gray-700 font-medium">
                Selecione uma loja para ver no mapa
              </p>
              <p className="text-sm text-gray-500 mt-2">
                O mapa interativo será exibido aqui
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreLocator;
