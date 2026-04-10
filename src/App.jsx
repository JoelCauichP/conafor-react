import Header from './components/Header';
import Hero from './components/Hero';
import Nosotros from './components/Nosotros';
import Ventajas from './components/Ventajas';
import Servicios from './components/Servicios';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Contacto from './components/Contacto';
import PopupUrgencia from './components/PopupUrgencia';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Nosotros />
        <Ventajas />
        <Servicios />
        <FAQ />
        <CTA />
        <Contacto />
      </main>

      <PopupUrgencia />
      <FloatingButtons />
      <Footer />
    </>
  );
}

export default App;