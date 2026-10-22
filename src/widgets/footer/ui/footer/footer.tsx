import { BrandMark } from "@/shared/ui/brand-mark/brand-mark";
import styles from "./footer.module.scss";
export function Footer(){
  return <footer className={styles.footer}><div className="container"><div className={styles.top}><a href="#home" className={styles.brand} aria-label="Слой — на главную"><BrandMark/><span>слой</span></a><p>Хорошие вещи<br/>случаются каждый день.</p><nav aria-label="Навигация в подвале"><a href="#menu">Меню</a><a href="#about">О студии</a><a href="#contacts">О концепте</a></nav><a href="#home" className="circleButton" aria-label="Вернуться наверх">↑</a></div><div className={styles.bottom}><span>© {new Date().getFullYear()} Слой. Coffee studio concept.</span><span>Все изображения сгенерированы. Бренд и отзывы вымышлены.</span></div></div></footer>;
}
