import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Conteúdo */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Tecnologia que conecta estratégia e execução
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-xl">
            Assessoria tecnológica, gestão de projetos de TI, cloud, automação e
            transformação digital para empresas que buscam resultados reais.
          </p>

          {/* CTA */}
          <div className="mt-8 flex justify-center md:justify-start">
            <Link
              href="https://wa.me/5519996210076"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-semibold text-white transition hover:bg-primary/90 hover:scale-105"
            >
              Falar com um especialista
            </Link>
          </div>
        </div>

        {/* w-full h-auto object-containm */}
        <div className="relative hidden md:block">
          <Image
            src="/images/hero/hero-tech.png"
            alt="Tecnologia e estratégia"
            width={600}
            height={600}
            priority
            className="w-full h-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
