import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { infraestruturaTI } from "../../../lib/content/infraestruturaTI"

export const metadata = {
  title: "Infraestrutura de TI | Syntesys",
  description:
    "Planejamento, implementação e gestão de infraestrutura de TI segura, escalável e preparada para o futuro.",
}
export default function infraestruturaTIPage() {
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
          { label: "Infraestrutura de TI" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={infraestruturaTI} />

    </section>
  )
}

/*
export default function InfraestruturaTIPage() {
  return <ServicePage {...infraestruturaTI} />
}*/
