"use client";

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="24" r="20" stroke="currentColor" strokeWidth="1.5" />
        <path d="M24 14v10l6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Terapia Individual",
    description: "Sesiones personalizadas enfocadas en tu bienestar emocional, autoconocimiento y crecimiento personal. Trabajamos juntos en un espacio seguro y confidencial.",
    features: ["Ansiedad y estres", "Depresion", "Autoestima", "Duelo y perdidas"],
    featured: false,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M16 26c0-4.418 3.582-8 8-8s8 4.418 8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 26c0-6.627 5.373-12 12-12s12 5.373 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="20" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="28" cy="32" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 32h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Terapia de Pareja",
    description: "Fortalece tu relacion a traves de una comunicacion efectiva y herramientas concretas para resolver conflictos y reconectarte emocionalmente.",
    features: ["Comunicacion efectiva", "Resolucion de conflictos", "Reconexion emocional", "Crisis de pareja"],
    featured: true,
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <circle cx="24" cy="16" r="6" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="14" cy="22" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="34" cy="22" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 40c0-6 4.5-9 9-9h10c4.5 0 9 3 9 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Terapia Familiar",
    description: "Mejora la dinamica familiar, resuelve conflictos y fortalece los vinculos entre los miembros de tu familia con herramientas practicas.",
    features: ["Dinamica familiar", "Limites saludables", "Crianza positiva", "Adolescencia"],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 relative z-[1] bg-[var(--color-warm-light)] stripe-v">
      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
            Como puedo <em className="italic text-[var(--color-accent)]">ayudarte</em>
          </h2>
          <p className="text-[var(--color-text-light)] max-w-xl mx-auto leading-relaxed">
            Ofrezco diferentes modalidades de terapia adaptadas a tus necesidades especificas
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className={`interactive group relative rounded-3xl p-10 transition-all duration-500 overflow-hidden scroll-reveal ${
                s.featured
                  ? "bg-[var(--color-primary)] text-white shadow-xl"
                  : "bg-white shadow-sm hover:shadow-xl hover:-translate-y-2"
              }`}
            >
              {/* Top bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 transition-transform duration-500 origin-left ${
                  s.featured
                    ? "bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-light)] scale-x-100"
                    : "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] scale-x-0 group-hover:scale-x-100"
                }`}
              />

              {/* Badge */}
              {s.featured && (
                <span className="absolute top-4 right-4 bg-[var(--color-gold)] text-[var(--color-primary)] text-[0.65rem] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className={`mb-6 ${s.featured ? "text-[var(--color-gold-light)]" : "text-[var(--color-primary)]"}`}>
                {s.icon}
              </div>

              {/* Content */}
              <h3
                className="text-xl font-bold mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {s.title}
              </h3>
              <p className={`text-[0.95rem] leading-relaxed mb-6 ${s.featured ? "text-white/80" : "text-[var(--color-text-light)]"}`}>
                {s.description}
              </p>

              {/* Features */}
              <ul className="mb-6 space-y-2">
                {s.features.map((f, j) => (
                  <li
                    key={j}
                    className={`text-sm pl-6 relative ${s.featured ? "text-white/70" : "text-[var(--color-text-light)]"}`}
                  >
                    <span className={`absolute left-0 font-bold ${s.featured ? "text-[var(--color-gold-light)]" : "text-[var(--color-gold)]"}`}>
                      &#10003;
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contacto"
                onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
                className={`inline-flex items-center gap-2 text-sm font-semibold group/link ${
                  s.featured ? "text-[var(--color-gold-light)]" : "text-[var(--color-accent)]"
                }`}
              >
                Saber mas
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
