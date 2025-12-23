'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Cpu, BarChart2, Monitor, Cloud, Rocket, Settings, Code, Archive, Heart } from 'lucide-react'

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const pathname = usePathname()
  const isServicesActive = pathname.startsWith("/services")

  const services = [
    { icon: <Cpu className="icon" />, label: "Assessoria Tecnológica", href: "/services/assessoria-tecnologica" },
    { icon: <BarChart2 className="icon" />, label: "Gestão de Projetos (PMO)", href: "/services/gestao-projetos-ti" },
    { icon: <Monitor className="icon" />, label: "Infraestrutura de TI", href: "/services/infraestrutura-ti" },
    { icon: <Cloud className="icon" />, label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { icon: <Rocket className="icon" />, label: "Transformação Digital", href: "/services/transformacao-digital" },
    { icon: <Settings className="icon" />, label: "Automação de Processos", href: "/services/automacao-processos" },
    { icon: <Code className="icon" />, label: "Desenvolvimento Web & Mobile", href: "/services/desenvolvimento-web-mobile" },
    { icon: <Archive className="icon" />, label: "Solução Documental Digital", href: "/services/solucoes-documentais" },
    { icon: <Heart className="icon" />, label: "Mentoria & Saúde Emocional", href: "/services/mentoria-saude-emocional" },
  ]

  return (
    <header className="border-b border-white/10 bg-background relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo/syntesys-logo.svg"
            alt="Syntesys - Consultoria em Tecnologia"
            width={140}
            height={32}
            priority
            unoptimized
          />
                  <div className="leading-tight">
  <span className="block text-sm font-semibold text-white">
    
  </span>
  <span className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight
            bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
    Consultoria em Tecnologia
  </span>
</div>
        </Link>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm text-text/80">
          {/* Serviços Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className={`transition ${
                isServicesActive
                  ? "text-primary font-semibold"
                  : "hover:text-primary text-text/80"
              }`}
            >
              Serviços
            </Link>

            {servicesOpen && (
              <div className="absolute top-10 left-0 w-80 rounded-2xl border border-white/10
                              bg-gradient-to-b from-surface to-background
                              shadow-2xl backdrop-blur-md
                              transition-all duration-200 ease-out animate-slide-up">
                <ul className="py-3 text-sm">
                  {services.map(({ icon, label, href }) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-white/5 transition"
                      >
                        <span>{icon}</span>
                        <span>{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/#about" className="hover:text-primary transition">
            Sobre
          </Link>

          <Link
            href="/#contact"
            className="text-primary hover:text-secondary transition"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-text/80"
          aria-label="Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-surface border-t border-white/10 px-6 py-4 space-y-4 text-text/80">
          <Link href="/services" onClick={() => setMobileOpen(false)}>
            Serviços
          </Link>

          <div className="pl-4 space-y-2 text-sm">
            {services.map(({ label, href }) => (
              <Link key={href} href={href} onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}
          </div>

          <Link href="/#about" onClick={() => setMobileOpen(false)}>
            Sobre
          </Link>

          <Link
            href="/#contact"
            className="text-primary"
            onClick={() => setMobileOpen(false)}
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  )
}
