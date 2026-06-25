"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div style={{
        padding: "48px 32px",
        backgroundColor: "#E6F1FB",
        borderRadius: 4,
        textAlign: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-playfair)",
          fontSize: 22,
          color: "#0C447C",
          marginBottom: 12,
        }}>
          Съобщението е изпратено!
        </p>
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 300,
          fontSize: 14,
          color: "#5a5650",
        }}>
          Ще се свържем с теб скоро.
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

  const inputBase: React.CSSProperties = {
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
      <div>
        <label htmlFor="name" style={fieldLabel}>Вашето име</label>
        <input
          id="name" type="text" required
          placeholder="Иван Петров"
          value={name} onChange={(e) => setName(e.target.value)}
          style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="email" style={fieldLabel}>Имейл</label>
        <input
          id="email" type="email" required
          placeholder="ivan@example.com"
          value={email} onChange={(e) => setEmail(e.target.value)}
          style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="phone" style={fieldLabel}>Телефон (незадължително)</label>
        <input
          id="phone" type="tel"
          placeholder="+359 8XX XXX XXX"
          value={phone} onChange={(e) => setPhone(e.target.value)}
          style={inputBase} onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      <div>
        <label htmlFor="message" style={fieldLabel}>Съобщение</label>
        <textarea
          id="message" required rows={5}
          placeholder="Опиши накратко с какво можем да помогнем..."
          value={message} onChange={(e) => setMessage(e.target.value)}
          style={{ ...inputBase, resize: "none" }}
          onFocus={handleFocus} onBlur={handleBlur}
        />
      </div>

      {error && (
        <p style={{
          fontFamily: "var(--font-dm-sans)",
          fontSize: 13,
          color: "#c0392b",
          padding: "12px 16px",
          backgroundColor: "#fdf2f2",
          borderRadius: 2,
          margin: 0,
        }}>
          Възникна грешка. Моля обади се на +359 877 309 794.
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        style={{
          fontFamily: "var(--font-dm-sans)",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          backgroundColor: loading ? "#185FA5" : "#0C447C",
          color: "white",
          padding: 16,
          borderRadius: 2,
          border: "none",
          cursor: loading ? "default" : "pointer",
          width: "100%",
          transition: "background-color 200ms",
        }}
        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#185FA5"; }}
        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#0C447C"; }}
      >
        {loading ? "Изпраща се..." : "Изпрати"}
      </button>

      <p style={{
        fontFamily: "var(--font-dm-sans)",
        fontSize: 11,
        color: "#9a9590",
        textAlign: "center",
      }}>
        Данните се обработват съгласно нашата{" "}
        <a href="/gdpr" style={{ color: "#0C447C", textDecoration: "underline" }}>
          политика за поверителност
        </a>.
      </p>
    </form>
  );
}
