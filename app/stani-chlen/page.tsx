"use client";

import { useState } from "react";
import Link from "next/link";

const benefits = [
  {
    symbol: "§",
    title: "Безплатна правна консултация",
    text: "Консултирай се с юрист за всеки трудов въпрос без допълнително заплащане.",
  },
  {
    symbol: "⚖",
    title: "Представителство при спорове",
    text: "Заставаме до теб при преговори, медиация и съдебни дела срещу работодателя.",
  },
  {
    symbol: "✦",
    title: "Колективна сила",
    text: "Когато договаряме заедно — получаваме повече. Колективните договори важат за всички членове.",
  },
  {
    symbol: "◎",
    title: "Общност и подкрепа",
    text: "Свързваме те с колеги в същата ситуация. Не си сам в това.",
  },
];

const steps = [
  {
    num: "1",
    title: "Свържи се с нас",
    text: "Изпрати съобщение или се обади. Ще отговорим в рамките на работния ден.",
  },
  {
    num: "2",
    title: "Кратък разговор",
    text: "Говорим за твоята ситуация и обясняваме как АДС може да помогне конкретно на теб.",
  },
  {
    num: "3",
    title: "Подписваш заявление",
    text: "Попълваш кратко заявление за членство. Отнема 5 минути.",
  },
  {
    num: "4",
    title: "Защитен си",
    text: "От този момент имаш пълен достъп до всички услуги и защитата на АДС.",
  },
];

const faqs = [
  {
    q: "Колко струва членството?",
    a: "Членският внос е символичен и зависи от сектора. Свържи се с нас за конкретна информация — за много членове ползата от първата консултация надвишава многократно годишния внос.",
  },
  {
    q: "Работодателят ми ще разбере ли че съм член на синдикат?",
    a: "Членството е твое лично право и е защитено от закона. Съгласно чл. 33 от Кодекса на труда, работодателят няма право да те дискриминира или уволни заради синдикално членство.",
  },
  {
    q: "Мога ли да се присъединя ако нямам проблем в момента?",
    a: "Точно тогава е най-добре. Синдикатът е като застраховка — нужен ти е преди да имаш проблем, не след това. Членовете с активно членство получават незабавна помощ при нужда.",
  },
  {
    q: "Синдикатът само за заводи и фабрики ли е?",
    a: "Не. АДС е активен в здравеопазването, образованието, общинската администрация, пощенските услуги и промишлеността. Ако работиш — имаш право на защита.",
  },
  {
    q: "Какво се случва ако имам съдебен спор с работодателя?",
    a: "АДС осигурява правна консултация и при необходимост — представителство. Работим с опитни трудовоправни юристи, които познават спецификите на всеки сектор.",
  },
  {
    q: "Мога ли да напусна синдиката ако се предумам?",
    a: "Да. Членството е доброволно и можеш да го прекратиш по всяко време с писмено заявление. Без санкции, без усложнения.",
  },
];

const eyebrow = (color: string): React.CSSProperties => ({
  fontFamily: "var(--font-dm-sans)",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color,
  display: "block",
  marginBottom: 16,
});

export default function StaniChlen() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0C447C", padding: "120px 48px 100px" }}
        className="px-6 md:px-[48px]"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={eyebrow("#B5D4F4")}>Членство</span>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(36px, 4.5vw, 52px)",
              color: "white",
              lineHeight: 1.05,
              marginBottom: 16,
            }}
          >
            Стани част от АДС.
          </h1>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 20,
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.5,
            }}
          >
            Едно решение. Реална защита.
          </p>
        </div>
      </section>

      {/* ══ ЗАЩО ДА СТАНЕШ ЧЛЕН ══════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F7F5F0", padding: "100px 48px" }}
        className="px-6 md:px-[48px]"
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-start"
        >
          {/* Left */}
          <div>
            <span style={eyebrow("#185FA5")}>Какво получаваш</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "clamp(26px, 3vw, 36px)",
                color: "#0C447C",
                lineHeight: 1.2,
                marginBottom: 32,
              }}
            >
              Членството не е разход. Това е застраховка.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: 16,
                lineHeight: 1.8,
                color: "#3a3a38",
              }}
            >
              Повечето хора се обръщат към синдикат след като проблемът вече е
              възникнал. Най-умното решение е да си защитен преди това — точно
              като с всяка друга застраховка.
            </p>
          </div>

          {/* Right — benefit cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  background: "white",
                  border: "1px solid #E2DDD5",
                  borderRadius: 4,
                  padding: "24px 28px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 32,
                    color: "#0C447C",
                    lineHeight: 1,
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {b.symbol}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 500,
                      fontSize: 15,
                      color: "#0C447C",
                      marginBottom: 6,
                    }}
                  >
                    {b.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#7a7570",
                      lineHeight: 1.6,
                    }}
                  >
                    {b.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ КАК СЕ СТАВА ЧЛЕН ════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#1A1A18", padding: "100px 48px" }}
        className="px-6 md:px-[48px]"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={eyebrow("#B5D4F4")}>Процесът</span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(30px, 3.5vw, 42px)",
              color: "white",
              marginBottom: 64,
            }}
          >
            Четири стъпки.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
            {steps.map((s) => (
              <div
                key={s.num}
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                  paddingTop: 24,
                }}
              >
                <p
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                    fontSize: 64,
                    color: "rgba(255,255,255,0.08)",
                    lineHeight: 1,
                    marginBottom: 16,
                    userSelect: "none",
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    fontSize: 16,
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.7,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F7F5F0", padding: "100px 48px" }}
        className="px-6 md:px-[48px]"
      >
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <span style={eyebrow("#185FA5")}>Често задавани въпроси</span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3vw, 36px)",
              color: "#0C447C",
              marginBottom: 48,
            }}
          >
            Имаш въпроси. Имаме отговори.
          </h2>

          <div>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{ borderBottom: "1px solid #E2DDD5" }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      padding: "24px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      textAlign: "left",
                      gap: 16,
                    }}
                    aria-expanded={isOpen}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 500,
                        fontSize: 16,
                        color: "#0C447C",
                        lineHeight: 1.4,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        color: "#185FA5",
                        fontSize: 24,
                        lineHeight: 1,
                        flexShrink: 0,
                        transition: "transform 200ms",
                        transform: isOpen ? "rotate(45deg)" : "none",
                        fontWeight: 300,
                      }}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <p
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontWeight: 300,
                        fontSize: 15,
                        lineHeight: 1.8,
                        color: "#5a5650",
                        paddingBottom: 24,
                        paddingTop: 0,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ CTA ══════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#0C447C",
          padding: "100px 48px",
          textAlign: "center",
        }}
        className="px-6 md:px-[48px]"
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(30px, 4vw, 48px)",
              color: "white",
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Направи първата стъпка.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 18,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Безплатна консултация. Без ангажимент. Едно съобщение е достатъчно.
          </p>
          <Link
            href="/kontakt"
            style={{
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
            }}
            className="hover:bg-[#E6F1FB]"
          >
            Свържи се с АДС
          </Link>
        </div>
      </section>
    </>
  );
}
