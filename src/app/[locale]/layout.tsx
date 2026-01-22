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
        {/* Google Tag Manager -->*/}
                <Script
          id="google-tag-manager"
          strategy="afterInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W5TBCGXW');
          `}
        </Script>

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZHWMEWNL3C" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZHWMEWNL3C', { page_path: window.location.pathname });
          `}
        </Script>

      </head>

      <body>
        {/* Google Tag Manager -->*/}
              <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W5TBCGXW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* Google Tag Manager -- end >*/}
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
