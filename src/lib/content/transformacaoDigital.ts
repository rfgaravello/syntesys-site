import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getTransformacaoDigitalContent(t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.transformacao.title"),
    subtitle: t("service.transformacao.subtitle"),

    sections: [
      {
        title: t("service.transformacao.sections.diagnostico.title"),
        items: t.raw("service.transformacao.sections.diagnostico.items"),
      },
      {
        title: t("service.transformacao.sections.processos.title"),
        items: t.raw("service.transformacao.sections.processos.items"),
      },
      {
        title: t("service.transformacao.sections.tecnologia.title"),
        items: t.raw("service.transformacao.sections.tecnologia.items"),
      },
      {
        title: t("service.transformacao.sections.mudanca.title"),
        items: t.raw("service.transformacao.sections.mudanca.items"),
      },
      {
        title: t("service.transformacao.sections.resultados.title"),
        items: t.raw("service.transformacao.sections.resultados.items"),
      },
    ],
  }
}
