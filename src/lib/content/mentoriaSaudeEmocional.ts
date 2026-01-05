import { ServiceContent } from "../../components/ServicePage"

export const mentoriaSaudeEmocional: ServiceContent = {
  title: "Mentoria 1:1 & Saúde Emocional",
  subtitle:
    "Mentoria individual e apoio à saúde emocional para profissionais e empresas, promovendo equilíbrio, clareza e alta performance de forma sustentável.",

  heroImage: "/images/services/mentoria/hero-mentoria.png",

  sections: [
    {
      title: "Mentoria Profissional 1:1",
      items: [
        "Orientação personalizada de carreira",
        "Apoio na tomada de decisões profissionais",
        "Desenvolvimento de liderança e soft skills",
        "Planejamento de evolução profissional",
        "Mentoria especializada para profissionais de tecnologia",
      ],
      image: "/images/services/mentoria/mentoria-1-1.png",
    },

    {
      title: "Saúde Emocional no Trabalho",
      items: [
        "Apoio emocional em ambientes de alta pressão",
        "Gestão de estresse e ansiedade",
        "Equilíbrio entre vida pessoal e profissional",
        "Prevenção de burnout",
        "Promoção de bem-estar no ambiente corporativo",
      ],
      image: "/images/services/mentoria/saude-emocional.png",
    },

    {
      title: "Programa SER – Saúde Emocional & Resiliência",
      items: [
        "Programa estruturado focado em saúde mental e emocional",
        "Desenvolvimento de autoconsciência e inteligência emocional",
        "Ferramentas práticas para lidar com pressão e mudanças",
        "Aplicável para indivíduos e empresas",
        "Metodologia validada e aplicada em ambientes reais",
      ],
      image: "/images/services/mentoria/programa-ser.png",

      // 🔥 CTA DIFERENCIADO PARA O PROGRAMA SER
      cta: {
        label: "Acessar Programa SER",
        href: "https://programaser.syntesys.com.br/",
      },
    },

    {
      title: "Autoconhecimento e Clareza",
      items: [
        "Identificação de valores e propósito",
        "Clareza de objetivos pessoais e profissionais",
        "Fortalecimento da confiança e autonomia",
        "Desenvolvimento de inteligência emocional",
        "Tomada de decisões mais conscientes",
      ],
      image: "/images/services/mentoria/autoconhecimento.png",
    },

    {
      title: "Acompanhamento Contínuo",
      items: [
        "Sessões individuais e confidenciais",
        "Planos de desenvolvimento personalizados",
        "Acompanhamento da evolução ao longo do tempo",
        "Ambiente seguro e acolhedor",
        "Foco em resultados sustentáveis",
      ],
      image: "/images/services/mentoria/acompanhamento.png",
    },
  ],

  cta: {
    title: "Cuidar das pessoas é estratégico para o negócio",
    subtitle:
      "Vamos conversar sobre como a mentoria e a saúde emocional podem elevar performance, engajamento e bem-estar.",
    button: {
      label: "Falar com um especialista",
      href: "https://wa.me/5519996210076",
    },
  },
}
