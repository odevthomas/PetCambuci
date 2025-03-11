import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">PetShop</h3>
          <p className="text-yellow-400 text-sm">
            Sua loja completa para cuidados com animais de estimação
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Produtos</h3>
          <ul className="space-y-2 text-yellow-100 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Ração para Cães
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Ração para Gatos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Brinquedos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Acessórios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Medicamentos
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Serviços</h3>
          <ul className="space-y-2 text-yellow-100 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-400">
                Banho e Tosa
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Veterinário
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Hospedagem
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Adestramento
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Pet Sitter
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>
          <div className="space-y-2">
            <div className="flex items-center text-yellow-100">
              <Phone className="h-4 w-4 mr-2" />
              <span className="text-sm">(11) 5555-1234</span>
            </div>
            <div className="flex items-center text-yellow-100">
              <Mail className="h-4 w-4 mr-2" />
              <span className="text-sm">contato@petshop.com.br</span>
            </div>
            <div className="flex items-start text-yellow-100">
              <MapPin className="h-4 w-4 mr-2 mt-1" />
              <span className="text-sm">
                Av. dos Animais, 123
                <br />
                São Paulo, SP
                <br />
                CEP: 01234-567
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-yellow-900">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-yellow-400 text-sm">
            © {new Date().getFullYear()} PetShop. Todos os direitos reservados.
          </p>
          <p className="text-yellow-400 text-sm mt-2 md:mt-0">
            Desenvolvido por{" "}
            <span className="text-yellow-300 font-medium">@odevthomas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
