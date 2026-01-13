"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"

type Props = {
  className?: string
}

export default function LanguageSwitcher({ className = "" }: Props) {
  const pathname = usePathname()
  const locale = useLocale()

  // Remove o locale atual do início da rota
  const cleanPath =
    pathname === `/${locale}`
      ? ""
      : pathname.replace(new RegExp(`^/${locale}`), "")

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
  ]

  return (
    <div
      className={`
        flex items-center gap-2
        rounded-xl border border-white/10
        bg-gradient-to-b from-[#0a1128] to-[#050b1a]
        backdrop-blur-md
        shadow-xl shadow-black/30
        p-2
        ${className}
      `}
    >
      <Globe size={14} className="text-slate-400" />

      <div className="flex gap-1">
        {languages.map(lang => {
          const isActive = locale === lang.code

          return (
            <Link
              key={lang.code}
              href={`/${lang.code}${cleanPath}`}
              className={`
                px-3 py-1.5 rounded-lg text-sm font-semibold
                transition-all duration-200
                ${
                  isActive
                    ? "bg-cyan-400 text-black shadow-md shadow-cyan-400/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }
              `}
            >
              {lang.label}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
