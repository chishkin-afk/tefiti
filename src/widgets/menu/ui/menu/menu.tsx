import { MenuBrowser } from "@/features/browse-menu/ui/menu-browser/menu-browser";
import { menuItems } from "@/entities/menu/model/menu";
import { Reveal } from "@/shared/ui/reveal/reveal";
import styles from "./menu.module.scss";
export function Menu() {
  return <section id="menu" className="section" aria-labelledby="menu-title"><div className="container"><Reveal className={styles.heading}><h2 id="menu-title" className="sectionTitle">Маленькие фавориты</h2></Reveal><MenuBrowser items={menuItems}/><p className={styles.note}>Меню, цены и состав созданы для дизайн-концепта. Изображения сгенерированы.</p></div></section>;
}
