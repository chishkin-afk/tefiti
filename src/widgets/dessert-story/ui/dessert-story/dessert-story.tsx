import Image from "next/image";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { Icon } from "@/shared/ui/icon/icon";
import { Shell } from "@/shared/ui/shell/shell";
import styles from "./dessert-story.module.scss";

export function DessertStory() {
  return <section className={styles.section} aria-labelledby="dessert-title"><div className={`container ${styles.grid}`}>
    <Reveal className={styles.imageWrap}><Image src="/assets/photos/tefiti-08.jpg" alt="Фирменный десерт Теф в руках гостьи кофейни" fill sizes="(max-width: 700px) 100vw, 45vw" className={styles.image} /><span className={styles.sticker}><Shell /><span>Только ваш.<br />Ни на чей не похожий.</span></span></Reveal>
    <Reveal className={styles.copy} delay={100}><p className={styles.kicker}>Знакомьтесь, Теф</p><h2 id="dessert-title">Немного фантазии.<br />И ваш десерт готов.</h2><p className={styles.description}>У нас можно быть автором. Соберите десерт из любимых вкусов, а мы поможем им подружиться.</p>
      <ol className={styles.steps}><li><span>1</span><div><h3>Начните с бисквита</h3><p>Пусть у вашей истории будет вкусная основа.</p></div></li><li><span>2</span><div><h3>Добавьте начинку и крем</h3><p>Выбирайте сочетание, которое нравится вам.</p></div></li><li><span>3</span><div><h3>Последний штрих — посыпка</h3><p>И тот самый первый кусочек. Всё, он ваш.</p></div></li></ol>
      <a className="textLink" href="#contacts">Собрать свой Теф в кофейне <Icon name="arrow" width="18" height="18" /></a>
    </Reveal>
  </div></section>;
}
