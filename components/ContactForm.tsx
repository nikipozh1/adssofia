"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 700);
  }

  if (sent) {
    return (
      <div style={{
        padding: "48px 32px",
        backgroundColor: "#E6F1FB",
        borderRadius: 4,
        textAlign: "center",
      }}>
        <p style={{ fontFamily: "var(--font-playfair)", fontSize: 22, color: "#0C447C", marginBottom: 12 }}>
          Получихме съобщението ти.
        </p>
        <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 14, color: "#5a5650" }}>
          Ще се свържем с теб в рамките на 1 работен ден.
        </p>
      </div>
    );
  }

  const fieldLabel: React.CSSProperties = {
    fontFamily: "var(--font-dm-sans)",
    fontWeight: 500,
    fontSize: 11,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "#0C447C",
    display: "block",
    marginBottom: 4,
  };

  const input: React.CSSProperties = {
    display: "block",
    width: "100%",
    border: 0,
    borderBottom: "1px solid #E2DDD5",
    background: "transparent",
    padding: "14px 0",
    fontFamily: "var(--font-dm-sans)",
    fontSize: 15,
    color: "#1A1A18",
    outline: "none",
    transition: "border-color 200ms",
    boxSizing: "border-box",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "#0C447C";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.currentTarget.style.borderBottomColor = "#E2DDD5";
  };

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {[
        { id: "name", label: "Вашето име", type: "text", required: true, placeholder: "Иван Петров" },
        { id: "email", label: "Имейл", type: "email", required: true, placeholder: "ivan@example.com" },
        { id: "phone", label: "Телефон (незадължително)", type: "tel", required: false, placeholder: "+359 8XX XXX XXX" },
      ].map((f) => (
        <div key={f.id}>
          <label htmlFor={f.id} style={fieldLabel}>{f.label}</label>
          <input
            id={f.id} name={f.id} type={f.type}
            required={f.required} placeholder={f.placeholder}
            style={input} onFocus={handleFocus} onBlur={handleBlur}
          />
        </div>
      ))}

      <div>
        <label htmlFor="message" style={fieldLabel}>Съобщение</label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Опиши накратко с какво можем да помогнем..."
          style={{ ...input, resize: "none" }}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <button type="submit" disabled={sending} style={{
        fontFamily: "var(--font-dm-sans)",
        fontWeight: 500,
        fontSize: 13,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        backgroundColor: sending ? "#185FA5" : "#0C447C",
        color: "white",
        padding: 16,
        borderRadius: 2,
        border: "none",
        cursor: sending ? "default" : "pointer",
        width: "100%",
        transition: "background-color 200ms",
      }}
        onMouseEnter={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#185FA5"; }}
        onMouseLeave={(e) => { if (!sending) e.currentTarget.style.backgroundColor = "#0C447C"; }}
      >
        {sending ? "Изпраща се..." : "Изпрати"}
      </button>

      <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 11, color: "#9a9590", textAlign: "center" }}>
        Данните се обработват съгласно нашата{" "}
        <a href="/gdpr" style={{ color: "#0C447C", textDecoration: "underline" }}>политика за поверителност</a>.
      </p>
    </form>
  );
}
