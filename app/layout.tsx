import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/toaster"
import SkipToContent from "@/components/skip-to-content"
import { WhatsAppButton } from "@/components/whatsapp-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VERZUS | Compite contigo, vence al mundo",
  description:
    "Marca deportiva urbana con una identidad minimalista y audaz que promueve una actitud competitiva, dinámica y segura.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <CartProvider>
          <SkipToContent />
          <div className="bg-black text-white text-center py-2 text-sm font-medium tracking-wide">
            ENVÍO GRATIS POR COMPRAS DESDE $300.000 COP
          </div>
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          <WhatsAppButton />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
