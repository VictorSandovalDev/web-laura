"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre Mi" },
  { href: "#servicios", label: "Servicios" },
  { href: "#enfoque", label: "Enfoque" },
  { href: "#testimonios", label: "Testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
        scrolled
          ? "bg-[#F7F3EA]/95 backdrop-blur-xl py-3 shadow-[0_2px_12px_rgba(15,28,56,0.08)]"
          : "py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }}
          className="flex items-center gap-2.5"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          <span className="text-2xl text-[var(--color-gold)]">&#10047;</span>
          <span className="text-lg font-semibold text-[var(--color-primary)]">
            Ps. Laura Juliana
          </span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="text-sm font-medium text-[var(--color-text-light)] hover:text-[var(--color-primary)] relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[var(--color-gold)] after:transition-all after:duration-400 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); scrollTo("#contacto"); }}
              className="text-sm font-medium text-white bg-[var(--color-accent)] px-6 py-2.5 rounded-full hover:bg-[var(--color-primary)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agenda tu Cita
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`w-6 h-0.5 bg-[var(--color-text)] rounded transition-all ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
          <span className={`w-6 h-0.5 bg-[var(--color-text)] rounded transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-[var(--color-text)] rounded transition-all ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed top-0 right-0 w-3/4 max-w-[320px] h-screen bg-white flex flex-col pt-24 px-10 gap-6 shadow-2xl transition-transform duration-400 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {[...links, { href: "#contacto", label: "Agenda tu Cita" }].map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
            className="text-lg font-medium text-[var(--color-text-light)] hover:text-[var(--color-accent)]"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
