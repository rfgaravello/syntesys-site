import Contact from '../../../components/Contact'

export const metadata = {
  title: 'Contato | Syntesys',
  description: 'Fale com a Syntesys'
}

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <Contact />
    </main>
  )
}
