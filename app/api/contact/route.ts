import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, phone, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.abv.bg",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "adssofia@abv.bg",
      subject: `Ново съобщение от сайта — ${name}`,
      html: `
        <h2 style="color:#0C447C;">Ново запитване от adssofia.bg</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Имейл:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone || "не е посочен"}</p>
        <p><strong>Съобщение:</strong></p>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
