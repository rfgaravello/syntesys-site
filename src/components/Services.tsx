'use client'

import ServiceCard from "./ServiceCard"
import { useTranslations, useLocale } from "next-intl"
import { Cog6ToothIcon } from "@heroicons/react/24/solid" // ou qualquer biblioteca de ícones que use

export default function Services() {
  const t = useTranslations("services")
  const locale = useLocale()

  const services = [
    { key: "assessoria", href: "/services/assessoria-tecnologica", icon: "cpu" },
    { key: "pmo", href: "/services/gestao-projetos-ti", icon: "bar-chart" },
    { key: "infra", href: "/services/infraestrutura-ti", icon: "monitor" },
    { key: "cloud", href: "/services/cloud-devops", icon: "cloud" },
    { key: "digital", href: "/services/transformacao-digital", icon: "rocket" },
    { key: "automation", href: "/services/automacao-processos", icon: "settings" },
    { key: "web", href: "/services/desenvolvimento-web-mobile", icon: "code" },
    { key: "documental", href: "/services/solucoes-documentais", icon: "users" },
    { key: "mentoria", href: "/services/mentoria-saude-emocional", icon: "heart" },
  ]

  const filteredServices = services.filter(service => {
    if (service.key === "mentoria" && locale !== "pt") return false
    return true
  })

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      {/* Título e subtítulo */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white">{t("title")}</h2>
        <p className="text-slate-400">{t("subtitle")}</p>
      </div>

      {/* Grid de serviços */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* ⭐ CARD PREMIUM – LANDING PAGE */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3">
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-500 p-6 rounded-xl text-white flex flex-col justify-between h-full">
  {/* Tag destaque */}
  <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
  {t("landing.destaque.destaque")}
  </span>

            {/* Ícone grande centralizado */}
            <div className="flex justify-center mb-4">
              <Cog6ToothIcon className="w-10 h-10 text-white" />
            </div>

            {/* Conteúdo do ServiceCard */}
            <ServiceCard
              title={t("landing.automation.title")}
              description={t("landing.automation.description")}
              href="/automacao"
              icon="settings"
            />
          </div>
        </div>

        {/* 🔹 CARDS DE SERVIÇOS NORMAIS */}
        {filteredServices.map(service => (
          <ServiceCard
            key={service.key}
            title={t(`${service.key}.title`)}
            description={t(`${service.key}.description`)}
            href={service.href}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}
