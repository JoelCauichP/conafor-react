import {
  FaUserShield,
  FaClock,
  FaFileAlt,
  FaHandshake,
} from 'react-icons/fa';
import Reveal from './Reveal';

const ventajas = [
  {
    icon: <FaUserShield />,
    title: 'Confidencialidad',
    text: 'Tu información y documentación se maneja con responsabilidad y discreción.',
  },
  {
    icon: <FaClock />,
    title: 'Atención oportuna',
    text: 'Damos seguimiento ágil a cada solicitud para ofrecer respuesta en el menor tiempo posible.',
  },
  {
    icon: <FaFileAlt />,
    title: 'Trabajo claro y ordenado',
    text: 'Cada proceso se desarrolla con estructura, claridad y orientación práctica.',
  },
  {
    icon: <FaHandshake />,
    title: 'Trato profesional',
    text: 'Ofrecemos una atención cercana, seria y enfocada en soluciones reales.',
  },
];

function Ventajas() {
  return (
    <section className="ventajas">
      <div className="container">
        <Reveal direction="up">
          <div className="section-heading">
            <span className="section-badge">¿Por qué elegirnos?</span>
            <h2>Una consultoría enfocada en confianza y resultados</h2>
            <p>
              Trabajamos con profesionalismo, responsabilidad y atención
              personalizada para brindar un servicio útil, claro y confiable.
            </p>
          </div>
        </Reveal>

        <div className="ventajas-grid">
          {ventajas.map((ventaja, index) => (
            <Reveal key={index} direction="up" delay={index * 120}>
              <article className="ventaja-card premium-card">
                <div className="ventaja-icon">{ventaja.icon}</div>
                <h3>{ventaja.title}</h3>
                <p>{ventaja.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Ventajas;