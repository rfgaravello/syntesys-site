import Link from "next/link"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-slate-400">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            {item.href ? (
              <Link href={item.href} className="hover:text-cyan-400 transition">
                {item.label}
              </Link>
            ) : (
              <span className="text-slate-200">{item.label}</span>
            )}
            {index < items.length - 1 && <span>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
