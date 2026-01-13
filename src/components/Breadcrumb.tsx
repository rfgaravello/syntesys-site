"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"

interface BreadcrumbItem {
  label: string        // key de tradução
  href?: string
  translate?: boolean // default true
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const t = useTranslations()

  return (
    <nav className="mb-8 text-sm text-slate-400">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => {
          const label = item.translate === false
            ? item.label
            : t(item.label)

          return (
            <li key={index} className="flex items-center space-x-2">
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-cyan-400 transition"
                >
                  {label}
                </Link>
              ) : (
                <span className="text-slate-200">{label}</span>
              )}

              {index < items.length - 1 && <span>/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
