'use client'

import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Contact() {
  const t = useTranslations('contact')

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#050b1a] to-[#020617] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">

        {/* Headline */}
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            {t('title')}
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {/* WhatsApp (primário) */}
          <Link
            href={t('cta.whatsapp.link')}
            target="_blank"
            className="
              inline-flex items-center gap-3
              rounded-xl bg-cyan-400 px-9 py-4
              font-semibold text-black
              hover:bg-cyan-300 transition
              shadow-lg shadow-cyan-400/20
            "
          >
            <MessageCircle size={22} />
            {t('cta.whatsapp.text')}
          </Link>

          {/* Email (secundário) */}
          <Link
            href={t('cta.email.link')}
            className="
              inline-flex items-center gap-3
              rounded-xl border border-white/20
              px-9 py-4 text-white
              hover:border-cyan-400 hover:text-cyan-400 transition
            "
          >
            <Mail size={20} />
            {t('cta.email.text')}
          </Link>
        </div>

        {/* Micro-copy de confiança */}
        <p className="text-sm text-slate-500">
          {t('note')}
        </p>
      </div>
    </section>
  )
}
