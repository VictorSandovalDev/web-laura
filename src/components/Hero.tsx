"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative z-[1] pt-28 pb-16 px-6">
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <p
            className="text-sm font-medium tracking-[2px] uppercase text-[var(--color-gold)] mb-3 opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_forwards]"
          >
            Bienvenido/a al espacio de
          </p>
          <h1
            className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-2 text-[var(--color-primary)] opacity-0 animate-[fadeInUp_0.8s_ease_0.4s_forwards]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            <span className="block">Laura Juliana</span>
            <span className="block text-[var(--color-accent)]">Quintero Navarro</span>
          </h1>
          <p
            className="text-xl italic text-[var(--color-gold)] mb-5 opacity-0 animate-[fadeInUp_0.8s_ease_0.6s_forwards]"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Psicologia Clinica
          </p>
          <p className="text-base text-[var(--color-text-light)] max-w-[480px] mx-auto lg:mx-0 mb-9 leading-relaxed opacity-0 animate-[fadeInUp_0.8s_ease_0.8s_forwards]">
            Un espacio seguro donde encontraras acompanamiento profesional para tu crecimiento personal y bienestar emocional.
          </p>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start opacity-0 animate-[fadeInUp_0.8s_ease_1s_forwards]">
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[0.95rem] font-medium bg-[var(--color-accent)] text-white hover:bg-[var(--color-primary)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(121,6,4,0.3)]"
            >
              Agenda tu Cita
            </a>
            <a
              href="#sobre-mi"
              onClick={(e) => { e.preventDefault(); document.querySelector("#sobre-mi")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-[0.95rem] font-medium border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all duration-300 hover:-translate-y-1"
            >
              Conoceme
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center opacity-0 animate-[fadeInScale_1s_ease_0.6s_forwards] scale-90">
          <div className="relative w-[320px] h-[400px] sm:w-[400px] sm:h-[500px]">
            <div className="absolute -top-5 -right-5 w-full h-full bg-[var(--color-gold)] rounded-3xl opacity-20 z-[1] animate-[blobFloat_6s_ease-in-out_infinite]" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 border-3 border-[var(--color-accent)] rounded-3xl opacity-35 z-[1] animate-[blobFloat_8s_ease-in-out_infinite_reverse]" />
            <Image
              src="/images/generated-1775007848916.png"
              alt="Ps. Laura Juliana Quintero Navarro"
              fill
              priority
              unoptimized
              className="object-cover rounded-3xl relative z-[2] shadow-[0_20px_60px_rgba(15,28,56,0.1)]"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 max-lg:hidden">
        <div className="w-[26px] h-10 border-2 border-[var(--color-text-light)] rounded-[13px] flex justify-center pt-2">
          <div className="w-[3px] h-2 bg-[var(--color-text-light)] rounded animate-[scrollWheel_2s_ease-in-out_infinite]" />
        </div>
        <span className="text-[0.7rem] tracking-[2px] uppercase text-[var(--color-text-light)]">Desliza hacia abajo</span>
      </div>
    </section>
  );
}
