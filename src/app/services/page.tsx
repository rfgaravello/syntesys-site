import Breadcrumb from "../../components/Breadcrumb"
import ServiceCard from "../../components/ServiceCard"

export const metadata = {
  title: "Serviços | Syntesys",
  description: "Conheça todos os serviços oferecidos pela Syntesys",
}

const services = [
  {
    title: "Assessoria Tecnológica",
    description: "Consultoria especializada para otimizar sua tecnologia.",
    href: "/services/assessoria-tecnologica",
    icon: "cpu",
  },
  {
    title: "Gestão de Projetos (PMO)",
    description: "Planejamento e acompanhamento eficiente de projetos de TI.",
    href: "/services/gestao-projetos-ti",
    icon: "bar-chart",
  },
  {
    title: "Infraestrutura de TI",
    description: "Suporte e manutenção da sua infraestrutura tecnológica.",
    href: "/services/infraestrutura-ti",
    icon: "monitor",
  },
  {
    title: "Cloud & DevOps",
    description: "Serviços em nuvem e automação de operações.",
    href: "/services/cloud-devops",
    icon: "cloud",
  },
  {
    title: "Transformação Digital",
    description: "Digitalize processos e modernize sua empresa.",
    href: "/services/transformacao-digital",
    icon: "rocket",
  },
  {
    title: "Automação de Processos",
    description: "Reduza custos e aumente eficiência com automações.",
    href: "/services/automacao-processos",
    icon: "settings",
  },
  {
    title: "Desenvolvimento Web & Mobile",
    description: "Criação de aplicativos e sites modernos e escaláveis.",
    href: "/services/desenvolvimento-web-mobile",
    icon: "code",
  },
  {
    title: "Solução Documental Digital",
    description: "Possuimos Qualificação Profissional para gestão de conteúdo Eletrônico.",
    href: "/services/solucoes-documentais",
    icon: "users",
  },
  {
    title: "Mentoria & Saúde Emocional",
    description: "Apoio e mentoria para equipes e líderes de TI.",
    href: "/services/mentoria-saude-emocional",
    icon: "heart",
  },
]

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 space-y-12">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços" },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(service => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            href={service.href}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  )
}
