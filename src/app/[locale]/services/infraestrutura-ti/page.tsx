import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getInfraestruturaTIContent } from "../../../../lib/content/infraestruturaTI"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Infraestrutura de TI | Syntesys",
  description:
    "Planejamento, implementação e sustentação de infraestruturas de TI seguras, escaláveis e preparadas para crescimento.",
}

export default function InfraestruturaTIPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.infraestrutura.title" },
        ]}
      />

      <ServicePage content={getInfraestruturaTIContent(t)} />
    </section>
  )
}
