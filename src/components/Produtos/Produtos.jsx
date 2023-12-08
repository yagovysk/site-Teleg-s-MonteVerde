import kg40 from '../../assets/45kg.png';
import kg20 from '../../assets/20kg.png';
import kg13 from '../../assets/13kg.png';
import kg5 from '../../assets/galao.png';
import background1 from '../../assets/background1.png';
import background2 from '../../assets/background2.jpg';
import background3 from '../../assets/background3.jpg';
import background4 from '../../assets/background4.jpg';
import { useState } from 'react';
import './Produtos.css';

export function Produtos() {
  const [mensagem, setMensagem] = useState('');

  const produtos = [
    {
      id: 1,
      nome: 'Gás de cozinha',
      paragraph: 'Botijão de Gás residencial.',
      Image1: background3,
      Image: kg13,
      imageSize: { width: '17rem', height: '10rem' },
    },
    {
      id: 2,
      nome: 'Gás P45',
      paragraph: 'Botijão de Gás para comércios e indústrias.',
      Image1: background1,
      Image: kg40,
      imageSize: { width: '17rem', height: '10rem' },
    },
    {
      id: 3,
      nome: 'Gás P20',
      paragraph: 'Botijão de gás para empilhadeiras.',
      Image1: background2,
      Image: kg20,
      imageSize: { width: '17rem', height: '10rem' },
    },
    {
      id: 4,
      nome: 'Galão de água 20L',
      paragraph: 'Galão com melhor custo benefício.',
      Image1: background4,
      Image: kg5,
      imageSize: { width: '17rem', height: '10rem' },
      imgaSize2: { width: '5rem', height: '5rem' },
    },
  ];
  const handleButtonClick = (produto) => {
    setMensagem(
      `Quero garantir meu desconto! (Envie esta mensagem para garantir seu desconto.) oferta não válida para o galão de água. ${produto.nome}.`,
    );
  };
  return (
    <div id="produtos" className="container-products">
      <h1>Nossos Produtos</h1>
      <div className="container-cards">
        {produtos.map((produto) => (
          <div className="products-card" key={produto.id}>
            <div className="background-card">
              <img
                src={produto.Image1}
                alt="Imagens backgrounds dos cards"
                style={produto.imageSize}
              />
            </div>
            <div className="responsive-products">
              <div className="products-icons">
                <img src={produto.Image} style={produto.imgaSize2} alt="" />
              </div>
              <h3>{produto.nome}</h3>
              <p>{produto.paragraph}</p>
              <a
                href={`https://wa.me/553141271810?text=${encodeURIComponent(
                  mensagem,
                )}`}
                target="blank"
                className="button-products"
                onClick={() => handleButtonClick(produto)}>
                Peça aqui
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
