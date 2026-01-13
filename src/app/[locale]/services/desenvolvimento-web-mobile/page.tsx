import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getDesenvolvimentoWebMobileContent } from "../../../../lib/content/desenvolvimentoWebMobile"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Desenvolvimento Web & Mobile | Syntesys",
  description:
    "Desenvolvimento de aplicações web e mobile modernas, escaláveis e focadas em resultados.",
}

export default function DesenvolvimentoWebMobilePage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.webmobile.title" },
        ]}
      />

      <ServicePage content={getDesenvolvimentoWebMobileContent(t)} />
    </section>
  )
}
