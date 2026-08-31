import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import Reveal from './Reveal';
import paralaxImg from '../assets/image/paralax.jpg';

function CTA() {
  const goToContacto = () => {
    const contacto = document.getElementById('contacto');
    if (!contacto) return;

    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
    const target =
      contacto.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: target,
      behavior: 'smooth',
    });
  };

  return (
    <section
      className="cta-final cta-parallax"
      style={{ backgroundImage: `url(${paralaxImg})` }}
    >
      <div className="cta-parallax-overlay"></div>

      <div className="container">
        <Reveal direction="zoom">
          <div className="cta-final-box cta-final-box-transparent">
            <span className="section-badge badge-light">Atención profesional</span>
            <h2>Recibe orientación clara, confiable y personalizada</h2>
            <p>
              Ya sea para apoyo contable o fiscal, en CONACOF estamos
              listos para ayudarte con atención profesional y seguimiento oportuno.
            </p>

            <div className="cta-final-actions">
              <a
                href="https://wa.me/529999066129?text=Hola,%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Escribir por WhatsApp
              </a>

              <button
                type="button"
                className="btn-secondary btn-light"
                onClick={goToContacto}
              >
                Solicitar información <FaArrowRight />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CTA;