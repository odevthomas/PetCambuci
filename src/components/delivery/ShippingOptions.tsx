import {
  AlertCircle,
  CheckCircle2,
  Truck,
  Calendar,
  Clock,
  Package,
  MapPin,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

interface DeliveryRate {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

interface ShippingOptionsProps {
  selectedRate?: string | null;
  rates?: DeliveryRate[];
}

const ShippingOptions = ({
  selectedRate = "standard",
  rates = [
    {
      id: "standard",
      name: "Entrega Padrão",
      price: 15.99,
      estimatedDays: "3-5",
    },
    {
      id: "express",
      name: "Entrega Expressa",
      price: 29.99,
      estimatedDays: "1-2",
    },
    {
      id: "overnight",
      name: "Entrega no Mesmo Dia",
      price: 49.99,
      estimatedDays: "Hoje",
    },
  ],
}: ShippingOptionsProps) => {
  const selectedShipping = rates.find((rate) => rate.id === selectedRate);

  if (!selectedShipping) {
    return (
      <Alert variant="destructive" className="mt-4">
        <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
        <div>
          <AlertTitle className="font-medium">Erro na Seleção</AlertTitle>
          <AlertDescription>
            Por favor, selecione uma opção de entrega para continuar.
          </AlertDescription>
        </div>
      </Alert>
    );
  }

  const getEstimatedDate = (days: string) => {
    if (days === "Hoje") return "Hoje";

    const today = new Date();
    const daysRange = days.split("-");

    if (daysRange.length === 2) {
      const [minDays, maxDays] = daysRange.map(Number);
      
      const formatDate = (date: Date) => date.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });

      return `${formatDate(new Date(today.setDate(today.getDate() + minDays)))} - ${formatDate(new Date(today.setDate(today.getDate() + maxDays)))}`;
    }

    return "Em breve";
  };

  const statusClasses: Record<string, string> = {
    standard: "bg-blue-100 text-blue-800 border-blue-200",
    express: "bg-green-100 text-green-800 border-green-200",
    overnight: "bg-purple-100 text-purple-800 border-purple-200",
  };

  const deliveryMessages: Record<string, string> = {
    standard: "Opção econômica para envios sem urgência",
    express: "Entrega rápida para itens urgentes",
    overnight: "Receba seu pedido ainda hoje!",
  };

  const deliveryIcons: Record<string, JSX.Element> = {
    standard: <Truck className="h-5 w-5" />,
    express: <Clock className="h-5 w-5" />,
    overnight: <Package className="h-5 w-5" />,
  };

  return (
    <>
      <Header />
      <div className="w-full">
        <div className="rounded-lg border border-yellow-200 overflow-hidden">
          <div className="bg-yellow-50 px-4 py-3 border-b border-yellow-200 flex items-center">
            <CheckCircle2 className="h-5 w-5 text-yellow-600 mr-2.5 flex-shrink-0" />
            <h3 className="font-bold text-gray-900">Resumo da Entrega</h3>
          </div>
          
          <div className="p-4 bg-white">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div className="flex items-center mb-2 sm:mb-0">
                <div className="p-2 rounded-full bg-yellow-100 mr-3 flex-shrink-0">
                  {deliveryIcons[selectedShipping.id]}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedShipping.name}</h4>
                  <p className="text-sm text-gray-500">{deliveryMessages[selectedShipping.id]}</p>
                </div>
              </div>
              <Badge className={`mt-1 sm:mt-0 ${statusClasses[selectedShipping.id]}`}>
                {selectedShipping.estimatedDays === "Hoje" ? "Entrega Hoje" : "Entrega Padrão"}
              </Badge>
            </div>
            
            <Separator className="my-3" />
            
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              <div className="flex justify-between sm:flex-col">
                <dt className="text-gray-500">Método:</dt>
                <dd className="font-medium text-gray-900">{selectedShipping.name}</dd>
              </div>
              <div className="flex justify-between sm:flex-col">
                <dt className="text-gray-500">Prazo:</dt>
                <dd className="font-medium text-gray-900">
                  {selectedShipping.estimatedDays === "Hoje" ? "Hoje mesmo" : `${selectedShipping.estimatedDays} dias úteis`}
                </dd>
              </div>
              <div className="flex justify-between sm:flex-col">
                <dt className="text-gray-500">Previsão:</dt>
                <dd className="font-medium text-gray-900 flex items-center">
                  <Calendar className="h-3.5 w-3.5 mr-1 text-yellow-600" />
                  {getEstimatedDate(selectedShipping.estimatedDays)}
                </dd>
              </div>
              <div className="flex justify-between sm:flex-col">
                <dt className="text-gray-500">Valor:</dt>
                <dd className="font-medium text-gray-900">R$ {selectedShipping.price.toFixed(2)}</dd>
              </div>
            </dl>
            <Separator className="my-3" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShippingOptions;
