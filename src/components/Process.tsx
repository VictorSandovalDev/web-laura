"use client";

const steps = [
  { num: 1, title: "Consulta inicial", desc: "Estudio del caso y orientacion sobre la pertinencia del servicio requerido." },
  { num: 2, title: "Evaluacion forense", desc: "Entrevistas forenses e instrumentos psicometricos objetivos segun el caso." },
  { num: 3, title: "Informe pericial", desc: "Elaboracion del informe con analisis fundamentado en los hallazgos." },
  { num: 4, title: "Ratificacion", desc: "Sustentacion del informe en audiencia o juicio cuando el proceso lo requiera." },
];

export default function Process() {
  return (
    <section id="procedimiento" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-warm-light)] stripe-h">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-[1]">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Procedimiento
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Como trabajamos tu <em className="italic text-[var(--color-accent)]">caso</em>
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden md:grid grid-cols-4 relative max-w-[1000px] mx-auto">
          <div className="absolute top-7 left-[14%] right-[14%] h-[2px] bg-[var(--color-warm-dark)]" />
          {steps.map((s) => (
            <div key={s.num} className="text-center relative px-3 scroll-reveal group">
              <div className="w-14 h-14 rounded-full bg-white border-3 border-[var(--color-accent)] flex items-center justify-center mx-auto mb-5 relative z-[2] transition-all duration-400 group-hover:bg-[var(--color-accent)] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_8px_25px_rgba(121,6,4,0.3)]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <span className="text-xl font-bold text-[var(--color-accent)] group-hover:text-white">{s.num}</span>
              </div>
              <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                {s.title}
              </h4>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-8 relative pl-14">
          <div className="absolute top-0 bottom-0 left-7 w-[2px] bg-[var(--color-warm-dark)]" />
          {steps.map((s) => (
            <div key={s.num} className="relative scroll-reveal">
              <div className="absolute -left-14 top-0 w-14 h-14 rounded-full bg-white border-3 border-[var(--color-accent)] flex items-center justify-center z-[2]"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                <span className="text-xl font-bold text-[var(--color-accent)]">{s.num}</span>
              </div>
              <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-1" style={{ fontFamily: "var(--font-cormorant)" }}>
                {s.title}
              </h4>
              <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
