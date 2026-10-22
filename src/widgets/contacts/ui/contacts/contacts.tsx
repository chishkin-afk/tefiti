import { Reveal } from "@/shared/ui/reveal/reveal";
import { RitualPicker } from "@/features/pick-ritual/ui/ritual-picker";
import styles from "./contacts.module.scss";
export function Contacts(){
  return <section id="contacts" className={styles.section} aria-labelledby="ritual-title"><div className={`container ${styles.grid}`}><Reveal className={styles.copy}><h2 id="ritual-title">Какой момент<br/>нужен тебе?</h2><p>Выбери настроение.<br/>Мы подберём маленький ритуал.</p><div className={styles.concept}><span>Слой — вымышленная кофе-студия.<br/>Этот сайт — дизайн-концепт,<br/>а не страница действующего заведения.</span></div></Reveal><RitualPicker/></div></section>;
}
