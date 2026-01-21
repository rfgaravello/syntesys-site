import { Metadata } from "next"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "automacao" })

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  }
}

export default async function AutomacaoPage({ params }: Props) {
  const { locale } = params
  const t = await getTranslations({ locale, namespace: "automacao" })

  return (
    <main className="bg-background text-text">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg text-gray-300">{t("hero.subtitle")}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* CTA PRINCIPAL → LINK PARA CONTACT */}
              <Link
                href={`/${locale}/contact`}
                className="rounded-xl bg-primary px-6 py-3 font-semibold text-black transition hover:opacity-90 animate-pulse-glow"
              >
                {t("hero.ctaPrimary")}
              </Link>

              {/* CTA SECUNDÁRIO → LINK PARA SERVICES */}
              <Link
                href={`/${locale}/services`}
                className="rounded-xl border border-primary px-6 py-3 font-semibold text-primary transition hover:bg-primary hover:text-black"
              >
                {t("hero.ctaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMAS */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-white">{t("problems.title")}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.raw("problems.items").map((item: string) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-background p-6 animate-slide-up"
              >
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUÇÕES */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-white">{t("solutions.title")}</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-surface p-8">
              <h3 className="text-xl font-semibold text-primary">{t("solutions.automation.title")}</h3>
              <p className="mt-4 text-gray-300">{t("solutions.automation.description")}</p>
            </div>

            <div className="rounded-2xl bg-surface p-8">
              <h3 className="text-xl font-semibold text-secondary">{t("solutions.cloud.title")}</h3>
              <p className="mt-4 text-gray-300">{t("solutions.cloud.description")}</p>
            </div>

            <div className="rounded-2xl bg-surface p-8">
              <h3 className="text-xl font-semibold text-accent">{t("solutions.digital.title")}</h3>
              <p className="mt-4 text-gray-300">{t("solutions.digital.description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTADOS */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-white">{t("results.title")}</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2 text-gray-300">
            {t.raw("results.items").map((item: string) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">{t("final.title")}</h2>
          <p className="mt-4 text-gray-300">{t("final.subtitle")}</p>

          <Link
            href={`/${locale}/contact`}
            className="mt-8 inline-block rounded-xl bg-primary px-8 py-4 font-semibold text-black transition hover:opacity-90 animate-pulse-glow"
          >
            {t("final.cta")}
          </Link>
        </div>
      </section>
    </main>
  )
}
