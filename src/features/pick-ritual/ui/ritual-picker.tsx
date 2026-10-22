"use client";
import Image from "next/image";
import { useState } from "react";
import { LiquidGlass } from "@/shared/ui/liquid-glass/liquid-glass";
import styles from "./ritual-picker.module.scss";
const options=[
  {name:"Взбодриться",title:"Флэт уайт.",description:"Плотный кофе. Мягкое молоко. Чёткий план на день.",image:"/assets/images/flat-white.webp"},
  {name:"Не спешить",title:"Тёплый круассан.",description:"Побольше времени на себя. И на каждый хрустящий слой.",image:"/assets/images/croissant.webp"},
  {name:"Немного сладкого",title:"Ванильный мильфей.",description:"Маленький десерт. Большое удовольствие от момента.",image:"/assets/images/cake.webp"},
];
export function RitualPicker(){
  const [current,setCurrent]=useState(0);const option=options[current];
  return <div className={styles.picker}><div className={styles.options} role="group" aria-label="Выбрать настроение">{options.map((item,index)=><button key={item.name} aria-pressed={index===current} onClick={()=>setCurrent(index)} className={index===current?styles.selected:""}>{item.name}</button>)}</div><div className={styles.stage}><div className={styles.image}><Image src={option.image} key={option.image} alt={option.title} fill sizes="(max-width:700px) 85vw,40vw"/></div><LiquidGlass strong className={styles.result}><div aria-live="polite"><div><h3>{option.title}</h3><p>{option.description}</p></div><a href="#menu" className="circleButton" aria-label="Перейти к меню">↗</a></div></LiquidGlass></div></div>;
}
