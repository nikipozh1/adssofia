import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "АДС София — Защита на работниците от 1993",
  description:
    "Независим синдикат в здравеопазването, образованието и промишлеността. Безплатна правна консултация за членове.",
};

const sectors = [
  "Здравеопазване",
  "Образование",
  "Промишленост",
  "Пощенски услуги",
  "Общинска администрация",
];

const painCards = [
  {
    title: "Не знаеш правата си?",
    text: "Обясняваме Кодекса на труда на разбираем език.",
  },
  {
    title: "Неплатен извънреден труд?",
    text: "Имаш право на +50%. Помагаме ти да го получиш.",
  },
  {
    title: "Страх от уволнение?",
    text: "Членството в синдикат е защитено по закон.",
  },
  {
    title: "Тормоз от ръководството?",
    text: "Не си сам. Заставаме зад теб.",
  },
];

const quotes = [
  {
    text: "Работих 12 години без да знам че имам право на повече. АДС ми обясни всичко за един час.",
    author: "Медицинска сестра · София",
  },
  {
    text: "Уволниха ме незаконно. Мислех че нямам шанс. Върнаха ме на работа след 3 седмици.",
    author: "Учител · Пловдив",
  },
  {
    text: "Никой не ни казваше че извънредният труд трябва да се плаща. Сега знаем правата си.",
    author: "Служител · Общинска администрация",
  },
];

const checks = [
  "Безплатна правна консултация за членове",
  "Представителство при трудови спорове",
  "Колективно договаряне за по-добри условия",
];

