"use client"

import Link from "next/link"
import { MessageCircle } from "lucide-react"

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/5519996210076"
      target="_blank"
      aria-label="Falar no WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center justify-center
        h-14 w-14 rounded-full
        bg-green-500 text-white
        shadow-2xl
        hover:bg-green-400
        transition-transform duration-200
        hover:scale-110
      "
    >
      <MessageCircle size={26} />
    </Link>
  )
}
