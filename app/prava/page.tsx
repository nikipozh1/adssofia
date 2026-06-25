import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Знай правата си",
  description:
    "Твоите трудови права обяснени на разбираем език. Трудов договор, извънреден труд, уволнение, отпуск — всичко което трябва да знаеш.",
};

const stats = [
  { num: "50%", text: "от работниците не знаят че имат право на +50% за извънреден труд" },
  { num: "20 дни", text: "минимален платен отпуск — право което много работодатели нарушават" },
  { num: "30 дни", text: "срок за обжалване на незаконно уволнение — след това е твърде късно" },
];

const rights = [
  {
    article: "Чл. 63, ал. 1–2",
    title: "Договор преди първия работен ден",
    text: "Работодателят е длъжен да ти връчи подписан трудов договор преди да започнеш работа. Ако работиш без договор — това е нарушение на закона.",
  },
  {
    article: "Чл. 262, ал. 1",
    title: "Извънреден труд се плаща с 50% надбавка",
    text: "Всеки час работа извън нормалното работно време се заплаща с минимум 50% надбавка. Ако работодателят не плаща — нарушава закона.",
  },
  {
    article: "Чл. 155, ал. 1",
    title: "Минимум 20 дни платен отпуск",
    text: "Имаш право на минимум 20 работни дни платен годишен отпуск. Работодателят не може да те принуди да работиш вместо да ползваш отпуск.",
  },
  {
    article: "Чл. 344 и Чл. 358",
    title: "Можеш да обжалваш незаконно уволнение",
    text: "При незаконно уволнение имаш право да се върнеш на работа и да получиш обезщетение. Срокът за обжалване е 30 дни — след това правото се губи.",
  },
  {
    article: "Чл. 111 (изм. 2022)",
    title: "Имаш право на втора работа",
    text: "Можеш да работиш при друг работодател освен ако в договора ти изрично не е забранено за конкурентна дейност. Забраната трябва да е писмена.",
  },
  {
    article: "Чл. 272, ал. 1",
    title: "Удръжки от заплата само с твое съгласие",
    text: "Работодателят не може да удържа суми от заплатата ти без твоето писмено съгласие или съдебно решение. Изключение са само данъци и осигуровки.",
  },
];

const categories = [
  { symbol: "§", title: "Трудов договор", text: "Права при подписване, изменение и прекратяване на договора" },
  { symbol: "⏱", title: "Работно време", text: "Извънреден труд, нощен труд, почивки и отпуски" },
  { symbol: "₽", title: "Заплащане", text: "Минимална заплата, удръжки, бонуси и обезщетения" },
  { symbol: "⚖", title: "Уволнение", text: "Законни основания, обжалване и обезщетение при уволнение" },
  { symbol: "♥", title: "Здраве и безопасност", text: "Безопасни условия на труд, трудови злополуки и болнични" },
  { symbol: "◎", title: "Дискриминация", text: "Защита от тормоз, дискриминация и неравно третиране" },
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

export default function Prava() {
  return (
    <>
      <PageHero
        eyebrow="Знай правата си"
        title="Кодексът на труда е на твоя страна."
        subtitle="Повечето работници не знаят правата си. Ние ги обясняваме на разбираем език — без юридически жаргон."
      />

      {/* ══ ВЪВЕЖДАЩА СЕКЦИЯ ════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F7F5F0" }}
        className="px-4 md:px-8 lg:px-[48px] py-16 md:py-[80px]"
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[80px] items-center"
        >
          {/* Left */}
          <div>
            <span style={eyebrow("#185FA5")}>Защо е важно</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#0C447C",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              Не знаеш правата си — не можеш да ги защитиш.
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
              България има едно от най-детайлните трудови законодателства в
              Европа. Проблемът не е в законите — а в това, че работниците не
              знаят какво пише в тях. Работодателите знаят. Ти също трябва.
            </p>
          </div>

          {/* Right — stats */}
          <div>
            {stats.map((s) => (
              <div
                key={s.num}
                style={{
                  borderLeft: "3px solid #0C447C",
                  paddingLeft: 24,
                  marginBottom: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontWeight: 700,
                    fontSize: 42,
                    color: "#0C447C",
                    lineHeight: 1.1,
                    marginBottom: 6,
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "#7a7570",
                    lineHeight: 1.6,
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6 ПРАВА ════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F7F5F0" }}
        className="px-4 md:px-8 lg:px-[48px] pb-16 md:pb-[100px]"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={eyebrow("#185FA5")}>Основни права</span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: "#0C447C",
              marginBottom: 48,
            }}
          >
            6 права които трябва да знаеш.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rights.map((r) => (
              <div
                key={r.article}
                style={{
                  background: "white",
                  border: "1px solid #E2DDD5",
                  borderTop: "3px solid #0C447C",
                  borderRadius: 4,
                  padding: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#185FA5",
                    marginBottom: 12,
                  }}
                >
                  {r.article}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    fontSize: 17,
                    color: "#0C447C",
                    marginBottom: 8,
                    lineHeight: 1.3,
                  }}
                >
                  {r.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#5a5650",
                  }}
                >
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ КАТЕГОРИИ ══════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#1A1A18" }}
        className="px-4 md:px-8 lg:px-[48px] py-16 md:py-[100px]"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <span style={eyebrow("#B5D4F4")}>Разгледай по тема</span>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: "white",
              marginBottom: 48,
            }}
          >
            Намери правата си по тема.
          </h2>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: 1, background: "rgba(255,255,255,0.06)" }}
          >
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href="/kontakt"
                style={{
                  background: "#1A1A18",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "40px 32px",
                  textDecoration: "none",
                  display: "block",
                  transition: "background-color 200ms",
                }}
                className="hover:bg-white/[0.04]"
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 48,
                    color: "rgba(255,255,255,0.12)",
                    display: "block",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {cat.symbol}
                </span>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 500,
                    fontSize: 16,
                    color: "white",
                    marginBottom: 8,
                  }}
                >
                  {cat.title}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.6,
                    marginBottom: 20,
                  }}
                >
                  {cat.text}
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 12,
                    color: "#B5D4F4",
                    display: "block",
                  }}
                >
                  Научи повече →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ИМАШ ВЪПРОС? ═══════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#E6F1FB" }}
        className="px-4 md:px-8 lg:px-[48px] py-16 md:py-[80px]"
      >
        <div
          style={{ maxWidth: 1200, margin: "0 auto" }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-[48px] items-center"
        >
          <div>
            <span style={eyebrow("#185FA5")}>Не намираш отговор?</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair)",
                fontWeight: 700,
                fontSize: "clamp(24px, 3vw, 36px)",
                color: "#0C447C",
                marginBottom: 16,
              }}
            >
              Попитай ни директно.
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: 16,
                color: "#3a3a38",
                lineHeight: 1.7,
                maxWidth: 520,
              }}
            >
              Ако имаш конкретен въпрос за твоята ситуация — свържи се с нас.
              Членовете получават безплатна правна консултация.
            </p>
          </div>

          <Link
            href="/kontakt"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              backgroundColor: "#0C447C",
              color: "white",
              padding: "18px 36px",
              borderRadius: 2,
              textDecoration: "none",
              display: "inline-block",
              whiteSpace: "nowrap",
              transition: "background-color 200ms",
            }}
            className="hover:bg-[#185FA5]"
          >
            Свържи се с АДС
          </Link>
        </div>
      </section>
    </>
  );
}
