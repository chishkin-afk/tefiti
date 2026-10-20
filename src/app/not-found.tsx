import Link from "next/link";

export default function NotFound() {
  return <main className="container section"><p>404</p><h1 style={{ fontSize: "clamp(42px, 7vw, 80px)", margin: "24px 0" }}>Кажется, вы чуть<br />свернули с Красной.</h1><p style={{ marginBottom: 32 }}>Здесь страницы нет. А кофе и десерты ждут на главной.</p><Link href="/" className="button">Вернуться в Тефити</Link></main>;
}
