"use client";

import Image from "next/image";
import { useHeroParallax } from "../../lib/use-hero-parallax";
import { Shell } from "@/shared/ui/shell/shell";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./hero.module.scss";

export function Hero() {
  const { root, portrait, dessert, shell } = useHeroParallax();
  return <section ref={root} className={styles.hero} id="home" aria-labelledby="hero-title">
    <div className={`container ${styles.inner}`}>
      <div className={styles.copy}>
        <p className={styles.intro}>Кофейня в самом сердце Краснодара</p>
        <h1 id="hero-title"><span>Маленькая пауза.</span><span>Большое</span><span>удовольствие.</span></h1>
        <p className={styles.description}>Кофе, который согревает. Десерт, который<br className={styles.break} /> вы придумали сами. И время побыть собой.</p>
        <div className={styles.actions}><a href="#menu" className="button">Выбрать своё <Icon name="arrow" width="19" height="19" /></a><a href="#contacts" className={styles.visit}>Заглянуть в гости <span aria-hidden="true">↗</span></a></div>
        <div className={styles.bottom}><span className={styles.dot} />Красная, 98<span className={styles.separator} /><span>Можно с хвостиком <span aria-hidden="true">♡</span></span></div>
      </div>
      <div className={styles.visual}>
        <div className={styles.shell} ref={shell}><Shell /></div>
        <div className={styles.portrait}><div ref={portrait} className={styles.portraitInner}><Image src="/assets/photos/tefiti-03.jpg" alt="Мягкие голубые кресла и светлый интерьер кофейни Тефити на Красной улице" fill preload sizes="(max-width: 700px) 85vw, 43vw" className={styles.portraitImage} /></div></div>
        <div className={styles.dessert} ref={dessert}><Image src="/assets/photos/tefiti-08.jpg" alt="Десерт Теф с кремом и разноцветной посыпкой, собранный на свой вкус" fill sizes="(max-width: 700px) 35vw, 20vw" className={styles.dessertImage} /><span>Ваш маленький шедевр</span></div>
        <div className={styles.note}><Shell /><span>Место для<br />тёплых моментов</span></div>
      </div>
    </div>
    <div className={styles.scroll}><span>Почувствуйте Тефити</span><span className={styles.scrollLine} /></div>
    <svg className={styles.wave} viewBox="0 0 1440 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 30Q360 80 720 30T1440 30V60H0Z" fill="var(--pearl)" /></svg>
  </section>;
}
