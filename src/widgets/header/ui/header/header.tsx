"use client";

import { useEffect, useRef, useState } from "react";
import { Shell } from "@/shared/ui/shell/shell";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./header.module.scss";

const links = [{ href: "#about", label: "О нас" }, { href: "#menu", label: "Меню" }, { href: "#reviews", label: "Отзывы" }, { href: "#contacts", label: "Контакты" }];

export function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) { dialog.current?.close(); return; }
    dialog.current?.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  return <header className={styles.header}>
    <div className={`container ${styles.inner}`}>
      <a className={styles.brand} href="#home" aria-label="Тефити — на главную"><Shell /><span>тефити<span className={styles.brandCaption}>кофе и десерты</span></span></a>
      <nav className={styles.nav} aria-label="Основная навигация">{links.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
      <a href="#contacts" className={styles.location}><Icon name="pin" width="17" height="17" /><span>Красная, 98</span></a>
      <button className={styles.menuButton} aria-label="Открыть навигацию" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}><Icon name="menu" /></button>
    </div>
    <dialog ref={dialog} className={styles.dialog} onCancel={() => setOpen(false)} onClick={event => { if (event.target === event.currentTarget) setOpen(false); }} aria-label="Навигация по сайту">
      <div className={styles.mobileTop}><span>Тефити</span><button aria-label="Закрыть навигацию" onClick={() => setOpen(false)}><Icon name="close" /></button></div>
      <nav aria-label="Мобильная навигация">{links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</nav>
      <a href={site.phoneHref} className={styles.mobilePhone}>{site.phone}</a><p>Краснодар, Красная, 98</p>
    </dialog>
  </header>;
}
