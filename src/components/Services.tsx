"use client";

const services = [
  { num: "01", title: "Evaluacion de credibilidad de testimonio", description: "Analisis tecnico de la credibilidad del relato en contextos judiciales." },
  { num: "02", title: "Evaluacion de dano y secuelas psicologicas", description: "Valoracion del impacto psicologico derivado de un hecho." },
  { num: "03", title: "Evaluacion de victimas y agresores", description: "Casos de abuso sexual y violencia intrafamiliar." },
  { num: "04", title: "Evaluacion forense de ninos, ninas y adolescentes", description: "Entrevista forense y valoracion adaptada a su edad y desarrollo." },
  { num: "05", title: "Valoracion de idoneidad parental y custodia", description: "Apoyo tecnico en procesos de familia y custodia." },
  { num: "06", title: "Valoracion del riesgo de comportamiento violento", description: "Estimacion del riesgo con instrumentos especializados." },
  { num: "07", title: "Valoracion de capacidad de testar", description: "Evaluacion de la capacidad mental para otorgar testamento." },
  { num: "08", title: "Metapericias", description: "Analisis critico de la calidad metodologica de un peritaje." },
  { num: "09", title: "Contraperitajes", description: "Refutacion tecnica de peritajes presentados por la contraparte." },
  { num: "10", title: "Asesoria tecnico-cientifica", description: "Apoyo experto en interrogatorio, contrainterrogatorio y teoria del caso." },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-warm-light)] stripe-v">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-[1]">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Servicios
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
            Servicios psicojuridicos y <em className="italic text-[var(--color-accent)]">forenses</em>
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-text-light)] max-w-xl mx-auto leading-relaxed">
            Evaluaciones e informes periciales fundamentados en evidencia, aplicables a procesos penales, de familia, civiles y laborales.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {services.map((s, i) => (
            <div
              key={i}
              className="interactive group relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 overflow-hidden scroll-reveal bg-white shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              {/* Top bar */}
              <div className="absolute top-0 left-0 right-0 h-1 transition-transform duration-500 origin-left bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-gold)] scale-x-0 group-hover:scale-x-100" />

              {/* Number */}
              <span className="block text-lg font-bold text-[var(--color-gold)] mb-3" style={{ fontFamily: "var(--font-cormorant)" }}>
                {s.num}
              </span>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
                {s.title}
              </h3>
              <p className="text-[0.95rem] leading-relaxed text-[var(--color-text-light)]">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
