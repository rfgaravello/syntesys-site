import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getCloudDevopsContent( t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.cloud.title"),
    subtitle: t("service.cloud.subtitle"),

    heroImage: "/images/services/cloud-devops/hero-cloud-devops.gif",

    sections: [
      {
        title: t("service.cloud.sections.architecture.title"),
        items: t.raw("service.cloud.sections.architecture.items"),
        image: "/images/services/cloud-devops/cloud-architecture.png",
      },
      {
        title: t("service.cloud.sections.iac.title"),
        items: t.raw("service.cloud.sections.iac.items"),
        image: "/images/services/cloud-devops/terraform-dashboard.png",
      },
      {
        title: t("service.cloud.sections.cicd.title"),
        items: t.raw("service.cloud.sections.cicd.items"),
        image: "/images/services/cloud-devops/cicd-pipeline.png",
      },
      {
        title: t("service.cloud.sections.monitoring.title"),
        items: t.raw("service.cloud.sections.monitoring.items"),
        image: "/images/services/cloud-devops/monitoring-dashboard.png",
      },
      {
        title: t("service.cloud.sections.security.title"),
        items: t.raw("service.cloud.sections.security.items"),
        image: "/images/services/cloud-devops/security-iam.png",
      },
    ],

    cta: {
      title: t("service.cloud.cta.title"),
      subtitle: t("service.cloud.cta.subtitle"),
      button: {
        label: t("service.cloud.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
