import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { cloudDevops } from "../../../lib/content/cloudDevOps"

export const metadata = {
  title: "Cloud & DevOps | Syntesys",
  description:
    "Arquitetura cloud, automação DevOps, CI/CD, monitoramento e segurança para ambientes modernos.",
}

export default function CloudDevopsPage() {
  return (
    <section
    className="
      max-w-6xl mx-auto
      px-4 sm:px-6
      py-14 md:py-20
    "
  >
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/services" },
          { label: "Cloud & DevOps" },
        ]}
      />

      <ServicePage content={cloudDevops} />
    </section>
  )
}
