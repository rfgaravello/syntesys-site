import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function clientConfirmationTemplate({
  name,
  message,
  locale,
}: {
  name: string
  message: string
  locale: "pt" | "en"
}) {
  const isPT = locale === "pt"

  return `
  <!DOCTYPE html>
  <html lang="${locale}">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body style="margin:0; padding:0; background:#020617; font-family:Arial, Helvetica, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0"
              style="background:#050b1a; border-radius:16px; padding:32px; color:#e5e7eb;">

              <tr>
                <td align="center" style="padding-bottom:24px;">
                <img
                src="https://syntesys.com.br/images/email/syntesys-logo.svg"
                width="140"
                alt="Syntesys"
                style="display:block; margin:0 auto;"
              />
                </td>
              </tr>

              <tr>
                <td style="font-size:22px; font-weight:bold; color:#22d3ee; padding-bottom:16px;">
                  ${isPT ? "Recebemos sua mensagem" : "We received your message"}
                </td>
              </tr>

              <tr>
                <td style="font-size:15px; line-height:1.6; color:#cbd5f5;">
                  <p>
                    ${isPT ? `Olá <strong>${name}</strong>,` : `Hello <strong>${name}</strong>,`}
                  </p>

                  <p>
                    ${
                      isPT
                        ? "Obrigado por entrar em contato com a Syntesys. Nossa equipe retornará em breve."
                        : "Thank you for contacting Syntesys. Our team will get back to you shortly."
                    }
                  </p>

                  <p><strong>${isPT ? "Sua mensagem:" : "Your message:"}</strong></p>

                  <div style="background:#020617; padding:16px; border-radius:8px;">
                    ${message.replace(/\n/g, "<br />")}
                  </div>

                  <p style="margin-top:24px;">
                    ${isPT ? "Atenciosamente," : "Best regards,"}<br />
                    <strong>Equipe Syntesys</strong>
                  </p>
                </td>
              </tr>

              <tr>
                <td style="padding-top:32px; font-size:12px; color:#94a3b8; text-align:center;">
                  © ${new Date().getFullYear()} Syntesys<br/>
                  ${isPT
                    ? "Consultoria tecnológica para decisões estratégicas."
                    : "Technology consulting for strategic decisions."}
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `
}

export async function POST(req: Request) {
  try {
    const { name, email, message, company, startedAt, locale } = await req.json()

    //const safeLocale: "pt" | "en" = locale === "en" ? "en" : "pt"
    const safeLocale: "pt" | "en" = locale === "en" ? "en" : "pt"

  

const isPT = safeLocale === "pt"
    // Honeypot
    if (company) return NextResponse.json({ success: true })

    // Tempo mínimo anti-bot
    if (Date.now() - Number(startedAt) < 3000) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email para VOCÊ (admin)
    await transporter.sendMail({
      from: `"Site Syntesys" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Novo contato - ${name}`,
      html: `
        <h2>Novo contato pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    })

    // Email para o CLIENTE (HTML bonito)
    await transporter.sendMail({
      from: `"Syntesys" <${process.env.SMTP_FROM}>`,
      to: email,
      subject:
        safeLocale === "pt"
          ? "Recebemos sua mensagem – Syntesys"
          : "We received your message – Syntesys",
      html: clientConfirmationTemplate({
        name,
        message,
        locale: safeLocale,
      }),
    })
    console.log("RAW LOCALE:", locale)
    console.log("SAFE LOCALE:", safeLocale)
    console.log("SMTP_HOST:", process.env.SMTP_HOST)
console.log("SMTP_PORT:", process.env.SMTP_PORT)
console.log("SMTP_USER:", process.env.SMTP_USER)
console.log("SMTP_PASS:", process.env.SMTP_PASS ? "OK" : "MISSING")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Erro ao enviar mensagem" },
      { status: 500 }
    )
  }
}
