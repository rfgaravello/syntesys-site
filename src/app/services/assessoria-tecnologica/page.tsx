import Breadcrumb from '../../../components/Breadcrumb'
import ServicePage from '../../../components/ServicePage'
import { assessoriaTecnologica } from '../../../lib/content/assessoriaTecnologica'

export default function assessoriaTecnologicaPage() {
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
          { label: "Solução Documental Digital - GED - ECM" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={assessoriaTecnologica} />

    </section>
  )
}
/*
export default function Page() {
  return <ServicePage {...assessoriaTecnologica} />
}*/
