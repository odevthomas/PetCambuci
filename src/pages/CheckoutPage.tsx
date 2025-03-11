import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { CreditCard, Truck, MapPin, Check } from "lucide-react";

const CheckoutPage = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [orderComplete, setOrderComplete] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    cardName: "",
    cardExpiry: "",
    cardCvv: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate order processing
    setTimeout(() => {
      setOrderComplete(true);
      clearCart();
    }, 1500);
  };

  const getShippingCost = () => {
    switch (shippingMethod) {
      case "express":
        return 29.9;
      case "same_day":
        return 49.9;
      default: // standard
        return 15.9;
    }
  };

  const shippingCost = getShippingCost();
  const finalTotal = totalPrice + shippingCost;

  if (orderComplete) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow py-12">
          <div className="max-w-3xl mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-4">Pedido Confirmado!</h1>
              <p className="text-gray-600 mb-6">
                Obrigado por sua compra. Seu pedido foi recebido e está sendo
                processado.
              </p>
              <p className="text-gray-600 mb-8">
                Um e-mail de confirmação foi enviado para {formData.email}
              </p>
              <Button
                className="bg-yellow-400 text-black hover:bg-yellow-500"
                onClick={() => navigate("/")}
              >
                Voltar para a Loja
              </Button>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-2xl font-bold mb-4">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-6">
              Adicione alguns produtos antes de finalizar a compra
            </p>
            <Button
              className="bg-yellow-400 text-black hover:bg-yellow-500"
              onClick={() => navigate("/produtos")}
            >
              Ver Produtos
            </Button>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8 text-center">
            Finalizar Compra
          </h1>

          {/* Checkout Steps */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"}`}
              >
                1
              </div>
              <div
                className={`w-20 h-1 ${currentStep >= 2 ? "bg-yellow-400" : "bg-gray-200"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"}`}
              >
                2
              </div>
              <div
                className={`w-20 h-1 ${currentStep >= 3 ? "bg-yellow-400" : "bg-gray-200"}`}
              ></div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? "bg-yellow-400 text-black" : "bg-gray-200 text-gray-600"}`}
              >
                3
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Checkout Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <MapPin className="mr-2 h-5 w-5 text-yellow-600" />
                      Informações de Entrega
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Endereço</Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="city">Cidade</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="state">Estado</Label>
                          <Input
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">CEP</Label>
                          <Input
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <Button
                        className="bg-yellow-400 text-black hover:bg-yellow-500"
                        onClick={handleNextStep}
                      >
                        Continuar para Entrega
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <Truck className="mr-2 h-5 w-5 text-yellow-600" />
                      Método de Entrega
                    </h2>
                    <RadioGroup
                      value={shippingMethod}
                      onValueChange={setShippingMethod}
                    >
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="standard" id="standard" />
                          <Label
                            htmlFor="standard"
                            className="flex-grow cursor-pointer"
                          >
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">Entrega Padrão</p>
                                <p className="text-sm text-gray-500">
                                  3-5 dias úteis
                                </p>
                              </div>
                              <p className="font-medium">R$15,90</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="express" id="express" />
                          <Label
                            htmlFor="express"
                            className="flex-grow cursor-pointer"
                          >
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">Entrega Expressa</p>
                                <p className="text-sm text-gray-500">
                                  1-2 dias úteis
                                </p>
                              </div>
                              <p className="font-medium">R$29,90</p>
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="same_day" id="same_day" />
                          <Label
                            htmlFor="same_day"
                            className="flex-grow cursor-pointer"
                          >
                            <div className="flex justify-between">
                              <div>
                                <p className="font-medium">
                                  Entrega no Mesmo Dia
                                </p>
                                <p className="text-sm text-gray-500">
                                  Hoje (para pedidos até 12h)
                                </p>
                              </div>
                              <p className="font-medium">R$49,90</p>
                            </div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>
                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
                        onClick={handlePrevStep}
                      >
                        Voltar
                      </Button>
                      <Button
                        className="bg-yellow-400 text-black hover:bg-yellow-500"
                        onClick={handleNextStep}
                      >
                        Continuar para Pagamento
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <CreditCard className="mr-2 h-5 w-5 text-yellow-600" />
                      Método de Pagamento
                    </h2>
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={setPaymentMethod}
                    >
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="credit" id="credit" />
                          <Label htmlFor="credit" className="cursor-pointer">
                            Cartão de Crédito
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="pix" id="pix" />
                          <Label htmlFor="pix" className="cursor-pointer">
                            PIX
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 border p-4 rounded-md hover:bg-gray-50">
                          <RadioGroupItem value="boleto" id="boleto" />
                          <Label htmlFor="boleto" className="cursor-pointer">
                            Boleto Bancário
                          </Label>
                        </div>
                      </div>

                      {paymentMethod === "credit" && (
                        <div className="border p-4 rounded-md">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="md:col-span-2">
                              <Label htmlFor="cardNumber">
                                Número do Cartão
                              </Label>
                              <Input
                                id="cardNumber"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleInputChange}
                                className="mt-1"
                                placeholder="0000 0000 0000 0000"
                                required
                              />
                            </div>
                            <div className="md:col-span-2">
                              <Label htmlFor="cardName">Nome no Cartão</Label>
                              <Input
                                id="cardName"
                                name="cardName"
                                value={formData.cardName}
                                onChange={handleInputChange}
                                className="mt-1"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cardExpiry">
                                Data de Validade
                              </Label>
                              <Input
                                id="cardExpiry"
                                name="cardExpiry"
                                value={formData.cardExpiry}
                                onChange={handleInputChange}
                                className="mt-1"
                                placeholder="MM/AA"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="cardCvv">CVV</Label>
                              <Input
                                id="cardCvv"
                                name="cardCvv"
                                value={formData.cardCvv}
                                onChange={handleInputChange}
                                className="mt-1"
                                placeholder="123"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "pix" && (
                        <div className="border p-4 rounded-md text-center">
                          <p className="mb-4">
                            Ao finalizar o pedido, você receberá um QR Code para
                            pagamento via PIX.
                          </p>
                          <div className="bg-gray-100 p-4 rounded-md inline-block">
                            <div className="w-32 h-32 bg-gray-300 mx-auto mb-2"></div>
                            <p className="text-sm text-gray-500">
                              QR Code de exemplo
                            </p>
                          </div>
                        </div>
                      )}

                      {paymentMethod === "boleto" && (
                        <div className="border p-4 rounded-md">
                          <p>
                            O boleto será gerado após a finalização do pedido e
                            enviado para seu email.
                          </p>
                          <p className="text-sm text-gray-500 mt-2">
                            Prazo de vencimento: 3 dias úteis
                          </p>
                        </div>
                      )}
                    </RadioGroup>

                    <div className="mt-6 flex items-center">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="ml-2 text-sm">
                        Concordo com os{" "}
                        <a href="#" className="text-yellow-600 hover:underline">
                          termos e condições
                        </a>{" "}
                        e{" "}
                        <a href="#" className="text-yellow-600 hover:underline">
                          política de privacidade
                        </a>
                      </Label>
                    </div>

                    <div className="mt-6 flex justify-between">
                      <Button
                        variant="outline"
                        className="border-yellow-400 text-yellow-700 hover:bg-yellow-50"
                        onClick={handlePrevStep}
                      >
                        Voltar
                      </Button>
                      <Button
                        className="bg-yellow-400 text-black hover:bg-yellow-500"
                        onClick={handleSubmitOrder}
                      >
                        Finalizar Pedido
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Resumo do Pedido</h2>
                <div className="space-y-4 mb-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between">
                      <div className="flex">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-md mr-3"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-sm text-gray-500">
                            Qtd: {item.quantity}
                          </p>
                        </div>
                      </div>
                      <p className="font-medium">
                        R${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>R${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Frete</span>
                    <span>R${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t">
                    <span>Total</span>
                    <span>R${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CheckoutPage;
