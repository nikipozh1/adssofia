import type { Metadata } from "next";
export const metadata: Metadata = { title: "Политика за поверителност", description: "GDPR политика на АДС София." };
export default function Gdpr() {
  return (
    <section style={{ backgroundColor: "#F7F5F0", padding: "120px 48px 80px", minHeight: "100vh" }} className="px-6 md:px-[48px]">
      <div style={{ maxWidth: 680, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "var(--font-playfair)", fontWeight: 700, fontSize: 36, color: "#0C447C", marginBottom: 32 }}>Политика за поверителност</h1>
        {[
          "АДС София обработва лични данни съгласно Регламент (ЕС) 2016/679 (GDPR).",
          "Данните, предоставени чрез контактната форма (ime, имейл, телефон), се използват единствено за отговор на вашето запитване и не се предоставят на трети страни.",
          "За въпроси относно личните ви данни се свържете с нас на adssofia@abv.bg.",
        ].map((p, i) => (
          <p key={i} style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, lineHeight: 1.8, color: "#3a3a38", marginBottom: 20 }}>{p}</p>
        ))}
      </div>
    </section>
  );
}
