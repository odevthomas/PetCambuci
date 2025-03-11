import {
  AlertCircle,
  CheckCircle2,
  Truck,
  Calendar,
  Clock,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface DeliveryRate {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

interface ShippingOptionsProps {
  selectedRate: string | null;
  rates: DeliveryRate[];
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
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          Por favor, selecione uma opção de entrega para continuar.
        </AlertDescription>
      </Alert>
    );
  }

  // Calcular data estimada de entrega
  const getEstimatedDate = (days: string) => {
    if (days === "Hoje") return "Hoje";

    const today = new Date();
    const daysRange = days.split("-");

    if (daysRange.length === 2) {
      const minDays = parseInt(daysRange[0]);
      const maxDays = parseInt(daysRange[1]);

      const minDate = new Date(today);
      minDate.setDate(today.getDate() + minDays);

      const maxDate = new Date(today);
      maxDate.setDate(today.getDate() + maxDays);

      const formatDate = (date: Date) => {
        return date.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
        });
      };

      return `${formatDate(minDate)} - ${formatDate(maxDate)}`;
    }

    return "Em breve";
  };

  return (
    <div className="mt-4">
      <Alert className="bg-yellow-50 border-yellow-300">
        <div className="flex items-start">
          <CheckCircle2 className="h-5 w-5 text-yellow-600 mt-0.5 mr-2" />
          <div>
            <AlertTitle className="text-black font-bold">
              Resumo da Entrega
            </AlertTitle>
            <AlertDescription className="text-yellow-800">
              <div className="mt-2 space-y-1">
                <div className="flex justify-between">
                  <span>Método:</span>
                  <span className="font-medium">{selectedShipping.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Prazo:</span>
                  <span className="font-medium">
                    {selectedShipping.estimatedDays} dias úteis
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Previsão:</span>
                  <span className="font-medium">
                    {getEstimatedDate(selectedShipping.estimatedDays)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Valor:</span>
                  <span className="font-medium">
                    R${selectedShipping.price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-yellow-300 flex items-center">
                <Truck className="h-4 w-4 text-yellow-600 mr-2" />
                <span className="text-sm">
                  Rastreamento disponível após o envio
                </span>
              </div>
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </div>
  );
};

export default ShippingOptions;
