import Breadcrumb from "../../../components/Breadcrumb"
import ServicePage from "../../../components/ServicePage"
import { desenvolvimentoWebMobile } from "../../../lib/content/desenvolvimentoWebMobile"

export const metadata = {
  title: "Desenvolvimento Web & Mobile | Syntesys",
  description:
    "Desenvolvimento de aplicações web e mobile modernas, escaláveis e focadas em resultados.",
}

export default function DesenvolvimentoWebMobilePage() {
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
          { label: "Desenvolvimento Web & Mobile" },
        ]}
      />

      <ServicePage content={desenvolvimentoWebMobile} />
    </section>
  )
}
