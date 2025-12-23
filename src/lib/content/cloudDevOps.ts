import { ServiceContent } from "../../components/ServicePage"

export const cloudDevops: ServiceContent = {
  title: "Cloud & DevOps",
  subtitle:
    "Projetamos, implementamos e operamos ambientes cloud modernos, seguros e escaláveis, aplicando práticas DevOps para acelerar entregas e reduzir riscos operacionais.",

  heroImage: "/images/services/cloud-devops/hero-cloud-devops.gif",

  sections: [
    {
      title: "Arquitetura Cloud Moderna",
      items: [
        "Arquitetura em nuvem baseada em AWS, Azure ou GCP",
        "Ambientes altamente disponíveis e escaláveis",
        "Redução de custos com uso eficiente de recursos",
        "Segurança desde o desenho da arquitetura (Security by Design)",
      ],
      image: "/images/services/cloud-devops/cloud-architecture.png",
    },

    {
      title: "Infraestrutura como Código (IaC)",
      items: [
        "Provisionamento automatizado com Terraform",
        "Ambientes versionados e auditáveis",
        "Padronização entre dev, homologação e produção",
        "Menos erros humanos e mais previsibilidade",
      ],
      image: "/images/services/cloud-devops/terraform-dashboard.png",
    },

    {
      title: "Pipelines CI/CD",
      items: [
        "Automação de build, testes e deploy",
        "Integração com GitHub Actions, GitLab CI ou Azure DevOps",
        "Deploy contínuo com rollback automático",
        "Maior velocidade e segurança nas entregas",
      ],
      image: "/images/services/cloud-devops/cicd-pipeline.png",
    },

    {
      title: "Observabilidade e Monitoramento",
      items: [
        "Monitoramento de infraestrutura e aplicações",
        "Dashboards em tempo real",
        "Alertas proativos para incidentes",
        "Uso de ferramentas como Grafana, Prometheus e CloudWatch",
      ],
      image: "/images/services/cloud-devops/monitoring-dashboard.png",
    },

    {
      title: "Segurança e Governança",
      items: [
        "Controle de acessos e identidades (IAM)",
        "Políticas de segurança e compliance",
        "Auditoria de ambientes cloud",
        "Boas práticas alinhadas a ISO e frameworks de mercado",
      ],
      image: "/images/services/cloud-devops/security-iam.png",
    },
  ],

  cta: {
    title: "Pronto para evoluir sua infraestrutura?",
    subtitle:
      "Vamos desenhar juntos uma estratégia Cloud & DevOps segura, escalável e alinhada aos objetivos do seu negócio.",
    button: {
      label: "Falar com um especialista",
      href: "https://wa.me/5519996210076",
    },
  },
}
