"use client";

import Image from "next/image";
import basePath from "@/lib/basePath";

const items = [
  {
    index: "01",
    title: "Rigor cientifico",
    desc: "Evaluaciones fundamentadas en metodologias validadas y evidencia actualizada.",
  },
  {
    index: "02",
    title: "Imparcialidad",
    desc: "Informes objetivos al servicio de la verdad procesal, no de una de las partes.",
  },
  {
    index: "03",
    title: "Confidencialidad",
    desc: "Manejo reservado y etico de toda la informacion del caso.",
  },
  {
    index: "04",
    title: "Fundamentacion tecnica",
    desc: "Informes claros, defendibles y sustentables para su ratificacion en sala.",
  },
];

export default function Approach() {
  return (
    <section id="enfoque" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-start">
          {/* Content */}
          <div className="scroll-reveal">
            <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
              Por que elegir Psiforensic
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
              Rigor, objetividad y <em className="italic text-[var(--color-accent)]">defensa tecnica</em>
            </h2>
            <p className="text-[var(--color-text-light)] text-lg leading-relaxed mb-10">
              Combinamos rigor cientifico, imparcialidad y una solida fundamentacion tecnica en cada peritaje, para entregar informes claros y defendibles ante los tribunales.
            </p>

            <div className="flex flex-col gap-7">
              {items.map((item) => (
                <div
                  key={item.index}
                  className="interactive relative p-7 rounded-2xl bg-[var(--color-warm-light)] overflow-hidden transition-all duration-400 hover:bg-white hover:shadow-lg hover:translate-x-2"
                >
                  <span className="absolute top-4 right-5 text-5xl font-bold text-[var(--color-accent)] opacity-[0.12]" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {item.index}
                  </span>
                  <h4 className="text-lg font-semibold text-[var(--color-primary)] mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="scroll-reveal">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,28,56,0.1)]">
              <Image
                src={`${basePath}/images/generated-1775008223623.png`}
                alt="Psiforensic · evaluacion psicologica forense"
                width={600}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-[500px] object-cover"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-12 bg-gradient-to-t from-[rgba(15,28,56,0.9)] to-transparent text-white">
                <blockquote className="italic text-lg leading-relaxed mb-2" style={{ fontFamily: "var(--font-cormorant)" }}>
                  &ldquo;Cada informe traduce el conocimiento cientifico de vanguardia en evidencia clara y util para la toma de decisiones judiciales.&rdquo;
                </blockquote>
                <cite className="not-italic text-sm text-[var(--color-gold-light)]">- Laura Quintero · Psicologia Forense</cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
