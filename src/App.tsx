import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import StoreLocator from "./components/location/StoreLocator";
import DeliveryCalculator from "./components/delivery/DeliveryCalculator";
import ServicosPage from "./components/servicos/ServicosPage";
import ProdutosPage from "./components/produtos/ProdutosPage";
import CheckoutPage from "./pages/CheckoutPage";
import { CartProvider } from "./context/CartContext";
import routes from "tempo-routes";

function App() {
  return (
    <CartProvider>
      <Suspense fallback={<p className="p-4">Carregando...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/location" element={<StoreLocator />} />
            <Route path="/delivery" element={<DeliveryCalculator />} />
            <Route path="/servicos" element={<ServicosPage />} />
            <Route path="/produtos" element={<ProdutosPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </CartProvider>
  );
}

export default App;
