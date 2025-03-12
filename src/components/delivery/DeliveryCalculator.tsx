import { useState } from "react";
import { Calculator, Truck, Package, Info } from "lucide-react";
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    
    // Simulating API call with delay
    setTimeout(() => {
      setCalculatedRates(mockRates);
      setSelectedRate("standard"); // Default to standard shipping
      setIsLoading(false);
    }, 800);
  };

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format zipcode as user types (00000-000)
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 5) {
      value = value.substring(0, 5) + "-" + value.substring(5, 8);
    }
    setZipCode(value.slice(0, 9));
  };

  return (
    
    <div className="w-full max-w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <Truck className="h-7 w-7 text-yellow-600 mr-3 flex-shrink-0" />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Calculadora de Frete
                  </h2>
                </div>

                <div className="mb-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-start">
                    <Package className="h-5 w-5 text-yellow-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-black">Entrega para Todo Brasil</h3>
                      <p className="text-sm text-yellow-600 mt-1">
                        Calcule o valor do frete para qualquer região do país. Entregamos
                        produtos para pets em todo o território nacional.
                      </p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleCalculate} className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center">
                      <Label htmlFor="zipCode" className="text-base font-medium">CEP de Entrega</Label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Info className="h-4 w-4 text-gray-500" />
                              <span className="sr-only">Ajuda com CEP</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-[200px]">
                              Não sabe seu CEP? Consulte no site dos Correios.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <div className="mt-1.5">
                      <Input
                        id="zipCode"
                        type="text"
                        placeholder="Digite seu CEP"
                        value={zipCode}
                        onChange={handleZipCodeChange}
                        className="text-base"
                        required
                        maxLength={9}
                      />
                      <p className="text-xs text-gray-500 mt-1.5">Formato: 00000-000</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="packageType" className="text-base font-medium">Tipo de Pacote</Label>
                      <Select value={packageType} onValueChange={setPackageType}>
                        <SelectTrigger className="mt-1.5 text-base">
                          <SelectValue placeholder="Selecione o tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Pequeno (até 1kg)</SelectItem>
                          <SelectItem value="medium">Médio (1kg - 5kg)</SelectItem>
                          <SelectItem value="large">Grande (5kg - 10kg)</SelectItem>
                          <SelectItem value="extra">Extra Grande (acima de 10kg)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="weight" className="text-base font-medium">Peso do Pacote (kg)</Label>
                      <Input
                        id="weight"
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="mt-1.5 text-base"
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-medium text-base"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Calculando...
                      </>
                    ) : (
                      <>
                        <Calculator className="h-5 w-5 mr-2" />
                        Calcular Frete
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md h-full overflow-hidden">
              <div className="p-6 md:p-8 h-full">
                {calculatedRates ? (
                  <>
                    <div className="flex items-center mb-6">
                      <Truck className="h-7 w-7 text-yellow-600 mr-3 flex-shrink-0" />
                      <h2 className="text-2xl font-bold text-gray-800">
                        Opções de Entrega
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <p className="text-gray-600">
                        Selecione a opção de frete mais adequada para sua necessidade:
                      </p>

                      <RadioGroup
                        value={selectedRate || ""}
                        onValueChange={setSelectedRate}
                        className="space-y-4 mt-4"
                      >
                        {calculatedRates.map((rate) => (
                          <div
                            key={rate.id}
                            className={`flex items-center border rounded-lg p-4 transition-all ${
                              selectedRate === rate.id 
                                ? "border-yellow-400 bg-yellow-50" 
                                : "border-gray-200 hover:border-yellow-200 hover:bg-yellow-50/30"
                            }`}
                          >
                            <RadioGroupItem 
                              value={rate.id} 
                              id={rate.id} 
                              className="text-yellow-500"
                            />
                            <Label htmlFor={rate.id} className="flex-grow ml-3 cursor-pointer">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="font-medium text-gray-900">{rate.name}</p>
                                  <p className="text-sm text-gray-500">
                                    {rate.estimatedDays === "Hoje" 
                                      ? "Entrega hoje" 
                                      : `${rate.estimatedDays} dias úteis`}
                                  </p>
                                </div>
                                <p className="font-bold text-lg text-gray-900">
                                  R$ {rate.price.toFixed(2)}
                                </p>
                              </div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      <div className="pt-6 mt-4">
                        <ShippingOptions
                          selectedRate={selectedRate}
                          rates={calculatedRates}
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center py-12">
                    <Package className="h-16 w-16 text-yellow-400 mb-6" />
                    <h3 className="text-xl font-medium text-gray-800 mb-3">
                      Opções de Entrega
                    </h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Calcule o frete informando seu CEP e detalhes do pacote para 
                      visualizar as opções de entrega disponíveis para a sua região.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <div className="mt-10 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Informações de Entrega
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Prazos de Entrega</h4>
                <p className="text-sm text-gray-600">
                  Os prazos são estimados e contados em dias úteis a partir da confirmação do pagamento.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Rastreamento</h4>
                <p className="text-sm text-gray-600">
                  Todas as entregas possuem código de rastreamento que é enviado por email.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Política de Entrega</h4>
                <p className="text-sm text-gray-600">
                  Em caso de ausência no endereço, a transportadora fará até 3 tentativas de entrega.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryCalculator;