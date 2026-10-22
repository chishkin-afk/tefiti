"use client";
import Image from "next/image";
import { useEffect,useRef,useState } from "react";
import { categories,type Category,type MenuItem } from "@/entities/menu/model/categories";
import { MenuCard } from "@/entities/menu/ui/menu-card/menu-card";
import { formatPrice } from "@/shared/lib/format/price";
import { LiquidGlass } from "@/shared/ui/liquid-glass/liquid-glass";
import { Icon } from "@/shared/ui/icon/icon";
import { BrandMark } from "@/shared/ui/brand-mark/brand-mark";
import styles from "./menu-browser.module.scss";
const STORAGE_KEY="sloy:favorites:v1";
export function MenuBrowser({items}:{items:MenuItem[]}) {
  const [category,setCategory]=useState<Category>("Всё меню"); const [query,setQuery]=useState(""); const [expanded,setExpanded]=useState(false);
  const [favorites,setFavorites]=useState<string[]>([]); const [selected,setSelected]=useState<MenuItem|null>(null); const dialog=useRef<HTMLDialogElement>(null);
  useEffect(()=>{try {const saved:unknown=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");if(Array.isArray(saved))setFavorites(saved.filter((id):id is string=>typeof id==="string"&&items.some(item=>item.id===id)));}catch{/* Storage is optional. */}},[items]);
  useEffect(()=>{
    if(!selected){dialog.current?.close();return;}dialog.current?.showModal();const previous=document.body.style.overflow;document.body.style.overflow="hidden";return()=>{document.body.style.overflow=previous;};
  },[selected]);
  function toggleFavorite(id:string){setFavorites(current=>{const next=current.includes(id)?current.filter(value=>value!==id):[...current,id];try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next));}catch{/* Favorites still work in memory. */}return next;});}
  const normalized=query.trim().toLocaleLowerCase("ru-RU").replaceAll("ё","е");
  const matching=items.filter(item=>(category==="Всё меню"||(category==="Избранное"?favorites.includes(item.id):item.category===category))&&(item.name+" "+item.tags.join(" ")).toLocaleLowerCase("ru-RU").replaceAll("ё","е").includes(normalized));
  const visible=new Set((expanded||normalized||category!=="Всё меню"?matching:matching.slice(0,4)).map(item=>item.id));
  return <><div className={styles.controls}><LiquidGlass className={styles.categoryGlass}><div className={styles.categories} role="group" aria-label="Категории меню">{categories.map(value=><button key={value} type="button" aria-pressed={category===value} onClick={()=>{setCategory(value);setExpanded(false);}} className={`${styles.category} ${category===value?styles.selected:""}`}>{value}{value==="Избранное"&&favorites.length?<span>{favorites.length}</span>:null}</button>)}</div></LiquidGlass><label className={styles.search}><Icon name="search" width="16" height="16"/><span className="srOnly">Поиск в меню</span><input type="search" placeholder="Что хочется сегодня?" value={query} onChange={event=>setQuery(event.target.value)}/></label></div>
  <p className="srOnly" aria-live="polite">Найдено позиций: {matching.length}. В избранном: {favorites.length}.</p><div className={styles.grid}>{items.map(item=><MenuCard key={item.id} item={item} hidden={!visible.has(item.id)} favorite={favorites.includes(item.id)} onSelect={()=>setSelected(item)} onToggleFavorite={()=>toggleFavorite(item.id)}/>)}</div>
  {!matching.length?<div className={styles.empty}><BrandMark/><h3>{category==="Избранное"?"Здесь будет твоё любимое":"Попробуем другое название?"}</h3><p>{category==="Избранное"?"Нажми на сердечко у любой позиции в меню.":"Можно поискать по названию или вкусу."}</p><button className="button buttonLight" onClick={()=>{setCategory("Всё меню");setQuery("");}}>Ко всему меню <span aria-hidden="true">↗</span></button></div>:null}
  {matching.length>visible.size?<div className={styles.more}><button className="button buttonLight" onClick={()=>setExpanded(true)}>Ещё немного вкусного <Icon name="plus" width="16" height="16"/></button><span>Ещё {matching.length-visible.size} позиции</span></div>:null}
  <dialog ref={dialog} className={styles.dialog} aria-labelledby="product-title" onCancel={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)setSelected(null);}}><button className={styles.close} onClick={()=>setSelected(null)} aria-label="Закрыть карточку"><Icon name="close"/></button>{selected?<div className={styles.product}><div className={styles.productImage}>{selected.image?<Image src={selected.image} alt={selected.name} fill sizes="(max-width:650px) 90vw,400px"/>:<div className={styles.productPlaceholder}><BrandMark/><span>нет фото</span></div>}</div><div className={styles.productCopy}><span className={styles.productCategory}>{selected.category} / {selected.portion}</span><h2 id="product-title">{selected.name}</h2><p>{selected.description}</p><div className={styles.allergens}><strong>Аллергены</strong><span>{selected.allergens}</span></div><div className={styles.productBottom}><strong>{formatPrice(selected.price)}</strong><button className="circleButton" onClick={()=>toggleFavorite(selected.id)} aria-label={favorites.includes(selected.id)?"Убрать из избранного":"Добавить в избранное"} aria-pressed={favorites.includes(selected.id)}><Icon name="heart" fill={favorites.includes(selected.id)?"currentColor":"none"} width="19" height="19"/></button></div><small>Демонстрационная позиция. Оформление заказа недоступно.</small></div></div>:null}</dialog></>;
}
