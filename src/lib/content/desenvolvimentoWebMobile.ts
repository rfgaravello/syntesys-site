import { ServiceContent } from "../../components/ServicePage"

export const desenvolvimentoWebMobile: ServiceContent = {
  title: "Desenvolvimento Web & Mobile",
  subtitle:
    "Desenvolvemos aplicações web e mobile modernas, seguras e escaláveis, focadas em performance, experiência do usuário e objetivos de negócio.",

  heroImage: "/images/services/web-mobile/hero-web-mobile.png",

  sections: [
    {
      title: "Arquitetura de Aplicações",
      items: [
        "Definição de arquitetura frontend e backend",
        "Aplicações escaláveis e desacopladas",
        "Boas práticas de segurança e performance",
        "Arquitetura orientada a APIs e microsserviços",
      ],
      image: "/images/services/web-mobile/arquitetura.png",
    },

    {
      title: "Desenvolvimento Web",
      items: [
        "Aplicações web responsivas e performáticas",
        "Dashboards, portais e sistemas internos",
        "SEO técnico e boas práticas de acessibilidade",
        "Integração com APIs e serviços externos",
      ],
      image: "/images/services/web-mobile/web.png",
    },

    {
      title: "Desenvolvimento Mobile",
      items: [
        "Aplicativos Android e iOS",
        "Aplicações híbridas e multiplataforma",
        "Experiência de usuário focada em usabilidade",
        "Integração com backend e serviços cloud",
      ],
      image: "/images/services/web-mobile/mobile.png",
    },

    {
      title: "Backend & APIs",
      items: [
        "Criação de APIs REST e GraphQL",
        "Autenticação, autorização e segurança",
        "Persistência de dados e modelagem",
        "Integração com bancos de dados e mensageria",
      ],
      image: "/images/services/web-mobile/backend.png",
    },

    {
      title: "Qualidade, Deploy e Evolução",
      items: [
        "Testes automatizados e validações",
        "CI/CD para aplicações web e mobile",
        "Monitoramento e observabilidade",
        "Evolução contínua do produto",
      ],
      image: "/images/services/web-mobile/devops.png",
    },
  ],

  cta: {
    title: "Sua ideia precisa virar um produto de verdade",
    subtitle:
      "Criamos soluções digitais que vão além do código, entregando valor real ao negócio.",
    button: {
      label: "Quero desenvolver meu produto",
      href: "https://wa.me/5519996210076",
    },
  },
}
