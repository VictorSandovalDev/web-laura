"use client";

import { useState } from "react";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "contacto@laurajulianapsicologia.com",
    color: "bg-[var(--color-accent)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "Telefono",
    value: "+57 300 123 4567",
    color: "bg-[var(--color-accent)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "Ubicacion",
    value: "Bogota, Colombia",
    color: "bg-[var(--color-accent)]",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.227A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.332-1.543l-.382-.229-2.768.728.741-2.71-.25-.398A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "Escribeme directamente",
    color: "bg-[#25D366]",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="py-28 relative z-[1] bg-[var(--color-warm-light)] stripe-v">
      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="scroll-reveal">
            <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
              Contacto
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
              Comienza tu camino hacia el <em className="italic text-[var(--color-accent)]">bienestar</em>
            </h2>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-8">
              Dar el primer paso es lo mas importante. Estoy aqui para acompanarte. No dudes en contactarme para agendar tu primera cita o resolver cualquier duda.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              {contactInfo.map((c, i) => (
                <div
                  key={i}
                  className="interactive flex items-center gap-4 p-4 rounded-2xl bg-white hover:translate-x-2 hover:shadow-sm transition-all duration-400"
                >
                  <div className={`w-11 h-11 ${c.color} text-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                    {c.icon}
                  </div>
                  <div>
                    <strong className="block text-sm text-[var(--color-text)]">{c.label}</strong>
                    <span className="text-sm text-[var(--color-text-light)]">{c.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {["Instagram", "Facebook", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="interactive w-11 h-11 rounded-full border border-[var(--color-text-lighter)] text-[var(--color-text-light)] flex items-center justify-center text-sm font-bold hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] hover:text-white hover:-translate-y-1 transition-all duration-300"
                  aria-label={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg scroll-reveal">
            <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-8" style={{ fontFamily: "var(--font-cormorant)" }}>
              Agenda tu primera cita
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" id="name" name="name" required placeholder=" " />
                <label htmlFor="name">Nombre completo</label>
                <div className="form-line" />
              </div>
              <div className="form-group">
                <input type="email" id="email" name="email" required placeholder=" " />
                <label htmlFor="email">Correo electronico</label>
                <div className="form-line" />
              </div>
              <div className="form-group">
                <input type="tel" id="phone" name="phone" placeholder=" " />
                <label htmlFor="phone">Telefono</label>
                <div className="form-line" />
              </div>
              <div className="form-group">
                <select id="service" name="service" required defaultValue="">
                  <option value="" disabled />
                  <option value="individual">Terapia Individual</option>
                  <option value="pareja">Terapia de Pareja</option>
                  <option value="familiar">Terapia Familiar</option>
                </select>
                <label htmlFor="service">Tipo de terapia</label>
                <div className="form-line" />
              </div>
              <div className="form-group">
                <textarea id="message" name="message" rows={4} placeholder=" " style={{ resize: "vertical", minHeight: 100 }} />
                <label htmlFor="message">Cuentame brevemente tu situacion</label>
                <div className="form-line" />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-full text-[0.95rem] font-medium bg-[var(--color-accent)] text-white hover:bg-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(121,6,4,0.3)]"
              >
                {submitted ? "Mensaje Enviado!" : "Enviar Mensaje"}
              </button>
              <p className="text-center text-xs text-[var(--color-text-lighter)] mt-4">
                Tu informacion es completamente confidencial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
