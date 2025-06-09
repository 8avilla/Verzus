"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ShoppingBag, CreditCard, AlertCircle } from "lucide-react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import SizeGuideDialog from "@/components/size-guide-dialog"
import QuantitySelector from "@/components/quantity-selector"
import ImageGallery from "@/components/image-gallery"
import { formatCurrency } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"
import { getProductById } from "@/lib/products-data"
import ProductRecommendations from "@/components/product-recommendations"

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const [validationErrors, setValidationErrors] = useState<{
    size?: boolean
  }>({})
  const [isAdding, setIsAdding] = useState(false)
  const [isBuyingNow, setIsBuyingNow] = useState(false)
  const { addItem } = useCart()
  const { toast } = useToast()
  const [product, setProduct] = useState(getProductById(params.id))

  // Si el producto no existe, redirigir a la página de productos
  useEffect(() => {
    if (!product) {
      router.push("/products")
    }
  }, [product, router])

  // Añadir este efecto después del useEffect existente que redirige si el producto no existe
  useEffect(() => {
    // Asegurar que la página se cargue desde la parte superior
    window.scrollTo(0, 0)
  }, [])

  // Asegurarse de que la página de detalle del producto se actualice correctamente cuando cambia el ID

  // Añadir este useEffect para actualizar el producto cuando cambia el ID del parámetro
  useEffect(() => {
    // Actualizar el producto cuando cambia el ID
    const currentProduct = getProductById(params.id)
    setProduct(currentProduct)

    // Asegurar que la página se cargue desde la parte superior
    window.scrollTo(0, 0)
  }, [params.id])

  if (!product) {
    return null
  }

  const validateSelection = (): boolean => {
    const errors: { size?: boolean } = {}

    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      errors.size = true
    }

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleAddToCart = () => {
    if (!validateSelection()) return

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
    }, 600)
  }

  const handleBuyNow = () => {
    if (!validateSelection()) return

    setIsBuyingNow(true)

    // Añadir al carrito y luego redirigir al checkout
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

    // Simular un pequeño retraso para la animación
    setTimeout(() => {
      router.push("/checkout")
    }, 600)
  }

  // Calcular el precio con descuento si existe
  const discountedPrice = product.discountPercentage
    ? product.price - product.price * (product.discountPercentage / 100)
    : null

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container px-4">
          <Link href="/products" className="mb-8 inline-flex items-center text-sm font-medium">
            <ChevronLeft className="mr-1 h-4 w-4" />
            Volver a productos
          </Link>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Galería de imágenes */}
            <ImageGallery images={product.images || [product.image]} alt={product.name} />

            {/* Información del producto */}
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500">{product.category}</p>
                <h1 className="mt-1 text-3xl font-bold">{product.name}</h1>
                <div className="mt-2 flex flex-col">
                  {product.discountPercentage ? (
                    <>
                      <p className="text-sm text-gray-500 line-through">{formatCurrency(product.price)}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-2xl font-medium">{formatCurrency(discountedPrice!)}</p>
                        <span className="text-sm font-medium text-green-600">{product.discountPercentage}% OFF</span>
                      </div>
                    </>
                  ) : (
                    <p className="text-2xl font-medium">{formatCurrency(product.price)}</p>
                  )}
                  {product.freeShipping && <p className="mt-1 text-sm font-medium text-green-600">Envío gratis</p>}
                </div>
              </div>

              <p className="text-gray-600">{product.description}</p>

              {/* Selector de talla (solo si el producto tiene tallas) */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="size" className={validationErrors.size ? "text-red-500" : ""}>
                      Talla {validationErrors.size && <span className="text-red-500">*</span>}
                    </Label>
                    <SizeGuideDialog>
                      <button type="button" className="text-xs underline hover:text-gray-700">
                        Guía de tallas
                      </button>
                    </SizeGuideDialog>
                  </div>

                  <div className={`${validationErrors.size ? "rounded-md border border-red-500 p-2" : ""}`}>
                    <RadioGroup
                      id="size"
                      value={selectedSize}
                      onValueChange={(value) => {
                        setSelectedSize(value)
                        if (validationErrors.size) {
                          setValidationErrors({ ...validationErrors, size: false })
                        }
                      }}
                      className="flex space-x-2"
                    >
                      {product.sizes.map((size) => (
                        <div key={size}>
                          <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                          <Label
                            htmlFor={`size-${size}`}
                            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-gray-200 peer-data-[state=checked]:border-black peer-data-[state=checked]:bg-black peer-data-[state=checked]:text-white"
                          >
                            {size}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    {validationErrors.size && (
                      <div className="mt-2 flex items-center text-sm text-red-500">
                        <AlertCircle className="mr-1 h-4 w-4" />
                        Elige una opción
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Selector de cantidad */}
              <div className="space-y-3">
                <Label htmlFor="quantity">Cantidad</Label>
                <QuantitySelector value={quantity} onChange={setQuantity} maxPreset={12} />
              </div>

              {/* Botones de acción */}
              <div className="flex flex-col space-y-3">
                {/* Botón de comprar ahora */}
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handleBuyNow}
                  disabled={isAdding || isBuyingNow}
                  type="button"
                >
                  {isBuyingNow ? (
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
                      PROCESANDO...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      COMPRAR AHORA
                    </span>
                  )}
                </Button>

                {/* Botón de añadir al carrito */}
                <Button
                  className="w-full"
                  size="lg"
                  variant="outline"
                  onClick={handleAddToCart}
                  disabled={isAdding || isBuyingNow}
                  type="button"
                >
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
              </div>

              {/* Características del producto */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-3 border-t pt-6">
                  <h2 className="font-medium">Características</h2>
                  <ul className="list-inside list-disc space-y-1 text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Disponibilidad */}
              <div className="border-t pt-6">
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
        </div>
      </main>

      {/* Añadir recomendaciones de productos */}
      {product && (
        <ProductRecommendations
          currentProductId={product.id}
          category={product.category}
          title="PRODUCTOS QUE TE PODRÍAN INTERESAR"
        />
      )}

      <Footer />
    </div>
  )
}
