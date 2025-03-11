import { Clock, MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  image?: string;
}

interface StoreDetailsProps {
  store: Store;
}

const StoreDetails = ({
  store = {
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
}: StoreDetailsProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      {store.image && (
        <div className="mb-4 rounded-lg overflow-hidden">
          <img
            src={store.image}
            alt={store.name}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold text-gray-800 mb-4">{store.name}</h3>

      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-gray-700">{store.address}</p>
            <p className="text-gray-700">
              {store.city}, {store.state} {store.zip}
            </p>
            <p className="text-sm text-yellow-600 mt-1">
              {store.distance} km de distância
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <Phone className="h-5 w-5 text-yellow-600 mr-3 flex-shrink-0" />
          <p className="text-gray-700">{store.phone}</p>
        </div>

        <div className="flex items-start">
          <Clock className="h-5 w-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
          <div>
            <p className="text-gray-700">Horário de Funcionamento</p>
            <p className="text-gray-600">{store.hours}</p>
          </div>
        </div>

        <div className="bg-yellow-50 p-3 rounded-lg">
          <h4 className="font-medium text-black mb-2">Serviços Disponíveis</h4>
          <ul className="space-y-1 text-sm text-yellow-700">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
              Banho e Tosa
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
              Veterinário
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
              Farmácia Pet
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></span>
              Loja Completa
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
          <MapPin className="h-4 w-4 mr-2" />
          Como Chegar
        </Button>
        <Button
          variant="outline"
          className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-50"
        >
          <Phone className="h-4 w-4 mr-2" />
          Ligar para Loja
        </Button>
        <Button
          variant="outline"
          className="w-full border-yellow-400 text-yellow-700 hover:bg-yellow-50"
        >
          <Calendar className="h-4 w-4 mr-2" />
          Agendar Serviço
        </Button>
      </div>
    </div>
  );
};

export default StoreDetails;
