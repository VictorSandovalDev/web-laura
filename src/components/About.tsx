"use client";

import Image from "next/image";
import basePath from "@/lib/basePath";

export default function About() {
  return (
    <section id="sobre-mi" className="py-16 sm:py-28 relative z-[1] bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-20 items-center">
          {/* Images */}
          <div className="relative scroll-reveal">
            <div className="w-[85%] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(15,28,56,0.1)]">
              <Image
                src={`${basePath}/images/generated-1775007861727.png`}
                alt="Laura Quintero · Psicologia forense"
                width={500}
                height={400}
                unoptimized
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-8 right-0 w-[55%] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={`${basePath}/images/generated-1775008203555.png`}
                alt="Consultorio profesional"
                width={300}
                height={250}
                unoptimized
                className="w-full h-[250px] object-cover"
              />
            </div>
            <div className="absolute top-5 right-5 bg-white px-5 py-4 rounded-2xl shadow-lg text-center z-[3] animate-[blobFloat_4s_ease-in-out_infinite]">
              <span className="block text-3xl font-bold text-[var(--color-accent)] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>PhD<span className="text-base align-top">(c)</span></span>
              <span className="text-xs text-[var(--color-text-light)] font-medium">Doctorante en Psicologia</span>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-reveal">
            <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
              Sobre Psiforensic
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
              Ciencia de vanguardia al servicio de la <em className="italic text-[var(--color-accent)]">justicia</em>
            </h2>
            <p className="text-[var(--color-text-light)] mb-4 leading-relaxed">
              En Psiforensic la evaluacion forense se fundamenta en el estado del arte de la ciencia psicologica. Integramos los avances mas recientes y rigurosos en neuropsicologia, evaluacion de la credibilidad y analisis del comportamiento para ofrecer peritajes actualizados, tecnicamente solidos y defendibles.
            </p>
            <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
              Cada informe traduce el conocimiento cientifico de vanguardia en evidencia clara y util para la toma de decisiones judiciales, con objetividad e imparcialidad como principios rectores.
            </p>

            <div className="pt-7 border-t border-[var(--color-warm-dark)]">
              <strong className="block text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: "var(--font-cormorant)" }}>
                Laura Quintero
              </strong>
              <em className="block not-italic text-sm text-[var(--color-gold)] mt-2 leading-relaxed">
                Psicologa especialista en criminologia y psicologia forense aplicada. Doctorante en Psicologia. Investigacion cientifica en psicologia.
              </em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
