"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, User, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import CartDrawer from "@/components/cart-drawer"
import SearchDialog from "@/components/search-dialog"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white h-28 shadow-sm w-full">
      <div className="h-full flex items-center justify-between px-4 md:px-8 lg:px-12 max-w-7xl mx-auto">
        {/* Mobile Menu Button - Only visible on mobile */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="py-4 flex flex-col">
                <div className="flex items-center justify-between">
                  <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                    <div className="h-7">
                      <Image
                        src="/images/verzus-logo.png"
                        alt="Logo Verzus"
                        width={98}
                        height={26}
                        className="h-full w-auto"
                      />
                    </div>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">Cerrar menú</span>
                  </Button>
                </div>
                <nav className="mt-8 flex flex-col space-y-4">
                  <Link
                    href="/products"
                    className="text-lg relative group"
                    style={{ color: "#e32b2b" }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    🔥 ESPECIALES
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#e32b2b] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/products?category=camisetas"
                    className="text-lg relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    CAMISETAS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/products?category=sudaderas"
                    className="text-lg relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    SUDADERAS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/products?category=pantalones"
                    className="text-lg relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    PANTALONES
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </Link>
                  <Link
                    href="/products?category=accesorios"
                    className="text-lg relative group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ACCESORIOS
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo - Left aligned */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="h-8">
              <Image
                src="/images/verzus-logo.png"
                alt="Logo Verzus"
                width={112}
                height={30}
                className="h-full w-auto"
              />
            </div>
          </Link>
        </div>

        {/* Desktop Navigation - Center aligned */}
        <nav className="hidden md:flex md:items-center md:justify-center flex-1 mx-8">
          <div className="flex items-center space-x-8">
            <Link href="/products" className="text-base relative group py-1" style={{ color: "#e32b2b" }}>
              🔥 ESPECIALES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e32b2b] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products?category=camisetas" className="text-base relative group py-1">
              CAMISETAS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products?category=sudaderas" className="text-base relative group py-1">
              SUDADERAS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products?category=pantalones" className="text-base relative group py-1">
              PANTALONES
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="/products?category=accesorios" className="text-base relative group py-1">
              ACCESORIOS
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
        </nav>

        {/* Icons - Right aligned */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <User className="h-5 w-5" />
            <span className="sr-only">Mi cuenta</span>
          </Button>
          <CartDrawer />
          <SearchDialog />
        </div>
      </div>
    </header>
  )
}
