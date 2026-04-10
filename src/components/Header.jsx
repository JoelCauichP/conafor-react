import { useEffect, useState } from 'react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (!element) return;

    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });

    setMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'header scrolled' : 'header'}>
      <div className="container">
        <div className="brand">
          <h1>CONACOF</h1>
          <span>Consultoría Académica, Contable y Fiscal</span>
        </div>

        <nav>
          <button
            className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li>
              <button
                type="button"
                className={activeSection === 'inicio' ? 'active' : ''}
                onClick={() => handleScrollTo('inicio')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === 'nosotros' ? 'active' : ''}
                onClick={() => handleScrollTo('nosotros')}
              >
                Nosotros
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === 'servicios' ? 'active' : ''}
                onClick={() => handleScrollTo('servicios')}
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                type="button"
                className={activeSection === 'contacto' ? 'active' : ''}
                onClick={() => handleScrollTo('contacto')}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;