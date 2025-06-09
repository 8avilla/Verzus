"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function SkipToContent() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <a
      href="#main-content"
      className={cn(
        "fixed left-4 top-4 z-50 -translate-y-20 rounded-md bg-black px-4 py-2 text-white transition-transform focus:translate-y-0",
      )}
    >
      Saltar al contenido principal
    </a>
  )
}
