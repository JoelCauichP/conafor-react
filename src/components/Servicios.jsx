import {
  FaFileInvoiceDollar,
  FaCalculator,
  FaGraduationCap,
  FaCheck,
} from 'react-icons/fa';
import Reveal from './Reveal';

const servicios = [
  {
    icon: <FaFileInvoiceDollar />,
    title: 'Consultoría Fiscal',
    description:
      'Atención y orientación en trámites y obligaciones fiscales para personas físicas y morales.',
    items: [
      'Facturación electrónica CFDI 4.0',
      'Declaraciones mensuales y anuales',
      'Constancias de situación fiscal',
      'Trámites y orientación ante el SAT',
    ],
  },
  {
    icon: <FaCalculator />,
    title: 'Consultoría Contable',
    description:
      'Soluciones contables para mejorar el control financiero y el cumplimiento administrativo.',
    items: [
      'Elaboración de estados financieros',
      'Conciliaciones bancarias',
      'Control contable y administrativo',
      'Apoyo en nómina y obligaciones laborales',
    ],
  },
  {
    icon: <FaGraduationCap />,
    title: 'Consultoría Académica',
    description:
      'Asesoría especializada para estudiantes y profesionistas en procesos académicos y de investigación.',
    items: [
      'Redacción de tesis y protocolos',
      'Corrección de estilo académico',
      'Normas APA y otros formatos',
      'Metodología de investigación',
    ],
  },
];

function Servicios() {
  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <Reveal direction="up">
          <div className="section-heading">
            <span className="section-badge">Servicios</span>
            <h2>Soluciones profesionales para cada necesidad</h2>
            <p>
              Brindamos atención personalizada en servicios fiscales, contables y
              académicos, con enfoque profesional, claro y confiable.
            </p>
          </div>
        </Reveal>

        <div className="servicios-grid">
          {servicios.map((servicio, index) => (
            <Reveal key={index} direction="up" delay={index * 120}>
              <article className="servicio-card premium-card">
                <div className="servicio-top">
                  <div className="icon">{servicio.icon}</div>
                  <h3>{servicio.title}</h3>
                </div>

                <p className="servicio-description">{servicio.description}</p>

                <ul className="servicio-lista">
                  {servicio.items.map((item, i) => (
                    <li key={i}>
                      <FaCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;