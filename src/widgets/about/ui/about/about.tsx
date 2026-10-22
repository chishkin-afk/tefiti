import Image from "next/image";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { BrandMark } from "@/shared/ui/brand-mark/brand-mark";
import { ScrollObject } from "@/shared/ui/scroll-object/scroll-object";
import { LiquidGlass } from "@/shared/ui/liquid-glass/liquid-glass";
import styles from "./about.module.scss";
export function About(){
  return <section className={`section ${styles.section}`} id="about" aria-labelledby="about-title"><div className="container"><Reveal className={styles.heading}><h2 id="about-title">Меньше шума.<br/>Больше ощущения.</h2><div><p>Слой — идея места, где простые вещи<br/>сделаны с особым вниманием.<br/>К кофе. К деталям. К тебе.</p><a href="#signature" className="circleButton" aria-label="Узнать о фирменной выпечке">↗</a></div></Reveal><div className={styles.grid}>
  <Reveal className={styles.dark}><h3>Вкус, которому<br/>не нужен повод.</h3><p>Хороший кофе — уже<br/>достаточная причина.</p><ScrollObject className={styles.bigMark} travel={50} rotate={14}><BrandMark/></ScrollObject></Reveal>
  <Reveal className={styles.photoCard} delay={60}><ScrollObject className={styles.coffeeObject} travel={55} rotate={-4}><Image src="/assets/images/iced-coffee.webp" alt="Айс-латте в прозрачном стакане с молоком и льдом" fill sizes="(max-width:650px) 90vw,30vw"/></ScrollObject><LiquidGlass className={styles.photoCaption}><p>Холодный.<br/>Но с характером.</p></LiquidGlass></Reveal>
  <Reveal className={styles.quiet} delay={120}><h3>Оставь день<br/>за дверью.</h3><p>Есть только этот момент.<br/>И твоя чашка.</p><div className={styles.sculpture} aria-hidden="true"><ScrollObject travel={45} rotate={-12}><span/><span/><span/></ScrollObject></div><a href="#contacts" className="circleButton" aria-label="О концепции студии">↗</a></Reveal>
  </div></div></section>;
}
