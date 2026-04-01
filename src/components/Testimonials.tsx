"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    text: "Laura Juliana me ayudo a entender mis emociones y a encontrar herramientas para manejar mi ansiedad. Es una profesional increible, empatica y muy dedicada.",
    name: "Maria C.",
    type: "Terapia Individual",
    initial: "M",
  },
  {
    text: "Gracias a la terapia de pareja logramos reconectarnos y comunicarnos de una manera que nunca antes habiamos podido. Estamos muy agradecidos.",
    name: "Andrea y Carlos",
    type: "Terapia de Pareja",
    initial: "A",
  },
  {
    text: "El proceso terapeutico con Laura Juliana transformo mi vida. Aprendi a valorarme, a poner limites sanos y a encontrar mi propia voz.",
    name: "Sofia R.",
    type: "Terapia Individual",
    initial: "S",
  },
  {
    text: "Como familia aprendimos a escucharnos y a resolver nuestros conflictos con amor y respeto. Laura Juliana nos guio con mucha sabiduria.",
    name: "Familia Rodriguez",
    type: "Terapia Familiar",
    initial: "F",
  },
  {
    text: "Despues de anos luchando sola con la depresion, encontre en Laura Juliana el apoyo que necesitaba. Su calidez y profesionalismo me devolvieron la esperanza.",
    name: "Daniela M.",
    type: "Terapia Individual",
    initial: "D",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const updatePerView = useCallback(() => {
    if (window.innerWidth <= 640) setCardsPerView(1);
    else if (window.innerWidth <= 968) setCardsPerView(2);
    else setCardsPerView(3);
  }, []);

  useEffect(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [updatePerView]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  return (
    <section id="testimonios" className="py-28 relative z-[1] bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Testimonios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Lo que dicen mis <em className="italic text-[var(--color-accent)]">pacientes</em>
          </h2>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-7 transition-transform duration-600 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              transform: `translateX(-${current * (100 / cardsPerView + (7 * 4) / (cardsPerView * 16))}%)`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="interactive flex-shrink-0 bg-white rounded-3xl p-9 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                style={{ width: `calc(${100 / cardsPerView}% - ${(7 * (cardsPerView - 1)) / cardsPerView * 4}px)` }}
              >
                {/* Stars */}
                <div className="text-[var(--color-gold)] text-lg tracking-wider mb-4">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>

                {/* Text */}
                <p className="text-[0.95rem] text-[var(--color-text-light)] leading-relaxed mb-6 italic" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem" }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-semibold text-lg">
                    {t.initial}
                  </div>
                  <div>
                    <strong className="block text-sm text-[var(--color-primary)]">{t.name}</strong>
                    <span className="text-xs text-[var(--color-text-lighter)]">{t.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={prev}
            className="interactive w-11 h-11 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
            aria-label="Anterior"
          >
            &#8592;
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2.5 rounded-full transition-all duration-400 ${
                  i === current ? "w-7 bg-[var(--color-accent)]" : "w-2.5 bg-[var(--color-warm-dark)]"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="interactive w-11 h-11 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
