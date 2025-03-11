import { useState } from "react";
import { Calculator, Truck, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ShippingOptions from "./ShippingOptions";

interface DeliveryRate {
  id: string;
  name: string;
  price: number;
  estimatedDays: string;
}

const DeliveryCalculator = () => {
  const [zipCode, setZipCode] = useState("");
  const [weight, setWeight] = useState("1");
  const [packageType, setPackageType] = useState("small");
  const [calculatedRates, setCalculatedRates] = useState<DeliveryRate[] | null>(
    null,
  );
  const [selectedRate, setSelectedRate] = useState<string | null>(null);

  // Mock delivery rates
  const mockRates: DeliveryRate[] = [
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
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API to calculate shipping rates
    setCalculatedRates(mockRates);
    setSelectedRate("standard"); // Default to standard shipping
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 w-full max-w-md">
      <div className="flex items-center mb-6">
        <Truck className="h-6 w-6 text-yellow-600 mr-3" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Calculadora de Frete
        </h2>
      </div>

      <div className="mb-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
        <div className="flex items-start">
          <Package className="h-5 w-5 text-yellow-600 mt-1 mr-3" />
          <div>
            <h3 className="font-medium text-black">Entrega para Todo Brasil</h3>
            <p className="text-sm text-yellow-600 mt-1">
              Calcule o valor do frete para qualquer região do país. Entregamos
              produtos para pets em todo o território nacional.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleCalculate}>
        <div className="space-y-4">
          <div>
            <Label htmlFor="zipCode">CEP de Entrega</Label>
            <Input
              id="zipCode"
              type="text"
              placeholder="Digite seu CEP"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="mt-1"
              required
            />
            <p className="text-xs text-gray-500 mt-1">Formato: 00000-000</p>
          </div>

          <div>
            <Label htmlFor="packageType">Tipo de Pacote</Label>
            <Select value={packageType} onValueChange={setPackageType}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Selecione o tipo de pacote" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Pequeno (até 1kg)</SelectItem>
                <SelectItem value="medium">Médio (1kg - 5kg)</SelectItem>
                <SelectItem value="large">Grande (5kg - 10kg)</SelectItem>
                <SelectItem value="extra">
                  Extra Grande (acima de 10kg)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="weight">Peso do Pacote (kg)</Label>
            <Input
              id="weight"
              type="number"
              min="0.1"
              step="0.1"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="mt-1"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-black"
          >
            <Calculator className="h-4 w-4 mr-2" />
            Calcular Frete
          </Button>
        </div>
      </form>

      {calculatedRates && (
        <div className="mt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Opções de Entrega
          </h3>
          <RadioGroup
            value={selectedRate || ""}
            onValueChange={setSelectedRate}
          >
            <div className="space-y-3">
              {calculatedRates.map((rate) => (
                <div
                  key={rate.id}
                  className="flex items-center space-x-2 border rounded-md p-3 hover:bg-gray-50"
                >
                  <RadioGroupItem value={rate.id} id={rate.id} />
                  <Label htmlFor={rate.id} className="flex-grow cursor-pointer">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">{rate.name}</p>
                        <p className="text-sm text-gray-500">
                          {rate.estimatedDays} dias úteis
                        </p>
                      </div>
                      <p className="font-medium">R${rate.price.toFixed(2)}</p>
                    </div>
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>

          <ShippingOptions
            selectedRate={selectedRate}
            rates={calculatedRates}
          />
        </div>
      )}
    </div>
  );
};

export default DeliveryCalculator;
