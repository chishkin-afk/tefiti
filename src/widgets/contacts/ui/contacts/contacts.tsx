import { Reveal } from "@/shared/ui/reveal/reveal";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./contacts.module.scss";

export function Contacts() {
  return <section className={styles.section} id="contacts" aria-labelledby="contacts-title"><div className={`container ${styles.grid}`}>
    <Reveal className={styles.copy}><p className={styles.kicker}>До встречи на Красной</p><h2 id="contacts-title">Уже ставим<br />вашу чашку.</h2><address className={styles.address}><span>Краснодар</span><a href={site.maps} target="_blank" rel="noopener noreferrer">Красная улица, 98 <span aria-hidden="true">↗</span></a></address>
      <div className={styles.hours}><p><span>Понедельник — пятница</span><span>09:00–22:00</span></p><p><span>Суббота — воскресенье</span><span>09:00–23:00</span></p></div>
      <a href={site.phoneHref} className={styles.phone}>{site.phone}</a><div className={styles.actions}><a href={site.route} target="_blank" rel="noopener noreferrer" className="button">Построить маршрут <Icon name="pin" width="18" height="18" /></a><a href={site.telegram} target="_blank" rel="noopener noreferrer" className={styles.telegram}>Мы в Telegram <span aria-hidden="true">↗</span></a></div>
    </Reveal>
    <div className={styles.map}><iframe title="Кофейня Тефити — Краснодар, Красная улица, 98, на Яндекс Картах" src="https://yandex.ru/map-widget/v1/?oid=73006262346&ol=biz&z=16" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /><a href={site.maps} target="_blank" rel="noopener noreferrer" className={styles.mapLabel}><span className={styles.mapDot} /><div><strong>Тефити</strong><span>Красная улица, 98</span></div><span aria-hidden="true">↗</span></a></div>
  </div></section>;
}
