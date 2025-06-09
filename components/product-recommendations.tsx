"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { getProductsByCategory, type Product } from "@/lib/products-data"
import { formatCurrency } from "@/lib/utils"
import ProductBadge from "@/components/product-badge"

interface ProductRecommendationsProps {
  currentProductId: string
  category: string
  title?: string
}

export default function ProductRecommendations({
  currentProductId,
  category,
  title = "TAMBIÉN TE PUEDE INTERESAR",
}: ProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([])

  useEffect(() => {
    // Obtener productos de la misma categoría
    const categoryProducts = getProductsByCategory(category)

    // Filtrar el producto actual
    const filteredProducts = categoryProducts.filter((product) => product.id !== currentProductId)

    // Limitar a 4 productos
    setRecommendations(filteredProducts.slice(0, 4))
  }, [category, currentProductId])

  if (recommendations.length === 0) {
    return null
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recommendations.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group">
              <div className="relative overflow-hidden rounded-lg bg-white">
                {product.discountPercentage && <ProductBadge discount={product.discountPercentage} />}
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-3">
                <h3 className="font-medium">{product.name}</h3>
                <div className="mt-1">
                  {product.discountPercentage ? (
                    <div className="flex items-center gap-2">
                      <p className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</p>
                      <p className="font-medium">
                        {formatCurrency(product.price - product.price * (product.discountPercentage / 100))}
                      </p>
                    </div>
                  ) : (
                    <p className="font-medium">{formatCurrency(product.price)}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
