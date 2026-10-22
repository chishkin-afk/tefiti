import { reviews } from "@/entities/review/model/reviews";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { ScrollObject } from "@/shared/ui/scroll-object/scroll-object";
import styles from "./reviews.module.scss";
export function Reviews(){
  return <section className="section" id="reviews" aria-labelledby="reviews-title"><div className="container"><Reveal className={styles.heading}><h2 id="reviews-title" className="sectionTitle">Если бы Слой был рядом.</h2></Reveal><div className={styles.grid}>{reviews.map((review,index)=><ScrollObject key={review.id} travel={35+index*15} rotate={index%2?-3:3}><Reveal className={`${styles.card} ${styles[review.tone]}`} delay={index*65}><blockquote>{review.text}</blockquote><span className={styles.author}>{review.author}</span></Reveal></ScrollObject>)}</div><p className={styles.note}>Демонстрационные отзывы. Персонажи и впечатления вымышлены и созданы для концепта.</p></div></section>;
}
