"use client"

import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import {
  Cpu,
  BarChart2,
  Monitor,
  Cloud,
  Rocket,
  Settings,
  Code,
  Archive,
  Heart,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  cpu: <Cpu className="icon" />,
  "bar-chart": <BarChart2 className="icon" />,
  monitor: <Monitor className="icon" />,
  cloud: <Cloud className="icon" />,
  rocket: <Rocket className="icon" />,
  settings: <Settings className="icon" />,
  code: <Code className="icon" />,
  users: <Archive className="icon" />,
  heart: <Heart className="icon" />,
}

interface ServiceCardProps {
  title: string
  description: string
  href: string
  icon: string
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceCardProps) {
  const t = useTranslations()
  const locale = useLocale()

  const isPortuguese = locale.startsWith("pt")
  const isMentoria = href.includes("mentoria")

  // 🔒 Esconde Mentoria fora do PT
  if (isMentoria && !isPortuguese) {
    return null
  }

  return (
    <Link
      href={href}
      className="
        group relative overflow-hidden rounded-2xl
        border border-white/10
        bg-gradient-to-b from-[#0a1128] to-[#050b1a]
        p-6 transition
        hover:border-cyan-400/50
        hover:shadow-xl hover:shadow-cyan-500/10
      "
    >
      <div className="text-3xl mb-4">
        {iconMap[icon]}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-sm text-slate-400 mb-6">
        {description}
      </p>

      <span className="text-sm text-cyan-400 font-medium group-hover:underline">
        {t("common.learnMore")} →
      </span>
    </Link>
  )
}
