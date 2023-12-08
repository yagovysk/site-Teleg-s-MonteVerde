import logo from '../../assets/logo.png';
import { MdMenu, MdClose } from 'react-icons/md';
import React, { useState } from 'react';
import './Menu.css';

export function Menu() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Fecha o menu após a navegação
    }
  };

  return (
    <nav
      className={`Container-Menu ${isMenuOpen ? 'menu-open' : ''}`}
      aria-label="Menu de Navegação">
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
        <ul className={`Menu-list ${isMenuOpen ? 'show' : ''}`}>
          <li onClick={() => scrollToSection('home')}>Ínicio</li>
          <li onClick={() => scrollToSection('produtos')}>Produtos</li>
          <li onClick={() => scrollToSection('depoimentos')}>Depoimentos</li>
        </ul>
        <a
          href="https://wa.me/553141271810?text=Quero garantir meu desconto! (Envie esta mensagem para garantir seu desconto.)"
          target="_blank"
          rel="noopener noreferrer"
          className="button-menu">
          Contate-nos
        </a>
      </div>
    </nav>
  );
}
