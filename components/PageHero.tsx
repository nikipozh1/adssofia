interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section style={{
      background: "#0C447C",
      padding: "120px 48px 100px",
      minHeight: "320px",
      display: "flex",
      alignItems: "flex-end",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <p style={{
          fontSize: "11px",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#B5D4F4",
          marginBottom: "20px",
          fontWeight: 500,
          fontFamily: "var(--font-dm-sans)",
        }}>
          {eyebrow}
        </p>
        <h1 style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "52px",
          fontWeight: 700,
          color: "white",
          lineHeight: 1.1,
          marginBottom: subtitle ? "20px" : "0",
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: "18px",
            color: "rgba(255,255,255,0.65)",
            fontWeight: 300,
            lineHeight: 1.6,
            maxWidth: "600px",
            fontFamily: "var(--font-dm-sans)",
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
