import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { mentoriaSaudeEmocional } from "../../../../lib/content/mentoriaSaudeEmocional"

export const metadata = {
  title: "Mentoria & Saúde Emocional | Syntesys",
  description:
    "Mentoria individual e apoio à saúde emocional para profissionais e empresas, promovendo bem-estar, equilíbrio e alta performance.",
}
export default function mentoriaSaudeEmocionalPage() {
  return (
    <section
    className="
      max-w-6xl mx-auto
      px-4 sm:px-6
      py-14 md:py-20"  
    >
      


      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/services" },
          { label: "Mentoria para Saúde Emocional" },
        ]}
      />

      {/* Conteúdo do serviço */}
      <ServicePage content={mentoriaSaudeEmocional} />

    </section>
  )
}


/*
export default function MentoriaSaudeEmocionalPage() {
  return <ServicePage {...mentoriaSaudeEmocional} />
}*/
