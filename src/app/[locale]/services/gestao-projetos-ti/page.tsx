import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getGestaoProjetosTIContent } from "../../../../lib/content/gestaoProjetosTI"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Gestão de Projetos de TI | Syntesys",
  description:
    "Governança, previsibilidade e controle para projetos de tecnologia, garantindo alinhamento estratégico e entrega de resultados.",
}

export default function GestaoProjetosPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.gestaoprojetos.title" },
        ]}
      />

      <ServicePage content={getGestaoProjetosTIContent(t)} />
    </section>
  )
}
