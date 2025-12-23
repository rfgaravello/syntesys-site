import { ServiceContent } from "../../components/ServicePage"

export const infraestruturaTI: ServiceContent = {
  title: "Infraestrutura de TI",
  subtitle:
    "Planejamos, implementamos e sustentamos infraestruturas de TI robustas, seguras e preparadas para crescimento, garantindo disponibilidade, desempenho e governança.",

  heroImage: "/images/services/infraestrutura/hero-infra.png",

  sections: [
    {
      title: "Infraestrutura Corporativa",
      items: [
        "Ambientes on-premises, híbridos e cloud",
        "Servidores, storage e virtualização",
        "Alta disponibilidade e continuidade de negócio",
        "Padronização e documentação técnica",
      ],
      image: "/images/services/infraestrutura/datacenter.png",
    },

    {
      title: "Virtualização e Containers",
      items: [
        "VMware, Hyper-V e KVM",
        "Docker e Kubernetes",
        "Otimização de recursos computacionais",
        "Ambientes isolados e seguros",
      ],
      image: "/images/services/infraestrutura/virtualization.png",
    },

    {
      title: "Redes e Conectividade",
      items: [
        "Topologias seguras e escaláveis",
        "VPNs, firewalls e balanceadores",
        "Segmentação de rede e controle de tráfego",
        "Integração entre sites e cloud",
      ],
      image: "/images/services/infraestrutura/network-diagram.gif",
    },

    {
      title: "Backup, Disaster Recovery e Alta Disponibilidade",
      items: [
        "Estratégias de backup e restore",
        "Planos de Disaster Recovery",
        "Testes periódicos de recuperação",
        "Redução de riscos operacionais",
      ],
      image: "/images/services/infraestrutura/backup-dr.png",
    },

    {
      title: "Monitoramento e Suporte",
      items: [
        "Monitoramento de servidores e serviços",
        "Identificação proativa de falhas",
        "Suporte técnico especializado",
        "Aumento da estabilidade do ambiente",
      ],
      image: "/images/services/infraestrutura/infra-monitoring.png",
    },
  ],

  cta: {
    title: "Sua infraestrutura está preparada para o futuro?",
    subtitle:
      "Vamos avaliar, otimizar e evoluir seu ambiente de TI com segurança e visão estratégica.",
    button: {
      label: "Falar com um especialista",
      href: "https://wa.me/5519996210076",
    },
  },
}