/* ─── Shared style tokens ─────────────────────────────────── */
const eyebrow = (color = "#B5D4F4"): React.CSSProperties => ({
  fontFamily: "var(--font-dm-sans)",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color,
  display: "block",
  marginBottom: 16,
});

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════ HERO */}
      <section
        style={{ backgroundColor: "#0C447C", padding: "120px 48px 100px", position: "relative", overflow: "hidden" }}
        className="px-6 md:px-[48px]"
      >
        {/* Diagonal lines overlay */}
        <div aria-hidden="true" style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cline x1='0' y1='60' x2='60' y2='0' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          opacity: 0.03,
        }} />

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center">

          {/* Left */}
          <div>
            <span style={eyebrow()}>
              Асоциация на демократичните синдикати · от 1993
            </span>

            <h1 style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              lineHeight: 1.0,
              color: "white",
              marginBottom: 16,
              fontSize: "clamp(48px, 6.5vw, 72px)",
            }}>
              Ти не си сам.
            </h1>

            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: "clamp(16px, 2vw, 20px)",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.65)",
              marginBottom: 48,
              maxWidth: 480,
            }}>
              Защитаваме правата на работниците в здравеопазването, образованието и промишлеността.
            </p>

            <div style={{ display: "flex", gap: 28, flexWrap: "wrap", alignItems: "center" }}>
              <Link href="/kontakt" style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 500,
                fontSize: 14,
                letterSpacing: "0.04em",
                backgroundColor: "white",
                color: "#0C447C",
                padding: "16px 32px",
                borderRadius: 2,
                textDecoration: "none",
                display: "inline-block",
                transition: "background-color 200ms, color 200ms",
              }} className="hover:bg-[#E6F1FB]">
                Свържи се с нас
              </Link>
              <Link href="/prava" style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                fontSize: 15,
                color: "rgba(255,255,255,0.7)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.3)",
                paddingBottom: 2,
                transition: "color 200ms",
              }} className="hover:text-white">
                Разбери правата си →
              </Link>
            </div>
          </div>

          {/* Right — stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1 }} className="mt-10 md:mt-0">
            {[
              { num: "31+", label: "ГОДИНИ ЗАЩИТА НА РАБОТНИЦИТЕ" },
              { num: "4", label: "РЕГИОНА В БЪЛГАРИЯ — СОФИЯ, ПЛОВДИВ, ВАРНА, ПЛЕВЕН" },
            ].map((s) => (
              <div key={s.num} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: 32,
              }}>
                <p style={{
                  fontFamily: "var(--font-playfair)",
                  fontWeight: 700,
                  fontSize: 52,
                  color: "white",
                  lineHeight: 1,
                  marginBottom: 8,
                }}>
                  {s.num}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.5,
                }}>
                  {s.label}
                </p>
              </div>
            ))}
            <div style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
              padding: 32,
            }}>
              <p style={{
                fontFamily: "var(--font-playfair)",
                fontStyle: "italic",
                fontSize: 22,
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.4,
              }}>
                Безплатна правна консултация за всеки нов член
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ BLUE STRIP */}
      <div style={{ backgroundColor: "#185FA5", padding: "16px 48px" }} className="px-6 md:px-[48px]">
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", gap: 48, flexWrap: "wrap", alignItems: "center",
        }}>
          {sectors.map((s, i) => (
            <span key={s} style={{ display: "flex", alignItems: "center", gap: 48 }}>
              <span style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 500,
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                whiteSpace: "nowrap",
              }}>
                {s}
              </span>
              {i < sectors.length - 1 && (
                <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.3)", fontSize: 8 }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════ UNDERSTAND YOU */}
      <section style={{ backgroundColor: "#F7F5F0", padding: "100px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center">

          {/* Left */}
          <div>
            <span style={eyebrow("#185FA5")}>Защо АДС</span>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              lineHeight: 1.15,
              color: "#0C447C",
              marginBottom: 24,
            }}>
              Знаем как се чувстваш.
            </h2>
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 17,
              lineHeight: 1.8,
              color: "#3a3a38",
              marginBottom: 40,
            }}>
              Работиш извънредно без заплащане. Страхуваш се да се оплачеш. Не знаеш правата си. Ние сме тук от 1993 — не с обещания, а с реални резултати.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {checks.map((c) => (
                <div key={c} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{
                    color: "#0C447C",
                    fontSize: 15,
                    fontWeight: 500,
                    marginTop: 1,
                    flexShrink: 0,
                  }}>
                    ✓
                  </span>
                  <span style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 15,
                    color: "#1A1A18",
                    lineHeight: 1.5,
                  }}>
                    {c}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — pain cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}>
            {painCards.map((card) => (
              <div key={card.title} style={{
                background: "white",
                border: "1px solid #E2DDD5",
                borderRadius: 4,
                padding: 24,
              }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  fontSize: 15,
                  color: "#0C447C",
                  marginBottom: 8,
                  lineHeight: 1.4,
                }}>
                  {card.title}
                </p>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "#7a7570",
                  lineHeight: 1.6,
                }}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ TESTIMONIALS */}
      <section style={{ backgroundColor: "#1A1A18", padding: "100px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={eyebrow("#B5D4F4")}>Гласове на работниците</span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" style={{ marginTop: 40 }}>
            {quotes.map((q, i) => (
              <blockquote key={i} style={{
                borderTop: "1px solid rgba(255,255,255,0.12)",
                paddingTop: 32,
              }}>
                <span aria-hidden="true" style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: 64,
                  color: "#185FA5",
                  lineHeight: 0.7,
                  display: "block",
                  marginBottom: 20,
                }}>
                  &ldquo;
                </span>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.75)",
                  marginBottom: 24,
                }}>
                  {q.text}
                </p>
                <footer style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                }}>
                  — {q.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════ CTA */}
      <section style={{
        backgroundColor: "#0C447C",
        padding: "100px 48px",
        textAlign: "center",
      }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "clamp(30px, 4vw, 48px)",
            color: "white",
            marginBottom: 16,
            lineHeight: 1.15,
          }}>
            Готов ли си да разбереш правата си?
          </h2>
          <p style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 300,
            fontSize: 18,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 40,
            lineHeight: 1.6,
          }}>
            Безплатна консултация. Без ангажимент. Едно съобщение е достатъчно.
          </p>
          <Link href="/kontakt" style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            backgroundColor: "white",
            color: "#0C447C",
            padding: "18px 40px",
            borderRadius: 2,
            textDecoration: "none",
            display: "inline-block",
            transition: "background-color 200ms",
          }} className="hover:bg-[#E6F1FB]">
            Свържи се с АДС
          </Link>
        </div>
      </section>
    </>
  );
}
