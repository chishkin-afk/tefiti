import { reviews } from "@/entities/review/model/reviews";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { Icon } from "@/shared/ui/icon/icon";
import { site } from "@/shared/config/site";
import styles from "./reviews.module.scss";

export function Reviews() {
  return <section className="section" id="reviews" aria-labelledby="reviews-title"><div className="container">
    <Reveal className={styles.heading}><div><p className={styles.kicker}>Впечатления наших гостей</p><h2 id="reviews-title">Самое тёплое —<br />ваши слова.</h2></div><a href={`${site.maps}reviews/`} target="_blank" rel="noopener noreferrer" className={styles.rating}><span className={styles.score}>5,0</span><div><span className={styles.stars} aria-label="5 из 5 звёзд">★★★★★</span><span>на Яндекс Картах <span aria-hidden="true">↗</span></span></div></a></Reveal>
    <div className={styles.grid}>{reviews.map((review, index) => <Reveal key={review.review_id} delay={index * 70} className={styles.card}><div className={styles.cardTop}><span className={styles.stars} aria-label={`${review.rating} из 5 звёзд`}>★★★★★</span><Icon name="heart" width="21" height="21" /></div><p className={styles.text}>{review.summary}</p><div className={styles.author}><span className={styles.avatar} aria-hidden="true">{review.author[0]}</span><div><h3>{review.author}</h3><time dateTime={review.date}>{new Date(`${review.date}T12:00:00Z`).toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Moscow" })}</time></div></div><a href={review.source} target="_blank" rel="noopener noreferrer" className={styles.source}>Читать на Яндекс Картах <span aria-hidden="true">↗</span></a></Reveal>)}</div>
    <p className={styles.disclaimer}>Краткие пересказы реальных отзывов. Полные тексты — по ссылкам на Яндекс Карты.</p>
  </div></section>;
}
