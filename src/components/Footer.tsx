"use client"

import Image from "next/image"
import Link from "next/link"
import { useTranslations } from "next-intl"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Footer() {
  const t = useTranslations("footer")
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 bg-[#020617]">
      <div
        className="max-w-7xl mx-auto px-6
        flex flex-col md:flex-row
        items-center justify-between gap-6"
      >
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo/syntesys-logo.svg"
            alt="Syntesys"
            width={120}
            height={28}
            unoptimized
          />
        </Link>

        {/* Texto */}
        <p className="text-sm text-slate-500 text-center">
          {t("copyright", { year })}
        </p>

        {/* Language Switcher */}
        <div className="opacity-80 hover:opacity-100 transition">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
