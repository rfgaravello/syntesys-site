import { NextIntlClientProvider } from 'next-intl'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppFloat from "../../components/WhatsAppFloat"
import Script from 'next/script'
import './globals.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  let messages = {}

  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error)
  }

  return (
    <html lang={params.locale}>
      <head>
        {/* 🔹 Google Search Console */}
        <meta
          name="google-site-verification"
          content="VSRVeiNhK42EysXN3809lJ7lKAM1TjVml9DbsXQ7YJc"
        />

        {/* 🔹 Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZHWMEWNL3C"
          strategy="afterInteractive"
        />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHWMEWNL3C');
          `}
        </Script>
      </head>

      <body>
        <NextIntlClientProvider locale={params.locale} messages={messages}>
          <Header />
          {children}
          <Footer />
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
