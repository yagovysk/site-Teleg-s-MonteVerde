import { Link } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import logo from "./assets/logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { useState } from "react";
import "./Privacidade.css";

export function Privacidade() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className="section-privacity">
      <nav
        className={`Container-Menu ${isMenuOpen ? "menu-open" : ""}`}
        aria-label="Menu de Navegação"
      >
        <div className="menu-header">
          <div className="title-container">
            <h1 className="logo-title">TeleGás Monte Verde - Betim (MG)</h1>
            <img
              className="logo"
              src={logo}
              alt="Logo da Empresa TeleGás Monte Verde"
            />
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <MdClose className="X-icon" />
            ) : (
              <MdMenu className="barra-icon" />
            )}
          </div>
        </div>
        <div className="Container-menu-list">
          <ul className={`Menu-list ${isMenuOpen ? "show" : ""}`}>
            <li>
              <Link to="/" className="voltar">
                Início
              </Link>
            </li>
          </ul>
          <a
            href="https://wa.me/553141271810?text=Quero garantir meu desconto! (Envie esta mensagem para garantir seu desconto.)"
            target="_blank"
            rel="noopener noreferrer"
            className="button-menu"
          >
            Contate-nos
          </a>
        </div>
      </nav>
      <div className="container-privacidade">
        <article className="article-privacity">
          <h1>Política de Privacidade e Termos de uso</h1>

          <p>
            A sua privacidade é importante para nós. É política do Telegás Monte
            Verde respeitar a sua privacidade em relação a qualquer informação
            sua que possamos coletar no site Telegás Monte Verde e outros sites
            que possuímos e operamos.
          </p>

          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos
            delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
            legais, com o seu conhecimento e consentimento. Também informamos
            por que estamos coletando e como será usado.
          </p>

          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para
            fornecer o serviço solicitado. Quando armazenamos dados, protegemos
            dentro de meios comercialmente aceitáveis para evitar perdas e
            roubos, bem como acesso, divulgação, cópia, uso ou modificação não
            autorizados.
          </p>

          <p>
            Não compartilhamos informações de identificação pessoal publicamente
            ou com terceiros, exceto quando exigido por lei.
          </p>

          <p>
            O nosso site pode ter links para sites externos que não são operados
            por nós. Esteja ciente de que não temos controle sobre o conteúdo e
            práticas desses sites e não podemos aceitar responsabilidade por
            suas respectivas políticas de privacidade.
          </p>

          <p>
            Você é livre para recusar a nossa solicitação de informações
            pessoais, entendendo que talvez não possamos fornecer alguns dos
            serviços desejados.
          </p>

          <p>
            O uso continuado de nosso site será considerado como aceitação de
            nossas práticas em torno de privacidade e informações pessoais. Se
            você tiver alguma dúvida sobre como lidamos com dados do usuário e
            informações pessoais, entre em contacto connosco.
          </p>

          <h2>Compromisso do Usuário</h2>

          <p>
            O usuário se compromete a fazer uso adequado dos conteúdos e da
            informação que o Telegás Monte Verde oferece no site e com caráter
            enunciativo, mas não limitativo:
          </p>

          <ul>
            <li>
              <strong>A)</strong> Não se envolver em atividades que sejam
              ilegais ou contrárias à boa fé e à ordem pública;
            </li>
            <li>
              <strong>B)</strong> Não difundir propaganda ou conteúdo de
              natureza racista, xenofóbica, 166bet ou azar, qualquer tipo de
              pornografia ilegal, de apologia ao terrorismo ou contra os
              direitos humanos;
            </li>
            <li>
              <strong>C)</strong> Não causar danos aos sistemas físicos
              (hardwares) e lógicos (softwares) do Telegás Monte Verde, de seus
              fornecedores ou terceiros, para introduzir ou disseminar vírus
              informáticos ou quaisquer outros sistemas de hardware ou software
              que sejam capazes de causar danos anteriormente mencionados.
            </li>
          </ul>

          <h2>Mais informações</h2>

          <p>
            Esperemos que esteja esclarecido e, como mencionado anteriormente,
            se houver algo que você não tem certeza se precisa ou não,
            geralmente é mais seguro deixar os cookies ativados, caso interaja
            com um dos recursos que você usa em nosso site.
          </p>

          <p>
            Esta política é efetiva a partir de 25 de julho de 2024 às 17:34.
          </p>
          <h1>Termos de Serviço</h1>

          <h2>1. Termos</h2>
          <p>
            Ao acessar ao site Telegás Monte Verde, concorda em cumprir estes
            termos de serviço, todas as leis e regulamentos aplicáveis e
            concorda que é responsável pelo cumprimento de todas as leis locais
            aplicáveis. Se você não concordar com algum desses termos, está
            proibido de usar ou acessar este site. Os materiais contidos neste
            site são protegidos pelas leis de direitos autorais e marcas
            comerciais aplicáveis.
          </p>

          <h2>2. Uso de Licença</h2>
          <p>
            É concedida permissão para baixar temporariamente uma cópia dos
            materiais (informações ou software) no site Telegás Monte Verde,
            apenas para visualização transitória pessoal e não comercial. Esta é
            a concessão de uma licença, não uma transferência de título e, sob
            esta licença, você não pode:
          </p>
          <ul>
            <li>Modificar ou copiar os materiais;</li>
            <li>
              Usar os materiais para qualquer finalidade comercial ou para
              exibição pública (comercial ou não comercial);
            </li>
            <li>
              Tentar descompilar ou fazer engenharia reversa de qualquer
              software contido no site Telegás Monte Verde;
            </li>
            <li>
              Remover quaisquer direitos autorais ou outras notações de
              propriedade dos materiais; ou
            </li>
            <li>
              Transferir os materiais para outra pessoa ou 'espelhe' os
              materiais em qualquer outro servidor.
            </li>
          </ul>
          <p>
            Esta licença será automaticamente rescindida se você violar alguma
            dessas restrições e poderá ser rescindida por Telegás Monte Verde a
            qualquer momento. Ao encerrar a visualização desses materiais ou
            após o término desta licença, você deve apagar todos os materiais
            baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>

          <h2>3. Isenção de responsabilidade</h2>
          <p>
            Os materiais no site da Telegás Monte Verde são fornecidos 'como
            estão'. Telegás Monte Verde não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
          </p>
          <p>
            Além disso, o Telegás Monte Verde não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </p>

          <h2>4. Limitações</h2>
          <p>
            Em nenhum caso o Telegás Monte Verde ou seus fornecedores serão
            responsáveis por quaisquer danos (incluindo, sem limitação, danos
            por perda de dados ou lucro ou devido a interrupção dos negócios)
            decorrentes do uso ou da incapacidade de usar os materiais em
            Telegás Monte Verde, mesmo que Telegás Monte Verde ou um
            representante autorizado da Telegás Monte Verde tenha sido
            notificado oralmente ou por escrito da possibilidade de tais danos.
            Como algumas jurisdições não permitem limitações em garantias
            implícitas, ou limitações de responsabilidade por danos
            consequenciais ou incidentais, essas limitações podem não se aplicar
            a você.
          </p>

          <h2>5. Precisão dos materiais</h2>
          <p>
            Os materiais exibidos no site da Telegás Monte Verde podem incluir
            erros técnicos, tipográficos ou fotográficos. Telegás Monte Verde
            não garante que qualquer material em seu site seja preciso, completo
            ou atual. Telegás Monte Verde pode fazer alterações nos materiais
            contidos em seu site a qualquer momento, sem aviso prévio. No
            entanto, Telegás Monte Verde não se compromete a atualizar os
            materiais.
          </p>

          <h2>6. Links</h2>
          <p>
            O Telegás Monte Verde não analisou todos os sites vinculados ao seu
            site e não é responsável pelo conteúdo de nenhum site vinculado. A
            inclusão de qualquer link não implica endosse por Telegás Monte
            Verde do site. O uso de qualquer site vinculado é por conta e risco
            do usuário.
          </p>

          <h2>Modificações</h2>
          <p>
            O Telegás Monte Verde pode revisar estes termos de serviço do site a
            qualquer momento, sem aviso prévio. Ao usar este site, você concorda
            em ficar vinculado à versão atual desses termos de serviço.
          </p>
          <h2>Lei aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com
            as leis do Telegás Monte Verde e você se submete irrevogavelmente à
            jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </article>
      </div>
      <Footer />
    </section>
  );
}
