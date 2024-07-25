import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";

export function Footer() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="container-footer">
      <h1> © todos os direitos reservados a TeleGás MonteVerde</h1>
      <h2>© Developed by Togyro Group Victory</h2>
      <div className="container-menu-footer">
        <ul className="Menu-list-footer">
          <li onClick={() => scrollToSection("home")}>Ínicio</li>
          <li onClick={() => scrollToSection("produtos")}>Produtos</li>
          <li onClick={() => scrollToSection("depoimentos")}>Depoimentos</li>
        </ul>
      </div>
      <a href="">
        {" "}
        <FaInstagram className="instagram-icon" />
      </a>
      <Link className="privacidade-button" to="privacidade">
        Política de privacidade
      </Link>
    </footer>
  );
}
