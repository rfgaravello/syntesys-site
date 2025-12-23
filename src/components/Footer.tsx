import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <Link href="/">
          <Image
            src="/images/logo/syntesys-logo.svg"
            alt="Syntesys"
            width={120}
            height={28}
            unoptimized
          />
        </Link>

        <p className="text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Syntesys. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
