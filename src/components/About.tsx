'use client'

import Image from "next/image"
import { useTranslations } from "next-intl"

export default function About() {
  const t = useTranslations('about')

  return (
    <section  id="about" className="py-28 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Conteúdo */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('title')}
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            <span className="text-white font-medium">Syntesys</span>{" "}
            {t('intro')}
          </p>

          <p className="text-lg text-slate-400 leading-relaxed">
            {t('mission')}
          </p>

          {/* Diferenciais */}
          <ul className="space-y-4">
            {t.raw('highlights').map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>

          {/* Assinatura */}
          <div className="pt-6 text-slate-400 leading-relaxed space-y-4">
            <p>
              {t('signature.prefix')}{" "}
              <span className="text-white font-medium">
                Rafael D. Garavello
              </span>
              , {t('signature.bio')}
            </p>

            <p>{t('signature.experience')}</p>

            <a
              href={t('signature.linkedinUrl')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-cyan-400 hover:underline"
            >
              {t('signature.linkedinText')}
            </a>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative h-[420px] w-full rounded-2xl overflow-hidden border border-white/10">
          <Image
            src="/images/about/team-tech.png"
            alt={t('imageAlt')}
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
