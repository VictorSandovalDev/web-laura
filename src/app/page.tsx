"use client";

import { useState } from "react";

const WA_LINK = "https://wa.me/message/HLT336NQACE6D1";

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
  ["01", "Evaluacion de credibilidad de testimonio", "Analisis tecnico de la credibilidad del relato en contextos judiciales."],
  ["02", "Evaluacion de dano y secuelas psicologicas", "Valoracion del impacto psicologico derivado de un hecho."],
  ["03", "Evaluacion de victimas y agresores", "Casos de abuso sexual y violencia intrafamiliar."],
  ["04", "Evaluacion forense de ninos, ninas y adolescentes", "Entrevista forense y valoracion adaptada a su edad y desarrollo."],
  ["05", "Valoracion de idoneidad parental y custodia", "Apoyo tecnico en procesos de familia y custodia."],
  ["06", "Valoracion del riesgo de comportamiento violento", "Estimacion del riesgo con instrumentos especializados."],
  ["07", "Valoracion de capacidad de testar", "Evaluacion de la capacidad mental para otorgar testamento."],
  ["08", "Metapericias", "Analisis critico de la calidad metodologica de un peritaje."],
  ["09", "Contraperitajes", "Refutacion tecnica de peritajes presentados por la contraparte."],
  ["10", "Asesoria tecnico-cientifica", "Apoyo experto en interrogatorio, contrainterrogatorio y teoria del caso."],
];

const why = [
  ["◇", "Rigor cientifico", "Evaluaciones fundamentadas en metodologias validadas y evidencia actualizada."],
  ["⚖", "Imparcialidad", "Informes objetivos al servicio de la verdad procesal, no de una de las partes."],
  ["🔒", "Confidencialidad", "Manejo reservado y etico de toda la informacion del caso."],
  ["§", "Fundamentacion tecnica", "Informes claros, defendibles y sustentables para su ratificacion en sala."],
];

const steps = [
  ["1", "Consulta inicial", "Estudio del caso y orientacion sobre la pertinencia del servicio requerido."],
  ["2", "Evaluacion forense", "Entrevistas forenses e instrumentos psicometricos objetivos segun el caso."],
  ["3", "Informe pericial", "Elaboracion del informe con analisis fundamentado en los hallazgos."],
  ["4", "Ratificacion", "Sustentacion del informe en audiencia o juicio cuando el proceso lo requiera."],
];

