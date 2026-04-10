import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import personas2 from '../assets/image/personas-2.png';
import Reveal from './Reveal';

function Hero() {
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
    <section id="inicio" className="hero">
      <div className="hero-bg-shape hero-bg-shape-1"></div>
      <div className="hero-bg-shape hero-bg-shape-2"></div>

      <div className="container hero-grid">
        <Reveal direction="left">
          <div className="hero-content">
            <p className="hero-tag">Consultoría profesional en Mérida, Yucatán</p>
            <h1>Consultoría académica, contable y fiscal</h1>
            <p className="hero-description">
              Te apoyamos en servicios contables, trámites fiscales y asesoría
              académica con atención personalizada, profesional y confiable.
            </p>

            <div className="hero-contact-data">
              <div className="contact-chip">
                <FaWhatsapp />
                <span>99 91 32 54 26</span>
              </div>

              <div className="contact-chip">
                <FaEnvelope />
                <span>asociadosconacof@gmail.com</span>
              </div>
            </div>

            <div className="hero-actions">
              <a
                href="https://wa.me/529991325426"
                className="btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp /> Contactar ahora
              </a>

              <button type="button" className="btn-secondary" onClick={goToContacto}>
                Solicitar información
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={150}>
          <div className="hero-image-wrapper">
            {/* <div className="hero-image-card">
              <img src={personas2} alt="Equipo de consultoría" />
            </div> */}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;