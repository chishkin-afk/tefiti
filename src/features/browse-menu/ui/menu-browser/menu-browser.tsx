"use client";

import { useState } from "react";
import { categories, type Category, type MenuItem } from "@/entities/menu/model/categories";
import { MenuCard } from "@/entities/menu/ui/menu-card/menu-card";
import { Icon } from "@/shared/ui/icon/icon";
import styles from "./menu-browser.module.scss";

export function MenuBrowser({ items }: { items: MenuItem[] }) {
  const [category, setCategory] = useState<Category>("Кофе и чай");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const normalized = query.trim().toLocaleLowerCase("ru-RU").replaceAll("ё", "е");
  const matching = items.filter(item => (category === "Всё меню" || item.category === category) && item.name.toLocaleLowerCase("ru-RU").replaceAll("ё", "е").includes(normalized));
  const visible = new Set((expanded || normalized ? matching : matching.slice(0, 8)).map(item => item.id));
  return <>
    <div className={styles.controls}>
      <div className={styles.categories} role="group" aria-label="Категории меню">
        {categories.map(value => <button key={value} type="button" aria-pressed={category === value} onClick={() => { setCategory(value); setExpanded(false); }} className={`${styles.category} ${category === value ? styles.selected : ""}`}>{value}</button>)}
      </div>
      <label className={styles.search}><Icon name="search" /><span className="srOnly">Найти в меню</span><input value={query} onChange={event => setQuery(event.target.value)} type="search" placeholder="Найти в меню" /></label>
    </div>
    <p className="srOnly" aria-live="polite">{matching.length ? `Найдено позиций: ${matching.length}` : "Ничего не найдено. Попробуйте другое название или категорию."}</p>
    <div className={styles.grid}>
      {items.map(item => <MenuCard key={item.id} item={item} hidden={!visible.has(item.id)} />)}
    </div>
    {!matching.length ? <div className={styles.empty}><ShellEmpty /><h3>Такого пока нет в меню</h3><p>Попробуйте другое название или откройте всё меню.</p><button className="button buttonLight" onClick={() => { setQuery(""); setCategory("Всё меню"); }}>Показать всё меню</button></div> : null}
    {matching.length > visible.size ? <div className={styles.more}><button className="button buttonLight" onClick={() => setExpanded(true)}>Показать ещё {matching.length - visible.size}<Icon name="plus" /></button></div> : null}
  </>;
}

function ShellEmpty() { return <Icon name="cup" width="40" height="40" />; }
