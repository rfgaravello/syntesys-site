import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { gestaoProjetosTI } from "../../../lib/content/gestaoProjetosTI"

export const metadata = {
  title: "Gestão de Projetos em TI (PMO) | Syntesys",
  description:
    "Serviços de PMO, governança, gestão de riscos, custos e prazos para projetos de tecnologia.",
}

export default function GestaoProjetosTIPage() {
  return (
    <section
    className="
      max-w-6xl mx-auto
      px-4 sm:px-6
      py-14 md:py-20
    "
  >
      
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/services" },
          { label: "Gestão de Projetos em TI" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={gestaoProjetosTI} />

    </section>
  )
}
