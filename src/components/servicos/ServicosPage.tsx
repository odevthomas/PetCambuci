import { useState } from "react";
import { Scissors, Heart, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import WhatsAppButton from "../layout/WhatsAppButton";

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

const ServicosPage = () => {
  const [selectedTab, setSelectedTab] = useState("banho-tosa");

  const banhoTosaServices: Service[] = [
    {
      id: "banho-pequeno",
      name: "Banho - Cães Pequenos",
      description:
        "Banho completo com shampoo premium e secagem para cães de pequeno porte (até 10kg).",
      price: 49.9,
      duration: "1 hora",
      image:
        "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80",
    },
    {
      id: "banho-medio",
      name: "Banho - Cães Médios",
      description:
        "Banho completo com shampoo premium e secagem para cães de médio porte (10kg a 25kg).",
      price: 69.9,
      duration: "1.5 horas",
      image:
        "https://images.unsplash.com/photo-1581888227599-779811939961?w=400&q=80",
    },
    {
      id: "banho-grande",
      name: "Banho - Cães Grandes",
      description:
        "Banho completo com shampoo premium e secagem para cães de grande porte (acima de 25kg).",
      price: 89.9,
      duration: "2 horas",
      image:
        "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=400&q=80",
    },
    {
      id: "tosa-higienica",
      name: "Tosa Higiênica",
      description:
        "Tosa das áreas íntimas, patas e face para maior conforto e higiene do seu pet.",
      price: 39.9,
      duration: "30 minutos",
      image:
        "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=400&q=80",
    },
    {
      id: "tosa-completa",
      name: "Tosa Completa",
      description:
        "Tosa completa personalizada de acordo com a raça ou preferência do dono.",
      price: 79.9,
      duration: "1.5 horas",
      image:
        "https://images.unsplash.com/photo-1556015048-4d3aa10df74c?w=400&q=80",
    },
    {
      id: "combo-premium",
      name: "Combo Premium",
      description:
        "Banho + tosa completa + hidratação + perfume especial e laço ou gravata.",
      price: 119.9,
      duration: "2.5 horas",
      image:
        "https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?w=400&q=80",
    },
  ];

  const veterinariaServices: Service[] = [
    {
      id: "consulta-rotina",
      name: "Consulta de Rotina",
      description:
        "Avaliação geral da saúde do seu pet com um de nossos veterinários especialistas.",
      price: 120.0,
      duration: "30 minutos",
      image:
        "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&q=80",
    },
    {
      id: "vacinacao",
      name: "Vacinação",
      description:
        "Aplicação de vacinas essenciais para a saúde e bem-estar do seu animal.",
      price: 90.0,
      duration: "15 minutos",
      image:
        "https://images.unsplash.com/photo-1612531822129-ec4e4de9d0c2?w=400&q=80",
    },
    {
      id: "exames-laboratoriais",
      name: "Exames Laboratoriais",
      description:
        "Coleta e análise de sangue, urina e outros exames para diagnóstico preciso.",
      price: 150.0,
      duration: "Varia conforme exame",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&q=80",
    },
    {
      id: "castracao",
      name: "Castração",
      description:
        "Procedimento cirúrgico realizado por equipe especializada com toda segurança.",
      price: 350.0,
      duration: "Procedimento + recuperação",
      image:
        "https://images.unsplash.com/photo-1584794171574-fe3f84b43838?w=400&q=80",
    },
  ];

  const adestramento: Service[] = [
    {
      id: "aula-individual",
      name: "Aula Individual",
      description:
        "Sessão personalizada de adestramento focada nas necessidades específicas do seu cão.",
      price: 120.0,
      duration: "1 hora",
      image:
        "https://images.unsplash.com/photo-1551730459-92db2a308d6a?w=400&q=80",
    },
    {
      id: "pacote-basico",
      name: "Pacote Básico",
      description:
        "5 sessões de adestramento para ensinar comandos básicos como sentar, ficar e vir.",
      price: 550.0,
      duration: "5 sessões de 1 hora",
      image:
        "https://images.unsplash.com/photo-1591946614720-90a587da4a36?w=400&q=80",
    },
    {
      id: "pacote-avancado",
      name: "Pacote Avançado",
      description:
        "10 sessões para comandos avançados, socialização e correção de comportamentos indesejados.",
      price: 990.0,
      duration: "10 sessões de 1 hora",
      image:
        "https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&q=80",
    },
  ];

  const getServicesForTab = () => {
    switch (selectedTab) {
      case "banho-tosa":
        return banhoTosaServices;
      case "veterinaria":
        return veterinariaServices;
      case "adestramento":
        return adestramento;
      default:
        return banhoTosaServices;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center mb-2">
            Nossos Serviços
          </h1>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
            Oferecemos uma variedade de serviços profissionais para garantir o
            bem-estar e a felicidade do seu pet
          </p>

          <Tabs
            defaultValue="banho-tosa"
            className="max-w-4xl mx-auto"
            onValueChange={setSelectedTab}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="banho-tosa" className="flex items-center">
                <Scissors className="h-4 w-4 mr-2" />
                Banho & Tosa
              </TabsTrigger>
              <TabsTrigger value="veterinaria" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                Veterinária
              </TabsTrigger>
              <TabsTrigger value="adestramento" className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2" />
                Adestramento
              </TabsTrigger>
            </TabsList>

            <TabsContent value="banho-tosa" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {banhoTosaServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="veterinaria" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {veterinariaServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="adestramento" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {adestramento.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16 max-w-4xl mx-auto bg-yellow-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-center mb-4">
              Como Agendar um Serviço
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="font-medium mb-2">Escolha o Serviço</h3>
                <p className="text-sm text-gray-600">
                  Selecione o serviço desejado para o seu pet
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="font-medium mb-2">Escolha a Data</h3>
                <p className="text-sm text-gray-600">
                  Selecione o dia e horário disponível
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="font-medium mb-2">Confirme a Reserva</h3>
                <p className="text-sm text-gray-600">
                  Finalize o agendamento e receba a confirmação
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Agendar Agora
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <img
        src={service.image}
        alt={service.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex-grow">
        <h3 className="font-semibold text-lg mb-2">{service.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{service.description}</p>
        <div className="flex items-center text-sm text-gray-500 mb-1">
          <Clock className="h-4 w-4 mr-2 text-yellow-500" />
          <span>{service.duration}</span>
        </div>
        <div className="font-bold text-lg text-yellow-700 mt-2">
          R${service.price.toFixed(2)}
        </div>
      </div>
      <div className="p-4 pt-0">
        <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
          <Calendar className="h-4 w-4 mr-2" />
          Agendar
        </Button>
      </div>
    </div>
  );
};

export default ServicosPage;
