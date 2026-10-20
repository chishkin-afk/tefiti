import { Reveal } from "@/shared/ui/reveal/reveal";
import { Icon } from "@/shared/ui/icon/icon";
import { Shell } from "@/shared/ui/shell/shell";
import styles from "./about.module.scss";

export function About() {
  return <section className={`section ${styles.section}`} id="about" aria-labelledby="about-title"><div className="container">
    <Reveal className={styles.intro}><div className={styles.lead}><Shell /><p>Здесь можно<br />не спешить</p></div><div><h2 id="about-title">У каждого дня<br />есть тёплая сторона.</h2><p className={styles.text}>Мы нашли свою на Красной, 98. В мягком свете, любимой чашке и разговорах без повода. Тефити — небольшая кофейня, в которую можно заглянуть на минутку, а остаться чуть дольше.</p></div></Reveal>
    <Reveal className={styles.features} delay={70}>
      <div><span className={styles.icon}><Icon name="cup" /></span><h3>Кофе под настроение</h3><p>От простого американо до рафа<br />с халвой или грушей и дорблю.</p></div>
      <div><span className={styles.icon}><Shell /></span><h3>Десерт по вашим правилам</h3><p>Выбирайте бисквит, начинку и крем.<br />Собирайте свой неповторимый Теф.</p></div>
      <div><span className={styles.icon}><Icon name="heart" /></span><h3>Уютно быть собой</h3><p>Наедине с книгой, с друзьями<br />или с любимым питомцем.</p></div>
    </Reveal>
  </div></section>;
}
