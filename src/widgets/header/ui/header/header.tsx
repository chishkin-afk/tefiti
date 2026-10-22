"use client";
import { useEffect, useRef, useState } from "react";
import { BrandMark } from "@/shared/ui/brand-mark/brand-mark";
import { LiquidGlass } from "@/shared/ui/liquid-glass/liquid-glass";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./header.module.scss";
const links = [{ href: "#home", label: "Главная" }, { href: "#menu", label: "Меню" }, { href: "#about", label: "О студии" }, { href: "#reviews", label: "Впечатления" }];
export function Header() {
  const [open,setOpen] = useState(false); const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) { dialog.current?.close(); return; }
    dialog.current?.showModal(); const previous = document.body.style.overflow; document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  },[open]);
  return <header className={styles.header}><LiquidGlass className={styles.glass} strong><div className={styles.inner}>
    <nav className={styles.nav} aria-label="Основная навигация">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
    <a className={styles.brand} href="#home" aria-label="Слой — главная"><BrandMark /><span>слой</span></a>
    <div className={styles.right}><a href="#menu" className={styles.search} aria-label="Перейти к поиску в меню"><Icon name="search" width="17" height="17" /></a><button className={styles.menuButton} aria-label="Открыть меню навигации" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}><Icon name="menu" /></button></div>
  </div></LiquidGlass>
  <dialog ref={dialog} className={styles.dialog} aria-label="Навигация" onCancel={() => setOpen(false)} onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}><div className={styles.mobileTop}><a href="#home" onClick={() => setOpen(false)} className={styles.brand}><BrandMark /><span>слой</span></a><button aria-label="Закрыть меню" onClick={() => setOpen(false)}><Icon name="close" /></button></div><nav>{links.map(link => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav><p>Кофе в чистом виде.<br />Вымышленная кофе-студия.</p></dialog>
  </header>;
}
