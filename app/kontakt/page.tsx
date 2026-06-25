import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Контакт",
  description: "Свържете се с АДС София. Безплатна консултация за всеки нов член.",
};

const contactItems = [
  { label: "Адрес", value: 'ул. "Сердика" 21, София 1202', href: undefined },
  { label: "Телефон", value: "+359 877 309 794", href: "tel:+359877309794" },
  { label: "Имейл", value: "adssofia@abv.bg", href: "mailto:adssofia@abv.bg" },
  { label: "Работно време", value: "Пон–Пет, 9:00–17:00", href: undefined },
];

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#B5D4F4",
  display: "block",
  marginBottom: 16,
};

const sectionLabel: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontWeight: 500,
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#185FA5",
  display: "block",
  marginBottom: 16,
};

export default function Kontakt() {
  return (
    <>
      {/* HERO */}
      <section style={{
        backgroundColor: "#0C447C",
        padding: "100px 48px 80px",
        minHeight: 280,
        display: "flex",
        alignItems: "flex-end",
      }} className="px-6 md:px-[48px] pt-[110px]">
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <span style={eyebrow}>Контакт</span>
          <h1 style={{
            fontFamily: "var(--font-playfair)",
            fontWeight: 700,
            fontSize: "clamp(36px, 5vw, 52px)",
            lineHeight: 1.05,
            color: "white",
          }}>
            Свържи се с нас
          </h1>
        </div>
      </section>

      {/* MAIN */}
      <section style={{ backgroundColor: "#F7F5F0", padding: "100px 48px" }} className="px-6 md:px-[48px]">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-[80px]">

          {/* Left — contact info */}
          <div>
            <span style={sectionLabel}>Контактна информация</span>
            <h2 style={{
              fontFamily: "var(--font-playfair)",
              fontWeight: 700,
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.2,
              color: "#0C447C",
              marginBottom: 48,
            }}>
              Сме тук за теб.
            </h2>

            {contactItems.map((item) => (
              <div key={item.label} style={{
                borderBottom: "1px solid #E2DDD5",
                paddingBottom: 20,
                marginBottom: 20,
              }}>
                <p style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#0C447C",
                  marginBottom: 8,
                }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 16,
                    color: "#1A1A18",
                    textDecoration: "none",
                    transition: "color 200ms",
                  }} className="hover:text-[#0C447C]">
                    {item.value}
                  </a>
                ) : (
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 16, color: "#1A1A18" }}>
                    {item.value}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div>
            <span style={sectionLabel}>Изпрати съобщение</span>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
