import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getTransformacaoDigitalContent } from "../../../../lib/content/transformacaoDigital"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Transformação Digital | Syntesys",
  description:
    "Transformação digital para empresas: processos, tecnologia e inovação para crescimento sustentável.",
}

export default function TransformacaoDigitalPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.transformacao.title" },
        ]}
      />

      <ServicePage content={getTransformacaoDigitalContent(t)} />
    </section>
  )
}
