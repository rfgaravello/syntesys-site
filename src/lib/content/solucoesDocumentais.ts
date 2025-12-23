import { ServiceContent } from "../../components/ServicePage"

export const solucoesDocumentais: ServiceContent = {
  title: "Soluções Documentais (ECM / GED & Workflow Digital)",
  subtitle:
    "Transformamos documentos físicos e digitais em informação estratégica, estruturando repositórios seguros, workflows inteligentes e governança documental para áreas de negócio.",

  heroImage: "/images/services/document-solution/hero-document.png",

  sections: [
    {
      title: "Gestão Eletrônica de Documentos (GED / ECM)",
      items: [
        "Implantação e evolução de plataformas ECM e GED",
        "Centralização e organização de documentos corporativos",
        "Controle de versões, permissões e auditoria",
        "Conformidade com políticas internas e requisitos legais",
        "Redução de riscos e aumento da rastreabilidade",
      ],
      image: "/images/services/document-solution/ecm-platform.png",
    },

    {
      title: "Digitalização de Documentos Físicos",
      items: [
        "Mapeamento de acervos físicos",
        "Definição de padrões de digitalização",
        "Classificação e indexação inteligente",
        "OCR para extração de dados e texto pesquisável",
        "Eliminação do papel com segurança jurídica",
      ],
      image: "/images/services/document-solution/scanning-ocr.png",
    },

    {
      title: "Análise e Desenho de Workflows",
      items: [
        "Levantamento de processos documentais atuais (AS-IS)",
        "Redesenho de fluxos digitais (TO-BE)",
        "Automação de aprovações e validações",
        "Integração entre áreas e sistemas",
        "Aumento de produtividade e redução de gargalos",
      ],
      image: "/images/services/document-solution/workflow-design.png",
    },

    {
      title: "Ferramentas e Plataformas Atendidas",
      items: [
        "OnBase (Hyland)",
        "Perceptive Content (ImageNow)",
        "FileDirector",
        "SharePoint e soluções Microsoft",
        "Outras plataformas ECM e GED de mercado",
      ],
      image: "/images/services/document-solution/tools-ecm.png",
    },

    {
      title: "Governança, Segurança e Compliance",
      items: [
        "Definição de políticas de retenção documental",
        "Gestão de acessos e perfis de usuário",
        "Trilhas de auditoria e histórico de alterações",
        "Aderência a LGPD e normas regulatórias",
        "Proteção da informação corporativa",
      ],
      image: "/images/services/document-solution/governance.png",
    },

    {
      title: "Benefícios para o Negócio",
      items: [
        "Redução de custos operacionais",
        "Agilidade na busca e uso da informação",
        "Menos dependência de papel e arquivos físicos",
        "Aumento da eficiência dos processos",
        "Tomada de decisão baseada em informação confiável",
      ],
      image: "/images/services/document-solution/business-benefits.png",
    },
  ],

  cta: {
    title: "Sua gestão documental está preparada para escalar?",
    subtitle:
      "Vamos estruturar processos, tecnologia e governança para transformar documentos em ativos estratégicos do negócio.",
    button: {
      label: "Falar com um especialista",
      href: "https://wa.me/5519996210076",
    },
  },
}
