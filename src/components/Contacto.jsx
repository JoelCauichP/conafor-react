import { useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';
import Reveal from './Reveal';
import Swal from 'sweetalert2';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: false,
    }));

    if (status.success || status.error) {
      setStatus({
        loading: false,
        success: false,
        error: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = true;
      }
    });

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = true;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setStatus({
        loading: false,
        success: false,
        error: 'Por favor completa correctamente todos los campos obligatorios.',
      });
      return;
    }

    try {
      setStatus({
        loading: true,
        success: false,
        error: '',
      });

      const response = await fetch('https://formspree.io/f/meokkyea', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          telefono: formData.telefono,
          servicio: formData.servicio,
          mensaje: formData.mensaje,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || 'No se pudo enviar el formulario.');
      }

      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        servicio: '',
        mensaje: '',
      });

      Swal.fire({
        icon: 'success',
        title: 'Mensaje enviado',
        text: 'Nos pondremos en contacto contigo pronto.',
        confirmButtonColor: '#123c73',
      });
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        error: 'Ocurrió un error al enviar el mensaje. Intenta nuevamente.',
      });
    }
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <Reveal direction="up">
          <div className="section-heading">
            <span className="section-badge">Contacto</span>
            <h2>Hablemos de tu caso</h2>
            <p>
              Ponte en contacto con nosotros para recibir atención personalizada y
              orientación sobre el servicio que necesitas.
            </p>
          </div>
        </Reveal>

        <div className="contacto-grid contacto-pro">
          <Reveal direction="left">
            <div className="formulario premium-card">
              <h3>Solicita información</h3>
              <p className="form-intro">
                Completa el formulario y te responderemos lo antes posible.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre completo</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className={errors.nombre ? 'error' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={errors.telefono ? 'error' : ''}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="servicio">Tipo de servicio</label>
                  <select
                    id="servicio"
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    className={errors.servicio ? 'error' : ''}
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="academico">Consultoría Académica</option>
                    <option value="contable">Consultoría Contable</option>
                    <option value="fiscal">Consultoría Fiscal</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    value={formData.mensaje}
                    onChange={handleChange}
                    className={errors.mensaje ? 'error' : ''}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary Btn-enviar"
                  disabled={status.loading}
                >
                  {status.loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {status.success && (
                  <p className="form-success">
                    Tu mensaje fue enviado correctamente.
                  </p>
                )}

                {status.error && (
                  <p className="form-error-message">
                    {status.error}
                  </p>
                )}
              </form>
            </div>
          </Reveal>

          <Reveal direction="right" delay={120}>
            <aside className="info-contacto premium-card info-panel">
              <span className="info-mini-badge">Atención directa</span>
              <h3>Estamos listos para ayudarte</h3>
              <p className="info-description">
                Ofrecemos atención cercana, profesional y enfocada en resolver tus
                necesidades de forma clara y confiable.
              </p>

              <div className="info-stack">
                <div className="info-item">
                  <FaPhoneAlt />
                  <div>
                    <strong>Teléfono</strong>
                    <p>99 91 32 54 26</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaEnvelope />
                  <div>
                    <strong>Correo</strong>
                    <p>asociadosconacof@gmail.com</p>
                  </div>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Ubicación</strong>
                    <p>Mérida, Yucatán, México</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/529991325426?text=Hola,%20quiero%20información%20sobre%20sus%20servicios"
                className="btn-secondary whatsapp-direct"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp />
                WhatsApp directo
              </a>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Contacto;