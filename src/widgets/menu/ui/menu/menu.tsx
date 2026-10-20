import { MenuBrowser } from "@/features/browse-menu/ui/menu-browser/menu-browser";
import { menuItems } from "@/entities/menu/model/menu";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { site } from "@/shared/config/site";
import styles from "./menu.module.scss";

export function Menu() {
  return <section id="menu" className="section" aria-labelledby="menu-title"><div className="container">
    <Reveal className={styles.heading}><div><p className={styles.kicker}>Меню Тефити</p><h2 id="menu-title">На ваш вкус.<br />Под ваше настроение.</h2></div><p className={styles.intro}>Привычный капучино, раф с халвой<br className={styles.desktopBreak} /> или что-то новое. Что выберете сегодня?</p></Reveal>
    <MenuBrowser items={menuItems} />
    <div className={styles.note}><p>Указаны цены меню доставки. В кофейне цены могут отличаться.<br />Состав и наличие уточняйте у бариста.</p><a href={site.delivery} target="_blank" rel="noopener noreferrer" className="textLink">Заказать в Яндекс Еде <span aria-hidden="true">↗</span></a></div>
    <details className={styles.paper}><summary>Посмотреть меню в кофейне</summary><div>{[1, 2, 3, 4].map(n => <a key={n} href={`/assets/menu/photos/menu-0${n}.jpg`} target="_blank" rel="noopener noreferrer">Снимок меню {n} <span aria-hidden="true">↗</span></a>)}</div><p>Снимки из Яндекс Карт сделаны в разные периоды. Актуальные цены уточняйте в кофейне.</p></details>
  </div></section>;
}
