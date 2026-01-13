import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../..//components/ServicePage"
import { getAssessoriaTecnologicaContent } from "../../../../lib/content/assessoriaTecnologica"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Automação de Processos | Syntesys",
  description:
    "Automação de processos de negócio e RPA para aumentar produtividade, reduzir custos e escalar operações com segurança.",
}

export default function AutomacaoProcessosPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: t("breadcrumb.home"), href: "/" },
          { label: t("breadcrumb.services"), href: "/services" },
          { label: t("service.assessoria.title") },
        ]}
      />

      <ServicePage content={getAssessoriaTecnologicaContent(t)} />
    </section>
  )
}
