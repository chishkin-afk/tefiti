"use client";
import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/shared/ui/reveal/reveal";
import { ScrollObject } from "@/shared/ui/scroll-object/scroll-object";
import styles from "./dessert-story.module.scss";
const stories=[
  {name:"Тонкий слой. Большая разница.",text:"Снаружи — тонкая золотистая корочка. Внутри — воздух и сливочное тепло. Круассан, ради которого можно проснуться чуть раньше.",image:"/assets/images/croissant.webp",alt:"Золотистый круассан на минималистичной стальной тарелке",tag:"Круассан классический",detail:"Хрустящий снаружи. Нежный внутри."},
  {name:"Хруст встречается с нежностью.",text:"Слои карамелизированного теста и ванильный крем. Иногда для правильного настроения достаточно одного маленького десерта.",image:"/assets/images/cake.webp",alt:"Мильфей с ванильным кремом и тонкими слоями теста",tag:"Мильфей ванильный",detail:"Карамельная корочка. Ванильный крем."},
];
export function DessertStory(){
  const [current,setCurrent]=useState(0);const story=stories[current];const next=stories[(current+1)%stories.length];
  return <section id="signature" className={styles.section} aria-labelledby="signature-title"><div className="container"><Reveal><h2 id="signature-title" className={styles.heading}>У хорошего утра есть слои</h2></Reveal><Reveal className={styles.stage}><div className={styles.feature}><div className={styles.picture}><ScrollObject travel={65} rotate={6} className={styles.object}><Image key={story.image} src={story.image} alt={story.alt} fill sizes="(max-width:700px) 90vw,45vw"/></ScrollObject></div><div className={styles.copy} aria-live="polite"><h3>{story.name}</h3><p>{story.text}</p><a href="#menu" className="button">Найти в меню <span aria-hidden="true">↗</span></a></div></div><div className={styles.controls}><button className="circleButton" aria-label="Следующая история" onClick={()=>setCurrent(value=>(value+1)%stories.length)}>→</button><button className="circleButton" aria-label="Предыдущая история" onClick={()=>setCurrent(value=>(value-1+stories.length)%stories.length)}>←</button><span>{current+1} / {stories.length}</span></div><div className={styles.peek} aria-hidden="true"><Image src={next.image} alt="" fill sizes="180px"/></div></Reveal></div></section>;
}
