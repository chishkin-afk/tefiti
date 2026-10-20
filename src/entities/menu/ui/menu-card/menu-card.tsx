import Image from "next/image";
import type { MenuItem } from "../../model/categories";
import { formatPrice } from "@/shared/lib/format/price";
import { Shell } from "@/shared/ui/shell/shell";
import styles from "./menu-card.module.scss";

export function MenuCard({ item, hidden }: { item: MenuItem; hidden: boolean }) {
  return (
    <article className={styles.card} hidden={hidden}>
      <div className={styles.imageWrap}>
        {item.image ? <Image src={item.image} alt={item.name} fill sizes="(max-width: 600px) 44vw, (max-width: 900px) 30vw, 23vw" loading="lazy" className={styles.image} /> : <div className={styles.noPhoto}><Shell /><span>нет фото</span></div>}
        <span className={styles.portion}>{item.portion}</span>
      </div>
      <div className={styles.details}><h3>{item.name}</h3><span className={styles.price}>{formatPrice(item.price)}</span></div>
    </article>
  );
}
