"use client";
import { useEffect, useId, useRef, type CSSProperties, type PointerEvent, type ReactNode } from "react";
import styles from "./liquid-glass.module.scss";
export function LiquidGlass({ children, className = "", strong = false }: { children: ReactNode; className?: string; strong?: boolean }) {
  const id = `glass-${useId().replace(/:/g, "")}`;
  const surface = useRef<HTMLDivElement>(null);
  const sheen = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    // SVG backdrop displacement is supported by Blink. Other engines retain the frosted surface.
    const ua = navigator.userAgent;
    if (/Chrome\/|Chromium\/|Edg\//.test(ua) && !/iPhone|iPad|iPod/.test(ua)) {
      surface.current?.setAttribute("data-refraction", "true");
    }
  }, []);
  function move(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    if (sheen.current) sheen.current.style.transform = `translate3d(${x * 90}px, ${y * 55}px, 0) rotate(-25deg)`;
  }
  return <div ref={surface} className={`${styles.glass} ${strong ? styles.strong : ""} ${className}`} style={{ "--refraction": `url(#${id})` } as CSSProperties} onPointerMove={move} onPointerLeave={() => { if (sheen.current) sheen.current.style.transform = ""; }}>
    <svg className={styles.filter} aria-hidden="true"><defs><filter id={id} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency=".008 .016" numOctaves="1" seed="4" result="noise" /><feGaussianBlur in="noise" stdDeviation="3.5" result="softNoise" /><feDisplacementMap in="SourceGraphic" in2="softNoise" scale={strong ? 64 : 46} xChannelSelector="R" yChannelSelector="G" /></filter></defs></svg>
    <span className={styles.refraction} aria-hidden="true" /><span ref={sheen} className={styles.sheen} aria-hidden="true" /><div className={styles.content}>{children}</div>
  </div>;
}
