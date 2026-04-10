import { FaCheckCircle } from 'react-icons/fa';

function PorQue() {
  return (
    <section id="por-que" className="por-que">
      <div className="container">
        <h2>¿Por qué CONACOF?</h2>

        <div className="beneficios">
          <div className="beneficio">
            <FaCheckCircle />
            <p>Expertos certificados con +10 años de experiencia</p>
          </div>
          <div className="beneficio">
            <FaCheckCircle />
            <p>Resultados garantizados y confidencialidad absoluta</p>
          </div>
          <div className="beneficio">
            <FaCheckCircle />
            <p>Enfoque práctico y adaptado a tus necesidades</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PorQue;