import Breadcrumb from '../../../components/Breadcrumb'
import ServicePage from '../../../components/ServicePage'
import { assessoriaTecnologica } from '../../../lib/content/assessoriaTecnologica'

export const metadata = {
  title: "Assessoria Tecnológica | Syntesys",
  description:
    "Consultoria para tomada de decisão em escolha de ferramentas, processos para as áreas de negócios.",
}


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
          { label: "Assessoria Tecnológica para decisão estratégica de negócio" },
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
