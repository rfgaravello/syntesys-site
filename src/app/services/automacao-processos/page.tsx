import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { automacaoProcessos } from "../../../lib/content/automacaoProcessos"

export const metadata = {
  title: "Automação de Processos | Syntesys",
  description:
    "Automação de processos de negócio e RPA para aumentar produtividade, reduzir custos e escalar operações com segurança.",
}

export default function automacaoProcessosPage() {
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
          { label: "Automação de processos para áreas de negócios" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={automacaoProcessos} />

    </section>
  )
}
/*
export default function AutomacaoProcessosPage() {
  return <ServicePage {...automacaoProcessos} />
}*/
