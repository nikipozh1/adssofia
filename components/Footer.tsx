import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/za-nas", label: "За нас" },
  { href: "/prava", label: "Правата ти" },
  { href: "/stani-chlen", label: "Стани член" },
  { href: "/kontakt", label: "Контакт" },
];

const contactItems = [
  'ул. "Сердика" 21, София 1202',
  "+359 877 309 794",
  "adssofia@abv.bg",
  "Пон–Пет, 9:00–17:00",
];

const colLabel: React.CSSProperties = {
  fontFamily: "var(--font-dm-sans)",
  fontSize: 10,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.3)",
  display: "block",
  marginBottom: 20,
};

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: "#0C447C",
      borderTop: "3px solid #185FA5",
      padding: "56px 48px 0",
    }} className="px-6 md:px-[48px]">
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-14 md:gap-[56px]">

          {/* Col 1 — logo */}
          <div>
            <div style={{
              backgroundColor: "white",
              display: "inline-block",
              padding: 8,
              borderRadius: 4,
            }}>
              <Image
                src="/ads_logo.jpg"
                alt="АДС София"
                width={120}
                height={52}
                style={{ height: 52, width: "auto", display: "block" }}
              />
            </div>
            <p style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 14,
              color: "rgba(255,255,255,0.45)",
              marginTop: 16,
              lineHeight: 1.6,
            }}>
              Защитаваме работниците от 1993 г.
            </p>
          </div>

          {/* Col 2 — nav */}
          <div>
            <span style={colLabel}>Навигация</span>
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} style={{
                display: "block",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 12,
                textDecoration: "none",
                transition: "color 200ms",
              }} className="hover:text-white">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Col 3 — contact */}
          <div>
            <span style={colLabel}>Контакт</span>
            {contactItems.map((item) => (
              <p key={item} style={{
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 300,
                fontSize: 14,
                color: "rgba(255,255,255,0.6)",
                marginBottom: 12,
                lineHeight: 1.5,
              }}>
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          marginTop: 48,
          paddingTop: 28,
          paddingBottom: 28,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2026 АДС София. Всички права запазени.
          </p>
          <Link href="/gdpr" style={{
            fontFamily: "var(--font-dm-sans)",
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            textDecoration: "none",
            transition: "color 200ms",
          }} className="hover:text-white/50">
            Политика за поверителност
          </Link>
        </div>
      </div>
    </footer>
  );
}
