import { X } from "lucide-react";
import { useState } from "react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1 text-center">
          <span className="font-bold text-yellow-400">PROMOÇÃO RELÂMPAGO!</span>{" "}
          <span className="hidden sm:inline">Use o cupom </span>
          <span className="font-bold bg-yellow-400 text-black px-2 py-1 rounded mx-1">
            PETLOVE20
          </span>{" "}
          <span className="hidden sm:inline">
            e ganhe 20% OFF em toda a loja!
          </span>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-yellow-400 ml-4"
          aria-label="Fechar banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
