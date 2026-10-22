import Link from "next/link";
export default function NotFound() {
  return <main className="container section"><p>404 / Не тот слой</p><h1 style={{ fontSize: "clamp(44px, 8vw, 96px)", margin: "32px 0", maxWidth: 700 }}>Вернёмся к хорошему кофе.</h1><Link href="/" className="button">На главную <span aria-hidden="true">↗</span></Link></main>;
}
