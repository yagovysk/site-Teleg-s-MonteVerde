import { Menu } from "./components/Menu/Menu";
import { FaPhone } from "react-icons/fa6";
import "./App.css";
import { Home } from "./components/Home/Home";
import { Produtos } from "./components/Produtos/Produtos";
import { Depoiments } from "./components/Depoiments/Depoiments";
import { Footer } from "./components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa";

export function App() {
  return (
    <main className="Container-App">
      <div className="phone-button">
        <a href="tel:+553141271810" target="blank" className="phone">
          <FaPhone className="phone-icon" />
        </a>
      </div>
      <div className="whatsapp-button">
        <a
          className="wpp"
          href="https://wa.me/553141271810?text=Quero garantir meu desconto! (Envie esta mensagem para garantir seu desconto.)"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="icon" />
        </a>
      </div>
      <Menu />
      <Home />
      <Produtos />
      <Depoiments />
      <Footer />
    </main>
  );
}
