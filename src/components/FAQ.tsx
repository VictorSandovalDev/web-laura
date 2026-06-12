"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Que es un peritaje psicologico forense?",
    a: "Es una evaluacion realizada por un psicologo especializado para aportar informacion tecnica y objetiva en un proceso judicial. Su objetivo es ofrecer al juez o tribunal elementos cientificos que apoyen la toma de decisiones sobre aspectos psicologicos del caso.",
  },
  {
    q: "Cuanto cuesta un peritaje?",
    a: "Los honorarios dependen del tipo de evaluacion, la complejidad del caso y el alcance del servicio requerido. Por eso cada caso se valora de forma individual. Agenda una consulta inicial para conocer los detalles y recibir una orientacion ajustada a tu situacion.",
  },
  {
    q: "Cuanto tiempo toma una evaluacion?",
    a: "La duracion varia segun la complejidad del caso, el numero de personas a evaluar y la informacion disponible. En la consulta inicial se define un estimado realista para tu caso particular.",
  },
  {
    q: "Necesito un abogado para contratar un peritaje?",
    a: "No es obligatorio. Puedes solicitar una evaluacion o asesoria de forma directa. En algunos casos, la coordinacion con tu abogado facilita que los hallazgos se integren adecuadamente al proceso.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-[820px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Preguntas frecuentes
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Resuelve tus <em className="italic text-[var(--color-accent)]">dudas</em>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="interactive bg-white rounded-2xl shadow-sm overflow-hidden scroll-reveal transition-all duration-300"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-6 sm:px-8 py-5"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-semibold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {f.q}
                  </span>
                  <span
                    className={`flex-shrink-0 text-2xl text-[var(--color-gold)] transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 text-[0.95rem] text-[var(--color-text-light)] leading-relaxed">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
