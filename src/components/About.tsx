import Image from "next/image"

export default function About() {
  return (
    <section className="py-28 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Conteúdo */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Sobre a Syntesys
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            A <span className="text-white font-medium">Syntesys</span> é uma
            consultoria de tecnologia focada em alinhar estratégia, processos e
            tecnologia para gerar resultados reais e sustentáveis.
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            Atuamos junto a líderes e empresas que precisam transformar ideias
            em execução concreta — com governança, clareza técnica e visão de
            negócio.
          </p>

          {/* Diferenciais */}
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-slate-300">
                Experiência prática em projetos de TI, cloud e transformação
                digital
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-slate-300">
                Visão estratégica aliada à execução técnica de alto nível
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              <span className="text-slate-300">
                Atuação próxima, transparente e orientada a resultado
              </span>
            </li>
          </ul>

          {/* Assinatura */}
          <div className="pt-6">
            <p className="text-slate-400">
              Fundada por{" "}
              <span className="text-white font-medium">
                Rafael Garavello
              </span>
              , especialista em projetos de TI, cloud e governança tecnológica.
            </p>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/about/team-tech.png"
            alt="Equipe e tecnologia"
            fill
            className="object-cover"
            unoptimized
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
