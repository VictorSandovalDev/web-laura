"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let cx = 0, cy = 0, fx = 0, fy = 0;

    const onMove = (e: MouseEvent) => { cx = e.clientX; cy = e.clientY; };
    document.addEventListener("mousemove", onMove);

    let animId: number;
    function update() {
      fx += (cx - fx) * 0.15;
      fy += (cy - fy) * 0.15;
      cursor!.style.transform = `translate(${cx - 6}px, ${cy - 6}px)`;
      follower!.style.transform = `translate(${fx - 20}px, ${fy - 20}px)`;
      animId = requestAnimationFrame(update);
    }
    update();

    const targets = document.querySelectorAll("a, button, .interactive");
    const enter = () => { cursor.classList.add("hovering"); follower.classList.add("hovering"); };
    const leave = () => { cursor.classList.remove("hovering"); follower.classList.remove("hovering"); };

    targets.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMove);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
