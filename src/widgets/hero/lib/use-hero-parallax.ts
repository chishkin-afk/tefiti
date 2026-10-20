"use client";

import { useEffect, useRef } from "react";

export function useHeroParallax() {
  const root = useRef<HTMLElement>(null);
  const portrait = useRef<HTMLDivElement>(null);
  const dessert = useRef<HTMLDivElement>(null);
  const shell = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;
    let frame = 0;
    let visible = true;
    const draw = () => {
      frame = 0;
      if (!root.current) return;
      const rect = root.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / rect.height));
      const multiplier = window.innerWidth < 700 ? .45 : 1;
      if (portrait.current) portrait.current.style.transform = `translate3d(0, ${progress * 95 * multiplier}px, 0) scale(1.12)`;
      if (dessert.current) dessert.current.style.transform = `translate3d(0, ${-progress * 130 * multiplier}px, 0) rotate(${-8 + progress * 6}deg)`;
      if (shell.current) shell.current.style.transform = `translate3d(0, ${progress * 60 * multiplier}px, 0) rotate(${progress * 12}deg)`;
    };
    const schedule = () => { if (visible && !frame) frame = requestAnimationFrame(draw); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) schedule(); });
    if (root.current) observer.observe(root.current);
    const onMotionChange = () => {
      if (reduced.matches) {
        cancelAnimationFrame(frame); frame = 0;
        for (const ref of [portrait, dessert, shell]) if (ref.current) ref.current.style.transform = "";
      } else schedule();
    };
    const onScroll = () => { if (!reduced.matches) schedule(); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    reduced.addEventListener("change", onMotionChange);
    draw();
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); reduced.removeEventListener("change", onMotionChange); };
  }, []);
  return { root, portrait, dessert, shell };
}
