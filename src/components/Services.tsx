import Link from "next/link"
import Image from "next/image"
import {
  Cpu,
  BarChart2,
  Cloud,
  Settings,
  Code,
  Archive,
  Users,
  Heart,
  Shield,
  Monitor
} from "lucide-react"

const services = [
  {
    title: "Assessoria Tecnológica",
    description:
      "Apoio estratégico em decisões de tecnologia, arquitetura e inovação para líderes e empresas.",
    href: "/services/assessoria-tecnologica",
    icon: Cpu,
    image: "/images/services/assessoria.png",
  },
  {
    title: "Gestão de Projetos (PMO)",
    description:
      "Planejamento, controle e execução de projetos de TI com foco em previsibilidade e resultado.",
    href: "/services/gestao-projetos-ti",
    icon: BarChart2,
    image: "/images/services/gestao-projetos.png",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infraestrutura moderna, escalável e segura, com automação e boas práticas em nuvem.",
    href: "/services/cloud-devops",
    icon: Cloud,
    image: "/images/services/cloud.png",
  },
  {
    title: "Automação de Processos",
    description:
      "Redução de custos operacionais e aumento de eficiência com automações inteligentes.",
    href: "/services/automacao-processos",
    icon: Settings,
    image: "/images/services/automacao.png",
  },
  {
    title: "Desenvolvimento Web & Mobile",
    description:
      "Aplicações modernas, performáticas e orientadas à experiência do usuário.",
    href: "/services/desenvolvimento-web-mobile",
    icon: Code,
    image: "/images/services/web.png",
  },
  {
    title: "Soluções Documentais para áreas de Negócios",
    description:
      "Provemos serviços de digitalização e gestão de arquivos fisicos para eletrônicos com sistemas ECM.",
    href: "/services/solucoes-documentais",
    icon: Archive,
    image: "/images/services/alocacao.png",
  },
  {
    title: "Infraestrutura de TI",
    description:
      "Projetamos, implementamos e gerenciamos infraestruturas tecnológicas seguras, escaláveis e alinhadas ao negócio.",
    href: "/services/infraestrutura-ti",
    icon: Monitor,
    image: "/images/services/infraestrutura.png",
  },
  {
    title: "Transformação Digital para Negócios",
    description:
      "Ajudamos empresas a evoluírem seus modelos de negócio por meio da tecnologia, inovação e automação, gerando eficiência, competitividade e crescimento sustentável.",
    href: "/services/transformacao-digital",
    icon: Users,
    image: "/images/services/transformacao.png",
  },
  {
    title: "Mentoria e Acomselhamento Emocional",
    description:
      "Oferecemos mentoria individual focada em desenvolvimento profissional, equilíbrio emocional e clareza de objetivos, promovendo bem-estar e alta performance.",
    href: "/services/mentoria-saude-emocional",
    icon: Heart,
    image: "/images/services/saude.png",
  },
]

export default function Services() {
  return (
    <section className="py-28 bg-[#050b1a]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Soluções tecnológicas para escalar negócios com segurança
          </h2>
          <p className="text-lg text-slate-400">
            Atuamos da estratégia à execução, conectando tecnologia, processos e
            pessoas para acelerar resultados com previsibilidade e governança.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-2xl
                border border-white/10
                bg-gradient-to-b from-[#0a1128] to-[#050b1a]
                hover:border-cyan-400/50
                hover:shadow-xl hover:shadow-cyan-500/10
                transition"
              >
                {/* Imagem */}
                <div className="relative h-40 w-full opacity-80 group-hover:opacity-100 transition">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 space-y-4 backdrop-blur-sm">
                  <Icon className="text-cyan-400" size={28} />

                  <h3 className="text-lg font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {service.description}
                  </p>

                  <span className="inline-block pt-2 text-sm text-cyan-400 font-medium group-hover:underline">
                    Explorar serviço →
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA final */}
        <div className="text-center pt-12">
          <Link
            href="https://wa.me/5519996210076"
            target="_blank"
            className="inline-block rounded-xl bg-cyan-400 px-10 py-4
            font-semibold text-black hover:bg-cyan-300 transition"
          >
            Fale com um especialista
          </Link>
        </div>
      </div>
    </section>
  )
}
