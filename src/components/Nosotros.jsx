function Nosotros() {
  return (
    <section id="nosotros" className="nosotros-section">
      <div className="container">
        <span className="section-badge nosotros-badge">Nosotros</span>
        <div className="nosotros-grid">
          <div className="nosotros-left">
            <h2>Compromiso profesional en cada asesoría</h2>
            <p>
              En CONACOF ofrecemos acompañamiento profesional en servicios
              académicos, contables y fiscales, con un enfoque claro, responsable
              y orientado a las necesidades de cada persona.
            </p>
            <p>
              Nuestro objetivo es brindar soluciones confiables, prácticas y bien
              estructuradas, cuidando siempre la atención personalizada y la
              confidencialidad de cada caso.
            </p>
          </div>

          <div className="nosotros-right premium-card">
            <div className="nosotros-stat">
              <h3>Atención personalizada</h3>
              <p>Cada servicio se adapta al contexto, necesidad y objetivo de cada cliente.</p>
            </div>
            <div className="nosotros-stat">
              <h3>Enfoque profesional</h3>
              <p>Se trabaja con orden, claridad y seriedad en cada proceso de asesoría.</p>
            </div>
            <div className="nosotros-stat">
              <h3>Soluciones integrales</h3>
              <p>Unimos experiencia académica, contable y fiscal en un solo lugar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Nosotros;