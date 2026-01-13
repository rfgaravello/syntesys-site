import { ServiceContent } from "../../components/ServicePage"
import { useTranslations } from "next-intl"

export function getDesenvolvimentoWebMobileContent( t: ReturnType<typeof useTranslations>): ServiceContent {
  return {
    title: t("service.webmobile.title"),
    subtitle: t("service.webmobile.subtitle"),

    heroImage: "/images/services/web-mobile/hero-web-mobile.png",

    sections: [
      {
        title: t("service.webmobile.sections.frontend.title"),
        items: t.raw("service.webmobile.sections.frontend.items"),
        image: "/images/services/web-mobile/frontend.png",
      },
      {
        title: t("service.webmobile.sections.backend.title"),
        items: t.raw("service.webmobile.sections.backend.items"),
        image: "/images/services/web-mobile/backend.png",
      },
      {
        title: t("service.webmobile.sections.mobile.title"),
        items: t.raw("service.webmobile.sections.mobile.items"),
        image: "/images/services/web-mobile/mobile2.png",
      },
      {
        title: t("service.webmobile.sections.architecture.title"),
        items: t.raw("service.webmobile.sections.architecture.items"),
        image: "/images/services/web-mobile/arquitetura2.png",
      },
      {
        title: t("service.webmobile.sections.quality.title"),
        items: t.raw("service.webmobile.sections.quality.items"),
        image: "/images/services/web-mobile/devops.png",
      },
    ],

    cta: {
      title: t("service.webmobile.cta.title"),
      subtitle: t("service.webmobile.cta.subtitle"),
      button: {
        label: t("service.webmobile.cta.button"),
        href: "https://wa.me/5519996210076",
      },
    },
  }
}