const faqs = [
  ["Que es un peritaje psicologico forense?", "Es una evaluacion realizada por un psicologo especializado para aportar informacion tecnica y objetiva en un proceso judicial. Su objetivo es ofrecer al juez o tribunal elementos cientificos que apoyen la toma de decisiones sobre aspectos psicologicos del caso."],
  ["Cuanto cuesta un peritaje?", "Los honorarios dependen del tipo de evaluacion, la complejidad del caso y el alcance del servicio requerido. Por eso cada caso se valora de forma individual. Agenda una consulta inicial para conocer los detalles y recibir una orientacion ajustada a tu situacion."],
  ["Cuanto tiempo toma una evaluacion?", "La duracion varia segun la complejidad del caso, el numero de personas a evaluar y la informacion disponible. En la consulta inicial se define un estimado realista para tu caso particular."],
  ["Necesito un abogado para contratar un peritaje?", "No es obligatorio. Puedes solicitar una evaluacion o asesoria de forma directa. En algunos casos, la coordinacion con tu abogado facilita que los hallazgos se integren adecuadamente al proceso."],
];

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [privOpen, setPrivOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.alert(
      "Gracias por tu solicitud. Te contactaremos pronto.\n\n(Nota para el editor: conectar este formulario a un correo o servicio de envio.)"
    );
    e.currentTarget.reset();
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
          <button className="burger" aria-label="Menu" onClick={() => setNavOpen((v) => !v)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Psicologia forense · Colombia</span>
            <h1>Evaluacion <em>psicologica</em> forense</h1>
            <p className="lead">Peritajes y asesorias psico-juridicas con rigor cientifico, al servicio de decisiones judiciales claras y fundamentadas.</p>
            <div className="hero-actions">
              <a href="#contacto" className="btn btn-primary">Agendar consulta</a>
              <a href="#servicios" className="btn btn-ghost">Ver servicios</a>
            </div>
          </div>
          <div className="hero-card">
            <h3>Areas de actuacion</h3>
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
            <p>En Psiforensic la evaluacion forense se fundamenta en el estado del arte de la ciencia psicologica. Integramos los avances mas recientes y rigurosos en neuropsicologia, evaluacion de la credibilidad y analisis del comportamiento para ofrecer peritajes actualizados, tecnicamente solidos y defendibles.</p>
            <p>Cada informe traduce el conocimiento cientifico de vanguardia en evidencia clara y util para la toma de decisiones judiciales, con objetividad e imparcialidad como principios rectores.</p>
            <div className="sign">
              <strong>Laura Quintero</strong>
              <em>Psicologa especialista en criminologia y psicologia forense aplicada. Doctorante en Psicologia. Investigacion cientifica en psicologia.</em>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Servicios</span>
            <h2>Servicios psicojuridicos y forenses</h2>
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

      {/* POR QUE */}
      <section className="why">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Por que elegir Psiforensic</span>
            <h2>Rigor, objetividad y defensa tecnica</h2>
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
            <h2>Como trabajamos tu caso</h2>
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
          <h2>Atencion a nivel nacional</h2>
          <div className="cities">
            <span className="chip">Barranquilla</span>
            <span className="chip">Bogota</span>
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
            <p className="intro">Cuentanos brevemente sobre tu caso. En la consulta inicial estudiamos la situacion y te orientamos sobre el servicio mas adecuado.</p>
            <div className="contact-row"><div className="ic">&#9993;</div><div><b>Correo</b><span>lauraquintero@psiforensic.com</span></div></div>
            <div className="contact-row"><div className="ic">&#9990;</div><div><b>WhatsApp</b><span><a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: "var(--gold)", fontWeight: 600 }}>Escribenos por WhatsApp</a></span></div></div>
            <div className="contact-row"><div className="ic">&#9906;</div><div><b>Ubicacion</b><span>Barranquilla · Bogota · Cobertura nacional</span></div></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="field"><label>Nombre completo</label><input type="text" name="nombre" required /></div>
            <div className="field"><label>Correo electronico</label><input type="email" name="correo" required /></div>
            <div className="field"><label>Telefono</label><input type="tel" name="telefono" /></div>
            <div className="field">
              <label>Tipo de servicio</label>
              <select name="servicio" defaultValue="">
                <option value="">Selecciona una opcion</option>
                <option>Evaluacion de credibilidad de testimonio</option>
                <option>Evaluacion de dano y secuelas psicologicas</option>
                <option>Evaluacion de victimas y agresores</option>
                <option>Evaluacion forense de ninos, ninas y adolescentes</option>
                <option>Idoneidad parental y custodia</option>
                <option>Riesgo de comportamiento violento</option>
                <option>Capacidad de testar</option>
                <option>Metapericia</option>
                <option>Contraperitaje</option>
                <option>Asesoria tecnico-cientifica</option>
                <option>Otro / No estoy seguro</option>
              </select>
            </div>
            <div className="field"><label>Cuentanos brevemente tu caso</label><textarea name="mensaje" /></div>
            <label className="consent">
              <input type="checkbox" required />
              <span>Autorizo el tratamiento de mis datos conforme a la <a onClick={(e) => { e.preventDefault(); setPrivOpen(true); }}>Politica de Privacidad</a>.</span>
            </label>
            <button type="submit" className="btn btn-primary">Enviar solicitud</button>
            <p className="form-note">Tu informacion se maneja de forma confidencial.</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div>
              <a href="#inicio" className="brand"><Logo />Psi<span className="accent">forensic</span></a>
              <p className="tag">Evaluacion psicologica forense con rigor cientifico. Peritajes, contraperitajes, metapericias y asesoria tecnico-cientifica.</p>
            </div>
            <div>
              <h4>Navegacion</h4>
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
                <li><a href="mailto:lauraquintero@psiforensic.com">lauraquintero@psiforensic.com</a></li>
                <li><a href={WA_LINK} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a onClick={(e) => { e.preventDefault(); setPrivOpen(true); }} style={{ cursor: "pointer" }}>Politica de Privacidad</a></li>
              </ul>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 Psiforensic. Todos los derechos reservados.</span>
            <span>Laura Quintero · Psicologia Forense</span>
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
          <p>En cumplimiento de la Ley 1581 de 2012, los datos que suministras a traves de este formulario (nombre, correo y telefono) seran tratados de forma confidencial y unicamente para responder tu solicitud y coordinar una consulta inicial. No se solicitan datos sensibles a traves de este sitio.</p>
          <h4>Tus derechos</h4>
          <p>Como titular, puedes conocer, actualizar, rectificar o suprimir tus datos y revocar esta autorizacion escribiendo a lauraquintero@psiforensic.com.</p>
          <h4>Autorizacion</h4>
          <p>Al enviar este formulario, autorizas el tratamiento de tus datos para los fines descritos en este aviso.</p>
        </div>
      </div>
    </>
  );
}
