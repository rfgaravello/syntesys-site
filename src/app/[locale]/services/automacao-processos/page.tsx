import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../..//components/ServicePage"
import { getAutomacaoProcessosContent } from "../../../../lib/content/automacaoProcessos"
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
          { label: t("service.automacao.title") },
        ]}
      />

      <ServicePage content={getAutomacaoProcessosContent(t)} />
    </section>
  )
}
