"use client";

const steps = [
  { num: 1, title: "Primer Contacto", desc: "Agenda tu primera cita. Conversamos brevemente sobre tus necesidades para preparar nuestro encuentro." },
  { num: 2, title: "Evaluacion Inicial", desc: "En las primeras sesiones exploramos juntos tu situacion actual, tus objetivos y definimos un plan terapeutico." },
  { num: 3, title: "Proceso Terapeutico", desc: "Trabajamos sesion a sesion con herramientas y estrategias adaptadas a tu ritmo y necesidades particulares." },
  { num: 4, title: "Crecimiento y Cierre", desc: "Evaluamos tus avances, consolidamos aprendizajes y te preparamos para continuar tu camino con autonomia." },
];

export default function Process() {
  return (
    <section className="py-28 relative z-[1] bg-[var(--color-warm-light)] stripe-h">
      <div className="max-w-[1200px] mx-auto px-6 relative z-[1]">
        <div className="text-center mb-16 scroll-reveal">
          <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
            Proceso
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Como funciona la <em className="italic text-[var(--color-accent)]">terapia</em>
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
