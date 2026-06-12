"use client";

import { useState } from "react";

const WA_LINK = "https://wa.me/message/HLT336NQACE6D1";
const LEAD_EMAIL = "lauraquintero@psiforensic.com";

// Pega aquí la URL del Web App de Google Apps Script (ver backend/README.md).
// Mientras esté vacío, el formulario abrirá el correo del visitante como respaldo.
const LEADS_ENDPOINT = "";

function Logo() {
  return (
    <svg
      className="brand-logo"
      viewBox="0 0 595.28 841.89"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      stroke="currentColor"
      aria-label="Logo Psiforensic"
    >
      <path d="M198.81,125.04l101.62-1.36s2.78-.27,2.85,1.36c.04.79-.43,1.98-2.72,2.06s-24.77.3-26.68,1.11-3.32,2.21-3.49,6.38,2.16,380.16,2.16,380.16v8.3s.24,4.47,4.6,4.43,81.42-1.81,81.42-1.81c0,0,5.17-.38,5.22,1.24s-.71,3.54-10.8,3.84-26.39.55-28.43,1.19-7.62,7.02-14.34,14.13c0,0-15.04,15.66-18.1,18.88,0,0-3.63,3.95,2.2,3.39,10.05-.96,30.67-3.62,52.46-14.97,16.05-8.36,40.05-31.77,56.13-63.17,16.09-31.4,28.47-86.47,25.91-132.06-3.11-55.43-15.44-105.64-61.82-150.31,0,0-30.15-32.15-83.13-26.01,0,0-3.77.64-3.81-2.47-.04-3.36,4.89-4.02,18.49-4.12s87.04-3.47,142.04,79.7c0,0,51.57,79.34,26.04,171.77-25.53,92.43-83.91,126.94-133.96,141.94,0,0-19.87,5.85-42.72,4.83,0,0-4.79-1.06-10.4,3.4s-26.68,20.17-26.68,20.17c0,0-3.7,2.62-2.33,4.2s4.08-1.12,9.04-2.86c3.73-1.31,22.82-6.84,55.63-1.73s68.91,19.45,81.06,21.19,39.12,5.63,58.09-7.31c0,0,11.96-9.15,20.3-24.55,0,0,2.25-4.57,4.28-3.69,1.58.69.46,4.39-.41,6.92-.95,2.78-11.06,36.33-42.89,54.94-28.17,16.47-53.45,9.29-80.98-.78-26.98-9.87-52.6-26.81-76.85-32.94s-46.03,2.28-60.39,16.87c-12.44,12.65-15.95,2.7-15.57.6.63-3.51,1.58-7.54,20.05-18.28,25.04-14.56,43.06-29.51,47.42-33.75,2.32-2.26.79-3.56-1.19-3.69s-63.38-3.61-106.75-51.86-68.48-121.89-42.99-212.05c0,0,23.35-78.97,94.32-113.3,0,0,5.26-3.05,5.43,2.05s-.42,9.73-1.65,11.37c-.89,1.19-13.07,12.57-18.43,19.46s-42.29,49.86-45.02,130.2c0,0-3.87,64.72,18.38,118.3,0,0,21.06,58.83,76.19,83.51,0,0,19.53,8.17,30.7,6.19,0,0,3.28-.39,8.07-5.5,7.61-7.2,21.73-23.15,22.18-23.67,1.76-2.01,4.5-4.72,1.09-4.63s-75.88,1.56-81.69,1.41c-4.12-.1-6.39-.25-6.32-3.1.03-1.42,1.22-1.94,7.14-1.72,0,0,1.69.2,1.53-1.9-.07-.92-3.01-382.95-3.01-385.25,0-1.8-.1-7.83-.18-10.57-.06-2.4-1.93-2.53-2.3-2.57-1.74-.23-14.96-.2-24.72.19,0,0-5.46.38-5.62-1.46-.2-2.34,4.33-2.21,4.33-2.23Z" />
      <path d="M472.1,466.36l-2.21,57.7s.23,4.55-3.56,4.78-37.79.77-41.46.76c-4.57-.02-5.28-1.83-3.19-2.72s19.97-5.73,28.12-14.68,15.33-19.04,18.21-40.51c0,0,.77-7.66,3-7.56,0,0,1.16-.06,1.09,2.24Z" />
    </svg>
  );
}

