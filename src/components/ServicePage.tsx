import Image from "next/image"

interface ServiceSection {
  title: string
  items: string[]
  image?: string
  cta?: {
    label: string
    href: string
  }
}

export interface ServiceContent {
  title: string
  subtitle: string
  heroImage?: string
  sections: ServiceSection[]
  cta?: {
    title: string
    subtitle: string
    button: {
      label: string
      href: string
    }
  }
}

interface ServicePageProps {
  content: ServiceContent
}

export default function ServicePage({ content }: ServicePageProps) {
  return (
    <div className="max-w-7xl mx-auto px-6 space-y-16 md:space-y-20">
      {/* HERO */}
      <header className="space-y-6 md:space-y-8">
        {content.heroImage && (
          <div className="relative w-full rounded-3xl  border-white/10 overflow-hidden
            h-[220px] sm:h-[320px] md:h-[420px] bg-[#050b1a]">
            <Image
              src={content.heroImage}
              alt={content.title}
              fill
              priority
              unoptimized
              className="img-hero object-contain"
            />
          </div>
        )}

        <div className="space-y-4 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {content.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-400">
            {content.subtitle}
          </p>
        </div>
      </header>

      {/* SECTIONS */}
      <div className="space-y-14 md:space-y-16">
        {content.sections.map((section, index) => (
          <section
            key={index}
            className="
              grid grid-cols-1 md:grid-cols-2
              gap-10 md:gap-14
              items-center
            "
          >
            {/* Texto */}
            <div
              className="
                rounded-2xl border border-white/10
                bg-gradient-to-b from-[#0a1128] to-[#050b1a]
                p-6 sm:p-8
                flex flex-col justify-between
              "
            >
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400 mb-5">
                  {section.title}
                </h2>

                <ul className="space-y-3 text-slate-300 text-sm">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA POR SEÇÃO */}
              {section.cta && (
                <a
                  href={section.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6 inline-flex items-center justify-center
                    rounded-xl bg-cyan-400
                    px-6 py-3
                    font-semibold text-black
                    hover:bg-cyan-300 transition
                    w-full sm:w-fit
                  "
                >
                  {section.cta.label}
                </a>
              )}
            </div>

            {/* Imagem */}
            {section.image && (
              <div
              className="
                relative w-full
                h-[240px] sm:h-[300px] md:h-[360px]
                rounded-2xl
                border border-white/10
                bg-white
                flex items-center justify-center
                overflow-hidden
              "
            >
              <Image
                src={section.image}
                alt={section.title}
                fill
                unoptimized
                className="object-contain p-6"
              />
            </div>
           
            )}
          </section>
        ))}
      </div>

      {/* CTA FINAL */}
      {content.cta && (
        <section className="text-center space-y-5 md:space-y-6 pt-8 md:pt-10">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            {content.cta.title}
          </h3>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            {content.cta.subtitle}
          </p>

          <a
            href={content.cta.button.href}
            className="
              inline-block rounded-xl
              bg-cyan-400
              px-8 sm:px-10 py-4
              font-semibold text-black
              hover:bg-cyan-300 transition
            "
          >
            {content.cta.button.label}
          </a>
        </section>
      )}
    </div>
  )
}
