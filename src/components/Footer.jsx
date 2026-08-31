import Reveal from './Reveal';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal direction="up">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>CONACOF</h2>
              <p>Consultoría Contable y Fiscal</p>
            </div>

            <div className="footer-block">
              <h4>Contacto</h4>
              <p>99 99 06 61 29</p>
              <p>asociadosconacof@gmail.com</p>
              <p>Mérida, Yucatán, México</p>
            </div>

            <div className="footer-block">
              <h4>Servicios</h4>
              <p>Consultoría Fiscal</p>
              <p>Consultoría Contable</p>
              <p>Asesoría para Emprendedores</p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 CONACOF. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;