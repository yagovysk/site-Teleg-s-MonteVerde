import perfil1 from '../../assets/perfil1.png';
import perfil2 from '../../assets/perfil2.png';
import perfil3 from '../../assets/perfil3.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import stars from '../../assets/stars.png';
import './Depoiments.css';

export function Depoiments() {
  const testimonials = [
    {
      id: 1,
      image: perfil1,
      author: 'Adria Rodrigues',
      text: '"Indico de olhos fechados Empresa com o melhor atendimento, preço e entrega Rápida !!"',
      title: 'Melhor preço e entrega!',
      star: stars,
    },
    {
      id: 2,
      image: perfil2,
      author: 'Pollyanna Castro',
      text: ' "Muito competente, trabalho excelente que eles fazem. Os brindes maravilhosos, e o gás dura bastante.Estão de parabéns" ',
      title: 'Melhor competência',
      star: stars,
    },
    {
      id: 3,
      image: perfil3,
      author: 'Karen Barbosa',
      text: 'Pessoal bacana demais, muito prestativo.',
      title: 'Empresa prestativa!',
      star: stars,
    },
  ];
  return (
    <div id="depoimentos" className="Depoiments-container">
      <h1>Conheça Quem Confia na Gente </h1>

      <Carousel
        className="Depoiments-carousel"
        showArrows={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        swipeable={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        stopOnHover={true}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <img
              src={testimonial.image}
              alt={`Imagem de ${testimonial.author}`}
              style={{ width: '5rem', height: '5rem', borderRadius: '50%' }}
            />
            <h2>{testimonial.title}</h2> {/* Título dinâmico do depoimento */}
            <div className="stars1">
              <img src={testimonial.star} alt="" />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-author"> {testimonial.author}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
