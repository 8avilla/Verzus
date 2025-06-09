"use client"

import type React from "react"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Loader2 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import MobileFilterDrawer from "@/components/mobile-filter-drawer"
import ProductFilter from "@/components/product-filter"
import { Button } from "@/components/ui/button"
import type { ProductFilterParams } from "@/lib/api-types"
import { useFilteredProducts } from "@/lib/api-hooks"
import { adaptProductDtosToProducts } from "@/lib/api-adapter"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const searchTerm = searchParams.get("search") || undefined

  // Configuración inicial de filtros basada en parámetros de URL
  const initialFilters: ProductFilterParams = {
    searchTerm,
    pageNumber: 1,
    pageSize: 12,
    sortBy: "name",
    sortOrder: "asc",
  }

  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const {
    products: productDtos,
    loading,
    error,
    pagination,
    updateFilters,
    filters,
  } = useFilteredProducts(initialFilters)

  // Convertir los DTOs de la API a nuestro modelo de producto
  const products = adaptProductDtosToProducts(productDtos)

  // Manejar cambio de página
  const handlePageChange = (pageNumber: number) => {
    updateFilters({ pageNumber })
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Manejar cambio de ordenamiento
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    const [sortBy, sortOrder] = value.split("-")
    updateFilters({ sortBy, sortOrder })
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Productos</h1>
            {searchTerm && (
              <p className="mt-2 text-gray-600">
                Resultados para: <span className="font-medium">{searchTerm}</span>
              </p>
            )}
          </div>

          <div className="flex items-center justify-between mb-6">
            <Button variant="outline" onClick={() => setIsFilterOpen(true)} className="md:hidden">
              Filtrar productos
            </Button>

            <div className="flex items-center ml-auto">
              <label htmlFor="sort" className="mr-2 text-sm">
                Ordenar por:
              </label>
              <select
                id="sort"
                className="border rounded p-1.5 text-sm"
                value={`${filters.sortBy}-${filters.sortOrder}`}
                onChange={handleSortChange}
              >
                <option value="name-asc">Nombre (A-Z)</option>
                <option value="name-desc">Nombre (Z-A)</option>
                <option value="price-asc">Precio (menor a mayor)</option>
                <option value="price-desc">Precio (mayor a menor)</option>
                <option value="createdAt-desc">Más recientes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Filtros (escritorio) */}
            <div className="hidden md:block">
              <ProductFilter initialFilters={filters} onFilterChange={updateFilters} />
            </div>

            {/* Lista de productos */}
            <div className="md:col-span-3">
              {loading ? (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
                </div>
              ) : error ? (
                <div className="rounded-lg bg-red-50 p-6 text-center">
                  <p className="text-red-600">{error}</p>
                  <Button variant="outline" className="mt-4" onClick={() => updateFilters({})}>
                    Reiniciar filtros
                  </Button>
                </div>
              ) : products.length === 0 ? (
                <div className="rounded-lg bg-gray-50 p-10 text-center">
                  <h3 className="text-lg font-medium">No se encontraron productos</h3>
                  <p className="mt-2 text-gray-600">Intenta con otros filtros o términos de búsqueda</p>
                  <Button variant="outline" className="mt-4" onClick={() => updateFilters({})}>
                    Limpiar filtros
                  </Button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>

                  {/* Paginación */}
                  {pagination.totalPages > 1 && (
                    <div className="mt-10 flex justify-center">
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="outline"
                          disabled={!pagination.hasPreviousPage}
                          onClick={() => handlePageChange(pagination.pageNumber - 1)}
                        >
                          Anterior
                        </Button>

                        <span className="text-sm">
                          Página {pagination.pageNumber} de {pagination.totalPages}
                        </span>

                        <Button
                          variant="outline"
                          disabled={!pagination.hasNextPage}
                          onClick={() => handlePageChange(pagination.pageNumber + 1)}
                        >
                          Siguiente
                        </Button>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Drawer de filtros para móvil */}
      <MobileFilterDrawer open={isFilterOpen} onClose={() => setIsFilterOpen(false)}>
        <ProductFilter
          initialFilters={filters}
          onFilterChange={(newFilters) => {
            updateFilters(newFilters)
            // Cerrar el drawer en móvil cuando se aplica un filtro
            if (Object.keys(newFilters).length > 0) {
              setIsFilterOpen(false)
            }
          }}
        />
      </MobileFilterDrawer>

      <Footer />
    </div>
  )
}
