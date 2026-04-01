"use client";

const links = [
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-[var(--color-primary)] text-white py-16 pb-8 overflow-hidden">
      {/* Stripe texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.02) 50px, rgba(255,255,255,0.02) 52px)"
      }} />

      <div className="max-w-[1200px] mx-auto px-6 text-center relative z-[1]">
        <div className="mb-7">
          <span className="text-3xl text-[var(--color-gold)]">&#10047;</span>
          <h3 className="text-xl mt-2" style={{ fontFamily: "var(--font-cormorant)" }}>
            Ps. Laura Juliana Quintero Navarro
          </h3>
          <p className="text-sm text-white/50 mt-1">Psicologia Clinica - Bogota, Colombia</p>
        </div>

        <div className="flex justify-center gap-7 flex-wrap mb-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: "smooth" }); }}
              className="text-sm text-white/60 hover:text-[var(--color-gold)] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="pt-7 border-t border-white/10">
          <p className="text-xs text-white/40">
            &copy; 2026 Laura Juliana Quintero Navarro. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
