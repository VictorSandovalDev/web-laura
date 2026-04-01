"use client";

import Image from "next/image";
import basePath from "@/lib/basePath";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const duration = 2000;
          function update(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(update);
          }
          requestAnimationFrame(update);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl font-bold text-[var(--color-accent)]" style={{ fontFamily: "var(--font-cormorant)" }}>
      {value}{suffix}
    </span>
  );
}

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
                alt="Laura Juliana en su consultorio"
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
              <span className="block text-3xl font-bold text-[var(--color-accent)] leading-none" style={{ fontFamily: "var(--font-cormorant)" }}>+10</span>
              <span className="text-xs text-[var(--color-text-light)] font-medium">Anos de experiencia</span>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-reveal">
            <span className="inline-block text-xs font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-4 pl-10 relative before:absolute before:left-0 before:top-1/2 before:w-7 before:h-[2px] before:bg-[var(--color-gold)]">
              Sobre Mi
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] leading-tight mb-5" style={{ fontFamily: "var(--font-cormorant)" }}>
              Un camino dedicado al <em className="italic text-[var(--color-accent)]">bienestar emocional</em>
            </h2>
            <p className="text-[var(--color-text-light)] mb-4 leading-relaxed">
              Soy Laura Juliana Quintero Navarro, psicologa clinica con una profunda vocacion por acompanar a las personas en sus procesos de transformacion personal. Mi enfoque se centra en crear un espacio de confianza y empatia donde puedas explorar tus emociones con total libertad.
            </p>
            <p className="text-[var(--color-text-light)] mb-8 leading-relaxed">
              A lo largo de mi trayectoria profesional, he trabajado con personas de diversas edades y contextos, ayudandoles a superar momentos dificiles, fortalecer sus relaciones y descubrir su potencial interior.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--color-warm-dark)]">
              <div className="text-center">
                <Counter target={500} suffix="+" />
                <span className="block text-xs text-[var(--color-text-light)] mt-1">Pacientes atendidos</span>
              </div>
              <div className="text-center">
                <Counter target={10} suffix="+" />
                <span className="block text-xs text-[var(--color-text-light)] mt-1">Anos de experiencia</span>
              </div>
              <div className="text-center">
                <Counter target={3} />
                <span className="block text-xs text-[var(--color-text-light)] mt-1">Especialidades</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
