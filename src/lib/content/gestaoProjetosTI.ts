import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getGestaoProjetosTIContent(t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.gestaoprojetos.title"),
    subtitle: t("service.gestaoprojetos.subtitle"),

    heroImage: "/images/services/gestao-projetos/hero-pmo2.png",

    sections: [
      {
        title: t("service.gestaoprojetos.sections.pmo.title"),
        items: t.raw("service.gestaoprojetos.sections.pmo.items"),
        image: "/images/services/gestao-projetos/pmo-structure.png",
      },
      {
        title: t("service.gestaoprojetos.sections.planning.title"),
        items: t.raw("service.gestaoprojetos.sections.planning.items"),
        image: "/images/services/gestao-projetos/project-planning2.png",
      },
      {
        title: t("service.gestaoprojetos.sections.methods.title"),
        items: t.raw("service.gestaoprojetos.sections.methods.items"),
        image: "/images/services/gestao-projetos/agile-kanban.png",
      },
      {
        title: t("service.gestaoprojetos.sections.risk.title"),
        items: t.raw("service.gestaoprojetos.sections.risk.items"),
        image: "/images/services/gestao-projetos/risk-management2.png",
      },
      {
        title: t("service.gestaoprojetos.sections.dashboard.title"),
        items: t.raw("service.gestaoprojetos.sections.dashboard.items"),
        image: "/images/services/gestao-projetos/executive-dashboard2.png",
      },
    ],

    cta: {
      title: t("service.gestaoprojetos.cta.title"),
      subtitle: t("service.gestaoprojetos.cta.subtitle"),
      button: {
        label: t("service.gestaoprojetos.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
