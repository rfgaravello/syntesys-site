import Breadcrumb from "../../../components/Breadcrumb"
import ServiceCard from "../../../components/ServiceCard"
import { useTranslations, useLocale } from "next-intl"

export const metadata = {
  title: "Serviços | Syntesys",
  description: "Conheça todos os serviços oferecidos pela Syntesys",
}

export default function ServicesPage() {
  const t = useTranslations("services")
  const locale = useLocale()

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

  // ✅ FILTRO CORRETO
  const filteredServices = services.filter(service => {
    if (service.key === "mentoria" && !locale.startsWith("pt")) {
      return false
    }
    return true
  })

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <Breadcrumb
        items={[
          { label: t("breadcrumb.home"), href: `/${locale}` },
          { label: t("breadcrumb.services") },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
