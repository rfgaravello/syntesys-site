
/*
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-[#050b1a] text-slate-200">
        <Header />
        {children}  {/* Renderiza o conteúdo da página 
        <Footer />
      </body>
    </html>
  )
}
*/
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from "../components/WhatsAppFloat"
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-text font-sans min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
