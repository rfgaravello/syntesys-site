"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Globe } from "lucide-react"

type Props = {
    className?: string
  }

  export default function LanguageSwitcher({ className = "" }: Props) {
  const pathname = usePathname()

  // remove /pt ou /en da rota atual
  const cleanPath = pathname.replace(/^\/(pt|en)/, "") || "/"

  const languages = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" }
  ]

  const currentLocale = pathname.startsWith("/en") ? "en" : "pt"

  return (
    <div className="
      flex bottom-6 right-6 z-50
      rounded-xl border border-white/10
      bg-gradient-to-b from-[#0a1128] to-[#050b1a]
      backdrop-blur-md
      shadow-xl shadow-black/30
      p-2
    ">
      <div className="flex items-center gap-2 px-2 pb-2 text-slate-400 text-xs">
        <Globe size={14} />
        <span></span>
      </div>

      <div className="flex gap-1">
        {languages.map(lang => {
          const isActive = currentLocale === lang.code

          return (
            <Link
              key={lang.code}
              href={`/${lang.code}${cleanPath}`}
              className={`
                px-3 py-1.5 rounded-lg text-sm font-semibold
                transition-all duration-200
                ${isActive
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
