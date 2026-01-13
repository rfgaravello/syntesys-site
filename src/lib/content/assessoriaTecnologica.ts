import { useTranslations } from "next-intl"
import { ServiceContent } from "../../components/ServicePage"

export function getAssessoriaTecnologicaContent(
  t: ReturnType<typeof useTranslations>
): ServiceContent {
  return {
    title: t("service.assessoria.title"),
    subtitle: t("service.assessoria.subtitle"),
    heroImage: "/images/services/Assessoria/hero-assessoria.png",

    sections: [
      {
        title: t("service.assessoria.sections.diagnostico.title"),
        items: t.raw("service.assessoria.sections.diagnostico.items"),
        image: "/images/services/Assessoria/diagnostico.png",
      },
      {
        title: t("service.assessoria.sections.arquitetura.title"),
        items: t.raw("service.assessoria.sections.arquitetura.items"),
        image: "/images/services/Assessoria/arquitetura.png",
      },
      {
        title: t("service.assessoria.sections.governanca.title"),
        items: t.raw("service.assessoria.sections.governanca.items"),
        image: "/images/services/Assessoria/governanca.png",
      },
      {
        title: t("service.assessoria.sections.decisao.title"),
        items: t.raw("service.assessoria.sections.decisao.items"),
        image: "/images/services/Assessoria/decisao.png",
      },
      {
        title: t("service.assessoria.sections.inovacao.title"),
        items: t.raw("service.assessoria.sections.inovacao.items"),
        image: "/images/services/Assessoria/inovacao.png",
      },
    ],

    cta: {
      title: t("service.assessoria.cta.title"),
      subtitle: t("service.assessoria.cta.subtitle"),
      button: {
        label: t("service.assessoria.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
