import Breadcrumb from "../../../../components/Breadcrumb"
import ServicePage from "../../../../components/ServicePage"
import { getCloudDevopsContent } from "../../../../lib/content/cloudDevOps"
import { useTranslations } from "next-intl"

export const metadata = {
  title: "Cloud & DevOps | Syntesys",
  description:
    "Cloud & DevOps para criar ambientes seguros, escaláveis e automatizados com alta performance.",
}

export default function CloudDevopsPage() {
  const t = useTranslations()

  return (
    <section className="py-20">
      <Breadcrumb
        items={[
          { label: "breadcrumb.home", href: "/" },
          { label: "breadcrumb.services", href: "/services" },
          { label: "service.cloud.title" },
        ]}
      />

      <ServicePage content={getCloudDevopsContent(t)} />
    </section>
  )
}
