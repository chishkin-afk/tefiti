"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "./reveal.module.scss";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Content is visible by default, including without JavaScript.
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.pending = "true";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { delete el.dataset.pending; observer.disconnect(); }
    }, { threshold: 0.08 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${styles.reveal} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}
