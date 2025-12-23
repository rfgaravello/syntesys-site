import { ServiceContent } from "../../components/ServicePage"

export const automacaoProcessos: ServiceContent = {
  title: "Automação de Processos",
  subtitle:
    "Automatizamos processos operacionais e de negócio para reduzir custos, eliminar retrabalho e aumentar eficiência, utilizando tecnologia moderna, integrações e inteligência de dados.",

  heroImage: "/images/services/automacao/hero-automacao.png",

  sections: [
    {
      title: "Mapeamento e Análise de Processos",
      items: [
        "Levantamento detalhado dos processos atuais (AS-IS)",
        "Identificação de gargalos, falhas e retrabalho",
        "Análise de viabilidade técnica e financeira",
        "Definição de processos futuros otimizados (TO-BE)",
      ],
      image: "/images/services/automacao/mapeamento.png",
    },

    {
      title: "Automação de Fluxos e Workflows",
      items: [
        "Criação de workflows automatizados",
        "Automação de aprovações e tarefas repetitivas",
        "Integração entre sistemas e plataformas",
        "Orquestração de processos ponta a ponta",
      ],
      image: "/images/services/automacao/workflows.png",
    },

    {
      title: "Integrações e APIs",
      items: [
        "Integração entre ERPs, CRMs e sistemas internos",
        "Criação e consumo de APIs REST",
        "Automação baseada em eventos",
        "Sincronização e consistência de dados",
      ],
      image: "/images/services/automacao/apis.png",
    },

    {
      title: "RPA e Automação Inteligente",
      items: [
        "Automação robótica de processos (RPA)",
        "Automação de tarefas manuais em sistemas legados",
        "Uso de IA para classificação e decisões simples",
        "Redução de erros operacionais",
      ],
      image: "/images/services/automacao/rpa.png",
    },

    {
      title: "Monitoramento e Melhoria Contínua",
      items: [
        "Monitoramento de performance dos processos",
        "Métricas e indicadores de eficiência",
        "Ajustes contínuos e otimizações",
        "Evolução gradual da maturidade operacional",
      ],
      image: "/images/services/automacao/monitoramento.png",
    },
  ],

  cta: {
    title: "Seus processos estão ajudando ou travando o crescimento?",
    subtitle:
      "Automação bem aplicada transforma operação, reduz custos e libera tempo para o que realmente importa.",
    button: {
      label: "Quero automatizar meus processos",
      href: "https://wa.me/5519996210076",
    },
  },
}
