"use client"

import { Footer } from "@/components/Footer"
import { usePathname } from "next/navigation"

export function ConditionalFooter() {
  const pathname = usePathname()

  if (pathname?.startsWith("/admin")) {
    return null
  }

  return <Footer />
}
