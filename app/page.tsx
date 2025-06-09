"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import Newsletter from "@/components/newsletter"
import {
  getFeaturedProducts,
  getLeggingsProducts,
  getBestSellerProducts,
  getDiscountedProducts,
} from "@/lib/products-data"
import NewsletterPopup from "@/components/newsletter-popup"

export default function Home() {
  // Obtener productos para diferentes secciones
  const featuredProducts = getFeaturedProducts(4)
  const leggingsProducts = getLeggingsProducts(4)
  const bestSellerProducts = getBestSellerProducts(4)
  const discountedProducts = getDiscountedProducts(4)

  // Estado para el slider
  const [currentSlide, setCurrentSlide] = useState(0)
  const banners = [
    {
      image: "/images/banner-women.png",
      alt: "Nuevo Drop 15 de Mayo - Colección Femenina",
      link: "/products?category=camisetas",
    },
    {
      image: "/images/banner-men.png",
      alt: "Nuevo Restock 23 de Abril - Colección Masculina",
      link: "/products?category=camisetas",
    },
  ]

  // Función para cambiar de slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  // Cambio automático de slide cada 8 segundos (aumentado de 5 segundos)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      {/* 1. Hero Section - Banner Slider */}
      <section className="relative h-[85vh] w-full" id="main-content">
        <div className="relative h-full w-full overflow-hidden">
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-2000 ${
                index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              <Link href={banner.link} className="block h-full w-full">
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.alt}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </Link>
            </div>
          ))}

          {/* Controles del slider */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Anterior</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/40"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Siguiente</span>
            </Button>
          </div>

          {/* Indicadores */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-8 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir al slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Featured Products */}
      <section className="py-16">
        <div>
          <div className="mb-10 flex items-center justify-between px-4">
            <h2 className="text-3xl font-bold tracking-tight">PRODUCTOS DESTACADOS</h2>
            <Link href="/products" className="flex items-center text-sm font-medium">
              VER TODO <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                discountPercentage={product.discountPercentage}
                freeShipping={product.freeShipping}
                image={product.image}
                category={product.category}
                description={product.description}
                sizes={product.sizes}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Leggings Products */}
      <section className="py-16 bg-gray-50">
        <div>
          <div className="mb-10 flex items-center justify-between px-4">
            <h2 className="text-3xl font-bold tracking-tight">LEGGINGS</h2>
            <Link href="/products?category=pantalones" className="flex items-center text-sm font-medium">
              VER TODO <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {leggingsProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                discountPercentage={product.discountPercentage}
                freeShipping={product.freeShipping}
                image={product.image}
                category={product.category}
                description={product.description}
                sizes={product.sizes}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Middle Banner */}
      <section className="relative h-[60vh] bg-black">
        <Image
          src="/images/banner-middle.png"
          alt="Entrena con estilo VERZUS"
          fill
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">ENTRENA CON ESTILO</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Descubre nuestra colección diseñada para maximizar tu rendimiento sin sacrificar el estilo.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
            <Link href="/products">EXPLORAR AHORA</Link>
          </Button>
        </div>
      </section>

      {/* 5. Best Seller Products */}
      <section className="py-16">
        <div>
          <div className="mb-10 flex items-center justify-between px-4">
            <h2 className="text-3xl font-bold tracking-tight">LO MÁS VENDIDO</h2>
            <Link href="/products" className="flex items-center text-sm font-medium">
              VER TODO <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {bestSellerProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                discountPercentage={product.discountPercentage}
                freeShipping={product.freeShipping}
                image={product.image}
                category={product.category}
                description={product.description}
                sizes={product.sizes}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Discounted Products */}
      <section className="py-16 bg-gray-50">
        <div>
          <div className="mb-10 flex items-center justify-between px-4">
            <h2 className="text-3xl font-bold tracking-tight">DESCUENTOS</h2>
            <Link href="/products" className="flex items-center text-sm font-medium">
              VER TODO <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 px-4">
            {discountedProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                discountPercentage={product.discountPercentage}
                freeShipping={product.freeShipping}
                image={product.image}
                category={product.category}
                description={product.description}
                sizes={product.sizes}
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Bottom Banner */}
      <section className="relative h-[60vh] bg-black">
        <Image
          src="/images/banner-bottom.png"
          alt="Estilo urbano VERZUS"
          fill
          className="object-cover object-center opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">ESTILO URBANO</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
            Lleva tu actitud VERZUS a las calles con nuestra colección de estilo urbano.
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-white/90" asChild>
            <Link href="/products">DESCUBRIR</Link>
          </Button>
        </div>
      </section>

      {/* 8. About Section */}
      <section className="bg-gray-100 py-16">
        <div className="grid grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-lg">
              VERZUS nace de la dualidad entre el deporte y la vida urbana, entre la competición y la superación
              personal.
            </p>
            <p className="mb-6 text-lg">
              Creamos prendas minimalistas y audaces para quienes buscan constantemente superar sus límites, tanto en el
              gimnasio como en las calles.
            </p>
            <Button variant="outline" className="w-fit border-black text-black hover:bg-black hover:text-white" asChild>
              <Link href="/about">NUESTRA HISTORIA</Link>
            </Button>
          </div>
          <div className="aspect-square overflow-hidden bg-black">
            <img
              src="/images/about-image.jpg"
              alt="Filosofía VERZUS"
              className="h-full w-full object-cover opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />

      {/* Newsletter Popup */}
      <NewsletterPopup />

      {/* Footer */}
      <Footer />
    </div>
  )
}
