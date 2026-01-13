import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getAutomacaoProcessosContent
( t: ReturnType<typeof useTranslations>):
 ServiceContent {
  return {
    title: t("service.automacao.title"),
    subtitle: t("service.automacao.subtitle"),

    heroImage: "/images/services/automacao/hero-automacao.png",

    sections: [
      {
        title: t("service.automacao.sections.mapeamento.title"),
        items: t.raw("service.automacao.sections.mapeamento.items"),
        image: "/images/services/automacao/mapeamento.png",
      },
      {
        title: t("service.automacao.sections.workflows.title"),
        items: t.raw("service.automacao.sections.workflows.items"),
        image: "/images/services/automacao/workflows.png",
      },
      {
        title: t("service.automacao.sections.apis.title"),
        items: t.raw("service.automacao.sections.apis.items"),
        image: "/images/services/automacao/apis.png",
      },
      {
        title: t("service.automacao.sections.rpa.title"),
        items: t.raw("service.automacao.sections.rpa.items"),
        image: "/images/services/automacao/rpa.png",
      },
      {
        title: t("service.automacao.sections.monitoramento.title"),
        items: t.raw("service.automacao.sections.monitoramento.items"),
        image: "/images/services/automacao/monitoramento.png",
      },
    ],

    cta: {
      title: t("service.automacao.cta.title"),
      subtitle: t("service.automacao.cta.subtitle"),
      button: {
        label: t("service.automacao.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
