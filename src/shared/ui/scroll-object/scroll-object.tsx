"use client";
import { useEffect, useRef, type ReactNode } from "react";
export function ScrollObject({ children, className = "", travel = 55, rotate = 0 }: { children: ReactNode; className?: string; travel?: number; rotate?: number }) {
  const outer = useRef<HTMLDivElement>(null); const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)"); let frame = 0; let active = false;
    const draw = () => {
      frame = 0; if (!outer.current || !inner.current || motion.matches) return;
      const rect = outer.current.getBoundingClientRect();
      const progress = Math.max(-1,Math.min(1,(window.innerHeight / 2 - rect.top - rect.height / 2) / window.innerHeight));
      const distance = window.innerWidth < 700 ? travel * .45 : travel;
      inner.current.style.transform = `translate3d(0, ${progress * distance}px, 0) rotate(${progress * rotate}deg)`;
    };
    const schedule = () => { if (active && !frame) frame = requestAnimationFrame(draw); };
    const observer = new IntersectionObserver(([entry]) => { active = entry.isIntersecting; if (active) schedule(); });
    if (outer.current) observer.observe(outer.current);
    const change = () => { if (motion.matches && inner.current) inner.current.style.transform = ""; else schedule(); };
    window.addEventListener("scroll",schedule,{ passive:true }); window.addEventListener("resize",schedule,{ passive:true }); motion.addEventListener("change",change);
    return () => { cancelAnimationFrame(frame); observer.disconnect(); window.removeEventListener("scroll",schedule); window.removeEventListener("resize",schedule); motion.removeEventListener("change",change); };
  },[travel,rotate]);
  return <div ref={outer} className={className}><div ref={inner}>{children}</div></div>;
}