const servicios = [
  ["01", "Evaluación de credibilidad de testimonio", "Análisis técnico de la credibilidad del relato en contextos judiciales."],
  ["02", "Evaluación de daño y secuelas psicológicas", "Valoración del impacto psicológico derivado de un hecho."],
  ["03", "Evaluación de víctimas y agresores", "Casos de abuso sexual y violencia intrafamiliar."],
  ["04", "Evaluación forense de niños, niñas y adolescentes", "Entrevista forense y valoración adaptada a su edad y desarrollo."],
  ["05", "Valoración de idoneidad parental y custodia", "Apoyo técnico en procesos de familia y custodia."],
  ["06", "Valoración del riesgo de comportamiento violento", "Estimación del riesgo con instrumentos especializados."],
  ["07", "Valoración de capacidad de testar", "Evaluación de la capacidad mental para otorgar testamento."],
  ["08", "Metapericias", "Análisis crítico de la calidad metodológica de un peritaje."],
  ["09", "Contraperitajes", "Refutación técnica de peritajes presentados por la contraparte."],
  ["10", "Asesoría técnico-científica", "Apoyo experto en interrogatorio, contrainterrogatorio y teoría del caso."],
];

const why = [
  ["◇", "Rigor científico", "Evaluaciones fundamentadas en metodologías validadas y evidencia actualizada."],
  ["⚖", "Imparcialidad", "Informes objetivos al servicio de la verdad procesal, no de una de las partes."],
  ["🔒", "Confidencialidad", "Manejo reservado y ético de toda la información del caso."],
  ["§", "Fundamentación técnica", "Informes claros, defendibles y sustentables para su ratificación en sala."],
];

const steps = [
  ["1", "Consulta inicial", "Estudio del caso y orientación sobre la pertinencia del servicio requerido."],
  ["2", "Evaluación forense", "Entrevistas forenses e instrumentos psicométricos objetivos según el caso."],
  ["3", "Informe pericial", "Elaboración del informe con análisis fundamentado en los hallazgos."],
  ["4", "Ratificación", "Sustentación del informe en audiencia o juicio cuando el proceso lo requiera."],
];

const faqs = [
  ["¿Qué es un peritaje psicológico forense?", "Es una evaluación realizada por un psicólogo especializado para aportar información técnica y objetiva en un proceso judicial. Su objetivo es ofrecer al juez o tribunal elementos científicos que apoyen la toma de decisiones sobre aspectos psicológicos del caso."],
  ["¿Cuánto cuesta un peritaje?", "Los honorarios dependen del tipo de evaluación, la complejidad del caso y el alcance del servicio requerido. Por eso cada caso se valora de forma individual. Agenda una consulta inicial para conocer los detalles y recibir una orientación ajustada a tu situación."],
  ["¿Cuánto tiempo toma una evaluación?", "La duración varía según la complejidad del caso, el número de personas a evaluar y la información disponible. En la consulta inicial se define un estimado realista para tu caso particular."],
  ["¿Necesito un abogado para contratar un peritaje?", "No es obligatorio. Puedes solicitar una evaluación o asesoría de forma directa. En algunos casos, la coordinación con tu abogado facilita que los hallazgos se integren adecuadamente al proceso."],
];

