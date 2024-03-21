import "./Home.css";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";
import foto from "../../assets/fundo-gas.png";

export function Home() {
  return (
    <section id="home" className="Container-Home">
      <article className="container-texts-home">
        <h1>
          Desconto de <span>R$ 5,00</span> para quem comprar pelo site!! Clique{" "}
          <span> em um dos botões</span> e Peça agora!
        </h1>

        <div className="container-buttons">
          <a
            className="button-home"
            href="https://wa.me/553141271810?text=Quero garantir meu desconto! (Envie esta mensagem para garantir seu desconto.)"
            target="blank"
          >
            Peça pelo Zap <SiWhatsapp />
          </a>
          <a className="button-home-2" href="tel:+553141271810" target="blank">
            Ligar agora <BsFillTelephonePlusFill />
          </a>
        </div>
      </article>
      <div className="container-home-img">
        <img src={foto} alt="" />
      </div>
    </section>
  );
}
