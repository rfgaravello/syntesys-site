import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { transformacaoDigital } from "../../../lib/content/transformacaoDigital"

export const metadata = {
  title: "Transformação Digital | Syntesys",
  description:
    "Transformação digital estratégica para negócios, com foco em processos, tecnologia, inovação e resultados mensuráveis.",
}

export default function transformacaoDigitalPage() {
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
          { label: "Transformação Digital para área de Negócios" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={transformacaoDigital} />

    </section>
  )
}

/*
export default function TransformacaoDigitalPage() {
  return <ServicePage {...transformacaoDigital} />
}
*/