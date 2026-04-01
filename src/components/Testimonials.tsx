"use client";

import { useState, useEffect, useCallback, useRef } from "react";

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
  const [cardsPerView, setCardsPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  const updatePerView = useCallback(() => {
    if (window.innerWidth <= 640) setCardsPerView(1);
    else if (window.innerWidth <= 1024) setCardsPerView(2);
    else setCardsPerView(3);
  }, []);

  useEffect(() => {
    updatePerView();
    window.addEventListener("resize", updatePerView);
    return () => window.removeEventListener("resize", updatePerView);
  }, [updatePerView]);

  const maxIndex = Math.max(0, testimonials.length - cardsPerView);

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex);
  }, [current, maxIndex]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(maxIndex, c + 1));

  // Touch swipe
  const touchStart = useRef(0);
  const onTouchStart = (e: React.TouchEvent) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  // Calculate offset: each card is (100/cardsPerView)% wide, gap is 28px
  const gap = 28;
  const cardWidthPercent = 100 / cardsPerView;

  return (
    <section id="testimonios" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Testimonios
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Lo que dicen mis <em className="italic text-[var(--color-accent)]">pacientes</em>
          </h2>
        </div>

        {/* Slider */}
        <div
          className="overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={{
              gap: `${gap}px`,
              transform: `translateX(calc(-${current * cardWidthPercent}% - ${current * gap}px))`,
            }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="interactive flex-shrink-0 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-9 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-400"
                style={{ width: `calc(${cardWidthPercent}% - ${(gap * (cardsPerView - 1)) / cardsPerView}px)` }}
              >
                <div className="text-[var(--color-gold)] text-lg tracking-wider mb-3">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p
                  className="text-sm sm:text-base text-[var(--color-text-light)] leading-relaxed mb-5 italic"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(0.95rem, 2vw, 1.05rem)" }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center font-semibold text-base sm:text-lg flex-shrink-0">
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
        <div className="flex items-center justify-center gap-4 sm:gap-5 mt-8 sm:mt-10">
          <button
            onClick={prev}
            className="interactive w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-lg sm:text-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
            aria-label="Anterior"
          >
            &#8592;
          </button>
          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 sm:h-2.5 rounded-full transition-all duration-400 ${
                  i === current ? "w-6 sm:w-7 bg-[var(--color-accent)]" : "w-2 sm:w-2.5 bg-[var(--color-warm-dark)]"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="interactive w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-lg sm:text-xl hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
            aria-label="Siguiente"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}
