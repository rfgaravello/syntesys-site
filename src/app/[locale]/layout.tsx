import { NextIntlClientProvider } from 'next-intl'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WhatsAppFloat from "../../components/WhatsAppFloat"
import LanguageSwitcher from '../../components/LanguageSwitcher'
import './globals.css'

export default async function LocaleLayout({ children, params }) {
  let messages = {}

  try {
    messages = (await import(`../../../messages/${params.locale}.json`)).default
  } catch (error) {
    console.error('Erro ao carregar mensagens:', error)
  }

  return (
    <html lang={params.locale}>
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
