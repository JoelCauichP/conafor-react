import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Reveal from './Reveal';

const faqItems = [
  {
    question: '¿Qué tipo de servicios ofrece CONACOF?',
    answer:
      'Ofrecemos consultoría contable y fiscal, incluyendo apoyo en facturación, declaraciones, constancias fiscales y otros servicios relacionados.',
  },
  {
    question: '¿La atención es personalizada?',
    answer:
      'Sí. Cada caso se revisa de forma particular para ofrecer una orientación más clara, adecuada y útil según la necesidad del cliente.',
  },
  {
    question: '¿Puedo solicitar información por WhatsApp?',
    answer:
      'Sí. Puedes comunicarte directamente por WhatsApp para recibir atención, resolver dudas y solicitar información sobre cualquiera de nuestros servicios.',
  },
  {
    question: '¿Atienden únicamente en Mérida?',
    answer:
      'La atención puede brindarse en Mérida, Yucatán, y también de forma remota según el tipo de servicio requerido.',
  },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <article className={`faq-item premium-card ${isOpen ? 'open' : ''}`}>
      <button type="button" className="faq-question" onClick={onToggle}>
        <span>{item.question}</span>
        <FaChevronDown className="faq-icon" />
      </button>
      <div className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </article>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq">
      <div className="container">
        <Reveal direction="up">
          <div className="section-heading">
            <span className="section-badge">Preguntas frecuentes</span>
            <h2>Resolvemos tus dudas más comunes</h2>
            <p>
              Aquí encontrarás respuestas rápidas a preguntas frecuentes sobre
              nuestros servicios, forma de atención y medios de contacto.
            </p>
          </div>
        </Reveal>

        <div className="faq-list">
          {faqItems.map((item, index) => (
            <Reveal key={index} direction="up" delay={index * 90}>
              <FAQItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;