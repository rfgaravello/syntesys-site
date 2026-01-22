
// app/[locale]/page.tsx
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import About from '../../components/About';
import Contact from '../../components/Contact';
import {useTranslations} from 'next-intl';
import LanguageSwitcher from '../../components/LanguageSwitcher';

export const metadata = {
  title: 'Home | Syntesys',
  description: 'Consultoria tecnológica para decisões estratégicas.'
};

// 🔹 Gera as rotas estáticas para cada idioma
export function generateStaticParams() {
  return [{ locale: 'pt' }, { locale: 'en' }];
}


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
      </main>
  )
}
