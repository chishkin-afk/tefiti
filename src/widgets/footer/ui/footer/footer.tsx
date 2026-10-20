import { Shell } from "@/shared/ui/shell/shell";
import { site } from "@/shared/config/site";
import styles from "./footer.module.scss";

export function Footer() {
  return <footer className={styles.footer}><div className="container"><div className={styles.top}><a href="#home" className={styles.brand} aria-label="Тефити — на главную"><Shell /><span>тефити</span></a><p>Пусть в каждом дне<br />будет немного Тефити.</p><nav aria-label="Навигация в подвале"><a href="#menu">Меню</a><a href="#about">О кофейне</a><a href={site.telegram} target="_blank" rel="noopener noreferrer">Telegram <span aria-hidden="true">↗</span></a></nav></div><div className={styles.bottom}><span>© {new Date().getFullYear()} Тефити. Кофе и десерты.</span><span>Краснодар, Красная, 98</span><a href="#home">Наверх <span aria-hidden="true">↑</span></a></div></div></footer>;
}
