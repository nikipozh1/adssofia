import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "За нас",
  description: "АДС е основана 1993 г. Независим синдикат в здравеопазването, образованието и промишлеността.",
};

const values = [
  {
    num: "01",
    title: "Независимост",
    text: "Не сме свързани с нито една политическа партия, работодател или държавна структура. Представляваме само работниците.",
  },
  {
    num: "02",
    title: "Прозрачност",
    text: "Решенията се вземат колективно. Членовете знаят как се изразходват средствата и как се водят преговорите.",
  },
  {
    num: "03",
    title: "Реална защита",
    text: "Не обещаваме — действаме. Правна помощ, представителство пред работодатели и съдилища, колективно договаряне.",
  },
];

const regions = [
  { city: "София", sectors: "Здравеопазване, Образование, Промишленост, Пощи" },
  { city: "Пловдив", sectors: "Здравеопазване, Образование" },
  { city: "Варна", sectors: "Здравеопазване, Промишленост" },
  { city: "Плевен", sectors: "Здравеопазване, Образование" },
];

const label: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#185FA5",
  display: "block",
  marginBottom: 16,
};

export default function ZaNas() {
  return (
    <>
      <PageHero
        eyebrow="За организацията"
        title="Основани от работници. Управлявани от работници."
      />

      {/* HISTORY */}
      <section style={{ backgroundColor: "#F7F5F0" }} className="px-4 md:px-8 lg:px-[48px] py-12 md:py-[100px]">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span style={label}>История</span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 36px)",
            color: "#0C447C",
            lineHeight: 1.2,
            marginBottom: 36,
          }}>
            31 години на страната на работника.
          </h2>
          {[
            "АДС София е основана на 23 януари 1993 г. и регистрирана към Софийски градски съд. Създадена е от работници, които са вярвали, че синдикатът трябва да бъде независим инструмент в ръцете на хората — не придатък на работодателя или политиката.",
            "За повече от три десетилетия сме преминали през икономически трансформации, законодателни промени и обществени кризи — и всеки път сме оставали на страната на работника.",
            "Днес членовете ни работят в здравеопазването, образованието, промишлеността и пощенските услуги в четири региона на страната.",
          ].map((p, i) => (
            <p key={i} style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.9,
              color: "#3a3a38",
              marginBottom: 20,
            }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* MISSION */}
      <section style={{ backgroundColor: "#E6F1FB", padding: "80px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <span aria-hidden="true" style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 80,
            color: "#0C447C",
            lineHeight: 0.8,
            display: "block",
            marginBottom: 24,
          }}>
            &ldquo;
          </span>
          <p style={{
            fontFamily: "var(--font-playfair)",
            fontStyle: "italic",
            fontSize: "clamp(18px, 2.2vw, 26px)",
            color: "#0C447C",
            lineHeight: 1.5,
          }}>
            Да бъдем независим синдикат — независим от държавата, от работодателите и от политиците. Да защитаваме правата на работниците с реални действия, не с декларации.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ backgroundColor: "#F7F5F0", padding: "100px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={label}>Ценности</span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 34px)",
            color: "#0C447C",
            marginBottom: 48,
          }}>
            Три принципа. Без компромис.
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 1,
            background: "#E2DDD5",
          }}>
            {values.map((v) => (
              <div key={v.num} style={{ background: "#F7F5F0", padding: "40px 32px" }}>
                <p aria-hidden="true" style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: 64,
                  lineHeight: 1,
                  color: "#E2DDD5",
                  marginBottom: 20,
                  userSelect: "none",
                }}>
                  {v.num}
                </p>
                <h3 style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#0C447C",
                  marginBottom: 12,
                }}>
                  {v.title}
                </h3>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "#7a7570",
                  lineHeight: 1.7,
                }}>
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRUCTURES */}
      <section style={{ backgroundColor: "#E6F1FB", padding: "80px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={label}>Структури</span>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "clamp(24px, 3vw, 32px)",
            color: "#0C447C",
            marginBottom: 48,
          }}>
            Където работим
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((r) => (
              <div key={r.city} style={{
                background: "white",
                borderLeft: "3px solid #0C447C",
                padding: 28,
              }}>
                <p style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 20,
                  color: "#0C447C",
                  marginBottom: 8,
                }}>
                  {r.city}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#7a7570",
                  lineHeight: 1.6,
                }}>
                  {r.sectors}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: "#0C447C",
        padding: "72px 48px",
        textAlign: "center",
      }} className="px-6 md:px-[48px]">
        <h2 style={{
          fontFamily: "var(--font-playfair)",
          fontWeight: 700,
          fontSize: 30,
          color: "white",
          marginBottom: 24,
        }}>
          Искаш да се свържеш с нас?
        </h2>
        <Link href="/kontakt" style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          backgroundColor: "white",
          color: "#0C447C",
          padding: "14px 32px",
          borderRadius: 2,
          textDecoration: "none",
          display: "inline-block",
          transition: "background-color 200ms",
        }} className="hover:bg-[#E6F1FB]">
          Свържи се с нас
        </Link>
      </section>
    </>
  );
}
