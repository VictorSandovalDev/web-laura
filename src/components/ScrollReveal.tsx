"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Small delay to ensure all components are mounted
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
      );

      document.querySelectorAll(".scroll-reveal").forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return null;
}
