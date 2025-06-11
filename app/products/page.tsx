"use client"

import { useState, useEffect, useCallback } from "react"
import { useSearchParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { getProductsByCategory, getCategories } from "@/lib/products-data"
import MobileFilterDrawer from "@/components/mobile-filter-drawer"
import type { ProductDto } from "@/lib/api-types"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")?.toLowerCase()

  const categories = getCategories()
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [showDiscount, setShowDiscount] = useState(false)
  const [showFreeShipping, setShowFreeShipping] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 300000])
  const [filteredProducts, setFilteredProducts] = useState<ProductDto[]>(getProductsByCategory("Todos"))

  // Función para aplicar filtros
  const applyFilters = useCallback(() => {
    let products = getProductsByCategory(activeCategory)

    // Filtrar por descuento
    if (showDiscount) {
      products = products.filter((product) => product.discountPercentage && product.discountPercentage > 0)
    }

    // Filtrar por envío gratis
    if (showFreeShipping) {
      products = products.filter((product) => product.freeShipping)
    }

    // Filtrar por rango de precio
    products = products.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    setFilteredProducts(products)
  }, [activeCategory, showDiscount, showFreeShipping, priceRange])

  // Establecer la categoría inicial basada en los parámetros de URL
  useEffect(() => {
    if (categoryParam) {
      const matchedCategory = categories.find((cat) => cat.toLowerCase() === categoryParam)
      if (matchedCategory) {
        setActiveCategory(matchedCategory)
      }
    }
  }, [categoryParam, categories])

  // Aplicar filtros cuando cambien
  useEffect(() => {
    applyFilters()
  }, [activeCategory, showDiscount, showFreeShipping, priceRange, applyFilters])

  // Función para formatear el precio
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero de productos */}
        <section className="bg-black py-16 text-white">
          <div className="container px-4 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight">PRODUCTOS</h1>
            <p className="mx-auto max-w-2xl text-lg">
              Descubre nuestra colección de ropa deportiva urbana diseñada para superar tus límites.
            </p>
          </div>
        </section>

        {/* Filtros y productos */}
        <section className="py-16">
          <div className="container px-4">
            <div className="mb-6 flex items-center justify-between md:hidden">
              <h2 className="text-xl font-medium">Productos</h2>
              <MobileFilterDrawer
                showDiscount={showDiscount}
                setShowDiscount={setShowDiscount}
                showFreeShipping={showFreeShipping}
                setShowFreeShipping={setShowFreeShipping}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                maxPrice={300000}
                applyFilters={applyFilters}
              />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              {/* Sidebar con filtros */}
              <div className="md:col-span-1">
                <div className="sticky top-24 space-y-8">
                  <div>
                    <h3 className="mb-4 text-lg font-medium">Filtros</h3>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="discount"
                          checked={showDiscount}
                          onCheckedChange={(checked) => setShowDiscount(checked as boolean)}
                        />
                        <Label htmlFor="discount">En oferta</Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="freeShipping"
                          checked={showFreeShipping}
                          onCheckedChange={(checked) => setShowFreeShipping(checked as boolean)}
                        />
                        <Label htmlFor="freeShipping">Envío gratis</Label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-4 text-lg font-medium">Precio</h3>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 300000]}
                        max={300000}
                        step={10000}
                        value={priceRange}
                        onValueChange={setPriceRange}
                      />
                      <div className="flex justify-between text-sm">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Productos */}
              <div className="md:col-span-3">
                {/* Filtros por categoría */}
                <Tabs
                  defaultValue={activeCategory}
                  value={activeCategory}
                  onValueChange={setActiveCategory}
                  className="mb-10"
                >
                  <TabsList className="w-full justify-start overflow-x-auto">
                    {categories.map((category) => (
                      <TabsTrigger key={category} value={category} className="text-sm">
                        {category.toUpperCase()}
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {categories.map((category) => (
                    <TabsContent key={category} value={category} className="mt-6">
                      {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                          {filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                          ))}
                        </div>
                      ) : (
                        <div className="py-20 text-center">
                          <p className="mb-4 text-lg text-gray-500">
                            No se encontraron productos con los filtros seleccionados.
                          </p>
                          <Button
                            onClick={() => {
                              setActiveCategory("Todos")
                              setShowDiscount(false)
                              setShowFreeShipping(false)
                              setPriceRange([0, 300000])
                            }}
                          >
                            Restablecer filtros
                          </Button>
                        </div>
                      )}
                    </TabsContent>
                  ))}
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
