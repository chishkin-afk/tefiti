"use client";
import { useEffect, useRef } from "react";
export function useHeroParallax() {
  const root = useRef<HTMLElement>(null); const image = useRef<HTMLDivElement>(null); const label = useRef<HTMLDivElement>(null); const headline = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)"); let frame=0; let visible=true;
    const draw=()=>{
      frame=0; if(!root.current || reduced.matches) return;
      const rect=root.current.getBoundingClientRect(); const progress=Math.min(1,Math.max(0,-rect.top/rect.height)); const factor=window.innerWidth<700?.45:1;
      if(image.current) image.current.style.transform=`translate3d(0,${progress*85*factor}px,0) scale(${1+progress*.05})`;
      if(label.current) label.current.style.transform=`translate3d(0,${-progress*120*factor}px,0) rotate(${-progress*5}deg)`;
      if(headline.current) headline.current.style.transform=`translate3d(0,${progress*35*factor}px,0)`;
    };
    const schedule=()=>{if(visible&&!frame)frame=requestAnimationFrame(draw);};
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)schedule();}); if(root.current)observer.observe(root.current);
    const change=()=>{if(reduced.matches){cancelAnimationFrame(frame);frame=0;for(const ref of [image,label,headline])if(ref.current)ref.current.style.transform="";}else schedule();};
    window.addEventListener("scroll",schedule,{passive:true});window.addEventListener("resize",schedule,{passive:true});reduced.addEventListener("change",change);draw();
    return()=>{cancelAnimationFrame(frame);observer.disconnect();window.removeEventListener("scroll",schedule);window.removeEventListener("resize",schedule);reduced.removeEventListener("change",change);};
  },[]);
  return {root,image,label,headline};
}
