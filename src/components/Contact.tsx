'use client'

import { useRef, useState } from "react"
import { Mail, MessageCircle, X } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
  const t = useTranslations('contact')
  const locale = useLocale() || "pt" // garante que nunca seja undefined

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const formRef = useRef<HTMLFormElement>(null)
  const formStartRef = useRef<number>(Date.now())

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    const formData = new FormData(formRef.current!)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
          company: formData.get("company"), // honeypot
          startedAt: formStartRef.current,
          locale // passa para o backend
        }),
      })

      if (!res.ok) throw new Error()

      setSuccess(true)
      formRef.current?.reset()

      setTimeout(() => {
        setOpen(false)
        setSuccess(false)
      }, 2000)
    } catch {
      setError(t("form.error"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-32 bg-gradient-to-b from-[#050b1a] to-[#020617] border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <div className="space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-white">{t('title')}</h2>
          <p className="text-lg text-slate-400 leading-relaxed">{t('subtitle')}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href={t('cta.whatsapp.link')}
            target="_blank"
            className="inline-flex items-center gap-3 rounded-xl bg-cyan-400 px-9 py-4 font-semibold text-black hover:bg-cyan-300 transition shadow-lg shadow-cyan-400/20"
          >
            <MessageCircle size={22} />
            {t('cta.whatsapp.text')}
          </a>

          <button
            onClick={() => {
              formStartRef.current = Date.now()
              setOpen(true)
              setError("")
              setSuccess(false)
            }}
            className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-9 py-4 text-white hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            <Mail size={20} />
            {t('cta.email.text')}
          </button>
        </div>

        <p className="text-sm text-slate-500">{t('note')}</p>
      </div>

      {/* MODAL COM ANIMAÇÃO */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-lg rounded-2xl bg-[#050b1a] border border-white/10 p-8 space-y-6"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
              >
                <X />
              </button>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <input
                  name="name"
                  required
                  placeholder={t("form.name")}
                  className="w-full p-3 rounded bg-slate-900 border border-white/10"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder={t("form.email")}
                  className="w-full p-3 rounded bg-slate-900 border border-white/10"
                />
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t("form.message")}
                  className="w-full p-3 rounded bg-slate-900 border border-white/10"
                />
                {/* Honeypot */}
                <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-cyan-400 hover:bg-cyan-300 text-black py-3 rounded-xl font-semibold transition disabled:opacity-50"
                >
                  {loading ? t("form.sending") : t("form.submit")}
                </button>

                {success && (
                  <p className="text-green-400 text-sm text-center">{t("form.success")}</p>
                )}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
