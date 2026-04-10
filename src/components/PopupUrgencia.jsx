import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function PopupUrgencia() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="popup">
      <div className="popup-content">
        <button
          type="button"
          className="close-popup"
          onClick={() => setVisible(false)}
          aria-label="Cerrar popup"
        >
          &times;
        </button>

        <h3>¿Tienes un plazo ajustado?</h3>
        <p>Te ayudamos hoy mismo con atención rápida y profesional.</p>

        <a
          href="https://wa.me/529991325426"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp /> Contacto urgente
        </a>
      </div>
    </div>
  );
}

export default PopupUrgencia;