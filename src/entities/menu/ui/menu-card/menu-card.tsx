import Image from "next/image";
import type { MenuItem } from "../../model/categories";
import { formatPrice } from "@/shared/lib/format/price";
import { BrandMark } from "@/shared/ui/brand-mark/brand-mark";
import { Icon } from "@/shared/ui/icon/icon";
import { ScrollObject } from "@/shared/ui/scroll-object/scroll-object";
import styles from "./menu-card.module.scss";
export function MenuCard({item,hidden,favorite,onSelect,onToggleFavorite}:{item:MenuItem;hidden:boolean;favorite:boolean;onSelect:()=>void;onToggleFavorite:()=>void}) {
  return <article className={styles.card} hidden={hidden}><div className={styles.imageWrap}>
    {item.image?<ScrollObject className={styles.object} travel={26}><Image src={item.image} alt={item.name} fill sizes="(max-width:600px) 45vw,(max-width:1000px) 42vw,24vw" loading="lazy" className={styles.image}/></ScrollObject>:<div className={styles.noPhoto}><BrandMark/><span>нет фото</span></div>}
    <button className={styles.imageAction} onClick={onSelect} aria-label={`Подробнее: ${item.name}`} /><span className={styles.portion}>{item.portion}</span>
    <div className={styles.bottom}><button className={`${styles.favorite} ${favorite?styles.isFavorite:""}`} aria-label={`${favorite?"Убрать из избранного":"В избранное"}: ${item.name}`} aria-pressed={favorite} onClick={onToggleFavorite}><Icon name="heart" width="15" height="15"/></button></div>
  </div><div className={styles.details}><h3><button onClick={onSelect}>{item.name}</button></h3><span>{formatPrice(item.price)}</span></div></article>;
}
