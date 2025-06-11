"use client"

import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import Image from "next/image"
import type { ProductDto } from "@/lib/api-types"

interface ProductCardProps extends Partial<ProductDto> {
  id?: string
}

export default function ProductCard({
  id = "example",
  name = "",
  price = 0,
  discountPercentage,
  freeShipping,
  mainImage = "",
  category,
  isNew,
  isBestSeller,
  stock = 0,
}: ProductCardProps) {
  // Calcular el precio con descuento si existe
  const discountedPrice = discountPercentage ? price - price * (discountPercentage / 100) : null

  return (
    <Link href={`/product/${id}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false} // O true si es una imagen crítica en la página de listado
        />

        {/* Badges para New y Best Seller */}
        {isNew && (
          <div className="absolute left-2 top-2 rounded-md bg-black px-2 py-1 text-xs font-medium text-white">
            NUEVO
          </div>
        )}

        {isBestSeller && (
          <div className="absolute left-2 top-2 rounded-md bg-yellow-500 px-2 py-1 text-xs font-medium text-white">
            MÁS VENDIDA
          </div>
        )}
      </div>
      <div className="mt-3">
        <p className="text-xs text-gray-500">{category?.name || ""}</p>
        <h3 className="mt-1 text-sm font-medium">{name}</h3>
        <div className="mt-1 flex flex-col">
          {discountPercentage ? (
            <>
              <p className="text-xs text-gray-500 line-through">{formatCurrency(price)}</p>
              <div className="flex items-center gap-2">
                <p className="text-base font-medium">{formatCurrency(discountedPrice!)}</p>
                <span className="text-xs font-medium text-green-600">{discountPercentage}% OFF</span>
              </div>
            </>
          ) : (
            <p className="font-medium">{formatCurrency(price)}</p>
          )}
          {freeShipping && <p className="mt-1 text-xs font-medium text-green-600">Envío gratis</p>}
        </div>
      </div>
    </Link>
  )
}
