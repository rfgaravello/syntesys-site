import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getInfraestruturaTIContent(t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.infraestrutura.title"),
    subtitle: t("service.infraestrutura.subtitle"),

    heroImage: "/images/services/infraestrutura/hero-infra.png",

    sections: [
      {
        title: t("service.infraestrutura.sections.corporate.title"),
        items: t.raw("service.infraestrutura.sections.corporate.items"),
        image: "/images/services/infraestrutura/datacenter.png",
      },
      {
        title: t("service.infraestrutura.sections.virtualization.title"),
        items: t.raw("service.infraestrutura.sections.virtualization.items"),
        image: "/images/services/infraestrutura/virtualization.png",
      },
      {
        title: t("service.infraestrutura.sections.network.title"),
        items: t.raw("service.infraestrutura.sections.network.items"),
        image: "/images/services/infraestrutura/network-diagram.gif",
      },
      {
        title: t("service.infraestrutura.sections.backup.title"),
        items: t.raw("service.infraestrutura.sections.backup.items"),
        image: "/images/services/infraestrutura/backup-dr.png",
      },
      {
        title: t("service.infraestrutura.sections.monitoring.title"),
        items: t.raw("service.infraestrutura.sections.monitoring.items"),
        image: "/images/services/infraestrutura/infra-monitoring.png",
      },
    ],

    cta: {
      title: t("service.infraestrutura.cta.title"),
      subtitle: t("service.infraestrutura.cta.subtitle"),
      button: {
        label: t("service.infraestrutura.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
