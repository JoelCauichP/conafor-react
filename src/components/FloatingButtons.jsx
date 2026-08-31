import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

function FloatingButtons() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/529999066129?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"
        className="floating-btn floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <FaWhatsapp />
      </a>

      {showTopButton && (
        <button
          type="button"
          className="floating-btn floating-top"
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default FloatingButtons;