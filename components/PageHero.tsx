interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section
      className="px-4 md:px-8 lg:px-[48px] pt-28 md:pt-[120px] pb-20 md:pb-[100px] min-h-[360px] md:min-h-[320px]"
      style={{
        background: "#0C447C",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
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
          fontSize: "clamp(32px, 5vw, 52px)",
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
