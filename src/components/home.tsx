import { Link } from "react-router-dom";
import { MapPin, Truck, Scissors, Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import WhatsAppButton from "./layout/WhatsAppButton";
import PromoBanner from "./home/PromoBanner";

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#f6a615] text-black relative overflow-hidden h-[100vh] flex items-center">
  <div className="absolute inset-0">
    <img
      src="/banner(3).png"
      alt="Fundo de animais"
      className="w-full h-full object-cover"
    />
  </div>
  <div className="container mx-auto px-6 text-center relative z-10">
    <h1 className="text-4xl md:text-5xl mt-10 text-gray-100 font-bold mb-4">
      Bem-vindo ao PetShop
    </h1>
    <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
      Seu destino completo para todos os produtos e serviços para seu
      animal de estimação
    </p>
    <Button size="lg" asChild>
      <Link to="/produtos">Comprar Agora</Link>
    </Button>
  </div>
</section>

        {/* Categorias em Destaque */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-8">
              Categorias em Destaque
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-[#f6a615]rounded-lg p-4 text-center hover:bg-[#f6a615] transition-colors">
                <img
                  src="/Card(1).webp"
                  alt="Ração para Cães"
                  className="w-full h-70 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium">Ração para Cães</h3>
              </div>

              <div className="bg-[#f6a615]rounded-lg p-4 text-center hover:bg-[#f6a615] transition-colors">
                <img
                  src="/Card(2).webp"
                  alt="Ração para Gatos"
                  className="w-full h-70 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium">Ração para Gatos</h3>
              </div>

              <div className="bg-[#f6a615]rounded-lg p-4 text-center hover:bg-[#f6a615] transition-colors">
                <img
                  src="/Card(3).webp"
                  alt="Brinquedos"
                  className="w-full h-70 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium">Brinquedos</h3>
              </div>

              <div className="bg-[#f6a615]rounded-lg p-4 text-center hover:bg-[#f6a615] transition-colors">
                <img
                  src="/Card(4).webp"
                  alt="Acessórios"
                  className="w-full h-70 object-cover rounded-lg mb-3"
                />
                <h3 className="font-medium">Acessórios</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              Nossos Serviços
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Banho e Tosa */}
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="bg-[#f6a615] p-3 rounded-full mb-4">
                  <Scissors className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Banho e Tosa</h3>
                <p className="text-gray-600 mb-4">
                  Serviços profissionais de banho e tosa para seu pet ficar
                  limpo e estiloso
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link to="/servicos">Agendar Serviço</Link>
                </Button>
              </div>

              {/* Localização */}
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="bg-[#f6a615] p-3 rounded-full mb-4">
                  <MapPin className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Nossas Lojas</h3>
                <p className="text-gray-600 mb-4">
                  Encontre a loja PetShop mais próxima com nosso mapa interativo
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link to="/location">Encontrar Loja</Link>
                </Button>
              </div>

              {/* Entrega */}
              <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center">
                <div className="bg-[#f6a615] p-3 rounded-full mb-4">
                  <Truck className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Calculadora de Entrega
                </h3>
                <p className="text-gray-600 mb-4">
                  Calcule o valor do frete com base na sua localização
                </p>
                <Button variant="outline" className="mt-auto" asChild>
                  <Link to="/delivery">Calcular Frete</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Planos de Assinatura */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-4">
              Planos de Assinatura
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Receba produtos para seu pet mensalmente com nossos planos de
              assinatura e economize
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Plano Básico */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 bg-[#f6a615]border-b">
                  <h3 className="text-xl font-semibold text-center">
                    Plano Básico
                  </h3>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">R$89,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Ração premium (2kg)</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>2 brinquedos por mês</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Entrega gratuita</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Assinar Agora</Button>
                </div>
              </div>

              {/* Plano Premium */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border-2 border-[#f6a615] transform scale-105">
                <div className="p-1 bg-[#f6a615] text-black text-center text-sm font-medium">
                  Mais Popular
                </div>
                <div className="p-6 bg-[#f6a615]border-b">
                  <h3 className="text-xl font-semibold text-center">
                    Plano Premium
                  </h3>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">R$149,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Ração super premium (4kg)</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>4 brinquedos por mês</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>1 acessório exclusivo</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Entrega gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>10% de desconto em serviços</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Assinar Agora</Button>
                </div>
              </div>

              {/* Plano Família */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6 bg-[#f6a615]border-b">
                  <h3 className="text-xl font-semibold text-center">
                    Plano Família
                  </h3>
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">R$229,90</span>
                    <span className="text-gray-600">/mês</span>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Ração super premium (8kg)</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>6 brinquedos por mês</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>2 acessórios exclusivos</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Entrega gratuita</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>20% de desconto em serviços</span>
                    </li>
                    <li className="flex items-center">
                      <Heart className="h-5 w-5 text-[#f6a615] mr-2" />
                      <span>Consulta veterinária mensal</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Assinar Agora</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">
              O Que Nossos Clientes Dizem
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Ana Silva</h4>
                    <p className="text-gray-600 text-sm">Dona do Felix</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Meu gato adora a ração que compro no PetShop. O serviço de
                  entrega é sempre pontual e os produtos são de excelente
                  qualidade!"
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Thor"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Carlos Oliveira</h4>
                    <p className="text-gray-600 text-sm">Dono do Thor</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "O banho e tosa do PetShop é simplesmente o melhor! Meu
                  cachorro sempre volta cheiroso e feliz. Recomendo a todos os
                  donos de pets."
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Luna"
                    alt="Cliente"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-medium">Mariana Santos</h4>
                    <p className="text-gray-600 text-sm">Dona da Luna</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "Assino o plano premium há 6 meses e minha cachorrinha adora!
                  Os brinquedos são de ótima qualidade e a ração é excelente.
                  Vale cada centavo!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Banner de Promoção */}
        <section className="py-12 bg-black text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Promoção Especial</h2>
            <p className="text-xl mb-6">
              Use o cupom{" "}
              <span className="font-bold bg-[#f6a615] text-black px-2 py-1 rounded">
                PETLOVE10
              </span>{" "}
              e ganhe 10% de desconto na primeira compra!
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/produtos">Aproveitar Agora</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <PromoBanner />
    </div>
  );
}

export default Home;
