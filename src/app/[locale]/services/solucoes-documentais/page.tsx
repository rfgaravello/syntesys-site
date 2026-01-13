import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getSolucoesDocumentaisContent } from "../../../../lib/content/solucoesDocumentais"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Soluções Documentais | Syntesys",
  description:
    "Gestão eletrônica de documentos, ECM, GED e workflows digitais para transformar informação em ativo estratégico.",
}

export default function SolucoesDocumentaisPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.documental.title" },
        ]}
      />

      <ServicePage content={getSolucoesDocumentaisContent(t)} />
    </section>
  )
}
