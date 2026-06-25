import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = { title: "Знай правата си", description: "Образователни материали за трудови права — скоро." };
export default function Prava() {
  return (
    <section style={{ backgroundColor: "#F7F5F0", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px" }}>
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#185FA5", display: "block", marginBottom: 16 }}>Скоро</span>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: 40, color: "#0C447C", marginBottom: 16 }}>Знай правата си</h1>
      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "#5a5650", maxWidth: 480, lineHeight: 1.7, marginBottom: 32 }}>Подготвяме образователни материали по теми като трудов договор, извънреден труд, незаконно уволнение и болнични.</p>
      <Link href="/kontakt" style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 13, letterSpacing: "0.06em", textTransform: "uppercase", backgroundColor: "#0C447C", color: "white", padding: "14px 28px", borderRadius: 2, textDecoration: "none" }}>Задай въпрос сега</Link>
    </section>
  );
}
