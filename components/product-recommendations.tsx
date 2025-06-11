"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/components/product-card"
import { getProductsByCategory } from "@/lib/products-data"
import type { ProductDto } from "@/lib/api-types"

interface ProductRecommendationsProps {
  currentProductId: string
  category: string
  title?: string
  limit?: number
}

export default function ProductRecommendations({
  currentProductId,
  category,
  title = "PRODUCTOS RELACIONADOS",
  limit = 4,
}: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<ProductDto[]>([])

  useEffect(() => {
    // Obtener productos de la misma categoría
    const categoryProducts = getProductsByCategory(category)

    // Filtrar el producto actual y limitar la cantidad
    const filteredProducts = categoryProducts.filter((product) => product.id !== currentProductId).slice(0, limit)

    setRecommendations(filteredProducts)
  }, [currentProductId, category, limit])

  if (recommendations.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">{title}</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recommendations.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
