"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingBag, X } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"
import { formatCurrency } from "@/lib/utils"
import QuantitySelector from "@/components/quantity-selector"
import SizeGuideDialog from "@/components/size-guide-dialog"
import type { Product } from "@/lib/products-data"

interface ProductQuickViewProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function ProductQuickView({ product, open, onOpenChange }: ProductQuickViewProps) {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes && product.sizes.length > 0 ? product.sizes[0] : "",
  )
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()

  // Calcular el precio con descuento si existe
  const discountedPrice = product.discountPercentage
    ? product.price - product.price * (product.discountPercentage / 100)
    : null

  const handleAddToCart = () => {
    setIsAdding(true)

    // Simular un pequeño retraso para la animación
    setTimeout(() => {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        discountPercentage: product.discountPercentage,
        freeShipping: product.freeShipping,
        image: product.image,
        quantity,
        size: selectedSize,
      })

      toast({
        title: "¡Producto añadido!",
        description: `${product.name} ${selectedSize ? `(Talla: ${selectedSize})` : ""} se ha añadido a tu carrito.`,
        type: "success",
      })

      setIsAdding(false)
      onOpenChange(false)
    }, 600)
  }

  const handleViewDetails = () => {
    router.push(`/product/${product.id}`)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px]">
        <DialogHeader>
          <DialogTitle className="text-xl">Vista rápida</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Cerrar</span>
          </DialogClose>
        </DialogHeader>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Imagen del producto */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="h-full w-full object-cover" />
          </div>

          {/* Información del producto */}
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">{product.category}</p>
              <h2 className="mt-1 text-2xl font-bold">{product.name}</h2>
              <div className="mt-2 flex flex-col">
                {product.discountPercentage ? (
                  <>
                    <p className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</p>
                    <div className="flex items-center gap-2">
                      <p className="text-xl font-medium">{formatCurrency(discountedPrice!)}</p>
                      <span className="text-sm font-medium text-green-600">{product.discountPercentage}% OFF</span>
                    </div>
                  </>
                ) : (
                  <p className="text-xl font-medium">{formatCurrency(product.price)}</p>
                )}
                {product.freeShipping && <p className="mt-1 text-sm font-medium text-green-600">Envío gratis</p>}
              </div>
            </div>

            <p className="text-gray-600">{product.description}</p>

            {/* Selector de talla (solo si el producto tiene tallas) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label htmlFor="quick-size">Talla</Label>
                  <SizeGuideDialog>
                    <button type="button" className="text-xs underline hover:text-gray-700">
                      Guía de tallas
                    </button>
                  </SizeGuideDialog>
                </div>

                <RadioGroup
                  id="quick-size"
                  value={selectedSize}
                  onValueChange={setSelectedSize}
                  className="flex space-x-2"
                >
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem value={size} id={`quick-size-${size}`} className="peer sr-only" />
                      <Label
                        htmlFor={`quick-size-${size}`}
                        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white"
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            )}

            {/* Selector de cantidad */}
            <div className="space-y-3">
              <Label htmlFor="quick-quantity">Cantidad</Label>
              <QuantitySelector value={quantity} onChange={setQuantity} maxPreset={6} />
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col space-y-3 pt-4">
              <Button className="w-full" onClick={handleAddToCart} disabled={isAdding}>
                {isAdding ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin mr-2">
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                    AÑADIENDO...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    AÑADIR AL CARRITO
                  </span>
                )}
              </Button>

              <Button variant="outline" className="w-full" onClick={handleViewDetails}>
                VER DETALLES DEL PRODUCTO
              </Button>
            </div>

            {/* Disponibilidad */}
            <div className="pt-2">
              <p className="text-sm">
                <span className="font-medium">Disponibilidad: </span>
                {product.stock && product.stock > 0 ? (
                  <span className="text-green-600">En stock ({product.stock} disponibles)</span>
                ) : (
                  <span className="text-red-600">Agotado</span>
                )}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
