import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getSolucoesDocumentaisContent(t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.documental.title"),
    subtitle: t("service.documental.subtitle"),

    heroImage: "/images/services/document-solution/documentSolution.png",

    sections: [
      {
        title: t("service.documental.sections.ecm.title"),
        items: t.raw("service.documental.sections.ecm.items"),
        image: "/images/services/document-solution/hero-document2.png",
      },
      {
        title: t("service.documental.sections.scanning.title"),
        items: t.raw("service.documental.sections.scanning.items"),
        image: "/images/services/document-solution/scanning-ocr2.png",
      },
      {
        title: t("service.documental.sections.workflow.title"),
        items: t.raw("service.documental.sections.workflow.items"),
        image: "/images/services/document-solution/workflow-design2.png",
      },
      {
        title: t("service.documental.sections.tools.title"),
        items: t.raw("service.documental.sections.tools.items"),
        image: "/images/services/document-solution/tools-ecm2.png",
      },
      {
        title: t("service.documental.sections.governance.title"),
        items: t.raw("service.documental.sections.governance.items"),
        image: "/images/services/document-solution/governance2.png",
      },
      {
        title: t("service.documental.sections.benefits.title"),
        items: t.raw("service.documental.sections.benefits.items"),
        image: "/images/services/document-solution/business-benefits2.png",
      },
    ],

    cta: {
      title: t("service.documental.cta.title"),
      subtitle: t("service.documental.cta.subtitle"),
      button: {
        label: t("service.documental.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
