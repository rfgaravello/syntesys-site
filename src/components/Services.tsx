'use client'

import ServiceCard from "./ServiceCard"
import { useTranslations, useLocale } from "next-intl"

export default function Services() {
  const t = useTranslations("services")
  const locale = useLocale()

  // Helper: garante que o locale atual seja mantido
  const withLocale = (href: string) => `/${locale}${href}`

  const services = [
    {
      key: "assessoria",
      href: "/services/assessoria-tecnologica",
      icon: "cpu",
    },
    {
      key: "pmo",
      href: "/services/gestao-projetos-ti",
      icon: "bar-chart",
    },
    {
      key: "infra",
      href: "/services/infraestrutura-ti",
      icon: "monitor",
    },
    {
      key: "cloud",
      href: "/services/cloud-devops",
      icon: "cloud",
    },
    {
      key: "digital",
      href: "/services/transformacao-digital",
      icon: "rocket",
    },
    {
      key: "automation",
      href: "/services/automacao-processos",
      icon: "settings",
    },
    {
      key: "web",
      href: "/services/desenvolvimento-web-mobile",
      icon: "code",
    },
    {
      key: "documental",
      href: "/services/solucoes-documentais",
      icon: "users",
    },
    {
      key: "mentoria",
      href: "/services/mentoria-saude-emocional",
      icon: "heart",
    },
  ]

  // 🔥 FILTRO DEFINITIVO
  const filteredServices = services.filter(service => {
    if (service.key === "mentoria" && locale !== "pt") {
      return false
    }
    return true
  })

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {t("title")}
        </h2>
        <p className="text-slate-400">
          {t("subtitle")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard
            key={service.key}
            title={t(`${service.key}.title`)}
            description={t(`${service.key}.description`)}
            href={withLocale(service.href)}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}
