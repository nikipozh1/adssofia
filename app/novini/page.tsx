import type { Metadata } from "next";
export const metadata: Metadata = { title: "Новини", description: "Новини от АДС София — скоро." };
export default function Novini() {
  return (
    <section style={{ backgroundColor: "#F7F5F0", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "120px 24px 80px" }}>
      <span style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "#185FA5", display: "block", marginBottom: 16 }}>Скоро</span>
      <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: 40, color: "#0C447C", marginBottom: 16 }}>Новини</h1>
      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "#5a5650", maxWidth: 480, lineHeight: 1.7 }}>Секцията с новини е в изграждане. Скоро ще публикуваме актуална информация.</p>
    </section>
  );
}