type Status = "idle" | "sending" | "ok" | "error";

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [privOpen, setPrivOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");

  const closeNav = () => setNavOpen(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setStatus("sending");

    const body = new URLSearchParams();
    fd.forEach((value, key) => body.append(key, String(value)));

    try {
      if (LEADS_ENDPOINT) {
        await fetch(LEADS_ENDPOINT, { method: "POST", mode: "no-cors", body });
      } else {
        // Respaldo mientras no esté configurado el backend: abre el correo del visitante.
        const asunto = encodeURIComponent("Nueva consulta - " + (fd.get("nombre") || ""));
        const cuerpo = encodeURIComponent(
          `Nombre: ${fd.get("nombre") || ""}\n` +
            `Correo: ${fd.get("correo") || ""}\n` +
            `Telefono: ${fd.get("telefono") || ""}\n` +
            `Servicio: ${fd.get("servicio") || ""}\n\n` +
            `Mensaje:\n${fd.get("mensaje") || ""}`
        );
        window.location.href = `mailto:${LEAD_EMAIL}?subject=${asunto}&body=${cuerpo}`;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* NAV */}
      <header>
        <div className="wrap nav">
          <a href="#inicio" className="brand" onClick={closeNav}>
            <Logo />Psi<span>forensic</span>
          </a>
          <nav className={`nav-links${navOpen ? " open" : ""}`} id="navLinks">
            <a href="#sobre" onClick={closeNav}>Sobre Psiforensic</a>
            <a href="#servicios" onClick={closeNav}>Servicios</a>
            <a href="#procedimiento" onClick={closeNav}>Procedimiento</a>
            <a href="#faq" onClick={closeNav}>Preguntas</a>
            <a href="#contacto" className="nav-cta" onClick={closeNav}>Agendar consulta</a>
          </nav>
          <button className="burger" aria-label="Menú" onClick={() => setNavOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Psicología forense · Colombia</span>
            <h1>Evaluación <em>psicológica</em> forense</h1>
            <p className="lead">Peritajes y asesorías psico-jurídicas con rigor científico, al servicio de decisiones judiciales claras y fundamentadas.</p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">Agendar consulta</a>
              <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Áreas de actuación</h3>
            <ul>
              <li>Derecho penal</li>
              <li>Derecho de familia</li>
              <li>Derecho laboral</li>
              <li>Derecho civil</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section className="about" id="sobre">
        <div className="wrap about-grid">
          <div>
            <span className="eyebrow">Sobre Psiforensic</span>
            <h2>Ciencia de vanguardia al servicio de la justicia</h2>
          </div>
          <div>
            <p>En Psiforensic la evaluación forense se fundamenta en el estado del arte de la ciencia psicológica. Integramos los avances más recientes y rigurosos en neuropsicología, evaluación de la credibilidad y análisis del comportamiento para ofrecer peritajes actualizados, técnicamente sólidos y defendibles.</p>
            <p>Cada informe traduce el conocimiento científico de vanguardia en evidencia clara y útil para la toma de decisiones judiciales, con objetividad e imparcialidad como principios rectores.</p>
            <div className="sign">
              <strong>Laura Quintero</strong>
              <em>Psicóloga especialista en criminología y psicología forense aplicada. Doctorante en Psicología. Investigación científica en psicología.</em>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Servicios</span>
            <h2>Servicios psicojurídicos y forenses</h2>
            <p>Evaluaciones e informes periciales fundamentados en evidencia, aplicables a procesos penales, de familia, civiles y laborales.</p>
          </div>
          <div className="services-grid">
            {servicios.map(([num, title, desc]) => (
              <div className="svc" key={num}>
                <div className="svc-num">{num}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Por qué elegir Psiforensic</span>
            <h2>Rigor, objetividad y defensa técnica</h2>
          </div>
          <div className="why-grid">
            {why.map(([ic, title, desc]) => (
              <div className="why-card" key={title}>
                <div className="ic">{ic}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCEDIMIENTO */}
      <section id="procedimiento">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Procedimiento</span>
            <h2>Cómo trabajamos tu caso</h2>
          </div>
          <div className="steps">
            {steps.map(([n, title, desc]) => (
              <div className="step" key={n}>
                <div className="step-n">{n}</div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Preguntas frecuentes</span>
            <h2>Resuelve tus dudas</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([q, a], i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}</button>
                <div className="faq-a"><p>{a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="cover">
        <div className="wrap">
          <span className="eyebrow">Cobertura</span>
          <h2>Atención a nivel nacional</h2>
          <div className="cities">
            <span className="chip">Barranquilla</span>
            <span className="chip">Bogotá</span>
            <span className="chip"><span className="accent">Cobertura nacional</span></span>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto">
        <div className="wrap contact-grid">
          <div className="contact-info">
            <span className="eyebrow">Contacto</span>
            <h2>Agenda tu consulta inicial</h2>
            <p className="intro">Cuéntanos brevemente sobre tu caso. En la consulta inicial estudiamos la situación y te orientamos sobre el servicio más adecuado.</p>
            <div className="contact-row"><div className="ic">&#9993;</div><div><b>Correo</b><span>{LEAD_EMAIL}</span></div></div>
            <div className="contact-row"><div className="ic">&#9990;</div><div><b>WhatsApp</b><span><a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", fontWeight: 600 }}>Escríbenos por WhatsApp</a></span></div></div>
            <div className="contact-row"><div className="ic">&#9906;</div><div><b>Ubicación</b><span>Barranquilla · Bogotá · Cobertura nacional</span></div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field"><label>Nombre completo</label><input type="text" name="nombre" required /></div>
            <div className="field"><label>Correo electrónico</label><input type="email" name="correo" required /></div>
            <div className="field"><label>Teléfono</label><input type="tel" name="telefono" /></div>
            <div className="field">
              <label>Tipo de servicio</label>
              <select name="servicio" defaultValue="">
                <option value="">Selecciona una opción</option>
                <option>Evaluación de credibilidad de testimonio</option>
                <option>Evaluación de daño y secuelas psicológicas</option>
                <option>Evaluación de víctimas y agresores</option>
                <option>Evaluación forense de niños, niñas y adolescentes</option>
                <option>Idoneidad parental y custodia</option>
                <option>Riesgo de comportamiento violento</option>
                <option>Capacidad de testar</option>
                <option>Metapericia</option>
                <option>Contraperitaje</option>
                <option>Asesoría técnico-científica</option>
                <option>Otro / No estoy seguro</option>
              </select>
            </div>
            <div className="field"><label>Cuéntanos brevemente tu caso</label><textarea name="mensaje" /></div>
            <label className="consent">
              <input type="checkbox" required />
              <span>Autorizo el tratamiento de mis datos conforme a la <a onClick={(e) => { e.preventDefault(); setPrivOpen(true); }}>Política de Privacidad</a>.</span>
            </label>
            <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
              {status === "sending" ? "Enviando…" : "Enviar solicitud"}
            </button>
            {status === "ok" ? (
              <p className="form-note" style={{ color: "var(--deep-2)", fontWeight: 600 }}>
                ¡Gracias! Recibimos tu solicitud, te contactaremos pronto.
              </p>
            ) : status === "error" ? (
              <p className="form-note" style={{ color: "var(--gold)", fontWeight: 600 }}>
                No se pudo enviar. Escríbenos por WhatsApp o a {LEAD_EMAIL}.
              </p>
            ) : (
              <p className="form-note">Tu información se maneja de forma confidencial.</p>
            )}
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a href="#inicio" className="brand"><Logo />Psi<span className="accent">forensic</span></a>
              <p className="tag">Evaluación psicológica forense con rigor científico. Peritajes, contraperitajes, metapericias y asesoría técnico-científica.</p>
            </div>
            <div>
              <h4>Navegación</h4>
              <ul>
                <li><a href="#sobre">Sobre Psiforensic</a></li>
                <li><a href="#servicios">Servicios</a></li>
                <li><a href="#procedimiento">Procedimiento</a></li>
                <li><a href="#faq">Preguntas frecuentes</a></li>
                <li><a href="#contacto">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4>Contacto</h4>
              <ul>
                <li><a href={`mailto:${LEAD_EMAIL}`}>{LEAD_EMAIL}</a></li>
                <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setPrivOpen(true); }} style={{ cursor: "pointer" }}>Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Psiforensic. Todos los derechos reservados.</span>
            <span>Laura Quintero · Psicología Forense</span>
          </div>
        </div>
      </footer>

      {/* WHATSAPP */}
      <a className="wa" href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.516 5.26l-.999 3.648 3.972-1.027zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.496.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg>
      </a>

      {/* MODAL PRIVACIDAD */}
      <div className={`modal-bg${privOpen ? " show" : ""}`} onClick={() => setPrivOpen(false)}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" onClick={() => setPrivOpen(false)} aria-label="Cerrar">&times;</button>
          <h3>Aviso de Privacidad y Tratamiento de Datos</h3>
          <p>En cumplimiento de la Ley 1581 de 2012, los datos que suministras a través de este formulario (nombre, correo y teléfono) serán tratados de forma confidencial y únicamente para responder tu solicitud y coordinar una consulta inicial. No se solicitan datos sensibles a través de este sitio.</p>
          <h4>Tus derechos</h4>
          <p>Como titular, puedes conocer, actualizar, rectificar o suprimir tus datos y revocar esta autorización escribiendo a {LEAD_EMAIL}.</p>
          <h4>Autorización</h4>
          <p>Al enviar este formulario, autorizas el tratamiento de tus datos para los fines descritos en este aviso.</p>
        </div>
      </div>
    </>
  );
}
