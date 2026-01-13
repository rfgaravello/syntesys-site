import { NextResponse } from "next/server"

export async function GET() {
  // Não mostra a senha real!
  return NextResponse.json({
    SMTP_HOST: process.env.SMTP_HOST ?? "undefined",
    SMTP_PORT: process.env.SMTP_PORT ?? "undefined",
    SMTP_USER: process.env.SMTP_USER ?? "undefined",
    SMTP_PASS_SET: !!process.env.SMTP_PASS, // true se existe
  })
}
