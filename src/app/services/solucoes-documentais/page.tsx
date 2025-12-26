import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { solucoesDocumentais } from "../../../lib/content/solucoesDocumentais"

export const metadata = {
  title: "Soluções Documentais (ECM / GED) | Syntesys",
  description:
    "Implantação de soluções ECM e GED, digitalização de documentos e automação de workflows para gestão inteligente da informação.",
}

export default function SolucoesDocumentaisPage() {
  return (
    <section
    className="
      max-w-6xl mx-auto
      px-4 sm:px-6
      py-14 md:py-20
    "
  >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/services" },
          { label: "Solução Documental Digital através de ferramentas ECM - GED - Workflow" },
        ]}
      />

      <ServicePage content={solucoesDocumentais} />
    </section>
  )
}
