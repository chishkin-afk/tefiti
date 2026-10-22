"use client";
import Image from "next/image";
import { useHeroParallax } from "../../lib/use-hero-parallax";
import { LiquidGlass } from "@/shared/ui/liquid-glass/liquid-glass";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./hero.module.scss";
export function Hero() {
  const {root,image,label,headline}=useHeroParallax();
  return <section ref={root} id="home" className={styles.hero} aria-labelledby="hero-title"><div className={`container ${styles.grid}`}>
    <div className={styles.copy}><div ref={headline}><h1 id="hero-title">Кофе.<br />В чистом<br /><span className={styles.outlined}><span className={styles.outlinedText}>виде.</span></span></h1></div><p className={styles.description}>Насыщенный кофе. Хрустящие слои.<br />Небольшая пауза, которой не хватало<br />в твоём дне.</p><div className={styles.actions}><a href="#menu" className="button">Открыть меню <Icon name="arrow" width="16" height="16" /></a></div>
    </div>
    <div className={styles.visual}><div className={styles.stage}><div ref={image} className={styles.picture}><Image src="/assets/images/hero.webp" alt="Чашка флэт уайта из матовой стали и круассан на светлом камне — предметная композиция студии Слой" fill preload sizes="(max-width:700px) 95vw, 54vw" /></div></div>
      <div ref={label} className={styles.floating}><LiquidGlass strong><div className={styles.floatingContent}><p>Идеальный баланс.<span>Двойной эспрессо.<br />Шёлковая молочная пена.</span></p><a href="#menu" className={styles.floatingArrow} aria-label="Посмотреть кофе в меню">↗</a></div></LiquidGlass></div>
    </div>
  </div></section>;
}
