"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/za-nas", label: "За нас" },
  { href: "/prava", label: "Правата ти" },
  { href: "/stani-chlen", label: "Стани член" },
  { href: "/novini", label: "Новини" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      backgroundColor: "#F7F5F0",
      borderBottom: "1px solid #E2DDD5",
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 50,
      height: 72,
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 48px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }} className="px-6 md:px-[48px]">

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/ads_logo.jpg"
            alt="АДС София"
            width={120}
            height={52}
            style={{ height: 52, width: "auto", mixBlendMode: "multiply" }}
            priority
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: 13,
              letterSpacing: "0.02em",
              color: "#5a5650",
              textDecoration: "none",
              transition: "color 200ms",
            }} className="hover:text-[#0C447C]">
              {l.label}
            </Link>
          ))}
          <Link href="/kontakt" style={{
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: 13,
            backgroundColor: "#0C447C",
            color: "white",
            padding: "10px 22px",
            borderRadius: 2,
            textDecoration: "none",
            transition: "background-color 200ms",
          }} className="hover:bg-[#185FA5]">
            Свържи се
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 flex flex-col gap-[5px]"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Затвори" : "Меню"}
          aria-expanded={open}
        >
          <span className="block w-[22px] h-[1.5px] bg-[#1A1A18]" />
          <span className="block w-[22px] h-[1.5px] bg-[#1A1A18]" />
          <span className="block w-[22px] h-[1.5px] bg-[#1A1A18]" />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div style={{
          backgroundColor: "white",
          borderTop: "1px solid #E2DDD5",
          padding: "16px 24px 24px",
        }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: "block",
              fontFamily: "var(--font-dm-sans)",
              fontSize: 15,
              color: "#1A1A18",
              padding: "13px 0",
              borderBottom: "1px solid #E2DDD5",
              textDecoration: "none",
            }}>
              {l.label}
            </Link>
          ))}
          <Link href="/kontakt" onClick={() => setOpen(false)} style={{
            display: "block",
            marginTop: 16,
            textAlign: "center",
            fontFamily: "var(--font-dm-sans)",
            fontWeight: 500,
            fontSize: 13,
            backgroundColor: "#0C447C",
            color: "white",
            padding: "13px 22px",
            borderRadius: 2,
            textDecoration: "none",
          }}>
            Свържи се
          </Link>
        </div>
      )}
    </header>
  );
}
