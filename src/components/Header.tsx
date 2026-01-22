'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "./LanguageSwitcher"
import {
  Cpu,
  BarChart2,
  Monitor,
  Cloud,
  Rocket,
  Settings,
  Code,
  Archive,
  Heart
} from 'lucide-react'
import { useState, useRef } from "react"
import { useTranslations, useLocale } from 'next-intl'

export default function Header() {
  const t = useTranslations('header')
  const locale = useLocale()

  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimeout = useRef<number | null>(null)

  const pathname = usePathname()
  const isServicesActive = pathname.includes("/services")

  // Helper: prefixa locale corretamente
  const withLocale = (href: string) => `/${locale}${href}`

  const services = [
    { key: "assessoria", icon: <Cpu className="icon" />, label: t('services.items.techConsulting'), href: "/services/assessoria-tecnologica" },
    { key: "pmo", icon: <BarChart2 className="icon" />, label: t('services.items.pmo'), href: "/services/gestao-projetos-ti" },
    { key: "infra", icon: <Monitor className="icon" />, label: t('services.items.infrastructure'), href: "/services/infraestrutura-ti" },
    { key: "cloud", icon: <Cloud className="icon" />, label: t('services.items.cloud'), href: "/services/cloud-devops" },
    { key: "digital", icon: <Rocket className="icon" />, label: t('services.items.digitalTransformation'), href: "/services/transformacao-digital" },
    { key: "automation", icon: <Settings className="icon" />, label: t('services.items.automation'), href: "/services/automacao-processos" },
    { key: "web", icon: <Code className="icon" />, label: t('services.items.dev'), href: "/services/desenvolvimento-web-mobile" },
    { key: "documental", icon: <Archive className="icon" />, label: t('services.items.document'), href: "/services/solucoes-documentais" },
    { key: "mentoria", icon: <Heart className="icon" />, label: t('services.items.mentoring'), href: "/services/mentoria-saude-emocional" },
  ]

  // 🔒 Mentoria só aparece em PT
  const filteredServices = services.filter(service => {
    if (service.key === "mentoria" && locale !== "pt") return false
    return true
  })

  return (
    <header className="border-b border-white/10 bg-background relative z-50">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/images/logo/syntesys-logo.svg"
            alt={t('logo.alt')}
            width={140}
            height={32}
            priority
            unoptimized
          />

          <div className="leading-tight">
            <span className="block text-sm font-semibold text-white">
              {t('logo.tagline')}
            </span>
            <span className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              {t('logo.title')}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-text/80">

          {/* Serviços */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current)
              setServicesOpen(true)
            }}
            onMouseLeave={() => {
              closeTimeout.current = window.setTimeout(() => {
                setServicesOpen(false)
              }, 200)
            }}
          >
            <Link
              href={withLocale("/services")}
              className={`transition ${
                isServicesActive
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {t('menu.services')}
            </Link>

            {servicesOpen && (
              <div className="absolute top-10 left-0 w-80 rounded-2xl border border-white/10 bg-gradient-to-b from-surface to-background shadow-2xl backdrop-blur-md animate-slide-up">
                <ul className="py-3">
                  {filteredServices.map(({ key, icon, label, href }) => (
                    <li key={key}>
                      <Link
                        href={withLocale(href)}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-white/5"
                      >
                        {icon}
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href={withLocale("/about")}>{t('menu.about')}</Link>

          <Link href={withLocale("/contact")} className="text-primary">
            {t('menu.contact')}
          </Link>
        </nav>

        {/* Language Switcher */}
        <div className="ml-2 pl-2 border-l border-white/10 hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t px-6 py-6 space-y-6">

          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="w-full flex justify-between"
          >
            <span>{t('menu.services')}</span>
            <span>{mobileServicesOpen ? "−" : "+"}</span>
          </button>

          {mobileServicesOpen && (
            <div className="space-y-2">
              {filteredServices.map(({ key, icon, label, href }) => (
                <Link
                  key={key}
                  href={withLocale(href)}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-2"
                >
                  {icon}
                  <span>{label}</span>
                </Link>
              ))}
            </div>
          )}

          <Link href={withLocale("/about")}>{t('menu.about')}</Link>

          <Link href={withLocale("/contact")} className="text-primary">
            {t('menu.contact')}
          </Link>

          <div className="pt-4 border-t border-white/10">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  )
}
